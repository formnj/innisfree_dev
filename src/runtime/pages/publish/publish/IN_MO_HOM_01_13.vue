<template>
  <Button class="btn_all btn_outline" txt="전체보기" @click="modal.open('modal_all', 'fullMo')" />
  <!-- 전체보기 모달 -->
  <div id="modal_all" class="modal_wrap active fullMo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>전체보기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="content">
          <ShowcaseModalItem v-for="(item, idx) in banner_list" :key="idx" :item="item" :link="item.link" />
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- 전체보기 모달 -->
</template>
<script setup>
import { banner_list } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-category'
})
</script>
<style lang="scss" scoped>
.btn_all {
  height: fit-content;
  padding: 0.6rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0 0.3rem;
  :deep(em) {
    padding: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
  &:after {
    content: '';
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -23rem -10rem;
    background-size: 25rem auto;
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      :deep(.showcase_item) {
        height: 21rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
