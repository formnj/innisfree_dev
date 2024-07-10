<template>
  <div id="wrap">
    <HeaderMo :useLogo="false" :useBack="true" :useName="true" :txt="txt" :useNav="false" :type="'type_sub'" />
    <div id="container">
      <NuxtPage @title="txt = $event" />
    </div>
    <FooterMo />
    <Actionbar />
  </div>
</template>

<script setup>
import { ref } from '#imports'

const txt = ref(null)
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
  flex: 1 auto;
}

@import '../../assets/scss/mobile.scss';
</style>
