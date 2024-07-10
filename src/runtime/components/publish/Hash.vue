<template>
    <ul class="hash" :class="hashType">
        <li v-for="(item,idx) in item" :key="idx"><button>{{ item }}</button></li>
    </ul>
</template>

<script setup>
const props = defineProps({
  hashType: String,
  item: Array,
})
</script>

<style lang="scss">
.hash {
    display:flex;
    flex-wrap:wrap;
    gap:5px;
    button {
        padding:0 8px;
        color:#009D5E;
        font-size:10px;
        background-color:#EDFFF8;
        border-radius:100px;
    }

    &.round {
     button {
      padding: 3px 10px;
      font-size: 12px;
      background-color: #fff;
      border: 1px solid #009D5E;
      display: flex;
      align-items: center;
     }
    }
}
</style>
