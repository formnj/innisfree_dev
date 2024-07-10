<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
      <!-- breadcrumb -->
      <Breadcrumb :item="breadcrumbData" />
      <div class="content_wrap">
        <div class="content">
          <NuxtPage />
        </div>
        <!-- payment -->
        <div class="payment">
          <div class="inner">
            <h4>결제 예정 금액</h4>
            <div>
              <dl>
                <dt>주문금액</dt>
                <dd><strong>203,080</strong>원</dd>
              </dl>
              <dl>
                <dt>할인/차감 금액</dt>
                <dd><em>- 0원</em></dd>
              </dl>
              <dl>
                <dt>배송비</dt>
                <dd>무료</dd>
              </dl>
              <dl>
                <dt>
                  적립 예정 뷰티포인트
                  <Icons class="tooltip" txt="툴팁" @click="modal.open('accum_point', 'layer tooltip')" />
                  <div id="accum_point" class="modal_wrap">
                    <!-- 뷰티포인트 적립안내 툴팁 -->
                    <div class="modal_container">
                      <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                      <div class="modal_content">
                        <h2>뷰티포인트 적립 혜택 안내</h2>
                        <ul class="bul_list">
                          <li>뷰티포인트는 수취확인 후 <strong>15일 이후</strong>에 적립됩니다.</li>
                          <li>아모레퍼시픽 뷰티포인트 비회원인 경우 적립되지 않습니다.</li>
                          <li>멤버십데이 쿠폰 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                          <li>일부 쿠폰은 사용 시 뷰티포인트는 적립되지 않습니다.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="overlay" @click="modal.close(this)"></div>
                  </div>
                  <!-- //뷰티포인트 적립안내 툴팁 -->
                </dt>
                <dd><strong>+2,030</strong> P</dd>
              </dl>
              <div class="ord_total_price">
                <dl>
                  <dt>최종 결제 금액</dt>
                  <dd><strong>203,080</strong>원</dd>
                </dl>
              </div>
              <ul>
                <li>
                  <div>
                    <span>[필수] 구매 조건 및 결제 진행 동의</span>
                    <Inputs _type="checkbox" _text="" />
                  </div>
                  <em>
                    주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매 진행에 동의 하시겠습니까? (전자상거래법 제8조 제2항)
                  </em>
                  <Button txt="주문제한알림 자세히보기" class="btn_min_outline" @click="modal.open('ord_limit', 'alert ord_limit')" />
                </li>
                <li class="refund">
                  <div>
                    <span>[선택] 개인정보 수집/이용돈의<br />(환불계좌)</span>
                    <Inputs _type="checkbox" _text="" />
                  </div>
                  <Button
                    txt="개인정보 수집 자세히보기"
                    class="btn_min_outline"
                    @click="modal.open('refund_modal', 'alert refund_modal')" />
                </li>
                <li>
                  <p>
                    해당 상품 구매 계약자가 미성년자일 경우<br />
                    법정대리인이 동의하지 아니하면 미성년자 본인<br />
                    또는 법정대리인은 이 계약을 취소할 수 있습니다.
                  </p>
                </li>
              </ul>
            </div>

            <Button txt="203,080원 결제하기" class="btn_ confirm" />
          </div>
        </div>
        <!-- //payment -->
      </div>

      <!-- modal layer -->
      <div id="ord_limit" class="modal_wrap">
        <div class="modal_container">
          <div class="modal_header">
            <h2>주문제한 안내</h2>
            <button class="btn_close" @click="modal.close(this)">닫기</button>
          </div>
          <div class="modal_content">
            <strong> 이용에 불편을 드려 대단히 죄송합니다. </strong>
            <p>
              한정된 수량으로 더 많은 고객님들께<br />
              혜택을 드리기 위하여, 동일 주소지 대량 주문 시<br />
              1인 고객으로 집계하여 해당 아이디에 대한<br />
              주문이 제한될 수 있습니다
            </p>
          </div>
        </div>
        <div class="overlay" @click="modal.close(this)"></div>
      </div>

      <div id="refund_modal" class="modal_wrap refund_modal">
        <div class="modal_container">
          <div class="modal_header">
            <h2>개인정보 수집/이용동의 (환불계좌)</h2>
            <button class="btn_close" @click="modal.close(this)">닫기</button>
          </div>
          <div class="modal_content">
            <strong>
              당사는 환불처리를 위해 필요한 계좌정보를 필요한 최소한의 범위 내에서 다음 목적으로 개인정보를 수집하고 있습니다.
            </strong>
            <ul class="bul_list star">
              <li>수집항목 : 성명, 계좌정보(예금주명, 은행, 계좌번호)</li>
              <li>수집.이용 목적 : 주문취소나 품절 시 환불목적</li>
              <li>이용.보유기간</li>
            </ul>
            <ul class="bul_list dash">
              <li>환불 진행 고객 : 환불 완료 후 즉시 삭제</li>
              <li>미환불 고객 : 구매확정 시 즉시 삭제</li>
              <li>미입금 고객 : 주문취소 시점 즉시 삭제</li>
            </ul>
          </div>
        </div>
        <div class="overlay" @click="modal.close(this)"></div>
      </div>
      <!-- // modal layer -->
    </div>
    <FooterPc />
  </div>
</template>

<script setup>
import { breadcrumbData } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { ref, onMounted } from '#imports'

const layoutType = ref(true)

/* 개발에 맞게 수정해주세요 : 하위페이지의 data-layout 값이 default이면 lnb 비노출 */
onMounted(() => {
  if (document.querySelector('.title_wrap').getAttribute('data-layout') == 'default') {
    layoutType.value = false
  }
})
/* //개발에 맞게 수정해주세요 */
</script>

<style lang="scss" scoped>
#wrap {
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

#container {
  height: 100%;
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

.content_wrap {
  max-width: 1320px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .content {
    flex: 1;
    :deep(.customBen) {
      margin: 100px 0 0;
      overflow: hidden;
      position: relative;
      .img {
        img {
          vertical-align: top;
        }
      }
      .textWrap {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        .text {
          height: 100%;
          margin: 0 375px 0 80px;
          color: #fff;
          font-size: 28px;
          line-height: 1.43;
          letter-spacing: -0.7px;
          position: relative;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          .t1,
          .t2 {
            white-space: nowrap;
          }
        }
      }
    }
  }
  .payment {
    width: 360px;
    height: 100%;
    margin-top: 165px;
    margin-left: 30px;
    position: sticky;
    top: 100px;
    h4 {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 600;
    }
    .inner {
      display: flex;
      flex-direction: column;
      gap: 15px;
      > div {
        padding: 30px 25px 0;
        border: 1px solid #eee;
        flex: 1;
        dl {
          color: #333;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          & + dl {
            margin-top: 15px;
          }
          dt {
            display: flex;
            align-items: center;
            button.tooltip {
              width: 16px;
              height: 16px;
              margin-left: 6px;
              background-position: 0 -260px;
              vertical-align: top;
            }
          }
          dd {
            strong {
              font-weight: 500;
            }
            em {
              color: #00bc70;
              font-weight: 600;
            }
          }
        }
        .ord_total_price {
          margin-top: 30px;
          margin-bottom: 30px;
          padding-top: 30px;
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
        > ul {
          margin-left: -25px;
          margin-right: -25px;
          padding: 30px 25px 0;
          background: #fcfcfd;
          border-top: 1px solid #eeeeee;
          > * + * {
            padding-top: 30px;
          }
          li {
            padding-bottom: 30px;
            border-bottom: 1px solid #eeeeee;
            &:last-of-type {
              border-bottom: 0;
            }
            > div {
              margin-bottom: 5px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              span {
                color: #333;
                font-size: 16px;
              }
              .input_wrap {
                flex: 0 auto;
              }
            }
            em {
              color: #666;
              font-size: 13px;
              line-height: 1.5;
              display: block;
            }
            > :deep(button.btn_min_outline) {
              height: 24px;
              margin-top: 15px;
              border: 1px solid #999;
              em {
                padding: 0 8px !important;
                color: #999;
                font-size: 10px;
                font-weight: 600;
              }
            }
            > p {
              color: #333;
              line-height: 1.57;
            }
            &.refund {
              display: none;
              &.active {
                display: block;
              }
            }
          }
        }
      }
      > :deep(button.btn_) {
        height: 50px;
        em {
          font-size: 16px;
        }
      }
    }
  }
}

.ord_limit {
  .modal_container {
    .modal_header {
      h2 {
        font-size: 20px;
        font-weight: 500;
      }
    }

    .modal_content {
      strong {
        color: #666;
        font-size: 13px;
      }
      p {
        margin-top: 8px;
        color: #666;
        font-size: 13px;
        line-height: 1.5;
      }
    }
  }
}

.modal_wrap {
  &.refund_modal {
    .modal_container {
      .modal_header {
        h2 {
          font-size: 20px;
          font-weight: 500;
        }
      }
      .modal_content {
        strong {
          font-size: 16px !important;
          font-weight: 400;
        }
        ul {
          &.star {
            margin-top: 20px;
            color: #888;
            font-size: 13px;
            li {
              &:last-of-type {
                font-size: 16.8px;
                font-weight: bold;
              }
            }
          }
          &.dash {
            margin-top: 5px;
            padding-left: 12px;
            color: #888;
            font-size: 13px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
