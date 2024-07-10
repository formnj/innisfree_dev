<template>
  <div class="inner">
    <fieldset class="pwd_field">
      <legend>비밀번호 재확인</legend>
      <div class="label">비밀번호 재확인</div>
      <Inputs _type="password" _placeholder="비밀번호 입력" />
      <Button class="btn_ confirm" txt="확인" />
    </fieldset>
    <div class="explain">개인정보 보호를 위해 주기적으로 비밀번호를 변경해 주시고, 타인에게 비밀번호가 노출되지 않도록 주의해 주세요.</div>
  </div>
</template>
<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '개인정보수정')
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 3.2rem 2rem 10rem;
}
.pwd_field {
  position: relative;
  legend {
    position: absolute;
    z-index: -1;
    font-size: 0;
  }
  .label {
    margin-bottom: 0.8rem;
    color: #999;
    font-size: 1.3rem;
  }
  :deep(.input_wrap) {
    .input {
      input {
        height: 4rem;
        border-color: #eee;
      }
    }
  }
  > :deep(button) {
    width: 100%;
    margin-top: 1.2rem;
  }
}
.explain {
  margin-top: 3.4rem;
  padding-left: 0.6rem;
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: -0.01em;
  position: relative;
  &:before {
    content: '';
    width: 0.2rem;
    height: 0.2rem;
    background: #666;
    display: inline-block;
    position: absolute;
    top: 0.7rem;
    left: 0;
  }
}
</style>
