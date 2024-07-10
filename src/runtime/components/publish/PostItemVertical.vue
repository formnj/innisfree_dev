<template>
  <div class="post_item">
    <a :href="props.link">
      <span class="info">
        <Sticker :item="item.sticker" />
        <span class="title">{{ item.title }}</span>
        <span class="post_icons">
          <span class="i view">{{ item.view.cnt }}</span>
          <span class="i like">{{ item.view.like }}</span>
          <span class="i cmnt">{{ item.view.cmnt }}</span>
        </span>
      </span>
      <span class="thumb">
        <img :src="item.img" alt="">
      </span>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
    item: {},
    link: {
        type: String,
        default: '#none'
    },
})
</script>
<style lang="scss" scoped>
.post_item {
  padding: 0 2.1rem 2.5rem;
  border-bottom: 1px solid #f5f5f5;
  a {
    display: flex;
    justify-content: space-between;

    & > span {
      display: block;

      &.info {
        width: calc(100% - 9.2rem);
        padding-right: 1.6rem;

        .title {
          height: 4.4rem;
          margin-top: .6rem;
          font-size: 1.6rem;
          line-height: 2.2rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }

      &.thumb {
        width: 9.2rem;
        height: 9.2rem;
      }
    }
  }

  :deep(.post_icons) {
    margin-top: 1.2rem;
    gap: 0 .8rem;
    padding-top: 0;
    border-top: 0;

    .i {
      gap: 0 .2rem;
      justify-content: flex-start;
    }
  }
}
</style>
