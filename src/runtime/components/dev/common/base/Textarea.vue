<template>
  <div class="label_wrap">
    <label class="input">
      <i v-if="props.placeholder && !props.disabled && !model">{{ placeholder }}</i>
      <textarea
        v-model="model"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :rows="props.rows"
        :cols="props.cols"
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
        @focus="
          (e) => {
            emit('focus', e)
          }
        "
        @blur="
          (e) => {
            emit('blur', e)
          }
        " />
      <button v-show="model" class="icon_del" @click="clear">Delete</button>
    </label>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
interface ITextareaProp {
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  rows?: number
  cols?: number
}

const emit = defineEmits(['focus', 'blur', 'input', 'change'])

const model = defineModel<string>()

const props = withDefaults(defineProps<ITextareaProp>(), {
  placeholder: '',
  readonly: false,
  disabled: false,
  rows: undefined,
  cols: undefined
})

const clear = () => {
  model.value = ''
}
</script>
<style lang="scss" scoped>
label.input {
  position: relative;
  display: block;
  i {
    color: #aaa;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    &.hide {
      display: none;
    }
  }
  textarea {
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 18px;
    resize: none;
  }
  .err_txt {
    margin-top: 5px;
    color: #12b560;
    font-size: 12px;
    line-height: 18px;
    display: block;
  }
}

.label_wrap {
  position: relative;
  flex: 1;
  em {
    font-style: normal;
  }
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
    display: none;
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
