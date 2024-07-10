<template>
  <div class="prod_select">
    <button type="button" class="btn_select" :disabled="_disabled" @click="selectOpen">{{ _placeholder }}</button>
    <ul class="op_list">
      <li v-for="(select, i) in options" :key="i">
        <input :id="select.val" type="radio" :name="select.name" :disabled="select.soldout" />
        <label :for="select.val" :class="select.soldout ? 'soldout' : ''">
          <em v-if="select.soldout">일시품절</em>
          <span class="name">{{ select.txt }}</span
          ><span v-if="select.extraPrice" class="price">+{{ select.extraPrice }}원</span>
          <button v-if="select.stockAlert" type="button" class="btn_txt" @click="modal.open('modal_stock_alert', 'full modal_stock_alert')">
            입고알림 신청
          </button>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  item: {},
  options: Array, //soldout : 일시품절 표시, stockAlert : 입고알림 신청 표시
  selectedPriceShow: {
    type: Boolean,
    default: true
  },
  _placeholder: String,
  _disabled: String
})

//옵션(버튼) 선택 시 open 클래스 추가
const selectOpen = () => {
  const el = event.target
  el.classList.toggle('open')
}

onMounted(() => {
  //옵션 리스트 선택 후 리스트 닫힘
  const radios = document.querySelectorAll(".prod_select input[type='radio']")
  const btnSelect = document.getElementsByClassName('btn_select')[0]
  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      btnSelect.classList.remove('open')
    })
  })
})
</script>

<style lang="scss" scoped>
.prod_select {
  position: relative;

  .btn_select {
    width: 100%;
    text-align: left;
    font-size: 14px;
    height: 42px;
    padding: 0 15px;
    border: 1px solid #eee;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    &.open {
      border-color: #000;

      & + ul {
        // display: block;
        height: auto;
        opacity: 1;
      }
    }

    &:after {
      content: '';
      width: 12px;
      height: 12px;
      margin-top: -4px;
      border: 1px solid #222;
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%) rotate(45deg);
    }

    &:disabled {
      color: #aaa;
      background-color: #f5f5f5;
      cursor: default;
    }
  }

  .op_list {
    width: 100%;
    max-height: 286px;
    height: 0;
    border: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    opacity: 0;
    position: absolute;
    top: 41px;
    left: 0;
    z-index: 1;
    transition: all 0.2s;

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
        padding: 14px 20px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &.soldout {
          color: #aaa;
        }

        .name {
          color: #000;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          flex: 1;
        }

        .price {
          width: 8rem;
          font-size: 1.2rem;
          text-align: right;
          color: #333;
          display: inline-block;
        }

        em {
          padding-right: 5px;
          font-size: 12px;
          color: #ff0000;

          & + .name {
            color: #aaa;

            & + .price {
              width: auto;
              color: #aaa;
            }
          }
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
          z-index: 2;
        }
      }
    }
  }
}
</style>
