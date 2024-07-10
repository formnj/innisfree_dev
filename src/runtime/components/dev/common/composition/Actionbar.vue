<template>
  <div v-if="icon1 && icon2 && icon3" class="action_bar" :style="actionBarStyle">
    <div class="fix_btn">
      <InmButton v-show="back" class="btn_icon btn_icon_back" txt="" @click="$router.back()">뒤로가기</InmButton>
      <!-- <div v-if="search" :class="['pdtSortTab_wrap', { active: isActive }]">
        <div class="sortTab">
          <button class="btn_dropdown">추천순</button>
        </div>
        <button>상세검색</button>
      </div> -->
      <div :class="['right_box', { active: isActive }]">
        <InmButton v-show="barcode" :class="['btn_icon btn_icon_barcode']" txt="" />
        <InmButton v-show="history" :class="['btn_icon btn_icon_history']" txt="" />
        <InmButton v-show="top" :class="['btn_icon top_btn']" txt="" @click="scrollTop()" />
      </div>
    </div>
    <div class="inner">
      <a href="" :style="logoStyle" @click.prevent="$router.push('/')"
        ><img src="@inmModule/assets/images/actionbar/Logo_Motion.png" alt=""
      /></a>
      <div>
        <button><img src="@inmModule/assets/images/actionbar/Category.png" alt="" /></button>
        <button v-if="icon1" class="best"><img :src="icon1.isActive ? icon1.activeUrl : icon1.url" alt="" /></button>
      </div>
      <div>
        <button v-if="icon2" class="mypage"><img :src="icon2.isActive ? icon2.activeUrl : icon2.url" alt="" /></button>
        <button v-if="icon3"><img :src="icon3.isActive ? icon3.activeUrl : icon3.url" alt="" /></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports'
import BestImg from '@inmModule/assets/images/actionbar/Best.png'
import MyPage from '@inmModule/assets/images/actionbar/MyPage.png'
import History from '@inmModule/assets/images/actionbar/History.png'
interface IActionbarProps {
  barcode?: boolean
  search?: boolean
  back?: boolean
  history?: boolean
  top?: boolean
}

interface ActionBarIcon {
  url: string
  activeUrl: string
  link: string
  isActive?: boolean
}

withDefaults(defineProps<IActionbarProps>(), {
  barcode: true,
  search: false,
  back: true,
  history: false,
  top: true
})

const icon1 = ref<ActionBarIcon | undefined>()
const icon2 = ref<ActionBarIcon | undefined>()
const icon3 = ref<ActionBarIcon | undefined>()

const actionBarStyle = ref('')
const logoStyle = ref('')

const isActive = ref<boolean>(false)

let preScrollTop = 0

const handleScroll = () => {
  const nextScrollTop = window.scrollY

  if (preScrollTop < nextScrollTop) {
    if (nextScrollTop >= 350) {
      actionBarStyle.value = 'transform: translateY(100%)'
      logoStyle.value = 'transform: translate(-50%, 32%); transition: all 0.1s linear;'
    }
    isActive.value = true
  } else if (nextScrollTop < 20) {
    isActive.value = false
  } else {
    actionBarStyle.value = ''
    logoStyle.value = ''
  }
  preScrollTop = nextScrollTop
}

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  //TODO Api 호출 해서 아이콘 설정 (첫번째, 중앙홈 버튼 만 고정)
  icon1.value = { url: BestImg, activeUrl: BestImg, link: '' }
  icon2.value = { url: MyPage, activeUrl: MyPage, link: '' }
  icon3.value = { url: History, activeUrl: History, link: '' }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.action_bar {
  padding: 1rem 2.5rem;
  background: #000;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  transition: transform 0.1s linear;

  .inner {
    display: flex;
    justify-content: space-between;
    gap: 11.5rem;

    > a {
      width: 6.1rem;
      height: 6.1rem;
      position: absolute;
      left: 50%;
      bottom: 1rem;
      display: block;
      transform: translateX(-50%);

      img {
        width: 100%;
      }
    }

    > div {
      display: flex;
      gap: 4.1rem;

      a {
        width: 3.2rem;
        height: 3.2rem;

        img {
          width: 100%;
        }
      }
    }
  }
}

.fix_btn {
  margin-bottom: 2.1rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 52px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .btn_icon {
    width: 4rem;
    height: 4rem;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 5px;
    box-shadow: 0.2rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.05);

    :deep(em) {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat;
      background-size: 25rem auto;
      font-size: 0;
    }
  }

  .btn_icon_back {
    position: absolute;
    bottom: 0;
    left: 2.1rem;

    :deep(em) {
      background-position: -3rem -4rem;
    }
  }

  .pdtSortTab_wrap {
    width: 20rem;
    height: 3.8rem;
    padding: 1rem 1.5rem;
    border: 0.1rem solid #000;
    border-radius: 20px;
    background: #fff;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 50%;
    display: flex;
    justify-content: center;
    visibility: hidden;
    transform: translateX(50%);
    transition: all 0.2s;
    opacity: 0;
    &.active {
      visibility: visible;
      opacity: 1;
    }
    button {
      font-size: 1.2rem;
      font-weight: 600;
      border-radius: 0;
    }
    .sortTab {
      position: relative;
      > button {
        display: flex;
        justify-content: center;
        &::after {
          content: '';
          width: 17px;
          height: 17px;
          margin-left: 5px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-size: 250px;
          background-repeat: no-repeat;
          background-position: -110px -60px;
          display: inline-block;
        }
      }

      & ~ button {
        position: relative;
        display: flex;
        justify-content: center;
        &::before {
          left: 1px !important;
        }
        &::after {
          content: '';
          width: 17px;
          height: 17px;
          margin-left: 5px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-size: 250px;
          background-repeat: no-repeat;
          background-position: -130px -60px;
          display: inline-block;
        }
      }
    }
  }

  .right_box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(5rem);
    transition: transform 0.2s linear;
    position: absolute;
    bottom: 0;
    right: 2.1rem;
    z-index: -1;

    &.active {
      transform: translateY(0);

      .top_btn {
        transform: translate(0, 0);
      }
    }

    .btn_icon_history {
      :deep(em) {
        background-position: -6.5rem -4rem;
      }
    }

    .top_btn {
      transform: translate(6.1rem, -5rem);
      transition: all 0.2s linear;

      :deep(em) {
        background-position: -10.5rem -4rem;
      }
    }

    .btn_icon_barcode {
      width: auto;
      height: auto;
      padding: 0.8rem;
      margin-right: -2.1rem;
      border-radius: 0.5rem 0 0 0.5rem;
      background-color: #00bc70;

      :deep(em) {
        width: 4.3rem;
        height: 2.4rem;
        background-position: -16.5rem -18rem;
      }
    }
  }
}

.modal_wrap.beauty_barcode {
  .modal_container {
    .modal_header {
      width: auto;
      height: auto;
      padding: 2.3rem 0;
      margin: 0 2.1rem;
      border-bottom: 0.1rem solid #eee;

      .btn_close {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0;
        background: transparent;
        transform: translateX(0);
        top: 2rem;
        right: 0;
        left: unset;

        &:before,
        &:after {
          width: 100%;
          border-top: 1px solid #222;
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
    .modal_content {
      padding: 3rem 4.6rem;

      .barcode {
        width: 28.3rem;
        margin-bottom: 2rem;

        img {
          width: 100%;
          height: auto;
          vertical-align: top;
        }
      }

      .num {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        li {
          color: #000;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
