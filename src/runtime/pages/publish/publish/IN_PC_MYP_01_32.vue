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
    <div class="btn_wrap">
      <Button txt="쿠폰 모두 받기" class="btn_mid confirm i_download" />
      <Button txt="쿠폰 모두 받기" class="btn_mid i_download" disabled />
    </div>

    <div class="list_wrap">
      <!-- 다운가능 쿠폰 없을 경우-->
      <div class="no_data">
        <p>다운로드 가능한 쿠폰이 없습니다.</p>
        <span>보유쿠폰 탭에서 사용 가능한 쿠폰을 확인해주세요.</span>
      </div>
      <!-- //다운가능 쿠폰 없을 경우-->

      <ul>
        <li v-for="(item, idx) in sample_coupon" :key="idx">
          <CouponItem :item="item" :use-dark="true" :use-down="true" />
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

const tabIndex = ref(1)
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

.btn_wrap {
  margin-top: 60px;
  button {
    width: 360px;
    margin: 0 auto;

    &.i_download {
      &:before {
        content: '';
        width: 24px;
        height: 24px;
        background: url('@inmModule/assets/images/common/icon_split.png') - 120px -330px / 250px auto no-repeat;
        display: inline-block;
      }

      :deep(em) {
        padding: 0 3px;
      }
    }
  }
}

.list_wrap {
  margin-top: 60px;
  .no_data {
    border-top: 1px solid #eee;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
