<template>
  <button ref="wrapper" :class="[$attrs.class ? $attrs.class : 'btn_']">
    <em>
      <slot v-if="hasSlot" />
      <template v-else>{{ txt }}</template>
    </em>
  </button>
</template>

<script setup>
import { ref, useSlots, computed } from '#imports'
defineProps({ txt: { type: String, default: '' } })
const slots = useSlots()

const hasSlot = computed(() => {
  return !!slots.default
})

const wrapper = ref(null)

defineExpose({ wrapper })
</script>

<style lang="scss" scoped>
/* Button : size = [_big, _mid, min] / border = [_outline] */
[class*='btn_'] {
  height: 40px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  em {
    padding: 0 20px;
    color: #fff;
    display: block;
  }
  &[class*='_outline'] {
    background-color: transparent !important;
    border: 1px solid #222;
    em {
      color: #222;
    }
  }
  &[class*='_big'] {
    height: 60px;
  }
  &[class*='_mid'] {
    height: 50px;
  }
  &[class*='_min'] {
    height: 30px;
    border-radius: 1px;
  }
  &[class*='_sm'] {
    height: 24px;
    border-radius: 1px;
  }
  &[class*='_txt'] {
    height: auto;
    background-color: transparent;
    em {
      padding: 0;
      color: #000;
    }
  }

  &:disabled {
    border-color: #ccc;
    background-color: #ccc;
    cursor: default;

    &[class*='_outline'] {
      em {
        color: #ccc;
      }
    }
  }

  /* background-color */
  &.confirm {
    background-color: #00bc70;
    em {
      color: #fff;
    }
    &[class*='_outline'] {
      border-color: #00bc70;
      em {
        color: #00bc70;
      }
    }
  }
}
</style>
