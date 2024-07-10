<template>
  <div class="prod_info">
    <Sticker :item="prodInfo.sticker" />
    <div class="name">
      <p class="top_text">{{ prodInfo.topText }}</p>
      <strong>BEST</strong> {{ prodInfo.name }}
    </div>
    <div class="info_box">
      <div v-if="!isMo" class="price">
        <!-- PC 가격 표시 위치 -->
        <em>{{ prodInfo.price }}</em>
        <span class="sale">{{ prodInfo.sale }}</span>
        <span class="cost">{{ prodInfo.cost }}</span>
      </div>
      <div class="rate">
        <a href="javascript:void(0);" @click="gotoReview">
          <Reviewpoint width="90" rate="4.7" />
          <span v-if="!isMo" class="review_cnt">{{ prodInfo.cntReview }}건 리뷰</span>
          <span v-if="isMo" class="review_cnt">리뷰 {{ prodInfo.cntReview }}</span>
        </a>
        <span v-if="isMo" class="review_cnt">포스팅 {{ prodInfo.cntPost }}</span>
      </div>
    </div>
    <div class="review_summary">
      <p>
        <span class="btn_wrap"><button type="button" @click="gotoReview">더보기</button></span>
        {{ prodInfo.summaryReview }}
      </p>
    </div>
    <div v-if="isMo" class="info_box">
      <!-- MO 가격 표시 위치 -->
      <div class="price">
        <em>{{ prodInfo.price }}</em>
        <span class="sale">{{ prodInfo.sale }}</span>
        <span class="cost">{{ prodInfo.cost }}</span>
      </div>
      <em>일시품절</em>
    </div>
  </div>
</template>
<script setup>
import { prodInfo } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  isMo: {
    //모바일 여부
    type: Boolean,
    default: false
  }
})
const gotoReview = () => {
  const el = document.getElementsByClassName('tab_cont_review')[0]
  let contPadding
  !props.isMo
    ? (contPadding =
        document.getElementsByClassName('gnb_wrap')[0].offsetHeight + document.getElementsByClassName('tab_wrap')[0].offsetHeight)
    : (contPadding = 100)
  const contsTop = el.getBoundingClientRect().y + window.pageYOffset - contPadding
  window.scrollTo({ top: contsTop, behavior: 'smooth' })
}
</script>
<style lang="scss" scoped>
.prod_info {
  width: 680px;

  :deep(.sticker) {
    margin-bottom: 32px;

    em {
      height: 22px;
      font-size: 12px;
      line-height: 1.5em;
    }
  }

  .name {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.014px;
    color: #000000;

    .top_text {
      margin-bottom: 5px;
      font-size: 18px;
      line-height: 24px;
    }

    strong {
      font-weight: 600;
    }
  }

  .info_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0 30px;

    .price {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: -0.01em;
      }

      em {
        font-weight: 700;
        color: #000;
      }

      .sale {
        color: #ff0000;
      }

      .cost {
        color: #999;
        text-decoration: line-through;
      }
    }

    .rate {
      display: flex;
      align-items: center;

      a {
        display: inline-flex;
      }
    }
  }

  .review_summary {
    margin-bottom: 30px;
    display: flex;
    --line-count: 2;

    p {
      line-height: 20px;
      font-size: 13px;
      color: #666;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: var(--line-count);
      -webkit-box-orient: vertical;
    }

    .btn_wrap {
      float: right;
      display: flex;
      align-items: flex-end;
      height: 100%;
      shape-outside: inset(calc(100% - 20px) 0 0 0);

      button {
        line-height: 20px;
        margin-left: 5px;
        font-weight: 700;
        text-decoration-line: underline;
      }
    }
  }
}
</style>
