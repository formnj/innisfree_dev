<template>
  <div class="search_wrap">
    <Inputs _type="text" _placeholder="궁금하신 내용을 입력해주세요" />
    <Icons class="btn_search" txt="검색" />
  </div>

  <!-- FAQ 슬라이드 탭 -->
  <div class="slide_wrap">
    <ul>
      <li v-for="(item, idx) in faq_data" :key="idx">
        <button type="button" @click="slide_tab($event, idx)">{{ item.sub_txt }}</button>
      </li>
    </ul>
  </div>
  <!-- //FAQ 슬라이드 탭 -->

  <!-- FAQ 컨텐츠 -->
  <div class="faq_wrap">
    <ul>
      <li v-for="item in faq_data[faq_idx].list" :key="item">
        <button type="button" @click="accordion_tab">
          <span>{{ item.tit }}</span>
        </button>
        <div class="faq_cont">
          <h4>답변</h4>
          <p v-html="item.text"></p>
          <div v-if="item.img" class="img"><img :src="item.img" /></div>
        </div>
      </li>
    </ul>

    <!-- 컨텐츠 X -->
    <!-- <div class="no_content">
      찾으시는 질문이 없습니다
    </div>
    <Button class="btn_mid confirm" txt="1:1 문의하기" /> -->
    <!-- //컨텐츠 X -->
  </div>
  <!-- //FAQ 컨텐츠 -->
</template>
<script setup>
import { faq_data } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-menu-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'FAQ')

  document.querySelector('.slide_wrap ul li').classList.add('active')
})

const faq_idx = ref(0)
const slide_tab = (e, i) => {
  const tabs = document.querySelectorAll('.slide_wrap ul li')

  faq_idx.value = i
  tabs.forEach((el) => {
    el.classList.remove('active')
    e.target.closest('li').classList.add('active')
  })
}

const accordion_tab = (e) => {
  const tg_li = e.target.closest('li')
  const tg_cont = e.target.nextElementSibling
  const list = document.querySelectorAll('.faq_wrap ul li')

  const height = tg_cont.clientHeight * 0.1

  list.forEach((el) => {
    const el_cont = el.querySelector('.faq_cont')

    if (tg_li === el && !tg_li.classList.contains('active')) {
      tg_li.classList.add('active')
      slides.down(tg_cont)
    } else if (tg_li === el && tg_li.classList.contains('active')) {
      tg_li.classList.remove('active')
      slides.up(tg_cont, height)
    } else if (tg_li !== el && el.classList.contains('active')) {
      el.classList.remove('active')
      slides.up(el_cont, height)
    }
  })
}

const slides = {
  up: (el, height) => {
    el.style.height = height + 'rem'
    setTimeout(() => {
      el.style.height = '0rem'
      el.style.paddingTop = '0rem'
      el.style.paddingBottom = '0rem'
    }, 0)
  },
  down: (el) => {
    el.style.height = 'auto'
    const height = el.clientHeight * 0.1
    el.style.height = '0'
    setTimeout(() => {
      el.style.height = height + 6 + 'rem'
      el.style.paddingTop = '3rem'
      el.style.paddingBottom = '3rem'
    }, 0)
  }
}
</script>
<style lang="scss" scoped>
.search_wrap {
  height: 4rem;
  margin: 2rem 2.1rem 1rem;
  border: 0.1rem solid #eee;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex: 1;

  :deep(.input_wrap) {
    .input {
      i,
      input {
        font-size: 1.3rem;
      }
      i {
        left: 1.5rem;
      }
      input {
        height: 4rem;
        padding-left: 1.5rem;
        padding-right: 0.5rem;
        border: 0;
      }
    }
  }
  .btn_search {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
    background-color: transparent;
    background-position: 0 -4rem;
  }
}

.slide_wrap {
  height: 5rem;
  border-bottom: 0.1rem solid #f5f5f5;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 9;

  ul {
    height: 100%;
    padding: 0 2.1rem;
    display: flex;
    gap: 2.6rem;
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        flex: 1;
        color: #999;
        font-size: 1.4rem;
        line-height: 1.8rem;
        letter-spacing: -0.01em;
        white-space: nowrap;
      }

      &.active {
        button {
          color: #000;
          font-weight: 700;
          border-bottom: 0.2rem solid #000;
        }
      }
    }
  }
}

.faq_wrap {
  ul {
    li {
      border-bottom: 0.1rem solid #f5f5f5;

      > button {
        width: 100%;
        padding: 3rem 2.1rem;
        color: #222;
        font-size: 1.4rem;
        line-height: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          text-align: left;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          pointer-events: none;
        }

        &:after {
          content: '';
          width: 2.4rem;
          height: 2.4rem;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
          background-size: 25rem auto;
          display: block;
          transition: all 0.2s;
        }
      }

      .faq_cont {
        height: 0;
        padding: 0rem 2.6rem;
        background: #f5f5f5;
        overflow: hidden;
        transition:
          height 0.5s,
          padding 0.5s;

        h4 {
          margin-bottom: 1rem;
          color: #333;
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.6rem;
          letter-spacing: -0.01em;
        }

        p {
          color: #666;
          font-size: 1.3rem;
          line-height: 2rem;
          white-space: pre-line;

          :deep(em) {
            text-decoration: underline;
          }
        }
      }

      &.active {
        > button {
          &:after {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }

  .no_content {
    padding: 5rem 0;
  }

  > button {
    width: calc(100% - 4.2rem);
    margin: 0 2.1rem;
  }
}
</style>
