<template>
  <div>
    <GuideComponent
      title="InmInputValidation"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :slots-data="slotsData">
      <InmInputValidation :is-error="hasText" error-text="필수입력항목입니다.">
        <InmInputText
          v-model="inputTextValue"
          :readonly="readonly"
          :disabled="disabled"
          :only-number="onlyNumber"
          :placeholder="placeholder" />
      </InmInputValidation>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const inputTextValue = ref('')
const hasText = computed<boolean>(() => !inputTextValue.value)
const placeholder = ref('입력 해주세요')
const readonly = ref(false)
const disabled = ref(false)
const onlyNumber = ref(false)

const initialCode = computed(() => {
  return `
<InmInputValidation :is-error="hasText" error-text="필수입력항목입니다.">
    <InmInputText
      v-model="inputTextValue"
      :readonly="${readonly.value}"
      :disabled="${disabled.value}"
      :only-number="${onlyNumber.value}"
      :placeholder="${placeholder.value}" />
  </InmInputValidation>
`
})

const descriptions = undefined

const propsData = [
  { name: 'is-error', type: 'Boolean', default: 'false', description: '에러 메세지 노출여부 입니다.' },
  { name: 'error-text', type: 'String', description: '에러 메세지 입니다.' }
]

const eventsData = undefined
const slotsData = [{ name: 'default', description: '유효성 검사를할 컴포넌트' }]
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
