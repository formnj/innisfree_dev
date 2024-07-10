<template>
  <div class="err_wrap" :class="{ err: props.isError }">
    <slot></slot>
    <em v-if="isError" class="err_txt">{{ props.errText }}</em>
  </div>
</template>

<script setup>
const props = defineProps({
  isError: {
    type: Boolean,
    default: false
  },
  errText: {
    type: String,
    default: ''
  }
})
</script>
