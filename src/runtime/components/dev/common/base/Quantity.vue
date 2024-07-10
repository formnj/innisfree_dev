<template>
  <div class="count_wrap">
    <InmButton class="btn_dec" :disabled="disabled" @click="decrease">-</InmButton>
    <InmInputText v-model="internalValue" :only-number="true" :allow-negative="true" :disabled="disabled" @input="onInput"></InmInputText>
    <InmButton class="btn_inc" txt="+" :disabled="disabled" @click="increase">+</InmButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from '#imports'

// Props 정의
const props = defineProps({
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    required: true,
    default: '0'
  }
})

// emit 가져오기
const emit = defineEmits(['update:modelValue', 'increase', 'decrease'])

// 내부 상태 관리
const internalValue = ref(props.modelValue)

// 입력 이벤트 핸들러
const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = Number(input.value)

  if (value < props.min) {
    value = props.min
  } else if (value > props.max) {
    value = props.max
  }

  internalValue.value = value.toString()
  emit('update:modelValue', internalValue.value)
}

// 증가 함수
const increase = () => {
  let value = Number(internalValue.value || 0) + 1
  if (value > props.max) {
    value = props.max
  }
  internalValue.value = value.toString()
  emit('update:modelValue', internalValue.value)
  emit('increase', internalValue.value)
}

// 감소 함수
const decrease = () => {
  let value = Number(internalValue.value || 0) - 1
  if (value < props.min) {
    value = props.min
  }
  internalValue.value = value.toString()
  emit('update:modelValue', internalValue.value)
  emit('decrease', internalValue.value)
}

// Props 변경 감시
watch(
  () => props.modelValue,
  (newValue) => {
    let value = Number(newValue)
    if (value < props.min) {
      value = props.min
    } else if (value > props.max) {
      value = props.max
    }
    internalValue.value = value.toString()
  }
)

// 컴포넌트가 마운트될 때 초기 값 검증
onMounted(() => {
  let initialValue = Number(internalValue.value)
  if (initialValue < props.min) {
    initialValue = props.min
  } else if (initialValue > props.max) {
    initialValue = props.max
  }
  internalValue.value = initialValue.toString()
  emit('update:modelValue', internalValue.value)
})
</script>

<style lang="scss" scoped>
.count_wrap {
  border: 1px solid #eee;
  display: flex;
  :deep(button) {
    width: 45px;
    background-color: #fff;

    &:disabled {
      background-color: #f5f5f5;

      em {
        color: #aaa;
      }
    }

    em {
      font-size: 20px;
      padding: 0;
      color: #000;
    }
    &.icon_del {
      display: none !important;
    }
  }
  :deep(input) {
    padding: 0;
    border: 0;
    text-align: center;

    &:disabled {
      color: #aaa;
      background-color: #f5f5f5 !important;
    }
  }
}
</style>
