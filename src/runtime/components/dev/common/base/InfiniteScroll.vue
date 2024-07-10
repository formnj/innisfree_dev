<template>
  <div>
    <slot></slot>
    <div ref="nextTrigger" class="load-more-trigger"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports'

const props = defineProps({
  totalCount: { type: Number, default: 0 },
  perPage: { type: Number, default: 20 },
  list: { type: Array<any>, default: () => [] },
  observerOptions: {
    type: Object,
    default: () => ({
      root: null,
      rootMargin: '200px',
      threshold: 0
    })
  }
})

const emit = defineEmits(['next'])

const nextTrigger = ref<HTMLDivElement | null>(null)

const emitNext = () => {
  let pageNo = Math.ceil(props.list.length / props.perPage)

  if (props.list.length < props.totalCount) {
    pageNo++

    emit('next', pageNo)
  } else {
    removeObserver()
  }
}

const createObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        emitNext()
      }
    })
  }, props.observerOptions)

  if (nextTrigger.value) {
    observer.observe(nextTrigger.value)
  }

  return observer
}

const removeObserver = () => {
  if (observer && nextTrigger.value) {
    observer.unobserve(nextTrigger.value)
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = createObserver()
})

onUnmounted(() => {
  removeObserver()
})
</script>

<style scoped>
.load-more-trigger {
  height: 1px;
}
</style>
