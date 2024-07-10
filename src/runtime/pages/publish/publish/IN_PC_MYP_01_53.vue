<template>
  <div class="inner">
    <Button txt="첫 공병수거 혜택 안내 팝업" @click="openModal" />
    <!-- 첫 공병수거 혜택 안내 팝업 -->
    <InmModal
      v-model="showModal"
      class="modal_notice"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="modalType"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="확인"
      close-button-text="취소"
      :style="style">
      <template #header><h2>첫 공병수거 혜택 안내</h2></template>
      <ul class="bul_list">
        <li>해당 혜택은 22.08.11 ~ 별도 안내시까지 생에 첫 공병수거를 진행할 경우 제공됩니다.</li>
        <li>공병수거 제품이 정상적으로 수거 완료 된 날짜가 이벤트 기간에 포함되어야 참여가 인정됩니다.</li>
        <li>공병수거 완료 확인 후 뷰티포인트 5,000점이 자동으로 지급되니다.</li>
        <li>지급 내역은 ‘마이페이지 > 뷰티포인트 안내’에서 확인 가능합니다.</li>
        <li>이벤트 기간 종료 후 진행하는 첫 공병수거의 경우 혜택 제공이 불가합니다.</li>
        <li>적립된 뷰티포인트는 적립일 기준 30일이내 사용할 수 있으며 유효기간 경과 시 별도 알람없이 소멸되니 기한 내 사용해주세요</li>
        <li>소멸 예정 포인트에 대해 회사는 별도 고지에 대한 의무를 부담하지 않습니다.</li>
      </ul>
    </InmModal>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'publish-pc-sub'
})
// 모달 변수
const closeButton = ref(true)
const dimCloseble = ref(true)
const style = reactive({ top: ``, left: `` })
const showModal = ref(false)
const showHeader = ref(true)
const showFooter = ref(false)
const showOverlay = ref(true)
const modalType = ref('alert')

const openModal = (event) => {
  if (modalType.value === 'layer') {
    const target = event.target
    style.top = `${target.offsetTop}px`
    style.left = `${target.offsetLeft}px`
  } else {
    style.top = ''
    style.left = ''
  }

  showModal.value = true
}
</script>
<style lang="scss" scoped>
:deep(.modal_wrap) {
  &.modal_notice {
    .modal_container {
      width: 540px;

      .modal_content {
        .bul_list {
          li {
            color: #888;

            &:before {
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
