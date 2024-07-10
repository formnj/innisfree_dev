<template>
  <div class="nav_category">
    <!-- mo search -->
    <div class="search">
      <div>
        <SearchInput
          :search-placeholder="[
            { text: '새로워진 이니스프리 SHOWCASE' },
            { text: '새로워진 이니스프리 SHOWCASE' },
            { text: '새로워진 이니스프리 SHOWCASE' }
            // {text:'새로워진'},
          ]" />
        <Icons class="btn_search" txt="검색" />
      </div>
      <Icons class="barcode" txt="바코드" />
      <Icons class="alarm" txt="알람" />
      <Icons class="mo_cart" txt="50" />
    </div>
    <!-- //mo search -->

    <!-- mo banner -->
    <div class="banner">
      <ul ref="roll_ele">
        <li><a href="#">한정 기간 특가할인 / 사은품 증정 제품 모아보기</a></li>
        <li><a href="#">사은품 증정 제품 모아보기</a></li>
        <li><a href="#">한정 기간 특가할인</a></li>
      </ul>
    </div>
    <!-- //mo banner -->

    <nav>
      <div class="nav_wrap">
        <ul>
          <li v-for="(item, idx) in global_menu" :key="idx">
            <button type="button" @click="cate_tab">
              <span>{{ item.menu }}</span>
            </button>
          </li>
        </ul>
        <div class="nav_list">
          <section v-for="(item, idx) in global_menu" :key="idx">
            <a :href="path + 'IN_MO_PRD_01_01'">{{ item.menu }} 전체</a>
            <ul class="list">
              <li v-for="(item_sub, idx_sub) in item.sub_menu" :key="idx_sub">
                <a :href="path + 'IN_MO_PRD_01_01'">
                  <img :src="item_sub.img" />
                  {{ item_sub.menu }}
                </a>
              </li>
            </ul>
            <ul v-if="item.goods" class="goods">
              <li v-for="item_sub in item.goods" :key="item_sub">
                <GoodsItem :item="item_sub" />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="quick_wrap">
        <ul class="quick">
          <li>
            <a :href="path + 'IN_MO_HOM_01_05'">신규가입혜택</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_MYP_01_04'">멤버십 혜택</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_FOO_01_01'">ABOUT</a>
          </li>
          <li>
            <a :href="'#'">공병수거</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_MYP_01_85'">매장안내</a>
          </li>
          <li>
            <a :href="path + 'IN_MO_MYP_01_85'">마이샵</a>
          </li>
        </ul>
      </div>
      <div class="list_wrap">
        <ul class="event_list">
          <li v-for="(item, idx) in nav_goods" :key="idx">
            <EventItem :item="item" :link="path + 'IN_MO_HOM_01_05'" class="type_column" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { global_menu, nav_goods } from '@inmModule/test/data/publish/dummyData'

definePageMeta({
  layout: 'publish-mo-nocontent'
})

const path = '/publish/'

const cate_tab = (e) => {
  const lis = [...e.target.closest('ul').children]
  const index = lis.indexOf(e.target.closest('li'))

  const nav_cont = document.querySelector('.nav_list')
  const target = document.querySelectorAll('.nav_list section')[index]

  nav_cont.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
}

// 좌우롤링 배너
const roll_ele = ref(null)
const roll_idx = ref(0)
const roll_time = ref(3000)
const roll_fn = () => {
  const roll_child = roll_ele.value.querySelectorAll('li')
  const roll_width = roll_child[0].clientWidth

  roll_idx.value++
  roll_ele.value.style.cssText = `transform: translateX(-${roll_width * roll_idx.value}px); transition: all 0.5s ease;`

  roll_ele.value.addEventListener('transitionend', () => {
    if (roll_idx.value >= roll_child.length - 1) {
      roll_ele.value.style.cssText = `transform: translateX(0); transition: unset;`
      roll_idx.value = 0
    }
  })
}

onMounted(() => {
  roll_ele.value.append(roll_ele.value.children[0].cloneNode(true))
  setInterval(roll_fn, roll_time.value)

  document.querySelector('.nav_wrap > ul li').classList.add('active')
  document.querySelector('.nav_wrap > div').addEventListener('scroll', (e) => {
    ;[...e.target.children].forEach((item, index) => {
      const nav_list = document.querySelectorAll('.nav_wrap > ul li')

      if (e.target.scrollTop >= item.offsetTop && e.target.scrollTop <= item.offsetTop + (item.offsetHeight - 1)) {
        nav_list[index].classList.add('active')
      } else {
        nav_list[index].classList.remove('active')
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.nav_category {
  .search {
    padding: 1rem 1.6rem 1rem 2.1rem;
    border: 0;
    border-bottom: 0.1rem solid #ddd;
    border-radius: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;

    & > div {
      border: 0.1rem solid #000;
      border-radius: 0.5rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex: 1;
      position: relative;
    }
    :deep(.input_wrap) {
      .roll {
        width: 100%;
        padding: 0 0.5rem 0 1.5rem;
        left: 0;

        ul {
          li {
            width: 100%;
            span {
              font-size: 1.3rem;
            }
          }
        }
      }
    }
    :deep(.input) {
      i,
      input {
        font-size: 1.3rem;
      }
      input {
        padding-right: 0.5rem;
        border: 0;
      }
    }
    .btn_search {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: 1rem;
      background-color: transparent;
      background-position: 0 -4rem;
    }
    .barcode {
      margin-left: 1rem;
    }
    .alarm {
      margin-left: 0.5rem;
    }
    .mo_cart {
      margin-left: 0.5rem;
    }
  }
  .banner {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
    overflow: hidden;
    position: sticky;
    top: 6.2rem;
    z-index: 2;

    ul {
      display: flex;

      li {
        flex: 0 0 100%;

        a {
          padding: 1rem 2.1rem;
          display: flex;
          justify-content: space-between;
          &:after {
            width: 1.6rem;
            height: 1.6rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-position: -8rem 0;
            background-repeat: no-repeat;
            background-size: 25rem auto;
            content: '';
            display: block;
          }
        }
      }
    }
  }

  nav {
    overflow: hidden;
    overflow-y: scroll;
    flex: 1;
    .nav_wrap {
      height: 100%;
      max-height: 385px;
      display: flex;
      > ul {
        width: 37.333333%;
        background-color: #f5f5f5;

        li {
          button {
            width: 100%;
            padding: 16px 10px 16px 21px;
            color: #999;
            font-size: 14px;
            font-weight: 600;
            text-align: left;
            display: block;
            position: relative;
            span {
              position: relative;
              z-index: 1;
            }
            &:before {
              content: '';
              width: 0;
              height: 100%;
              background: #fff;
              position: absolute;
              top: 0;
              left: 0;
              transition: all 0.2s;
            }
            > * {
              pointer-events: none;
            }
          }

          &:last-child {
            button {
              color: #333;
            }
          }

          &.active {
            button {
              color: #000;
              &:before {
                width: 100%;
              }
            }
          }
        }
      }

      > div {
        overflow: auto;
        flex: 1;
        position: relative;
        a {
          color: #000;
          font-size: 14px;
          font-weight: 400;
          padding: 16px 21px;
          display: block;
        }
        section {
          overflow: hidden;
          > a {
            font-weight: 600;
            display: flex;
            &:after {
              width: 16px;
              height: 16px;
              margin-left: 10px;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-position: -100px 0;
              background-repeat: no-repeat;
              background-size: 250px auto;
              content: '';
              display: inline-block;
            }
          }
          & + section:before {
            margin-left: 20px;
            border-top: 1px solid #eee;
            content: '';
            display: block;
          }
          &:last-child {
            padding-top: 10px;
            margin-top: 10px;
            &:before {
              border-top: 0;
            }
            > a {
              display: none;
            }
            .list {
              margin: 0 9px 50px 21px;
              display: flex;
              flex-wrap: wrap;
              gap: 5px;
              li {
                width: 48.7%;
                a {
                  padding: 0;
                  font-size: 12px;
                  text-align: center;
                  img {
                    width: 100%;
                    padding-bottom: 5px;
                  }
                }
              }
            }
          }

          .goods {
            margin: 20px 9px 70px 21px;
            display: flex;
            gap: 5px;
            li {
              width: 50%;
              :deep(.goods_item) {
                width: 10rem;
                padding: 0;
                a {
                  padding: 0;
                }
                .btnIconBox {
                  display: none;
                }
                .cont {
                  margin-top: 10px;
                  font-size: 12px;
                  .name {
                    strong {
                      color: #000;
                      font-size: 12px;
                      overflow: hidden;
                      .cate {
                        margin-right: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .quick_wrap {
      border-top: 5px solid #eee;
      border-bottom: 5px solid #f5f5f5;
      overflow: hidden;
      .quick {
        background-color: #f5f5f5;
        overflow: auto;
        display: flex;
        gap: 1px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        li {
          background-color: #fff;
          a {
            padding: 16px 24px;
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;
            display: block;
          }
        }
      }
    }

    .list_wrap {
      padding: 4rem 2.1rem 6rem;
      .event_list {
        gap: 1.6rem;
        li {
          width: 100%;
          padding: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #eeeeee;

          &:last-child {
            border-bottom: 0;
          }

          :deep(.event_item) {
            .item {
              gap: 1.6rem;

              .thumb {
                width: 18rem;
                height: 9.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
