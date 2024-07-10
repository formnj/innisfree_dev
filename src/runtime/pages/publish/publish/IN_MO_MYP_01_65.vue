<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div class="btn_wrap">
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle', 'alert modal_empty_bottle')">
            공병수거 품목보기
          </button>
        </div>
      </div>
    </section>

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
  layout: 'publish-mo-name'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '공병수거신청')
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin-top: 0;
    align-items: center;

    .btn_link_arrw {
      height: auto;
      color: #999;
      text-decoration: underline;
      position: relative;
      right: 0;

      &:after {
        border-color: #999;
        position: relative;
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
      }
    }
  }
}

:deep(.modal_wrap) {
  &.modal_empty_bottle {
    .modal_content {
      padding: 0;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }
}
</style>
