<template>
  <section>
    <div class="info_wrap">
      <h2><strong>주소희</strong>님<em>임직원</em></h2>
      <NuxtLink to="" class="btn_link_arrw">Welcome 혜택보기</NuxtLink>
      <ul>
        <li>
          <a href="#none">
            <h4>뷰티포인트</h4>
            <p>100,000 P</p>
          </a>
        </li>
        <li>
          <a href="#none">
            <h4 class="point">보유쿠폰</h4>
            <p>4 장</p>
          </a>
        </li>
        <li>
          <a href="#none">
            <h4>공병수거 현황</h4>
            <p>10 개</p>
          </a>
        </li>
      </ul>
      <div class="review">
        <p>작성 가능한 리뷰 <em>4건</em></p>
        <span>+ 2,400P</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '쿠폰존')
})
</script>

<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;
}

.info_wrap {
  h2 {
    font-size: 2rem;
    font-weight: 300;

    em {
      margin-left: 0.6rem;
      padding: 0 0.5rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6rem;
      background-color: #000;
      display: inline-block;
      vertical-align: middle;
    }
  }

  > p {
    margin-bottom: 4.3rem;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.8rem;
    display: flex;
    align-items: center;

    &:after {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      margin-top: -0.2rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem 0;
      background-size: 25rem auto;
      display: block;
    }

    em {
      color: #00bc70;
      font-weight: 400;
      text-decoration: underline;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      vertical-align: bottom;

      &:before {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/images/common/icon_rank_gt.png') no-repeat 0 0;
        background-size: 100% 100%;
        display: inline-block;
      }
    }
  }

  ul {
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;

    li {
      flex: 1;
      &:nth-of-type(n + 2) {
        padding-left: 2rem;
        border-left: 0.1rem solid #222;
      }

      h4 {
        color: #888;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.6rem;
        display: inline-block;
        position: relative;

        &.point {
          &:after {
            content: '';
            width: 0.5rem;
            height: 0.5rem;
            background-color: #00bc70;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: -5px;
            transform: translateX(100%);
          }
        }
      }

      p {
        margin-bottom: 0;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2rem;
      }
    }
  }

  .review {
    padding: 0.8rem 3.8rem 0.8rem 1.6rem;
    background-color: #00bc70;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    p {
      font-size: 1.4rem;
      line-height: 1.8rem;

      em {
        font-weight: 600;
        text-decoration: underline;
      }
    }

    span {
      padding: 0.4rem 0.8rem;
      font-size: 1.3rem;
      border: 0.1rem solid #fff;
      border-radius: 1.2rem;
    }

    &:after {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem 0;
      background-size: 25rem auto;
      position: absolute;
      top: 50%;
      right: 1.6rem;
      transform: translateY(-50%);
    }
  }
}
</style>
