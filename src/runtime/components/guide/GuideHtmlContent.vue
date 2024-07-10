<template>
  <div>
    <GuideComponent
      title="InmHtmlContent"
      :descriptions="descriptions"
      :initial-code="initialCode"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>secure</h4>
          <label> <input v-model="secure" type="checkbox" /> </label>
        </div>

        <div class="control">
          <h4>content</h4>
          <label><textarea v-model="externalHtml" type="text" cols="100" :style="{ height: '300px', width: '100%' }" /></label>
        </div>
      </template>
      <InmHtmlContent :content="externalHtml" :secure="secure"></InmHtmlContent>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, onMounted, computed } from '#imports'

const secure = ref(false)

const externalHtml = ref('')

const initialCode = computed(() => {
  return `
    <InmHtmlContent :content="externalHtml" :secure="${secure.value}"></InmHtmlContent>
  `
})

const descriptions = ['에디터에서 등록했거나 html 로 작성된 컨텐츠를 화면에 노출하기 위한 컴포넌트입니다.']

const propsData = [
  { name: 'content *', type: 'String', description: '내용' },
  { name: 'secure', type: 'Boolean', default: 'true', description: 'true 로 설정할경우 스크립트 동작을 방지합니다.' }
]

const eventsData = undefined

onMounted(async () => {
  const response = await fetch('/example.html')

  externalHtml.value = await response.text()
})
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
