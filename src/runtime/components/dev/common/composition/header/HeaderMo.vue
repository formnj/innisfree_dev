<template>
  <InmDocTopBanner v-if="type !== 'type_search'"></InmDocTopBanner>
  <header :class="type">
    <div class="header_wrap">
      <div class="menu_wrap">
        <h1 v-if="logo">
          <NuxtLink to="/"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></NuxtLink>
        </h1>
        <InmIcon v-if="back" class="back" txt="뒤로가기" @click.prevent="$router.back()" />
        <button v-if="menu" class="btn_menu" @click="clickTitle">{{ current.dispMenuNm }}</button>
        <div v-if="search" class="search_wrap">
          <InmSearchInput />
          <InmIcon class="btn_search" txt="검색" />
        </div>
        <h2 v-if="name !== ''">{{ name }}</h2>
      </div>
      <div class="icon_wrap">
        <template v-for="(item, index) in buttons" :key="index">
          <InmIcon v-if="item === 'home'" class="home" txt="홈" @click.prevent="$router.push('/')" />
          <InmIcon
            v-if="item === 'share'"
            class="share"
            txt="공유"
            @click="
              () => {
                console.log('공유하기 클릭...')
              }
            " />
          <InmIcon
            v-if="item === 'alarm'"
            class="alarm"
            txt="알림"
            @click="
              () => {
                console.log('공유하기 클릭...')
              }
            " />
          <InmIcon
            v-if="item === 'search'"
            class="btn_search"
            txt="검색"
            @click="
              () => {
                console.log('검색 클릭..')
              }
            " />
          <InmIcon
            v-if="item === 'cart'"
            class="mo_cart"
            txt="50"
            @click="
              () => {
                console.log('장바구니 클릭...')
              }
            " />
          <InmIcon
            v-if="item === 'barcode'"
            class="barcode"
            @click="
              () => {
                console.log('바코드 클릭...')
              }
            " />
        </template>
      </div>
    </div>
    <div class="gnb_wrap">
      <InmNavGnb v-if="navGnb" :type="type" />
    </div>
  </header>

  <InmModal v-model="showModal" type="bottom" :dim-closeble="true">
    <ul>
      <li
        v-for="(item, index) in gnbList"
        :key="index"
        :class="{ active: item.active }"
        @click="
          () => {
            showModal = false
          }
        ">
        <a
          href="#none"
          @click.prevent="
            () => {
              if (!isMobile && item.pcUrl) {
                $router.push(item.pcUrl)
              } else if (isMobile && item.mblUrl) {
                $router.push(item.mblUrl)
              }
            }
          "
          >{{ item.dispMenuNm }}</a
        >
      </li>
    </ul>
  </InmModal>
</template>

<script setup lang="ts">
import { ref, onMounted, useGnb, useDevice } from '#imports'

const { isMobile } = useDevice()

const props = defineProps({
  type: {
    type: String,
    default: 'main'
  },
  logo: {
    type: Boolean,
    default: false
  },
  back: {
    type: Boolean,
    default: false
  },
  menu: {
    type: Boolean,
    default: false
  },
  search: {
    type: Boolean,
    default: false
  },
  navGnb: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  buttons: { type: Array, default: () => [] }
})

const { getGnbList, getCurrentGnb } = useGnb()

const gnbList = getGnbList()
const current = getCurrentGnb()
const showModal: Ref<boolean> = ref(false)

onMounted(async () => {
  // console.log('useInmFetch data2', data)
})

const clickTitle = () => {
  showModal.value = !showModal.value
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: -5rem;
  left: 0;
  z-index: 11;

  &.fixed {
    background: #fff;

    .navGnb {
      box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.05);
    }
  }

  &.type_sub {
    .header_wrap {
      padding: 1.3rem 1.6rem;
    }
  }

  &.type_search {
    .header_wrap {
      padding: 1rem 1.6rem;
    }
  }

  &.type_mypage {
    top: 0;

    .header_wrap {
      padding: 1.3rem 1.6rem;
      background-color: #000;

      * {
        background-color: inherit;
      }

      h2 {
        color: #fff;
        mix-blend-mode: difference;
        background-color: #000;
      }

      button {
        background-blend-mode: difference;
        background-color: inherit;

        &.back {
          background-position: -10rem -31.5rem;
        }
        &.btn_search {
          background-position: -10rem -35rem;
        }
        &.cart {
          background-position: -13.5rem -31.5rem;

          :deep(em) {
            background-color: #00bc70;
          }
        }
      }
    }
  }

  .header_wrap {
    padding: 1rem 2.6rem 0.6rem 2.1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    .menu_wrap {
      display: flex;
      align-items: center;
      flex: 1;
    }

    h1 {
      padding: 0.9rem 0;

      a {
        display: flex;
      }

      img {
        height: 1.6rem;
      }
    }

    h2 {
      margin-left: 1.5rem;
      color: #000;
      font-size: 1.8rem;
      font-weight: 500;
    }

    .btn_menu {
      margin-left: 1.5rem;
      font-size: 1.8rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -11rem -6rem;
        background-size: 25rem auto;
      }
    }

    .search_wrap {
      height: 4rem;
      margin: 0 1rem;
      border: 0.1rem solid #000;
      border-radius: 0.5rem;
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

    .icon_wrap {
      display: flex;
      gap: 1rem;
    }
  }
}

.modal_content {
  padding: 0;
  ul {
    li {
      &:first-child {
        a {
          border-top: 0;
        }
      }
      &.active {
        a {
          color: #00bc70;
          font-weight: 700;
          &::after {
            content: '현재 선택';
            width: 16px;
            height: 16px;
            color: transparent;
            font-size: 0;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-position: -80px -70px;
            background-size: 250px auto;
            display: block;
          }
        }
      }
      a {
        width: 100%;
        padding: 15px 26px;
        text-align: left;
        border-top: 1px solid #f5f5f5;
        color: #000;
        font-weight: 300;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
