<template>
  <div class="main">
    <!-- 홈 visual -->
    <HomeMoTopBanner></HomeMoTopBanner>
    <!-- //홈 visual -->

    <div class="main_cont_wrap">
      <!-- add 24.06.13 : visual sticky로 추가 -->
      <!-- quick menu -->
      <HomeMoQuickMenu></HomeMoQuickMenu>
      <!-- //quick menu -->

      <!-- 혜택 슬라이드 -->
      <HomeMoTextBanner></HomeMoTextBanner>
      <!-- //혜택 슬라이드 -->

      <!-- 이벤트 리스트  -->
      <HomeMoHighlightEvent></HomeMoHighlightEvent>
      <!-- //이벤트 리스트  -->

      <HomeMoHighlightProduct></HomeMoHighlightProduct>

      <HomeMoEventPromotion></HomeMoEventPromotion>
      <!-- //오늘의 추천 제품 -->

      <HomeMoEventList></HomeMoEventList>

      <!-- 이 제품 어때요 -->
      <HomeMoRecommend></HomeMoRecommend>
      <!-- //이 제품 어때요 -->

      <!-- 랭킹 -->
      <HomeMoRank></HomeMoRank>
      <!-- //랭킹 -->
    </div>

    <!-- AI케어 -->
    <ServiceBanner />
    <!-- //AI케어 -->
  </div>

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>
<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-main'
})
</script>
<style lang="scss" scoped>
.main {
  .main_cont_wrap {
    padding-top: 3rem;
    padding-bottom: 10rem;
    background-color: #fff;
    position: relative;
    > section {
      &:first-child {
        margin-top: 0;
      }

      &.highlight {
        padding: 0;
      }
    }
  }
  :deep(section) {
    margin-top: 10rem;
    padding: 0 2.1rem;
    h2 {
      margin-bottom: 2rem;
      padding-right: 2.6rem;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      a {
        padding-right: 1rem;
        color: #000;
        font-size: 2rem;
        font-weight: 600;
        position: relative;
        display: block;
        strong {
          color: #00bc70;
        }
      }
      &:after {
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') 0 -7rem no-repeat;
        background-size: 25rem auto;
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        display: block;
        transform: translateY(-50%) rotate(-90deg);
      }
    }
    .swiper_wrap {
      margin: 0 -2.1rem;
      .swiper {
        padding: 0 2.1rem;
      }
    }
    &.recommend {
      h2 {
        &:after {
          display: none;
        }
      }
    }
  }
}

:deep(.svc_banner) {
  padding: 1.2rem 2rem;
  background-image: url('@inmModule/assets/images/ui/bg_ai_bottom_bann.png');
  background-size: cover;
  position: relative;
  justify-content: center;
  gap: 1.2rem;
  p {
    padding-left: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .btn_ui_wrap {
    span.btn {
      font-size: 1.3rem;
      font-weight: 600;
      box-shadow: 0 0.8rem 1rem 0 rgba(0, 0, 0, 0.15);
    }
    span.bubble {
      font-weight: 700;
    }
  }
}
</style>
