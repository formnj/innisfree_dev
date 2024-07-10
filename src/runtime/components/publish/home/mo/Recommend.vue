<template>
  <section>
    <h2>
      <a href="#none"
        ><strong>주소희</strong> 님,<br />
        이 제품 어때요?</a
      >
    </h2>
    <div class="swiper_wrap">
      <InmSwiper v-bind="swiperOpt.recommend04">
        <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 5)" :key="idx" class="goods_slide">
          <GoodsItem class="type_cart" :item="item" :useHash="true" />
        </swiper-slide>
      </InmSwiper>
    </div>
  </section>
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { SwiperSlide } from 'swiper/vue'

const swiperOpt = {
  recommend04: {
    slidesPerView: 'auto',
    spaceBetween: 3,
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
