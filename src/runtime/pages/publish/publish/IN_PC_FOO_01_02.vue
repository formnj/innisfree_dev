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
          <h2>
            ‘Green Tea’<br />
            the Origin of INNISFREE
          </h2>
          <p>
            천혜의 자연환경과 경이로운 생명력을 가진 제주.<br />
            그곳의 흙과 빛, 물과 바람, 그리고 안개가 조화롭게 어우러진<br />
            청록의 다원은 이니스프리의 시작점입니다.
          </p>
        </div>
      </div>
      <ul>
        <li>
          <img src="/images/sam/p_slide01.png" alt="" />
        </li>
        <li>
          <span><img src="/images/sam/p_slide02.png" alt="" /></span>
          <p>
            <span>
              돌무더기와 가시덤불이 가득했던 황무지를<br />
              손으로 일구어 비옥한 차밭으로<br />
              개간한 창업주의 끈질긴 집념과 개척 정신은
            </span>
            <span>
              ‘건강한 피부를 위해 끊임없이 도전하고 연구’ <br />
              하는 오늘날 이니스프리의 근간이 되었고,<br />
              이것의 산물이라고 할 수 있는 ‘그린티’는<br />
              이니스프리의 정수가 되는 원료로 자리 잡았습니다.
            </span>
          </p>
        </li>
      </ul>
      <dl>
        <dt>
          <strong> Farm to Face<br />Beauty Green Tea™ INNISFREE </strong>
        </dt>
        <dd>
          <p>
            <span>녹차 나무 한 그루가 자라기까지 걸리는 시간 5년.</span>
            <span>
              약 20여년 동안 여러 실험 끝에 2만여 종의 녹차 중 <br />
              기후, 병충해를 비롯한 여러 악조건을 견디며<br />
              최적의 효능을 발휘해낼 수 있는,
            </span>
            <span> 전세계 유일무이한 '피부만을 위한 녹차 품종'을 탄생 시킬 수 있었습니다. </span>
          </p>
          <div class="swiper_wrap">
            <!-- swiper -->
            <swiper class="swiper" v-bind="swiper_options.greentea" @swiper="onSwiper">
              <swiper-slide v-for="(item, idx) in about_greentea_02" :key="idx">
                <div class="item">
                  <img :src="item.img" />
                </div>
              </swiper-slide>
              <div class="swiper-scrollbar-wrap"></div>
            </swiper>
            <!-- //swiper -->
          </div>
        </dd>
      </dl>
      <h3>이니스프리의 특별한 그린티가 들어간 <br /><strong>이니스프리 대표 제품</strong>들을 지금 바로 만나보세요.</h3>
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
import { about_greentea_02, about_greentea_03 } from '@inmModule/test/data/publish/dummyData'

definePageMeta({
  layout: 'publish-pc-category'
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

/* play & pause */
const visual_swiper = (swiper) => {
  // const total = swiper.loopedSlides,
  const total = swiper.wrapperEl.children.length,
    current = swiper.realIndex + 1,
    pagination = swiper.wrapperEl.closest('.swiper_wrap').querySelector('.custom_pagination')

  if (total < 10) {
    pagination.querySelector('.current .idx_01').textContent = '0' + current

    if (current + 1 > total) {
      pagination.querySelector('.current .idx_02').textContent = '0' + (total - current + 1)
    } else {
      pagination.querySelector('.current .idx_02').textContent = '0' + (current + 1)
    }

    pagination.querySelector('strong.total').textContent = '0' + total
  }
}

const scrollBar = (swiper) => {
  swiper.wrapperEl.parentNode.querySelector('.scrollbar').style.width =
    ((swiper.realIndex + 1) / swiper.wrapperEl.children.length) * 100 + '%'
}

/* swiper option */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  greentea: {
    slidesPerView: '3',
    spaceBetween: 5,
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 500,
      disableOnInteraction: false
    },
    speed: 1000,
    scrollbar: {
      el: '.swiper-scrollbar-wrap',
      draggable: false
    }
  }
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
      background: url('https://images.innisfree.co.kr/resources/web2/images/about/230228/brandStory_bg0201.png') no-repeat -381px bottom;
      position: relative;
      > div {
        position: absolute;
        left: 0;
        bottom: -417px;
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
  > ul {
    padding-top: 120px;
    li {
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > span {
        img {
        }
      }
      > p {
        margin-left: 140px;
        > * + * {
          margin-top: 15px;
        }
        span {
          color: #666;
          font-size: 16px;
          line-height: 1.62;
          display: block;
        }
        &::before {
          content: '';
          width: 40px;
          height: 40px;
          margin-bottom: 20px;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -318px -738px / 500px auto;
          display: block;
        }
        &::after {
          text-align: right;
          content: '';
          width: 40px;
          height: 40px;
          margin-top: 20px;
          margin-left: auto;
          margin-right: 0;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -373px -738px / 500px auto;
          display: block;
        }
      }
    }
  }
  > dl {
    margin-top: 140px;
    dt {
      strong {
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: 600;
        display: block;
      }
    }
    dd {
      padding-bottom: 22px;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      > p {
        > * + * {
          margin-top: 10px;
        }
        min-width: 500px;
        padding: 55.5px 20px;
        color: #fff;
        font-size: 14px;
        background: url('https://images.innisfree.co.kr/resources/web2/images/about/230228/bg_greenBox.png') no-repeat left top;
        line-height: 1.86;
        box-sizing: border-box;
        text-align: center;
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &::before {
          content: '';
          width: 44px;
          height: 45px;
          margin-bottom: 20px;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -292px -659px / 500px auto;
          display: block;
          position: relative;
          z-index: 2;
        }
        &::after {
          content: '';
          background: #000;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          opacity: 0.4;
        }
        span {
          position: relative;
          z-index: 2;
        }
      }
      > div {
        width: calc(100% - 500px);
        .swiper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .swiper-scrollbar-wrap {
          margin-top: 30px;
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
          & > :deep(.swiper-scrollbar-drag) {
            font-size: 0;
            border-bottom: 2px solid #000;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }
  > h3 {
    margin-bottom: 40px;
    padding-top: 150px;
    font-size: 24px;
    font-weight: 600;
    strong {
      color: #00bc70;
    }
  }
  > ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;
    li {
      width: 240px;
      a {
        display: flex;
        flex-direction: column;
        span {
          margin-top: 20px;
          font-size: 16px;
          font-weight: 400;
          display: block;
        }
        em {
          margin-top: 10px;
          padding-right: 16px;
          color: #888;
          font-size: 14px;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          &::after {
            content: '';
            width: 17px;
            height: 17px;
            margin-left: 5px;
            background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -3px -175px / 250px auto;
            display: inline-block;
          }
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
