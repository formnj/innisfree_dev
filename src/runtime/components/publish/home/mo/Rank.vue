<template>
  <section class="ranking">
    <h2>
      <a href="#none">랭킹</a>
      <span class="date">03:00 기준</span>
    </h2>
    <div class="inner">
      <div class="update_wrap">
        <Tabs tabType="type_txt" :item="rankingTabs" :tabidx="0" />
      </div>
    </div>

    <InmSwiper v-bind="swiperOpt.ranking">
      <swiper-slide>
        <ul class="list_wrap">
          <li v-for="(item, idx) in sample_goods.slice(0, 5)" :key="idx">
            <span class="badge">{{ idx + 1 }}</span>
            <GoodsItem class="type_column type_cart" :item="item" :link="item.link" />
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="list_wrap">
          <li v-for="(item, idx) in sample_goods.slice(5, 10)" :key="idx">
            <span class="badge">{{ idx + 6 }}</span>
            <GoodsItem class="type_column" :item="item" :link="item.link" />
          </li>
        </ul>
      </swiper-slide>
    </InmSwiper>
  </section>
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { SwiperSlide } from 'swiper/vue'

const swiperOpt = {
  ranking: {
    slidesPerView: 1,
    pagination: true
  }
}

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
.ranking {
  h2 {
    .date {
      padding: 0.5rem 0;
      color: #aaa;
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
  .swiper {
    padding-bottom: 30px;
    :deep(.swiper-pagination) {
      bottom: 0;
      .swiper-pagination-bullet {
        width: 0.8rem;
        height: 0.8rem;
        &.swiper-pagination-bullet-active {
          background-color: #000;
        }
      }
    }
  }
  :deep(.goods_item.type_column) {
    padding-bottom: 0.3rem;
    position: relative;
    display: flex;
    gap: 0 1.5rem;
    .img_wrap {
      width: 6.9rem;
      flex-shrink: 0;
      .thumb {
        width: 100%;
        height: 9.2rem;
      }
    }
    .cont {
      margin-top: 0;
      .name {
        strong {
          font-size: 1.3rem;
        }
      }
    }
  }
  .list_wrap {
    > li {
      position: relative;
      .badge {
        width: 1.8rem;
        height: 1.8rem;
        color: #fff;
        font-size: 1rem;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.update_wrap {
  margin-right: -2.1rem;
  margin-bottom: 3rem;
  margin-left: -2.1rem;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  :deep(.tab_wrap) {
    .type_txt {
      margin-right: -1rem;
      margin-left: -1rem;
      padding-right: 2.1rem;
      padding-left: 2.1rem;
      overflow-x: auto;
      &:after {
        display: none;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      li > * {
        padding: 0 1rem 1.5rem;
        font-size: 1.4rem;
        white-space: nowrap;
        em {
          padding-bottom: 1.5rem;
          font-size: 1.4rem;
        }
      }
      li.current button:after {
        right: 1rem;
        left: 1rem;
      }
    }
  }
}
</style>
