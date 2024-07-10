<template>
  <div class="input_wrap" :class="{ err: props.isError }">
    <slot></slot>
    <em v-if="props.isError" class="err_txt">{{ props.errorText }}</em>
  </div>
</template>

<script setup lang="ts">
interface IInputValidationProps {
  isError?: boolean
  errorText?: String
}

const props = defineProps<IInputValidationProps>()
</script>

<style lang="scss" scoped>
.input_wrap {
  flex: 1;
}
.err {
  :deep(input[type='text']) {
    border-color: #ff0000;
  }
}
</style>
