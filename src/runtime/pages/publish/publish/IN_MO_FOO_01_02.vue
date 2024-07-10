<template>
  <div class="inner">
    <Tabs tabType="type_01" :item="[{ txt: 'Brand Story' }, { txt: 'Green Tea Heritage' }, { txt: 'Better For Earth' }]" :tabidx="0" />
    <section>
      <dl>
        <dt>
          <img src="/images/sam/brandStory_bg0201.png" alt="" />
        </dt>
        <dd>
          <h2>‘Green Tea’<br />the Origin of <br />INNISFREE</h2>
          <p>
            천혜의 자연환경과 경이로운 생명력을 가진 제주. <br />그곳의 흙과 빛, 물과 바람, 그리고 안개가 <br />조화롭게 어우러진 청록의
            다원은 이니스프리의 <br />시작점입니다.
          </p>
        </dd>
      </dl>
      <div>
        <div class="swiper_wrap">
          <!-- swiper -->
          <swiper class="swiper" v-bind="swiper_options.visual" @swiper="onSwiper">
            <swiper-slide v-for="(item, idx) in about_greentea_01" :key="idx">
              <div class="item">
                <img :src="item.img" />
              </div>
            </swiper-slide>
          </swiper>
          <!-- //swiper -->
        </div>
        <p>
          <span>
            돌무더기와 가시덤불이 가득했던 황무지를 손으로 일구어<br />
            비옥한 차밭으로 개간한 창업주의 끈질긴 집념과 개척<br />
            정신은 ‘건강한 피부를 위해 끊임없이 도전하고 연구’하는<br />
            오늘날 이니스프리의 근간이 되었고,
          </span>
          <span>
            이것의 산물이라고 할 수 있는 '그린티'는 <br />
            이니스프리의 정수가 되는 원료로 자리 잡았습니다.
          </span>
        </p>
      </div>
      <ul>
        <li class="img_wrap">
          <div class="swiper_wrap">
            <!-- swiper -->
            <swiper class="swiper" v-bind="swiper_options.greentea">
              <swiper-slide v-for="(item, idx) in about_greentea_02" :key="idx">
                <div class="item">
                  <img :src="item.img" />
                </div>
              </swiper-slide>
            </swiper>
            <!-- //swiper -->
          </div>
        </li>
        <li>
          <strong> Farm to Face <br />Beauty Green Tea INNISFREE </strong>
          <span>
            녹차 나무 한 그루가 자라기까지 걸리는 시간 5년.<br />
            약 20여년 동안 여러 실험 끝에 2만여 종의 녹차 중<br />
            기후, 병충해를 비롯한 여러 악조건을 견디며<br />
            최적의 효능을 발휘해낼 수 있는, 전세계 유일무이한<br />
            ‘피부만을 위한 녹차 품종’을 탄생 시킬 수 있었습니다.
          </span>
        </li>
      </ul>
      <img src="/images/sam/greenTeaHeritage_bg00.png" alt="" />
      <h3>이니스프리의 특별한 그린티가 들어간 <br /><strong>이니스프리 대표 제품</strong>들을 <br />지금 바로 만나보세요.</h3>
      <ol>
        <li v-for="(item, idx) in about_greentea_03" :key="idx">
          <a :href="item.url">
            <img :src="item.img" alt="img" />
            <span v-html="item.txt"></span>
            <em>상품 보러가기</em>
          </a>
        </li>
      </ol>
      <div class="link_box">
        <a class="list01" @click="$router.push('/publish/IN_MO_FOO_01_01')">
          <span>Brand Story</span>
        </a>
        <a class="list03" @click="$router.push('/publish/IN_MO_FOO_01_03')">
          <span>Better for Earth</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

import { about_greentea_01, about_greentea_02, about_greentea_03 } from '@inmModule/test/data/publish/dummyData'

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay, Scrollbar } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { ref, onMounted } from '#imports'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Scrollbar])

/* swiper option */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  visual: {
    slidesPerView: '5',
    spaceBetween: 3,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 500,
      disableOnInteraction: false
    },
    speed: 1000
  },
  greentea: {
    slidesPerView: '3',
    spaceBetween: 3,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 500,
      disableOnInteraction: false
    },
    speed: 1000
  }
}
/* swiper option */

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'ABOUT')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 2rem 2.1rem;
  :deep(.tab_wrap) {
    margin-left: -2.1rem;
    margin-right: -2.1rem;
    ul {
      &.type_01 {
        li {
          button {
            height: 5.1rem !important;
          }
        }
      }
    }
  }
}

section {
  margin-left: -2.1rem;
  margin-right: -2.1rem;
  > dl {
    margin-bottom: 10rem;
    dd {
      margin-top: -3.5rem;
      margin-left: 4rem;
      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 3.6rem;
      }
      p {
        margin: 1.5rem 0 0 0;
        padding: 0 0 8rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }
    &::after {
      content: '';
      width: 4rem;
      height: 4rem;
      margin-left: 4rem;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-position: -5.7rem -35rem;
      background-repeat: no-repeat;
      background-size: 25rem auto;
      display: block;
    }
  }
  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    > div {
      margin: 0 -5rem 3rem 4rem;
      overflow: hidden;
    }
    p {
      margin: 0 0 10rem 4rem;
      color: #666;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.2rem;
      letter-spacing: -0.014em;
      > * + * {
        margin-top: 0.5rem;
      }
      span {
        display: block;
      }
    }

    strong {
      margin-left: 4rem;
      color: #333;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;
    }
  }
  > ul {
    margin-bottom: 10rem;
    overflow: hidden;
    li {
      margin: 0 0 0 4rem;
      display: flex;
      flex-direction: column;
      img {
        margin-bottom: 3rem;
      }
      strong {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.4rem;
      }
      span {
        margin: 1rem 0 0 0;
        color: #666;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.2rem;
      }
      &.img_wrap {
        margin-right: -8.5rem;
      }
    }
  }
}

ol {
  margin: 0 2.1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 0.3rem;
  li {
    width: 49.5%;
    a {
      display: flex;
      flex-direction: column;
      img {
        margin-bottom: 1.5rem;
      }
      span {
        margin-bottom: 1rem;
        display: block;
      }
      em {
        padding-right: 1.6rem;
        color: #888;
        font-size: 1.2rem;
        line-height: 1.6rem;
        display: flex;
        align-items: center;
        &::after {
          content: '';
          width: 1.4rem;
          height: 1.4rem;
          margin-left: 0.5rem;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -23rem 0rem / 25rem auto;
          display: inline-block;
        }
      }
    }
  }
}

.link_box {
  margin-top: 10rem;
  > * + * {
    margin-top: 0.3rem;
  }
  a {
    height: 15rem;
    padding: 0 2.1rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    display: flex;
    align-items: center;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: #000000;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.25;
    }
    &.list01 {
      background: url('/images/sam/bg_page01.png') no-repeat center top / 100% auto;
    }
    &.list03 {
      background: url('/images/sam/bg_page03.png') no-repeat center top / 100% auto;
    }
    span {
      position: relative;
      z-index: 1;
    }
  }
}

h3 {
  margin: 10rem 2.1rem 3rem;
  font-size: 2rem;
  font-weight: 600;
  strong {
    color: #00bc70;
  }
}
:deep(footer) {
  margin-top: 10px !important;
}
</style>
