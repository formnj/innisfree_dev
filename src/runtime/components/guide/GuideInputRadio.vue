<template>
  <div>
    <GuideComponent
      title="InmInputRadio"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>disabled</h4>
          <label> <input v-model="disabled" type="checkbox" /> </label>
        </div>
      </template>
      <InmInputRadio v-model="value" :disabled="disabled" text="선택1" value="1" />
      <InmInputRadio v-model="value" :disabled="disabled" text="선택2" value="2" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const value = ref('')

const disabled = ref(false)
const initialCode = computed(() => {
  return `
<InmInputRadio v-model="value" :disabled="${disabled.value}" text="선택1" value="1" />
<InmInputRadio v-model="value" :disabled="${disabled.value}" text="선택2" value="2" />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'String', description: '입력값.' },
  { name: 'text', type: 'String', description: '화면에 노출되는 텍스트' },
  { name: 'value', type: 'String', description: '실제 값' },
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
