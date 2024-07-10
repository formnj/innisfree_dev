<template>
  <section>
    <Button class="btn_" txt="신고 모달" @click="openModal()" />
    <ProductReviewReport />
  </section>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-share-home-cart'
})
const openModal = () => {
  modal.open('modal_review_report', 'alert modal_review_report')
}
onMounted(() => {
  modal.open('modal_review_report', 'alert modal_review_report')
})
</script>
