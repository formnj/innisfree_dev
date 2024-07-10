<template>
  <div v-if="isShowBanner" class="docTopBanner txtBanner">
    <a :href="props.url" class="txt" target="_blank">{{ props.bannerText }}</a>
    <InmButton class="btnClose" @click="closeBanner">닫기</InmButton>
  </div>
</template>
<script setup lang="ts">
import { ref } from '#imports'

interface IMainTopBannerProps {
  showBanner?: boolean
  bannerText: string
  url: string
}

const props = withDefaults(defineProps<IMainTopBannerProps>(), {
  showBanner: true
})
const isShowBanner = ref<boolean>(props.showBanner)

const closeBanner = () => {
  isShowBanner.value = false
}
</script>
<style></style>
