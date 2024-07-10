<template>
  <div class="search_wrap">
    <div class="search">
      <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
      <Button class="btn_search" />
    </div>
    <!-- search layer -->
    <div class="search_layer">
      <div class="search">
        <Button txt="닫기" class="sam_close" @click="search_close" />
        <div>
          <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
          <Button class="btn_search" />
        </div>
        <ul class="icon_menu">
          <li>
            <a href="#none" class="cart"
              >장바구니
              <em>5</em>
            </a>
          </li>
        </ul>
      </div>
      <section>
        <strong
          >최근 검색어
          <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
        </strong>
        <ul class="latest">
          <template v-if="key_cnt > 0">
            <li v-for="(item, idx) in latest" :key="idx">
              <div v-if="key_cnt > 0">
                <a href="#none">{{ item }}</a>
                <Button class="btn_del" @click="keyword_del" />
              </div>
            </li>
          </template>
          <template v-else>
            <li class="no_data">최근 검색어가 없습니다.</li>
          </template>
        </ul>
      </section>
      <section>
        <strong>카테고리</strong>
        <ul class="category">
          <li v-for="item in category" :key="item">
            <a href="#none">
              <span class="thumb">
                <em><img :src="item.img" /></em>
              </span>
              <p>{{ item.txt }}</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <!-- //search layer -->
  </div>
</template>
<script setup>
import { ref } from '#imports'

const props = defineProps({
  latest: Array,
  category: Array
})

/* 최근검색어 삭제 */
let key_cnt = ref(props.latest.length)
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

const search_close = (e) => {
  e.target.closest('.search_layer').classList.remove('active')
}
</script>

<style lang="scss" scoped>
.search_wrap {
  position: relative;
  & > .search {
    .label_wrap {
      display: none;
    }
    .btn_search {
      width: 32px;
      height: 32px;
      font-size: 0;
      background-color: transparent;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 250px auto;
      position: relative;
    }
  }
}
.search_layer {
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: none;
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
    :deep(.btn_txt) {
      em {
        color: #999;
        font-size: 12px;
      }
    }
  }
  .search {
    padding: 10px 16px 10px 21px;
    border: 0;
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    display: flex;
    & > div {
      border: 1px solid #000;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex: 1;
    }
    :deep(.input) {
      input {
        padding-right: 5px;
        font-size: 13px;
        border: 0;
      }
      i {
        font-size: 13px;
      }
    }
    .btn_search {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      background-color: transparent;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-position: 0 -40px;
      background-repeat: no-repeat;
      background-size: 250px auto;
      display: block;
      :deep(em) {
        padding: 0;
        font-size: 0;
      }
    }
    .icon_menu {
      margin-left: 10px;
      display: flex;
      align-items: center;
      li + li {
        margin-left: 10px;
      }
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
        :deep(.btn_del) {
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
</style>
