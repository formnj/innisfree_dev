<template>
  <div class="keyword_wrap">
    <ol :style="styleObject">
      <li v-for="(rank, index) in rollingTargetList" :key="index">
        <a :href="rank.url" :class="[rank.class ? rank.class : '']">
          <em>{{ rank.rank }}.</em>{{ rank.keyword }}
        </a>
      </li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, computed } from '#imports'

interface IRankingData {
  rank: number
  url: string
  keyword: string
  class?: string
}

interface ISearchRankingProps {
  searchRankingList: Array<IRankingData>
}

const props = defineProps<ISearchRankingProps>()

const styleObject = reactive({})

const rollingTargetList = computed(() => {
  return [...props.searchRankingList, props.searchRankingList[0]]
})

const rolling = () => {
  if (!props.searchRankingList || props.searchRankingList.length === 0) {
    return
  }

  const timer = 2000
  let count = 1

  setInterval(() => {
    styleObject.transform = `translateY(-${count++ * 40}px)`
    styleObject.transition = 'all 0.35s ease-in 0s'

    if (count > props.searchRankingList.length + 1) {
      count = 1
      styleObject.transform = ''
      styleObject.transition = ''
    }
  }, timer)
}

onMounted(rolling)
</script>
<style></style>
