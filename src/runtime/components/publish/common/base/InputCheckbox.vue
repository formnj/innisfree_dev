<template>
  <label :class="[isSwitch ? 'check_ani' : 'check']">
    <input v-model="model" type="checkbox" :true-value="props.trueValue" :false-value="props.falseValue" />
    <em class="label">{{ props.text }}</em>
  </label>
</template>

<script setup lang="ts">
interface IInputCheckboxProps {
  text?: string
  isSwitch?: boolean
  trueValue?: boolean | string
  falseValue?: boolean | string
}

const props = defineProps<IInputCheckboxProps>()
const model = defineModel<boolean | string[] | string>()
</script>

<style scoped>
/* checkbox */
em {
  font-style: normal;
}
.check {
  min-height: 20px;
  padding-left: 26px;
  line-height: 1;
  position: relative;
  display: inline-block;
}
.check > * {
  line-height: 1.4;
  vertical-align: middle;
  display: inline-block;
}
.check input {
  margin: 0 0 0 1px;
  position: absolute;
}
.check .label:before,
.check .label:after {
  content: '';
  position: absolute;
  display: inline-block;
}

.check input[type='checkbox'] {
  opacity: 0;
}

.check input[type='checkbox'],
.check input[type='checkbox'] + .label:before {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  top: 0;
  left: 0;
}
.check input[type='checkbox']:checked + .label:after {
  width: 8px;
  height: 13px;
  border: 2px solid #333;
  border-top: 0;
  border-left: 0;
  top: 1px;
  left: 6px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.check_ani {
  position: relative;
  display: inline-block;
}
.check_ani input {
  margin: 0 0 0 1px;
  position: absolute;
  opacity: 0;
}
.check_ani input[type='checkbox'] {
  opacity: 0;
}
.check_ani .label {
  min-height: 22px;
  padding-left: 48px;
  position: relative;
  display: block;
}
.check_ani .label:before {
  width: 42px;
  height: 22px;
  background-color: #ccc;
  border: 0;
  border-radius: 60px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
}
.check_ani input[type='checkbox'] + .label:after {
  width: 18px;
  height: 18px;
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
}
.check_ani input[type='checkbox']:checked + .label:before {
  background-color: #ff7200;
}
.check_ani input[type='checkbox']:checked + .label:after {
  left: 22px;
}
</style>
