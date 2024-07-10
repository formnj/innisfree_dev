<template>
  <div class="inner">
    <InmButton @click="openModal">제품 구분</InmButton>
    <InmModal
      v-model="showModal"
      class="modal_sort"
      :header="true"
      :footer="false"
      :overlay="true"
      :type="'bottom '"
      :close-button="false"
      :dim-closeble="true"
      ok-button-text=""
      close-button-text="">
      <div>
        <ul>
          <li class="active"><a href="#none" class="active">랭킹순</a></li>
          <li><a href="#none">추천순</a></li>
          <li><a href="#none">판매금액순</a></li>
          <li><a href="#none">판매수량순</a></li>
          <li><a href="#none">할인율순</a></li>
          <li><a href="#none">최신순</a></li>
          <li><a href="#none">리뷰많은순</a></li>
          <li><a href="#none">낮은가격순</a></li>
          <li><a href="#none">높은가격순</a></li>
        </ul>
      </div>
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
  &.modal_sort {
    .modal_container {
      .modal_content {
        padding: 0;
        height: calc(100% - 29.4px);
        overflow-y: auto;
        div {
          ul {
            li {
              padding: 16px 28px;
              border-bottom: 1px solid #f5f5f5;
              &:last-of-type {
                border-bottom: 0;
              }
              &.active {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &::after {
                  content: '';
                  width: 1.6rem;
                  height: 1.6rem;
                  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -8.05rem -7rem;
                  display: inline-block;
                }
                a {
                  color: #00bc70;
                  font-weight: 700;
                }
              }
              a {
                color: #000000;
                font-weight: 300;
                font-size: 16px;
                line-height: 17.5px;
                letter-spacing: -0.14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
