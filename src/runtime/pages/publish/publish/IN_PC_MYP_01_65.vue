<template>
  <div class="inner">
    <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle', 'layer tooltip modal_empty_bottle')">
      공병수거 품목보기
    </button>
    <div id="modal_empty_bottle" class="modal_wrap modal_empty_bottle">
      <div class="modal_container">
        <div class="modal_header">
          <h2>공병수거 품목보기</h2>
          <button class="btn_close" @click="modal.close(this)">닫기</button>
        </div>
        <div class="modal_content">
          <img src="@inmModule/assets/images/common/pop_empty_bottle.png" alt="" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
definePageMeta({
  layout: 'publish-pc-sub'
})
</script>
<style lang="scss" scoped>
:deep(.modal_wrap) {
  &.modal_empty_bottle {
    .modal_content {
      padding: 0;
      background-color: #fff;

      img {
        vertical-align: top;
      }
    }
  }
}
</style>
