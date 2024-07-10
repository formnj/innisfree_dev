<template>
  <ul class="hash" :class="hashType">
    <li v-for="(item, idx) in itemList" :key="idx">
      <button>{{ item }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IHashProps {
  hashType: 'button' | 'round' | string
  itemList?: string[]
}

const props = defineProps<IHashProps>()
</script>

<style lang="scss">
.hash {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  button {
    padding: 0 8px;
    color: #009d5e;
    font-size: 10px;
    background-color: #edfff8;
    border-radius: 100px;
  }

  &.round {
    button {
      padding: 3px 10px;
      font-size: 12px;
      background-color: #fff;
      border: 1px solid #009d5e;
      display: flex;
      align-items: center;
    }
  }
}
</style>
