<template>
  <img
    ref="imageWrapper"
    :src="imageSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :sizes="sizes"
    :fit="fit"
    @error="onError"
    @load="onLoad" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from '#imports'

interface Props {
  src?: string
  alt?: string
  width?: string
  height?: string
  /** 지연로딩을 하지 않고 바로 로딩이 필요할경우 사용 */
  eager?: boolean
  sizes?: string
  errorImage?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

const props = defineProps<Props>()

const imageSrc = ref<string>('')
const imageWrapper = ref<HTMLElement | null>(null)

const onError = () => {
  imageSrc.value = props.errorImage || 'https://www.innisfree.com/kr/ko/resources/error/img/240x320.png'
}

const onLoad = () => {
  // 이미지 로딩후 처리가 필요할 경우
}

const loadImage = () => {
  imageSrc.value = props.src
}

watch(
  () => props.src,
  () => {
    if (imageSrc.value !== '') {
      loadImage()
    }
  }
)

const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  if (!props.eager && 'IntersectionObserver' in window) {
    observer.value = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          if (imageWrapper.value) {
            obs.unobserve(imageWrapper.value)
          }
        }
      })
    })
    if (imageWrapper.value) {
      observer.value.observe(imageWrapper.value)
    }
  } else {
    loadImage()
  }
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped></style>
