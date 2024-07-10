<template>
  <docTopBanner v-if="useBanner" />
  <!-- type: main, type_sub, type_search -->
  <header :class="[type, position]">
    <div class="header_wrap">
      <div class="menu_wrap">
        <h1 v-if="useLogo">
          <a :href="path + 'IN_MO_HOM_01_01'"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></a>
        </h1>
        <Icons v-if="useBack" class="back" txt="뒤로가기" />
        <button v-if="useMenu" class="btn_menu" @click="modal.open('modal_nav', 'bottom nav')">
          {{ props.txt }}
        </button>
        <div v-if="useSearchWrap" class="search_wrap">
          <SearchInput
            :search-placeholder="[
              { text: '새로워진 이니스프리 SHOWCASE' },
              { text: '새로워진 이니스프리' }
              // {text:'새로워진'},
            ]" />
          <Icons class="btn_search" txt="검색" />
        </div>
        <h2 v-if="useName">{{ props.txt }}</h2>
      </div>
      <div class="icon_wrap">
        <Icons v-if="useShare" class="share" txt="공유하기" />
        <a v-if="useHome" :href="path + 'IN_MO_HOM_01_01'"><Icons class="home" txt="홈" /></a>
        <Icons v-if="useAlarm" class="alarm" txt="알람" />
        <a v-if="useSearch" :href="path + 'IN_MO_SRC_01_01'"><Icons class="btn_search" txt="검색" /></a>
        <a v-if="useCart" :href="path + 'IN_MO_CAR_01_01'"><Icons class="mo_cart" txt="50" /></a>
        <Icons v-if="useBarcode" class="barcode" />
      </div>
    </div>
    <div class="gnb_wrap">
      <NavGnb v-if="useNav" :item="gnb_list" :type="props.type" />
    </div>

    <div id="modal_nav" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_header">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
        </div>
        <div class="modal_content">
          <ul>
            <li class="active">
              <a :href="path + 'IN_MO_MYP_01_91'">FAQ</a>
            </li>
            <li>
              <a :href="path + 'IN_MO_MYP_01_45'">1:1고객상담</a>
            </li>
            <li>
              <a :href="path + 'IN_MO_MYP_01_85'">매장안내</a>
            </li>
            <li>
              <a :href="path + 'IN_MO_MYP_01_92'">공지사항</a>
            </li>
            <li>
              <a :href="path + 'IN_MO_MYP_01_93'">전자공고</a>
            </li>
          </ul>
        </div>
      </div>
      <div div class="overlay" @click="modal.close(this)"></div>
    </div>
  </header>
</template>

<script setup>
import { gnb_list } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { onMounted } from '#imports'

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  txt: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''
  },
  useBanner: {
    type: Boolean,
    default: true
  },
  useLogo: {
    type: Boolean,
    default: true
  },
  useBack: {
    type: Boolean,
    default: false
  },
  useMenu: {
    type: Boolean,
    default: false
  },
  useSearchWrap: {
    type: Boolean,
    default: false
  },
  useName: {
    type: Boolean,
    default: false
  },
  useShare: {
    type: Boolean,
    default: false
  },
  useHome: {
    type: Boolean,
    default: false
  },
  useAlarm: {
    type: Boolean,
    default: false
  },
  useSearch: {
    type: Boolean,
    default: true
  },
  useCart: {
    type: Boolean,
    default: true
  },
  useBarcode: {
    type: Boolean,
    default: false
  },
  useNav: {
    type: Boolean,
    default: true
  }
})
const path = '/publish/'
onMounted(() => {
  const header = document.querySelector('header')

  window.scrollY > 0 ? header.classList.add('fixed') : header.classList.remove('fixed')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) header.classList.add('fixed')
    if (window.scrollY <= 0) header.classList.remove('fixed')
  })

  // 검색 input focus 시 border color 변경 이벤트
  // document.querySelector('.search_wrap .input input').addEventListener('focus', () => {})
})
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: -5rem;
  left: 0;
  z-index: 11;

  &.fixed {
    background: #fff;

    .nav_gnb {
      box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.05);
    }
  }

  &.type_sub {
    top: 0;

    .header_wrap {
      padding: 1.3rem 1.6rem;
    }
  }

  &.type_search {
    top: 0;

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

  &.static {
    position: static;

    .nav_gnb {
      box-shadow: none;
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
      max-width: 20rem;
      margin-left: 1.5rem;
      color: #000;
      font-size: 1.8rem;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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

      &:focus-within {
        border-color: #00bc70;
      }

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
</style>
