<template>
  <section class="event">
    <ul class="list_wrap type_column02">
      <li v-for="(item, idx) in mainSam.event_mo" :key="idx">
        <EventItem :item="item" class="type_column" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { mainSam } from '@inmModule/test/data/publish/dummyData'
</script>

<style lang="scss" scoped>
.list_wrap {
  &.type_column02 {
    > li + li {
      margin-top: 1.6rem;
      padding-top: 1.6rem;
      border-top: 1px solid #eee;
    }

    :deep(.event_item) {
      .thumb {
        height: 8.5rem;
      }
    }
  }
}
</style>
