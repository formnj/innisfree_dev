<template>
  <div class="showcase_item">
    <a :href="props.link">
      <img :src="item.img" alt="" />
      <pre class="title">{{ item.title }}</pre>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {},
  link: {
    type: String,
    default: '#none'
  }
})
</script>
<style lang="scss" scoped>
.showcase_item {
  position: relative;
  margin-bottom: 0.1rem;

  a {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.25);
      position: absolute;
      left: 0;
      top: 0;
    }

    img {
      vertical-align: top;
    }

    .title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
      line-height: 2.4rem;
      position: absolute;
      left: 2.1rem;
      bottom: 3rem;
      z-index: 1;

      &:before {
        content: '';
        margin-bottom: 1rem;
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -17rem -10rem / 25rem auto no-repeat;
        display: block;
      }
    }
  }
}
</style>
