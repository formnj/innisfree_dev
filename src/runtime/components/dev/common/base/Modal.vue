<template>
  <div v-if="opened" :class="['modal_wrap', 'active', modalType]" :style="style">
    <div class="modal_container">
      <div v-if="header" class="modal_header">
        <slot name="header">
          <h2>&nbsp;</h2>
        </slot>
        <button v-if="closeIcon" class="btn_close" @click.self="close">닫기</button>
      </div>
      <div class="modal_content">
        <slot></slot>
      </div>

      <slot v-if="footer" name="footer">
        <div v-if="modalType != 'bottom'" class="modal_footer">
          <InmButton v-if="closeButton" class="btn_" @click="close">{{ closeButtonText }}</InmButton>
          <InmButton class="btn_ confirm" @click="ok">{{ okButtonText }}</InmButton>
        </div>
      </slot>
    </div>
    <div v-if="overlay" class="overlay" @click.self="dimClose"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from '#imports'

enum ModalType {
  default = '',
  wide = 'full',
  bottom = 'bottom',
  side = 'detailSearch',
  full = 'fullMo',
  layer = 'layer',
  tooltip = 'layer tooltip'
}

const opened = defineModel({ type: Boolean, default: true })

interface IModalProps {
  type?: string
  closeIcon?: boolean
  dimCloseble?: boolean
  okButtonText?: string
  closeButton?: boolean
  closeButtonText?: string
  reject?: Function
  resolve?: Function
  overlay?: boolean
  header?: boolean
  footer?: boolean
  style?: any
}

const props = withDefaults(defineProps<IModalProps>(), {
  type: ModalType.default,
  closeIcon: true,
  dimCloseble: true,
  okButtonText: '확인',
  closeButton: true,
  closeButtonText: '취소',
  resolve: undefined,
  reject: undefined,
  overlay: true,
  header: true,
  footer: true,
  style: undefined
})

const emit = defineEmits(['close', 'ok'])

const modalType = computed(() =>
  props.type === 'side'
    ? ModalType.side
    : props.type === 'wide'
      ? ModalType.wide
      : props.type === 'full'
        ? ModalType.full
        : props.type === 'layer'
          ? ModalType.layer
          : props.type
)

watch(opened, (value) => {
  const { lock, unlock } = useBodyScrollLock()
  value ? lock() : unlock()
})

function dimClose() {
  props.dimCloseble && close()
}
function close() {
  opened.value = false
  emit('close')
  props.reject && props.reject(false)
}
function ok() {
  opened.value = false
  emit('ok')
  props.resolve && props.resolve(true)
}

const useBodyScrollLock = () => {
  const lock = () => {
    if (props.type.indexOf('layer') === -1) document.body.style.overflow = 'hidden'
  }
  const unlock = () => {
    setTimeout(() => {
      if ([...document.querySelectorAll('.modal_wrap.active')].filter((element) => !element.classList.contains('layer')).length === 0)
        document.body.style.overflow = ''
    })
  }

  return { lock, unlock }
}
</script>

<style scoped></style>
