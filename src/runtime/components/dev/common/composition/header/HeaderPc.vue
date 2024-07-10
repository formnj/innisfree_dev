<template>
  <InmDocTopBanner />
  <header>
    <div class="inner">
      <h1>
        <NuxtLink :to="path + 'IN_PC_HOM_01_01'"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></NuxtLink>
      </h1>
      <InmSearchArea />
      <div class="keyword_wrap">
        <div class="keyword">
          <ol ref="roll_ele">
            <li v-for="(item, idx) in keyword_list" :key="idx">
              <NuxtLink to="/" :class="item.type"
                ><em>{{ item.num }}.</em>{{ item.name }}
              </NuxtLink>
            </li>
          </ol>
          <div>
            <p>09:30 기준 인기 검색어</p>
          </div>
        </div>
      </div>
      <div class="quick_wrap">
        <ul class="quick">
          <li>
            <NuxtLink>로그인</NuxtLink>
          </li>
          <li>
            <NuxtLink>회원가입</NuxtLink>
          </li>
          <li>
            <NuxtLink>고객센터</NuxtLink>
          </li>
          <li>
            <NuxtLink>ABOUT</NuxtLink>
          </li>
        </ul>
        <ul class="icon_menu">
          <li v-for="(item, index) in buttons" :key="index">
            <NuxtLink v-if="item === 'zzim'">
              <InmIcon class="header_zzim"></InmIcon>
            </NuxtLink>
            <NuxtLink v-if="item === 'mypage'">
              <InmIcon class="mypage"></InmIcon>
            </NuxtLink>
            <NuxtLink v-if="item === 'delivery'">
              <InmIcon class="delivery"></InmIcon>
            </NuxtLink>
            <NuxtLink v-if="item === 'cart'">
              <InmIcon class="pc_cart" txt="5"></InmIcon>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="gnb_wrap">
      <div class="inner">
        <InmButton class="btn_category" txt="카테고리" @mouseover="cate_layer.open" />

        <!-- NavGnb component 로 대체사용 -->
        <InmNavGnb />
        <ul class="quick">
          <li>
            <NuxtLink to="/">신규가입혜택</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">멤버십 혜택</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">공병수거</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">매장안내</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">마이샵</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="nav_category" @mouseleave="cate_layer.close">
        <nav>
          <div class="nav_wrap">
            <InmButton class="btn_category" txt="카테고리" />
            <dl v-for="(item, idx) in global_menu" :key="idx">
              <dt>
                <NuxtLink :to="item.link">{{ item.menu }}</NuxtLink>
              </dt>
              <dd>
                <ul>
                  <li v-for="(item, idx) in item.sub_menu" :key="idx">
                    <NuxtLink :to="item.link">{{ item.menu }}</NuxtLink>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from '#imports'
const props = defineProps({
  buttons: { type: Array, default: () => [] }
})
const global_menu = [
  {
    link: '',
    menu: '스킨케어',
    sub_menu: [
      { link: '', menu: '에센스/세럼/앰플' },
      { link: '', menu: '로션/크림' },
      { link: '', menu: '스킨/토너/미스트' },
      { link: '', menu: '선케어' },
      { link: '', menu: '클렌징' },
      { link: '', menu: '팩/마스크' },
      { link: '', menu: '립/아이케어' },
      { link: '', menu: '오일/마사지' },
      { link: '', menu: '기획세트' },
      { link: '', menu: '기타' }
    ]
  },
  {
    link: '',
    menu: '메이크업',
    sub_menu: [
      { link: '', menu: '페이스메이크업' },
      { link: '', menu: '아이메이크업' },
      { link: '', menu: '립메이크업' },
      { link: '', menu: '네일' }
    ]
  },
  {
    link: '',
    menu: '남성',
    sub_menu: [
      { link: '', menu: '스킨케어' },
      { link: '', menu: '클렌징' },
      { link: '', menu: '선케어' },
      { link: '', menu: '헤어 스타일링' },
      { link: '', menu: '기획세트' }
    ]
  },
  {
    link: '',
    menu: '헤어/바디',
    sub_menu: [
      { link: '', menu: '핸드/풋케어' },
      { link: '', menu: '바디 로션/미스트' },
      { link: '', menu: '바디 워시/청결제' },
      { link: '', menu: '헤어 에센스/미스트' },
      { link: '', menu: '샴푸/트리트먼트' }
    ]
  },
  {
    link: '',
    menu: '기획세트',
    sub_menu: [{ link: '', menu: '기획세트' }]
  },
  {
    link: '',
    menu: '미용소품',
    sub_menu: [
      { link: '', menu: '네일 소품' },
      { link: '', menu: '헤어/바디 소품' },
      { link: '', menu: '화장솜/면봉/기름종이' },
      { link: '', menu: '클렌징 소품' },
      { link: '', menu: '기타 소품' }
    ]
  },
  {
    link: '',
    menu: '고민별제품',
    sub_menu: [
      { link: '', menu: '수분/보습/속건조' },
      { link: '', menu: '모공/피지/블랙헤드' },
      { link: '', menu: '주름/탄력' },
      { link: '', menu: '트러블/리페어' },
      { link: '', menu: '각질/피부결' },
      { link: '', menu: '잡티/피부결' },
      { link: '', menu: '영양/토탈안티에이징' },
      { link: '', menu: '진정/민감' }
    ]
  }
]

const keyword_list = [
  { num: '1', name: '장원영 네컷', type: 'up' },
  { num: '2', name: '블랙티', type: '' },
  { num: '3', name: '선크림', type: 'down' },
  { num: '4', name: '그린티', type: 'new' },
  { num: '5', name: '크림', type: 'up' },
  { num: '6', name: '클렌징폼', type: '' },
  { num: '7', name: '블랙티', type: 'down' },
  { num: '8', name: '선크림', type: 'new' },
  { num: '9', name: '그린티', type: 'up' },
  { num: '10', name: '크림', type: '' }
]

/* path */
const path = '/publish/publish/'

const roll_ele = ref(null)
const roll_idx = ref(0)
const roll_time = ref(3000)
const roll_fn = () => {
  const roll_child = roll_ele.value.querySelectorAll('li')
  const roll_height = roll_child[0].clientHeight

  roll_idx.value++
  roll_ele.value.style.cssText = `transform: translateY(-${roll_height * roll_idx.value}px); transition: all 0.35s ease-in`

  roll_ele.value.addEventListener('transitionend', () => {
    if (roll_idx.value >= roll_child.length - 1) {
      roll_ele.value.style.cssText = `transform: translateY(0); transition: unset;`
      roll_idx.value = 0
    }
  })
}

onMounted(() => {
  /* keyword rolling */
  roll_ele.value.append(roll_ele.value.children[0].cloneNode(true))
  let key_rolling = setInterval(roll_fn, roll_time.value)
  /* //keyword rolling */

  /* keyword menu */
  const keyword_wrap = document.querySelector('.keyword_wrap')
  const roll_last = keyword_wrap.querySelector('ol').lastChild
  const keyword_menu = {
    mouseEnter: (e) => {
      e.target.classList.add('active')
      roll_last.style.display = 'none'
      clearInterval(key_rolling)
      roll_idx.value = 0
      e.target.querySelector('ol').style.cssText = ''
    },
    mouseLeave: (e) => {
      e.target.classList.remove('active')
      roll_last.style.display = ''
      key_rolling = setInterval(roll_fn, roll_time.value)
    }
  }
  keyword_wrap.addEventListener('mouseenter', keyword_menu.mouseEnter)
  keyword_wrap.addEventListener('mouseleave', keyword_menu.mouseLeave)
  /* keyword menu */

  /* 스크롤 헤더 이동 */
  window.addEventListener('scroll', () => {
    const rect = document.querySelector('.gnb_wrap').getBoundingClientRect()
    if (rect.top <= 0) {
      document.querySelector('header').classList.add('fixed')
      document.querySelector('.keyword_wrap').classList.remove('active')
    } else {
      document.querySelector('header').classList.remove('fixed')
    }
  })

  const rect = document.querySelector('.gnb_wrap').getBoundingClientRect()
  if (rect.top <= 0) {
    document.querySelector('header').classList.add('fixed')
  }
})

/* category layer */
const cate_layer = {
  open: () => {
    document.querySelector('.nav_category').classList.add('active')
  },
  close: () => {
    document.querySelector('.nav_category').classList.remove('active')
  }
}
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #f5f5f5;
  position: sticky;
  top: -100px;
  z-index: 12;

  &.fixed {
    border: 0;

    .inner {
      h1 {
        a {
          width: 80px;
          height: 80px;
          position: fixed;
          top: 0px;

          img {
            width: 80px;
            height: 80px;
            content: url('@inmModule/assets/images/common/logo_innisfree_bk.png');
          }
        }
      }

      .quick_wrap {
        margin-top: 28px;
        position: fixed;
        top: 0;
        right: 50%;
        transform: translateX(640px);

        .quick {
          li {
            &:nth-child(3),
            &:nth-child(4) {
              display: none;
            }
          }
        }
      }
    }

    .gnb_wrap {
      height: 80px;
      border: 0;

      .inner {
        height: 80px;

        .btn_category {
          height: 80px;
          margin-left: 110px;
        }

        .quick {
          display: none;
        }

        :deep(.nav_gnb) {
          a {
            height: 80px;
          }

          .active a:after {
            bottom: 0;
          }
        }
      }

      .nav_category {
        .btn_category {
          height: 80px;
          padding: 0 41px 0 30px;
          left: 100px;
        }
      }
    }
  }

  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
      a {
        display: block;

        img {
          height: 20px;
        }
      }
    }

    .keyword_wrap {
      height: 40px;
      font-weight: 600;
      overflow: hidden;

      li > * {
        padding: 11px 0;
        line-height: 18px;
        display: flex;
        align-items: center;

        em {
          width: 22px;
          margin-right: 5px;
          font-size: 13px;
          text-align: center;
        }

        &:after {
          width: 12px;
          height: 12px;
          margin-left: 10px;
          background-image: url('@inmModule/assets/images/common/icon_split.png');
          background-position: -20px -60px;
          background-repeat: no-repeat;
          background-size: 250px auto;
          content: '';
          display: block;
        }

        &.up:after {
          background-position: 0 -60px;
        }

        &.down:after {
          background-position: -40px -60px;
        }

        &.new:after {
          background-position: -60px -60px;
        }
      }

      .keyword {
        > div {
          padding-top: 20px;
          margin-bottom: 28px;
          border-top: 1px solid #eee;
          display: none;

          p {
            font-size: 13px;
            font-weight: 400;
            text-align: center;
          }
        }
      }

      &.active {
        width: 154px;

        .keyword {
          height: auto;
          padding: 0 28px;
          border: 2px solid #000;
          border-radius: 10px;
          background: #fff;
          overflow: hidden;
          position: absolute;
          top: 19%;
          right: 50%;
          transform: translate(84%);
          z-index: 3;
          animation: slideDown 0.3s ease-in forwards;

          ol {
            margin-top: 28px;
            margin-bottom: 20px;

            li {
              padding-top: 16px;

              a {
                padding: 2px 0;

                &:after {
                  margin-left: auto;
                }
              }

              &:first-child {
                padding-top: 0;
              }
            }
          }

          > div {
            display: block;
          }
        }
      }
    }

    .quick_wrap {
      margin-top: 20px;
      margin-bottom: auto;
      margin-left: auto;
      display: flex;

      ul {
        display: flex;

        &.quick {
          li {
            position: relative;

            & + li:before {
              height: 10px;
              border-left: 1px solid #eee;
              content: '';
              position: absolute;
              top: 50%;
              left: 0;
              display: block;
              transform: translateY(-50%);
            }
          }

          a {
            padding: 4px 16px;
            color: #666;
            font-size: 12px;
            display: block;
          }
        }

        &.icon_menu {
          margin-left: 15px;

          li + li {
            margin-left: 12px;
          }
        }
      }
    }
  }

  .gnb_wrap {
    border-top: 1px solid #f5f5f5;
    border-right: 0;
    border-left: 0;
    background-color: #fff;

    .inner {
      height: 60px;

      & > ul,
      nav > ul {
        position: relative;
        z-index: 1;
        display: flex;
      }

      :deep(.btn_category) {
        width: 130px;
        height: 60px;
        background-color: transparent;
        justify-content: flex-start;
        position: relative;

        em {
          padding: 0 0 0 34px;
          color: #000;
          font-size: 16px;
          font-weight: 600;
          position: relative;

          &:before,
          &:after {
            width: 16px;
            border-top: 2px solid #000;
            content: '';
            position: absolute;
            top: 50%;
            left: 4px;
            display: block;
            transform: translateY(-50%);
          }

          &:before {
            height: 12px;
            border-bottom: 2px solid #000;
          }
        }

        &:after {
          content: '';
          width: 1px;
          height: 16px;
          background-color: #eee;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }

      .quick {
        margin-left: auto;

        li + li {
          margin-left: 6px;
        }

        a {
          padding: 6px 12px;
          color: #666;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #ddd;
          border-radius: 100px;
          display: block;
        }
      }
    }
  }

  .nav_category {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 100%; //button height
    right: 0;
    left: 0;
    z-index: 2;
    display: none;
    transition: height 0.28s ease-out;

    &.active {
      display: block;
    }

    nav {
      max-width: 1320px;
      margin: 0 auto;
      padding: 40px 20px;
      background-color: #fff;
      position: relative;
      display: flex;

      .nav_wrap {
        display: flex;
        justify-content: space-between;
        flex: 1;

        dl {
          width: 120px;

          &:last-child {
            width: auto;
            padding-left: 65px;
            border-left: 1px solid #eee;
          }

          dt {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;

            a {
              width: 100%;
              padding-bottom: 10px;
              font-size: 16px;
              font-weight: 600;
              display: block;
            }

            &:hover {
              border-bottom: 1px solid #00bc70;

              a {
                color: #00bc70;
              }
            }
          }

          dd {
            li {
              height: 31px;
              margin-bottom: 5px;
              border-bottom: 1px solid transparent;
              display: flex;
              align-items: center;

              &:hover {
                color: #000;
                font-weight: 600;
                border-bottom: 1px solid #000;
              }

              a {
                width: 100%;
                color: #888;
                display: block;
              }
            }
          }
        }
      }
    }

    :deep(.btn_category) {
      height: 62px;
      padding: 0 31px 0 20px;
      border: 1px solid #eee;
      border-bottom: 0;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 18px;
      transform: translateY(-100%);

      em {
        padding: 0 0 0 34px;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        position: relative;

        &:before,
        &:after {
          content: '';
          width: 16px;
          border-top: 2px solid #00bc70;
          position: absolute;
          top: 50%;
          left: 4px;
          display: block;
          transform: translateY(-50%);
        }

        &:before {
          height: 12px;
          border-bottom: 2px solid #00bc70;
        }
      }
    }
  }
}

@keyframes slideDown {
  from {
    max-height: 0;
  }

  to {
    max-height: 500px;
  }
}
</style>
