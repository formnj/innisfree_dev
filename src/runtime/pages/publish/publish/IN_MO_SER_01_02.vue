<template>
  <!-- 검색결과 영역 -->
  <div class="search_wrap" data-search="after">
    <section class="keyword">
      <div class="keyword_wrap search_area">
        <h2>
          <button type="button">
            인기검색어
            <span>3분전 갱신</span>
          </button>
        </h2>
        <div class="keyword_list">
          <ol ref="roll_ele">
            <li v-for="(item, idx) in keyword_list" :key="idx">
              <a href="#none" :class="item.type"
                ><em>{{ item.num }}</em
                ><span>{{ item.name }}</span></a
              >
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- 검색결과 X -->
    <section>
      <div class="no_content">일치하는 결과가 없습니다.</div>
    </section>
    <!-- //검색결과 X -->

    <section>
      <!-- 제품 개수, 랭킹, 필터 모달 -->
      <div class="sub_title_wrap">
        <h3>
          <p class="badge count">제품 <em>23</em></p>
        </h3>
        <div class="pdtSortTab_wrap">
          <div class="sortTab">
            <button class="btn_dropdown">랭킹순</button>
          </div>
          <button>필터</button>
        </div>
      </div>
      <!-- 제품 개수, 랭킹, 필터 모달 -->

      <!-- 리스트 아이템 영역 -->
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
      <!-- //리스트 아이템 영역 -->
    </section>

    <section>
      <div class="sub_title_wrap">
        <h4>연관이벤트 <em>5</em></h4>
      </div>

      <!-- 이벤트 아이템 영역 -->
      <div class="event_wrap">
        <swiper v-bind="swieprOpt.events">
          <swiper-slide v-for="(item, idx) in sample_event.slice(0, 5)" :key="idx">
            <EventItem :item="item" :link="item.link" class="type_column" />
          </swiper-slide>
        </swiper>
      </div>
      <!-- //이벤트 아이템 영역 -->
    </section>

    <section>
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
    </section>

    <!-- 추천 제품 영역 -->
    <section>
      <div class="sub_title_wrap">
        <div>
          <h4><em>주소희</em>님 이 제품은 어때요?</h4>
        </div>
        <a href="#none" class="btn_link_arrw"></a>
      </div>
      <div class="swiper_wrap">
        <swiper v-bind="swieprOpt.recommend04">
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 5)" :key="idx">
            <GoodsItem class="type_cart" :item="item" :useHash="true" />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- //추천 제품 영역 -->
  </div>
</template>
<script setup>
import { sample_goods, sample_event, keyword_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, ref, onMounted } from '#imports'

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
  },
  recommend04: {
    slidesPerView: 'auto',
    spaceBetween: 3,
    loop: false
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
  }
}

definePageMeta({
  layout: 'publish-mo-search'
})

const emit = defineEmits(['icons'])

const roll_ele = ref(null)
const roll_idx = ref(0)
const roll_time = ref(3000)
const roll_fn = () => {
  const roll_child = roll_ele.value.querySelectorAll('li')
  const roll_height = roll_child[0].clientHeight

  roll_idx.value++
  roll_ele.value.style.cssText = `transform: translateY(-${roll_height * roll_idx.value}px); transition: all 0.35s ease-in`

  roll_ele.value.addEventListener('transitionend', () => {
    if (roll_idx.value >= roll_child.length - 1) {
      roll_ele.value.style.cssText = `transform: translateY(0); transition: unset;`
      roll_idx.value = 0
    }
  })
}

onMounted(() => {
  emit('icons', 1)

  roll_ele.value.append(roll_ele.value.children[0].cloneNode(true))
  let key_rolling = setInterval(roll_fn, roll_time.value)

  /* //keyword rolling */
  const keyword_wrap = document.querySelector('.keyword_wrap.search_area')
  const roll_last = keyword_wrap.querySelector('ol').lastChild
  const keyword_act = () => {
    keyword_wrap.classList.toggle('active')
    if (keyword_wrap.classList.contains('active')) {
      roll_last.style.display = 'none'
      clearInterval(key_rolling)
      roll_idx.value = 0
      keyword_wrap.querySelector('ol').style.cssText = ''
    } else {
      roll_last.style.display = ''
      key_rolling = setInterval(roll_fn, roll_time.value)
    }
  }

  keyword_wrap.addEventListener('click', keyword_act)
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin-top: 0;
  }
}
.keyword {
  width: 100%;
  padding: 0;
  .keyword_wrap {
    position: relative;
    h2 {
      padding: 1.7rem 2rem;
      border-top: 0.1rem solid #eee;
      border-bottom: 0.1rem solid #eee;
      button {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 600;
        font-family: inherit;
        outline: 0;
        display: flex;
        align-items: center;
        span {
          display: none;
        }
        &:after {
          content: '';
          width: 1.4rem;
          height: 0.7rem;
          margin-left: auto;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -11rem -6.4rem;
          background-size: 25rem auto;
          display: inline-block;
        }
      }
    }
    .keyword_list {
      width: 50%;
      height: 1.9rem;
      overflow: hidden;
      position: absolute;
      top: 1.9rem;
      left: 50%;
      transform: translateX(-45%);
      ol {
        li {
          height: 1.9rem;
          display: flex;
          align-items: center;
          a {
            display: flex;
            align-items: center;
            gap: 2.7rem;
            em {
              min-width: 1.6rem;
              font-size: 1.3rem;
              font-weight: 600;
              line-height: 1.6rem;
              text-align: center;
              position: relative;
              &:after {
                content: '';
                width: 1.2rem;
                height: 1.2rem;
                background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -1.5rem -13rem;
                background-size: 25rem auto;
                position: absolute;
                top: 50%;
                right: -15px;
                transform: translateY(-50%);
              }
            }
            &.up {
              em {
                &:after {
                  background-position: 0 -13rem;
                }
              }
            }
            &.down {
              em {
                &:after {
                  background-position: -3rem -13rem;
                }
              }
            }
            &.new {
              em {
                &:after {
                  background-position: -4.5rem -13rem;
                }
              }
            }
            span {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            }
          }
        }
      }
    }
    &.active {
      h2 {
        button {
          span {
            margin-left: 15px;
            color: #999;
            font-size: 12px;
            font-weight: 300;
            display: inline-block;
          }
          &:after {
            transform: rotate(180deg);
          }
        }
      }
      .keyword_list {
        width: auto;
        height: 24.1rem;
        padding: 3rem 2rem;
        border-bottom: 0.1rem solid #eee;
        overflow: auto;
        position: unset;
        transform: translateX(0);
        ol {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 2.1rem 0;
          li {
            width: 50%;
          }
        }
      }
    }
  }
}

.no_content {
  position: relative;
}

.list_wrap {
  position: relative;
}

.event_wrap {
  position: relative;
  .swiper {
    padding-bottom: 30px;
    :deep(.swiper-pagination) {
      bottom: 0;
      span {
        width: 5px;
        height: 5px;
        background: #eee;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }
  }
  :deep(.event_item) {
    .item {
      .thumb {
        height: 10.6rem;
      }
    }
  }
}

.swiper_wrap {
  margin: 0 -2.1rem;
  .swiper {
    padding: 0 2.1rem;
  }
  .swiper-slide {
    width: 14rem;

    .goods_item {
      width: 14rem;
    }
  }
}

.modal_wrap {
  &.modal_sort {
    .modal_container {
      border-top-left-radius: 20px 20px;
      border-top-right-radius: 20px 20px;
      .modal_header {
        width: 100%;
        height: 29.4px;
        padding: 0;
        border-bottom: 0;
        position: relative;
        .btn_close {
          top: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          &::before {
            width: 67px;
            height: 5px;
            border-radius: 100px;
            border-top: 0;
            background-color: #dddddd;
            position: absolute;
            transform: rotate(0deg);
          }
          &::after {
            display: none;
          }
        }
      }
      .modal_content {
        padding: 0;
        height: calc(100% - 29.4px);
        overflow-y: auto;
        div {
          ul {
            li {
              padding: 16px 28px;
              border-bottom: 1px solid #f5f5f5;
              &:last-of-type {
                border-bottom: 0;
              }
              &.active {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &::after {
                  content: '';
                  width: 1.6rem;
                  height: 1.6rem;
                  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -8.05rem -7rem;
                  display: inline-block;
                }
                a {
                  color: #00bc70;
                  font-weight: 700;
                }
              }
              a {
                color: #000000;
                font-weight: 300;
                font-size: 16px;
                line-height: 17.5px;
                letter-spacing: -0.14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
