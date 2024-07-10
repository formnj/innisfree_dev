<template>
  <div class="comment_box" :class="item.reply.is ? 'reply' : ''">
    <!-- 답글의 답글일 경우 reply 클래스 추가 -->
    <span class="photo"><img :src="item.photo" alt="" /></span>

    <div class="comment">
      <span class="info">
        <span v-if="item.isEditor" class="mark_editor">Editor</span>
        <!-- 에디터일 경우에만 노출 -->
        <span class="name"
          >{{ item.name }}<span class="time">{{ item.time }}</span></span
        >
      </span>

      <p v-if="!item.userDelete && !item.blocked" class="text">
        <span v-if="item.reply.is" class="to">{{ item.reply.to }}</span>
        <!--답글일 경우에만 노출, '@'는 css로 고정 -->
        {{ item.cmnt }}
      </p>
      <p v-if="item.userDelete" class="text noti">작성자에 의해 삭제된 답글입니다.</p>
      <p v-if="item.blocked" class="text noti">회원님의 요청으로 차단되었습니다.</p>

      <div class="btn_wrap">
        <button type="button">답글 달기</button>
        <button type="button">답글 2개 더보기</button>
      </div>
    </div>
    <button type="button" class="btn_reply_menu" @click="modal.open('modal_reply_menu', 'layer modal_reply_menu'), modalPositioning()">
      답글 메뉴
    </button>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
const props = defineProps({
  item: {}
})
const modalPositioning = () => {
  modal.open('modal_reply_menu', 'layer modal_reply_menu')
  const top = window.scrollY + event.target.getBoundingClientRect().top
  const right = window.outerWidth - event.target.getBoundingClientRect().left + 80 //80은 modal_reply_menu의 너비
  document.getElementsByClassName('modal_reply_menu')[0].style.cssText = 'top:' + top + 'px;left:unset;right:' + right + 'px;bottom:unset;'
}
</script>
<style lang="scss" scoped>
.comment_box {
  margin-bottom: 2rem;
  padding: 2rem 2.1rem 0;
  border-top: 0.1rem solid #f5f5f5;
  display: flex;
  gap: 1rem;
  position: relative;

  &.reply {
    margin: 0 2.1rem 2rem;

    &:before {
      content: '';
      width: 0.8rem;
      height: 1.2rem;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 2.7rem;
    }

    .btn_reply_menu {
      right: 0;
    }
  }

  .photo {
    width: 3.5rem;
    height: 3.5rem;
    background: url('@inmModule/assets/mo_images/common/icon_split.png') 0rem -14.5rem / 25rem auto no-repeat;
    display: inline-block;
    flex-shrink: 0;
  }

  .comment {
    padding-right: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .info {
      display: flex;
      flex-direction: column;

      .mark_editor {
        margin-left: -2.3rem;
      }

      .name {
        font-weight: 600;
        display: flex;
        align-items: center;

        .time {
          padding-left: 0.4rem;
          font-size: 1.2rem;
          font-weight: 300;
          color: #999;
        }
      }
    }

    .text {
      font-size: 1.3rem;
      color: #333;
      line-height: 2rem;

      .to {
        padding-right: 0.2rem;
        font-weight: bold;
        color: #00bc70;

        &:before {
          content: '@';
        }
      }

      &.noti {
        font-weight: 300;
        color: #999;
      }
    }

    .btn_wrap {
      display: flex;
      gap: 1rem;

      button {
        font-size: 1.2rem;
        color: #999;
      }
    }
  }

  .btn_reply_menu {
    width: 2.4rem;
    height: 2.4rem;
    font-size: 0;
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -21rem -7rem / 25rem auto no-repeat;
    position: absolute;
    top: 2rem;
    right: 0.4rem;
  }
}
</style>
