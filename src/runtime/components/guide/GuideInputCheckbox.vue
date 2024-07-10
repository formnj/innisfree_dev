<template>
  <div>
    <GuideComponent
      title="InmInputCheckbox"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>disabled</h4>
          <label> <input v-model="disabled" type="checkbox" /> </label>
        </div>
        <div class="control">
          <h4>is-switch</h4>
          <label> <input v-model="isSwitch" type="checkbox" /> </label>
        </div>
        <div v-if="!isSwitch" class="control">
          <h4>Class</h4>
          <label> 기본 : <input v-model="className" type="radio" text="기본" value="" /> </label>
          <label> checkbox02 : <input v-model="className" type="radio" text="checkbox02" value="checkbox02" /> </label>
          <label> round_square : <input v-model="className" type="radio" text="round_square" value="round_square" /> </label>
        </div>
      </template>
      <InmInputCheckbox
        v-model="value"
        text="체크여부"
        true-value="Y"
        false-value="N"
        :is-switch="isSwitch"
        :disabled="disabled"
        :class="isSwitch ? '' : className" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const value = ref('')
const className = ref('')
const isSwitch = ref(false)
const disabled = ref(false)

const initialCode = computed(() => {
  return `
<InmInputCheckbox v-model="value" text="체크여부" true-value="Y" false-value="N" :is-switch="${isSwitch.value}" :disabled="${disabled.value}" />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'Boolean | String', description: '입력값.' },
  { name: 'text', type: 'String', description: '화면에 노출되는 텍스트' },
  { name: 'isSwitch', type: 'Boolean', default: 'false', description: '스위치 스타일의 체크박스 여부' },
  { name: 'trueValue', type: 'Boolean | String', default: 'true', description: '체크박스가 선택되었을 때의 값.' },
  { name: 'falseValue', type: 'Boolean | String', default: 'false', description: '체크박스가 선택되지 않았을 때의 값.' },
  { name: 'disabled', type: 'Boolean', default: 'false', description: '입력 필드가 비활성화되어 사용자가 입력할 수 없도록 설정.' }
]

const eventsData = undefined
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
