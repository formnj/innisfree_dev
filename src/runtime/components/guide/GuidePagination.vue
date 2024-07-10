<template>
  <div>
    <GuideComponent
      title="InmInfiniteScroll"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <h4>총 아이템 수 : {{ totalCount }}</h4>
      <h4>한페이지에 보여질 아이템수 : {{ perPage }}</h4>
      <h4>한번여 보여질 페이지수 : {{ pageCount }}</h4>
      <InmPagination v-model="currentPage" :total-count="totalCount" :per-page="perPage" :page-count="pageCount" />
      <div
        v-for="item in currentPageItems"
        :key="item.id"
        :style="item.style"
        @click="
          () => {
            $router.push('/')
          }
        ">
        {{ item.name }}
      </div>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed, useState, onBeforeMount, useNuxtApp } from '#imports'

const initialCode = computed(() => {
  return `
<InmPagination v-model="currentPage" :total-count="totalCount" :per-page="perPage" :page-count="pageCount" />
// 목록 작성
<div
  v-for="item in currentPageItems"
  :key="item.id"
  >
  {{ item.name }}
</div>
    `
})

const descriptions = ['페이지 네이션 컴포넌트 입니다.', '추가 UI 작업 필요.']

const propsData = [
  { name: 'v-modal *', type: 'Number', default: '1', description: '총 아이템 갯수입니다.' },
  { name: 'total-count *', type: 'Number', description: '총 아이템 갯수입니다.' },
  { name: 'per-page', type: 'Number', default: '5', description: '한페이지에 보여질 아이템 수 입니다.' },
  { name: 'page-count', type: 'Number', default: '5', description: '한번여 보여질 페이지 수 입니다.' }
]

const eventsData = [{ name: 'change', description: '페이지가 번경되면 발생하는 이벤트입니다.' }]

const totalCount = ref(30)
const perPage = ref(5)
const pageCount = ref(5)

const nuxtApp = useNuxtApp()
const items = useState<{ id: number; name: string; style: Record<string, string> }[]>('test-item-page-list', () =>
  Array.from({ length: totalCount.value }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    style: {
      height: '100px',
      backgroundColor: `hsl(${(i * 20) % 360}, 100%, 70%)`
    }
  }))
)

const currentPage = useState<number>('test-item-page-no', () => 1)

const currentPageItems = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return items.value.slice(start, end)
})

onBeforeMount(() => {
  try {
    if (!nuxtApp.$isBack() && currentPage.value != 1) {
      currentPage.value = 1
    }
  } catch (e) {
    console.log(e)
  }
})
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
