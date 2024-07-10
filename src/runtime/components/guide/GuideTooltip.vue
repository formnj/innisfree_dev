<template>
  <div>
    <GuideComponent
      title="InmTooltip"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <InmButton @click="tooltip">Tooltip 열기</InmButton>
    </GuideComponent>
    <InmTooltip v-model="showModal" :style="style" @close="console.log('close click')">
      <template #header><h2>애국가</h2> </template>
      1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
      2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
      3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
      4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
      후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br />
      <InmButton
        @click="
          () => {
            showModal = false
            console.log('닫기')
          }
        "
        >확인</InmButton
      >
    </InmTooltip>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, reactive, computed } from '#imports'

const style = reactive({ top: ``, left: `` })
const showModal: Ref<boolean> = ref(false)

const tooltip = (event?: MouseEvent) => {
  const target = event?.target as HTMLElement
  console.log(target.offsetTop, target.offsetHeight)
  style.top = `${target.offsetTop}px`
  style.left = `${target.offsetLeft}px`

  showModal.value = true
}

const initialCode = computed(() => {
  return `
<InmTooltip v-model="showModal" :style="style" @close="console.log('close click')">
  <template #header><h2>애국가</h2> </template>
  1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
  2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
  3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
  4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
  후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br />
  <InmButton
    @click="
      () => {
        showModal = false
        console.log('닫기')
      }
    "
    >버튼</InmButton
  >
</InmTooltip>
  //Script 영역

const style = reactive({ top: '', left: '' })
const showModal: Ref<boolean> = ref(false)

const tooltip = (event?: MouseEvent) => {
  const target = event?.target as HTMLElement
  console.log(target.offsetTop, target.offsetHeight)
  style.top = target.offsetTop +'px'
  style.left = target.offsetLeft + 'px'

  showModal.value = true
}
    `
})

const descriptions = [
  '특정기능이 필요할경우에만 Tooltip 컴포넌트를 직접 작성해서 사용 (ex: 링크)',
  '사용시 style 위치는 스크립트로 생성후 컴포넌트로 전달필요'
]

const propsData = [{ name: 'v-model *', type: 'Boolean', description: '툴팁 노출여부' }]

const eventsData = undefined

const slotsData = [{ name: 'footer', description: '푸터 영역' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
