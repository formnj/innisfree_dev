<template>
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

    <div class="swiper_wrap">
      <InmSwiper class="module_02" v-bind="swiperOpt.recommend02">
        <swiper-slide v-for="(item, idx) in mainSam.recommend02" :key="idx">
          <EventItem :item="item" />
          <GoodsItem :item="item.goods" :link="item.link" />
        </swiper-slide>
      </InmSwiper>
    </div>
  </section>
</template>

<script setup>
import { mainSam } from '@inmModule/test/data/publish/dummyData'
import { SwiperSlide } from 'swiper/vue'

const swiperOpt = {
  recommend02: {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  h2 {
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #000;
  }
  .module_01 {
    margin-bottom: 10rem;
    > ul {
      > li {
        & + li {
          margin-top: 2rem;
        }
        > a {
          display: flex;
          gap: 2rem;
          .thumb {
            width: 9rem;
            height: 12rem;
            img {
              width: 100%;
            }
          }
          .cont {
            flex: 1;
            strong {
              font-size: 1.6rem;
            }
            p {
              margin-top: 1rem;
              color: #888;
              font-size: 1.2rem;
            }
            :deep(.hash) {
              margin-top: 1rem;
              button {
                padding: 0.6rem 0.8rem;
                display: flex;
                align-items: center;
                &:before {
                  margin-right: 0.3rem;
                  content: '#';
                  display: block;
                }
              }
            }
          }
        }
      }
    }
  }
  .module_02 {
    .swiper-slide {
      width: 26.5rem;
    }
    :deep(.event_item) {
      .item {
        display: block;
        .thumb {
          width: 100%;
          padding-top: 120.754716%;
          border-radius: 1rem;
          em {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        }
      }
      .cont {
        height: auto;
        margin-top: 0;
        margin-bottom: 2rem;
        padding: 1.6rem 2rem 0 0;
        strong {
          margin-top: 0;
          font-size: 1.6rem;
          line-height: 2rem;
        }
      }
    }
    :deep(.goods_item) {
      width: 100%;
      padding-top: 1.5rem;
      border-top: 1px solid #eee;
      position: relative;
      display: flex;
      .img_wrap {
        width: 6.1rem;
        margin-right: 2rem;
        position: static;
        .thumb {
          width: 6.1rem;
          height: auto;
        }
        & + a {
          flex: 1;
        }
        .btnIconBox {
          background-color: transparent;
          top: 2rem;
          bottom: initial;
          left: initial;
          gap: 0;
          transform: translateY(0);
          button {
            display: none;
            &.btn_cart {
              padding: 0.4rem;
              border: 1px solid #eee;
              border-radius: 50%;
              display: block;
              em {
                width: 2.4rem;
                height: 2.4rem;
                background-position: -14rem -10rem;
                background-size: 25rem auto;
              }
            }
          }
        }
      }
      .cont {
        margin-top: 0;
        .name {
          margin-top: 0.5rem;
          padding-right: 4.2rem;
          strong {
            height: 3.2rem;
            color: #000;
            font-size: 1.3rem;
            font-weight: 300;
            display: block;
          }
        }
        .review_score {
          display: none;
        }
        .price {
          margin-top: 1.5rem;
          margin-bottom: 0;
          > * {
            font-size: 1.2rem;
          }
          em {
            font-size: 1rem;
            display: inline;
          }
          span {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
