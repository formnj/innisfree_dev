<template>
  <div class="multi_form">
    <InmInputText v-model="model" :placeholder="props.placeholder" />
    <InmButton @click="$attrs.onClick && $attrs.onClick(model)">버튼</InmButton>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

interface ISingleInputEventProps {
  placeholder?: string
}

const props = defineProps<ISingleInputEventProps>()
const model = defineModel<string>()
</script>
<style></style>
