<template>
  <a v-if="isAll == true" href="#none">
    <img class="" :src="item.img" alt="" />
  </a>

  <a v-if="isAll == false && idx != limit" href="#none">
    <img class="" :src="item.img" alt="" />
  </a>
  <a v-if="isAll == false && idx == limit" href="javascript:;" @click="modal.open('modal_photo_review_all', 'full modal_photo_review_all')">
    <!-- 리뷰 10번째 사진일 경우 -->
    <img class="" :src="item.img" alt="" />
    <span v-if="idx == limit">99,999</span>
  </a>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
const props = defineProps({
  item: {},
  idx: Number,
  isAll: {
    //포토 요약일 경우 false
    type: Boolean,
    default: true
  },
  limit: Number
})
</script>
<style lang="scss" scoped>
a {
  height: 100%;
  display: block;
  position: relative;
}

.last {
  a {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  span {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      margin: 0 auto 10px;
      background: url('@inmModule/assets/images/common/icon_split.png') -460px -70px no-repeat;
      flex: none;
      display: block;
    }
  }
}
</style>
