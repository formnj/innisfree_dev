<template>
  <div>
    <div class="inner">
      <div class="title_wrap">
        <h2><span>‘<em>레티놀</em>’</span>에 대한 검색결과 입니다.</h2>
      </div>
      <div class="title_wrap pdt_wrap">
        <p>총 <em>2,145</em> 건의 제품</p>
        <div class="pdtSortTab_wrap">
          <div class="sortTab">
            <button class="btn_dropdown" @click="Drop_Down()">랭킹순</button>
            <ul>
              <li><a href="#none" class="active">랭킹순</a></li>
              <li><a href="#none">추천순</a></li>
              <li><a href="#none">판매금액순</a></li>
              <li><a href="#none">판매수량순</a></li>
              <li><a href="#none">할인율순</a></li>
              <li><a href="#none">최신순</a></li>
              <li><a href="#none">리뷰많은순</a></li>
              <li><a href="#none">낮은가격순</a></li>
              <li><a href="#none">높은가격순</a></li>
            </ul>
          </div>
          <button @click="modal.open('modal_filter', 'detailSearch filter')">필터</button>
        </div>
      </div>
      <div class="list_wrap goods_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
        <div class="paging">
          <div>
            <a href="#none" class="first">처음으로</a>
            <a href="#none">1</a>
            <a href="#none">2</a>
            <a href="#none" class="active">3</a>
            <a href="#none">4</a>
            <a href="#none">5</a>
            <a href="#none" class="last">마지막으로</a>
          </div>
        </div>
      </div>
    </div>
    <div class="list_wrap event_wrap">
      <div class="sub_title_wrap">
        <h3>연관 이벤트 <em>6</em></h3>
      </div>
      <ul class="event_list">
        <li v-for="(item, idx) in sample_event" :key="idx">
          <EventItem :item="item" :link="item.link" />
        </li>
      </ul>
    </div>
    <div class="inner">
      <div class="swiper_wrap">
        <div class="sub_title_wrap">
          <h3>
            이 제품은 어때요?
            <a href="#none"><span class="btn_link_arrw">더보기</span></a>
          </h3>
        </div>
        <InmSwiper v-bind="options">
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </InmSwiper>
        <button class="swiper-button-next"></button>
        <button class="swiper-button-prev"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sample_goods, sample_event } from '@inmModule/test/data/publish/dummyData'
import { Drop_Down, modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

import { SwiperSlide } from 'swiper/vue'

definePageMeta({
  layout: 'publish-pc-sub'
})

const options = {
  slidesPerView: 5,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000, // 5초 후 자동 슬라이드
    disableOnInteraction: false // 사용자 인터랙션 후에도 자동 재생 계속
  },
  pagination: {
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}
</script>

<style lang="scss" scoped>
.inner {
  width: 1280px;
  margin: 0 auto;
  position: relative;
}

.title_wrap {
  margin: 60px 0;
  h2 {
    margin: 0 auto;
    line-height: 42px;

    span {
      font-weight: 600;
    }
  }

  p {
    color: #000;
    em {
      font-weight: 600;
    }
  }

  em {
    color: #00bc70;
  }

  &.pdt_wrap {
    padding: 20px 0;
    align-items: center;

    .pdtSortTab_wrap {
      margin: 0;

      .sortTab {
        ul {
          height: 0;
          max-height: 0;
          transition: all 0.5s;
        }
      }
    }
  }
}

.sub_title_wrap {
  max-width: 1280px;
  margin: 0 auto 30px;

  h3 {
    color: #000;
    gap: 10px;
    em {
      color: #00bc70;
    }

    .btn_link_arrw {
      color: #000;
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
      position: static;

      &:after {
        width: 16px;
        height: 16px;
        margin: 0;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -110px -60px / 250px auto;
        border: 0;
        transform: rotate(-90deg);
      }
    }
  }
}

.paging {
  margin-top: 60px;
}

.list_wrap {
  &.goods_wrap {
    margin-bottom: 50px;
  }

  &.event_wrap {
    padding: 100px 0;
    background-color: #f5f5f5;

    .event_list {
      max-width: 1280px;
      margin: 0 auto;
      gap: 40px;

      li {
        flex: 1 1 400px;
      }
    }
  }
}

.swiper_wrap {
  padding: 50px 0 100px;

  .sub_title_wrap {
    h3 {
      justify-content: space-between;
    }
  }

  :deep(.swiper) {
    padding-bottom: 60px;

    .swiper-pagination {
      height: 1px;
      background-color: #ddd;
      top: unset;
      bottom: 0 !important;

      span {
        background-color: #000;
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 32px;
    height: 32px;
    margin: 0;
    background: url(/_nuxt/assets/images/common/icon_split.png) -140px -270px no-repeat;
    background-size: 250px auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:after {
      content: none;
    }
  }

  .swiper-button-prev {
    transform: rotate(180deg);
    left: -80px;
  }

  .swiper-button-next {
    right: -80px;
  }
}
</style>
