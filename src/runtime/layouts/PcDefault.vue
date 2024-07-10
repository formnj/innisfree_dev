<template>
  <div id="wrap">
    <HeaderPc />
    <slot />
    <FooterPc />
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
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>
