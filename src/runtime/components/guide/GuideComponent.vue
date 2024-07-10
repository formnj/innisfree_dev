<template>
  <div class="component-guide">
    <h1>{{ title }}</h1>
    <ul v-if="descriptions?.length" class="description-list">
      <li v-for="(desc, index) in descriptions" :key="index">{{ desc }}</li>
    </ul>
    <div v-if="hasDefaultSlot" class="playground">
      <slot />
    </div>
    <div v-if="$slots.controls">
      <h3>Controls</h3>
      <div class="controls">
        <slot name="controls" />
      </div>
    </div>
    <button class="toggle-button" @click="toggleCode">
      {{ showCode ? 'Hide Code' : 'Show Code' }}
    </button>
    <transition name="fade">
      <div v-if="showCode" class="code-container">
        <div class="code-header">
          <span class="code-title">Code</span>
          <button class="copy-button" @click="copyCode">Copy</button>
        </div>
        <pre><code>{{ formattedCode }}</code></pre>
      </div>
    </transition>
    <div v-if="options?.length" class="options">
      <h3>Options</h3>
      <ul>
        <li v-for="(option, index) in options" :key="index">{{ option }}</li>
      </ul>
    </div>
    <div v-if="propsData?.length" class="props">
      <h3>Props</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prop, index) in propsData" :key="index">
            <td>{{ prop.name }}</td>
            <td>{{ prop.type }}</td>
            <td>{{ prop.default }}</td>
            <td>{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="eventsData && eventsData.length" class="events">
      <h3>Event Handlers</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in eventsData" :key="index">
            <td>{{ event.name }}</td>
            <td>{{ event.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="slotsData && slotsData.length" class="events">
      <h3>Slots</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(slot, index) in slotsData" :key="index">
            <td>{{ slot.name }}</td>
            <td>{{ slot.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from '#imports'

interface Prop {
  name: string
  type?: string
  default?: string | number
  description?: string
}

interface Event {
  name: string
  description: string
}

interface Slot {
  name: string
  description: string
}

interface Props {
  title: string
  initialCode: string
  descriptions?: string[]
  options?: string[]
  propsData?: Prop[]
  eventsData?: Event[]
  slotsData?: Slot[]
  initialShowCode?: boolean
}

const props = defineProps<Props>()

const showCode = ref(props.initialShowCode || false)
const toggleCode = () => {
  showCode.value = !showCode.value
}

const hasDefaultSlot = ref(true)

onMounted(() => {
  const slotEl = document.querySelector('.playground')
  if (slotEl && slotEl.innerHTML.trim()) {
    hasDefaultSlot.value = true
  }
})

const formattedCode = computed(() => {
  return props.initialCode.trim()
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(formattedCode.value)
    alert('Code copied to clipboard')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 16px;
  color: #2c3e50;
  text-align: center;
  background: linear-gradient(90deg, #4caf50, #2196f3);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.component-guide {
  border: 1px solid #e1e1e1;
  padding: 24px;
  border-radius: 8px;
  background-color: #fafafa;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5em;
  margin-bottom: 16px;
}
.description-list {
  margin: 16px 0;
  padding-left: 20px;
  list-style-type: disc;
}

.description-list li {
  margin-bottom: 8px;
}
.controls {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
  max-height: 300px;
  overflow-y: auto;
}
.controls h3 {
  font-size: 1.25em;
  margin-bottom: 16px;
}

.playground {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
}

.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 16px;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.code-container {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #f4f4f4;
  margin-bottom: 16px;
  position: relative;
}

.code-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
}

.code-title {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #c7b8b8;
  padding: 0 8px;
  font-weight: bold;
}

.copy-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.copy-button:hover {
  background-color: #218838;
}

.options,
.props,
.events {
  margin-top: 24px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
}

table,
th,
td {
  border: 1px solid #e1e1e1;
}

th,
td {
  padding: 12px;
  text-align: left;
}

thead {
  background-color: #f9f9f9;
}

h3 {
  font-size: 1.25em;
  margin-bottom: 8px;
}

ul {
  list-style: disc inside;
  margin: 0;
  padding: 0;
}

ul li {
  margin-bottom: 4px;
}

pre {
  margin: 0;
  white-space: pre-wrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
