<template>
  <div class="label_wrap">
    <label class="input">
      <i v-if="props.placeholder" v-show="showPlaceholder">{{ placeholder }}</i>
      <input
        ref="inputRef"
        v-model="model"
        type="text"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :inputmode="inputmode"
        :maxlength="maxlength"
        @input="
          (e) => {
            emit('input', e)
          }
        "
        @change="
          (e) => {
            emit('change', e)
          }
        "
        @focus="focusEvent"
        @blur="togglePlaceholder" />
      <button v-show="!props.readonly && model" class="icon_del" @click="clearText">Delete</button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useUtils } from '@inmModule/composables/useUtils'
import { ref, watch } from '#imports'

const { removeNonNumeric } = useUtils()

defineOptions({
  inheritAttrs: false
})

const inputRef = ref()

const emit = defineEmits(['focus', 'blur', 'input', 'change'])

interface IInputTextProps {
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  onlyNumber?: boolean
  /** 음수 허용여부 */
  allowNegative?: boolean
  maxlength?: number | string
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
}

const props = withDefaults(defineProps<IInputTextProps>(), {
  placeholder: '',
  readonly: false,
  disable: false,
  onlyNumber: false,
  allowNegative: false,
  maxlength: undefined,
  inputmode: 'text'
})

const model = defineModel<string | number>()
const showPlaceholder = ref<boolean>(true)

const focusEvent = (event: any) => {
  togglePlaceholder(event)
  emit('focus')
}

/** placeholder toggle */
const togglePlaceholder = (event: Event) => {
  const eventType: string = event.type
  if (eventType === 'focus') {
    showPlaceholder.value = false
  }

  if (eventType === 'blur' && !model.value) {
    showPlaceholder.value = true
    emit('blur')
  }
}

const clearText = () => {
  model.value = ''
}

watch(
  model,
  (value) => {
    showPlaceholder.value = !model.value
    if (props.onlyNumber) {
      model.value = removeNonNumeric(`${value}`, props.allowNegative)
    }
  },
  { immediate: true }
)

defineExpose({
  focus: () => {
    inputRef.value?.focus()
  }
})
</script>

<style lang="scss" scoped>
input[type='text']:disabled {
  background-color: #eee !important;
  border-color: #ddd !important;
}
label.input,
label.select > div {
  position: relative;
  display: block;
}
label.input {
  i {
    color: #aaa;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    position: absolute;
    top: 20px;
    left: 15px;
    display: block;
    transform: translateY(-50%);
    &.hide {
      display: none;
    }
  }
  input[type='text'],
  input[type='password'],
  input[type='number'] {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
  }
  * {
    flex: 1 auto;
  }
}
.label_wrap {
  position: relative;
  flex: 1;
  button[class*='icon_'] {
    width: 24px;
    height: 24px;
    font-size: 0;
    background-image: url('@inmModule/assets/images/common/icon_split.png');
    background-repeat: no-repeat;
    background-size: 250px auto;
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 15px;
    z-index: 1;
    & + button[class*='icon_'] {
      margin-right: 34px;
    }
    &.active {
      display: block;
    }
    &.icon_del {
      background-position: 0 0;
    }
    &.icon_pass {
      background-position: -80px 0;
    }
    &.icon_text {
      background-position: -40px 0;
    }
  }
}
</style>
