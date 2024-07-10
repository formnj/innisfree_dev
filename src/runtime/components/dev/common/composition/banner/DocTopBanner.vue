<template>
  <div v-if="showBanner" :class="['docTopBanner', { slideUp: slideUp }]">
    <div class="banner_list">
      <transition-group name="rollup" tag="ul">
        <li v-for="item in visibleItems" :key="item.id" @click.prevent="clickBanner">
          <NuxtLink to="/" class="txt" target="_blank">{{ item.text }}</NuxtLink>
        </li>
      </transition-group>
    </div>

    <button type="button" class="btn_close" @click="closeBanner">닫기</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports'

interface IMainTopRollingBannerItem {
  id: string | number
  text?: string
  url?: string
}

const showBanner = ref(false)
const slideUp = ref(false)

const bannerList = ref<Array<IMainTopRollingBannerItem>>([])

const visibleItems = ref<Array<IMainTopRollingBannerItem>>([])
let currentIndex = 0
let intervalId: any = null

const startRolling = () => {
  intervalId = setInterval(() => {
    // 다음 인덱스 계산
    const nextIndex = (currentIndex + 1) % bannerList.value.length
    // 현재 아이템을 다음 아이템으로 교체
    visibleItems.value = [bannerList.value[nextIndex]]
    // 인덱스 업데이트
    currentIndex = nextIndex
  }, 3000) // 3초마다 롤링
}

const clickBanner = () => {
  // 배너 닫기 로직을 여기에 작성
}
const closeBanner = () => {
  slideUp.value = true
  setTimeout(() => {
    showBanner.value = false
  }, 300)
}

onMounted(() => {
  showBanner.value = true
  //TODO Api 호출로 변경
  bannerList.value = [
    { id: 1, text: '오늘이 마지막! Npay포인트 ~10,000원 적립' },
    { id: 2, text: '하나Pay 3만원 결제 시, 하나머니 5천원 적립' },
    { id: 3, text: '토스 100백원 결제 시 1원 적립' }
  ]
  visibleItems.value = [bannerList.value[0]] // 초기 아이템 설정
  if (bannerList.value.length > 1) startRolling()
})

onUnmounted(() => {
  clearInterval(intervalId)
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

.slideUp {
  margin-top: -4rem;
}

.rollup-enter-active,
.rollup-leave-active {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.rollup-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.rollup-enter-to,
.rollup-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.rollup-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
