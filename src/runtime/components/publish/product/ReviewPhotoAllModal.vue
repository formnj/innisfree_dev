<template>
  <div id="modal_photo_review_all" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>포토리뷰 모아보기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="list_photo_wrap">
          <ul>
            <li v-for="(item, idx) in samplePost" :key="idx">
              <ProductReviewPhotoList :item="item" :idx="idx" :isAll="true" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { samplePost } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  item: {},
  idx: Number
})
</script>
<style lang="scss" scoped>
.modal_wrap {
  .modal_container {
    width: 550px;
    .modal_content {
      padding: 20px 30px;
      max-height: 700px;

      .list_photo_wrap {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 5px;

          li {
            width: 116px;
            height: 116px;
          }
        }
      }
    }
  }
}
</style>
