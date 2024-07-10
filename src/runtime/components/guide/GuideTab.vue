<template>
  <div>
    <GuideComponent
      title="InmStarScore"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData">
      <template #controls>
        <div class="control">
          <h4>tab-type</h4>
          <label>
            Default
            <input v-model="tabType" type="radio" text="Default" value="" />
          </label>
          <label>
            type_01
            <input v-model="tabType" type="radio" text="type_01" value="type_01" />
          </label>
          <label>
            type_02
            <input v-model="tabType" type="radio" text="type_02" value="type_02" />
          </label>
          <label>
            type_03
            <input v-model="tabType" type="radio" text="type_03" value="type_03" />
          </label>
          <label>
            type_04
            <input v-model="tabType" type="radio" text="type_04" value="type_04" />
          </label>
          <label>
            type_05
            <input v-model="tabType" type="radio" text="type_05" value="type_05" />
          </label>
        </div>
      </template>
      <InmTab
        v-model="tabIndex"
        :tab-type="tabType"
        :item-list="[{ text: 'tab1' }, { text: 'tab2' }, { text: 'tab3', count: 32 }]"
        @click="
          (index) => {
            console.log('click=> index', index)
          }
        "
        @change="
          (index) => {
            console.log('change=> index', index)
          }
        " />
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import GuideComponent from './GuideComponent.vue'
import { ref, computed } from '#imports'

const tabIndex: Ref<number> = ref(0)
const tabType: Ref<string> = ref('')

const initialCode = computed(() => {
  return `
<InmTab
  v-model="tabIndex"
  :tab-type="${tabType.value}"
  :item-list="[{ text: 'tab1' }, { text: 'tab2' }, { text: 'tab3', count: 32 }]"
  @click="
    (index) => {
      console.log('click=> index', index)
    }
  "
  @change="
    (index) => {
      console.log('change=> index', index)
    }
  " />
`
})

const descriptions = undefined

const propsData = [
  { name: 'v-model *', type: 'Number ', description: '활성화된 Tab Index 값.' },
  { name: 'tab-type', type: 'String ', description: '' }
]

const eventsData = undefined
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
