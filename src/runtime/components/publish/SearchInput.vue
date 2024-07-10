<template>
  <!-- search input -->
  <div class="input_wrap">
    <div class="label_wrap">
      <label class="input">
        <!-- 검색 롤링 -->
        <div class="roll">
          <ul ref="roll_con">
            <li v-for="(item, idx) in searchPlaceholder" :key="idx">
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
        <input v-model="input_value" type="text" @focus="hidePlaceholder" @blur="valueChk" @keyup="input_btn_chk" />
        <button class="icon_del" @click="input_btn_fn">Delete</button>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from '#imports'

const props = defineProps({
  searchPlaceholder: {
    type: Array,
    default() {
      return []
    }
  } // 검색영역 롤링 문구
})

const input_value = ref('')

const hidePlaceholder = (e) => {
  //focus시 placeholder 숨김
  if (e.currentTarget.parentElement.querySelectorAll('.roll').length > 0) {
    e.currentTarget.previousSibling.classList.add('hide')
  }
}

const valueChk = (e) => {
  //blur 시 value 유무 확인하여 placeholder 조절
  // console.log(e.currentTarget.value.length);
  if (e.currentTarget.value.length > 0) {
    if (e.currentTarget.parentElement.querySelectorAll('.roll').length > 0) {
      e.currentTarget.previousSibling.classList.add('hide')
    }
  } else {
    if (e.currentTarget.parentElement.querySelectorAll('.roll').length > 0) {
      e.currentTarget.previousSibling.classList.remove('hide')
    }
  }
}

const input_btn_chk = (e) => {
  //keypress 시 value 유무 확인하여 버튼 노출 조절
  const icon_button = e.currentTarget.closest('.label_wrap').querySelector('button')
  if (e.currentTarget.value.length > 0) {
    icon_button.classList.add('active')
  } else {
    icon_button.classList.remove('active')
  }
}

const input_btn_fn = (e) => {
  //label_wrap의 버튼 클릭 시 각 기능
  const icon_button = e.currentTarget.closest('.label_wrap').querySelector('button')
  if (icon_button.getAttribute('class').indexOf('icon_del') > -1) {
    //value 삭제
    input_value.value = ''
    icon_button.classList.remove('active')
    if (e.currentTarget.parentElement.querySelectorAll('.roll').length > 0) {
      e.currentTarget.closest('.label_wrap').querySelector('.roll').classList.remove('hide')
    }
  }
}

// 검색 롤링
const roll_con = ref(null)
const roll_idx = ref(0)
const roll_time = ref(3000)
const roll_fn = () => {
  const roll_child = roll_con.value.children
  const roll_height = roll_child[0].clientHeight

  roll_idx.value++
  roll_con.value.style.cssText = `transform: translateY(-${roll_height * roll_idx.value}px); transition: all 0.5s ease;`

  roll_con.value.addEventListener('transitionend', () => {
    if (roll_idx.value >= roll_child.length - 1) {
      roll_con.value.style.cssText = `transform: translateY(0); transition: unset;`
      roll_idx.value = 0
    }
  })
}

onMounted(() => {
  if (props.searchPlaceholder.length >= 2) {
    // 검색 롤링 이벤트 element 추가
    roll_con.value.append(roll_con.value.children[0].cloneNode(true))
    let key_rolling = setInterval(roll_fn, roll_time.value)
    document.querySelector('.input input').addEventListener('focus', () => clearInterval(key_rolling), true)
    document.querySelector('.input input').addEventListener('blur', () => (key_rolling = setInterval(roll_fn, roll_time.value)), true)
  }
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
      ul {
        li {
          height: 38px;
          display: flex;
          align-items: center;

          span {
            color: #aaa;
            font-size: 14px;
            font-style: normal;
            line-height: 20px;
            white-space: nowrap;
            letter-spacing: -0.01em;
          }
        }
      }

      &.hide {
        display: none;
      }
    }
    input[type='text'] {
      width: 100%;
      font-size: 16px;
      line-height: 18px;
      outline: none;
      border: none;
    }
    * {
      flex: 1 auto;
      background: transparent;
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
</style>
