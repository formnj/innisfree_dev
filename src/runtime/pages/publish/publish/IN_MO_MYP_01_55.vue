<template>
  <div class="inner">
    <Button txt="공병수거 신청안내 팝업1" @click="openModal($event, 1)" />
    <Button txt="공병수거 신청안내 팝업2" @click="openModal($event, 2)" />

    <!-- 공병수거 신청안내 팝업1 -->
    <InmModal
      v-model="showModal1"
      class="modal_apply"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="modalType"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      close-button-text="취소"
      ok-button-text="신청하기"
      :style="style">
      <h2>공병수거 신청안내</h2>
      <button type="button" class="btn_close">닫기</button>
      <p>이니스프리 온라인 공병수거 서비스는 공병 10개를 한꺼번에 반납 시에만 참여가 가능합니다.</p>
      <strong>수거 신청하시겠습니까?</strong>
    </InmModal>

    <!-- 공병수거 신청안내 팝업2 -->
    <InmModal
      v-model="showModal2"
      class="modal_apply"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="modalType"
      :close-button="false"
      :dim-closeble="dimCloseble"
      close-button-text="취소"
      ok-button-text="저장"
      :style="style">
      <h2>공병수거 신청안내</h2>
      <button type="button" class="btn_close">닫기</button>
      <p>
        <em>홍길동</em> 고객님,<br />
        이번달 공병수거량은 <em>0</em>개입니다.<br />
        온라인 공병수거 10개 진행 시 적립포인트는<br />
        <em>3,000</em>점 입니다.
      </p>
      <strong>
        고객님의 비구매성 포인트(이벤트 포인트)는 잔여한도에 따라 포인트 적립이 불가할 수 있으니, 페이지 하단 유의사항을 반드시 확인
        바랍니다.
      </strong>
    </InmModal>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'publish-mo-default'
})
// 모달 변수
const closeButton = ref(true)
const dimCloseble = ref(true)

const style = reactive({ top: ``, left: `` })

const showModal1 = ref(false)
const showModal2 = ref(false)
const showHeader = ref(false)
const showFooter = ref(true)
const showOverlay = ref(true)
const modalType = ref('alert')

const openModal = (event, idx) => {
  if (modalType.value === 'layer') {
    const target = event.target
    style.top = `${target.offsetTop}px`
    style.left = `${target.offsetLeft}px`
  } else {
    style.top = ''
    style.left = ''
  }

  if (idx === 1) showModal1.value = true
  else if (idx === 2) showModal2.value = true
}
</script>
<style lang="scss" scoped>
:deep(.modal_wrap) {
  &.modal_apply {
    .modal_container {
      width: 323px;

      .modal_content {
        padding: 30px 20px;

        h2 {
          margin-bottom: 20px;
          color: #000;
          font-size: 18px;
          line-height: 24px;
        }

        p {
          margin-bottom: 8px;
          color: #666;
          font-size: 13px;
          line-height: 20px;

          em {
            color: #00bc70;
            font-weight: 600;
          }
        }

        strong {
          font-size: 13px;
          font-weight: 600;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
