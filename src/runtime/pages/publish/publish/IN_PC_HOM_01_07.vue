<template>
  <div class="inner">
    <!-- title washed -->
    <div class="title_wrap" :data-layout="props.layoutType">
      <div>
        <h2>
          실시간 랭킹
          <div class="renewal">
            3분전 갱신
            <img src="@inmModule/assets/images/common/icon_renewal.png" @click="modal.open('modal_renewal', 'layer tooltip')" />
            <div id="modal_renewal" class="modal_wrap">
              <div class="modal_container">
                <button class="btn_close" @click="modal.close(this)">닫기</button>
                <div class="modal_content">
                  <h2>랭킹 기준 안내</h2>
                  <ul class="bul_list">
                    <li>판매실적과 조회수에 가중치를 반영한 순위입니다.</li>
                  </ul>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
          </div>
        </h2>
      </div>
    </div>
    <!-- //title washed -->
  </div>

  <div class="inner">
    <div class="sort_tab_wrap">
      <div class="sub_tab">
        <Tabs
          tabType="type_02"
          :item="[
            { txt: '전체' },
            { txt: '스킨케어' },
            { txt: '메이크업' },
            { txt: '남성' },
            { txt: '헤어/바디/펫' },
            { txt: '기획 세트' },
            { txt: '미용소품' }
          ]"
          :tabidx="0" />
      </div>
    </div>

    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <span class="ranking" v-if="idx < 9">{{ '0' + (idx + 1) }}</span>
          <span class="ranking" v-else>{{ idx + 1 }}</span>
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>

  <!-- swiper -->
  <div class="best_banner">
    <div class="inner">
      <swiper v-bind="swiperOpt" @slideChange="scrollBar">
        <swiper-slide v-for="(item, idx) in sample_event" :key="idx">
          <EventItem :item="item" />
        </swiper-slide>
        <div class="swiper-scrollbar-wrap">
          <p class="scrollbar">scroll bar</p>
        </div>
      </swiper>
      <!-- navigation -->
      <div class="navigation">
        <button class="swiper-button-prev">Prev</button>
        <button class="swiper-button-next">Next</button>
      </div>
      <!-- //navigation -->
    </div>
  </div>
  <!-- //swiper -->

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <span class="ranking" v-if="idx < 9">{{ '0' + (idx + 1) }}</span>
          <span class="ranking" v-else>{{ idx + 1 }}</span>
          <GoodsItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { sample_goods, sample_event } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar])

const swiperOpt = {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
}

const scrollBar = (swiper) => {
  swiper.wrapperEl.parentNode.querySelector('.scrollbar').style.width =
    ((swiper.realIndex + 1) / swiper.wrapperEl.children.length) * 100 + '%'
}
</script>

<style lang="scss" scoped>
.best_banner {
  margin: 100px 0;
  padding: 100px 0;
  background-color: #f5f5f5;
  position: relative;

  .swiper {
    padding-bottom: 30px;
  }
  .swiper-scrollbar-wrap {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    &:after {
      width: 100%;
      border-top: 1px solid #ddd;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      display: block;
    }
    .scrollbar {
      font-size: 0;
      border-bottom: 2px solid #000;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.25s;
    }
  }

  .navigation {
    margin: 0 -720px;
    position: absolute;
    top: 50%;
    right: 50%;
    left: 50%;
  }

  [class*='swiper-button-'] {
    width: 32px;
    height: 32px;
    font-size: 0;
    background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -60px -200px;
    background-size: 250px auto;
    &:after {
      display: none;
    }
    &.swiper-button-prev {
      transform: rotate(180deg);
    }
  }
}
</style>
