<template>
  <div class="inner">
    <Button txt="메인 전체보기 팝업" @click="openModal" />

    <InmModal
      v-model="showModal"
      class="modal_visual"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="modalType"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="확인"
      close-button-text="취소"
      :style="style">
      <template #header><h2>전체보기</h2></template>
      <ul class="visual_list">
        <li v-for="(item, idx) in mainSam.visual" :key="idx">
          <a href="#none" class="item">
            <!-- item text content -->
            <div class="cont">
              <p class="name">
                <strong>{{ item.name[0] }}</strong>
                <span>{{ item.name[1] }}</span>
              </p>
            </div>
            <!-- //item text content -->
            <!-- visual image -->
            <span class="thumb">
              <em><img :src="item.img" /></em>
            </span>
            <!-- //visual image -->
          </a>
        </li>
      </ul>
    </InmModal>
  </div>
</template>

<script setup>
import { definePageMeta, ref } from '#imports'

import { mainSam } from '@inmModule/test/data/publish/dummyData'

definePageMeta({
  layout: 'publish-mo-main'
})

// 모달 변수
const closeButton = ref(true)
const dimCloseble = ref(true)

const style = reactive({ top: ``, left: `` })

const showModal = ref(false)
const showHeader = ref(true)
const showFooter = ref(false)
const showOverlay = ref(false)
const modalType = ref('fullMo')

const openModal = (event) => {
  if (modalType.value === 'layer') {
    const target = event.target
    style.top = `${target.offsetTop}px`
    style.left = `${target.offsetLeft}px`
  } else {
    style.top = ''
    style.left = ''
  }

  showModal.value = true
}
</script>

<style lang="scss" scoped>
.visual_list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
  > li {
    width: calc(50% - 0.05rem);
    a {
      position: relative;
      .thumb img {
        vertical-align: top;
      }
      .cont {
        position: absolute;
        bottom: 3rem;
        left: 2.1rem;
        .name {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.38rem;
          > * {
            display: block;
          }
        }
      }
    }
  }
}
</style>
