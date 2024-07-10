<template>
  <div v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" class="inner">
    <EditorProfile :item="item" />
  </div>

  <div class="list_wrap">
    <ul class="editor_post_list">
      <li v-for="(item, idx) in samplePost" :key="idx">
        <EditorPostItem :item="item" :link="link" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { samplePost } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '이사배')
})
</script>

<style lang="scss" scoped>
:deep(.editor_profile) {
  margin-bottom: 2.4rem;
  padding: 0 2.1rem;

  .photo {
    width: 9.6rem;
    height: auto;
  }

  .info {
    gap: 1.2rem 0;

    em {
      font-size: 1.8rem;
    }

    .mark_editor {
      font-size: 1.4rem;
    }

    & > span {
      height: auto;
      font-size: 1.4rem;
      line-height: 1.8rem;
      text-overflow: initial;
      display: block;
    }
  }
}

.inner {
  padding: 2rem 0 0;
  color: #333;
  line-height: 2.4rem;
}

.editor_post_list {
  li + li {
    margin-top: 4.8rem;
  }
}

:deep(.goods_item) {
  .giveaway,
  .review_score {
    display: none;
  }
}
</style>
