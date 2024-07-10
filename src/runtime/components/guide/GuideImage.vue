<template>
  <div>
    <GuideComponent title="InmImage" :initial-code="initialCode" :props-data="propsData" :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>eager</h4>
          <label> <input v-model="eager" type="checkbox" /> </label>
        </div>

        <div class="control">
          <h4>src</h4>
          <label><input v-model="textInput" type="text" /> </label>
        </div>
      </template>
      <InmImage :eager="eager" :src="textInput"></InmImage>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const eager = ref(false)

const textInput = ref('https://images.innisfree.co.kr/upload/product/35157_l1_S_240.jpg?T')

const initialCode = computed(() => {
  return `
    <InmImage :eager="${eager.value}" src="${textInput.value}"></InmImage>
  `
})

const propsData = [
  { name: 'src *', type: 'String', description: '이미지 URL. ' },
  { name: 'alt', type: 'Boolean', description: '이미지 대체 텍스트.' },
  { name: 'width', type: 'String', description: '이미지의 너비 (px, %, em 등 단위 사용 가능).  ' },
  { name: 'height', type: 'String', description: '이미지의 높이 (px, %, em 등 단위 사용 가능).  ' },
  { name: 'sizes', type: 'String', description: '브라우저에게 이미지가 표시될 수 있는 크기 정보를 제공. ' },
  { name: 'fit', type: 'String', description: '이미지의 맞춤 방식 (fill, contain, cover, none, scale-down).  ' },
  { name: 'errorImage', type: 'String', description: '이미지 로딩 중 오류 발생 시 표시할 대체 이미지 URL. ' }
]

const eventsData = [{ name: 'click', description: '클릭 이벤트 입니다.' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
