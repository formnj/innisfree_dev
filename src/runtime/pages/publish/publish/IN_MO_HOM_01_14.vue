<template>
  <div class="inner">
    <!-- 라이브 콘텐츠 -->
    <section class="live_box">
      <div class="liveVisual_none">
        <div class="imgTitle"><span class="ir">innilive</span></div>
        <p class="notice">
          멤버십/빅세일, 신제품 등 이니스프리의 소식을<br />
          가장 먼저 좋은 구성으로 라이브에서 만나보세요!<br />
          라이브 단독 경품과 혜택까지!
        </p>
      </div>
      <div class="snsBox">
        <p class="txt">이니라이브 <strong>알림 받는 중</strong></p>
        <Button class="btn_min" txt="알림 받는 중" />
      </div>
      <div class="snsBox">
        <!-- 알림받기 -->
        <p class="txt">이니라이브 <strong>알림 신청</strong>하고 <strong>라이브 혜택 받기</strong></p>
        <Button class="btn_min" txt="알림 받기" />
      </div>
    </section>

    <section>
      <p style="text-align: center; padding: 150px 0; background-color: #ddd">플랫폼 영역</p>
    </section>
    <!-- //라이브 콘텐츠 -->
  </div>
</template>
<script setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})
</script>
<style lang="scss" scoped>
.live_box {
  .liveVisual_none {
    position: relative;
    height: 46rem;
    padding: 4.5rem 0 0;
    text-align: center;
    background: linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%);
    &:before,
    &:after {
      width: 100%;
      content: '';
      position: absolute;
      display: inline-block;
    }
    &:before {
      height: 21rem;
      background: url('@inmModule/assets/images/ui/bg_live_typo.png') no-repeat 50% 50%;
      background-size: 33.3rem 21rem;
      left: 0;
      bottom: 7.5rem;
    }
    &:after {
      height: 26.5rem;
      background: url('@inmModule/assets/images/ui/bg_live_mockup.png') no-repeat 50% bottom;
      background-size: 17rem 26.5rem;
      left: 0;
      bottom: 0;
    }
    .imgTitle {
      width: 13.6rem;
      height: 2.9rem;
      margin-bottom: 1.6rem;
      font-size: 0;
      background: url('@inmModule/assets/images/ui/img_InniLive.png') no-repeat 50% 50%;
      background-size: 13.6rem 2.9rem;
      display: inline-block;
    }
    .notice {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }
  .snsBox {
    padding: 1.8rem 2.1rem;
    letter-spacing: -0.01em;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .txt {
      font-weight: 600;
    }
    :deep(button) {
      height: 2.4rem;
      border-radius: 0.1rem;
      em {
        padding: 0 0.8rem;
        font-size: 1rem;
        font-weight: 600;
        line-height: 2.4rem;
      }
    }
  }
}
</style>
