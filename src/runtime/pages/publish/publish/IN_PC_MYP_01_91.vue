<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs
      class="customer_tab"
      tabType="type_03"
      :item="[{ txt: 'FAQ' }, { txt: '공지사항' }, { txt: '1:1상담' }, { txt: '매장안내' }, { txt: '창업안내' }, { txt: '전자공고' }]"
      :tabidx="0" />

    <div class="search_wrap">
      <div class="multi_form">
        <Inputs _type="text" _placeholder="궁금하신 내용을 입력해주세요" />
        <Button class="btn_mid confirm" txt="검색" />
      </div>
      <p>
        찾으시는 질문이 없나요? 이니스프리 상담원에게 문의해 주세요.
        <a href="#none">1:1상담하기</a>
      </p>
    </div>

    <!-- FAQ 슬라이드 탭 -->
    <Tabs class="faq" tabType="type_04" :item="faq_data" :tabidx="0" />
    <!-- //FAQ 슬라이드 탭 -->

    <!-- FAQ 컨텐츠 -->
    <div class="faq_wrap">
      <div class="sub_title_wrap">
        <h3>{{ faq_data[faq_idx].sub_txt }}</h3>
        <Tabs v-if="faq_data[faq_idx].tabs !== undefined" tabType="type_02" :item="faq_data[faq_idx].tabs" />
        <!-- 검색결과 X -->
        <!-- <p><em>'검색결과없음'</em> 검색 결과 <em>0</em> 개</p> -->
        <!-- //검색결과 X -->
      </div>
      <ul>
        <li v-for="(item, idx) in faq_data[faq_idx].list" :key="idx">
          <button type="button" @click="accordion_tab">
            <p>{{ item.cate }}</p>
            <span>{{ item.tit }}</span>
          </button>
          <div class="faq_cont">
            <p v-html="item.text"></p>
            <div v-if="item.img" class="img"><img :src="item.img" /></div>
          </div>
        </li>
      </ul>

      <!-- 검색결과 X -->
      <!-- <div class="no_data">
        검색 결과가 없습니다.
      </div> -->
      <!-- //검색결과 X -->
    </div>
    <!-- //FAQ 컨텐츠 -->
  </div>
</template>
<script setup>
import { faq_data } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, useRouter, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const router = useRouter()

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})

const faq_idx = ref(0)

onMounted(() => {
  // 메인 탭 이벤트
  document.querySelectorAll('.customer_tab button').forEach((el) => {
    el.addEventListener('click', customer)
  })

  const tabs = document.querySelectorAll('.faq ul li')
  tabs.forEach((el, idx) => {
    el.querySelector('button').addEventListener('click', (e) => {
      if (e.target.closest('li') === el) faq_idx.value = idx
      document.querySelectorAll('.faq_wrap > ul li').forEach((el) => {
        el.classList.remove('active')
        el.querySelector('.faq_cont').style.cssText = 'transition:none; height:0;'
        setTimeout(() => (el.querySelector('.faq_cont').style.cssText = ''), 100)
      })
    })
  })
})

const customer = () => {
  const links = ['/publish/IN_PC_MYP_01_91', '/publish/IN_PC_MYP_01_92', '#none', '#none', '#none', '#none']
  const list = [...event.currentTarget.closest('ul').children]
  const idx = ref(0)
  list.forEach((el, i) => {
    if (el === event.currentTarget.closest('li')) idx.value = i
  })

  router.push(links[idx.value])
}

const accordion_tab = (e) => {
  const tg_li = e.target.closest('li')
  const tg_cont = e.target.nextElementSibling
  const list = document.querySelectorAll('.faq_wrap ul li')

  const height = tg_cont.clientHeight

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
    el.style.height = height + 'px'
    setTimeout(() => {
      el.style.height = '0px'
      el.style.paddingTop = '0px'
      el.style.paddingBottom = '0px'
    }, 0)
  },
  down: (el) => {
    el.style.height = 'auto'
    const height = el.clientHeight
    el.style.height = '0'
    setTimeout(() => {
      el.style.height = height + 60 + 'px'
      el.style.paddingTop = '30px'
      el.style.paddingBottom = '30px'
    }, 0)
  }
}
</script>
<style lang="scss" scoped>
.title_wrap {
  margin-bottom: 30px;
}

.sub_title_wrap {
  padding-left: 0;
  margin-bottom: 30px;
  display: flex;
  gap: 40px;

  &.search_list {
    margin-bottom: 20px;
  }

  h3 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
  }

  :deep(.tab_wrap) {
    ul.type_02 {
      li {
        button {
          font-size: 16px;
        }
      }
    }
  }

  p {
    em {
      color: #00bc70;
    }
  }
}

:deep(.tab_wrap) {
  ul {
    &.type_03 {
      li {
        button {
          border-color: #a7a7a7;
        }
      }
    }

    &.type_04 {
      margin: 60px 0 50px;

      li {
        button {
          color: #666;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}

.search_wrap {
  margin-top: 30px;
  padding: 35px 0;
  border: 1px solid #eee;
  background: #fcfcfd;

  .multi_form {
    gap: 5px;
    align-items: center;
    justify-content: center;

    :deep(.input_wrap) {
      flex: 0 0 400px;
      .input {
        i,
        input {
          font-size: 16px;
          line-height: 20px;
        }
        i {
          top: 50%;
        }
        input {
          height: 50px;
          border-color: #ddd;
        }
      }
    }

    > :deep(button) {
      width: 100px;

      em {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  > p {
    margin-top: 20px;
    color: #999;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    a {
      color: #000;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 5px;

      &:after {
        content: '';
        width: 20px;
        height: 20px;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -210px -60px;
        background-size: 250px auto;
        display: inline-block;
        transform: rotate(90deg);
      }
    }
  }
}

.slide_wrap {
  margin: 60px 0 50px;
  border-bottom: 1px solid #eee;
}

.faq_wrap {
  ul {
    border-top: 2px solid #000;

    li {
      border-bottom: 1px solid #eee;

      > button {
        width: 100%;
        min-height: 75px;
        padding: 25px 30px;
        color: #222;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > * {
          pointer-events: none;
        }

        > p {
          min-width: 125px;
          color: #888;
          font-size: 16px;
          text-align: left;
        }

        span {
          flex: 1;
          padding-left: 30px;
          color: #000;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          text-align: left;
          position: relative;

          &:before {
            content: 'Q.';
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        &:after {
          content: '';
          width: 24px;
          height: 24px;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -180px -60px;
          background-size: 250px auto;
          display: block;
          transition: all 0.2s;
        }
      }

      .faq_cont {
        height: 0;
        padding: 0 30px;
        overflow: hidden;
        transition:
          height 0.5s,
          padding 0.5s;

        p {
          color: #666;
          font-size: 16px;
          line-height: 1.5;
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

  .no_data {
    border-top: 2px solid #000;
    margin: 0;
    padding: 140px 0;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #eee;
  }
}
</style>
