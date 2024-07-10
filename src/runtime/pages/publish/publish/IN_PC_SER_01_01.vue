<template>
  <div class="inner">
    <div class="search_wrap">
      <div class="search">
        <SearchInput
          :search-placeholder="[{ text: '새로워진 이니스프리 SHOWCASE' }, { text: '새로워진 이니스프리' }, { text: '새로워진' }]"
          @mouseover="search_input"
          @click="search_input" />
        <Button class="btn_search" />
      </div>
      <!-- search layer -->
      <div class="search_layer" :class="{ show: search_layer }" @mouseleave="search_input">
        <div class="search">
          <div>
            <SearchInput
              :search-placeholder="[{ text: '새로워진 이니스프리 SHOWCASE' }, { text: '새로워진 이니스프리' }, { text: '새로워진' }]" />
            <Button class="btn_search" />
          </div>
        </div>
        <!-- 최근 검색어: 검색결과 O -->
        <section>
          <strong
            >최근 검색어
            <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
          </strong>
          <ul class="latest">
            <li v-for="(item, idx) in latestSearchWordData" :key="idx">
              <div v-if="key_cnt > 0">
                <a href="#none">{{ item.word }}</a>
                <Button class="btn_del" @click="keyword_del" />
              </div>
            </li>
          </ul>
        </section>
        <!-- //최근 검색어: 검색결과 O -->

        <!-- 최근 검색어: 검색결과 X -->
        <section>
          <strong
            >최근 검색어
            <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
          </strong>
          <ul class="latest">
            <li class="no_data">최근 검색어가 없습니다.</li>
          </ul>
        </section>
        <!-- //최근 검색어: 검색결과 X -->

        <!-- 카테고리 -->
        <section>
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
      </div>
      <!-- //search layer -->
    </div>

    <!-- 키워드 -->
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
    <!-- //키워드 -->
  </div>
</template>
<script setup>
import { categoryForSearchLayerData, latestSearchWordData, keyword_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-nocontent'
})

/* 검색 레이어 */
const search_layer = ref(false)
const search_input = () => {
  search_layer.value = !search_layer.value
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
})
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  align-items: flex-start;
  gap: 20px;
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
  visibility: hidden;
  opacity: 0;

  &.show {
    visibility: visible;
    opacity: 1;
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
    }
  }
}

.keyword_wrap {
  height: 40px;
  font-weight: 600;
  overflow: hidden;
  position: relative;

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
    overflow: unset;

    .keyword {
      height: auto;
      width: 184px;
      padding: 0 28px;
      border: 2px solid #000;
      border-radius: 10px;
      background: #fff;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
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

@keyframes slideDown {
  from {
    max-height: 0;
  }

  to {
    max-height: 500px;
  }
}
</style>
