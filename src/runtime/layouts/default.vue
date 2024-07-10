<template>
  <InmDefaultPc v-if="!isMobile"><slot /></InmDefaultPc>
  <InmDefaultMo v-else><slot /></InmDefaultMo>
</template>

<script setup lang="ts">
const { isMobile } = useDevice()
</script>

<style lang="scss" scoped></style>
