<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>이벤트</h2>
    </div>
    <a href="#none" class="btn_link_arrw">당첨자 발표</a>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <Tabs :item="[{ txt: '전체' }, { txt: '체험/리뷰' }, { txt: '쇼핑혜택' }, { txt: '제휴혜택' }]" :tabidx="0" />
    <div class="list_wrap">
      <ul class="event_list">
        <li v-for="(item, idx) in sample_event" :key="idx">
          <EventItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>
  <div class="paging">
    <div>
      <a href="#none" class="first">처음으로</a>
      <a href="#none">1</a>
      <a href="#none">2</a>
      <a href="#none" class="active">3</a>
      <a href="#none">4</a>
      <a href="#none">5</a>
      <a href="#none" class="last">마지막으로</a>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

import { sample_event } from '@inmModule/test/data/publish/dummyData'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})
/* //component sample data */
</script>

<style lang="scss" scoped>
.list_wrap {
  margin-top: 60px;
}
</style>
