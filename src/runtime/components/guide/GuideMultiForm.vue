<template>
  <section>
    <h2>Multi form</h2>
    <div class="design_box">
      <ul class="form_group">
        <li>
          <p class="form_tit">검색어를 입력 하세요</p>
          <InmSingleInputEvent v-model="singleInputEventValue" placeholder="문구를 입력 해주세요." @click="getSingleInputEventValue" />
        </li>
      </ul>
    </div>
    <pre
      class="code_box"><code>&lt;InmSingleInputEvent v-model="singleInputEventValue" placeholder="문구를 입력 해주세요." @click="getSingleInputEventValue"/&gt;</code></pre>
  </section>
</template>
<script setup lang="ts">
import { ref } from '#imports'

const singleInputEventValue: Ref<string> = ref('')
const getSingleInputEventValue = (value: string) => {
  if (!value) {
    return
  }
  alert(`input 값은 ${value} 입니다`)
}
</script>
