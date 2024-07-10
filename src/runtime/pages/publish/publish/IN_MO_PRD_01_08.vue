<template>
  <section>
    <h3>블랙티 유스 인핸싱 앰플 30mL</h3>
    <div v-for="(item, idx) in sample_review.slice(1, 2)" :key="idx">
      <div class="review_header">
        <div class="rate">
          <Reviewpoint :width="item.rate" />
        </div>
        <strong class="buy_cnt"><em>1</em>회 구매</strong>
      </div>

      <div class="review_header">
        <div class="user_info">
          <span class="name">{{ item.user }}</span>
          <span class="age">{{ item.age }}</span>
          <span class="type">{{ item.type }}</span>
          <span class="date ar">{{ item.date }}</span>
        </div>
      </div>

      <ProductReview :item="item" :isMo="true" :isPage="true" />
      <!-- 리뷰 -->

      <div class="btn_area">
        <div class="btn_wrap">
          <button v-if="!item.writer" type="button" @click="modal.open('modal_review_report', 'alert modal_review_report')">신고</button>
          <button v-if="!item.writer" type="button">차단</button>
          <button v-if="item.writer" type="button"><em>수정</em></button>
          <button v-if="item.writer" type="button"><em>삭제</em></button>
        </div>
      </div>
    </div>
  </section>

  <ProductReviewReport />
  <!-- 신고 팝업 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { sample_review } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const props = defineProps({
  item: {}
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '리뷰 보기')
})
</script>
<style lang="scss" scoped>
section {
  padding: 2rem 2.1rem;

  h3 {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    font-size: 1.3rem;
    line-height: 2rem;
    border-bottom: 1px solid #000;
  }

  .review_header {
    display: flex;
    justify-content: space-between;

    .buy_cnt {
      font-size: 1.2rem;

      em {
        color: #00bc70;
      }
    }

    .user_info {
      .date:before {
        display: none;
      }
    }
  }

  :deep(.review) {
    .review_photo_list_wrap {
      margin: 0 -2.1rem;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        width: 0;
      }

      .review_photo_list {
        margin: 0 2.1rem 3rem;

        li {
          width: 25.5rem;
          height: auto;
          flex-shrink: 0;
        }
      }
    }
  }

  .btn_area {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 1.2rem;
      color: #999;

      &.btn_more {
        &:after {
          content: '';
          width: 0.8rem;
          height: 0.8rem;
          margin-left: 0.8rem;
          border-bottom: 1px solid #999;
          border-left: 1px solid #999;
          display: inline-block;
          transform: rotate(-45deg);
          position: relative;
          top: -0.2rem;
          transition: all 0.3s;
        }

        &.open {
          &:after {
            transform: rotate(135deg);
            top: 0.2rem;
          }
        }
      }

      em {
        color: #000;
        font-weight: 600;
      }
    }

    .btn_wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;

      & > button {
        & + button:before {
          content: '';
          width: 0.1rem;
          height: 1rem;
          margin: 0 1.5rem;
          background-color: #eee;
          display: inline-block;
        }
      }
    }
  }

  :deep(.review) {
    .review_photo_list_wrap {
      display: flex;
      .review_photo_list {
        margin: 0 2.1rem 3rem;
        li {
          .img_wrap {
            width: 25.5rem;
            height: 18rem;
            text-align: center;
            background-color: #000;

            img {
              height: 100%;
              width: auto;
            }
          }
        }
      }
    }
  }
}
</style>
