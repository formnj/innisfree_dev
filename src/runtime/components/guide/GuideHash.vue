<template>
  <div>
    <GuideComponent
      title="InmHash"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <InmHash hash-type="round" :item-list="['round1', 'round2', 'round3']" />
      <InmHash hash-type="button" :item-list="['button1', 'button2', 'button3']" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed } from '#imports'

const initialCode = computed(() => {
  return `
<InmHash hash-type="round" :item-list="['round1', 'round2', 'round3']" />
<InmHash hash-type="button" :item-list="['button1', 'button2', 'button3']" />
  `
})

const descriptions = undefined

const propsData = [
  { name: 'item-list *', type: 'string[]', description: '해시 내용 목록' },
  { name: 'hash-type *', type: `'round' | 'button' | string`, description: '유형 ' }
]

const eventsData = undefined

const slotsData = undefined
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
