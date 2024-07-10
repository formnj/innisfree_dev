<template>
  <div id="modal_comment" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>답글</h2>
      </div>
      <div class="modal_content">
        <!-- 답글 없을 경우 -->
        <div class="no_content">등록된 답글이 없습니다.<br />답글을 남겨보세요</div>
        <!-- //답글 없을 경우 -->
        <div class="cmnt_list">
          <ul>
            <li v-for="(item, idx) in sampleCmnt" :key="idx">
              <PostComment :item="item" />
            </li>
          </ul>
        </div>
      </div>

      <div class="fixed_area">
        <div class="comment_to"><em>Pony****</em>님 에게 답글 남기는 중 <button type="button" class="btn_close">닫기</button></div>
        <Textarea _placeholder="답글을 남겨보세요" _rows="1" class="input_comment" />
        <button type="button" class="comment_submit">등록</button>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { sampleCmnt } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { onMounted } from '#imports'

onMounted(() => {
  const inpComnt = document.querySelector('.input_comment textarea')
  const cmntTo = document.querySelector('.comment_to')
  const cmntSubmit = document.querySelector('.comment_submit')
  const cmntClose = cmntTo.querySelector('.btn_close')

  inpComnt.onfocus = () => {
    //답글에 포커스가 갔을 때
    if (!cmntClose.classList.contains('userClose')) {
      //사용자가 답글 대상 정보를 닫았을 경우에는 다시 노출하지 않음
      cmntTo.style.display = 'block'
    }
    cmntSubmit.style.display = 'block'
  }

  inpComnt.oninput = () => {
    //답글 작성 중
    if (inpComnt.scrollHeight > inpComnt.clientHeight) {
      //답글 길이에 따라 textarea 길이가 변함
      inpComnt.style.height = inpComnt.scrollHeight + 'px'
    } else {
      inpComnt.style.height = inpComnt.scrollHeight - 20 + 'px'
    }

    if (!cmntSubmit.classList.contains('active') && inpComnt.value.length > 0) {
      //답글 내용이 있을 경우 등록 버튼 활성화
      cmntSubmit.className += ' active'
    } else if (inpComnt.value.length == 0) {
      //답글 내용이 없을 경우 등록 버튼 비활성화
      cmntSubmit.classList.remove('active')
    }
  }

  // inpComnt.onblur = () => {
  //   cmntTo.style.display = "none"
  //   cmntSubmit.style.display = "none"
  // }

  cmntClose.onclick = () => {
    //답글 대상 정보 닫기
    cmntTo.style.display = 'none'
    cmntClose.classList.add('userClose')
  }
})
</script>

<style lang="scss" scoped>
.modal_wrap.bottom .modal_container {
  padding-bottom: 10.6rem;
  max-height: 76rem;
  height: calc(100vh - 5.6rem);

  .modal_header {
    height: auto;
    padding-bottom: 0;

    h2 {
      padding-top: 3.6rem;
      font-size: 1.8rem;
      text-align: center;
    }

    .btn_close {
      top: 16px;
    }
  }

  .modal_content {
    padding: 0 0 7.4rem;
  }

  :deep(.no_content) {
    padding: 4rem 0 6rem;
    font-size: 1.3rem !important;
    font-weight: 400 !important;
    color: #888;
    text-align: center;
  }

  .cmnt_list {
    li:first-child {
      .comment_box {
        border-top: 0;
      }
    }
  }

  .fixed_area {
    width: 100%;
    padding: 2em 2.1rem 3rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;

    :deep(.label_wrap) {
      textarea {
        height: auto;
        min-height: 5rem;
        max-height: 13.2rem;
        padding: 1.4rem 6rem 1.4rem 2.1rem;
        font-size: 1.4rem;
        line-height: 2rem;
        vertical-align: top;
      }

      .icon_del {
        display: none !important;
      }
    }

    .comment_to {
      padding: 0.7rem 4rem 0.7rem 2rem;
      font-size: 1.2rem;
      color: #fff;
      background-color: #000;
      display: none;
      position: relative;

      em {
        padding-right: 0.4rem;
        font-weight: 600;
      }

      .btn_close {
        width: 2rem;
        height: 2rem;
        padding: 0.4rem;
        font-size: 0;
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -10.5rem -7rem / 25rem auto no-repeat;
      }
    }

    .comment_submit {
      width: 4rem;
      height: 2.8rem;
      font-size: 0;
      background-color: #ddd;
      border-radius: 2.8rem;
      display: none;
      position: absolute;
      right: 3.1rem;
      bottom: 4rem;

      &:before {
        content: '';
        width: 0.83rem;
        height: 1.15rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -23.5rem -12rem / 25rem auto no-repeat;
        display: inline-block;
      }

      &.active {
        background-color: #00bc70;
      }
    }
  }
}
</style>
