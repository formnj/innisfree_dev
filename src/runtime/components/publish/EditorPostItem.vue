<template>
  <div class="editor_post_item">
    <a :href="link">
      <span class="thumb">
        <img :src="item.img" alt="" />
      </span>
      <span class="title"> <Sticker :item="item.sticker" />{{ item.title }} </span>
    </a>

    <div class="swiper_wrap">
      <swiper :slides-per-view="'auto'" :space-between="16" :slides-offset-before="21">
        <swiper-slide v-for="(goods, idx) in sample_goods" :key="idx" class="goods_slide">
          <GoodsItem :item="goods" :link="goods.link" class="type_column type_cart" :useMark="false" />
        </swiper-slide>
      </swiper>
    </div>

    <span class="post_icons">
      <span class="i view">{{ item.view.cnt }}</span>
      <button type="button" class="i like" @click="setFilter">{{ item.view.like }}</button>
      <a href="#none" class="i cmnt">{{ item.view.cmnt }}</a>
    </span>
  </div>

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { setFilter } from '@inmModule/assets/js/common-ui'

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

const props = defineProps({
  item: {},
  link: {
    type: String,
    default: 'IN_MO_HOM_01_09'
  }
})
</script>

<style lang="scss" scoped>
.editor_post_item {
  a {
    display: block;

    .thumb {
      display: block;
      position: relative;

      img {
        vertical-align: top;
      }

      &:after {
        content: '';
        width: 3.6rem;
        height: 3.6rem;
        background: #000 url('@inmModule/assets/mo_images/common/icon_split.png') -21rem -15.5rem / 25rem auto no-repeat;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .title {
      margin: 0 2.1rem;
      padding: 2rem 0;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;
      border-bottom: 1px solid #f5f5f5;
      display: block;

      :deep(.sticker) {
        margin-bottom: 1.2rem;

        em {
          font-size: 1rem;
          line-height: 1.4rem;
        }
      }
    }
  }

  .swiper_wrap {
    &:after {
      content: '';
      width: calc(100% - 4.2rem);
      margin-left: 2.1rem;
      border-bottom: 1px solid #f5f5f5;
      display: block;
    }

    .swiper-container {
      padding: 1.5rem 0;
    }

    .goods_slide {
      width: 23.5rem;
      padding: 1.6rem 0;

      :deep(.goods_item) {
        width: 23.5rem;
        height: 8rem;
        padding-bottom: 0;
        display: flex;
        gap: 1.5rem;
        position: relative;

        .img_wrap {
          .thumb {
            width: 6rem;
            height: 8rem;
          }

          .btnIconBox {
            top: auto;
            transform: none;
            bottom: 0.6rem;
          }
        }

        .cont {
          height: 100%;
          margin-top: 0;
          padding: 0.7rem 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > .price {
            margin: 0;
            em {
              display: none;
            }
          }
        }
      }
    }
  }

  :deep(.post_icons) {
    padding: 0 2.1rem;
    border-top: 0;
    gap: 1.2rem;

    .i {
      flex: none;
      gap: 0.2rem;
    }
  }
}
</style>
