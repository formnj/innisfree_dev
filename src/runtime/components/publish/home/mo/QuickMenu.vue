<template>
  <section class="category">
    <div class="swiper_wrap">
      <InmSwiper class="module_02" v-bind="swiperOpt.category">
        <swiper-slide v-for="item in categoryForSearchLayerData" :key="item">
          <a href="#none">
            <span class="thumb" :class="item.type"
              ><!-- 관리자 강조 등록 시 point 클래스 추가 -->
              <em><img :src="item.imageUrl" /></em>
            </span>
            <p>{{ item.text }}</p>
          </a>
        </swiper-slide>
      </InmSwiper>
    </div>
  </section>
</template>

<script setup>
import { categoryForSearchLayerData } from '@inmModule/test/data/publish/dummyData'
import { SwiperSlide } from 'swiper/vue'

const swiperOpt = {
  category: {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: false
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin: 0 0 2rem;
  .swiper-slide {
    width: 5.7rem;
    text-align: center;
    .thumb {
      position: relative;
      display: block;
      &.point:after {
        width: 0.5rem;
        height: 0.5rem;
        background-color: #00bc70;
        border-radius: 50%;
        content: '';
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        display: block;
      }
    }
    p {
      margin-top: 0.8rem;
      color: #888;
      font-size: 1.2rem;
    }
  }
}
</style>
