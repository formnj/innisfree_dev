<template>
  <div class="visual">
    <!-- Edit 24.06.13 JH visual sticky top -->
    <InmSwiper v-bind="swieprOpt.visual" @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide v-for="(item, idx) in mainSam.visual" :key="idx">
        <a href="#none" class="item">
          <!-- visual tag -->
          <div class="tag-card">
            <span class="cardSt_1">{{ item.tag[0] }}</span>
            <span class="cardSt_2">{{ item.tag[1] }}</span>
          </div>
          <!-- //visual tag -->

          <!-- item text content -->
          <div class="cont">
            <p class="name">
              <strong>{{ item.name[0] }}</strong>
              <span>{{ item.name[1] }}</span>
            </p>
            <p class="price">
              {{ item.price[0] }}
              <em>{{ item.price[1] }}</em>
            </p>
          </div>
          <!-- //item text content -->

          <!-- visual image -->
          <span class="thumb">
            <em><img :src="item.img" /></em>
          </span>
          <!-- //visual image -->
        </a>
      </swiper-slide>
      <!-- customer pagination -->
      <div class="custom_pagination">
        <div class="current">
          <em class="idx_01"></em>
        </div>
        <strong class="total"></strong>

        <Button class="swiper_controler" @click="modal.open('visual_modal', 'fullMo')" />
      </div>
      <!-- //customer pagination -->
    </InmSwiper>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { mainSam } from '@inmModule/test/data/publish/dummyData'

import { SwiperSlide } from 'swiper/vue'

const swieprOpt = {
  visual: {
    slidesPerView: 1,
    loop: true,
    pagination: {
      type: 'fraction'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  }
}

const onSwiper = (swiper) => {
  const total = swiper.wrapperEl.children.length,
    current = swiper.realIndex + 1

  if (total < 10) {
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = '0' + current
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination strong.total').textContent = '0' + total
  }
}

const onSlideChange = (swiper) => {
  const current = swiper.realIndex + 1

  if (current < 10) {
    swiper.wrapperEl.parentNode.querySelector('.custom_pagination .current .idx_01').textContent = '0' + current
  }
}
</script>
<style lang="scss" scoped>
.visual {
  position: sticky;
  top: 4.6rem;
  .swiper {
    :deep(.swiper-pagination) {
      display: none;
    }
    .custom_pagination {
      padding: 0.8rem;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      * {
        color: #fff;
        font-size: 1rem;
      }
      em {
        font-weight: 600;
      }
      strong {
        margin-right: 0.8rem;
        font-weight: 400;
        display: flex;
        align-items: center;
        &:before {
          height: 0.8rem;
          margin-left: 0.4rem;
          padding-right: 0.4rem;
          border-left: 1px solid rgba(255, 255, 255, 0.2);
          content: '';
          display: block;
        }
      }
      button {
        width: 1.2rem;
        height: 1.2rem;
        font-size: 0;
        position: relative;
        &:before,
        &:after {
          border-top: 1px solid #fff;
          content: '';
          position: absolute;
          top: 50%;
          right: 0.2rem;
          left: 0.2rem;
        }
        &:after {
          transform: rotate(90deg);
        }
      }
    }
  }
  :deep([class*='swiper-button-']) {
    width: 60px;
    height: 60px;
    margin-top: -50px;
    background: url('@inmModule/assets/images/common/icon_split.png') 0 -190px no-repeat;
    background-size: 250px auto;
    &:after {
      display: none;
    }
    &.swiper-button-next {
      transform: rotate(180deg);
    }
  }
  .item {
    position: relative;
    .thumb {
      padding-top: 90.666666%;
      position: relative;
      display: block;
      &:after {
        padding-top: 43.2%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
      }
      em {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .tag-card {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1;
      &:after {
        clear: both;
        content: '';
        display: block;
      }
      & > * {
        padding: 3px 10px;
        font-size: 12px;
        background-color: #000;
        color: #fff;
        float: left;
        display: block;
        & + * {
          margin-left: 1px;
        }
        &.cardSt_1 {
          color: #000;
          font-weight: 600;
          background-color: #ffff82;
        }
      }
    }
    .cont {
      color: #fff;
      position: absolute;
      bottom: 40px;
      left: 30px;
      z-index: 1;
      .name {
        & > * {
          margin-top: 5px;
          font-size: 20px;
          display: block;
        }
      }
      .price {
        margin-top: 5px;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        em {
          margin-left: 10px;
          font-size: 14px;
          font-weight: 300;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
