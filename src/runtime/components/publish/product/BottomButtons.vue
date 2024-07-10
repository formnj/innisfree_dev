<template>
  <!-- IN_PC_PRD_01_09_button, IN_MO_PRD_01_09_button 참고 -->
  <div class="btn_wrap">
    <button type="button" class="btn_share" @click="shareUI">공유하기</button>
    <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
    <Button v-if="useCart && !useStock && !useDisabled" class="btn_big" txt="장바구니" @click="cartUI" />
    <Button
      v-if="useBuy && !useStock && !useDisabled"
      class="btn_big confirm"
      txt="바로구매"
      @click="modal.open('bottom_cart', 'bottom bottom_cart buy')" />
    <Button v-if="useStock" class="btn_big" txt="입고알림 신청" @click="stockAlertUI" />
    <Button v-if="useDisabled" class="btn_big" txt="구매불가" disabled />
  </div>

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

  <!-- MO 찜 토스트 팝업 -->
  <div class="toast_heart">
    <p>찜</p>
  </div>
  <!-- //MO 찜 토스트 팝업 -->

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

  <!-- 장바구니 -->
  <div id="bottom_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="select_tit">
          <span class="essential">옵션선택 (필수)</span>
          <Inputs _type="checkbox" _text="품절제품제외" />
        </div>
        <ProdSelectbox
          _placeholder="옵션을 선택해주세요"
          :options="[
            { val: 'op1', name: 'op', txt: '베이지' },
            { val: 'op2', name: 'op', txt: '베이비핑크' },
            { val: 'op3', name: 'op', txt: '상품명 상품명 상품명 상품명 상품명', soldout: true, stockAlert: true },
            { val: 'op4', name: 'op', txt: '러브베이지' },
            { val: 'op5', name: 'op', txt: '다크로즈' },
            { val: 'op6', name: 'op', txt: '코랄' }
          ]" />

        <div class="select_tit">
          <span>추가구성품할인 (선택)</span>
          <span>구매가능수량<em>2</em>개</span>
        </div>
        <ProdSelectbox
          _placeholder="추가구성품을 선택해주세요."
          :options="[
            { val: 'op1', name: 'op2', txt: '알로에', extraPrice: '4,900' },
            { val: 'op2', name: 'op2', txt: '상품명 상품명 상품명 상품명 상품명 상품명 상품명', extraPrice: '9,000' },
            { val: 'op3', name: 'op2', txt: '상품명 상품명 상품명 상품명 상품명', extraPrice: '7,000', soldout: true, stockAlert: true }
          ]" />

        <ProdSelectbox
          _placeholder="추가구성품을 선택해주세요."
          _disabled="disabled"
          :options="[
            { val: 'op1', name: 'op2', txt: '알로에', extraPrice: '4,900' },
            { val: 'op2', name: 'op2', txt: '상품명 상품명 상품명 상품명 상품명 상품명 상품명', extraPrice: '9,000' },
            { val: 'op3', name: 'op2', txt: '상품명 상품명 상품명 상품명 상품명', extraPrice: '7,000', soldout: true, stockAlert: true }
          ]" />

        <ul class="selected_list">
          <li v-for="(item, idx) in sample_prod_selected_list" :key="idx">
            <span class="name"><em v-if="item.isExtra">추가구성</em>{{ item.name }}</span>
            <div class="box">
              <div class="quantity_control" :class="isMo ? 'small' : ''">
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

        <div class="total_price">
          <span>총 수량<em>2</em>개</span>
          <span
            >합계금액<span><em>60,000</em>원</span></span
          >
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="장바구니" @click="[modal.open('toast_add_cart', 'toast'), toast_pop(2000)]" />
        <Button class="btn_big confirm" txt="바로구매" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //장바구니 -->

  <!-- 입고알림 신청 리스트 -->
  <div id="modal_stock_list" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="op_list">
          <li>
            <input id="prd01" type="radio" name="prd" />
            <label for="prd01" class="soldout">
              <em>일시품절</em>
              <span class="name">1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지</span>
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">
                입고알림 신청
              </button>
            </label>
          </li>
          <li>
            <input id="prd02" type="radio" name="prd" />
            <label for="prd02" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">
                입고알림 신청
              </button>
            </label>
          </li>
          <li>
            <input id="prd03" type="radio" name="prd" />
            <label for="prd03" class="soldout">
              <em>일시품절</em>
              <span class="name">2호 피치 베이지</span>
              <button type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')">
                입고알림 신청
              </button>
            </label>
          </li>
        </ul>
        <p class="noti">아래의 입고알림 신청 버튼으로 입고알림을 완료하시면 옵션에 상관 없이 제품이 입고되면 알림을 드립니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="입고알림 신청" @click="modal.open('modal_stock_alert', 'alert modal_stock_alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //입고알림 신청 리스트 -->

  <ProductStockAlertModal />
  <!-- 입고알림 신청 -->

  <!-- 장바구니 담기 완료 -->
  <div id="toast_add_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">장바구니담기가 완료 되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- 장바구니 담기 완료 -->
</template>

<script setup>
import { sample_prod_selected_list } from '@inmModule/test/data/publish/dummyData'
import { modal, toast_pop } from '@inmModule/assets/js/common-ui'
const props = defineProps({
  useCart: {
    //장바구니 버튼 사용여부
    type: Boolean,
    default: true
  },
  useBuy: {
    //바로구매 버튼 사용여부
    type: Boolean,
    default: true
  },
  useStock: {
    //입고알림 신청 버튼 사용여부
    type: Boolean,
    default: false
  },
  useDisabled: {
    //구매불가 버튼 사용여부
    type: Boolean,
    default: false
  },
  isMo: {
    type: Boolean, //모바일 여부
    default: false
  }
})

const shareUI = () => {
  if (!props.isMo) {
    modal.open('modal_share', 'alert')
  }
}

const zzimUI = (e) => {
  const btn = e.target
  const toast = document.getElementsByClassName('toast_heart')[0]

  btn.classList.toggle('on')

  if (props.isMo) {
    toast.classList.add('active')
    if (btn.classList.contains('on')) {
      toast.classList.add('on')
    } else {
      toast.classList.remove('on')
    }
    setTimeout(() => {
      toast.classList.remove('active')
    }, 2500)
  } else {
    if (btn.classList.contains('on')) {
      modal.open('toast_zzim', 'toast')
    } else {
      modal.open('toast_zzim_unset', 'toast')
    }
    toast_pop(2000)
  }
}

const cartUI = () => {
  if (props.isMo) {
    modal.open('bottom_cart', 'bottom bottom_cart')
  } else {
    modal.open('toast_add_cart', 'toast')
    toast_pop(2000)
  }
}

const stockAlertUI = () => {
  if (props.isMo) {
    modal.open('modal_stock_list', 'bottom modal_stock_list')
  } else {
    modal.open('modal_stock_alert', 'alert modal_stock_alert')
  }
}
</script>

<style lang="scss" scoped>
.btn_wrap {
  width: 100%;
  display: flex;

  & > button {
    font-size: 1.6rem;
    font-weight: 600;
    flex: 1;
  }

  .btn_share,
  .btn_like {
    width: 6rem;
    height: 6rem;
    font-size: 0;
    text-align: center;
    background: #333;
    flex: none;

    &:before {
      content: '';
      width: 3.2rem;
      height: 3.2rem;
      vertical-align: middle;
      display: inline-block;
    }
  }

  .btn_share:before {
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -14rem -36.5rem / 25rem auto no-repeat;
  }

  .btn_like:before {
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -17.5rem -36.5rem / 25rem auto no-repeat;
  }

  .btn_like.on:before {
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -21rem -36.5rem / 25rem auto no-repeat;
  }

  :deep(.btn_big):disabled {
    background-color: #666;
    em {
      color: #aaa;
    }
  }
}

.toast_heart {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 19;
  display: none;

  p {
    font-size: 0;
    width: 10rem;
    height: 10rem;
    background: url('@inmModule/assets/mo_images/common/toast_heart.png') 0 -10rem / 20rem auto no-repeat;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: heartOn 2.5s ease-in;

    &:before {
      content: '';
      width: 10rem;
      height: 10rem;
      background: url('@inmModule/assets/mo_images/common/toast_heart.png') -10rem -10rem / 20rem auto no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      animation: heartBgOn 2.5s ease-in;
    }
  }

  &.active {
    display: block;
  }

  &.on {
    p {
      background: url('@inmModule/assets/mo_images/common/toast_heart.png') 0 0 / 20rem auto no-repeat;

      &:before {
        background: url('@inmModule/assets/mo_images/common/toast_heart.png') -10rem 0 / 20rem auto no-repeat;
      }
    }
  }
}

@keyframes heartOn {
  10% {
    transform: translate(-50%, -50%) scale(1.1);
  }

  40% {
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes heartBgOn {
  10% {
    transform: scale(1.05);
    opacity: 1;
  }

  40% {
    transform: scale(1);
    opacity: 1;
  }

  90% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}

.modal_wrap {
  &.alert {
    .modal_content {
      padding: 3rem 2rem;

      .sub_tit {
        font-size: 1.3rem;
        color: #00bc70;
        margin-bottom: 0.6rem;
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.4rem;

        & + .txt {
          margin-top: 1rem;
        }
      }

      .txt {
        font-size: 1.3rem;
        color: #666;
        line-height: 2rem;
        display: block;

        em {
          color: #00bc70;
          font-weight: bold;
        }
      }
    }
  }
}

.modal_stock_list {
  .modal_container {
    .modal_content {
      padding: 0 2.1rem 3rem;

      .op_list {
        li {
          & + li {
            border-top: 1px solid #f5f5f5;
          }

          input {
            display: none;

            &:checked + label {
              background: #f3f3f3;
            }
          }

          label {
            width: 100%;
            font-size: 13px;
            padding: 14px 0;
            display: flex;
            align-items: center;
            cursor: pointer;

            &.soldout {
              color: #aaa;
            }

            .name {
              flex: 1;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }

            em {
              padding-right: 5px;
              font-size: 12px;
              color: #ff0000;
            }

            .btn_txt {
              padding-left: 5px;
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
              letter-spacing: -0.12px;
              color: #000;
              text-decoration: underline;
              position: relative;
              z-index: 3;
            }
          }
        }
      }

      .noti {
        margin-top: 10px;
        padding-left: 21px;
        font-size: 12px;
        line-height: 16px;
        color: #999;
        position: relative;

        &:before {
          content: '';
          width: 16px;
          height: 16px;
          background: url('@inmModule/assets/images/common/icon_split.png') -400px -20px no-repeat;
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}

.bottom_cart {
  &.buy {
    .modal_footer {
      button.confirm {
        display: block;
      }
    }
  }

  .modal_content {
    max-height: 54rem;
  }

  .modal_footer {
    button.confirm {
      display: none;
    }
  }

  .total_price {
    padding: 15px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      color: #000;

      & > span {
        padding-left: 10px;
        font-size: 18px;
        color: #00bc70;

        em {
          padding-right: 4px;
          font-size: 20px;
        }
      }
    }

    em {
      font-weight: 600;
      color: #00bc70;
      padding: 0 0.5rem 0 1rem;
    }
  }
}

:deep(.prod_select) {
  margin-bottom: 15px;
}
</style>
