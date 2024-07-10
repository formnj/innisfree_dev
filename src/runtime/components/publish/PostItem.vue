<template>
  <div class="post_item">
    <a :href="link">
      <span class="thumb">
        <img :src="item.img" alt="" />
      </span>
      <span class="info">
        <span class="desc">
          <span class="title">{{ item.title }}</span>
          <EditorProfile :item="item" />
        </span>
        <span class="post_icons">
          <span class="i view">{{ item.view.cnt }}</span>
          <span class="i like">{{ item.view.like }}</span>
          <span class="i cmnt">{{ item.view.cmnt }}</span>
        </span>
      </span>
    </a>
    <button class="btn_like" @click="setFilter">좋아요</button>
  </div>
</template>
<script setup>
import { setFilter } from '@inmModule/assets/js/common-ui'
const props = defineProps({
  item: {},
  link: {
    type: String,
    default: 'IN_MO_HOM_01_09'
  }
})
</script>
<style lang="scss" scoped>
.post_item {
  position: relative;

  & > span {
    display: block;
  }

  .thumb {
    position: relative;

    img {
      vertical-align: top;
    }
  }

  & a > .info {
    padding: 1.5rem 1.5rem 0 0;
    display: block;
    box-sizing: border-box;

    .desc {
      height: 8rem;
      display: block;

      .title {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.8rem;
        color: #000;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      :deep(.editor_profile) {
        margin-top: 0.8rem;
        gap: 0 0.8rem;
        display: flex;

        .mark_editor {
          display: none;
        }
      }
    }
  }
}

.btn_like {
  width: 3.4rem;
  height: 3.4rem;
  font-size: 0;
  position: absolute;
  top: 13.3rem;
  right: 0.2rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  &:before {
    content: '';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
    background-position: -15rem -7rem;
    background-size: 25rem auto;
    background-repeat: no-repeat;
  }

  &.active:before {
    background-position: -18rem -7rem;
  }
}
</style>
