<template>
  <a href="#none" class="svc_banner">
    <p>1분 피부 진단으로<br />꾸준하게 기록하고 관리하세요.</p>
    <div class="btn_ui_wrap">
      <span class="btn">AI 케어 진단 시작</span>
      <span class="bubble">+ 1,000P</span>
    </div>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.svc_banner {
  padding: 27px 20px;
  background: url('@inmModule/assets/images/ui/bg_log_top_bann.png') left top / 100% auto no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;

  p {
    padding-left: 21px;
    color: #fff;
    line-height: 18px;
  }

  .btn_ui_wrap {
    position: relative;

    span.btn {
      width: 140px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.6);
      display: inline-block;
    }

    span.bubble {
      height: 15px;
      padding: 0 8px;
      font-size: 10px;
      line-height: 15px;
      color: #00bc70;
      font-weight: 500;
      border-radius: 8px;
      background-color: #fff;
      position: absolute;
      right: 0;
      top: -10px;

      &:after {
        content: '';
        width: 5px;
        height: 5px;
        background-color: #fff;
        position: absolute;
        right: 13px;
        bottom: -3px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
