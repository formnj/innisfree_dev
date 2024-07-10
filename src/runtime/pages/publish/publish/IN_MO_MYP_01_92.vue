<template>
  <div class="search_wrap">
    <Inputs _type="text" _placeholder="검색어를 입력하세요." />
    <Icons class="btn_search" txt="검색" />
  </div>

  <!-- 공지사항 슬라이드 탭 -->
  <div class="slide_wrap">
    <ul>
      <li v-for="(item, idx) in noti_data.tabs" :key="idx">
        <button type="button" @click="slide_tab($event, idx)">{{ item.txt }}</button>
      </li>
    </ul>
  </div>
  <!-- //공지사항 슬라이드 탭 -->

  <div class="inner">
    <div class="title_wrap">
      <h2>총<em>551</em>개</h2>
      <!-- 컨텐츠 X -->
      <!-- <p><em>'검색결과없음'</em> 검색결과 <em>0</em>개</p> -->
      <!-- //컨텐츠 X -->
    </div>

    <div class="noti_wrap">
      <ul class="noti_list">
        <li v-for="(item, idx) in noti_data.list" :key="idx">
          <button type="button" @click="accordion_tab">
            <Sticker :item="noti_data.list[idx].cate" />
            <div class="tit">{{ item.tit }}</div>
            <div class="date">{{ item.date }}</div>
          </button>

          <div class="noti_cont">
            안녕하세요, 고객님!<br />
            4. 당첨 리스트<br />
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>이벤트</th>
                  <th>경품</th>
                  <th>ID</th>
                  <th>고객명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td rowspan="10">구매 인증</td>
                  <td rowspan="10">N페이 포인트<br />상품권 3만원권</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>soge***</td>
                  <td>박*경</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
      <div class="paging">
        <div>
          <a href="#none" class="first">처음으로</a>
          <a href="#none">1</a>
          <a href="#none">2</a>
          <a href="#none" class="active">3</a>
          <a href="#none">4</a>
          <a href="#none">5</a>
          <a href="#none" class="last">마지막으로</a>
        </div>
      </div>
    </div>

    <!-- 동일한 내용의 컨텐츠 X -->
    <!-- <div class="no_content">
      찾으시는 내용이 없습니다.
    </div> -->
    <!-- 동일한 내용의 컨텐츠 X -->
  </div>
</template>
<script setup>
import { noti_data } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-menu-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '공지사항')

  document.querySelector('.slide_wrap ul li').classList.add('active')
})

const slide_tab = (e) => {
  const tabs = document.querySelectorAll('.slide_wrap ul li')

  tabs.forEach((el) => {
    el.classList.remove('active')
    e.target.closest('li').classList.add('active')
  })
}

const accordion_tab = (e) => {
  const tg_li = e.target.closest('li')
  const tg_cont = e.target.nextElementSibling
  const list = document.querySelectorAll('.noti_wrap ul li')
  const header = document.querySelector('header')

  const height = tg_cont.clientHeight * 0.1

  list.forEach((el) => {
    const el_cont = el.querySelector('.noti_cont')

    if (tg_li === el && !tg_li.classList.contains('active')) {
      tg_li.classList.add('active')
      slides.down(tg_cont)

      setTimeout(() => {
        const top = tg_li.offsetTop
        window.scroll({
          top: top - header.offsetHeight,
          left: 0
        })
      }, 500)
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

.inner {
  .title_wrap {
    margin: 3rem 2.1rem 1.5rem;

    h2 {
      color: #000;
      font-size: 1.2rem;
      line-height: 1.2rem;
      font-weight: 600;

      em {
        color: #2faf63;
      }
    }

    p {
      color: #000;
      font-size: 1.2rem;
      line-height: 1.2rem;
      font-weight: 600;

      em {
        color: #2faf63;
      }
    }
  }

  .noti_list {
    li {
      border-bottom: 0.1rem solid #f5f5f5;

      &.active {
        > button {
          &:after {
            transform: translateY(-50%) rotate(-180deg);
          }
        }
      }

      > button {
        width: 100%;
        padding: 3rem 6.5rem 3rem 2.1rem;
        display: flex;
        flex-direction: column;
        position: relative;

        > * {
          text-align: left;
          pointer-events: none;
        }

        :deep(.sticker) {
          margin-bottom: 1rem;
          gap: 0.3rem;

          em {
            font-size: 1rem;
            line-height: 1.4em;
          }
        }

        .tit {
          overflow: hidden;
          color: #333333;
          font-size: 1.4rem;
          line-height: 1.29em;
          letter-spacing: -0.01em;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
          display: -webkit-box;
        }

        .date {
          margin-top: 0.5rem;
          color: #999999;
          font-weight: 300;
          font-size: 1.2rem;
          line-height: 1.33em;
          letter-spacing: -0.01em;
        }

        &:after {
          content: '';
          width: 2.4rem;
          height: 2.4rem;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
          background-size: 25rem auto;
          position: absolute;
          top: 50%;
          right: 2.1rem;
          transform: translateY(-50%);
          transition: all 0.2s;
        }
      }

      .noti_cont {
        height: 0;
        padding: 0rem 2.6rem;
        color: #666;
        font-size: 1.3rem;
        line-height: 1.54em;
        letter-spacing: -0.01em;
        background: #f5f5f5;
        overflow: hidden;
        overflow-x: scroll;
        transition:
          height 0.5s,
          padding 0.5s;
      }
    }
  }
  .paging {
    margin-top: 3rem;
  }
}

table {
  thead {
    tr {
      th {
        padding: 0 0.6rem;
        color: #000;
        text-align: center;
        background: #d9d9d9;
        border: 0.14rem solid #000;
      }
    }
  }
  tbody {
    tr {
      &:first-child {
        td {
          &:nth-child(n + 2) {
            background: #fff;
          }
        }
      }

      td {
        padding: 0 1.6rem;
        color: #000;
        text-align: center;
        border: 0.14rem solid #000;
        white-space: nowrap;

        &:first-child {
          background: #fff;
        }
      }
    }
  }
}

.no_content {
  padding: 5rem 0;
  font-size: 1.6rem;
}
</style>
