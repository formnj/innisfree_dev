<template>
  <section>
    <Button class="btn_" txt="답글 모달" @click="openReplyModal()" />

    <!-- 답글 모달 -->
    <PostCommentModal />
    <!-- //답글 모달 -->

    <!-- 답글 메뉴 -->
    <div id="modal_reply_menu" class="modal_wrap">
      <div class="modal_container">
        <ul class="reply_menu">
          <li><button type="button" class="btn_single_menu">신고하기</button></li>
          <li><button type="button" class="btn_single_menu">차단하기</button></li>
          <li><button type="button" class="btn_single_menu">수정하기</button></li>
          <li><button type="button" class="btn_single_menu">삭제하기</button></li>
        </ul>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //답글 메뉴 -->
  </section>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-share-home-cart'
})
const openReplyModal = () => {
  modal.open('modal_comment', 'bottom modal_comment')
}
onMounted(() => {
  modal.open('modal_comment', 'bottom modal_comment')

  //답글 메뉴 외 영역 클릭 시 메뉴 닫힘
  const body = document.querySelector('body')
  body.addEventListener('click', (event) => {
    const target = event.target
    const replyMenuModal = document.getElementById('modal_reply_menu')

    if (
      !target.classList.contains('btn_reply_menu') &&
      replyMenuModal.classList.contains('active') &&
      !target.classList.contains('btn_single_menu')
    ) {
      replyMenuModal.classList.remove('active')
    }
  })
})
</script>

<style lang="scss" scoped>
.reply_menu {
  border: 1px solid #999;

  li {
    width: 8rem;

    & + li {
      border-top: 1px solid #999;
    }

    button {
      padding: 1.2rem 0;
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.6rem;
      display: block;
    }
  }
}
</style>
