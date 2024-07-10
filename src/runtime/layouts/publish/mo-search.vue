<template>
  <div id="wrap">
    <HeaderMo
      :useBanner="false"
      :useLogo="false"
      :useBack="true"
      :useSearchWrap="true"
      :useSearch="false"
      :useCart="icons <= 0 ? false : true"
      :useBarcode="icons <= 0 ? true : false"
      :useNav="false"
      :type="'type_search'" />
    <div id="container">
      <NuxtPage @icons="icons = $event" />
    </div>
    <FooterMo />
    <!-- <Actionbar /> -->
  </div>
</template>

<script setup>
import { ref } from '#imports'

const icons = ref(null)
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
