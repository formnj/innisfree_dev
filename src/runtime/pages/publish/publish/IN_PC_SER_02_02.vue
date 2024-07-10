<template>
  <div class="inner">
    <InmButton @click="openModal">필터</InmButton>

    <InmModal
      v-model="showModal"
      class="filter"
      :header="true"
      :footer="true"
      :overlay="true"
      :type="'detailSearch'"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="00개 제품보기"
      close-button-text="초기화">
      <template #header><h2>필터</h2></template>
      <p>혜택별</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a00" _text="증정" class="round_square" /></li>
      </ul>
      <p>유형별</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a02" _text="스킨케어" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a03" _text="메이크업" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a04" _text="남성" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a05" _text="헤어/바디/펫" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a06" _text="기획 세트" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a07" _text="미용소품" class="round_square" /></li>
      </ul>
      <p>고민별</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a08" _text="트러블/리페어" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a09" _text="영양/토탈안티에이징" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a10" _text="잡티/피부톤" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a11" _text="주름/탄력" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a12" _text="트러블" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a13" _text="진정/민감" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a14" _text="수분/보습/건조" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a15" _text="트러블/리페어" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a16" _text="각질/피부결" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a17" _text="모공/피지/블랙헤드" class="round_square" /></li>
      </ul>
      <p>라인별</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a18" _text="그린티" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a19" _text="블랙티" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a20" _text="콜라겐" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a21" _text="레티놀 시카" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a22" _text="비자" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a23" _text="노세범" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a24" _text="비타C" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a25" _text="제주 왕벚꽃" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a26" _text="포레스트 포맨" class="round_square" /></li>
      </ul>
      <p>기능성</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a27" _text="자외선차단" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a28" _text="주름개선" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a29" _text="미백" class="round_square" /></li>
        <li><Inputs _type="checkbox" _name="filter" _id="a30" _text="비건인증" class="round_square" /></li>
      </ul>
      <p>공병수거</p>
      <ul class="pick_list">
        <li><Inputs _type="checkbox" _name="filter" _id="a31" _text="공병수거" class="round_square" /></li>
      </ul>
    </InmModal>
  </div>
</template>

<script setup>
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const showModal = ref(false)
const openModal = () => {
  showModal.value = true
}
</script>

<style lang="scss" scoped>
:deep(.modal_wrap) {
  .modal_container {
    .modal_content {
      padding: 40px 40px 100px;
    }

    .modal_footer {
      button {
        flex: 1;
        height: 6rem;

        &:first-child {
          flex: 0 0 180px;
          background-color: #eee;

          em {
            color: #666;
            display: inline-flex;
            align-items: center;
            gap: 5px;

            &:before {
              content: '';
              width: 24px;
              height: 24px;
              background: url('@inmModule/assets/images/common/icon_split.png') -170px -95px / 250px auto no-repeat;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
