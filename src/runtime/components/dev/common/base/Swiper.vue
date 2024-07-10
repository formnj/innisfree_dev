<template>
  <Swiper :modules="[Navigation, Pagination, Scrollbar, Autoplay]">
    <slot />
  </Swiper>
</template>

<script setup>
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { Swiper } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
</script>

<style>
.swiper-container {
  :deep(.swiper-pagination) {
    display: none;
  }
}
</style>
