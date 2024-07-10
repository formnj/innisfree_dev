<template>
  <div>
    <GuideComponent
      title="useToast"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>내용</h4>
          <label><input v-model="message" type="text" /> </label>
        </div>
        <div class="control">
          <h4>color</h4>
          <input v-model="color" type="color" /> 색상 {{ color }}
        </div>
        <div class="control">
          <h4>text-color</h4>
          <input v-model="textColor" type="color" /> 색상 {{ textColor }}
        </div>

        <div class="control">
          <h4>opacity</h4>
          <input v-model="opacity" type="range" min="0" max="100" step="10" /> {{ opacity / 100 }}
        </div>
      </template>
      <div class="multi_form">
        <Button txt="토스트 호출" @click="showToast" />
      </div>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed, useToast } from '#imports'

const initialCode = computed(() => {
  return `
const { addToast } = useToast()

const message = ref<string>('메세지 내용입니다.')

const showToast = () => {
  addToast({ message: '${message.value} ')
}
    `
})

const descriptions = undefined

const propsData = [
  { name: 'message', type: 'String', default: '', description: '토스트 내용입니다.' },
  { name: 'duration', type: 'Number', default: 5000, description: '토스트가 화면에 표시되는 지속 시간 (밀리초).' },
  { name: 'color', type: 'String', default: 'black', description: '토스트의 배경 색상. ' },
  { name: 'textColor', type: 'String', default: 'white', description: '토스트의 문자 색상. ' },
  { name: 'opacity', type: 'Number', default: 0.8, description: '토스트의 투명도.' }
]

const eventsData = undefined

const { addToast } = useToast()

const message = ref<string>('메세지 내용입니다.')

const color = ref<string>('#000000')
const textColor = ref<string>('#ffffff')

const opacity = ref<number>(80)

const showToast = () => {
  addToast({ message: `${message.value} `, color: color.value, textColor: textColor.value, opacity: opacity.value / 100 })
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
