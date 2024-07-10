<template>
  <div class="multi-combo-box">
    <div ref="selectedOptionsRef" class="selected-options" @click.stop="toggleDropdown">
      <span v-for="option in selectedOptions" :key="option">{{ option }}</span>
      <span class="arrow-indicator">▼</span>
    </div>
    <div class="options-dropdown" v-if="isDropdownVisible">
      <div v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from '#imports'

const options = ref(['Option 1', 'Option 2', 'Option 3']) // Example options
const selectedOptions = ref([])
const dropdownVisible = ref(false)
const selectedOptionsRef = ref(null) // Reference to the selected-options element

// Computed property to filter out selected options
const availableOptions = computed(() => {
  return options.value.filter((option) => !selectedOptions.value.includes(option))
})

// Computed property to control the visibility of the dropdown
const isDropdownVisible = computed({
  get: () => dropdownVisible.value,
  set: (value) => {
    if (!value || !selectedOptionsRef.value.contains(document.activeElement)) {
      dropdownVisible.value = value
    }
  }
})

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value
}

function selectOption(option) {
  if (!selectedOptions.value.includes(option)) {
    selectedOptions.value.push(option)
  } else {
    // selectedOptions.value = selectedOptions.value.filter((o) => o !== option);
    selectedOptions.value = availableOptions.value
  }
}

function onBackgroundClick(event) {
  if (selectedOptionsRef.value && !selectedOptionsRef.value.contains(event.target)) {
    dropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onBackgroundClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onBackgroundClick)
})
</script>

<style>
.multi-combo-box {
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  user-select: none;
}
.selected-options {
  min-height: 20px;
}
.options-dropdown {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}
.arrow-indicator {
  float: right;
}
</style>
