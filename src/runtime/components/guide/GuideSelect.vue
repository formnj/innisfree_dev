<template>
  <div>
    <GuideComponent
      title="InmSelectbox"
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
      <InmSelectbox
        v-model="value"
        :options="[
          { value: '1', text: '1번 선택합니다' },
          { value: '2', text: '2번 선택합니다' }
        ]"
        :disabled="disabled" />
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
<InmSelectbox
  v-model="value"
  :options="[
    { value: '1번', text: '1번 선택합니다' },
    { value: '2번', text: '2번 선택합니다' }
  ]"
  :disabled="${disabled.value}" />
</GuideComponent>
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'Boolean | String', description: '입력값.' },
  { name: 'disabled', type: 'Boolean', description: '입력 필드가 비활성화되어 사용자가 입력할 수 없도록 설정.' }
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
