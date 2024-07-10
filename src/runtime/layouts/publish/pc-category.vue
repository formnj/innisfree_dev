<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
      <!-- breadcrumb -->
      <Breadcrumb :item="breadcrumbData" />
      <div class="content_wrap" :class="{ has_lnb: layoutType == true }">
        <!-- lnb -->
        <div class="lnb">
          <h2>
            스킨케어
            <a href="#none">전체보기</a>
          </h2>
          <ul>
            <li v-for="(menu, idx) in sam_lnb" :key="idx" @click="lnb_click($event)">
              <a href="#none">{{ menu }}</a>
            </li>
          </ul>
        </div>
        <!-- //lnb -->
        <div class="content">
          <NuxtPage />
        </div>
      </div>
    </div>
    <FooterPc />
  </div>
</template>

<script setup>
import { breadcrumbData, sam_lnb } from '@inmModule/test/data/publish/dummyData'

const layoutType = ref(true)

const lnb_click = (event) => {
  const target = event.currentTarget
  const target_parent = target.parentNode
  const all_li = target_parent.querySelectorAll('li')
  all_li.forEach((a) => {
    a.classList.remove('active')
  })
  target.classList.add('active')
  // 전체 li에 active 클래스 제거
  //클릭한 대상에게 active 클래스 추가
}

/* 개발에 맞게 수정해주세요 : 하위페이지의 data-layout 값이 default이면 lnb 비노출 */
onMounted(() => {
  if (document.querySelector('.title_wrap').getAttribute('data-layout') == 'default') {
    layoutType.value = false
  }
})
/* //개발에 맞게 수정해주세요 */
</script>

<style lang="scss" scoped>
#wrap {
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

#container {
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    margin: 0 auto;
  }
}

.content_wrap {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  .lnb {
    display: none;
  }
  &.has_lnb {
    display: flex;
    flex-wrap: wrap;
    .lnb {
      width: 200px;
      height: 100%;
      margin-right: 60px;
      padding-top: 60px;
      position: sticky;
      top: 60px;
      z-index: 1;
      display: block;
      a {
        display: block;
      }
      h2 {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          padding-right: 21px;
          color: #888;
          font-size: 14px;
          position: relative;
          &:before,
          &:after {
            width: 10px;
            margin-top: -1px;
            border-top: 2px solid #808080;
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            display: block;
          }
          &:after {
            transform: rotate(90deg);
          }
        }
      }
      li {
        &.active {
          color: #000 !important;
          font-weight: 600;
          border-bottom: 1px solid #000;
          position: relative;
          a {
            color: #000 !important;
            &::after {
              content: '';
              width: 12px;
              height: 12px;
              background-image: url('@inmModule/assets/images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 250px;
              background-position: -210px 0px;
              display: inline-block;
              position: absolute;
              top: 50%;
              right: 0px;
              transform: translateY(-50%);
            }
          }
        }
        & + li {
          margin-top: 5px;
        }
        a {
          padding: 12px 0;
          color: #888;
          font-size: 14px;
        }
      }
    }
    .content {
      flex: 1;
    }
  }
}
</style>
