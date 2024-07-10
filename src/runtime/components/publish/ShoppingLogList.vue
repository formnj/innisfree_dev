<template>
  <!-- 로그없을 경우 -->
  <p class="no_data">
    <strong>쇼핑로그가 없습니다.</strong>
    <span>쇼핑로그는 7일 최대 50개까지 보관됩니다.</span>
  </p>

  <section class="keyword_wrap">
    <h4>추천 키워드</h4>
    <ul class="keyword_list">
      <li><a href="javascript:void(0);">#비타C</a></li>
      <li><a href="javascript:void(0);">#노세범</a></li>
      <li><a href="javascript:void(0);">#모공</a></li>
      <li><a href="javascript:void(0);">#화산송이</a></li>
      <li><a href="javascript:void(0);">#로션</a></li>
      <li><a href="javascript:void(0);">#스킨</a></li>
      <li><a href="javascript:void(0);">#브라이트닝</a></li>
      <li><a href="javascript:void(0);">#히알루론산</a></li>
      <li><a href="javascript:void(0);">#블랙티</a></li>
      <li><a href="javascript:void(0);">#콜라겐</a></li>
      <li><a href="javascript:void(0);">#레티놀</a></li>
      <li><a href="javascript:void(0);">#씨드세럼</a></li>
    </ul>
  </section>
  <!-- //로그없을 경우 -->

  <!-- list -->
  <section class="list_wrap">
    <ul class="goods_list">
      <!-- 검색어 -->
      <li>
        <div class="search_item">
          <a href="#none">
            <span class="thumb"><em>검색어</em></span>
            <div class="cont">
              <p class="name">히알루론산 히알루론산 히알루론산 히알루론산</p>
            </div>
          </a>
        </div>
      </li>
      <!-- //검색어 -->
      <li v-for="(item, idx) in sample_log.slice(0, limit)" :key="idx">
        <GoodsItem v-if="item.type == 'goods'" :item="item.item[0]" :link="item.item.link" class="type_column" />
        <EventItem v-if="item.type == 'event'" :item="item.item[0]" :link="item.link" class="type_column" />
      </li>
    </ul>
  </section>
  <!-- //list -->
</template>

<script setup>
import { sample_log } from '@inmModule/test/data/publish/dummyData'
const props = defineProps({
  limit: Number
})
</script>

<style lang="scss" scoped>
section + section {
  margin-top: 40px;
}

.no_data {
  padding: 50px 0 90px;
}

.goods_list {
  margin: 0;
  position: relative;
  gap: 50px 0;

  &:after {
    border-left: 1px solid #eee;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 44px;
  }

  > li {
    padding: 0;
    overflow: hidden;
    position: relative;
    z-index: 1;

    .search_item {
      a {
        padding-left: 15px;
        display: flex;
        align-items: center;
        gap: 35px;

        .thumb {
          width: 60px;
          height: 60px;
          font-size: 0;
          background-color: #000;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;

          &:after {
            content: none;
          }

          em {
            width: 20px;
            height: 20px;
            display: inline-block;
            background: url('@inmModule/assets/images/common/icon_split.png') -189px -279px / 250px auto no-repeat;

            &:before {
              border-radius: 12px;
            }
          }
        }

        .cont {
          .name {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
        }
      }
    }

    :deep(a) .thumb {
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        border: 1px solid #00bc70;
        position: absolute;
        opacity: 0;
        left: 0;
        top: 0;
        transition: all 0.3s;
        transform: scale(50%);
      }

      em:first-child:before {
        content: '';
        width: 24px;
        height: 24px;
        background: #00bc70 url('@inmModule/assets/images/common/icon_split.png') -115px -300px / 250px auto no-repeat;
        position: absolute;
        bottom: 20px;
        left: 20px;
        opacity: 0;
        transition: all 0.3s;
      }
    }

    &:hover:deep {
      a {
        .thumb {
          &:after {
            transform: scale(100%);
            opacity: 1;
          }

          em:first-child:before {
            bottom: 0;
            left: 0;
            opacity: 1;
          }
        }

        .cont .name {
          font-weight: 600;
          color: #00bc70;

          strong {
            color: #00bc70;
          }
        }
      }
    }

    :deep(.goods_item),
    :deep(.event_item .item) {
      display: flex;

      .img_wrap,
      .thumb {
        width: 90px;

        em.overflip {
          display: none;
        }
      }

      .cont {
        flex: 1;
      }
    }

    :deep(.goods_item) {
      .img_wrap {
        height: 120px;

        .thumb {
          width: 90px;
          height: 100%;
        }

        .btnIconBox {
          display: none;
        }
      }

      .cont {
        margin-top: 0;

        .price {
          > * {
            font-size: 14px;
          }

          em {
            font-size: 13px;
          }
        }
      }
    }

    :deep(.event_item) {
      &.type_column {
        .item {
          gap: 20px;
        }

        .thumb {
          height: 60px;
        }

        .cont {
          strong {
            font-size: 14px;
            font-weight: 400;
            white-space: normal;
            word-break: break-all;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }

        &:hover {
          img {
            transform: none;
          }
        }
      }
    }
  }
}

.keyword_wrap {
  border-top: 1px solid #eee;

  h4 {
    margin: 40px 0 20px;
    font-size: 16px;
    font-weight: 600;
  }

  .keyword_list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 5px;

    a {
      padding: 4px 10px;
      color: #009d5e;
      font-size: 12px;
      border: 1px solid #009d5e;
      border-radius: 100px;
      display: block;
    }
  }
}
</style>
