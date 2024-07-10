<template>
  <button type="button" :class="props.class">
    <em>{{ props.txt }}</em>
  </button>
</template>

<script setup lang="ts">
interface IconProps {
  class: string
  txt: string
}

const props = withDefaults(defineProps<IconProps>(), {
  class: '',
  txt: ''
})
</script>

<style lang="scss" scoped>
button {
  width: 3.2rem;
  height: 3.2rem;
  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
  background-repeat: no-repeat;
  background-size: 25rem auto;
  background-color: unset;
  position: relative;
  display: block;
  > em {
    font-size: 0;
  }
  &.mo_cart {
    background-position: -4rem 0;
    em {
      height: 1.7rem;
      padding: 0 0.5rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.7rem;
      background-color: #000;
      border-radius: 50px;
      position: absolute;
      right: -0.5rem;
      bottom: -0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.home {
    background-position: -13rem 0;
  }
  &.share {
    background-position: -17rem 0;
  }
  &.back {
    background-position: -4rem -7rem;
  }
  &.btn_search {
    background-position: 0 0;
  }
  &.barcode {
    background-position: 0 -18rem;
  }
  &.alarm {
    // 마이페이지 알람 버튼
    background-position: -11rem -28rem;
    background-blend-mode: difference;
    background-color: inherit;
  }
  &.tooltip {
    //모바일 사이즈는 mobile.scss로 옮김
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 0;
    background-image: url('@inmModule/assets/images/common/icon_split.png');
    background-position: -94px -206px;
    background-size: 250px auto;
    display: inline-block;
  }
  &.del {
    width: 24px;
    height: 24px;
    position: relative;
    background: none;
    &:before,
    &:after {
      width: 20px;
      margin-left: -10px;
      border-top: 1px solid #000;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  &.header_zzim {
    width: 24px;
    height: 24px;
    background: url('@inmModule/assets/images/common/icon_split.png') -110px -30px / 250px auto;
  }
  &.mypage {
    width: 24px;
    height: 24px;
    background: url('@inmModule/assets/images/common/icon_split.png') -140px -30px / 250px auto;
  }
  &.delivery {
    width: 24px;
    height: 24px;
    background: url('@inmModule/assets/images/common/icon_split.png') -170px -30px / 250px auto;
  }
  &.pc_cart {
    width: 24px;
    height: 24px;
    background: url('@inmModule/assets/images/common/icon_split.png') -200px -30px / 250px auto;
    em {
      width: 17px;
      height: 17px;
      color: #fff;
      font-size: 10px;
      font-weight: 600;
      line-height: 17px;
      background-color: #00bc70;
      border-radius: 50%;
      position: absolute;
      right: -5px;
      bottom: -2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
