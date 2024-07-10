<template>
  <Tabs
    class="membership_tab"
    tabType="type_01"
    :item="[{ txt: '멤버십 혜택안내' }, { txt: '뷰티포인트 안내' }, { txt: '모바일 앱 다운로드' }]"
    :tabidx="0" />
  <section>
    <div class="user_wrap">
      <div class="user_grade">
        <h3>김이니님은<br />웰컴 고객 입니다.</h3>
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
        <div class="grade wc">
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
          <p>뷰티포인트</p>
          <span class="num"><strong>1,000</strong>P</span>
        </li>
        <li class="coupon">
          <p>보유 쿠폰</p>
          <span class="num"><strong>6</strong>장</span>
        </li>
      </ul>
    </div>

    <!-- 비 로그인시 사용자 정보 -->
    <div class="user_wrap no_info">
      <p>로그인하고 고객님의 등급과 혜택을 확인해 보세요.</p>
      <button type="button">로그인</button>
    </div>
  </section>

  <section class="member_grade">
    <div class="inner">
      <div class="sub_title_wrap">
        <h4>
          전 등급 공통 혜택
          <p class="explain">가입 즉시 웰컴! VIP, 그린티클럽 되는 날까지~</p>
        </h4>
      </div>
      <div class="benefit_con">
        <ul class="benefit_list">
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
              <span>직전 6개월 결제금액<br /><em>10만원 이상 20만원 미만</em></span>
            </li>
            <li>
              <p>그린티클럽</p>
              <span>직전 6개월 결제금액<br /><em>20만원 이상</em></span>
            </li>
          </ul>
          <ul class="bul_list">
            <li>멤버십 등급은 직전 6개월 결제 금액 기준으로 매월 1일 변경</li>
            <li>뷰티포인트 결제 금액도 등급 산정에 포함됨</li>
            <li>할인한도 : 회원 할인 시 정상가 기준 20만원까지 구매 가능<br /><span>&#40;할인품목&비할인품목 적용제외&#41;</span></li>
            <li>시크릿쿠폰 적용 대상 품목과 할인액은 매월 변경됨</li>
          </ul>
        </div>
      </div>

      <div class="sub_title_wrap">
        <h4>
          그린티클럽만 받는 선물
          <p class="explain">연 2회 놓치지 마세요, 그린티클럽 키트</p>
        </h4>
      </div>
    </div>
  </section>

  <div class="greentea">
    <div class="pdt_wrap">
      <ul>
        <li v-for="(item, idx) in img_sample" :key="idx">
          <div class="img"><img :src="item.img" /></div>
          <p>
            <span>{{ item.date }}</span>
            {{ item.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { definePageMeta, useRouter, onMounted } from '#imports'

const router = useRouter()

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const img_sample = [
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2023 하반기',
    text: '마리떼 새해웰컴키트'
  },
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2023 상반기',
    text: '해피 리벌스데이 키트'
  },
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2022 하반기',
    text: '웰컴 그린티 기프트'
  },
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2022 상반기',
    text: '수분충전 키트'
  },
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2021 하반기',
    text: 'ECO-TOGETHER KIT'
  },
  {
    img: '/images/sam/kit_2023_2.png',
    date: '2021 상반기',
    text: '올리브 그린 키트'
  }
]

const membership_link = ['IN_MO_MYP_01_04', 'IN_MO_MYP_01_05', 'IN_MO_MYP_01_07']

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '멤버십')

  // 탭 클릭시 페이지 이동
  document.querySelectorAll('.membership_tab li').forEach((el, idx) => {
    el.addEventListener('click', () => {
      router.push(`/publish/${membership_link[idx]}`)
    })
  })
})

const toggle_btn = (e) => {
  e.target.closest('.detail_wrap').classList.toggle('active')
}
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.benefit_con {
  .benefit_list {
    padding: 3rem 0;
    border-top: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
    li {
      min-height: 3.2rem;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      gap: 0 1.2rem;
      &:before {
        content: '';
        width: 3.2rem;
        height: 3.2rem;
        display: inline-block;
      }
      &:nth-child(1):before {
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat 0 -24rem;
        background-size: 25rem auto;
      }
      &:nth-child(2):before {
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -3.5rem -24rem;
        background-size: 25rem auto;
      }
      &:nth-child(3):before {
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -7rem -24rem;
        background-size: 25rem auto;
      }
      p {
        display: flex;
        flex-direction: column;
        span {
          margin-top: 0.5rem;
          color: #666;
          font-size: 1.2rem;
          line-height: 1.6rem;
        }
      }
    }
  }
}
.detail_wrap {
  padding-bottom: 2rem;
  &.active {
    button {
      &:after {
        transform: rotate(-180deg);
      }
    }
    > div {
      display: block;
    }
  }
  button {
    width: 100%;
    height: 5.6rem;
    color: #000;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: inherit;
    border-top: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:after {
      content: '';
      width: 2.4rem;
      height: 2.4rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
      background-size: 25rem auto;
      display: block;
      transform: rotate(0deg);
    }
  }
  > div {
    padding-top: 2.5rem;
    display: none;
    .level {
      padding: 0 0.8rem;
      display: flex;
      li {
        font-size: 1.2rem;
        text-align: center;
        line-height: 1.6rem;
        border-left: 0.1rem solid #f5f5f5;
        &:nth-child(1) {
          width: 8rem;
          border-left: 0;
        }
        &:nth-child(2) {
          width: 13.9rem;
        }
        &:nth-child(3) {
          width: 11.4rem;
        }
        p {
          margin-bottom: 0.5rem;
          color: #333;
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          &:before {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            vertical-align: middle;
          }
        }
        span {
          color: #666;
          font-size: 1.2rem;
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
      padding: 2rem;
      margin-top: 2.5rem;
      border: 0.1rem solid #eee;
      background: #f5f5f5;
      li {
        margin-top: 1rem;
        color: #888;
        font-size: 1.2rem;
        line-height: 1.6rem;
        padding-left: 0.6rem;
        position: relative;
        span {
          color: #333;
        }
        &:first-child {
          margin-top: 0;
        }
        &:before {
          width: 0.2rem;
          height: 0.2rem;
          color: #666;
          top: 0.6rem;
          left: 0;
        }
      }
    }
  }
}

.greentea {
  .pdt_wrap {
    ul {
      padding: 0 2rem 1rem;
      margin-top: 2rem;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      gap: 0.6rem;
      li {
        width: 10.9rem;
        vertical-align: top;
        .img {
          width: 10.9rem;
          height: 14.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          margin-top: 1rem;
          font-size: 1.3rem;
          line-height: 1.6rem;
          span {
            display: block;
            margin-bottom: 0.3rem;
            font-size: 1.2rem;
            color: #00bc70;
          }
        }
      }
    }
  }
}
</style>
