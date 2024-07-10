<template>
  <div>
    <GuideComponent
      title="InmInputPassword"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>placeholder</h4>
          <label><input v-model="placeholder" type="text" /> </label>
        </div>
        <div class="control">
          <h4>maxlength</h4>
          <InmQuantity v-model="maxlength" />
        </div>
      </template>
      <InmInputPassword v-model="inputTextValue" :maxlength="maxlength" :placeholder="placeholder" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const inputTextValue = ref('')
const placeholder = ref('패스워드를 해주세요')
const maxlength = ref(10)

const initialCode = computed(() => {
  return `
  <InmInputPassword v-model="inputTextValue" :placeholder="placeholder" />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'String', description: '입력값.' },
  { name: 'placeholder', type: 'String', description: '입력 필드에 표시되는 자리 표시자 텍스트. ' }
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
