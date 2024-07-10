<template>
  <div class="prod_detail_conts" :class="isOpen ? 'open' : ''">
    <!-- 개발시 삭제 -->
    <div class="temp_area">
      <img src="/images/sam/img_prod_detail.png" alt="" />
    </div>
    <!-- //개발시 삭제 -->

    <div v-if="isMo" class="btn_more_area">
      <button type="button" @click="onClick">제품정보&nbsp;<span v-if="!isOpen">더보기</span><span v-if="isOpen">접기</span></button>
    </div>
  </div>
</template>
<script setup>
import { ref } from '#imports'

const props = defineProps({
  isMo: {
    //모바일 여부
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
const onClick = () => {
  isOpen.value = !isOpen.value
}
</script>
<style lang="scss" scoped>
.prod_detail_conts {
  text-align: center;
  overflow: hidden;
  position: relative;

  .btn_more_area {
    width: 100%;
    height: 230px;
    padding: 0 21px 30px;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255));
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;

    button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      background-color: #fff;
      border: 1px solid #000;
      align-items: center;
      justify-content: center;
      display: flex;

      &:after {
        content: '';
        width: 16px;
        height: 16px;
        margin-left: 10px;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') 0 -70px;
        background-size: 250px auto;
        display: inline-block;
      }
    }
  }

  &.open {
    height: auto;

    .btn_more_area {
      height: auto;
      padding: 2rem 2.1rem 4rem;
      position: relative;

      button:after {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
