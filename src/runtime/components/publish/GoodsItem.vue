<template>
  <div class="goods_item" :class="item.status">
    <div class="img_wrap">
      <a :href="props.link">
        <span v-if="useBigmark && item.big" class="top_sticker">대용량</span
        ><!-- top sticker(대용량) -->
        <span class="thumb">
          <em><img :src="item.img" /></em>
          <em v-if="item.overflip" class="overflip"><img :src="item.overflip" /></em>
        </span>
      </a>
      <ul class="btnIconBox">
        <li><Button class="btn_heart" txt="찜" /></li>
        <!-- 찜 활성화 : 버튼에 on 클래스 추가-->
        <li><Button class="btn_cart" txt="장바구니" @click="modal.open('modal_cart', 'alert modal_cart')" /></li>
        <li><Button class="btn_buy" txt="결재" @click="modal.open('modal_cart', 'alert modal_cart')" /></li>
      </ul>
    </div>
    <a :href="props.link">
      <div class="cont">
        <p class="name">
          <strong>
            <em v-if="item.cate" class="cate">{{ item.cate }}</em>
            {{ item.name }}
          </strong>
        </p>
        <p v-if="item.price" class="price">
          <strong>{{ item.price }}원</strong>
          <span>{{ item.sale }}</span>
          <em>{{ item.cost }}원</em>
        </p>
        <!-- sticker -->
        <Sticker v-if="!useHash && useMark && item.sticker" :item="item.sticker" />
        <!-- //sticker -->

        <!-- Hash -->
        <Hash v-if="useHash && item.hash" :item="item.hash" />
        <!-- //Hash -->

        <!-- 일시품절, 판매중지 -->
        <p v-if="useErrTxt && item.status == 'sold_out'" class="err fc_red"><strong>일시품절</strong></p>
        <p v-if="useErrTxt && item.status == 'end'" class="err fc_red"><strong>판매중지</strong></p>
        <!-- //일시품절, 판매중지 -->

        <!-- 증정품 영역 : 특가 페이지에서만 노출 -->
        <button
          v-if="useGiveaway && item.giveaway"
          class="giveaway"
          @click="modal.open(item.giveaway.modal_id, props.modal_type + ' modal_gift')">
          <template v-for="(item, idx) in item.giveaway.goods" :key="idx">
            <img :src="item.img" />
          </template>
        </button>
        <!-- //증정품 영역 -->

        <p v-if="(!useHash && useScore && item.reviewScore) || mustUseScore" class="review_score">
          {{ item.reviewScore.rate }}
          <em>({{ item.reviewScore.totalPoint }})</em>
        </p>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {},
  link: {
    type: String,
    default: '#none'
  },
  modal_type: String,
  useMark: {
    //마크 사용여부
    type: Boolean,
    default: true
  },
  useHash: {
    //해시태그 사용여부: true일 경우에 마크와 별점 미노출
    type: Boolean,
    default: false
  },
  useScore: {
    //별점 사용여부
    type: Boolean,
    default: true
  },
  useGiveaway: {
    //증정품 사용여부
    type: Boolean,
    default: false
  },
  useBigmark: {
    //대용량 마크 사용여부
    type: Boolean,
    default: true
  },
  mustUseScore: {
    //별점 꼭 사용
    type: Boolean,
    default: false
  },
  useErrTxt: {
    //일시품절, 판매중지 텍스트 사용 여부
    type: Boolean,
    default: false
  }
})

import { modal } from '@inmModule/assets/js/common-ui'
</script>

<style lang="scss" scoped>
.goods_item {
  width: 240px;

  a {
    display: block;
    height: 100%;
  }
  &.sold_out,
  &.coming_soon,
  &.end {
    .img_wrap:before,
    .img_wrap:after {
      content: '';
      display: block;
    }
    .img_wrap:before {
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
    &.sold_out {
      .img_wrap:before {
        background-image: url('@inmModule/assets/images/ui/overlay_soldout.png');
      }
    }
    &.coming_soon {
      .img_wrap:before {
        background-image: url('@inmModule/assets/images/ui/overlay_comingsoon.png');
      }
    }
    &.end {
      .img_wrap:before {
        background-image: url('@inmModule/assets/images/ui/overlay_end.png');
      }
    }
  }
  .img_wrap {
    position: relative;
    overflow: hidden;

    .top_sticker {
      height: 32px;
      padding: 0 9px;
      font-size: 12px;
      line-height: 32px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    .thumb {
      // height:320px;
      position: relative;
      display: block;
      em {
        display: flex;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        &.overflip {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          top: 50%;
          bottom: 50%;
          transition: all 0.3s ease-out;
        }
      }
    }
    .btnIconBox {
      background-color: #00bc70;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      display: flex;
      justify-content: space-around;
      transform: translateY(100%);
      transition: transform 0.3s ease-out;
      :deep(button) {
        height: auto;
        padding: 14px 5px;
        font-size: 0;
        background-color: transparent;
        em {
          width: 32px;
          height: 32px;
          padding: 0;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-repeat: no-repeat;
        }
        &.btn_heart {
          em {
            background-position: -220px 0;
          }
          &.on {
            em {
              background-position: -300px -120px;
            }
          }
        }
        &.btn_cart {
          em {
            background-position: -280px 0;
          }
        }
        &.btn_buy {
          em {
            background-position: -340px 0;
          }
        }
      }
    }
    &:hover {
      .overflip {
        opacity: 1 !important;
        top: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
      }
      .btnIconBox {
        transform: translateY(0);
      }
    }
  }
  .cont {
    margin-top: 20px;
    .cate {
      margin-right: 5px;
      font-weight: 600;
    }
    .name {
      strong {
        color: #666;
        font-size: 14px;
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    > .price {
      margin: 10px 0 20px 0;
      strong {
        margin-right: 10px;
        font-size: 20px;
        font-weight: 700;
      }
      span {
        margin-right: 15px;
        color: #ff0000;
        font-size: 20px;
        font-weight: 300;
      }
      em {
        color: #999e9c;
        font-size: 14px;
        font-weight: 300;
        text-decoration: line-through;
      }
    }
  }
  .review_score {
    margin-top: 15px;
    color: #999e9c;
    font-size: 12px;
    display: flex;
    align-items: center;
    &:before {
      width: 12px;
      height: 12px;
      margin-right: 2px;
      background-image: url('@inmModule/assets/images/common/icon_split.png');
      background-position: -400px 0;
      background-repeat: no-repeat;
      content: '';
      display: block;
    }
    em {
      margin-left: 5px;
    }
  }
  button.giveaway {
    height: 60px;
    padding: 8px;
    margin-top: 15px;
    border: 1px solid #eee;
    position: relative;
    z-index: 2;
    display: flex;
    gap: 3px;
    img {
      width: 32.3px;
      display: block;
      flex: 1;
    }
  }

  &.type_column {
    width: 100%;
    display: flex;
    gap: 20px;
    .img_wrap {
      overflow: visible;
      .top_sticker {
        display: none;
      }
      .btnIconBox {
        display: none;
        background-color: transparent;
        position: absolute;
        bottom: 0;
        gap: 1rem;
        justify-content: start;
        transform: translateY(0);
        z-index: 5;
        :deep(button) {
          padding: 0;
          em {
            width: 24px;
            height: 24px;
            padding: 0;
            background-image: url('@inmModule/assets/images/common/icon_split.png');
            background-size: 250px auto;
          }
          &.btn_heart {
            em {
              background-position: 0 -300px;
            }
            &.on {
              em {
                background-position: -215px -360px;
              }
            }
          }
          &.btn_cart em {
            background-position: -30px -300px;
          }
          &.btn_buy em {
            background-position: -60px -300px;
          }
        }
      }
      .thumb {
        width: 75px;
      }
    }
    .cont {
      margin-top: 0;
      .price {
        strong {
          margin-right: 5px;
          font-size: 14px;
        }
        span {
          margin-right: 10px;
          font-size: 14px;
        }
        em {
          font-size: 12px;
        }
      }
      .hash {
        flex-wrap: nowrap;
        li {
          width: auto;
          button {
            padding: 4px 8px;
            font-family: 'Pretendard';
          }
        }
      }

      .err {
        margin-top: 5px;
      }
    }
    .review_score {
      display: none;
    }

    &.sold_out,
    &.coming_soon,
    &.end {
      .img_wrap {
        &:before {
          width: 90px;
          height: 120px;
          bottom: auto;
          right: auto;
          background-size: 60%;
        }
      }
    }
  }
}
</style>
