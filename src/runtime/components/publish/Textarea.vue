<template>
  <div class="label_wrap">
    <label class="input" :class="{ err: isError }">
      <i v-if="_placeholder && !isDisabled">{{ _placeholder }}</i>
      <textarea
        :id="_id"
        :value="_value"
        @focus="hidePlaceholder"
        @blur="valueChk"
        @keyup="input_btn_chk"
        :readonly="isReadonly"
        :disabled="isDisabled"
        :rows="_rows" />
      <em v-if="isError" class="err_txt">{{ _err_text }}</em>
      <button class="icon_del" v-if="_type != 'password'" @click="input_btn_fn">Delete</button>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  _id: String, //input ID
  _name: String, // Input NAME
  _placeholder: String, // Input PLACEHOLDER
  _value: null, // Input VALUE
  _err_text: String, // 오류 시 노출 문구
  isError: false, // 오류 여부
  isReadonly: false, // readonly 여부
  isDisabled: false, // disabled 여부
  isRrequired: false, // 필수값 여부
  _rows: Number, //textarea 라인 수
  _type: String
})

const hidePlaceholder = (e) => {
  //focus시 placeholder 숨김
  if (e.currentTarget.parentElement.querySelectorAll('i').length > 0) {
    e.currentTarget.previousSibling.classList.add('hide')
  }
}

const valueChk = (e) => {
  //blur 시 value 유무 확인하여 placeholder 조절
  // console.log(e.currentTarget.value.length);
  if (e.currentTarget.value.length > 0) {
    if (e.currentTarget.parentElement.querySelectorAll('i').length > 0) {
      e.currentTarget.previousSibling.classList.add('hide')
    }
  } else {
    if (e.currentTarget.parentElement.querySelectorAll('i').length > 0) {
      e.currentTarget.previousSibling.classList.remove('hide')
    }
  }
}

const input_btn_chk = (e) => {
  //keypress 시 value 유무 확인하여 버튼 노출 조절
  var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button')
  if (e.currentTarget.value.length > 0) {
    icon_button.classList.add('active')
  } else {
    icon_button.classList.remove('active')
  }
}

const input_btn_fn = (e) => {
  //label_wrap의 버튼 클릭 시 각 기능
  var icon_button = e.currentTarget.closest('.label_wrap').querySelector('button')
  if (icon_button.getAttribute('class').indexOf('icon_del') > -1) {
    //value 삭제
    e.currentTarget.closest('.label_wrap').querySelector('textarea').value = null
    icon_button.classList.remove('active')
    if (e.currentTarget.parentElement.querySelectorAll('i').length > 0) {
      e.currentTarget.closest('.label_wrap').querySelector('i').classList.remove('hide')
    }
  }
}
</script>
<style lang="scss" scoped>
label.input {
  position: relative;
  display: block;
  i {
    color: #aaa;
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    &.hide {
      display: none;
    }
  }
  textarea {
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 18px;
    resize: none;
  }
}

.label_wrap {
  position: relative;
  flex: 1;
  em {
    font-style: normal;
  }
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
