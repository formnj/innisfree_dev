<template>
  <div class="label_wrap">
    <label class="input">
      <i v-if="props.placeholder" v-show="showPlaceholder">{{ placeholder }}</i>
      <input
        v-model="model"
        :type="showingInputType"
        :maxlength="maxlength"
        @focus="togglePlaceholder"
        @blur="togglePlaceholder"
        @change="
          (e) => {
            emit('change', e)
          }
        "
        @input="
          (e) => {
            emit('input', e)
          }
        " />
      <button v-show="model" :class="toggleButtonClass" @click="toggleType">Delete</button>
    </label>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, ref } from '#imports'

interface IInputPasswordProps {
  maxlength?: number | string
  placeholder?: string
}

const emit = defineEmits(['focus', 'blur', 'input', 'change'])

const props = defineProps<IInputPasswordProps>()
const model = defineModel<string | number>()

const showingInputType = ref<string>('password')

const toggleType = () => {
  showingInputType.value = ['password', 'text'][+(showingInputType.value === 'password')]
}

const toggleButtonClass = computed(() => ['icon_text', 'icon_pass'][+(showingInputType.value === 'password')])

/** placeholder toggle */
const showPlaceholder = ref<boolean>(true)

const togglePlaceholder = (event: FocusEvent) => {
  const eventType: string = event.type
  if (eventType === 'focus') {
    emit('focus')
    showPlaceholder.value = false
  }

  if (eventType === 'blur' && !model.value) {
    emit('blur')
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
input[type='text']:disabled {
  background-color: #eee !important;
  border-color: #ddd !important;
}
label.input,
label.select > div {
  position: relative;
  display: block;
}
label.input {
  i {
    color: #aaa;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    position: absolute;
    top: 20px;
    left: 15px;
    display: block;
    transform: translateY(-50%);
    &.hide {
      display: none;
    }
  }
  input[type='text'],
  input[type='password'],
  input[type='number'] {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
  }
  * {
    flex: 1 auto;
  }
}
.label_wrap {
  position: relative;
  flex: 1;
  button[class*='icon_'] {
    width: 24px;
    height: 24px;
    font-size: 0;
    background-image: url('@inmModule/assets/images/common/icon_split.png');
    background-repeat: no-repeat;
    background-size: 250px auto;
    border-radius: 50%;
    position: absolute;
    top: 9px;
    right: 15px;
    z-index: 1;
    & + button[class*='icon_'] {
      margin-right: 34px;
    }
    &.active {
      display: block;
    }
    &.icon_del {
      background-position: 0 0;
    }
    &.icon_pass {
      background-position: -80px 0;
    }
    &.icon_text {
      background-position: -40px 0;
    }
  }
}
</style>
