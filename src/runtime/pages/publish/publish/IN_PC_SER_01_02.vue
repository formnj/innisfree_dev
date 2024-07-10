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
        <!-- 최근 검색어 : 검색어 입력시 -->
        <section>
          <ul class="auto">
            <li v-for="item in latestSearchWordData.slice(0, 5)" :key="item">
              <a :href="item.url">
                {{ item.word }}
                <em>12.29</em>
              </a>
            </li>
          </ul>
        </section>
        <!-- //최근 검색어 : 검색어 입력시 -->
        <!-- 관련상품 : 검색어 입력시 -->
        <section>
          <!-- <section> -->
          <ul class="goods_list">
            <li v-for="(item, idx) in sample_goods.slice(0, 3)" :key="idx">
              <GoodsItem :item="item" :link="item.link" class="type_column" />
            </li>
          </ul>
        </section>
        <!-- 관련상품 : 검색어 입력시 -->
        <!-- 관련상품X : 검색어 입력시 -->
        <section>
          <div class="no_result">일치하는 결과가 없습니다.</div>
        </section>
        <!-- //관련상품X : 검색어 입력시 -->
      </div>
      <!-- //search layer -->
    </div>
  </div>
</template>
<script setup>
import { sample_goods, latestSearchWordData } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-nocontent'
})

/* 검색 레이어 */
const search_layer = ref(false)
const search_input = () => {
  search_layer.value = !search_layer.value
}
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
</style>
