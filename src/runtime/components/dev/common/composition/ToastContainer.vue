<template>
  <transition-group name="slide-up" tag="div" class="toast-container">
    <div
      v-for="toast in toastList"
      :key="toast.id"
      class="toast"
      :style="{ backgroundColor: toast.color, opacity: toast.opacity, color: toast.textColor }">
      {{ toast.message }}
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToast } from '#imports'

const { toastList } = useToast()
</script>

<style scoped>
.toast-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 60px);
}
.toast {
  color: white;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
}
.slide-up-enter-active {
  transition:
    transform 0.5s,
    opacity 0.5s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
