<template>
  <div class="inner">
    <!-- 임직원 인증 전 -->
    <section v-if="!acc_auth" class="before_auth">
      <div class="title">
        <h3>
          이니스프리 및 아모레퍼시픽 임직원이라면<br />
          <span>AP-ON 계정인증</span>을 통해<br />
          이니스프리 임직원 서비스를 이용하실 수 있습니다.
        </h3>
      </div>
      <div class="input_list">
        <Inputs class="id" _type="text" _placeholder="AP - ON ID" />
        <Inputs class="pwd" _type="password" _placeholder="AP - ON PASSWORD" />
        <Button class="btn_mid confirm" txt="인증하기" @click="account_check" />
      </div>
      <p class="explain">*임직원인증은 최초 1회에 한해 진행되며,<br />로그인 시 뷰티포인트 통합 멤버십 계정에 연동됩니다.</p>
    </section>
    <!-- //임직원 인증 전 -->

    <!-- 임직원 인증 후 -->
    <section v-if="acc_auth" class="after_auth">
      <div class="title">
        <div class="img"><img src="@inmModule/assets/images/common/icon_auth.png" /></div>
        <h3>임직원인증 완료</h3>
      </div>
      <ul class="btn_list">
        <li><Button class="btn_mid confirm" txt="임직원샵으로 이동" @click="page_link" /></li>
        <li><p class="explain">임직원 쿠폰은 오늘 오전 00시에 발급됩니다.</p></li>
        <li><button class="btn_unauth" type="button" @click="modal.open('modal_unauth', 'alert')">인증 해제</button></li>
      </ul>
    </section>
    <!-- //임직원 인증 후 -->
  </div>

  <div id="modal_account" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <div class="cont">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <p>알림</p>
          <p>{{ acc_data }}</p>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_auth_succ" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <div class="cont">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <p>임직원인증 완료</p>
          <p>
            <em>김이나</em>님의 임직원인증이 완료되었습니다.<br />
            지금부터 이니스프리 임직원 서비스 헤택이 적용됩니다.
          </p>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="임직원샵으로 이동" @click="page_link" />
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_unauth" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <div class="cont">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <p>임직원인증 해제</p>
          <p>
            인증을 해제하시겠습니까?<br />
            해제 시 임직원 서비스 혜택이 적용되지 않습니다.
          </p>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, useRouter, ref, onMounted } from '#imports'
const router = useRouter()

definePageMeta({
  layout: 'publish-mo-name'
})

const acc_auth = ref(false)
const acc_data = ref('아이디를 입력해주세요.')

const account_check = () => {
  const id = document.querySelector('.input_wrap.id .input input')
  const pwd = document.querySelector('.input_wrap.pwd .input input')

  if (id.value === '' && pwd.value === '') acc_data.value = '아이디를 입력해주세요.'
  if (id.value !== '' && pwd.value === '') acc_data.value = '비밀번호를 입력해주세요.'

  if (id.value !== '' && pwd.value !== '') {
    acc_auth.value = true

    modal.open('modal_auth_succ', 'alert')
    return false
  }

  modal.open('modal_account', 'alert')
}

const page_link = () => {
  router.push('/publish/IN_MO_HOM_01_16')
  modal.close(event.target)
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '임직원인증관리')
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;

  .title {
    padding: 6rem 0 4rem;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.4rem;
      letter-spacing: -0.01em;
      text-align: center;

      span {
        color: #ff0000;
        font-weight: 600;
      }
    }
  }

  .input_list {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    :deep(button) {
      em {
        font-weight: 600;
      }
    }
  }

  .explain {
    color: #888;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
    text-align: center;
  }

  .after_auth {
    .title {
      .img {
        width: 6rem;
        margin-bottom: 2rem;
      }

      h3 {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    .btn_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      li {
        &:first-child {
          width: 100%;
          > button {
            width: inherit;
          }
        }

        .btn_unauth {
          color: #000;
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 2.4rem;
          letter-spacing: -0.01em;
          text-decoration: underline;
        }
      }
    }
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      padding: 3rem 2rem;

      .cont {
        .btn_close {
          width: 1.6rem;
          height: 1.6rem;
          font-size: 0;
          background-color: transparent;
          position: absolute;
          top: 1rem;
          right: 1rem;

          &:before,
          &:after {
            width: 100%;
            border-top: 0.1rem solid #222;
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
          }

          &:before {
            transform: rotate(45deg);
          }

          &:after {
            transform: rotate(-45deg);
          }
        }

        p {
          &:nth-child(2) {
            margin-bottom: 10px;
            color: #000;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.4rem;
            letter-spacing: -0.01em;
          }

          &:nth-child(3) {
            color: #666;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 2rem;
            letter-spacing: -0.01em;
          }

          em {
            color: #00bc70;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
