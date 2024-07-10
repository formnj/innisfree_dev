<template>
  <div>
    <GuideComponent
      title="InmStarScore"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>rate</h4>
          <label><input v-model="rate" type="range" min="0" max="5" step="0.1" /></label>
        </div>
        <div class="control">
          <h4>class</h4>
          <label> <input v-model="className" type="radio" value="" text="Medium" /> </label>
          <label> <input v-model="className" type="radio" value="type_big" text="Big" /> </label>
        </div>
      </template>
      <InmStarScore :rate="rate" :class="className" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const rate = ref<number>(1.5)
const className = ref<string>('')

const initialCode = computed(() => {
  return `
 <InmStarScore :rate="${rate.value}" :class="${className.value}" />
    `
})

const descriptions = undefined

const propsData = [
  { name: 'rate *', type: 'Number', default: '0', description: '점수' },
  { name: 'class', type: ' String', description: '클래스 ' }
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
