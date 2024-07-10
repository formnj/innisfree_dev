<template>
  <div class="paging">
    <div>
      <a v-if="currentPage !== 1" class="first" @click.prevent="goToFirstPage">처음으로</a>
      <a v-if="currentPage !== 1" class="first" @click.prevent="goToPreviousPage">이전</a>
      <a v-for="page in visiblePages" :key="page" :class="{ active: currentPage === page }" @click="goToPage(page)">{{ page }}</a>
      <a v-if="currentPage !== totalPages" class="last" @click.prevent="goToNextPage">다음</a>
      <a v-if="currentPage !== totalPages" class="last" @click.prevent="goToLastPage">마지막으로</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed } from '#imports'

const currentPage = defineModel({ type: Number, default: 1 })
const emit = defineEmits(['change'])
const props = defineProps({
  totalCount: { type: Number, required: true },
  perPage: { type: Number, default: 5 },
  pageCount: { type: Number, default: 5 }
})

const totalPages = computed(() => Math.ceil(props.totalCount / props.perPage))

const visiblePages = computed(() => {
  const start = Math.floor((currentPage.value - 1) / props.pageCount) * props.pageCount + 1
  const end = Math.min(start + props.pageCount - 1, totalPages.value)
  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

const goToPage = (page: number) => {
  if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const goToFirstPage = () => goToPage(1)
const goToPreviousPage = () => goToPage(currentPage.value - 1)
const goToNextPage = () => goToPage(currentPage.value + 1)
const goToLastPage = () => goToPage(totalPages.value)

watch(currentPage, (newPage) => {
  emit('change', newPage)
})
</script>

<style scoped></style>
