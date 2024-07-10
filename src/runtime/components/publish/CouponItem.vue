<template>
  <div class="coupon_item" :class="{ dark: props.useDark }">
    <div class="desc">
      <Sticker v-if="item.mark" :item="item.mark" />
      <p class="name">
        {{ item.name }}<span v-if="item.limit">잔여한도 : {{ item.limit }}원</span>
      </p>
      <p>{{ item.campaign }}</p>
      <dl>
        <dt>사용기간</dt>
        <dd>
          {{ item.period }}<em>({{ item.remaining }})</em>
        </dd>
      </dl>
      <NuxtLink v-if="item.related" :to="item.related">관련 이벤트 보러가기</NuxtLink>
    </div>
    <div class="btn_wrap">
      <button type="button" class="btn_search" @click="openModal">쿠폰 상세보기</button>
      <Icons v-if="useDown" class="download" @click="showToast" />
    </div>
  </div>

  <InmModal
    v-model="showModal"
    class="modal_coupon_detail"
    :header="true"
    :footer="false"
    :overlay="true"
    :close-button="true"
    :dim-closeble="true"
    :style="style">
    <template #header><h2>쿠폰 상세</h2> </template>
    <div class="detail_list_wrap">
      <dl>
        <dt>쿠폰번호</dt>
        <dd>1254895765</dd>
      </dl>
      <dl class="has_line">
        <dt>쿠폰명</dt>
        <dd>콜라겐크림 10% 추가할인쿠폰</dd>
      </dl>
      <dl>
        <dt>상세</dt>
        <dd>캠페인에 대한 설명글 작성 공간</dd>
      </dl>
      <dl>
        <dt>쿠폰구분</dt>
        <dd>일반쿠폰</dd>
      </dl>
      <dl class="has_line">
        <dt>적용대상</dt>
        <dd>특정제품</dd>
      </dl>
      <dl>
        <dt>적용불가</dt>
        <dd>
          <ul class="bul_list dash">
            <li>프로모션 진행 중인 제품에는 사용할 수 없습니다.</li>
            <li>할인제외제품에는 사용할 수 없습니다.</li>
          </ul>
        </dd>
      </dl>
    </div>
    <section>
      <h3>적용가능 제품(증정품)</h3>
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 3)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_column" :use-mark="false" />
          </li>
        </ul>
      </div>
    </section>
  </InmModal>
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { ref } from '#imports'
const props = defineProps({
  item: {},
  useDark: {
    //다크모드 사용여부
    type: Boolean,
    default: false
  },
  useDown: {
    //다운로드 버튼 사용여부
    type: Boolean,
    default: false
  }
})

const showModal = ref(false)
const openModal = () => {
  showModal.value = true
}

const { addToast } = useToast()
const showToast = () => {
  addToast({ message: '다운로드가 완료 되었습니다.' })
}
</script>
<style lang="scss" scoped>
.coupon_item {
  width: 406px;
  height: 194px;
  padding: 20px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: relative;

  &.dark {
    background-color: #1a1a1a;

    .desc {
      p {
        color: #fff;
      }

      :deep(.sticker) {
        background-color: #1a1a1a;

        .type01 {
          color: #999;
          background-color: #333;
        }
        .type02 {
          color: #00bc70;
          background-color: #153a2b;
        }
      }
    }

    .btn_wrap {
      button {
        background-color: #1a1a1a;
      }
    }
  }

  &:before,
  &:after {
    content: '';
    width: 20px;
    height: 11px;
    background-color: #fff;
    transform: rotate(1deg);
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-radius: 0 0 10px 10px;
    position: absolute;
    top: -1px;
    left: 307px;
  }

  &:after {
    content: '';
    transform: rotate(180deg);
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.05);
    top: auto;
    bottom: -1px;
    left: 307px;
  }

  .desc {
    padding: 0 20px 0 40px;
    flex: 1;
    border-right: 1px dashed #aaa;

    p {
      width: 220px;
      text-overflow: ellipsis;
      font-size: 16px;
      color: #333;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden;

      &.name {
        margin: 10px 0;
        font-size: 32px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: -1px;

        span {
          padding-left: 5px;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    dl {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
      display: flex;
      gap: 5px;

      em {
        padding-left: 5px;
        color: #00bc70;
      }
    }

    a {
      margin-top: 10px;
      padding: 7px 20px;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      color: #fff;
      background-color: #00bc70;
      display: inline-block;
    }
  }

  .btn_wrap {
    width: 89px;
    padding: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .btn_search {
      margin: 0 auto;
      font-size: 0;
      width: 20px;
      height: 20px;
      background: url('@inmModule/assets/images/common/icon_split.png') -189px -279px / 250px auto;
      background-blend-mode: difference;
      background-color: #fff;
    }
  }
}

.modal_wrap {
  &.modal_coupon_detail {
    :deep(.modal_container) {
      width: 540px;
      .modal_content {
        padding: 0;

        .detail_list_wrap {
          padding: 30px;
          background-color: #f5f5f5;

          dl {
            width: 293px;
            margin: 0 auto;

            & + dl {
              margin: 10px auto 5px;
            }

            &.has_line {
              border-top: 1px solid #eee;
              padding-top: 10px;
            }

            & > * {
              display: inline-block;
              line-height: 20px;
            }
            dt {
              width: 60px;
              color: #666;
              vertical-align: top;
            }

            dd {
              width: 233px;
              color: #000;
            }
          }
        }

        section {
          padding: 30px 20px;

          .list_wrap {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            li {
              width: 100%;
            }
          }

          .goods_item {
            display: flex;
            align-items: center;
            a {
              height: auto;
              flex: 1;
              .price {
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
