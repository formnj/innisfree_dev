<template>
  <ul class="sticker">
    <li v-for="(item, idx) in itemList" :key="idx">
      <em :class="item.type">{{ item.text }}</em>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IStickerItem {
  text: string
  type: 'type01' | 'type02' | 'type03' | 'type04' | 'type05' | string
}

interface IStickerProps {
  itemList: IStickerItem[]
}

const props = defineProps<IStickerProps>()
</script>

<style lang="scss" scoped>
.sticker {
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  em {
    padding: 2px 5px;
    font-size: 12px;
    display: block;
    &.type01 {
      color: #666;
      background-color: #eee;
    }
    &.type02 {
      color: #00bc70;
      background-color: #e0fbf0;
    }
    &.type03 {
      color: #fff;
      background-color: #00bc70;
    }
    &.type04 {
      color: #fff;
      background-color: #000;
    }
    &.type05 {
      color: #fff;
      background-color: #666;
    }
  }
}
.prod_info {
  .sticker em {
    font-size: 10px;
  }
}
</style>
