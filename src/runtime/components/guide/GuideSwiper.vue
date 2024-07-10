<template>
  <div>
    <GuideComponent
      title="InmSwiper"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <InmSwiper v-bind="options" :style="{ height: '500px' }">
        <SwiperSlide v-for="item in imageList" :key="item">
          <InmImage :src="item" class="image"></InmImage>
        </SwiperSlide>
      </InmSwiper>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed } from '#imports'

import { SwiperSlide } from 'swiper/vue'

const initialCode = computed(() => {
  return `
<InmSwiper v-bind="options">
  <SwiperSlide v-for="item in imageList" :key="item">
    <InmImage :src="item" class="image"></InmImage>
  </SwiperSlide>
</InmSwiper>

//Script 영역
import { SwiperSlide } from 'swiper/vue'

const options = {
  loop: true,
  autoplay: {
    delay: 5000, // 5초 후 자동 슬라이드
    disableOnInteraction: false // 사용자 인터랙션 후에도 자동 재생 계속
  }
}

const imageList = [
  'https://images.innisfree.co.kr/upload/product/34510_l1_S_240.jpg?T',
  'https://images.innisfree.co.kr/upload/product/35157_l1_S_240.jpg?T'
]
    `
})

const descriptions = ['option 은 swiper js 공식 문서 참조 (https://swiperjs.com/swiper-api#parameters)']

const propsData = undefined

const eventsData = undefined

const slotsData = [{ name: 'default', description: 'SwiperSlide 목록' }]

const options = {
  loop: true,
  autoplay: {
    delay: 5000, // 5초 후 자동 슬라이드
    disableOnInteraction: false // 사용자 인터랙션 후에도 자동 재생 계속
  }
}
const imageList = [
  'https://images.innisfree.co.kr/upload/product/34510_l1_S_240.jpg?T',
  'https://images.innisfree.co.kr/upload/product/35157_l1_S_240.jpg?T'
]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
.image {
  width: 500px;
  height: 100%;
}
</style>
