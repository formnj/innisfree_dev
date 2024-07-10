<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>ABOUT</h2>
  </div>

  <div class="inner">
    <Tabs
      id="membership_tab"
      tabType="type_03"
      :item="[{ txt: 'Brand Story' }, { txt: 'Green Tea Heritage' }, { txt: 'Better For Earth' }]"
      :tabidx="0" />
    <section>
      <div class="top_visual">
        <div>
          <h2>Effective, Nature-Powered <br />Skincare Discovered from the Island</h2>
          <p>
            무한한 자연의 힘을 담은 다채로운 식물과<br />
            생명력 가득한 토양을 품은 대지,<br />그리고 미지의 에너지로 가득한 청록의 바다
          </p>
        </div>
      </div>
      <dl>
        <dt>비디오 영역</dt>
        <dd>이 모든 것들이 자유롭게 살아 숨쉬는 <strong>THE NEW ISLE</strong></dd>
      </dl>
      <ul>
        <li>
          <img src="/images/sam/p_bg0102.png" alt="" />
          <strong> Enjoy being you,<br />Be free with INNISFREE </strong>
          <span>
            이니스프리와 함께 겉으로 보이는 아름다움을 넘어<br />
            당신의 모든 아름다운 찰나를 발견해보세요.
          </span>
        </li>
      </ul>
      <div class="link_box">
        <a class="list02" @click="$router.push('/publish/IN_MO_FOO_01_02')">
          <span>The Origin<br />Green Tea Heritage</span>
          <em>상세보기</em>
        </a>
        <a class="list03" @click="$router.push('/publish/IN_MO_FOO_01_03')">
          <span>Better for Earth</span>
          <em>상세보기</em>
        </a>
      </div>
    </section>
  </div>
</template>
<script setup>
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

/* swiper option */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  loopedSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  speed: 1000
}
/* swiper option */

onMounted(() => {})

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active')
}

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    default: '#none'
  }
})
</script>
<style lang="scss" scoped>
section {
  > div {
    &.top_visual {
      margin: 0 0 350px;
      padding: 500px 0 126px;
      background: url(/images/sam/p_bg0101.png) no-repeat -381px bottom;
      position: relative;
      > div {
        position: absolute;
        left: 0;
        bottom: -425px;
        h2 {
          font-size: 60px;
          font-weight: 700;
          line-height: 1.33;
        }
        p {
          margin: 20px 0 0 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.67;
        }
        &::after {
          content: '';
          width: 56px;
          height: 56px;
          margin: 70px 0;
          background: url('/images/sam/bg_arrow.png');
          display: block;
        }
      }
    }
  }
  > dl {
    margin-bottom: 150px;
    padding-top: 150px;
    font-weight: 500;
    font-size: 16px;
    text-align: right;
    dt {
      width: 100%;
      height: 650px;
      background-color: #999;
      overflow: hidden;
    }
    dd {
      margin-top: 20px;
      text-align: right;
    }
  }
  > ul {
    li {
      height: 670px;
      padding: 0px 0 100px 350px;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
      strong {
        margin-top: 50px;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.36;
        display: inline-block;
      }
      span {
        margin: 10px 0 0 0;
        color: #666;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.62;
        &::before {
          content: '';
          width: 300px;
          height: 300px;
          background: url('/images/sam/p_brandStory_bg0103.png');
          position: absolute;
          bottom: -120px;
          left: 0;
          display: block;
        }
      }
    }
  }
}

.link_box {
  margin-top: 200px;
  display: flex;
  gap: 1px;

  a {
    width: 100%;
    height: 200px;
    padding: 0 40px;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    &.list02 {
      background: url('/images/sam/p_page02.png') no-repeat center top / 100% auto;
    }
    &.list03 {
      background: url('/images/sam/p_page03.png') no-repeat center top / 100% auto;
    }
    span {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }
    em {
      margin-top: 10px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      &::after {
        content: '';
        width: 16px;
        height: 16px;
        margin-left: 5px;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -139px -302px / 250px auto;
        display: inline-block;
      }
    }
  }
}
</style>
