<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>라이브</h2>
    </div>
  </div>
  <!-- //title washed -->

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
  </div>
  <!-- //라이브 콘텐츠 -->

  <div class="inner">
    <p style="text-align: center; padding: 50px 0; background-color: #ddd">플랫폼 영역</p>
  </div>
</template>
<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

onMounted(() => {})

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
    height: 550px;
    padding: 40px 0 0;
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
      height: 280px;
      background: url('@inmModule/assets/images/ui/bg_live_typo.png') no-repeat 50% 50%;
      left: 0;
      bottom: 64px;
    }
    &:after {
      height: 354px;
      background: url('@inmModule/assets/images/ui/bg_live_mockup.png') no-repeat 50% bottom;
      left: 0;
      bottom: 0;
    }
    .imgTitle {
      width: 190px;
      height: 40px;
      margin-bottom: 20px;
      font-size: 0;
      background: url('@inmModule/assets/images/ui/img_InniLive.png') no-repeat 50% 50%;
      display: inline-block;
    }
    .notice {
      line-height: 1.38;
    }
  }
  .snsBox {
    padding: 20px 0;
    letter-spacing: -0.01em;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt {
      margin-right: 30px;
      font-weight: 600;
      font-size: 20px;
      line-height: 1;
    }
  }
  .innarea {
    padding: 60px 0;
    border-bottom: 1px solid #eee;
    position: relative;
    text-align: center;
    .title {
      margin: 0 0 10px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.33;
    }
    .desc {
      color: #666;
      font-size: 18px;
      line-height: 1.33em;
    }
  }
}
</style>
