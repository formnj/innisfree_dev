<template>
  <div class="inner">
    <div class="title_wrap">
      <h2>멤버십</h2>
    </div>
    <Tabs
      id="membership_tab"
      tabType="type_03"
      :item="[{ txt: '멤버십 등급/혜택안내' }, { txt: '뷰티포인트 안내' }, { txt: '모바일 앱 다운로드' }]"
      :tabidx="0" />
    <div class="user_wrap">
      <div class="user_grade">
        <h3>형민우님은 <strong>웰컴</strong> 고객 입니다.</h3>
        <ul class="user_list">
          <li>
            <span>VIP 승급까지</span>
            <span>61,800 원 부족</span>
          </li>
          <li>
            <span>최근 6개월 구매 금액</span>
            <span>38,200 원</span>
          </li>
          <li>
            <span>다음 등급 산정일</span>
            <span>2024.05.01</span>
          </li>
        </ul>
        <!-- 웰컴일 경우 -->
        <div class="grade">
          <!-- 등급마다 grade에 클래스 추가, 아래 예시 참고
              1. 웰컴: 추가 클래스 없음
              2. VIP : vip
              3. 그린티클럽 : gtclub -->
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //웰컴일 경우 -->

        <!-- vip일 경우 -->
        <div class="grade vip">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //vip -->

        <!-- gtclub일 경우 -->
        <div class="grade gtclub">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //gtclub -->
      </div>
      <ul>
        <li class="point">
          <div>
            뷰티포인트
            <Icons class="tooltip" @mouseenter="modal.open('modal_beauty_point_tip', 'layer')" />
            <div id="modal_beauty_point_tip" class="modal_wrap">
              <!-- 뷰티포인트 적립안내 툴팁 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                </div>
                <div class="modal_content">
                  <h3>뷰티 포인트</h3>
                  <p>
                    뷰티 포인트는 쌓을수록 아름다워지는 아모레퍼시픽 통합<br />멤버십 포인트 입니다.<br /><br />
                    <em>
                      아모레퍼시픽의 화장품, 생활용품, 건강식품의 모든 브랜드와<br />
                      이니스프리, 에뛰드, 에스쁘아의 고객들에게 제공되는 통합<br />
                      멤버십 서비스입니다. 뷰티포인트는 회원이 제품 구매 시<br />
                      적립해 드리는 뷰티포인트를 모아 브랜드에 관계없이 자유롭게<br />
                      사용할 수 있으며, 다양한 제휴 서비스도 누릴 수 있습니다.
                    </em>
                  </p>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
            <!-- //뷰티포인트 적립안내 툴팁 -->
          </div>
          <span class="num"><strong>1,000</strong>P</span>
        </li>
        <li class="coupon">
          <p>보유 쿠폰</p>
          <span class="num"><strong>6</strong>장</span>
        </li>
      </ul>
    </div>

    <!-- 비로그인 시 영역 -->
    <div class="user_wrap no_info">
      <p>로그인하고 고객님의 등급과 혜택을 확인해 보세요.</p>
      <button type="button">로그인</button>
    </div>

    <section class="member_grade">
      <div class="benefit">
        <div class="sub_title_wrap">
          <h3>전 등급 공통 혜택</h3>
          <p class="sub">가입 즉시 웰컴! VIP, 그린티클럽 되는 날까지~</p>
        </div>
        <div class="benefit_con">
          <ul>
            <li>
              <p>
                멤버십데이 등급별 할인 쿠폰
                <span>※ 등급별 할인율/할인액 차등 적용, 혜택 월별 변동 가능</span>
              </p>
            </li>
            <li>
              <p>1% 뷰티포인트 적립</p>
            </li>
            <li>
              <p>가입 시 총 70,000원 쿠폰팩 발급</p>
            </li>
          </ul>
          <img src="/images/sam/membership_coupon.png" />
        </div>
        <div class="detail_wrap">
          <button type="button" @click="toggle_btn">등급 기준 자세히 알아보기</button>
          <div>
            <ul class="level">
              <li>
                <p>웰컴</p>
                <span><em>가입 즉시</em></span>
              </li>
              <li>
                <p>VIP</p>
                <span>직전 6개월 결제금액 <em>10만원 이상 20만원 미만</em></span>
              </li>
              <li>
                <p>그린티클럽</p>
                <span>직전 6개월 결제금액 <em>20만원 이상</em></span>
              </li>
            </ul>
            <ul class="bul_list">
              <li>멤버십 등급은 직전 6개월 결제 금액 기준으로 매월 1일 변경</li>
              <li>뷰티포인트 결제 금액도 등급 산정에 포함됨</li>
              <li>할인한도 : 회원 할인 시 정상가 기준 20만원까지 구매 가능 <span>(할인품목&비할인품목 적용제외)</span></li>
              <li>시크릿쿠폰 적용 대상 품목과 할인액은 매월 변경됨</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="greentea">
        <div class="sub_title_wrap">
          <h3>그린티클럽만 받는 선물</h3>
          <p class="sub">연 2회 놓치지 마세요, 그린티클럽 키트</p>
        </div>
        <div class="pdt_wrap">
          <swiper class="swiper" v-bind="swiper_options" @swiper="onSwiper">
            <swiper-slide v-for="(item, idx) in sampleSlide" :key="idx">
              <div class="item">
                <img :src="item.img" />
                <p><strong>2023년 하반기</strong> 마리떼 새해웰컴키트</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

import { sampleSlide } from '@inmModule/test/data/publish/dummyData'

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

/* swiper option */
const setSwiper = ref(null)
const onSwiper = (swiper) => (setSwiper.value = swiper)
const swiper_options = {
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  loopedSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  speed: 1000
}
/* swiper option */

onMounted(() => {})

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active')
}

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    default: '#none'
  }
})
</script>
<style lang="scss" scoped>
.user_wrap {
  margin-top: 30px;
  padding: 40px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  &.hide {
    display: none;
  }

  // 비로그인시 css style
  &.no_info {
    margin: 30px 0 0;
    padding: 38px 39px;
    background-color: #fcfcfd;
    border: 1px solid #eee;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-bottom: 15px;
    }

    button {
      width: 114px;
      height: 38px;
      color: #333;
      line-height: 36px;
      text-align: center;
      background-color: transparent;
      border: 1px solid #222;
      border-radius: 46px;
    }
  }

  .user_grade {
    h3 {
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: 300;
      line-height: 36px;
    }
    .user_list {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.29em;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        display: flex;
        align-items: center;
        span {
          &:first-child {
            width: 132px;
            color: #888;
          }
          &:last-child {
            font-weight: 500;
          }
        }
      }
    }
    .grade {
      width: 720px;
      margin-top: 45px;
      &.vip {
        .grade_bar {
          &:before {
            background: #12b560;
            animation: vip_bar 2s forwards;
          }
          &:after {
            animation: vip_bullet 2s forwards;
          }
        }
        .txt {
          span.t1,
          span.t2 {
            color: #009d5e;
          }
        }
      }
      &.gtclub {
        .grade_bar {
          &:before {
            background: #12b560;
            animation: gtclub_bar 2s forwards;
          }
          &:after {
            animation: gtclub_bullet 2s forwards;
          }
        }
        .txt {
          span.t1,
          span.t2,
          span.t3 {
            color: #009d5e;
          }
        }
      }
      .grade_bar {
        height: 8px;
        font-size: 0;
        background: #eee;
        position: relative;
        &:before {
          content: '';
          height: 100%;
          display: block;
        }
        &:after {
          content: '';
          width: 20px;
          height: 20px;
          background: #12b560;
          border-radius: 50%;
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2));
          position: absolute;
          top: -6px;
          left: -10px;
        }
      }
      .txt {
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          color: #999;
          font-size: 13px;
          line-height: 1.23em;
          &.t1 {
            color: #009d5e;
          }
          &.t2 {
            margin-left: 40px;
          }
        }
      }
    }
  }
  > ul {
    margin-top: 10px;
    display: flex;
    gap: 30px;
    > li {
      min-width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:before {
        content: '';
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat;
        background-size: 250px auto;
        display: block;
      }
      &.point {
        &:before {
          background-position: -170px -210px;
        }
        button {
          width: 16px;
          height: 16px;
          margin-left: 6px;
          background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
          background-position: -230px -20px;
        }
      }
      &.coupon {
        &:before {
          background-position: -210px -210px;
        }
      }
      > p,
      > div {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.29em;
        display: flex;
        align-items: center;
      }
      span {
        width: 100%;
        margin-top: 5px;
        font-size: 14px;
        line-height: 1.29em;
        text-align: center;
        strong {
          margin-right: 5px;
          font-size: 24px;
          font-weight: 700;
          line-height: 29px;
        }
      }
    }
  }
}

.sub_title_wrap {
  margin: 100px 0 20px;
  padding: 0;
}

.benefit {
  .benefit_con {
    padding: 15px 30px;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul {
      li {
        width: 670px;
        padding: 20px 0;
        font-size: 20px;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:last-child {
          border-bottom: 0;
        }

        &:after {
          content: '';
          width: 48px;
          height: 48px;
        }
        &:nth-child(1):after {
          background: url('/images/sam/benefitCommon1.png') no-repeat 0 0;
        }
        &:nth-child(2):after {
          background: url('/images/sam/benefitCommon2.png') no-repeat 0 0;
        }
        &:nth-child(3):after {
          background: url('/images/sam/benefitCommon5.png') no-repeat 0 0;
        }
        p {
          display: flex;
          flex-direction: column;
          span {
            color: #999;
            font-size: 13px;
            line-height: 1.23em;
          }
        }
      }
    }
  }
  .detail_wrap {
    margin-top: 15px;
    border: 1px solid #eee;
    border-radius: 3px;
    position: relative;
    &.active {
      button {
        &:after {
          transform: rotate(0deg);
        }
      }
      > div {
        display: block;
      }
    }
    button {
      width: 100%;
      padding-left: 30px;
      color: #222;
      font-size: 16px;
      font-weight: 600;
      font-family: inherit;
      line-height: 70px;
      background: #fcfcfd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:after {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 30px;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -210px -60px;
        background-size: 250px auto;
        display: block;
        transform: rotate(-180deg);
      }
    }
    > div {
      padding: 30px;
      border-top: 1px solid #eee;
      display: none;
      .level {
        padding: 0 100px;
        display: flex;
        justify-content: center;
        gap: 60px;
        li {
          flex: 1;
          padding-right: 60px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid #f5f5f5;
          p {
            margin-bottom: 15px;
            color: #333;
            font-size: 18px;
            font-weight: 600;
            line-height: 30px;
            display: flex;
            align-items: center;
            gap: 8px;
            &:before {
              content: '';
              width: 30px;
              height: 30px;
              display: block;
            }
          }
          span {
            color: #666;
            font-size: 14px;
            em {
              color: #222;
            }
          }
          &:nth-child(1) {
            p:before {
              background: url('@inmModule/assets/images/common/icon_welcome.png') no-repeat 0 0 / cover;
            }
          }
          &:nth-child(2) {
            p:before {
              background: url('@inmModule/assets/images/common/icon_vip.png') no-repeat 0 0 / cover;
            }
          }
          &:nth-child(3) {
            padding-right: 0;
            border-right: 0;
            p:before {
              background: url('@inmModule/assets/images/common/icon_green.png') no-repeat 0 0 / cover;
            }
          }
        }
      }
      .bul_list {
        padding: 30px;
        margin-top: 30px;
        border: 1px solid #eee;
        background: #fcfcfd;
        li {
          margin-top: 5px;
          color: #888;
          font-size: 13px;
          line-height: 1.54em;
          span {
            color: #eb5b54;
          }
          &:first-child {
            margin-top: 0;
          }
          &:before {
            width: 2px;
            height: 2px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}

.greentea {
  :deep(.swiper-slide) {
    width: 370px;
    .item {
      img {
        width: 370px;
        height: 230px;
      }
      p {
        margin-top: 15px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        strong {
          color: #00bc70;
          font-weight: 600;
        }
      }
    }
  }
}

.modal_wrap.layer {
  top: unset;
  right: unset;
  bottom: unset;
  left: unset;
  .modal_container {
    .modal_header {
      padding: 0;
      border-bottom: 0;

      .btn_close {
        width: 18px;
        height: 18px;
        top: 10px;
        right: 10px;

        &:before,
        &:after {
          border-top: 2px solid #000;
        }
      }
    }

    .modal_content {
      padding: 30px 20px;

      h3 {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #000;
      }

      p {
        font-size: 13px;
        color: #666;
        line-height: 18px;
        white-space: nowrap;

        em {
          font-weight: 600;
        }
      }
    }
  }
}

@keyframes vip_bar {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}
@keyframes vip_bullet {
  0% {
    left: -1%;
  }
  100% {
    left: 49%;
  }
}
@keyframes gtclub_bar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes gtclub_bullet {
  0% {
    left: -1%;
  }
  100% {
    left: 99%;
  }
}
</style>
