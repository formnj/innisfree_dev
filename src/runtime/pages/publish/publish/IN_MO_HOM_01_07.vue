<template>
  <NavGnb
    :item="[
      { tit: '전체', active: true },
      { tit: '에센스/세럼/앰플' },
      { tit: '로션/크림' },
      { tit: '스킨/토너/미스트' },
      { tit: '선케어' },
      { tit: '클렌징' },
      { tit: '팩/마스크' },
      { tit: '립/아이케어' },
      { tit: '오일/마사지' },
      { tit: '기획 세트' },
      { tit: '기타' }
    ]" />

  <div class="inner">
    <div class="title_wrap">
      <div class="renewal">
        8분전 갱신
        <img src="@inmModule/assets/images/common/icon_renewal.png" @click="modal.open('modal_renewal', 'layer tooltip')" />
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
    <swiper v-bind="swieprOpt.events">
      <swiper-slide v-for="(item, idx) in sample_event.slice(0, 5)" :key="idx">
        <EventItem :item="item" :link="item.link" class="type_column" />
      </swiper-slide>
    </swiper>
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

  <div id="modal_renewal" class="modal_wrap" @click="modal.close(this)">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this)">닫기</button>
      <div class="modal_content">
        <div class="bubble_wrap">
          <div class="bubble">
            <p>판매실적과 조회수에<br />가중치를 반영한 순위입니다.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { sample_goods, sample_event } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

const swieprOpt = {
  events: {
    slidesPerView: 'auto',
    loop: false,
    pagination: {
      type: 'bullets'
    },
    centeredSlides: true,
    slidesOffsetBefore: 1
  }
}

definePageMeta({
  layout: 'publish-mo-default'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

onMounted(() => {
  document.querySelector('header .nav_gnb').classList.add('shadow')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.nav_gnb {
  border-bottom: 0.1rem solid #f5f5f5;
  background: #fff;
  position: sticky;
  top: 4.6rem;
  z-index: 3;
  :deep(ul) {
    li.active {
      a {
        &:after {
          background-color: #000;
        }
      }
    }
  }
}

.title_wrap {
  h2 {
    .renewal {
      position: unset;
    }
  }
}

.best_banner {
  padding: 3rem 2.1rem;
  margin: 4rem 0;
  border-top: 0.5rem solid #f5f5f5;
  border-bottom: 0.5rem solid #f5f5f5;

  :deep(.swiper) {
    padding-bottom: 2.5rem;
    .swiper-pagination {
      bottom: 0;
      span {
        width: 0.5rem;
        height: 0.5rem;
        background: #eee;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }

    .event_item {
      .item {
        .thumb {
          height: 10.6rem;
        }
      }
    }
  }
}

.modal_wrap.tooltip {
  top: 20rem;
  left: 2.1rem;
  right: unset;
  bottom: unset;
  .modal_container {
    background: unset;
    box-shadow: none;

    .modal_content {
      padding: 0;
    }
  }
}

.bubble_wrap {
  padding-top: 0.6rem;
  position: relative;

  .bubble {
    padding: 1.2rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #00bc70;

    &:before {
      content: '';
      width: 1rem;
      border: 0.6rem solid #00bc70;
      border-top-color: transparent;
      border-right-color: transparent;
      border-left-color: transparent;
      position: absolute;
      top: -0.6rem;
      left: 5.7rem;
    }

    p {
      line-height: 1.6rem;
      white-space: nowrap;
    }
  }
}
</style>
