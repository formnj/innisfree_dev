<template>
  <div>
    <h2>Total Count : {{ totalCount }} Per Page : {{ perPage }}</h2>
    <ul>
      <InmInfiniteScroll :total-count="totalCount" :per-page="perPage" :list="items" @next="loadMore">
        <li v-for="item in items" :key="item.id" :style="item.style">{{ item.name }}</li>
      </InmInfiniteScroll>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta, ref, useState } from '#imports'

definePageMeta({
  layoutOption: {
    MO: {
      type: 'main'
      // header: true, // 해더 노출 여부
      // headerOptions: {
      //   type: 'type_search', // main | type_sub | type_search
      //   back: false, // 뒤로가기
      //   logo: true, // 로고
      //   menu: false, //메뉴 텍스트
      //   search: false, //검색 버튼
      //   navGnb: true, //navGan
      //   name: '', // 이
      //   buttons: ['search', 'cart']
      // },
      // footer: true,
      // actionBar: true,
      // actionBarOptions: { top: true, search: false, history: true, back: true }
    },
    //콤퓨터 기본 설정값
    PC: {
      type: 'category', // '' | 'category' | 'order' | 'sub'
      header: true,
      footer: true,
      category: true
    }
  }
})

const totalCount = ref(123)
const perPage = ref(20)

const items = useState<{ id: number; name: string; style: Record<string, string> }[]>('test-item-list', () => [])

const loadMore = (pageNo: number) => {
  console.log(pageNo)
  setTimeout(() => {
    const currentLength = items.value.length
    const newItems = Array.from({ length: perPage.value }, (_, i) => ({
      id: currentLength + i + 1,
      name: `Item ${currentLength + i + 1}`,
      style: {
        height: '100px',
        backgroundColor: `hsl(${(i * 20) % 360}, 100%, 70%)`
      }
    }))

    for (const item of newItems) {
      if (totalCount.value > items.value.length) items.value.push(item)
    }
  }, 1000)
}
</script>
<style scoped>
li[style] {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  margin: 2px 0;
}
</style>
