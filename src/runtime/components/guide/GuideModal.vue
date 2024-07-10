<template>
  <div>
    <GuideComponent
      title="InmModal"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <template #controls>
        <div class="control">
          <h4>modalType</h4>
          <label> default <input v-model="modalType" type="radio" value="" /> </label>
          <label> wide <input v-model="modalType" type="radio" value="wide" /> </label>
          <label> alert <input v-model="modalType" type="radio" value="alert" /> </label>
          <label> bottom <input v-model="modalType" type="radio" value="bottom" /> </label>
          <label> side <input v-model="modalType" type="radio" value="side" /> </label>
          <label> full <input v-model="modalType" type="radio" value="full" /> </label>
          <label> layer <input v-model="modalType" type="radio" value="layer" /> </label>
        </div>
        <div class="control">
          <h4>closeButton</h4>
          <label> <input v-model="closeButton" type="checkbox" /> </label>
        </div>
        <div class="control">
          <h4>dimCloseble</h4>
          <label> <input v-model="dimCloseble" type="checkbox" /> </label>
        </div>
      </template>
      <Button txt="팝업열기 " @click="openModal" />
    </GuideComponent>
    <InmModal
      v-model="showModal"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="modalType"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="확인"
      close-button-text="취소"
      :style="style"
      @close="console.log('close click')"
      @ok="console.log('ok click')">
      <template #header><h2>애국가</h2> </template>
      1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
      2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
      3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
      4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
      후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br />
    </InmModal>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, reactive, computed } from '#imports'

const closeButton: Ref<boolean> = ref(true)
const dimCloseble: Ref<boolean> = ref(true)

const style = reactive({ top: ``, left: `` })

const showModal: Ref<boolean> = ref(false)
const showHeader: Ref<boolean> = ref(true)
const showFooter: Ref<boolean> = ref(true)
const showOverlay: Ref<boolean> = ref(true)
const modalType: Ref<string> = ref('')

const openModal = (event?: MouseEvent) => {
  if (modalType.value === 'layer') {
    const target = event?.target as HTMLElement
    style.top = `${target.offsetTop}px`
    style.left = `${target.offsetLeft}px`
  } else {
    style.top = ''
    style.left = ''
  }
  showModal.value = true
}

const initialCode = computed(() => {
  return `
  <InmModal
    v-model="showModal"
    :header="${showHeader.value}"
    :footer="${showFooter.value}"
    :overlay="showOverlay"
    :type="${modalType.value}"
    :close-button="${closeButton.value}"
    :dim-closeble="${dimCloseble.value}"
    ok-button-text="확인"
    close-button-text="취소"
    :style="style"
    @close="console.log('close click')"
    @ok="console.log('ok click')">
    <template #header><h2>애국가</h2> </template>
    1절: 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
    2절: 남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세<br />
    3절: 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세<br />
    4절: 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세<br />
    후렴: 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세<br />
  </InmModal>

  //Script 영역
  const openModal = (event?: MouseEvent) => {
  if (modalType.value === 'layer') {
    const target = event?.target as HTMLElement
    style.top = target.offsetTop + 'px'
    style.left = target.offsetLef + 'px'
  } else {
    style.top = ''
    style.left = ''
  }
  showModal.value = true
}

    `
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'Boolean', description: '팝업 노출여부' },
  { name: 'header', type: 'Boolean', default: 'true', description: '헤더 노출여부' },
  { name: 'footer', type: 'Boolean', default: 'true', description: '푸터 노출여부' },
  { name: 'overlay', type: 'Boolean', default: 'true', description: '딤영역 노출여부' },
  { name: 'type', type: 'String', default: '', description: '팝업 유형' },
  { name: 'ok-button-text', type: 'String', default: '확인', description: '확인 버튼 텍스트' },
  { name: 'close-button', type: 'Boolean', default: 'true', description: '닫기 버튼 노출여부' },
  { name: 'close-button-text', type: 'String', default: '닫기', description: '닫기 버튼 텍스트' }
]

const eventsData = [
  { name: 'ok', description: '확인 버튼 클릭시 발생하는 이벤트' },
  { name: 'close', description: '닫기 버튼 클릭시 발생하는 이벤트' }
]

const slotsData = [
  { name: 'default', description: '컨텐츠 영역' },
  { name: 'header', description: '헤더 영역' },
  { name: 'footer', description: '푸터 영역' }
]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
