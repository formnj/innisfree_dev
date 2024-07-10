<template>
  <label class="check">
    <input v-model="model" type="radio" :value="props.value" />
    <em class="label">{{ props.text }}</em>
  </label>
</template>

<script setup lang="ts">
interface IInputRadioProps {
  text?: string
  value: string | number
}

const props = defineProps<IInputRadioProps>()
const model = defineModel<string | number>()
</script>

<style scoped>
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

/* radio */
.check input[type='radio'] {
  opacity: 0;
}
.check input[type='radio'],
.check input[type='radio'] + .label:before {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-sizing: border-box;
  top: 0;
  left: 0;
}
.check input[type='radio']:checked + .label:after {
  width: 14px;
  height: 14px;
  background-color: #333;
  border-radius: 50%;
  box-sizing: border-box;
  top: 3px;
  left: 3px;
}

label.input * {
  flex: 1 auto;
}
</style>
