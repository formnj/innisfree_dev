<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>
        임직원샵
        <em class="badge count">20</em>
      </h2>
      <p class="explain">이니스프리 및 AP 임직원 전용 이니스프리 제품 특가샵입니다. 구매 전 안내사항을 확인해주세요.</p>
      <Button class="btn_min_outline mt10" txt="구매 안내사항" @click="modal.open('modal_staff', 'full modal_staff')" />
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

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
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
    </div>

    <!-- 컨텐츠 X -->
    <!-- <div class="no_data">
      임직원 전용 제품이 없습니다.
    </div> -->
    <!-- //컨텐츠 X -->
  </div>
  <div id="modal_filter" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <p>혜택별</p>
        <ul class="pick_list">
          <li><Inputs _type="checkbox" _name="filter" _id="a00" _text="주름/탄력" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a01" _text="모공/피지/블랙헤드" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a02" _text="영양/토탈안티에이징" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a03" _text="트러블/리페어" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a04" _text="수분/보습/속건조" class="round_square" /></li>
        </ul>
        <p>기능성</p>
        <ul class="pick_list">
          <li><Inputs _type="checkbox" _name="filter" _id="a05" _text="미백" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a06" _text="주름개선" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a07" _text="자외선차단" class="round_square" /></li>
          <li><Inputs _type="checkbox" _name="filter" _id="a08" _text="비건인증" class="round_square" /></li>
        </ul>
        <p>공병수거</p>
        <ul class="pick_list">
          <li><Inputs _type="checkbox" _name="filter" _id="a09" _text="공병수거 가능" class="round_square" /></li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big btn_reset" txt="초기화" />
        <Button class="btn_big btn_type_02" txt="검색" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_staff" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>임직원샵 이용안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="warning">
          <h4>유의사항</h4>
          <strong>타 프로모션과 중복 적용 불가</strong>
          <ul class="list_num">
            <li><span>1</span> 온•오프 통합 쿠폰 및 기타 할인 쿠폰 중복 적용이 불가합니다.</li>
            <li><span>2</span> 구매 증정품 지급 시 본 결제 금액은 총 금액 합산에서 제외됩니다.</li>
          </ul>
          <strong>구입 수량 제한</strong>
          <ul class="list_num">
            <li><span>1</span> 한정 수량으로 많은 고객님께 혜택을 드리기 위하여 수량 제한하는 점 양해 부탁드립니다.</li>
          </ul>
          <strong>기타</strong>
          <ul class="list_num">
            <li class="point"><span>1</span> 주문/프로모션 (N+N, N+%) 제품은 부분 반품 불가합니다.</li>
            <li>
              <span>2</span> 교차 구매 여부는 프로모션에 따라 상이할 수 있습니다.<br />
              (온라인 쇼핑몰에서는 해당 제품 페이지 옵션 내 제품 교체 구매 가능하며,<br />
              프로모션에 따라 교차 구매 여부는 오프라인과 상이할 수 있습니다.)
            </li>
            <li><span>3</span> 온라인 쇼핑몰 및 오프라인 매장 재고에 따라 판매되는 종류가 다를 수 있습니다.</li>
            <li><span>4</span> 준비된 수량 소진 시에는 사전 예고 없이 종료될 수 있습니다.</li>
            <li><span>5</span> 당사 사정에 따라 사전 예고없이 비슷한 혹은 더 나은 수준의 혜택으로 대체 변경<br />될 수 있습니다.</li>
            <li><span>6</span> 행사 제외 매장 : 면세점, 제주하우스 등</li>
          </ul>
        </div>
        <div class="warning">
          <h4>그 외 이용안내</h4>
          <ul class="list_dot">
            <li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서 <br />비정상 유통 행위시(유출시) 사규에 의해 징계를 받을 수 있습니다.</li>
            <li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조 당부 드립니다.</li>
            <li>
              임직원샵 메뉴에서 판매되는 특가상품은 제조년월이 1년 이상 경과한 구형 제품일 수 있으며, 60~80% 할인된 가격으로 판매합니다.
            </li>
            <li>임직원샵 메뉴에 등록되지 않은 이니스프리의 일부 품목에 대해서는 임직원 40% 할인이 적용됩니다.</li>
            <li>P포인트 추가할인은 적용할 수 없습니다. 임직원 여러분들의 양해 부탁드립니다.</li>
            <li>임직원샵 메뉴에 있는 제품은 매월 40만원 한도 내에서 구매할 수 있습니다.</li>
            <li>
              주문 건 중 임직원샵과 일반 상품을 함께 주문하시는 경우 임직원샵 상품은 별도 배송됨을 안내드립니다.<br />(합배송은
              불가능합니다.)
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { modal, Drop_Down } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})
/* //component sample data */
</script>

<style lang="scss" scoped>
.title_wrap {
  margin-bottom: 60px;
}

.no_data {
  margin: 190px auto;
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

.modal_wrap {
  &.modal_staff {
    .modal_container {
      width: 540px;
      max-height: 680px;
      .modal_header {
        h2 {
          font-size: 20px;
          font-weight: 600;
        }
      }
      .modal_content {
        padding: 20px 30px 40px;

        .warning {
          & + .warning {
            margin-top: 30px;
          }

          h4 {
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: 600;
            color: #000;
          }

          strong {
            margin: 10px 0;
            font-size: 14px;
            font-weight: 600;
            color: #666;
            display: block;
          }

          ul {
            li {
              &.point {
                color: #ff0000;
              }
            }
          }

          .list_num {
            margin: 10px 0px;
            li {
              margin-top: 5px;
              padding-left: 21px;
              color: #888;
              font-size: 12px;
              position: relative;

              &:first-child {
                margin-top: 0;
              }

              span {
                position: absolute;
                top: 0;
                left: 7px;
              }
            }
          }

          .list_dot {
            li {
              margin-top: 10px;
              padding-left: 7px;
              font-size: 14px;
              color: #666;
              position: relative;
              &:before {
                content: '';
                width: 2px;
                height: 2px;
                background-color: #666;
                display: block;
                position: absolute;
                top: 8px;
                left: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
