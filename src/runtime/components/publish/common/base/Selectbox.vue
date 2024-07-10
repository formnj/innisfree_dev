<template>
  <label class="select">
    <div>
      <select v-model="model" :class="{ changed: isChange }" :disabled="props.isDisabled" @change="isChange = true">
        <option v-for="(option, key) in props.options" :key="key" :value="option.value">{{ option.text }}</option>
      </select>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from '#imports'

interface IOptions {
  value: string
  text: string
}

interface ISelectProps {
  options: Array<IOptions>
  isDisabled?: boolean
}

const props = defineProps<ISelectProps>()

const isChange = ref<boolean>(false)
const model = defineModel<string>()
</script>

<style lang="scss" scoped>
/* select_form */
select {
  width: 100%;
  height: 40px;
  padding: 12px 40px 12px 12px;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid #aaa;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

label.select > div {
  position: relative;
  display: block;
}
label.select > div:after {
  width: 12px;
  height: 12px;
  margin-top: -4px;
  border: 1px solid #222;
  border-top: 0;
  border-left: 0;
  content: '';
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%) rotate(45deg);
}
label.select select {
  color: #aaa;
}
label.select select:disabled {
  background-color: #eee;
  border-color: #ddd;
}
label.select select.changed {
  color: #222;
}
label.select > em {
  margin-top: 5px;
  color: #f24f39;
  font-size: 12px;
  font-family: 'Noto Sans';
  line-height: 18px;
  display: none;
}
label.select.err > em {
  display: block;
}
</style>
