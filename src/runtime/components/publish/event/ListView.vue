<template>
  <div
    v-for="(event, index) in eventList"
    :key="index"
    class="bg-white p-4 shadow rounded-lg"
  >
    <div class="flex flex-col items-center">
      <img :src="event.photoUrl" :alt="event.title" class="rounded-lg mb-2" />
      <h3 class="text-lg font-semibold text-gray-800">{{ event.title }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  eventList: { type: Array, required: true }
})
</script>
<style></style>
