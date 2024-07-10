<template>
  <div>
    <GuideComponent
      title="useModal"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <div class="multi_form">
        <Button txt="showAlert" @click="myAlert()" />
        <Button txt="showConfirm" @click="myConfirm()" />
      </div>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { computed, useModal } from '#imports'

const initialCode = computed(() => {
  return `
const { showAlert } = useModal()

const myAlert = async () => {
  try {
    await showAlert({ contents: '<p>내용<br/>내용2</p>', closeButton: false, title: '경고' })
    console.log('확인 버튼을 클릭')
  } catch (e) {
    console.log('취소 버튼을 클릭')
  }
}

const myConfirm = async () => {
  try {
    await showAlert({ contents: '<p>내용<br/>내용2</p>', title: '알림' , okButtonText: 'ok', closeButtonText: 'cancel' })
    console.log('확인 버튼을 클릭')
  } catch (e) {
    console.log('취소 버튼을 클릭')
  }
}

    `
})

const descriptions = ['시스템 alery, confirm 을 대체한 함수형 UI Modal 입니다.']

const propsData = undefined

const eventsData = undefined

const { showAlert } = useModal()

const myAlert = async () => {
  try {
    await showAlert({ contents: `<p>내용<br/>내용2</p>`, closeButton: false, title: '경고' })
    console.log('확인 버튼을 클릭')
  } catch (e) {
    console.log('취소 버튼을 클릭')
  }
}

const myConfirm = async () => {
  try {
    await showAlert({ contents: `<p>내용<br/>내용2</p>`, title: '알림', okButtonText: 'ok', closeButtonText: 'cancel' })
    console.log('확인 버튼을 클릭')
  } catch (e) {
    console.log('취소 버튼을 클릭')
  }
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
