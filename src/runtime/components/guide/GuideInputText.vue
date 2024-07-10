<template>
  <div>
    <GuideComponent
      title="InmInputText"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>readonly</h4>
          <label> <input v-model="readonly" type="checkbox" /> </label>
        </div>
        <div class="control">
          <h4>disabled</h4>
          <label> <input v-model="disabled" type="checkbox" /> </label>
        </div>
        <div class="control">
          <h4>onlyNumber</h4>
          <label> <input v-model="onlyNumber" type="checkbox" /> </label>
        </div>

        <div class="control">
          <h4>placeholder</h4>
          <label><input v-model="placeholder" type="text" /> </label>
        </div>
        <div class="control">
          <h4>maxlength</h4>
          <InmQuantity v-model="maxlength" />
        </div>
      </template>
      <InmInputText
        v-model="inputTextValue"
        :readonly="readonly"
        :disabled="disabled"
        :only-number="onlyNumber"
        :maxlength="maxlength"
        :placeholder="placeholder" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const inputTextValue = ref('')
const placeholder = ref('입력 해주세요')
const readonly = ref(false)
const disabled = ref(false)
const onlyNumber = ref(false)
const maxlength = ref(10)

const initialCode = computed(() => {
  return `
<InmInputText
  v-model="inputTextValue"
  :readonly="${readonly.value}"
  :disabled="${disabled.value}"
  :only-number="${onlyNumber.value}"
  :maxlength="${maxlength.value}"
  :placeholder="${placeholder.value}" />
`
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'String', description: '입력값.' },
  { name: 'placeholder', type: 'String', description: '입력 필드에 표시되는 자리 표시자 텍스트. ' },
  { name: 'readonly', type: 'Boolean', default: 'false', description: '읽기 전용 여부를 설정. ' },
  { name: 'disabled', type: 'Boolean', default: 'false', description: '입력 필드가 비활성화되어 사용자가 입력할 수 없도록 설정.' },
  { name: 'onlyNumber', type: 'Boolean', default: 'false', description: '숫자만 입력할 수 있도록 제한.' },
  {
    name: 'inputmode',
    type: 'Boolean',
    description: ' 입력 모드를 설정하여 가상 키보드의 유형을 지정 (none | text | decimal | numeric | tel | search | email | url)'
  }
]

const eventsData = [
  { name: 'focus', description: '입력 필드가 포커스를 받을 때 발생.' },
  { name: 'blur', description: '입력 필드가 포커스를 잃을 때 발생.' },
  { name: 'input', description: '사용자가 입력 필드에 값을 입력할 때 발생.' },
  { name: 'change', description: '입력 필드의 값이 변경될 때 발생.' }
]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
