<template>
  <div class="inner">
    <InmButton @click="openModal">필터</InmButton>

    <InmModal
      v-model="showModal"
      class="filter"
      :header="true"
      :footer="true"
      :overlay="true"
      :type="'bottom '"
      :close-button="true"
      :dim-closeble="true"
      ok-button-text="99개 제품보기"
      close-button-text="초기화">
      <template #header>
        <h2>필터</h2>
        <button class="btn_close"><span>닫기</span></button>
      </template>
      <p>혜택별</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a00" _text="증정" class="round_square" />
        </li>
      </ul>

      <p>유형별</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a01" _text="스킨케어" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a02" _text="메이크업" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a03" _text="남성" class="round_square" />
        </li>
      </ul>

      <p>고민별</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a04" _text="수분/보습/속건조" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a05" _text="잡티/피부톤" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a06" _text="각질/피부결" class="round_square" />
        </li>
      </ul>

      <p>라인별</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a07" _text="비타C" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a08" _text="레티놀 시카" class="round_square" />
        </li>
      </ul>

      <p>기능성</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a09" _text="자외선차단" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a10" _text="주름개선" class="round_square" />
        </li>
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a11" _text="미백" class="round_square" />
        </li>
      </ul>

      <p>공병수거</p>
      <ul class="pick_list">
        <li>
          <Inputs _type="checkbox" _name="filter" _id="a12" _text="공병수거" class="round_square" />
        </li>
      </ul>
    </InmModal>
  </div>
</template>
<script setup>
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-mo-search'
})

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
</script>
<style lang="scss" scoped>
:deep(.modal_wrap) {
  &.filter {
    .modal_header {
      .btn_close {
        &:before {
          content: '';
          width: 100%;
          height: 0.1rem;
          background-color: #000;
          position: absolute;
          top: 50%;
          left: 50%;
        }

        &:before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }

    .modal_footer {
      button {
        height: 6rem;

        &:first-child {
          flex: 0 0 13.5rem;
          background-color: #eee;

          em {
            color: #666;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;

            &:before {
              content: '';
              width: 2.4rem;
              height: 2.4rem;
              background: url('@inmModule/assets/mo_images/common/icon_split.png') -13.5rem -25.5rem / 25rem auto no-repeat;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
