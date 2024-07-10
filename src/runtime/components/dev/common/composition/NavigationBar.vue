<template>
  <nav class="navGnb">
    <ul>
      <li v-for="(nav, index) in props.navigationList" :key="index">
        <a :href="nav.url">{{ nav.menuText }}</a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
interface INavigationData {
  menuText: string
  url: string
  isPoint: boolean
}

interface INavigationBarProps {
  navigationList: Array<INavigationData>
}

const props = defineProps<INavigationBarProps>()
</script>
<style></style>
