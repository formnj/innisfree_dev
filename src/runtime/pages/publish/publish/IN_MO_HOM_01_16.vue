<template>
  <div class="staff_wrap">
    <section class="staff_visual">
      <span>임직원 전용</span>
      <div>
        이니스프리 임직원<br />
        AP임직원 전용 특가샵
        <span>구매 전 안내사항을 확인해주세요</span>
      </div>
      <Button txt="구매 안내사항" class="btn_notify" @click="modal.open('modal_staff', 'full modal_staff')" />
    </section>
  </div>

  <div class="inner">
    <!-- title washed -->
    <div class="title_wrap">
      <h2>
        <strong class="badge count">총 <em>32</em>건</strong>
      </h2>
      <div class="pdtSortTab_wrap">
        <div class="sortTab">
          <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom modal_sort')">추천순</button>
        </div>
        <button @click="modal.open('modal_filter', 'bottom filter')">상세검색</button>
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

    <!-- 컨텐츠 X -->
    <!-- <div class="no_content">
      임직원 전용 제품이 없습니다.
    </div> -->
    <!-- //컨텐츠 X -->
  </div>

  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div>
          <ul>
            <li class="active"><a href="#none" class="active">추천순</a></li>
            <li><a href="#none">신제품순</a></li>
            <li><a href="#none">판매량순</a></li>
            <li><a href="#none">낮은 가격순</a></li>
            <li><a href="#none">높은 가격순</a></li>
            <li><a href="#none">리뷰순</a></li>
            <li><a href="#none">판매금액순</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_filter" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>상세검색</h2>
        <button class="btn_close_x" @click="modal.close(this)">닫기</button>
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
          <ul class="bul_list">
            <li>온·오프 통합 쿠폰 및 기타 할인 쿠폰 중복 적용이 불가합니다.</li>
            <li>구매 증정품 지급 시 본 결제 금액은 총 금액 합산에서 제외됩니다.</li>
          </ul>
          <strong>구입 수량 제한</strong>
          <ul class="bul_list">
            <li>한정 수량으로 많은 고객님께 혜택을 드리기 위하여 수량 제한하는점 양해 부탁드립니다.</li>
          </ul>
          <strong>기타</strong>
          <ul class="bul_list">
            <li class="point">주문/프로모션 (N+N, N+%)제품은 부분 반품이 불가합니다.</li>
            <li>
              교차 구매 여부는 프로모션에 따라 상이할 수 있습니다.<br />
              (온라인 쇼핑몰에서는 해당 제품 페이지 옵션 내 제품 교체 구매 가능하며, 프로모션에 따라 교차 구매 여부는 오프라인과 상이할 수
              있습니다.)
            </li>
            <li>온라인 쇼핑몰 및 오프라인 매장 재고에 따라 판매되는 종류가 다를 수 있습니다.</li>
            <li>준비된 수량 소진 시에는 사전 예고없이 종료될 수 있습니다.</li>
            <li>당사 사정에 따라 사전 예고없이 비슷한 혹은 더 나은 수준의<br />혜택으로 대체 변경 될 수 있습니다.</li>
            <li>행사 제외 매장 : 면세점, 제주하우스 등</li>
          </ul>
        </div>
        <div class="warning">
          <h4>그 외 이용안내</h4>
          <ul class="bul_list">
            <li>이니스프리 임직원샵은 사내 임직원 전용 복지몰로서<br />비정상 유통 행위시(유출시) 사규에 의해 징계를 받을 수 있습니다.</li>
            <li>비정상 유통이 발생하지 않도록 임직원 여러분의 많은 협조<br />당부 드립니다.</li>
            <li>
              임직원샵 메뉴에서 판매되는 특가상품은 제조년월이 1년 이상<br />경과한 구형 제품일 수 있으며, 60~80% 할인된 가격으로<br />판매합니다.
            </li>
            <li>임직원샵 메뉴에 등록되지 않은 이니스프리의 일부 품목에<br />대해서는 임직원 40% 할인이 적용됩니다.</li>
            <li>P포인트 추가할인은 적용할 수 없습니다. 임직원 여러분들의<br />양해 부탁드립니다.</li>
            <li>임직원샵 메뉴에 있는 제품은 매월 40만원 한도 내에서 구매할 수 있습니다.</li>
            <li>
              주문 건 중 임직원샵과 일반 상품을 함께 주문하시는 경우<br />임직원샵 상품은 별도 배송됨을 안내드립니다.<br />(합배송은
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
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})

onMounted(() => {})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;

  .title_wrap {
    height: 6rem;
    margin: 0;
  }
}

.staff_wrap {
  .staff_visual {
    height: 25rem;
    padding: 4rem 0 0 2.1rem;
    letter-spacing: -0.01em;
    background: url('@inmModule/assets/images/ui/bg_staff_visual.png') no-repeat center;
    background-size: cover;
    > span {
      padding: 0.2rem 0.5rem;
      color: #fff;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.4rem;
      background: #000;
      display: inline-block;
    }
    > div {
      margin-top: 1.3rem;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.6rem;
      color: #000;
      span {
        display: block;
        margin-top: 0.5rem;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #888;
      }
    }
    > button {
      height: auto;
      margin-top: 3rem;
      background: none;
      display: flex;
      align-items: center;
      :deep(em) {
        padding: 0;
        color: #000;
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 1.6rem;
        letter-spacing: -0.01em;
        font-family: 'Pretendard';
      }
      &:before {
        display: inline-block;
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 0.3rem;
        background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 250px auto;
        background-position: -210px -20px;
      }
    }
  }
}

.no_content {
  padding: 10rem 0;
}

.modal_wrap {
  &.modal_sort {
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
        padding: 0;
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
  &.modal_staff {
    .modal_container {
      width: 100%;
      max-height: 100%;
      .modal_header {
        h2 {
          font-size: 18px;
          font-weight: 500;
        }
      }
      .modal_content {
        padding: 3rem 2.1rem 6rem;
        .warning {
          &:first-child {
            margin-bottom: 3rem;
          }
          h4 {
            margin-bottom: 1.5rem;
            font-size: 1.6rem;
            font-weight: 500;
          }
          strong {
            margin-bottom: 1rem;
            font-size: 12px;
            font-weight: 600;
            color: #666;
            display: block;
          }
          .bul_list {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            li {
              margin: 0;
              padding-left: 0.5rem;
              font-size: 1.2rem;
              font-weight: 400;
              line-height: 1.6rem;

              &.point {
                color: #eb5b54;

                &:before {
                  background-color: #eb5b54;
                }
              }

              &:before {
                width: 0.2rem;
                height: 0.2rem;
                background: #666;
              }
            }
          }

          &:last-child {
            .bul_list {
              li {
                font-size: 1.3rem;
                line-height: 2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
