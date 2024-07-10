<template>
  <!-- 리뷰 일반 -->
  <div v-if="isSwiper == false" class="review">
    <p v-if="item.option.is" class="option_name">
      옵션 <span>{{ item.option.opt }}</span>
    </p>
    <div v-if="item.imgs" class="review_photo_list_wrap">
      <ul class="review_photo_list">
        <li v-for="(img, idx) in item.imgs" :key="idx" :class="idx == 5 ? 'last' : ''">
          <a v-if="!isMo" href="#none" class="img_wrap" @click="modal.open('modal_review', 'full modal_review')"
            ><img :src="img" alt=""
          /></a>
          <a v-if="isMo && !isPage" href="IN_MO_PRD_01_08" class="img_wrap"><img :src="img" alt="" /></a>
          <span v-if="isMo && isPage" class="img_wrap"><img :src="img" alt="" /></span>
        </li>
      </ul>
    </div>
    <p class="txt">
      <span v-if="item.useMark" class="mark">한달사용</span>
      <a v-if="!isMo" href="#none" @click="modal.open('modal_review', 'full modal_review')" v-html="item.txt"></a>
      <a v-if="isMo && !isPage" href="IN_MO_PRD_01_08" v-html="item.txt"></a>
      <span v-if="isMo && isPage" v-html="item.txt"></span>
    </p>
  </div>

  <!-- 리뷰 사진이 스와이퍼일 경우 -->
  <div v-if="isSwiper == true" class="review">
    <p v-if="item.option.is" class="option_name">
      옵션 <em>{{ item.option.name }}</em>
    </p>

    <div v-if="!isMo" class="review_photo_swiper">
      <!-- PC일 경우 -->
      <swiper v-bind="swiper_options" @swiper="onSwiper">
        <swiper-slide v-for="(img, idx) in item.imgs" :key="idx">
          <img :src="img" :class="item.user" alt="" />
        </swiper-slide>
      </swiper>
      <div class="custom_nav">
        <button type="button" class="nav_prev">prev</button>
        <button type="button" class="nav_next">next</button>
      </div>
    </div>

    <div v-if="isMo" class="review_photo_list_wrap">
      <ul class="review_photo_list">
        <li v-for="(img, idx) in item.imgs" :key="idx" :class="idx == 5 ? 'last' : ''">
          <a href="#none"><img :src="img" :class="item.user" alt="" /></a>
        </li>
      </ul>
    </div>

    <p class="txt">
      <span v-if="item.useMark" class="mark">한달사용</span>
      <span v-html="item.txt"></span>
    </p>
  </div>
</template>
<script setup>
import { ref } from '#imports'
import { modal } from '@inmModule/assets/js/common-ui'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore from 'swiper'
import { Autoplay, Pagination, A11y, Navigation, Thumbs } from 'swiper/modules'

SwiperCore.use([Autoplay, Pagination, A11y, Navigation, Thumbs])

const props = defineProps({
  item: {},
  isSwiper: {
    //리뷰 모달 여부
    type: Boolean,
    default: false
  },
  isMo: {
    type: Boolean,
    default: false
  },
  isPage: {
    type: Boolean,
    default: false
  }
})

const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  slidesPerView: 1,
  navigation: {
    prevEl: '.nav_prev',
    nextEl: '.nav_next',
    type: 'custom'
  },
  speed: 1000,
  observer: true,
  observeParents: true
}
</script>
<style lang="scss" scoped>
.review {
  .option_name {
    margin: -20px 0 30px;
    font-weight: 400;
    color: #888;
    display: flex;
    gap: 10px;

    span {
      color: #333;
      font-weight: 600;

      &:before {
        content: '';
        width: 1px;
        height: 10px;
        margin-right: 10px;
        background-color: #eee;
        display: inline-block;
      }
    }
  }

  .review_photo_list_wrap {
    .review_photo_list {
      display: flex;
      gap: 3px;
      margin-bottom: 30px;

      li {
        width: 120px;
        height: 120px;
        position: relative;
        flex-shrink: 0;

        .img_wrap {
          width: 100%;
          height: 100%;
          display: block;
          position: relative;

          img {
            vertical-align: middle;
          }
        }

        &.last {
          a {
            &:before {
              content: '';
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.7);
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            }

            &:after {
              content: '';
              width: 24px;
              height: 24px;
              margin: 0 auto 10px;
              background: url('@inmModule/assets/images/common/icon_split.png') -460px -70px no-repeat;
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 1;
            }
          }
        }
      }
    }
  }

  .txt {
    line-height: 24px;
    color: #333333;

    &.open {
      a {
        -webkit-line-clamp: unset;
      }
    }

    .mark {
      height: 22px;
      margin-bottom: 0.5rem;
      padding: 0 5px;
      font-size: 12px;
      color: #ffffff;
      background-color: #00bc70;
      white-space: nowrap;
      display: inline-block;
    }

    a {
      text-overflow: ellipsis;
      white-space: normal;
      word-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      :deep(em) {
        color: #fff;
        background-color: #00bc70;
      }
    }

    :deep(.hashtag) {
      color: #00bc70;
    }

    span {
      display: inline-block;
    }
  }
}

.review_photo_swiper {
  width: 480px;
  margin: 0 auto 25px;
  padding: 0 60px;
  position: relative;

  .swiper-slide {
    height: 270px;
    text-align: center;
    background-color: #000;
  }

  img {
    width: auto;
    height: 100%;
    margin: auto;
  }

  .custom_nav {
    button {
      width: 24px;
      height: 24px;
      font-size: 0;
      background: url('@inmModule/assets/images/common/icon_split.png') -180px -60px / 250px auto no-repeat;
      position: absolute;
      top: 50%;
      transform: rotate(90deg) translateY(-50%);
      z-index: 2;

      &.nav_prev {
        left: 0;
        transform: rotate(-90deg) translateY(50%);
      }

      &.nav_next {
        right: 0;
      }
    }
  }
}
</style>
