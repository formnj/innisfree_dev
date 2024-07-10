<template>
  <!-- 프로필 등록 전 -->
  <div class="inner">
    <div class="profile_wrap">
      <div>
        <strong>김이니님, 아직 프로필 등록을 하지 않으셨네요!</strong>
        <p>
          지금 바로 프로필을 등록하고, 나에게 딱 맞는 맞춤형 정보와
          <em>500P</em>까지 챙겨가세요!
        </p>
      </div>
      <Button class="btn_outline" txt="프로필등록하기" />
    </div>
  </div>
  <!-- //프로필 등록 전 -->

  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>리뷰</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <Tabs tabType="type_03" :item="[{ txt: '작성 가능한 리뷰' }, { txt: '내가 작성한 리뷰' }]" :tabidx="1" />

    <div class="list_wrap">
      <div class="list_top">
        <Selectbox
          class="ar"
          :options="[
            { val: 'value', txt: '옵션01' },
            { val: 'value', txt: '옵션02' }
          ]" />
      </div>

      <ul class="review_list">
        <li v-for="(item, idx) in sample_review.slice(0, 2)" :key="idx">
          <div class="review_header">
            <div class="user_info">
              <span class="name">{{ item.user }}</span>
              <Reviewpoint :width="item.rate" />
              <span class="date">
                {{ item.date }}&nbsp;
                <em v-if="item.date">({{ item.date }})</em>
              </span>
              <span class="buy_cnt">
                <em>{{ item.count }}</em>
                회 구매
              </span>
            </div>
            <div class="btn_wrap ar">
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </div>
          </div>

          <div class="review_cont">
            <p v-html="item.txt"></p>
          </div>

          <GoodsItem :item="item.goods" class="type_column" />
        </li>
      </ul>
    </div>
  </div>

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

import { sample_review } from '@inmModule/test/data/publish/dummyData'

/* //component sample data */
</script>

<style lang="scss" scoped>
.review_list {
  border-top: 2px solid #000;
  > li {
    padding: 40px 0;
    border-bottom: 1px solid #f5f5f5;
  }
}

.list_wrap {
  margin-top: 50px;
}

.profile_wrap {
  margin-top: 60px;
  padding: 50px 35px;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    strong {
      color: #333;
      font-size: 20px;
      font-weight: 600;
    }
    p {
      margin-top: 10px;
      color: #666;
      font-size: 14px;
      em {
        color: #00bc70;
      }
    }
  }
  .btn_outline {
    border-radius: 1px;
  }
}

.review_cont {
  padding: 0 0 30px;
}

:deep(.goods_item) {
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 0px 0px 3px 3px;

  &.type_column {
    position: relative;
    .img_wrap {
      position: static;
      .thumb {
        width: 68px;
        height: 90px;
      }
      .btnIconBox {
        background-color: transparent;
        display: flex;
        position: absolute;
        left: auto;
        right: 20px;
        bottom: auto;
        top: 50%;
        gap: 1rem;
        justify-content: start;
        transform: translateY(-50%);
        button {
          padding: 0;
          em {
            width: 24px;
            height: 24px;
            padding: 0;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-size: 250px auto;
          }
          &.btn_heart {
            em {
              background-position: -140px -40px;
            }
            &.on {
              em {
                background-position: -180px -70px;
              }
            }
          }
          &.btn_cart em {
            background-position: -170px -40px;
          }
          &.btn_buy em {
            background-position: -200px -40px;
          }
        }
      }
    }
  }
}
</style>
