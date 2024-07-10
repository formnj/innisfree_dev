<template>
  <div class="editor_profile">
    <img :src="item.editor.photo" alt="" class="photo">
    <span class="info">
      <em>{{ item.editor.name }} <span class="mark_editor">Editor</span></em>
      <span>{{ item.editor.type }}</span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {},
})
</script>

<style lang="scss" scoped>
.editor_profile {
  display: flex;
  gap: 2rem;
  align-items: center;

  .photo {
    width: 4rem;
    height: 4rem;
  }

  .info {
    gap: .5rem 0;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    color: #999;

    em {
      gap: .8rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: #666;
      display: flex;
      align-items: center;
    }

    &>span {
      height: 1.6rem;
      line-height: 1.6rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
}
</style>
