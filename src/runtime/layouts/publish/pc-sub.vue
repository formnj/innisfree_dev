<template>
  <div id="wrap">
    <HeaderPc />
    <div id="container">
      <Breadcrumb :item="breadcrumbData" />
      <div class="content">
        <NuxtPage />
      </div>
    </div>
    <FooterPc />
  </div>
</template>
<!-- pc-sub 사용시 컨텐츠를 .inner 로 감싸서 사용 -->
<script setup>
import { breadcrumbData } from '@inmModule/test/data/publish/dummyData'
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
  padding-bottom: 100px;
  flex: 1 auto;
  .content {
    & > :deep(.inner) {
      width: 1280px;
      margin: 0 auto;
    }
  }
}
</style>
