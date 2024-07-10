<template>
  <div class="docTopBanner txtBanner">
    <div class="banner_list">
      <ul>
        <li>
          <NuxtLink :to="mainTopBannerData.url" class="txt" target="_blank">신규가입하고 3만원 이상 결제 시 웰컴 기프트 증정</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="mainTopBannerData.url" class="txt" target="_blank">{{ mainTopBannerData.bannerText }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="mainTopBannerData.url" class="txt" target="_blank">신규가입하고 3만원 이상 결제 시 웰컴 기프트 증정</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="mainTopBannerData.url" class="txt" target="_blank">{{ mainTopBannerData.bannerText }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="mainTopBannerData.url" class="txt" target="_blank">신규가입하고 3만원 이상 결제 시 웰컴 기프트 증정</NuxtLink>
        </li>
      </ul>
    </div>
    <button type="button" class="btn_close">닫기</button>
  </div>
</template>
<script setup>
import { mainTopBannerData } from '@inmModule/test/data/publish/dummyData'
import { onMounted } from '#imports'

onMounted(() => {
  /* rolling */
  const banner_list = document.querySelector('.banner_list ul'),
    roll_size = banner_list.querySelectorAll('li'),
    roll_timer = 3000,
    clone_roll = roll_size[0]

  let i = 1

  banner_list.insertAdjacentHTML('beforeend', '<li>' + clone_roll.innerHTML + '</li>')

  const h = roll_size[0].offsetHeight
  const roll_fn = () => {
    banner_list.style.cssText = 'transform:translateY(-' + i * h + 'px); transition:all 0.35s ease-in;'
    if (i < roll_size.length + 1) {
      i++
      if (i == roll_size.length + 1) {
        banner_list.addEventListener(
          'transitionend',
          () => {
            banner_list.removeAttribute('style')
          },
          { once: true }
        )
        i = 1
      }
    }
  }

  const key_rolling = setInterval(roll_fn, roll_timer)
  /* //rolling */
})
</script>
<style lang="scss" scoped>
.docTopBanner {
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  .banner_list {
    height: 100%;
    overflow: hidden;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    li {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .txt {
        color: #fff;
        font-size: 14px;
        display: block;
      }
    }
  }
  .btn_close {
    width: 16px;
    height: 16px;
    margin-left: 10px;
    font-size: 0;
    position: relative;

    &:before,
    &:after {
      width: 13px;
      margin-left: 2px;
      border-top: 1px solid #fff;
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
