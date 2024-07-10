<template>
  <div class="sub_title_wrap">
    <h3>비밀번호 재확인</h3>
    <div class="explain">
      회원님의 개인정보 보호를 위해 비밀번호를 입력해주세요.<br />
      이니스프리는 회원님의 개인정보를 신중히 취급하며, 회원님의 동의 없이는 회원정보가 공개되지 않습니다.<br />
      보다 다양한 혜택/서비스를 받으시려면 회원 정보를 최신으로 유지해주세요.
    </div>
  </div>

  <fieldset class="pwd_field">
    <legend>비밀번호 입력</legend>
    <div class="label">비밀번호</div>
    <Inputs _type="password" />
    <Button class="btn_mid confirm" txt="확인" />
  </fieldset>
</template>
<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})
</script>
<style lang="scss" scoped>
.sub_title_wrap {
  padding: 0;
  margin-bottom: 24px;
  .explain {
    margin-top: 24px;
    color: #000;
  }
}

.pwd_field {
  padding: 20px;
  border-top: 2px solid #000;
  border-bottom: 1px solid #eee;
  position: relative;
  legend {
    position: absolute;
    z-index: -1;
    font-size: 0;
  }
  .label {
    margin-right: 70px;
    color: #000;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
  }
  :deep(.input_wrap) {
    width: 227px;
    display: inline-block;
    .input {
      input {
        border-color: #eee;
      }
    }
  }
  > :deep(button) {
    width: 200px;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    bottom: -110px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
