<template>
  <div class="auto_complete_wrap">
      <section>
      <ul class="auto">
          <li v-for="(item, idx) in sample_auto" :key="idx">
          <a :href="item.url">
              <!-- class="text" 내부 특정 텍스트에 <em></em> 태그로 감싸면 강조표시 가능 -->
              <span class="text">{{ item.text }}</span>
              <span class="date">{{ item.latest }}</span>
          </a>
          </li>
      </ul>
      </section>

      <section>
      <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" class="type_column" :useHash="true" />
          </li>
      </ul>
      </section>

      <section>
      <div class="no_content">일치하는 결과가 없습니다.</div>
      </section>
  </div>
</template>
<script setup>
import { sample_goods, sample_auto } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-search'
})
</script>
<style lang="scss" scoped>
.auto_complete_wrap {
  background: rgba(0, 0, 0, 0.6);
  overflow-y: auto;
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;

  section {
    padding: 3rem 0;
    background: #fff;

    ul {
      padding: 0 2.1rem;
      margin-bottom: 3.1rem;
      display: flex;
      flex-direction: column;
    }

    & + section {
      &:before {
        content: '';
        border-top: 0.1px solid #f5f5f5;
        display: block;
        transform: translateY(-30px);
      }
    }
  }

  .auto {
    gap: 2.5rem;
    li {
      width: 100%;
      a {
        font-size: 1.4rem;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
          :deep(em) {
            color: #00bc70;
          }
        }

        .date {
          color: #aaa;
          font-size: 1.2rem;
          font-weight: 400;
        }
      }
    }
  }
  :deep(.goods_item) {
    .cont {
      .price {
        margin: 1.5rem 0;
      }
    }
  }
  .key_item {
    margin: 0;
    gap: 0.3rem;
    li {
      width: 100%;
      padding: 0;
      :deep(.goods_item) {
        padding: 0;
        display: flex;
        align-items: center;
        gap: 2rem;
        .img_wrap {
          width: 9rem;
          .thumb {
            width: 9rem;
            height: 12rem;
          }
          .btnIconBox {
            display: none;
          }
        }
        > a {
          .cont {
            width: 22rem;
            .review_score {
              display: none;
            }
            .price {
              strong {
                margin-right: 0.5rem;
              }
              span {
                margin-right: 1rem;
              }
              em {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  .no_content {
    padding: 0;
    &:after {
      content: unset;
    }
  }
}
</style>