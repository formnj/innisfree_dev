<template>
  <div class="inner">
    <section>
      <ul class="input_list">
        <li>
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_agree', 'alert modal_agree')">
            [필수] 개인정보 수집/이용동의
          </button>

          <div id="modal_agree" class="modal_wrap">
            <div class="modal_container">
              <button class="btn_close" @click="modal.close(this)">닫기</button>
              <div class="modal_content">
                <h2>개인정보 수집/이용 동의</h2>
                <p>이니스프리에서 공병수거를 진행하기 위하여 다음과 같이 개인정보를 수집 및 이용합니다.</p>
                <ul class="bul_list">
                  <li>수집하는 개인정보 항목 : 이름, 휴대폰번호, 주소</li>
                  <li>수집 및 이용목적 : 공병수거 신청자연락 및 공병수거지 방문</li>
                  <li>보유 및 이용기간 : <strong>공병수거 완료 후 30일</strong></li>
                </ul>
                <p>고객님께서는 개인정보 수집 및 이용동의에 거부할 수 있습니다. 다만, 거부하는 경우 공병수거 참여가 불가능합니다.</p>
              </div>
            </div>
            <div class="overlay" @click="modal.close(this)"></div>
          </div>
        </li>
      </ul>
    </section>
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
  &.modal_agree {
    .modal_content {
      padding: 3rem 2rem;

      h2 {
        margin-bottom: 1rem;
      }

      p {
        color: #666;

        & + ul {
          margin: 0.5rem 0;
          color: #666;
        }
      }
    }
  }
}
</style>
