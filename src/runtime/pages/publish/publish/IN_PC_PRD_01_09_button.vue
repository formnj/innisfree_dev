<template>
  <div class="inner">
    <!--
    각 케이스 별로 prod_detail_info 안의 내용만 가져가서(<div class="prod_detail_info">제외)
    PC_PRD_01_09의 prod_detail_info에 넣어서 사용
    -->

    <!-- 단일 옵셥 일시품절 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <p><strong>블랙티 유스 인핸싱 앰플 30mL</strong></p>
        <dl class="quantity_control">
          <dt>
            <span class="name">수량</span>
            <div class="count">
              <Quantity _id="detail" quantity="0" _disabled="true" />
            </div>
          </dt>
          <dd>
            <strong class="fc_red">일시품절</strong>
            <Button class="btn_outline btn_min" txt="입고알림 신청" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')" />
          </dd>
        </dl>
      </div>
      <div class="total_price">
        <span>총 수량<em>0</em>개</span>
        <span
          >합계<span><em>0</em>원</span></span
        >
      </div>
      <ProductBottomButtons :useStock="true" />
      <!-- 입고알림 신청 -->
    </div>
    <!-- 단일 옵셥 일시품절 -->

    <!-- 옵션/추가구성품 있음 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <div class="option">
          <div class="select_tit">
            <span class="essential">옵션선택 (필수)</span>
            <Inputs _type="checkbox" _text="품절제품제외" />
          </div>
          <ProdSelectbox
            _placeholder="옵션을 선택해주세요."
            :options="[
              { val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true },
              { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
            ]" />

          <div class="select_tit">
            <span>추가구성품할인 (선택)</span>
            <span>구매가능수량<em>2</em>개</span>
          </div>
          <ProdSelectbox
            _placeholder="추가구성품을 선택해주세요."
            :options="[
              { val: 'op3', name: 'op1', txt: '알로에', extraPrice: '4,900' },
              { val: 'op4', name: 'op1', txt: '상품명 상품명 상품명 상품명 상품명 상품명 상품명', extraPrice: '9,000' },
              { val: 'op5', name: 'op1', txt: '상품명 상품명 상품명 상품명 상품명', extraPrice: '7,000', soldout: true, stockAlert: true }
            ]" />

          <ProdSelectbox _placeholder="추가구성품을 선택해주세요." _disabled="disabled" />

          <ul class="selected_list">
            <li v-for="(item, idx) in sample_prod_selected_list.slice(0, 2)" :key="idx">
              <span class="name"><em v-if="item.isExtra">추가구성</em>{{ item.name }}</span>
              <div class="box">
                <div class="quantity_control">
                  <div class="count">
                    <Quantity _id="detail_1" :quantity="1" />
                  </div>
                </div>
                <span class="price"
                  >{{ item.price }}원 <span class="cost">{{ item.cost }}원</span></span
                >
              </div>
              <button type="button" class="btn_del">옵션 삭제</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="total_price">
        <span>총 수량<em>2</em>개</span>
        <span
          >합계<span><em>60,000</em>원</span></span
        >
      </div>
      <ProductBottomButtons />
      <!-- 기본(장바구니/바로구매) -->
    </div>
    <!-- //옵션/추가구성품 있음 -->

    <!-- 옵션 + 일시품절 -->
    <div class="prod_detail_info">
      <div class="prod_option">
        <div class="option">
          <div class="select_tit">
            <span class="essential">옵션선택 (필수)</span>
            <Inputs _type="checkbox" _text="품절제품제외" />
          </div>
          <ProdSelectbox
            _placeholder="옵션을 선택해주세요."
            :options="[
              { val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true },
              { val: 'op2', name: 'op', txt: '2호 피치 베이지', soldout: true, stockAlert: true }
            ]" />
        </div>
      </div>
      <p class="txt fc_red"><strong>일시품절</strong></p>
      <ProductBottomButtons :useStock="true" />
      <!-- 입고알림 신청 -->
    </div>
    <!-- //옵션 + 일시품절 -->

    <!-- 출시예정 -->
    <div class="prod_detail_info">
      <p class="txt fc_red"><strong>출시예정</strong></p>
      <ProductBottomButtons :useStock="true" />
      <!-- 입고알림 신청 -->
    </div>
    <!-- 출시예정 -->

    <!-- 판매중지 -->
    <div class="prod_detail_info">
      <p class="txt fc_red"><strong>판매중지</strong></p>
      <ProductBottomButtons :useDisabled="true" />
      <!-- 구매불가 -->
    </div>
    <!-- 판매중지 -->

    <!-- 구매하기 플로팅 영역 : 옵션/추가구성품 -->
    <div class="prod_detail_info">
      <div class="floating_cart_wrap on">
        <div class="inner">
          <Button class="btn_big confirm" txt="구매하기" @click="toggleStickyOption" />
          <div class="header">
            <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
            <div class="btn_wrap">
              <button type="button" class="btn_share" @click="shareUI">공유하기</button>
              <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
            </div>
          </div>
          <div class="contents">
            <div class="cart_area">
              <div class="option">
                <!-- 옵션 및 추가상품 -->
                <div class="select_tit">
                  <span class="essential">옵션선택 (필수)</span>
                  <Inputs _type="checkbox" _text="품절제품제외" />
                </div>
                <ProdSelectbox
                  _placeholder="옵션을 선택해주세요."
                  :options="[
                    { val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true },
                    { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
                  ]" />
                <div class="select_tit">
                  <span>추가구성품할인 (선택)</span>
                  <span>구매가능수량<em>2</em>개</span>
                </div>
                <ProdSelectbox
                  _placeholder="추가구성품을 선택해주세요."
                  :options="[
                    { val: 'op3', name: 'op1', txt: '알로에', extraPrice: '4,900' },
                    { val: 'op4', name: 'op1', txt: '상품명 상품명 상품명 상품명 상품명 상품명 상품명', extraPrice: '9,000' },
                    {
                      val: 'op5',
                      name: 'op1',
                      txt: '상품명 상품명 상품명 상품명 상품명',
                      extraPrice: '7,000',
                      soldout: true,
                      stockAlert: true
                    }
                  ]" />
                <ProdSelectbox _placeholder="추가구성품을 선택해주세요." _disabled="disabled" />
                <!-- 옵션 및 추가상품 -->
              </div>

              <!-- 우측 선택 옵션 리스트 -->
              <div class="selected_area">
                <p>옵션을 선택해주세요.</p>
                <ul class="selected_list">
                  <li v-for="(item, idx) in sample_prod_selected_list.slice(0, 2)" :key="idx">
                    <span class="name"><em v-if="item.isExtra">추가구성</em>{{ item.name }}</span>
                    <div class="box">
                      <div class="quantity_control">
                        <div class="count">
                          <Quantity _id="detail_1" :quantity="1" />
                        </div>
                      </div>
                      <span class="price"
                        >{{ item.price }}원 <span class="cost">{{ item.cost }}원</span></span
                      >
                    </div>
                    <button type="button" class="btn_del">옵션 삭제</button>
                  </li>
                </ul>
              </div>
              <!-- //우측 선택 옵션 리스트 -->
            </div>

            <div class="btn_area">
              <div class="total_price">
                <span>총 수량<em>2</em>개</span>
                <span
                  >합계<span><em>60,000</em>원</span></span
                >
              </div>
              <div class="btn_wrap">
                <Button class="btn_big" txt="장바구니" @click="cartUI" />
                <Button class="btn_big confirm" txt="바로구매" @click="modal.open('bottom_cart', 'bottom bottom_cart buy')" />
              </div>
              <p class="text_notify">옵션을 선택하지 않고 입고알림 신청을 하시면 옵션에 상관 없이 제품 입고 시 알림을 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //구매하기 플로팅 영역 : 옵션/추가구성품 -->

    <!-- 구매하기 플로팅 영역 : 단품 일시품절 -->
    <div class="prod_detail_info">
      <div class="floating_cart_wrap on">
        <div class="inner">
          <Button class="btn_big" txt="입고알림 신청" @click="toggleStickyOption" />
          <div class="header">
            <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
            <div class="btn_wrap">
              <button type="button" class="btn_share" @click="shareUI">공유하기</button>
              <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
            </div>
          </div>
          <div class="contents">
            <div class="cart_area">
              <div class="option">
                <ul class="selected_list">
                  <li>
                    <span class="name">그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</span>
                    <div class="box">
                      <strong class="fc_red">일시품절</strong>
                      <span class="price">17,300원</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="btn_area">
              <div class="btn_wrap">
                <Button class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')" />
              </div>
              <p class="text_notify">옵션을 선택하지 않고 입고알림 신청을 하시면 옵션에 상관 없이 제품 입고 시 알림을 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //구매하기 플로팅 영역 : 단품 일시품절 -->

    <!-- 구매하기 플로팅 영역 : 옵션 일시품절 -->
    <div class="prod_detail_info">
      <div class="floating_cart_wrap on">
        <div class="inner">
          <Button class="btn_big" txt="입고알림 신청" @click="toggleStickyOption" />
          <div class="header">
            <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
            <div class="btn_wrap">
              <button type="button" class="btn_share" @click="shareUI">공유하기</button>
              <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
            </div>
          </div>
          <div class="contents">
            <div class="cart_area">
              <div class="option">
                <!-- 옵션 -->
                <div class="select_tit">
                  <span class="essential">옵션선택 (필수)</span>
                  <Inputs _type="checkbox" _text="품절제품제외" />
                </div>
                <ProdSelectbox
                  _placeholder="옵션을 선택해주세요."
                  :options="[{ val: 'op1', name: 'op', txt: '1호 샐먼 베이지', soldout: true, stockAlert: true }]" />
                <!-- 옵션 -->
              </div>

              <!-- 우측 선택 옵션 리스트 -->
              <div class="selected_area">
                <p>좌측 옵션 셀렉트박스에서 입고 알림신청이 가능합니다.</p>
              </div>
              <!-- //우측 선택 옵션 리스트 -->
            </div>

            <div class="btn_area"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- //구매하기 플로팅 영역 : 옵션 일시품절 -->

    <!-- 구매하기 플로팅 영역 : 출시예정 -->
    <div class="prod_detail_info">
      <div class="floating_cart_wrap on">
        <div class="inner">
          <Button class="btn_big" txt="입고알림 신청" @click="toggleStickyOption" />
          <div class="header">
            <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
            <div class="btn_wrap">
              <button type="button" class="btn_share" @click="shareUI">공유하기</button>
              <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
            </div>
          </div>
          <div class="contents">
            <div class="cart_area">
              <div class="option">
                <ul class="selected_list">
                  <li>
                    <span class="name">그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</span>
                    <div class="box">
                      <strong class="fc_red">출시예정</strong>
                      <span class="price">17,300원</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="btn_area">
              <div class="btn_wrap">
                <Button class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')" />
              </div>
              <p class="text_notify">옵션을 선택하지 않고 입고알림 신청을 하시면 옵션에 상관 없이 제품 입고 시 알림을 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //구매하기 플로팅 영역 : 출시예정 -->

    <!-- 구매하기 플로팅 영역 : 판매중지 -->
    <div class="prod_detail_info">
      <div class="floating_cart_wrap on">
        <div class="inner">
          <Button class="btn_big" txt="구매불가" disabled />
          <div class="header">
            <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
            <div class="btn_wrap">
              <button type="button" class="btn_share" @click="shareUI">공유하기</button>
              <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
            </div>
          </div>
          <div class="contents">
            <div class="cart_area">
              <div class="option">
                <ul class="selected_list">
                  <li>
                    <span class="name">그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</span>
                    <div class="box">
                      <strong class="fc_red">판매중지</strong>
                      <span class="price">17,300원</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="btn_area">
              <div class="btn_wrap">
                <Button class="btn_big" txt="구매불가" disabled />
              </div>
              <p class="text_notify">옵션을 선택하지 않고 입고알림 신청을 하시면 옵션에 상관 없이 제품 입고 시 알림을 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //구매하기 플로팅 영역 : 판매중지 -->
  </div>

  <ProductStockAlertModal />
  <!-- 입고알림 신청 모달 -->

  <!-- 공유 모달 -->
  <div id="modal_share" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>공유하기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">URL이 복사되었습니다.</div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //공유 모달 -->

  <!-- PC 찜 토스트 팝업 -->
  <div id="toast_zzim" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">찜 목록에 추가되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //PC 찜 토스트 팝업 -->

  <!-- PC 찜 해제 토스트 팝업 -->
  <div id="toast_zzim_unset" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">찜 목록에 삭제되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //PC 찜 해제 토스트 팝업 -->
</template>

<script setup>
import { sample_prod_selected_list } from '@inmModule/test/data/publish/dummyData'
import { modal, toast_pop } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

const shareUI = () => {
  modal.open('modal_share', 'alert')
}

const zzimUI = (e) => {
  const btn = e.target
  btn.classList.toggle('on')
  if (btn.classList.contains('on')) {
    modal.open('toast_zzim', 'toast')
  } else {
    modal.open('toast_zzim_unset', 'toast')
  }
  toast_pop(2000)
}
</script>

<style lang="scss" scoped>
.prod_detail_info {
  width: 680px;
  margin-bottom: 100px;

  .prod_option {
    padding: 20px 0;
    border-top: 1px solid #eee;

    p {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 20px;
      color: #333;
    }

    .option {
      width: 100%;

      label.check {
        font-size: 16px;
        line-height: 20px;
      }
    }

    & + p.txt {
      padding-top: 0;
      border-top: 0;
    }
  }

  .prod_select {
    margin-bottom: 10px;
  }

  .total_price {
    padding: 20px 0 30px;
    border-top: 1px solid #f5f5f5;
  }

  :deep(.selected_list) {
    li {
      display: block;
      position: relative;

      .name {
        font-size: 13px;
        display: block;
        em {
          font-size: 13px;
        }
      }

      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .quantity_control {
        width: auto;
      }

      .price {
        margin: 10px 0 0;
        text-align: right;
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        display: block;
      }

      .cost {
        font-size: 10px;
        font-weight: 400;
      }

      .btn_del {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }

  p.txt {
    padding: 20px 0;
    font-size: 18px;
    text-align: right;
    border-top: 1px solid #eee;
  }
}

.quantity_control {
  width: 100%;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .count {
    width: 122px;

    .count_wrap {
      :deep(.input_wrap) {
        .input {
          input {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  dd {
    button {
      margin-left: 10px;
    }
  }
}

.floating_cart_wrap {
  width: 100%;
  transition: all 0.3s;

  &.on {
    .inner {
      & > button {
        top: -60px;
      }
    }
  }

  .inner {
    width: 1280px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #000;
    position: relative;

    & > button {
      width: 280px;
      padding: 0 30px;
      position: absolute;
      top: -60px;
      right: -1px;
      justify-content: space-between;
      align-items: center;
      transition: top 0.3s;

      :deep(em) {
        padding: 0;
        font-size: 16px;
      }

      &:disabled {
        background-color: #666;

        :deep(em) {
          color: #aaa;
        }
      }

      &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(135deg);
        transition: all 0.2s;
        position: relative;
        top: 5px;
      }
    }

    .header {
      padding: 20px 30px;
      font-size: 16px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn_wrap {
        display: flex;
        gap: 15px;

        .btn_share,
        .btn_like {
          width: 32px;
          height: 32px;
          font-size: 0;
          text-align: center;
          flex: none;

          &:before {
            content: '';
            width: 32px;
            height: 32px;
            vertical-align: middle;
            display: inline-block;
          }
        }

        .btn_share:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -170px -170px / 250px auto no-repeat;
        }

        .btn_like:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -215px -324px / 250px auto no-repeat;
        }

        .btn_like.on:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -215px -360px / 250px auto no-repeat;
        }

        :deep(.btn_big):disabled {
          background-color: #666;
          em {
            color: #aaa;
          }
        }
      }
    }

    .contents {
      padding: 30px;
      display: flex;

      .cart_area {
        width: 920px;
        display: flex;

        & > * {
          width: 50%;
          max-height: 340px;
          padding-right: 20px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #e5e5e5;
            border-radius: 5px;
          }
          &::-webkit-scrollbar-track {
            background-color: transparent;
          }

          & + * {
            padding-left: 19px;
            padding-right: 0;
            border-left: 1px solid #eee;
          }
        }

        .option {
          .selected_list {
            margin-bottom: 10px;
          }
        }

        .selected_area {
          & > p {
            padding: 90px 0;
            color: #aaa;
            text-align: center;
          }
        }

        .selected_list {
          width: 100%;
          margin-top: 0;

          li {
            .name {
              font-size: 16px;
            }

            .price {
              font-size: 16px;

              .cost {
                font-size: 14px;
              }
            }
          }
        }
      }

      .btn_area {
        padding-left: 20px;
        margin-left: 20px;
        border-left: 1px solid #eee;
        flex: 1;

        .total_price {
          padding: 0 0 20px;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .btn_wrap {
          display: flex;
          flex-direction: column;
          gap: 3px;

          button {
            width: 100%;

            &:disabled {
              background-color: #666;

              :deep(em) {
                color: #aaa;
              }
            }
          }
        }

        .text_notify {
          margin-top: 20px;
        }
      }
    }
  }

  &.open {
    .inner {
      & > button {
        &:after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
  }
}

.modal_review_report:deep {
  .modal_container {
    background-color: red;
  }
}
</style>
