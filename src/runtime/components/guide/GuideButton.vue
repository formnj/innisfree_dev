<template>
  <div>
    <GuideComponent
      title="InmButtom"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <template #controls>
        <div class="control">
          <h4>disabled</h4>
          <label> <input v-model="disabled" type="checkbox" /> </label>
        </div>
        <div class="control">
          <h4>class</h4>
          <label><input v-model="className" type="radio" value="btn_big" /> btn_big</label>
          <label><input v-model="className" type="radio" value="btn_mid" /> btn_mid </label>
          <label><input v-model="className" type="radio" value="btn_min" /> btn_min </label>
          <label><input v-model="className" type="radio" value="btn_sm" /> btn_sm </label>
          <label><input v-model="className" type="radio" value="btn_big_outline" /> btn_big_outline </label>
          <label><input v-model="className" type="radio" value="btn_mid_outline" /> btn_mid_outline </label>
          <label><input v-model="className" type="radio" value="btn_outline" /> btn_outline </label>
          <label><input v-model="className" type="radio" value="btn_min_outline" /> btn_min_outline </label>
          <label><input v-model="className" type="radio" value="btn_sm_outline" /> btn_sm_outline </label>
          <label><input v-model="className" type="text" /> </label>
        </div>
        <div class="control">
          <h4>text</h4>
          <label><input v-model="textInput" type="text" /> </label>
        </div>
      </template>
      <InmButton :class="className" :disabled="disabled" @click="handleClick">{{ textInput }}</InmButton>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '#imports'
import GuideComponent from './GuideComponent.vue'

const disabled = ref(false)
const className = ref('btn_big')
const textInput = ref('button text')
const handleClick = () => {
  console.log('Button clicked')
}

const initialCode = computed(() => {
  return `
    <InmButton :class="${className.value}" :disabled="${disabled.value}" @click="handleClick">${textInput.value}</InmButton>
  `
})

const descriptions = ['txt 와 slot 둘다 존재할경우 slot 의 내요을 노출합니다.']

const propsData = [
  { name: 'txt', type: 'String', description: '버튼 내용' },
  { name: 'class', type: 'String', description: '클래스를 작성합니다.' },
  { name: 'disabled', type: 'Boolean', default: 'false', description: '비활성화 여부를 설정합니다.' }
]

const eventsData = [{ name: 'click', description: '클릭 이벤트 입니다.' }]

const slotsData = [{ name: 'default', description: '버튼 내용' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
