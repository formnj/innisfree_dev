<template>
  <div>
    <GuideComponent
      title="useTooltip"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <div class="multi_form">
        <InmButton @click="tooltip2">tooltip1</InmButton>
        <InmButton @click="tooltip3">tooltip2</InmButton>
      </div>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed, useTooltip } from '#imports'

const initialCode = computed(() => {
  return `
const { showTooltip } = useTooltip()

const tooltip2 = (e: MouseEvent) => {
  showTooltip(
    '<h2>Modal Title</h2><div>Sample Modal</div>',
    e
  )
}

const tooltip3 = (e: MouseEvent) => {
  showTooltip(
    '<h2>애국가</h2>
    <div> 1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
      2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
      3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
      4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
      후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br /></div>',
    e
  )
}
 `
})

const descriptions = ['showTooltip 두번째 인자로 이벤트를 전달해야합니다.']

const propsData = undefined

const eventsData = undefined

const { showTooltip } = useTooltip()

const tooltip2 = (e: MouseEvent) => {
  showTooltip(
    `<h2>Modal Title</h2>
        <div>Sample Modal</div>`,
    e
  )
}

const tooltip3 = (e: MouseEvent) => {
  showTooltip(
    `<h2>애국가</h2>
    <div> 1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
      2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
      3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
      4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
      후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br /></div>`,
    e
  )
}
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
