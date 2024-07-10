<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <div class="btn_wrap">
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle_check', 'full modal_empty_bottle_check')">
            공병수거 신청 필수사항 CHECK!
          </button>
        </div>
      </div>
    </section>

    <div id="modal_empty_bottle_check" class="modal_wrap full active modal_empty_bottle_check">
      <div class="modal_container">
        <div class="modal_header">
          <h2>공병수거 신청 필수사항 CHECK!</h2>
          <button class="btn_close" @click="modal.close(this)">닫기</button>
        </div>
        <div class="modal_content">
          <img src="@inmModule/assets/images/common/img_bottle_check_01.png" alt="" />
          <ol>
            <li>사용한 이니스프리 공병들을 모아 깨끗하게 비워주세요.<br /><span>* 10개의 이니스프리 공병이 필요해요!</span></li>
          </ol>
          <img src="@inmModule/assets/images/common/img_bottle_check_02.png" alt="" />
          <ol start="2">
            <li>박스에 공병들을 담아 포장을 해주세요.<br /><span>* 1개 박스에 포장 부탁드립니다.</span></li>
          </ol>
          <img src="@inmModule/assets/images/common/img_bottle_check_03.png" alt="" />
          <ol start="3">
            <li>
              박스 겉면에 ‘이니스프리 공병수거'를 잘보이게 적어주세요!<br /><span
                >* 신청 완료되면 영업일 기준 2~3일 내에 택배 기사분이 수거를 위해 방문하실 거에요.</span
              >
            </li>
          </ol>
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
  &.modal_empty_bottle_check {
    .modal_content {
      padding: 2.1rem;
    }

    ol {
      margin: 10px 0 30px;
      list-style: auto;
      padding-left: 15px;
      li {
        color: #666;
        line-height: 20px;
        span {
          font-size: 13px;
          color: #888;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
