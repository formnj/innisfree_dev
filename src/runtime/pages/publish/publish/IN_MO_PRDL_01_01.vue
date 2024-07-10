<template>
  <div class="inner">
    <div class="title_wrap">
      <div>
        <h2>
          <strong class="badge count">총 <em>32</em>건</strong>
        </h2>
      </div>
      <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom modal_sort')">추천순</button>
        </div>
        <button @click="modal.open('modal_filter', 'bottom filter')">필터</button>
      </div>
    </div>
    <div class="list_wrap">
      <div class="no_content">
        <p>조건에 맞는 제품이 없습니다.</p>
        <span>다른 조건으로 변경해보세요.</span>
        <Button class="btn_min btn_outline btn_reset" txt="초기화" />
      </div>
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>

  <!-- 정렬 기준 모달 -->
  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">판매금액순</a></li>
            <li><a href="#none">판매수량순</a></li>
            <li><a href="#none">할인율순</a></li>
            <li><a href="#none">최신순</a></li>
            <li><a href="#none">리뷰많은순</a></li>
            <li><a href="#none">낮은가격순</a></li>
            <li><a href="#none">높은가격순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //정렬 기준 모달 -->

  <!-- 필터 모달 -->
  <div id="modal_filter" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>필터</h2>
        <button class="btn_close_x" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <p>혜택별</p>
        <ul class="pick_list">
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a00" _text="증정" class="round_square" />
          </li>
        </ul>

        <p>고민별</p>
        <ul class="pick_list">
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a01" _text="각질/피부결" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a02" _text="미백" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a03" _text="비건인증" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a04" _text="수분/보습/속건조" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a05" _text="영양/토탈안티에이징" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a06" _text="잡티/피부톤" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a07" _text="주름/탄력" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a08" _text="주름개선" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a09" _text="트러블/리페어" class="round_square" />
          </li>
        </ul>

        <p>유형별</p>
        <ul class="pick_list">
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a10" _text="스킨케어" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a11" _text="메이크업" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a12" _text="남성" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a13" _text="헤어/바디/펫" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a14" _text="미용소품" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a15" _text="기획세트" class="round_square" />
          </li>
        </ul>

        <p>기능성</p>
        <ul class="pick_list">
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a16" _text="자외선차단" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a17" _text="주름개선" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a18" _text="미백" class="round_square" />
          </li>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a19" _text="비건인증" class="round_square" />
          </li>
        </ul>

        <p>공병수거</p>
        <ul class="pick_list">
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a20" _text="공병수거 가능" class="round_square" />
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_reset" txt="초기화" />
        <Button class="btn_big btn_type_02" txt="99개 제품보기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //필터 모달 -->

  <!-- 선택 가능 필터 없음 modal.open('alert_no_filter', 'alert') -->
  <div id="alert_no_filter" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">선택 가능한 필터가 없습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //선택 가능 필터 없음 -->

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-menu-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '스킨케어')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.goods_list {
  margin: 0;
  gap: 4rem 0.3rem;
  justify-content: space-between;

  > li {
    width: 16.5rem;
    padding: 0;
  }
}

.modal_sort {
  .modal_container {
    border-top-left-radius: 20px 20px;
    border-top-right-radius: 20px 20px;

    .modal_header {
      width: 100%;
      height: 29.4px;
      padding: 0;
      border-bottom: 0;
      position: relative;

      .btn_close {
        top: 50%;
        right: 50%;
        transform: translate(-50%, -50%);

        &::before {
          width: 67px;
          height: 5px;
          border-radius: 100px;
          border-top: 0;
          background-color: #dddddd;
          position: absolute;
          transform: rotate(0deg);
        }

        &::after {
          display: none;
        }
      }
    }

    .modal_content {
      padding: 0 0 34px !important;
      height: calc(100% - 29.4px);
      overflow-y: auto;

      div {
        ul {
          li {
            padding: 16px 28px;
            border-bottom: 1px solid #f5f5f5;

            &:last-of-type {
              border-bottom: 0;
            }

            &.active {
              display: flex;
              align-items: center;
              justify-content: space-between;

              &::after {
                content: '';
                width: 22.4px;
                height: 22.4px;
                background-image: url('@inmModule/assets/images/common/icon_split.png');
                background-repeat: no-repeat;
                background-size: 250px;
                background-position: -203px -94px;
                display: inline-block;
              }

              a {
                color: #00bc70;
                font-weight: 700;
              }
            }

            a {
              color: #000000;
              font-weight: 300;
              font-size: 16px;
              line-height: 17.5px;
              letter-spacing: -0.14px;
            }
          }
        }
      }
    }
  }
}

.no_content {
  padding-bottom: 7.8rem;

  span {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #999;
    display: block;
  }

  :deep(.btn_reset) {
    margin-top: 2rem;
    padding: 0 2rem;
    width: auto;

    em {
      padding: 0;
      font-size: 1.2rem;
      line-height: 1.6rem;
      position: relative;

      &:after {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        margin-left: 0.5rem;
        vertical-align: middle;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -23.5rem -13.5rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }
  }
}
</style>
