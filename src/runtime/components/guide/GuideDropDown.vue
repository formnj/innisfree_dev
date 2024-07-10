<template>
  <div>
    <GuideComponent
      title="InmDropDown"
      :descriptions="descriptions"
      :initial-code="initialCode"
      :props-data="propsData"
      :events-data="eventsData">
      <InmDropDown
        v-model="currentModelIndex"
        :item-list="[
          { key: 0, value: '추천순' },
          { key: 1, value: '신제품순' },
          { key: 2, value: '판매량순' },
          { key: 3, value: '낮은 가격순' },
          { key: 4, value: '높은 가격순' },
          { key: 5, value: '리뷰순' },
          { key: 6, value: '판매금액순' }
        ]"
        @change="handleChange"></InmDropDown>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '#imports'
import GuideComponent from './GuideComponent.vue'

const currentModelIndex = ref(0)
const handleChange = () => {
  console.log('Chnage Item')
}

const initialCode = computed(() => {
  return `
<InmDropDown
  v-model="currentModelIndex"
  :item-list="[
    { key: 0, value: '추천순' },
    { key: 1, value: '신제품순' },
    { key: 2, value: '판매량순' },
    { key: 3, value: '낮은 가격순' },
    { key: 4, value: '높은 가격순' },
    { key: 5, value: '리뷰순' },
    { key: 6, value: '판매금액순' }
  ]"
  @change="handleChange"></InmDropDown>
  `
})
const descriptions = ['추가 작업 필요']

const propsData = [{ name: 'v-modal *', type: 'Number', description: '현재 선택된값을 위치' }]

const eventsData = [{ name: 'change', description: '값 선택시 변경이벤트입니다.' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
.pdtSortTab_wrap {
  justify-content: right;
}
</style>
