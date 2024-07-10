<template>
  <!-- 검색 전 영역 -->
  <div class="search_cont">
    <section>
      <div class="sub_title_wrap">
        <h4>인기검색</h4>
        <p>3분전 갱신</p>
      </div>
      <div class="keyword_wrap">
        <div class="keyword">
          <ol>
            <li>
              <a href="#none" class="up"><em>1</em><span>장원영 네컷</span></a>
            </li>
            <li>
              <a href="#none" class="up"><em>2</em><span>노세범</span></a>
            </li>
            <li>
              <a href="#none" class="down"><em>3</em><span>메이크업도구</span></a>
            </li>
            <li>
              <a href="#none"><em>4</em><span>그린티 신상</span></a>
            </li>
            <li>
              <a href="#none"><em>5</em><span>아이라이너</span></a>
            </li>
          </ol>
          <ol>
            <li>
              <a href="#none"><em>6</em><span>검색어 최대 9자까지 가능</span></a>
            </li>
            <li>
              <a href="#none" class="down"><em>7</em><span>바디로션</span></a>
            </li>
            <li>
              <a href="#none" class="new"><em>8</em><span>선크림</span></a>
            </li>
            <li>
              <a href="#none"><em>9</em><span>신규 구매 혜택</span></a>
            </li>
            <li>
              <a href="#none" class="up"><em>10</em>이벤트</a>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section>
      <div class="sub_title_wrap">
        <h4>최근검색어</h4>
        <Button class="btn_txt" txt="전체삭제" @click="keyword_del_all" />
      </div>
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
          <li class="no_content">최근 검색어가 없습니다.</li>
        </template>
      </ul>
    </section>

    <section>
      <div class="cate_wrap">
        <ul class="category">
          <li v-for="item in categoryForSearchLayerData" :key="item" :class="item.type">
            <a href="#none">
              <span class="thumb">
                <em><img :src="item.imageUrl" /></em>
              </span>
              <p>{{ item.text }}</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <!-- //검색 전 영역 -->
</template>
<script setup>
import { categoryForSearchLayerData, latestSearchWordData } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-search'
})

const emit = defineEmits(['icons'])

onMounted(() => {
  emit('icons', 0)
})

const key_cnt = ref(latestSearchWordData.length)

const keyword_del = (e) => {
  e.target.closest('li').remove()
  key_cnt.value = document.querySelector('.latest').childElementCount
}

const keyword_del_all = (e) => {
  const target = e.target.closest('section').querySelector('.latest')

  if (!target.firstElementChild.classList.contains('no_content')) {
    while (target.firstElementChild) {
      target.removeChild(target.firstElementChild)
      key_cnt.value = document.querySelector('.latest').childElementCount
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  .sub_title_wrap {
    margin: 0 0 3rem;
    padding: 0 2.1rem;
    align-items: center;

    h4 {
      & + * {
        color: #999;
        font-size: 1.2rem;
      }

      & + p {
        font-weight: 300;
      }

      & + :deep(button) {
        font-weight: 600;
        text-decoration: underline;

        em {
          color: #999 !important;
        }
      }
    }
  }
}

.search_cont {
  &.active {
    display: block;
  }
  section {
    padding: 3rem 0;
    background: #fff;
    & + section:before {
      border-top: 1px solid #f5f5f5;
      content: '';
      display: block;
      transform: translateY(-30px);
    }
    strong {
      padding: 0 2.2rem;
      margin-bottom: 3rem;
    }
    ul {
      padding: 0 2.2rem;
      margin-bottom: 3.1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      &.latest {
        & + strong {
          margin-bottom: 2rem;
        }
        li:not(.no_content) {
          padding: 0 1.5rem;
          border: 1px solid #ddd;
          border-radius: 100px;
          div {
            display: flex;
            align-items: center;
          }
        }
        li.no_content {
          width: 100%;
          margin: 0;
          text-align: center;
          border: 0;
        }
        a {
          max-width: 14rem;
          padding: 0.7rem 0;
          color: #333;
          font-size: 1.4rem;
          font-weight: 400;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
        padding: 0 2.2rem;
        margin: 0;
        overflow: auto;
        flex-wrap: nowrap;
        gap: 1.2rem;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
        li {
          &.point {
            a {
              position: relative;
              &:after {
                content: '';
                width: 5px;
                height: 5px;
                background: #00bc70;
                border-radius: 100px;
                position: absolute;
                top: 0.3rem;
                right: 0.3rem;
              }
            }
          }
          .thumb {
            width: 5.7rem;
            height: 5.7rem;
            display: block;
          }
          p {
            margin-top: 0.8rem;
            color: #888;
            font-size: 1.2rem;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
          }
        }
      }
    }
    .cate_wrap {
      padding: 0;
      margin-bottom: 5.8rem;
      overflow: hidden;
    }
    .keyword_wrap {
      padding: 0 2.1rem 3.1rem;
      .keyword {
        display: flex;
      }
      ol {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem 0;
        li {
          width: 100%;
          a {
            font-size: 1.4rem;
            font-weight: 400;
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
                right: -1.8rem;
                transform: translateY(-50%);
              }
            }
            span {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
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
          }
        }
      }
    }
  }
}
</style>
