<template>
  <div class="prod_swiper">
    <swiper
      :slides-per-view="'1'"
      :loop="loopYN"
      :pagination="pagination"
      :autoplay="autoplayYN"
      :speed="500"
      :navigation="navigation"
      :thumbs="{ swiper: thumbsSwiper }">
      <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
        <img :src="item.img" />
      </swiper-slide>
      <div v-if="isMo" class="custom_pagination"></div>
    </swiper>
    <span class="badge">대용량</span>
  </div>

  <div v-if="thumbYN" class="thumb_swiper">
    <swiper :slides-per-view="5" :space-between="5" :navigation="navigation" watch-slides-progress @swiper="setThumbsSwiper">
      <swiper-slide v-for="(item, idx) in prodImgData" :key="idx">
        <img :src="item.img" />
      </swiper-slide>
    </swiper>
    <div class="custom_nav">
      <button type="button" class="nav_prev">prev</button>
      <button type="button" class="nav_next">next</button>
    </div>
  </div>
</template>

<script setup>
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore from 'swiper'
import { Autoplay, Pagination, A11y, Navigation, Thumbs } from 'swiper/modules'
import { prodImgData } from '@inmModule/test/data/publish/dummyData'
import { ref } from '#imports'

SwiperCore.use([Autoplay, Pagination, A11y, Navigation, Thumbs])

const props = defineProps({
  autoplayYN: {
    //autoplay 여부
    type: Boolean,
    default: false
  },
  loopYN: {
    //loop 여부
    type: Boolean,
    default: false
  },
  thumbYN: {
    //loop 여부
    type: Boolean,
    default: true
  },
  pagiYN: {
    //loop 여부
    type: Boolean,
    default: false
  },
  isMo: {
    //모바일 여부
    type: Boolean,
    default: false
  }
})

const pagination = {
  el: '.custom_pagination',
  type: 'custom',
  renderCustom: function (swiper, current, total) {
    return "<span class='pagination-current'>0" + current + "</span><span class='pagination-total'>0" + total + '</span>'
  }
}
const navigation = {
  prevEl: '.nav_prev',
  nextEl: '.nav_next',
  type: 'custom'
}

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

<style lang="scss" scoped>
.prod_swiper {
  position: relative;

  .badge {
    padding: 0 12px;
    height: 32px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 32px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  :deep(.swiper) {
    position: relative;

    .swiper-slide {
      text-align: center;

      img {
        vertical-align: top;
      }
    }

    .custom_pagination {
      width: 70px;
      height: 30px;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      background: rgba(0, 0, 0, 0.3);
      justify-content: center;
      align-items: center;
      position: absolute;
      left: unset;
      right: 0;
      bottom: 0;
      z-index: 2;
      display: flex;

      .pagination-total {
        opacity: 0.5;

        &::before {
          content: '';
          width: 0.1rem;
          height: 0.8rem;
          margin: 0 0.8rem;
          background-color: rgba(255, 255, 255, 0.2);
          display: inline-flex;
        }
      }
    }
  }
}

.thumb_swiper {
  margin: 30px 0;
  padding: 0 35px;
  position: relative;

  & :deep(.swiper-wrapper) {
    width: 430px;

    .swiper-slide {
      position: relative;
      cursor: pointer;

      &.swiper-slide-thumb-active {
        &:after {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid #000;
        }
      }

      img {
        vertical-align: top;
      }
    }
  }

  .custom_nav {
    button {
      width: 24px;
      height: 24px;
      font-size: 0;
      background: url('@inmModule/assets/images/common/icon_split.png') -420px -30px no-repeat;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;

      &.nav_prev {
        left: 0;
        transform: rotate(180deg) translateY(50%);
      }

      &.nav_next {
        right: 0;
      }
    }
  }
}
</style>
