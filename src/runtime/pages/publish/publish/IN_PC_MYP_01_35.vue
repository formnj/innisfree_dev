<template>
  <div class="inner">
    <div class="title_wrap">
      <h2>쿠폰존</h2>
    </div>
    <InmTab
      v-model="tabIndex"
      tab-type="type_01"
      :item-list="[
        { text: '보유쿠폰', count: 2 },
        { text: '다운로드 가능 쿠폰', count: 2 }
      ]" />
    <div class="gray_box">
      <InputValidation :is-error="true" err-text="* 쿠폰번호를 확인해주세요">
        <Inputs :_type="text" />
      </InputValidation>
      <Button txt="등록" />
    </div>

    <div class="list_wrap">
      <ul>
        <li v-for="(item, idx) in sample_coupon" :key="idx">
          <CouponItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { sample_coupon } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const tabIndex = ref(0)
</script>
<style lang="scss" scoped>
:deep(.tab_wrap) {
  .type_01 {
    li {
      button {
        span {
          color: #00bc70;
          font-size: 14px;

          &:after {
            content: '장';
            color: #888;
          }
        }
      }
      &.current {
        button {
          span {
            &:after {
              color: #000;
            }
          }
        }
      }
    }
  }
}
.gray_box {
  background-color: #f5f5f5;
  padding: 60px;
  display: flex;
  gap: 10px;
  justify-content: center;

  .input_wrap {
    width: 420px;
  }

  button {
    width: 110px;
  }
}

.list_wrap {
  margin-top: 60px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
