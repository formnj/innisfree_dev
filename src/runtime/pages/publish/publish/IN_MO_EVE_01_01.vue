<template>
  <Tabs tabType="type_01" :item="[{ txt: '전체' }, { txt: '체험/리뷰' }, { txt: '쇼핑혜택' }, { txt: '제휴혜택' }]" :tabidx="0" />

  <div class="inner">
    <!-- title washed -->
    <div class="sub_title_wrap">
      <a href="#none" class="btn_link_arrw">당첨자 발표</a>
    </div>
    <!-- title washed -->

    <div class="list_wrap">
      <ul class="event_list">
        <li v-for="(item, idx) in sample_event" :key="idx">
          <EventItem :item="item" :link="item.link" class="type_column" />
          <!-- 이벤트 아이템 콤포넌트가 추가되어 변경하였습니다. -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})

import { sample_event } from '@inmModule/test/data/publish/dummyData'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}
.event_list {
  gap: 0.3rem;
}
</style>
