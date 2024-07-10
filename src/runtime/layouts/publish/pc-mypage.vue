<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
      <!-- breadcrumb -->
      <Breadcrumb :item="breadcrumbData" />

      <!-- mypage top -->
      <div class="mypageTop">
        <div class="inner">
          <div class="user_info">
            <!-- 레벨 아이콘 -->
            <img src="@inmModule/assets/images/common/icon_rank_gt.png" alt="" />
            <!-- //레벨 아이콘 -->
            <div>
              <p>
                <strong>김이니</strong>님
                <span>임직원</span>
              </p>
              <a href="#none"> <em>그린티클럽</em> 멤버시네요! 멤버십 혜택을 확인해보세요. </a>
            </div>
          </div>
          <ul>
            <li>
              <a href="#none">
                <span>뷰티포인트</span>
                <strong>100,000 P</strong>
              </a>
            </li>
            <li class="point">
              <a href="#none">
                <span>보유쿠폰</span>
                <strong>4 장</strong>
              </a>
            </li>
            <li class="point">
              <a href="#none">
                <span>이번달 공병수거</span>
                <strong>35 개</strong>
              </a>
            </li>
            <li>
              <a href="#none">
                <span>피부정보</span>
                <strong class="arrow">포인트 받기</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- //mypage top -->

      <div class="content_wrap">
        <!-- lnb -->
        <div class="lnb">
          <ul>
            <li v-for="(menu, idx) in sam_mypage_lnb" :key="idx" @click="lnb_click($event)">
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
import { breadcrumbData, sam_mypage_lnb } from '@inmModule/test/data/publish/dummyData'

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

onMounted(() => {
  document.querySelectorAll('.lnb ul li')[0].classList.add('active')
})
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
    max-width: 1320px;
    margin: 0 auto;
  }
}

.mypageTop {
  background-color: #f5f5f5;
  .inner {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .user_info {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
      }

      p {
        font-size: 28px;
        font-weight: 300;
        line-height: 36px;
        display: flex;
        align-items: center;

        span {
          padding: 2px 5px;
          margin-left: 15px;
          color: #fff;
          font-size: 12px;
          line-height: 18px;
          background: #00bc70;
          display: inline-block;
        }
      }

      a {
        display: flex;
        align-items: center;
        gap: 5px;

        em {
          color: #00bc70;
          text-decoration: underline;
        }

        &:after {
          content: '';
          width: 9px;
          height: 9px;
          border-top: 1px solid #000;
          border-right: 1px solid #000;
          display: inline-block;
          transform: rotate(45deg);
        }
      }
    }
    ul {
      display: flex;
      li {
        width: 200px;
        height: 140px;
        border-left: 1px solid #eee;

        &:last-child {
          border-right: 1px solid #eee;
        }

        &.point {
          span {
            position: relative;

            &::after {
              content: '';
              width: 5px;
              height: 5px;
              border-radius: 50%;
              background-color: #00bc70;
              position: absolute;
              top: -2px;
              right: -10px;
            }
          }
        }

        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;

          strong {
            padding-bottom: 1px;
            font-size: 20px;
            line-height: 24px;
            border-bottom: 1px solid #000;

            &.arrow {
              display: flex;
              align-items: center;
              gap: 5px;

              &:after {
                content: '';
                width: 11px;
                height: 11px;
                margin: 0 6px;
                border-top: 1.5px solid #000;
                border-right: 1.5px solid #000;
                display: inline-block;
                transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
  }
}

.content_wrap {
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
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
</style>
