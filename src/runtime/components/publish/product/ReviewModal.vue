<template>
  <div id="modal_review" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>제품명</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div v-for="(item, idx) in sample_review.slice(0, 1)" :key="idx" class="review_list">
          <div class="review_header">
            <div class="user_info">
              <span class="name">{{ item.user }}</span>
              <div class="rate">
                <Reviewpoint :width="item.rate" />
              </div>
              <span class="date">{{ item.date }}</span>
            </div>

            <div class="btn_wrap">
              <button type="button" class="btn_share">공유하기</button>
            </div>
          </div>
          <div class="review_header">
            <div class="user_info">
              <span class="age">{{ item.age }}</span>
              <span class="type">{{ item.type }}</span>
            </div>
            <div class="btn_wrap">
              <button type="button">신고</button>
              <button type="button">차단하기</button>
            </div>
          </div>
          <ProductReview :item="item" :isSwiper="true" :isMo="isMo" />
          <!-- 리뷰 -->
        </div>

        <div v-if="!isMo" class="list_wrap type_column">
          <ul class="goods_list">
            <li v-for="(item2, idx2) in sample_goods.slice(2, 4)" :key="idx2">
              <GoodsItem :item="item2" :link="item2.link" :use-err-txt="true" class="type_column" />
            </li>
            <li v-for="(item2, idx2) in sample_goods.slice(5, 6)" :key="idx2">
              <GoodsItem :item="item2" :link="item2.link" :use-err-txt="true" class="type_column" />
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
import { sample_review, sample_goods } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  item: {},
  idx: Number,
  isModal: {
    type: Boolean,
    default: false
  },
  isMo: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.modal_wrap {
  .modal_container {
    width: 540px;

    .modal_content {
      padding: 20px 30px;
      max-height: 700px;

      .review_list {
        :deep(.review) {
          .option_name {
            color: #888;
            font-weight: 400;

            em {
              font-weight: 600;
              color: #333;
              vertical-align: middle;

              &:before {
                content: '';
                width: 1px;
                height: 10px;
                margin: 0 10px;
                background-color: #eee;
                display: inline-block;
              }
            }
          }

          .txt {
            font-size: 13px;
            line-height: 20px;
          }
        }
      }

      .list_wrap.type_column {
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px solid #eee;
        position: relative;

        .goods_list {
          gap: 5px;
        }

        li {
          width: 100%;
        }

        :deep(.goods_item) {
          align-items: center;

          .img_wrap {
            position: static;

            .thumb {
              width: 90px;
            }

            .btnIconBox {
              width: 24px;
              display: flex;
              flex-direction: column;
              position: absolute;
              right: 0;
              top: 50%;
              bottom: auto;
              left: auto;
              transform: translateY(-50%);

              li:nth-child(2),
              li:nth-child(3) {
                display: none;
              }
            }
          }

          .cont {
            margin-top: 0;

            .price {
              margin-bottom: 0;
              > * {
                font-size: 14px;
              }

              em {
                font-size: 13px;
              }
            }
          }

          .sticker {
            display: none;
          }
        }
      }
    }
  }
}
</style>
