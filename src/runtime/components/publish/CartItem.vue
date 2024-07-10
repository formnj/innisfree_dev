<template>
  <div class="cart_item">
    <div class="row">
      <div class="prod_img">
        <Inputs _type="checkbox" :isDisabled="item.status ? true : false" />
        <a href="#none" class="thumb" :class="item.status">
          <img :src="item.img" />
        </a>
      </div>
      <div class="prod_info_wrap">
        <div class="prod_info">
          <div v-if="item.cartTag" class="tag">
            <span>{{ item.cartTag }}</span>
          </div>
          <a class="name" href="#none"
            ><strong>{{ item.cate }}</strong> {{ item.name }}</a
          >
          <p v-if="item.hasNoti" class="fc_red">{{ item.hasNoti }}</p>
          <!-- PC 증정품, 선택증정품 태그 위치-->
          <div v-if="!isMo && (item.gift || item.optionalGift)" class="tag gift">
            <button v-if="item.gift" type="button" @click="modal.open('modal_gift', 'full modal_gift')">증정품</button>
            <button v-if="item.optionalGift" type="button" @click="modal.open('modal_gift', 'full modal_gift')">선택 증정품</button>
          </div>
          <!-- //PC 증정품, 선택증정품 태그 위치-->
        </div>
        <div v-if="item.status || item.hasOption" class="prod_info">
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
      </div>
      <div v-if="!item.status || !item.status == 'sold_out'" :class="item.hasOption ? 'prod_price no_use' : 'prod_price'">
        <div class="quantity_area">
          <Quantity v-if="!item.hasOption" _id="Quantity" quantity="1" />
          <span v-if="item.isLimited" :class="item.isLimited.over ? 'err' : ''">최대선택{{ item.isLimited.limit }}개까지</span>
          <!-- 최대선택 갯수 넘을 경우 err 클래스 추가-->
        </div>
        <div v-if="!item.isSample" class="price_wrap">
          <span v-if="!item.noDiscount || (item.noDiscount && isMo)" class="cost">{{ item.cost }}원</span>
          <span class="price">{{ item.price }}원</span>
        </div>
      </div>
      <span v-if="item.status && item.status == 'sold_out'" class="fc_red"><strong>일시품절</strong></span>
      <span v-if="item.status && item.status == 'end'" class="fc_red"><strong>판매중지</strong></span>
      <Icons class="del" />
      <!-- MO 증정품, 선택증정품 태그 위치-->
      <div v-if="isMo && (item.gift || item.optionalGift)" class="tag gift">
        <button v-if="item.gift" type="button" @click="modal.open('modal_gift', 'bottom modal_gift')">증정품</button>
        <button v-if="item.optionalGift" type="button" @click="modal.open('modal_gift', 'bottom modal_gift')">선택 증정품</button>
      </div>
      <!-- //MO 증정품, 선택증정품 태그 위치-->
    </div>

    <ul v-if="item.hasOption" class="selected_list">
      <li v-for="(item, idx) in sample_prod_selected_list.slice(0, 3)" :key="idx">
        <span class="name">{{ item.name }}</span>
        <div class="box">
          <div class="quantity_control small">
            <span class="name">수량</span>
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
    <!-- //선택된 옵션 리스트 -->
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { sample_prod_selected_list } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  item: {},
  isMo: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.cart_item {
  padding: 20px 0;

  .row {
    padding-right: 34px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    .prod_img {
      width: 100px;
      height: 133px;
      position: relative;

      .input_wrap {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;

        :deep(.check) {
          padding-left: 20px;
          vertical-align: top;
        }
      }

      .thumb {
        display: inline-block;
        position: relative;

        img {
          vertical-align: top;
        }

        &.sold_out:before,
        &.end:before {
          content: '';
          background-color: rgba(0, 0, 0, 0.3);
          background-position: 50%;
          background-repeat: no-repeat;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }

        &.sold_out:after,
        &.end:after {
          content: '';
          width: 60px;
          height: 60px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        &.sold_out:after {
          background: url('@inmModule/assets/images/ui/overlay_soldout.png') 0 0 / 60px auto no-repeat;
        }

        &.end:after {
          background: url('@inmModule/assets/images/ui/overlay_end.png') 0 0 / 60px auto no-repeat;
        }
      }
    }

    .prod_info_wrap {
      height: 133px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }

    .prod_info {
      padding-right: 56px;
      flex: 1;

      .tag {
        margin-bottom: 10px;

        & > * {
          margin-right: 4px;
          padding: 2px 5px;
          font-size: 12px;
          color: #fff;
          background-color: #00bc70;
          display: inline-block;
        }

        &.gift {
          margin-top: 15px;

          & > * {
            padding: 7px 20px;
            position: relative;

            &:before {
              content: '';
              width: 0;
              height: 0;
              border-top: 10px solid #00bc70;
              border-bottom: 10px solid transparent;
              border-right: 10px solid #00bc70;
              border-left: 10px solid transparent;
              position: absolute;
              left: -9px;
              top: 8px;
            }
          }
        }
      }

      .name {
        font-size: 16px;
        line-height: 20px;
        color: #000;
        display: block;

        & + * {
          margin-top: 10px;
        }
      }

      .select {
        margin-top: 20px;
        display: block;
      }

      .prod_select {
        width: 430px;
        margin-top: 20px;
      }
    }

    .prod_price {
      display: flex;
      align-items: center;
      gap: 10px;

      &.no_use {
        display: none;
      }

      .quantity_area {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        & > span {
          color: #999;

          &.err {
            color: #eb5b54;
          }
        }
      }

      .count_wrap {
        width: 122px;
      }

      .price_wrap {
        padding-left: 20px;
        text-align: right;
        display: flex;
        flex-direction: column;

        .cost {
          line-height: 18px;
          color: #aaa;
          text-decoration: line-through;
        }

        .price {
          min-width: 100px;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          color: #000;
        }
      }
    }

    .del {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      &:before,
      &:after {
        width: 16px;
        border-color: #888;
      }
    }
  }

  .selected_list {
    max-height: none;
    overflow: hidden;
    padding: 0;

    .name {
      margin-bottom: 0;
    }
  }

  &.extra {
    padding-left: 45px;
    position: relative;

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      border-left: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .prod_img {
      width: 68px;
      height: 90px;

      .input_wrap {
        display: none;
      }
    }

    .prod_info_wrap {
      height: auto;
    }

    .prod_price {
      .count_wrap {
        width: 100px;
        height: 30px;

        :deep(input),
        :deep(button) {
          height: 28px;
        }

        :deep(input) {
          font-size: 13px;
        }
      }
    }
  }

  &.sample {
    .row {
      .prod_img {
        height: 90px;
        display: flex;
        gap: 10px;

        .input_wrap {
          position: relative;
        }

        .thumb {
          flex-shrink: 0;
          width: 68px;
        }
      }

      .prod_info_wrap {
        height: auto;
      }

      .prod_price {
        .count_wrap {
          width: 100px;
          height: 30px;

          :deep(input),
          :deep(button) {
            height: 28px;
          }

          :deep(input) {
            font-size: 13px;
          }
        }
      }

      .del {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
