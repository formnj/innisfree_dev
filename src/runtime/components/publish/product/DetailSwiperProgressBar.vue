<template>
  <div class="swiper_progressbar_wrap">
    <swiper
      :slides-per-view="'auto'"
      :space-between="20"
      :loop="true"
      :auto-height="true"
      :pagination="{
        type: 'progressbar'
      }"
      @swiper="onSwiper">
      <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
        <GoodsItem :item="item" :link="item.link" />
      </swiper-slide>
    </swiper>
    <div class="navigation">
      <button class="swiper-button-prev" @click="swiper_nav.prev"></button>
      <button class="swiper-button-next" @click="swiper_nav.next">Next</button>
    </div>
  </div>
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Controller } from 'swiper/modules'
import { ref } from '#imports'

SwiperCore.use([Navigation, Pagination, A11y, Controller])

/* swiper custom navigation */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_nav = {
  prev: () => {
    setSwiper.value.slidePrev()
  },
  next: () => {
    setSwiper.value.slideNext()
  }
}
/* swiper custom navigation */
</script>

<style lang="scss" scoped>
.swiper_progressbar_wrap {
  width: 1280px;
  margin: 0 auto;
  position: relative;

  :deep(.swiper-horizontal) {
    .swiper-pagination-progressbar {
      height: 1px;
      background-color: #ddd;
      top: auto;
      bottom: 0;

      .swiper-pagination-progressbar-fill {
        height: 2px;
        background-color: #000;
        top: -1px;
      }
    }
  }

  .swiper-slide {
    width: 240px;
    padding-bottom: 61px;
  }

  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    button {
      color: #000;
      font-size: 0;
      position: absolute;

      &:after {
        font-size: 22px;
      }

      &.swiper-button-prev {
        left: -80px;

        &:after {
          content: 'prev';
        }
      }

      &.swiper-button-next {
        right: -80px;

        &:after {
          content: 'next';
        }
      }
    }
  }
}
</style>
