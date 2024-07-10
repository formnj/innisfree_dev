<template>
  <div class="review_point" :class="props.class">
    <p>
      <span :style="'width:' + props.width + '%'">{{ props.width }}</span>
    </p>
    <strong v-if="props.rate" class="rate_txt">{{ props.rate }}</strong>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: ''
  },
  rate: String,
  class: String
})
</script>
<style lang="scss" scoped>
.review_point {
  display: flex;
  align-items: center;
  p {
    width: 72px;
    height: 16px;
    background: url('@inmModule/assets/images/common/icon_star.png') 0 0 / auto 32px no-repeat;
    position: relative;
    span {
      font-size: 0;
      background: url('@inmModule/assets/images/common/icon_star.png') 0 -16px / auto 32px no-repeat;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      display: inline-block;
    }
  }
  .rate_txt {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  &.type_big {
    p {
      width: 140px;
      height: 32px;
      background: url('@inmModule/assets/images/common/icon_star.png') 0 0 no-repeat;
      span {
        background: url('@inmModule/assets/images/common/icon_star.png') 0 -32px no-repeat;
      }
    }
    .rate_txt {
      font-size: 24px;
    }
  }
}
</style>
