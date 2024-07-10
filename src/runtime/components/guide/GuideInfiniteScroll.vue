<template>
  <div>
    <GuideComponent
      title="InmInfiniteScroll"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <NuxtLink to="/dev/guide/infinite-scroll"><InmButton>예제페이지로 이동</InmButton></NuxtLink>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed } from '#imports'

const initialCode = computed(() => {
  return `
<ul>
  <InmInfiniteScroll :total-count="totalCount" :per-page="perPage" :list="items" @next="loadMore">
    // 각화면에 맞게구성
    <li v-for="item in items" :key="item.id" :style="item.style">{{ item.name }}</li>
  </InmInfiniteScroll>
</ul>
    `
})

const descriptions = ['무한스크롤 구현을 위한 컴포넌트 입니다.']

const propsData = [
  { name: 'total-count *', type: 'Number', description: '총 아이템 갯수입니다.' },
  { name: 'per-page', type: 'Number', default: '20', description: '한번에 뿌려지는 아이템 갯수입니다.' },
  { name: 'list', type: 'Array', description: '아이템 목록입니다.' },
  { name: 'observer-options', type: 'Object', description: 'Intersection Observer 의 옵션을 설정합니다.' }
]

const eventsData = [{ name: 'next', description: '스크롤일 하단에 도달했을때 발생하는 이벤트입니다.' }]

const slotsData = [{ name: 'default', description: '보여줄 컨텐츠 목록' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
