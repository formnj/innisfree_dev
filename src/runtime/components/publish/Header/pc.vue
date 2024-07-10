<template>
  <docTopBanner />
  <header>
    <div class="inner">
      <h1>
        <a :href="path + 'IN_PC_HOM_01_01'"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></a>
      </h1>
      <div class="search_wrap">
        <div class="search">
          <SearchInput
            :search-placeholder="[{ text: '새로워진 이니스프리 SHOWCASE' }, { text: '새로워진 이니스프리' }, { text: '새로워진' }]"
            @mouseover="search_input"
            @click="search_input" />
          <Button class="btn_search" />
        </div>
        <!-- search layer -->
        <div v-show="search_layer" class="search_layer" @mouseleave="search_input">
          <div class="search">
            <div>
              <Inputs />
              <Button class="btn_search" />
            </div>
          </div>
          <!-- 최근 검색어 -->
          <section v-if="isValid === ''">
            <strong
              >최근 검색어
              <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
            </strong>
            <ul class="latest">
              <template v-if="key_cnt > 0">
                <li v-for="(item, idx) in latestSearchWordData" :key="idx">
                  <div v-if="key_cnt > 0">
                    <a href="#none">{{ item.word }}</a>
                    <Button class="btn_del" @click="keyword_del" />
                  </div>
                </li>
              </template>
              <template v-else>
                <li class="no_data">최근 검색어가 없습니다.</li>
              </template>
            </ul>
          </section>
          <!-- //최근 검색어 -->
          <!-- 카테고리 -->
          <section v-if="isValid === ''">
            <strong>카테고리</strong>
            <ul class="category">
              <li v-for="item in categoryForSearchLayerData" :key="item">
                <a href="#none">
                  <span class="thumb">
                    <em><img :src="item.imageUrl" /></em>
                  </span>
                  <p>{{ item.text }}</p>
                </a>
              </li>
            </ul>
          </section>
          <!-- //카테고리 -->
          <!-- 최근 검색어 : 검색어 입력시 -->
          <section v-if="isValid !== '' && !isBool">
            <ul class="auto">
              <li v-for="item in auto_list" :key="item">
                <a :href="item.url">
                  {{ item.word }}
                  <em>12.29</em>
                </a>
              </li>
            </ul>
          </section>
          <!-- //최근 검색어 : 검색어 입력시 -->
          <!-- 관련상품 : 검색어 입력시 -->
          <section v-if="isValid !== '' && !isBool">
            <!-- <section> -->
            <ul class="goods_list">
              <li v-for="(item, idx) in prd_list" :key="idx">
                <GoodsItem :item="item" :link="item.link" class="type_column" />
              </li>
            </ul>
          </section>
          <!-- 관련상품 : 검색어 입력시 -->
          <!-- 관련상품X : 검색어 입력시 -->
          <section v-if="isBool">
            <div class="no_result">일치하는 결과가 없습니다.</div>
          </section>
          <!-- //관련상품X : 검색어 입력시 -->
        </div>
        <!-- //search layer -->
      </div>
      <div class="keyword_wrap">
        <div class="keyword">
          <ol ref="roll_ele">
            <li v-for="(item, idx) in keyword_list" :key="idx">
              <a href="#none" :class="item.type"
                ><em>{{ item.num }}.</em>{{ item.name }}</a
              >
            </li>
          </ol>
          <div>
            <p>09:30 기준 인기 검색어</p>
          </div>
        </div>
      </div>
      <div class="quick_wrap">
        <ul class="quick">
          <li>
            <a href="#none">로그인</a>
          </li>
          <li>
            <a href="#none">회원가입</a>
          </li>
          <li>
            <a href="/publish/IN_PC_MYP_01_91">고객센터</a>
          </li>
          <li>
            <a href="#none">ABOUT</a>
          </li>
        </ul>
        <ul class="icon_menu">
          <li>
            <NuxtLink to="#">
              <Icons class="header_zzim"></Icons>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <Icons class="mypage"></Icons>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">
              <Icons class="delivery"></Icons>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="path + 'IN_PC_CAR_01_01'">
              <Icons class="pc_cart" txt="5"></Icons>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="gnb_wrap">
      <div class="inner">
        <Button class="btn_category" txt="카테고리" @mouseover="cate_layer.open" />

        <!-- NavGnb component 로 대체사용 -->
        <NavGnb :item="pc_gnb_list" />
        <ul class="quick">
          <li>
            <a href="#none">신규가입혜택</a>
          </li>
          <li>
            <a href="#none">멤버십 혜택</a>
          </li>
          <li>
            <a href="#none">공병수거</a>
          </li>
          <li>
            <a href="#none">매장안내</a>
          </li>
          <li>
            <a href="#none">마이샵</a>
          </li>
        </ul>
      </div>

      <div class="nav_category" @mouseleave="cate_layer.close">
        <nav>
          <div class="nav_wrap">
            <Button class="btn_category" txt="카테고리" />
            <dl v-for="(item, idx) in global_menu" :key="idx">
              <dt>
                <a :href="item.link">{{ item.menu }}</a>
              </dt>
              <dd>
                <ul>
                  <li v-for="(item, idx) in item.sub_menu" :key="idx">
                    <a :href="item.link">{{ item.menu }}</a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  categoryForSearchLayerData,
  sample_goods,
  latestSearchWordData,
  global_menu,
  keyword_list,
  pc_gnb_list
} from '@inmModule/test/data/publish/dummyData'
import { ref, onMounted } from '#imports'

/* path */
const path = '/publish/publish/'

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

const search_layer = ref(false)
const search_input = () => {
  search_layer.value = !search_layer.value
  document.querySelector('.search_layer .input input').focus()
}

onMounted(() => {
  /* keyword rolling */
  roll_ele.value.append(roll_ele.value.children[0].cloneNode(true))
  let key_rolling = setInterval(roll_fn, roll_time.value)
  /* //keyword rolling */

  /* keyword menu */
  const keyword_wrap = document.querySelector('.keyword_wrap')
  const roll_last = keyword_wrap.querySelector('ol').lastChild
  const keyword_menu = {
    mouseEnter: (e) => {
      e.target.classList.add('active')
      roll_last.style.display = 'none'
      clearInterval(key_rolling)
      roll_idx.value = 0
      e.target.querySelector('ol').style.cssText = ''
    },
    mouseLeave: (e) => {
      e.target.classList.remove('active')
      roll_last.style.display = ''
      key_rolling = setInterval(roll_fn, roll_time.value)
    }
  }
  keyword_wrap.addEventListener('mouseenter', keyword_menu.mouseEnter)
  keyword_wrap.addEventListener('mouseleave', keyword_menu.mouseLeave)
  /* keyword menu */

  document.querySelector('.search_layer').addEventListener('mouseleave', () => {
    document.querySelector('.search_layer').classList.remove('active')
  })

  /* 스크롤 헤더 이동 */
  window.addEventListener('scroll', () => {
    const rect = document.querySelector('.gnb_wrap').getBoundingClientRect()
    if (rect.top <= 0) {
      document.querySelector('header').classList.add('fixed')
      document.querySelector('.keyword_wrap').classList.remove('active')
    } else {
      document.querySelector('header').classList.remove('fixed')
    }
  })

  const rect = document.querySelector('.gnb_wrap').getBoundingClientRect()
  if (rect.top <= 0) {
    document.querySelector('header').classList.add('fixed')
  }

  document.querySelector('.search_layer .input input').addEventListener('input', auto_complete)
})

const isValid = ref('')
const isBool = ref(false)
const auto_list = ref([])
const prd_list = ref([])

const auto_complete = (e) => {
  isValid.value = e.target.value

  auto_list.value = latestSearchWordData.filter((e) => e.word.indexOf(isValid.value) >= 0)
  prd_list.value = sample_goods.filter((e) => e.name !== undefined && e.name.indexOf(isValid.value) >= 0)

  auto_list.value.length <= 0 ? (isBool.value = true) : (isBool.value = false)
}

/* 최근검색어 삭제 */
const key_cnt = ref(latestSearchWordData.length)
const keyword_del = (e) => {
  e.target.closest('li').remove()
  key_cnt.value = document.querySelector('.latest').childElementCount
}

const keyword_del_all = (e) => {
  const target = e.target.closest('section').querySelector('.latest')

  if (!target.firstElementChild.classList.contains('no_data')) {
    while (target.firstElementChild) {
      target.removeChild(target.firstElementChild)
      key_cnt.value = document.querySelector('.latest').childElementCount
    }
  }
}

/* category layer */
const cate_layer = {
  open: () => {
    document.querySelector('.nav_category').classList.add('active')
  },
  close: () => {
    document.querySelector('.nav_category').classList.remove('active')
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #f5f5f5;
  position: sticky;
  top: -100px;
  z-index: 12;

  &.fixed {
    border: 0;

    .inner {
      h1 {
        a {
          width: 80px;
          height: 80px;
          position: fixed;
          top: 0px;

          img {
            width: 80px;
            height: 80px;
            content: url('@inmModule/assets/images/common/logo_innisfree_bk.png');
          }
        }
      }

      .quick_wrap {
        margin-top: 28px;
        position: fixed;
        top: 0;
        right: 50%;
        transform: translateX(640px);

        .quick {
          li {
            &:nth-child(3),
            &:nth-child(4) {
              display: none;
            }
          }
        }
      }
    }

    .gnb_wrap {
      height: 80px;
      border: 0;

      .inner {
        height: 80px;

        .btn_category {
          height: 80px;
          margin-left: 110px;
        }

        .quick {
          display: none;
        }

        :deep(.nav_gnb) {
          a {
            height: 80px;
          }

          .active a:after {
            bottom: 0;
          }
        }
      }

      .nav_category {
        .btn_category {
          height: 80px;
          padding: 0 41px 0 30px;
          left: 100px;
        }
      }
    }
  }

  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
      a {
        display: block;

        img {
          height: 20px;
        }
      }
    }

    .search_wrap {
      width: 400px;
      margin: 30px;
      position: relative;

      :deep() .search {
        padding-right: 15px;
        border: 1px solid #00bc70;
        border-radius: 40px;
        overflow: hidden;
        display: flex;
        align-items: center;

        .input {
          input {
            height: 38px;
            padding: 0 10px 0 20px;
            border: 0;
          }

          i {
            font-size: 14px;
          }
        }

        .btn_search {
          width: 24px;
          height: 24px;
          font-size: 0;
          background-color: transparent;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-position: 0 -30px;
          background-repeat: no-repeat;
          background-size: 250px auto;
          position: relative;
        }
      }
    }

    .search_layer {
      background-color: #fff;
      border: 2px solid #00bc70;
      border-radius: 10px;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
      overflow: hidden;
      position: absolute;
      top: -1px;
      right: 0;
      left: 0;
      z-index: 10;

      &.active {
        display: block;
      }

      strong {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        display: flex;
        justify-content: space-between;

        :deep() .btn_txt {
          em {
            color: #999;
            font-size: 12px;
          }
        }
      }

      .search {
        border: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0;
        display: block;

        & > div {
          display: flex;
          align-items: center;
          flex: 1;
        }
      }

      section {
        padding: 28px;

        & + section:before {
          border-top: 1px solid #eee;
          content: '';
          display: block;
          transform: translateY(-28px);
        }

        ul.goods_list {
          display: flex;
          gap: 10px 0;

          li {
            width: 100%;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          &.latest {
            margin-top: -10px;
            margin-left: -5px;

            li:not(.no_data) {
              margin-top: 10px;
              margin-left: 5px;
              padding: 0 15px;
              border: 1px solid #ddd;
              border-radius: 100px;

              div {
                display: flex;
                align-items: center;
              }
            }

            li.no_data {
              width: 100%;
              padding: 50px 10px;
              color: #999;
              text-align: center;
            }

            a {
              padding: 7px 0;
              color: #333;
              font-size: 14px;
              font-weight: 400;
              display: block;
            }

            :deep() .btn_del {
              width: 12px;
              height: 12px;
              margin-top: 1px;
              margin-left: 10px;
              background-color: transparent;
              position: relative;

              &:before,
              &:after {
                width: 10px;
                margin-top: 5px;
                margin-left: 1px;
                border-top: 1px solid #999;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                display: block;
              }

              &:before {
                transform: rotate(45deg);
              }

              &:after {
                transform: rotate(135deg);
              }

              em {
                padding: 0;
                font-size: 0;
              }
            }
          }

          &.category {
            margin-top: -14px;
            margin-left: -14px;

            li {
              width: 20%;
              padding-top: 14px;
              padding-left: 14px;

              &.dot {
                a {
                  position: relative;
                  &:before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    background: #00bc70;
                    border-radius: 50%;
                    position: absolute;
                    top: 3px;
                    right: 3px;
                  }
                }
              }

              a {
                width: 100%;
                height: 100%;
                display: block;
              }

              p {
                margin-top: 8px;
                color: #888;
                font-size: 12px;
                font-weight: 400;
                text-align: center;
              }
            }
          }

          &.auto {
            flex-direction: column;
            gap: 25px;

            li {
              a {
                color: #333;
                font-size: 14px;
                font-weight: 400;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            }
          }
        }

        .no_result {
          height: 140px;
          color: #333;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .keyword_wrap {
      height: 40px;
      font-weight: 600;
      overflow: hidden;

      li > * {
        padding: 11px 0;
        line-height: 18px;
        display: flex;
        align-items: center;

        em {
          width: 22px;
          margin-right: 5px;
          font-size: 13px;
          text-align: center;
        }

        &:after {
          width: 12px;
          height: 12px;
          margin-left: 10px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-position: -20px -60px;
          background-repeat: no-repeat;
          background-size: 250px auto;
          content: '';
          display: block;
        }

        &.up:after {
          background-position: 0 -60px;
        }

        &.down:after {
          background-position: -40px -60px;
        }

        &.new:after {
          background-position: -60px -60px;
        }
      }

      .keyword {
        > div {
          padding-top: 20px;
          margin-bottom: 28px;
          border-top: 1px solid #eee;
          display: none;

          p {
            font-size: 13px;
            font-weight: 400;
            text-align: center;
          }
        }
      }

      &.active {
        width: 154px;

        .keyword {
          height: auto;
          padding: 0 28px;
          border: 2px solid #000;
          border-radius: 10px;
          background: #fff;
          overflow: hidden;
          position: absolute;
          top: 19%;
          right: 50%;
          transform: translate(84%);
          z-index: 3;
          animation: slideDown 0.3s ease-in forwards;

          ol {
            margin-top: 28px;
            margin-bottom: 20px;

            li {
              padding-top: 16px;

              a {
                padding: 2px 0;

                &:after {
                  margin-left: auto;
                }
              }

              &:first-child {
                padding-top: 0;
              }
            }
          }

          > div {
            display: block;
          }
        }
      }
    }

    .quick_wrap {
      margin-top: 20px;
      margin-bottom: auto;
      margin-left: auto;
      display: flex;

      ul {
        display: flex;

        &.quick {
          li {
            position: relative;

            & + li:before {
              height: 10px;
              border-left: 1px solid #eee;
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              display: block;
              transform: translateY(-50%);
            }
          }

          a {
            padding: 4px 16px;
            color: #666;
            font-size: 12px;
            display: block;
          }
        }

        &.icon_menu {
          margin-left: 15px;

          li + li {
            margin-left: 12px;
          }
        }
      }
    }
  }

  .gnb_wrap {
    border-top: 1px solid #f5f5f5;
    border-right: 0;
    border-left: 0;
    background-color: #fff;

    .inner {
      height: 60px;

      & > ul,
      nav > ul {
        position: relative;
        z-index: 1;
        display: flex;
      }

      :deep(.btn_category) {
        width: 130px;
        height: 60px;
        background-color: transparent;
        justify-content: flex-start;
        position: relative;

        em {
          padding: 0 0 0 34px;
          color: #000;
          font-size: 16px;
          font-weight: 600;
          position: relative;

          &:before,
          &:after {
            width: 16px;
            border-top: 2px solid #000;
            content: '';
            position: absolute;
            top: 50%;
            left: 4px;
            display: block;
            transform: translateY(-50%);
          }

          &:before {
            height: 12px;
            border-bottom: 2px solid #000;
          }
        }

        &:after {
          content: '';
          width: 1px;
          height: 16px;
          background-color: #eee;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }

      .quick {
        margin-left: auto;

        li + li {
          margin-left: 6px;
        }

        a {
          padding: 6px 12px;
          color: #666;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #ddd;
          border-radius: 100px;
          display: block;
        }
      }
    }
  }

  .nav_category {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 100%; //button height
    right: 0;
    left: 0;
    z-index: 2;
    display: none;
    transition: height 0.28s ease-out;

    &.active {
      display: block;
    }

    nav {
      max-width: 1320px;
      margin: 0 auto;
      padding: 40px 20px;
      background-color: #fff;
      position: relative;
      display: flex;

      .nav_wrap {
        display: flex;
        justify-content: space-between;
        flex: 1;

        dl {
          width: 120px;

          &:last-child {
            width: auto;
            padding-left: 65px;
            border-left: 1px solid #eee;
          }

          dt {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;

            a {
              width: 100%;
              padding-bottom: 10px;
              font-size: 16px;
              font-weight: 600;
              display: block;
            }

            &:hover {
              border-bottom: 1px solid #00bc70;

              a {
                color: #00bc70;
              }
            }
          }

          dd {
            li {
              height: 31px;
              margin-bottom: 5px;
              border-bottom: 1px solid transparent;
              display: flex;
              align-items: center;

              &:hover {
                color: #000;
                font-weight: 600;
                border-bottom: 1px solid #000;
              }

              a {
                width: 100%;
                color: #888;
                display: block;
              }
            }
          }
        }
      }
    }

    :deep(.btn_category) {
      height: 62px;
      padding: 0 31px 0 20px;
      border: 1px solid #eee;
      border-bottom: 0;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 18px;
      transform: translateY(-100%);

      em {
        padding: 0 0 0 34px;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        position: relative;

        &:before,
        &:after {
          content: '';
          width: 16px;
          border-top: 2px solid #00bc70;
          position: absolute;
          top: 50%;
          left: 4px;
          display: block;
          transform: translateY(-50%);
        }

        &:before {
          height: 12px;
          border-bottom: 2px solid #00bc70;
        }
      }
    }
  }
}

@keyframes slideDown {
  from {
    max-height: 0;
  }

  to {
    max-height: 500px;
  }
}
</style>
