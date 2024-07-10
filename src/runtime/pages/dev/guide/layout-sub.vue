<template>
  <div id="container">
    <InmButton>홈</InmButton>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layoutOption: {
    MO: {
      type: 'search',
      footer: false
    },
    PC: {
      header: true,
      footer: false
    }
  }
})
</script>
<style lang=""></style>
