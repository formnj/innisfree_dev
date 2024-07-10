<template>
  <!-- title washed -->
  <div class="title_wrap">
    <div>
      <h2>
        스킨케어
        <em class="badge count">20</em>
      </h2>
    </div>

    <div class="pdtSortTab_wrap">
      <div class="sortTab">
        <button class="btn_dropdown" @click="Drop_Down()">추천순</button>
        <ul>
          <li><a href="#none" class="active">추천순</a></li>
          <li><a href="#none">신제품순</a></li>
          <li><a href="#none">판매량순</a></li>
          <li><a href="#none">낮은 가격순</a></li>
          <li><a href="#none">높은 가격순</a></li>
          <li><a href="#none">리뷰순</a></li>
          <li><a href="#none">판매금액순</a></li>
        </ul>
      </div>
      <button @click="modal.open('modal_filter', 'detailSearch filter')">상세검색</button>
    </div>
  </div>
  <!-- //title washed -->

  <div class="list_wrap">
    <ul class="goods_list">
      <li v-for="(item, idx) in sample_goods" :key="idx">
        <GoodsItem :item="item" :link="item.link" />
      </li>
    </ul>
  </div>
  <div class="paging">
    <div>
      <a href="#none" class="first">처음으로</a>
      <a href="#none">1</a>
      <a href="#none">2</a>
      <a href="#none" class="active">3</a>
      <a href="#none">4</a>
      <a href="#none">5</a>
      <a href="#none" class="last">마지막으로</a>
    </div>
  </div>

  <!-- 필터 모달 -->
  <div id="modal_filter" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
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
        <ul>
          <li>
            <Inputs _type="checkbox" _name="filter" _id="a20" _text="공병수거 가능" class="round_square" />
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_reset" txt="초기화" />
        <Button class="btn_big confirm" txt="99개 제품보기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //필터 모달 -->

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { modal, Drop_Down } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="scss" scoped>
.confirm {
  flex: 1 !important;
}
.sortList {
  margin-bottom: 30px;

  dt {
    margin-bottom: 10px;
    color: #999999;
    font-size: 12px;
    line-height: 1.32em;
    letter-spacing: -0.01em;
  }

  dd {
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      li {
        label {
          padding-left: 0;

          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
          }

          span {
            height: 30px;
            padding: 0 20px;
            color: #aaaaaa;
            font-weight: 600;
            font-size: 14px;
            border-radius: 5px;
            background-color: #f5f5f5;
            line-height: 1.29em;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;

            &.active {
              color: #ffffff;
              background: #00bc70;
            }
          }
        }
      }
    }
  }
}
</style>
