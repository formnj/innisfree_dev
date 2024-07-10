<template>
  <div class="input_wrap">
    <div class="label_wrap">
      <label class="input">
        <div class="roll">
          <ul>
            <transition-group name="placeholder" tag="ul">
              <li v-for="item in visibleItems" :key="item.id">
                {{ item.text }}
              </li>
            </transition-group>
          </ul>
        </div>
        <input v-model="searchValue" type="text" @focus="focus" @blur="blur" />
        <button
          class="icon_del"
          @click="
            () => {
              console.log(searchValue)
            }
          ">
          Delete
        </button>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from '#imports'

interface ISearchInputPlaceHolder {
  id: string | number
  text?: string
  url?: string
}

const emit = defineEmits(['focus', 'blur'])
const searchValue = defineModel<string>('')

const focus = () => {
  emit('focus')
}
const blur = () => {
  emit('blur')
}

const searchPlaceholder = ref<Array<ISearchInputPlaceHolder>>([])

const visibleItems = ref<Array<ISearchInputPlaceHolder>>([])
let currentIndex = 0
let intervalId: any = null

const startRolling = () => {
  intervalId = setInterval(() => {
    // 다음 인덱스 계산
    const nextIndex = (currentIndex + 1) % searchPlaceholder.value.length
    // 현재 아이템을 다음 아이템으로 교체
    visibleItems.value = [searchPlaceholder.value[nextIndex]]
    // 인덱스 업데이트
    currentIndex = nextIndex
  }, 3000) // 3초마다 롤링
}

onMounted(() => {
  console.log('searchPlaceholder.value', searchPlaceholder.value)
  searchPlaceholder.value = [
    { id: 1, text: '키워드1' },
    { id: 2, text: '키워드2' },
    { id: 3, text: '키워드3' }
  ]

  if (searchPlaceholder.value.length > 1) {
    visibleItems.value = [searchPlaceholder.value[0]] // 초기 아이템 설정

    startRolling()
  }
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
<style lang="scss" scoped>
.input_wrap {
  flex: 1;
  label.input {
    position: relative;
    display: block;
  }
  label.input {
    .roll {
      height: 100%;
      overflow: hidden;
      position: absolute;
      left: 15px;
      pointer-events: none;
      ul {
        li {
          height: 38px;
          color: #aaa;
          font-size: 14px;
          font-style: normal;
          line-height: 20px;
          display: flex;
          align-items: center;
        }
      }

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
      outline: none;
      border: none;
    }
    * {
      flex: 1 auto;
    }
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
    right: 0;
    z-index: 1;
    display: none;
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

.placeholder-enter-active,
.placeholder-leave-active {
  transition: transform 0.5s ease-in-out;
}

.placeholder-enter-from {
  transform: translateY(100%);
}

.placeholder-enter-to,
.placeholder-leave-from {
  transform: translateY(0);
}

.placeholder-leave-to {
  transform: translateY(-100%);
}
</style>
