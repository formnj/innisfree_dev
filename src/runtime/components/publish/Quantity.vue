<template>
  <div class="count_wrap">
    <Button class="btn_dec" txt="-" :disabled="_disabled" @click="decrease" />
    <Inputs :_id="_id" :_value="quantity" :isDisabled="_disabled" />
    <Button class="btn_inc" txt="+" @click="increase" :disabled="_disabled" />
  </div>
</template>

<script setup>
  const props = defineProps({
    _id: String,
    quantity: {
      type: Number,
      default:0
    },
    _disabled: String,
  });

  const increase = (e) => {
    const inputs = e.currentTarget.closest('.count_wrap').querySelector('input');
    inputs.value = Number(inputs.value)+1;
  }

  const decrease = (e) => {
    const inputs = e.currentTarget.closest('.count_wrap').querySelector('input');
    if(inputs.value > 1) {
      inputs.value = Number(inputs.value)-1;
    }
  }
</script>

<style lang="scss" scoped>
.count_wrap {
  border:1px solid #eee;
  display:flex;
  :deep(button) {
    width:45px;
    background-color:#fff;

    &:disabled {
      background-color:#f5f5f5;

      em {
        color: #aaa;
      }
    }

    em {
      font-size: 20px;
      padding:0;
      color:#000;
    }
    &.icon_del {
      display:none !important;
    }
  }
  :deep(.input_wrap) {
    input {
      padding:0;
      border:0;
      text-align:center;

      &:disabled {
        color: #aaa;
        background-color:#f5f5f5 !important;
      }
    }
  }
}
</style>
