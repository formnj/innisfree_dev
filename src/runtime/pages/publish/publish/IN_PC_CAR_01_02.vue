<template>
  <div class="inner flex">
    <div class="cart_area">
      <div class="title_wrap">
        <div>
          <h2>장바구니</h2>
        </div>
      </div>

      <!-- cart list -->
      <div class="list_wrap">
        <div class="allChk_wrap">
          <Inputs _type="checkbox" _text="전체선택" />
          <div class="btn_wrap">
            <Button class="btn_min_outline" txt="선택삭제" />
          </div>
        </div>

        <!-- no data --
        <ul class="cart_list">
          <li>
            <p class="no_data">
              <strong>장바구니에 담긴 제품이 없습니다.</strong>
              <span>하단의 특가혜택 제품들을 살펴보세요.</span>
            </p>
          </li>
        </ul>
        -- //no data -->

        <!-- 프로모션 -->
        <h3 class="list_tit">[1+1] 깨끗하게 EASY! 클렌징 티슈 쟁여놓기 (6/1~6/30)</h3>
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 4)" :key="idx">
            <CartItem :item="item" />
          </li>
        </ul>
        <div class="prom_box">
          <div class="info">
            <p class="tit">1개 구매 시 30%, 2개 구매 시 40%, 3개이상 구매 시 50%</p>
            <button type="button" class="btn_link_arrw" @click="modal.open('modal_promotion', 'alert promotion')">
              프로모션 제품 더보기
            </button>
            <button type="button" class="btn_text_green" @click="modal.open('modal_prom_noti', 'full')">유의사항</button>
          </div>
          <div class="noti">
            <p>N+% 제품은 같은 행사내 제품들과 교차구매가 가능합니다.</p>
          </div>
        </div>

        <div class="prom_box">
          <div class="info">
            <p class="tit">20개 구매 시 반값할인</p>
            <button type="button" class="btn_link_arrw" @click="modal.open('modal_promotion', 'alert promotion')">
              프로모션 제품 더보기
            </button>
            <button type="button" class="btn_text_green" @click="modal.open('modal_prom_noti', 'full')">유의사항</button>
          </div>
          <div class="noti">
            <p>N+N 제품은 같은 행사내 제품들과 교차구매가 가능합니다.</p>
          </div>
        </div>

        <div class="prom_box">
          <div class="info">
            <p class="tit">최종결제금액 40,000원 이상 결제시 6,900원에 구매가능</p>
            <button type="button" class="btn_text_green" @click="modal.open('modal_prom_noti', 'full')">유의사항</button>
          </div>
        </div>
        <!-- //프로모션 -->

        <!-- 추가구성품할인 -->
        <h3 class="list_tit">추가구성품할인</h3>
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(1, 2)" :key="idx">
            <CartItem :item="item" />

            <ul class="cart_list">
              <li v-for="(item2, idx2) in sample_goods.slice(2, 5)" :key="idx2">
                <CartItem :item="item2" class="extra" />
              </li>
            </ul>
          </li>
        </ul>
        <!-- //추가구성품할인 -->

        <!-- 첫구매전용, 체험단전용 -->
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(8, 10)" :key="idx">
            <CartItem :item="item" />
          </li>
        </ul>
        <!-- //첫구매전용, 체험단전용 -->

        <!-- 샘플마켓 -->
        <h3 class="list_tit">샘플마켓</h3>
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(6, 8)" :key="idx">
            <CartItem :item="item" class="sample" />
          </li>
        </ul>
        <!-- //샘플마켓 -->

        <!-- 판매중지 -->
        <h3 class="list_tit">판매중지제품 <strong class="fc_red">※ 구매불가</strong></h3>
        <ul class="cart_list">
          <li v-for="(item, idx) in sample_goods.slice(5, 6)" :key="idx">
            <CartItem :item="item" />
          </li>
        </ul>
        <!-- //판매중지 -->
      </div>
      <!-- //cart list -->

      <!-- custom banner -->
      <div class="custom_banner">
        <a href="#none">
          <img src="/images/sam/bg_cart_banner.png" alt="" />
          <div class="text">
            <div class="t1" style="color: #fff">토스페이 전용카드로 혜택을~</div>
            <div class="t2" style="color: #fff">5,000원 결제일 캐시백!!</div>
          </div>
        </a>
      </div>
      <!-- //custom banner -->
    </div>

    <div class="payment_area">
      <div class="log_box">
        <h4>로그인</h4>
        <p>로그인을 하시면 지 보고있는 제품을<br />나중에도 확인하실 수 있습니다.</p>
        <Button class="btn_outline" txt="로그인하기" />
      </div>

      <div class="payment">
        <h4>결제정보</h4>
        <ul class="bul_list star">
          <li><strong>최종 할인혜택(쿠폰,결제금액조건 할인 등)은 주문서에서 적용됩니다.</strong></li>
          <li style="color: #eb5b54"><strong>최종결제금액에 따라 증정품 내역이 장바구니와 달라질 수 있습니다.</strong></li>
        </ul>
        <dl>
          <dt>주문금액</dt>
          <dd><strong>261,000</strong>원</dd>
        </dl>
        <dl class="desc">
          <dt>제품할인</dt>
          <dd><strong>-61,000</strong>원</dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd>무료</dd>
        </dl>
        <div class="ord_total_price">
          <dl>
            <dt>결제예정금액</dt>
            <dd><strong>200,000</strong>원</dd>
          </dl>
        </div>
      </div>
      <Button class="btn_big confirm" txt="주문하기" />
    </div>
  </div>

  <ProductStockAlertModal />
  <!-- 입고알림 신청 -->

  <!-- 프로모션 유의사항 -->
  <div id="modal_prom_noti" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>프로모션 유의사항</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <!-- BO 텍스트입력 내용 출력, 개발시 아래 내용 삭제 -->
        <p style="font-weight: bold; margin-bottom: 10px">1. 최종 4만원 이상 결제 금액 기준(*할인 후 금액)</p>
        <p>1. 로미 캠핑 의자 구입 금액 : 최종 결제 금액 4만원에 미포함</p>
        <p>2. 쿠폰 사용 : 쿠폰 할인 금액 제외한 최종 결제 금액 기준 포함</p>
        <p>3. 뷰티포인트 사용 : 최종 결제 금액에 포함</p>
        <p>4. 1+1 및 할인 제품 : 할인 금액 제외하고 최종 결제 금액에 포함</p>
        <p>5. 카드사/페이 제휴 : 제휴 할인 적용 전 금액 기준</p>
        <!-- //BO 텍스트 입력 내용 출력 -->
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //프로모션 유의사항 -->

  <!-- 증정품 모달 -->
  <div id="modal_gift" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>증정품안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="giveaway_list">
          <dl>
            <dt>
              <img src="/images/sam/giveaway_01.png" />
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_02.png" />
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_03.png" />
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //증정품 모달 -->

  <!-- 프로모션 모달 -->
  <div id="modal_promotion" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>프로모션 제품</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <section>
          <button class="promo_tit" type="button" :class="{ active: promotion_table }" @click="promotion_table = !promotion_table">
            2개 이상 구매 시 최대 [50% 할인]
          </button>
          <div v-if="promotion_table" class="table">
            <table>
              <caption>
                프로모션 제품 설명 및 추가
              </caption>
              <colgroup>
                <col width="50%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>조건</th>
                  <th>할인액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1개 구매시</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>2개 구매시</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>3개 구매시</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>4개 구매시</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>5개 구매시</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <p class="promo_tit">프로모션 제품 더 담기</p>
          <ul class="cart_list">
            <li v-for="(item, idx) in sample_goods.slice(0, 2)" :key="idx">
              <div class="cart_item" :class="{ option_type: idx === 0 }">
                <div class="row">
                  <div class="prod_img">
                    <Inputs _type="checkbox" :isDisabled="item.status ? true : false" />
                    <a href="#none" class="thumb" :class="item.status">
                      <img :src="item.img" />
                    </a>
                  </div>

                  <div class="prod_info">
                    <a class="name" href="#none"
                      ><strong>{{ item.cate }}</strong> {{ item.name }}</a
                    >
                    <p v-if="item.hasNoti" class="fc_red">{{ item.hasNoti }}</p>
                    <button
                      v-if="item.status && item.status == 'sold_out'"
                      type="button"
                      class="btn_text_green"
                      @click="modal.open('modal_stock_alert', 'full modal_stock_alert')">
                      입고알림신청
                    </button>
                    <ProdSelectbox
                      v-if="item.hasOption"
                      _placeholder="옵션을 선택해주세요"
                      :options="[
                        { val: 'op1', name: 'op', txt: '베이지' },
                        { val: 'op2', name: 'op', txt: '베이비핑크' },
                        { val: 'op3', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명', soldout: true, stockAlert: true }
                      ]" />
                  </div>

                  <div v-if="!item.status || !item.status == 'sold_out'" class="prod_price">
                    <div class="quantity_area">
                      <Quantity v-if="!item.hasOption" _id="Quantity" quantity="1" />
                      <span v-if="item.isLimited" :class="item.isLimited.over ? 'err' : ''">최대선택{{ item.isLimited.limit }}개까지</span>
                      <!-- 최대선택 갯수 넘을 경우 err 클래스 추가-->
                    </div>
                    <div v-if="!item.isSample" class="price_wrap">
                      <span class="cost">{{ item.cost }}원</span>
                      <span class="price">{{ item.price }}원</span>
                    </div>
                  </div>

                  <span v-if="item.status && item.status == 'sold_out'">일시품절</span>
                  <!-- 상태 : 일시품절, 판매중지, 출시예정 -->

                  <Icons v-if="item.delete || item.delete === undefined" class="btn_del" />
                </div>

                <ul v-if="item.hasOption" class="selected_list">
                  <li v-for="(list, i) in sample_prod_selected_list.slice(0, 3)" :key="i">
                    <span class="name">{{ list.name }}</span>
                    <div class="box">
                      <div class="quantity_control small">
                        <div class="count">
                          <Quantity _id="detail_1" :quantity="1" />
                        </div>
                      </div>
                      <span class="price"
                        >{{ list.price }}원 <span class="cost">{{ list.cost }}원</span></span
                      >
                    </div>
                    <button type="button" class="btn_del">옵션 삭제</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div class="modal_footer">
        <Button class="btn_ btn_big" txt="취소" @click="modal.close(this)" />
        <Button class="btn_big confirm" txt="장바구니 담기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //프로모션 모달 -->
</template>

<script setup>
import { sample_goods, sample_prod_selected_list } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})

const promotion_table = ref(false)
</script>

<style lang="scss" scoped>
.inner {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  &.flex {
    display: flex;
    justify-content: space-between;
  }

  & > .title_wrap {
    width: 100%;
    margin-top: 12px;
  }

  .title_wrap {
    & > h3 {
      font-size: 24px;
    }

    & > .btn_link_arrw {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }
}

.cart_area {
  width: 890px;

  .title_wrap {
    margin-bottom: 60px;
  }

  .list_wrap {
    border-bottom: 1px solid #eee;

    .allChk_wrap {
      padding-bottom: 20px;
      border-bottom: 2px solid #000;
    }

    .cart_list {
      border-top: 0;

      & + .cart_list {
        margin-top: 40px;
        border-top: 1px solid #000;
      }
    }

    .list_tit {
      margin-top: 40px;
      font-size: 18px;
      font-weight: 600;

      & + .cart_list {
        margin-top: 20px;
        border-top: 1px solid #000;
      }

      strong {
        padding-left: 10px;
        font-size: 12px;
        line-height: 16px;
        vertical-align: middle;
      }
    }
  }

  .prom_box {
    padding: 12px 20px;
    border: 1px solid #eee;

    & + .prom_box {
      margin-top: 10px;
    }

    .info {
      position: relative;

      .tit {
        font-size: 13px;
        color: #333;
        line-height: 28px;
      }

      .btn_link_arrw {
        font-weight: 600;
        color: #000;
        text-decoration: underline;

        &:after {
          width: 6px;
          height: 6px;
          border-color: #000;
          position: relative;
          top: -1px;
        }
      }
    }

    .noti {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #f5f5f5;

      p {
        font-size: 12px;
        color: #999;
      }
    }

    .btn_text_green {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}

.payment_area {
  width: 320px;
  height: 100%;
  margin-top: 162px;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;

  & > div {
    padding: 30px 25px;

    & + div {
      border-top: 1px solid #eee;
    }
  }

  .log_box {
    background-color: #fcfcfd;
    h4 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;

      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background: url('@inmModule/assets/images/common/icon_split.png') -480px -220px no-repeat;
        display: inline-block;
        vertical-align: middle;
      }
    }

    p {
      margin: 10px 0 25px;
      line-height: 22px;
    }

    .btn_outline {
      width: 100%;
      background-color: #fff !important;
      border-color: #eee;
    }
  }

  .payment {
    h4 {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 600;
    }

    ul {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }

    dl {
      color: #333;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & + dl {
        margin-top: 15px;
      }

      &.desc {
        dt {
          font-weight: 400;

          &:before {
            content: '';
            width: 6px;
            height: 6px;
            margin-right: 5px;
            border-left: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            display: inline-block;
            position: relative;
            top: -4px;
          }
        }
      }

      dt {
        font-weight: 600;
      }

      dd {
        strong {
          font-weight: 500;
        }
      }
    }

    .ord_total_price {
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      dt {
        color: #000;
      }
      dd {
        color: #ff0000;
        font-size: 18px;
        font-weight: 600;
        strong {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }
  }

  button {
    width: 100%;
  }
}

.custom_banner {
  margin: 100px 0;

  a {
    width: 100%;
    display: block;
    position: relative;

    .text {
      position: absolute;
      left: 60px;
      top: 50%;
      transform: translateY(-50%);

      .t1 {
        font-size: 32px;
      }

      .t2 {
        padding-top: 10px;
        font-size: 32px;
        font-weight: 600;
      }
    }
  }
}

.modal_wrap.full {
  :deep(.modal_container) {
    width: 540px;

    .modal_content {
      padding: 20px 30px 40px;
      font-size: 16px;
    }

    .modal_footer {
      padding: 0;

      button {
        width: 100%;
      }
    }
  }
}
</style>
