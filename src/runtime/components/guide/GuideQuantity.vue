<template>
  <div>
    <GuideComponent
      title="InmQuantity"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <InmQuantity
        v-model="model"
        :max="10"
        @increase="
          (v) => {
            console.log('increase..', v)
          }
        "
        @decrease="
          (v) => {
            console.log('decrease..', v)
          }
        " />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '#imports'
import GuideComponent from './GuideComponent.vue'

const model = ref(1000)

const initialCode = computed(() => {
  return `
 <InmQuantity
    v-model="model"
    :max="10"
    @increase="
      (v) => {
        console.log('increase..', v)
      }
    "
    @decrease="
      (v) => {
        console.log('decrease..', v)
      }
    " />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'Number | String', description: '입력값.' },
  { name: 'disabled', type: 'Boolean', default: 'false', description: '' },
  { name: 'max', type: 'Number', default: 'Number.MAX_SAFE_INTEGER', description: '최대값' },
  { name: 'min', type: 'Number', default: '0', description: '최소값' }
]
const eventsData = [
  { name: 'increase', description: '+ 클릭 이벤트 입니다.' },
  { name: 'decrease', description: '- 클릭 이벤트 입니다.' }
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
