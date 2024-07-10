<template>
  <!-- mobile PRD 전용 -->
  <div id="wrap">
    <HeaderMo :useLogo="false" :useBack="true" :useShare="true" :useHome="true" :useSearch="false" :useNav="false" :type="'type_sub'" />
    <div id="container">
      <NuxtPage />
    </div>
    <FooterMo />
  </div>
</template>

<script setup></script>

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
  flex: 1 auto;
}

@import '../../assets/scss/mobile.scss';
</style>
