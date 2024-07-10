<template>
  <div>
    <GuideComponent
      title="InmTextarea"
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
          <h4>placeholder</h4>
          <label><input v-model="placeholder" type="text" /> </label>
        </div>
      </template>
      <InmTextarea v-model="value" :readonly="readonly" :disabled="disabled" :placeholder="placeholder" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const value = ref('')
const placeholder = ref('입력 해주세요')
const readonly = ref(false)
const disabled = ref(false)

const initialCode = computed(() => {
  return `
 <InmTextarea v-model="value" :readonly="${readonly.value}" :disabled="${disabled.value}" :placeholder="${placeholder.value}" />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'String', description: '입력값.' },
  { name: 'placeholder', type: 'String', description: '입력 필드에 표시되는 자리 표시자 텍스트. ' },
  { name: 'readonly', type: 'Boolean', default: 'false', description: '읽기 전용 여부를 설정. ' },
  { name: 'disabled', type: 'Boolean', default: 'false', description: '입력 필드가 비활성화되어 사용자가 입력할 수 없도록 설정.' },
  { name: 'rows', type: 'Number', description: '표시할 행 수.' },
  { name: 'cols', type: 'Number', description: '표시할 열 수.' }
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
