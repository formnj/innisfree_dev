<template>
  <div class="pdtSortTab_wrap">
    <div class="sortTab">
      <button class="btn_dropdown" @click="click">{{ itemList[currentIndex].value }}</button>
      <ul v-if="isOpend" :class="[activeClass ? ' open' : 'close']">
        <li v-for="(item, idx) in itemList" :key="idx" :class="{ current: currentIndex === idx }" @click="itemClick(item, idx)">
          <a href="#none" :class="{ active: currentIndex === idx }" @click.prevent="() => {}">{{ item.value }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '#imports'

interface IDropdownItem {
  key: string | number
  value: string
}

interface IDropdownProps {
  itemList: Array<IDropdownItem>
}

const emit = defineEmits(['change'])

withDefaults(defineProps<IDropdownProps>(), {
  itemList: () => [
    { key: 0, value: '추천순' },
    { key: 1, value: '신제품순' },
    { key: 2, value: '판매량순' },
    { key: 3, value: '낮은 가격순' },
    { key: 4, value: '높은 가격순' },
    { key: 5, value: '리뷰순' },
    { key: 6, value: '판매금액순' }
  ]
})

const currentIndex = defineModel({ type: Number, default: 0 })
const isOpend = ref(false)
const activeClass = ref(false)

const itemClick = (item: IDropdownItem, index: number) => {
  currentIndex.value = index
  emit('change', item)
  closeItemList()
}

const click = () => {
  if (isOpend.value) {
    closeItemList()
  } else {
    openItemList()
  }
}

const openItemList = () => {
  isOpend.value = !isOpend.value
  setTimeout(() => {
    activeClass.value = isOpend.value
  }, 0)
}

const closeItemList = () => {
  activeClass.value = !isOpend.value
  setTimeout(() => {
    isOpend.value = !isOpend.value
  }, 150)
}
</script>

<style lang="scss" scoped>
.close {
  height: 0px;
  border: none;
  transition: all 0.2s ease;
}
.open {
  height: 270px;
  border: 1px solid #888;
}
</style>
