<template>
  <div class="inner">
    <Button txt="프로모션 유의사항" @click="modal.open('modal_prom_noti', 'alert modal_prom_noti')" />
  </div>

  <!-- 프로모션 유의사항 -->
  <div id="modal_prom_noti" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>프로모션 유의사항</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <!-- BO 텍스트입력 내용 출력, 개발시 아래 내용 삭제 -->
        <p style="font-weight: bold; margin-bottom: 10px">1. 최종 4만원 이상 결제 금액 기준(*할인 후 금액)</p>
        <p>1. 로미 캠핑 의자 구입 금액 : 최종 결제 금액 4만원에 미포함</p>
        <p>2. 쿠폰 사용 : 쿠폰 할인 금액 제외한 최종 결제 금액 기준 포함</p>
        <p>3. 뷰티포인트 사용 : 최종 결제 금액에 포함</p>
        <p>4. 1+1 및 할인 제품 : 할인 금액 제외하고 최종 결제 금액에 포함</p>
        <p>5. 카드사/페이 제휴 : 제휴 할인 적용 전 금액 기준</p>
        <!-- //BO 텍스트 입력 내용 출력 -->
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //프로모션 유의사항 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})
</script>

<style lang="scss" scoped>
.inner {
  :deep(.btn_wrap) {
    margin-bottom: 2rem;
  }
}

.modal_wrap {
  &.alert {
    .modal_content {
      padding: 3rem 2rem;
    }
  }
}
</style>
