<template>
  <div>
    <GuideComponent
      title="InmSticker"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <InmSticker
        :item-list="[
          { text: 'type01', type: 'type01' },
          { text: 'type02', type: 'type02' },
          { text: 'type03', type: 'type03' },
          { text: 'type04', type: 'type04' },
          { text: 'type05', type: 'type05' }
        ]" />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed } from '#imports'

const initialCode = computed(() => {
  return `
  <InmSticker
    :item-list="[
      { text: 'type01', type: 'type01' },
      { text: 'type02', type: 'type02' },
      { text: 'type03', type: 'type03' },
      { text: 'type04', type: 'type04' },
      { text: 'type05', type: 'type05' }
    ]" />
  `
})

const descriptions = undefined

const propsData = [
  { name: 'item-list *', type: 'IStickerItem[]', description: '스티커 아이템 목록' },
  { name: 'IStickerItem.text', type: 'String', description: '내용' },
  { name: 'IStickerItem.type', type: `'type01' | 'type02' | 'type03' | 'type04' | 'type05' | string`, description: '유형 ' }
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
