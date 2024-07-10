<template>
  <section class="highlight">
    <ul class="list_wrap">
      <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
        <EventItem :item="item" :link="item.link" class="type_box type_reverse type_arr" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { mainSam } from '@inmModule/test/data/publish/dummyData'
</script>

<style lang="scss" scoped>
.list_wrap {
  > li + li {
    margin-top: 2rem;
  }
  :deep(.event_item) {
    .item {
      .thumb {
        width: auto;
        padding-top: 53.333333%;
      }
    }
  }
}
</style>
