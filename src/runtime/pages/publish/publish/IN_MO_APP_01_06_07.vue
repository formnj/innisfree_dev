<template>
  <div class="sample_market_top">
    <h2>이니스프리 <em>샘플</em>마켓</h2>
    <p>오직 APP에서만 신청 가능한 이니스프리 샘플 마켓! 보유 샘플포인트로 자유롭게 샘플 신청해보세요~</p>
    <p class="date">신청 가능 기간 : 24.03.01 (수) ~ 24.04.31 (수)</p>

    <div class="point_box">
      <div>보유샘플포인트 <span class="point">10</span></div>
      <div>차감샘플포인트 <span class="point">05</span></div>
    </div>
  </div>

  <div class="inner">
    <div class="market_complete">
      <h3>이번 샘플마켓은 이미 신청하셨습니다.</h3>
      <p>샘플신청 내역은 <a href="IN_MO_MYP_01_08">[마이페이지>주문내역]</a><br />상세에서 확인 가능합니다.</p>
      <span>다음 샘플마켓도 기대해 주세요 🙂</span>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-noactionbar'
})
const props = defineProps({
  link: {
    type: String,
    default: '#none'
  }
})

onMounted(() => {
  const list = document.querySelector('.sample_market_top + .inner')
  const topBox = document.getElementsByClassName('sample_market_top')[0]
  const gnbH = document.getElementsByClassName('gnb_wrap')[0].offsetHeight
  window.addEventListener('scroll', () => {
    const boxTop = list.getBoundingClientRect().y - gnbH
    if (!topBox.classList.contains('sticky') && boxTop <= 0) {
      topBox.classList.add('sticky')
    } else if (topBox.classList.contains('sticky') && boxTop > 0) {
      topBox.classList.remove('sticky')
    }
  })
})
</script>

<style lang="scss" scoped>
.sample_market_top {
  padding: 3rem 2.1rem;
  background: url('@inmModule/assets/mo_images/common/bg_top_sample_market.png');
  background-size: cover;
  letter-spacing: -0.1rem;

  &.sticky {
    .date {
      margin-bottom: 92px;
    }

    .point_box {
      width: 100%;
      position: fixed;
      top: 46px;
      left: 0;
      z-index: 3;
      margin: 0;
      border-radius: 0;
      background-color: #00bc70;

      .point {
        background-color: #fff;
        color: #00bc70;
        font-weight: 600;
      }
    }
  }

  h2 {
    margin-bottom: 1.2rem;
    font-size: 2.8rem;
    line-height: 3.6rem;
    color: #fff;

    em {
      color: #ffff82;
    }
  }

  p {
    width: 20rem;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &.date {
      width: 100%;
      margin-top: 1.6rem;
    }
  }

  .point_box {
    margin-top: 3.8rem;
    padding: 1.5rem 2.5rem;
    background-color: #000;
    border-radius: 0.5rem;
    color: #fff;
    display: flex;

    & > div {
      flex: 1;

      & + div {
        margin-left: 2.5rem;
        padding-left: 2.5rem;
        border-left: 0.1rem solid #fff;
      }

      .point {
        width: 2.4rem;
        height: 2.4rem;
        margin-left: 0.8rem;
        font-size: 1.2rem;
        text-align: center;
        line-height: 2.4rem;
        background-color: #00bc70;
        border-radius: 1.2rem;
        display: inline-block;
      }
    }
  }
}

.market_complete {
  padding: 6rem 0 0;
  text-align: center;

  &:before {
    content: '';
    width: 6rem;
    height: 6rem;
    margin: 0 auto 2rem;
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -19rem -30rem / 25rem auto no-repeat;
    display: block;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    line-height: 1.8rem;

    a {
      font-weight: 600;
    }
  }

  span {
    padding-top: 2rem;
    font-size: 1.2rem;
    color: #888;
    display: block;
  }
}
</style>
