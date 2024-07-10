<template>
  <div v-if="opened" class="modal_wrap active layer tooltip" :style="style">
    <div class="modal_container">
      <button class="btn_close" @click.self="close">닫기</button>
      <div class="modal_content">
        <slot></slot>
      </div>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script setup lang="ts">
interface ITooltipProps {
  style: any
}
const opened = defineModel({ type: Boolean, default: true })

withDefaults(defineProps<ITooltipProps>(), {
  style: undefined
})

const emit = defineEmits(['close', 'ok'])

function close() {
  opened.value = false
  emit('close')
}
</script>

<style scoped></style>
