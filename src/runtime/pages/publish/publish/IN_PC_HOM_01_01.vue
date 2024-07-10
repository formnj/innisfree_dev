<template>
  <div class="main">
    <!-- visual -->
    <div class="visual">
      <div class="swiper_wrap">
        <!-- swiper -->
        <swiper v-bind="swiperOpt.visual" @swiper="visual_swiper" @slideChange="visual_swiper_change">
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
        </swiper>
        <!-- //swiper -->

        <!-- navigation -->
        <div class="navigation">
          <button class="swiper-button-prev">Prev</button>
          <button class="swiper-button-next">Next</button>
        </div>
        <!-- //navigation -->

        <!-- pagination -->
        <div class="custom_pagination">
          <div class="current">
            <em class="idx_01"></em>
            <em class="idx_02"></em>
          </div>
          <strong class="total"></strong>

          <Button class="btn_swiper_cont" data="play" />
        </div>
        <!-- //pagination -->
      </div>
    </div>
    <!-- //visual -->

    <!-- 혜택 슬라이드 -->
    <div class="text_banner">
      <div class="swiper_wrap">
        <swiper
          :slides-per-view="2"
          :loop="true"
          :space-between="40"
          :autoplay="{
            delay: 3000
          }">
          <swiper-slide>
            <a href="#none">현대카드 결제시 20% 할인혜택</a
            ><!-- default : #ccc / 관리자에서 직접 색상값 지정할 수 있음 -->
          </swiper-slide>
          <swiper-slide>
            <a href="#none" style="background: #b7e8cb">네이버페이 10,000원 혜택</a>
          </swiper-slide>
          <swiper-slide>
            <a href="#none" style="color: #fff; background: purple">네이버페이 10,000원 혜택</a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- //혜택 슬라이드 -->

    <!-- 오늘의 추천 제품 -->
    <section class="recommend">
      <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2>

      <div class="module_01">
        <ul>
          <li v-for="(item, idx) in mainSam.recommend" :key="idx">
            <a href="#none" class="item">
              <span class="thumb">
                <img :src="item.img" alt="" />
              </span>
              <div class="cont">
                <strong v-html="item.title"></strong>
                <p v-html="item.txt"></p>
                <Hash :item="item.hash" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="narrow event">
      <div class="swiper_wrap">
        <swiper v-bind="swiperOpt.recommend01">
          <swiper-slide v-for="(item, idx) in main_sample_event" :key="idx">
            <EventItem :item="item" class="type_arr type_reverse" />
          </swiper-slide>
        </swiper>
        <div class="navigation">
          <button class="swiper-button-prev">Prev1</button>
          <button class="swiper-button-next">Next1</button>
        </div>
      </div>
    </section>

    <section class="recommend">
      <!-- Del : 24.06.03 <h2>
        <a href="#none">오늘의 추천 제품</a>
      </h2> -->

      <div class="swiper_wrap">
        <swiper class="module_02" v-bind="swiperOpt.recommend02">
          <swiper-slide v-for="(item, idx) in mainSam.recommend02" :key="idx">
            <EventItem :item="item" />
            <GoodsItem :item="item.goods" :link="item.link" />
          </swiper-slide>
        </swiper>
        <div class="navigation">
          <button class="swiper-button-prev">Prev1</button>
          <button class="swiper-button-next">Next1</button>
        </div>
      </div>
    </section>

    <section class="narrow combi">
      <div class="inner">
        <!-- edit 24.06.03 -->
        <div class="main_thumb">
          <h2>
            집중관리가<br />
            필요할땐, 스페셜 케어 마스크 5+5
          </h2>
          <a href="#none" class="more">더보기</a>

          <div class="navigation">
            <button class="swiper-button-prev">Prev1</button>
            <button class="swiper-button-next">Next1</button>
          </div>
        </div>
        <!-- //edit 24.06.03 -->
        <div class="swiper_wrap">
          <swiper v-bind="swiperOpt.recommend03" @slideChange="scrollBar">
            <swiper-slide v-for="(item, idx) in sample_goods.slice(3, 8)" :key="idx">
              <a href="#none" class="item">
                <GoodsItem :item="item" :link="item.link" />
              </a>
            </swiper-slide>
            <div class="swiper-scrollbar-wrap">
              <p class="scrollbar">scroll bar</p>
            </div>
          </swiper>
        </div>
      </div>
    </section>
    <!-- //오늘의 추천 제품 -->

    <!-- 이 제품 어때요 -->
    <section>
      <h2>
        <a href="#none"><strong>주소희</strong> 님, 이 제품 어때요?</a>
      </h2>
      <div class="swiper_wrap">
        <swiper v-bind="swiperOpt.recommend04">
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" />
          </swiper-slide>
        </swiper>
        <div class="navigation">
          <button class="swiper-button-prev">Prev1</button>
          <button class="swiper-button-next">Next1</button>
        </div>
      </div>
    </section>
    <!-- //이 제품 어때요 -->

    <!-- 혜택 -->
    <section class="benefit">
      <div class="swiper_wrap">
        <swiper v-bind="swiperOpt.benefit">
          <swiper-slide v-for="(item, idx) in sample_event" :key="idx">
            <EventItem :item="item" class="type_box type_reverse" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- //혜택 -->

    <!-- 랭킹 -->
    <section class="ranking">
      <h2>
        <a href="#none">랭킹</a>
      </h2>
      <div class="inner">
        <div class="update_wrap">
          <Tabs tabType="type_txt" :item="rankingTabs" :tabidx="0" />
          <span class="date">03:00 기준</span>
        </div>
      </div>

      <div class="swiper_wrap">
        <swiper v-bind="swiperOpt.ranking">
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
            <div class="list_wrap">
              <ul class="goods_list">
                <li v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx">
                  <span class="ranking">{{ idx + 1 }}</span>
                  <GoodsItem :item="item" />
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
        <div class="navigation">
          <button class="swiper-button-prev">Prev1</button>
          <button class="swiper-button-next">Next1</button>
        </div>
      </div>
    </section>
    <!-- //랭킹 -->

    <!-- AI케어 -->
    <ServiceBanner />
    <!-- //AI케어 -->
  </div>
</template>
<script setup>
import { definePageMeta } from '#imports'
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

  /* play & pause button */
  pagination.querySelector('button').addEventListener('click', () => {
    if (event.currentTarget.getAttribute('data') == 'play') {
      swiper.autoplay.stop()
      event.currentTarget.setAttribute('data', 'pause')
    } else {
      swiper.autoplay.start()
      event.currentTarget.setAttribute('data', 'play')
    }
  })
}

const visual_swiper_change = (swiper) => {
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
  }
}

const scrollBar = (swiper) => {
  swiper.wrapperEl.parentNode.querySelector('.scrollbar').style.width =
    ((swiper.realIndex + 1) / swiper.wrapperEl.children.length) * 100 + '%'
}

/* swiper options */
const swiperOpt = {
  visual: {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.visual .swiper-button-next',
      prevEl: '.visual .swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: true,
    slidesOffsetBefore: -330
  },
  recommend01: {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.event .swiper-button-next',
      prevEl: '.event .swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  },
  recommend02: {
    //오늘의 추천 제품
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.recommend .swiper-button-next',
      prevEl: '.recommend .swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  },
  recommend03: {
    slidesPerView: 4,
    spaceBetween: 22,
    loop: true,
    navigation: {
      nextEl: '.combi .swiper-button-next',
      prevEl: '.combi .swiper-button-prev'
    },
    observer: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  },
  recommend04: {
    slidesPerView: 6,
    spaceBetween: 22,
    loop: true,
    observer: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      draggable: false
    },
    autoplay: {
      delay: 300,
      disableOnInteraction: false
    }
  },
  benefit: {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 300,
      disableOnInteraction: false
    },
    centeredSlides: true,
    observer: true,
    slidesOffsetBefore: -20
  },
  ranking: {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.ranking .swiper-button-next',
      prevEl: '.ranking .swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    centeredSlides: true,
    observer: true
  }
}
/* //swiper options */

import { mainSam, sample_goods, sample_event, main_sample_event } from '@inmModule/test/data/publish/dummyData'

definePageMeta({
  layout: 'publish-pc-default'
})

const rankingTabs = [
  { txt: '전체' },
  { txt: '스킨케어' },
  { txt: '메이크업' },
  { txt: '남성' },
  { txt: '헤어/바디' },
  { txt: '기획 세트' },
  { txt: '미용소품' }
]
</script>
<style lang="scss" scoped>
.main {
  min-width: 1320px;
  margin: 0 auto;
}
.visual {
  margin-top: 40px;
  .swiper_wrap {
    width: 100%;
    .swiper {
      padding-bottom: 40px;
      .swiper-pagination {
        bottom: 0;
      }
    }
    .custom_pagination {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      em {
        font-weight: 600;
        & + em:before {
          margin: 0 3px;
          content: '/';
        }
      }
      strong {
        margin: 0 10px;
        color: #888;
        font-weight: 400;
        display: flex;
        align-items: center;
        &:before {
          height: 8px;
          margin-right: 10px;
          border-left: 1px solid rgba(0, 0, 0, 0.2);
          content: '';
          display: block;
        }
      }
      button {
        width: 20px;
        height: 20px;
        margin: 0;
        background-color: transparent;
        background-image: url('@inmModule/assets/images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 250px auto;
        position: static;
        display: block;
        transform: rotate(0);
        :deep(em) {
          font-size: 0;
        }
        &[data='play'] {
          background-position: -130px -250px;
        }
        &[data='pause'] {
          background-position: -100px -250px;
        }
      }
    }
  }
  :deep(.swiper-slide) {
    width: 620px;
    opacity: 0.2;
    filter: grayscale(1);
    transition: opacity 0.25s;

    &.swiper-slide-active {
      opacity: 1;
      filter: grayscale(0);
    }
    &.swiper-slide-active + .swiper-slide {
      opacity: 1;
      filter: grayscale(0);
    }
  }
  .item {
    position: relative;
    &:hover {
      .thumb {
        img {
          transform: scale(1.2);
        }
      }
      .cont {
        transform: translateY(-15px);
      }
    }
    .thumb {
      position: relative;
      overflow: hidden;
      display: block;
      &:after {
        padding-top: 36.774193%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
      }
      img {
        display: block;
        transition: transform 0.45s;
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
        padding: 6px 10px;
        font-size: 14px;
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
      left: 40px;
      z-index: 1;
      transition: transform 0.45s;
      .name {
        & > * {
          margin-top: 5px;
          font-size: 32px;
          display: block;
        }
      }
      .price {
        margin-top: 15px;
        font-size: 32px;
        font-weight: 700;
        display: flex;
        align-items: center;
        em {
          margin-left: 10px;
          font-size: 20px;
          font-weight: 300;
          text-decoration: line-through;
        }
      }
    }
  }
}

.text_banner {
  margin-top: 40px;
  position: relative;
  &:after {
    border-top: 1px solid #ddd;
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
  }
  a {
    height: 60px;
    padding: 0 30px;
    font-size: 20px;
    font-weight: 600;
    line-height: 60px;
    background-color: #ccc;
    display: block;
  }
}

section {
  padding: 100px 0;
  position: relative;
  &.narrow {
    padding: 80px 0;
  }
  &.award {
    padding: 80px 0;
  }
  &.benefit {
    background-color: #f5f5f5;
  }
  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    margin-bottom: 40px;
    text-align: center;
    a {
      padding-right: 60px;
      color: #000;
      font-size: 32px;
      font-weight: 600;
      position: relative;
      display: inline-block;
      &:after {
        width: 40px;
        height: 40px;
        background: url('@inmModule/assets/images/common/icon_split.png') 0 -130px no-repeat;
        background-size: 250px auto;
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        display: block;
        transform: translateY(-50%);
      }
      strong {
        color: #00bc70;
      }
    }
  }
  &.recommend {
    .module_01 {
      > ul {
        margin-left: -30px;
        display: flex;
        > li {
          width: 33.3333%;
          margin-left: 30px;
          .item {
            height: 100%;
            padding: 39px;
            border: 1px solid #eee;
            box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.03);
            display: flex;
            .thumb {
              width: 150px;
              margin-right: 40px;
              img {
                vertical-align: top;
              }
            }
            .cont {
              padding: 12px 0;
              display: flex;
              flex: 1;
              flex-direction: column;
              & > * {
                letter-spacing: -0.1em;
              }
              strong {
                font-size: 24px;
                font-weight: 600;
                line-height: 32px;
              }
              p {
                height: 40px;
                margin-top: 16px;
                color: #888;
                font-size: 16px;
                font-weight: 300;
                line-height: 20px;
                flex: 1;
              }
            }
            :deep(.hash) {
              button {
                padding: 3px 10px;
                font-size: 12px;
                background-color: #fff;
                border: 1px solid #009d5e;
                display: flex;
                align-items: center;
                &:before {
                  content: '#';
                }
              }
            }
          }
        }
      }
    }
    .module_02 {
      :deep(.event_item) {
        .thumb {
          padding-top: 120.75%;
        }
        .cont {
          height: auto;
          margin-bottom: 20px;
          strong {
            font-size: 20px;
            line-height: 28px;
          }
        }
      }
      :deep(.goods_item) {
        padding-top: 20px;
        border-top: 1px solid #eee;
        position: relative;
        display: flex;
        .img_wrap {
          width: 61px;
          margin-right: 20px;
          position: static;
          .thumb {
            height: auto;
            padding-top: 132.786885%;
            em {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }
          }
          & + a {
            flex: 1;
          }
          .btnIconBox {
            background-color: transparent;
            top: 25px;
            bottom: initial;
            left: initial;
            transform: translateY(0);
            button {
              display: none;
              &.btn_cart {
                padding: 4px;
                border: 1px solid #eee;
                border-radius: 50%;
                display: block;
                em {
                  width: 24px;
                  height: 24px;
                  background-position: -170px -140px;
                  background-size: 250px auto;
                }
              }
            }
          }
        }
        .cont {
          margin-top: 0;
          .name {
            margin-top: 5px;
            padding-right: 42px;
            strong {
              height: 36px;
              color: #000;
              font-weight: 300;
              display: block;
            }
          }
          .review_score {
            display: none;
          }
          .price {
            margin-top: 12px;
            margin-bottom: 0;
            > * {
              font-size: 14px;
            }
            em {
              font-size: 12px;
            }
            span {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  &.event {
    :deep(.thumb) {
      padding-top: 53.225806%;
    }
    :deep(.cont) {
      margin-top: 40px;
      strong {
        font-size: 24px;
      }
      .date {
        margin-top: 16px;
      }
    }
  }
  &.combi {
    .inner {
      display: flex;
      flex-wrap: wrap;
      .main_thumb {
        width: 200px;
        margin-right: 60px;
        h2 {
          margin-bottom: 15px;
          font-size: 28px;
          text-align: left;
        }
        .more {
          height: 32px;
          padding: 0 20px;
          font-size: 12px;
          font-weight: 600;
          line-height: 30px;
          border: 1px solid #000;
          border-radius: 1px;
          display: inline-flex;
          align-items: center;
          &:after {
            width: 12px;
            height: 12px;
            margin-left: 5px;
            background: url('@inmModule/assets/images/common/icon_split.png') -210px 0 no-repeat;
            background-size: 250px auto;
            content: '';
            display: block;
          }
        }
        .navigation {
          margin: 60px 0 0 0;
          position: static;
          display: flex;
          gap: 20px;
          button {
            width: 32px;
            height: 32px;
            margin: 0;
            background: url('@inmModule/assets/images/common/icon_split.png') -60px -200px no-repeat;
            background-size: 250px auto;
            position: static;
            transform: rotate(180deg);
            &.swiper-button-next {
              transform: rotate(0);
            }
          }
        }
      }
      .swiper_wrap {
        width: calc(100% - 260px);
        flex: 1;
        :deep(.swiper) {
          padding-bottom: 60px;
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
        }
        .goods_item {
          :deep(.price) {
            em {
              display: block;
            }
          }
        }
      }
    }
  }
  &.benefit {
    .swiper_wrap {
      width: 100%;
    }
    :deep(.swiper-slide) {
      width: 400px;
      .event_item {
        .thumb {
          padding-top: 53.25%;
        }
        .cont {
          strong {
            height: 50px;
            margin-bottom: 8px;
            font-size: 20px;
          }
        }
      }
    }
  }
}
.swiper_wrap {
  width: 1280px;
  margin: 0 auto;
  position: relative;
  .goods_item {
    width: 100%;
  }
}
.navigation {
  margin: 0 -740px;
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  z-index: 0;
  button {
    width: 60px;
    height: 60px;
    font-size: 0;
    background: url('@inmModule/assets/images/common/icon_split.png') no-repeat 0 -190px;
    background-size: 250px auto;
    &:after {
      display: none;
    }
    &.swiper-button-next {
      transform: rotate(180deg);
    }
  }
}
.update_wrap {
  margin-bottom: 40px;
  position: relative;
  :deep(.tab_wrap) {
    ul {
      margin-left: 0;
      &:after {
        left: 0;
      }
      li + li {
        margin-left: 60px;
      }
    }
  }
  .date {
    color: #999;
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    top: 0;
    right: 0;
  }
}

.ranking {
  .list_wrap {
    .goods_list {
      display: flex;
      flex-wrap: wrap;
      & > li {
        width: 240px;
        // padding-left:20px;
      }
    }
  }
}

:deep(.svc_banner) {
  max-width: 1320px;
  margin: 0 auto;
  background: url('@inmModule/assets/images/ui/bg_svc_bann_big.png') no-repeat 0 0;
  align-items: center;
  justify-content: center;
  p {
    padding: 0;
    font-size: 20px;
    font-weight: 600;
  }
  br {
    display: none;
  }
  .btn_ui_wrap {
    span.btn {
      width: auto;
      height: 40px;
      padding: 0 70px;
      font-size: 16px;
      font-weight: 600;
      line-height: 40px;
      border-radius: 100px;
      box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.15);
    }
    span.bubble {
      height: 22px;
      padding: 0 8px;
      font-size: 12px;
      font-weight: 700;
      line-height: 22px;
      border-radius: 100px;
      &:after {
        margin-right: -2px;
        right: 50%;
      }
    }
  }
}
</style>
