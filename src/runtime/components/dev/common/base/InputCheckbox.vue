<template>
  <label :class="[isSwitch ? 'check_ani' : 'check']">
    <input v-model="model" type="checkbox" :true-value="props.trueValue" :false-value="props.falseValue" :disabled="props.disabled" />
    <em class="label">{{ props.text }}</em>
  </label>
</template>

<script setup lang="ts">
interface IInputCheckboxProps {
  text?: string
  isSwitch?: boolean
  trueValue?: boolean | string
  falseValue?: boolean | string
  disabled?: boolean
  isError?: boolean
  errorText?: string
}

const props = withDefaults(defineProps<IInputCheckboxProps>(), {
  trueValue: true,
  falseValue: false,
  text: '',
  errorText: ''
})

const model = defineModel<boolean | string[] | string>()
</script>

<style scoped>
.check {
  min-height: 20px;
  padding-left: 26px;
  line-height: 1;
  position: relative;
  display: inline-block;
  cursor: pointer;
  > * {
    line-height: 1.4;
    vertical-align: middle;
    display: inline-block;
  }
  input {
    margin: 0 0 0 1px;
    position: absolute;
  }
  .label:before,
  .label:after {
    content: '';
    position: absolute;
    display: inline-block;
  }
  input[type='radio'],
  input[type='checkbox'] {
    opacity: 0;
  }
  input[type='radio'],
  input[type='radio'] + .label:before {
    width: 20px;
    height: 20px;
    background-color: #ddd;
    border-radius: 50%;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
  input[type='radio']:checked + .label:before {
    background-color: #00bc70;
  }
  input[type='radio'] + .label:after,
  input[type='radio']:checked + .label:after {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    box-sizing: border-box;
    top: 6px;
    left: 6px;
  }
  input[type='checkbox'],
  input[type='checkbox'] + .label:before {
    width: 20px;
    height: 20px;
    background-color: #ddd;
    box-sizing: border-box;
    top: 0;
    left: 0;
    transition: all 0.2s;
  }
  input[type='checkbox'] + .label:after {
    width: 6px;
    height: 9px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    top: 4px;
    left: 7px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  input[type='checkbox']:checked,
  input[type='checkbox']:checked + .label:before {
    background-color: #00bc70;
  }
  input[type='checkbox']:disabled,
  input[type='checkbox']:disabled + .label:before {
    background-color: #f5f5f5;
    cursor: default;
  }
}

.check_ani {
  position: relative;
  display: inline-block;
  input {
    margin: 0 0 0 1px;
    position: absolute;
    opacity: 0;
    &[type='checkbox'] {
      opacity: 0;
      & + .label:after {
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 50%;
        content: '';
        position: absolute;
        top: 50%;
        left: 2px;
        z-index: 1;
        display: block;
        transform: translateY(-50%);
        transition: all 0.2s;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
      }
      &:checked + .label:before {
        background-color: #12b560;
      }
      &:checked + .label:after {
        left: 17px;
      }
    }
  }
  .label {
    min-height: 20px;
    padding-left: 48px;
    font-size: 16px;
    position: relative;
    display: block;
    &:before {
      width: 35px;
      height: 20px;
      background-color: #dcdcdc;
      border: 0;
      border-radius: 60px;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
    }
  }
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
.checkbox02 {
  .check {
    padding: 0;
  }
  input[type='checkbox'] {
    opacity: 0;
  }
  input[type='checkbox'] + .label {
    width: 110px;
    height: 35px;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 33px;
    border: 1px solid #ccc;
    border-radius: 17px;
  }
  input[type='checkbox']:checked + .label {
    color: #fff;
    border-color: #12b560;
    background-color: #12b560;
  }
  input[type='checkbox'] + .label:before {
    content: none;
  }
  input[type='checkbox'] + .label:after {
    content: none;
  }
}

.round_square {
  .check {
    padding: 0;
  }
  input[type='checkbox'],
  input[type='radio'] {
    opacity: 0;
  }
  input[type='checkbox'] + .label,
  input[type='radio'] + .label {
    height: 30px;
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
    line-height: 29px;
    color: #aaa;
    border-radius: 5px;
    background-color: #f5f5f5;
  }
  input[type='checkbox']:checked + .label,
  input[type='radio']:checked + .label {
    color: #fff;
    border-color: #12b560;
    background-color: #12b560;
  }
  input[type='checkbox'] + .label:before,
  input[type='radio'] + .label:before {
    content: none;
  }
  input[type='checkbox'] + .label:after,
  input[type='radio'] + .label:after {
    content: none;
  }
}
</style>
