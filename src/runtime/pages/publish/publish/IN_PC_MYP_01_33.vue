<template>
  <Button txt="쿠폰상세" @click="openModal" />
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

definePageMeta({
  layout: 'publish-pc-sub'
})

const showModal = ref(false)
const openModal = () => {
  showModal.value = true
}
</script>
<style lang="scss" scoped>
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
