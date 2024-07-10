<template>
  <div class="label_wrap">
    <label class="input">
      <i v-if="props.placeholder" v-show="showPlaceholder">{{ placeholder }}</i>
      <input v-model="model" :type="showingInputType" @focus="togglePlaceholder" />
      <button v-show="model" :class="toggleButtonClass" @click="toggleType">Delete</button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from '#imports'

interface IInputPasswordProps {
  placeholder?: string
}

const props = defineProps<IInputPasswordProps>()
const model = defineModel<string | number>()

const showingInputType = ref<string>('password')

const toggleType = () => {
  showingInputType.value = ['password', 'text'][+(showingInputType.value === 'password')]
}

const toggleButtonClass = computed(() => ['icon_text', 'icon_pass'][+(showingInputType.value === 'password')])

/** placeholder toggle */
const showPlaceholder = ref<boolean>(true)

const togglePlaceholder = (event) => {
  const eventType: string = event.type
  if (eventType === 'focus') {
    showPlaceholder.value = false
  }
}

watch(
  model,
  () => {
    showPlaceholder.value = !model.value
  },
  { immediate: true }
)
/** //placeholder toggle */
</script>

<style scoped>
label.input input[type='text'] {
  width: 100%;
  font-size: 16px;
  line-height: 18px;
}
label.input > div {
  position: relative;
  display: block;
}
label.input i {
  color: #aaa;
  font-size: 16px;
  font-style: normal;
  line-height: 18px;
  position: absolute;
  top: 20px;
  left: 15px;
  transform: translateY(-50%);
} /* placeholder */
label.input input[type='password'] {
  width: 100%;
  font-size: 16px;
  line-height: 18px;
}
label.input .err_txt {
  margin-top: 5px;
  color: #ff7200;
  font-size: 12px;
  line-height: 18px;
  display: none;
}
label.input.err .err_txt {
  display: block;
}
label.input * {
  flex: 1 auto;
}
.label_wrap {
  position: relative;
  flex: 1;
}
.label_wrap button[class*='icon_'] {
  width: 24px;
  height: 24px;
  font-size: 0;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: absolute;
  top: 9px;
  right: 15px;
  z-index: 1;
}
.label_wrap button[class*='icon_'] + button[class*='icon_'] {
  margin-right: 34px;
}
.label_wrap button[class*='icon_'] {
  background-image: url('@inmModule/assets/images/common/icon_split.png');
  background-repeat: no-repeat;
  background-size: 250px auto;
}
.label_wrap button.icon_del {
  background-position: 0 0;
}
.label_wrap button.icon_pass {
  background-position: -80px 0;
}
.label_wrap button.icon_text {
  background-position: -40px 0;
}
</style>
