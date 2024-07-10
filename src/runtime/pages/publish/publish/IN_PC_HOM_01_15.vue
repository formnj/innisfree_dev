<template>
  <div class="content">
    <div class="recommend_area">
      <!-- 로그인 후 타이틀 -->
      <div class="title_wrap">
        <div class="prd_tit">
          <h2>FOR ME</h2>
          <h3><strong>주소희</strong> 님께 추천해요</h3>
          <p class="desc">이니스프리몰의 활동 데이터를 기반으로 제품을 추천드려요♥</p>
        </div>
      </div>
      <!-- //로그인 후 타이틀 -->

      <!-- 로그인 전 타이틀 --
      <div class="title_wrap">
        <div class="prd_tit login">
          <h2>FOR ME</h2>
          <h3>추천해요 <a href="#none" class="btn_link_arrw">로그인하기</a></h3>
          <p class="desc">로그인 후 이니스프리몰의 활동 데이터가 좀 더 쌓이면 취향에 맞는 제품을 추천드려요♥</p>
        </div>
      </div>
      //로그인 전 타이틀 -->

      <section>
        <ProductDetailSwiperProgressBar />
      </section>

      <section>
        <h3><em>왕 벚꽃 글로우 젤리 크림</em>을 구매한 고객이 최근 구매한 제품이에요</h3>
        <ProductDetailSwiperProgressBar />
      </section>

      <section>
        <h3><em>찜</em>한 제품들을 확인하세요</h3>
        <ProductDetailSwiperProgressBar />
      </section>

      <section>
        <h3><em>왕 벚꽃 글로우 젤리 크림</em>과 잘 맞는 제품이에요</h3>
        <div class="list_wrap">
          <ul class="goods_list">
            <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
              <GoodsItem :item="item" :link="item.link" :useMark="false" :useHash="true" :mustUseScore="true" />
            </li>
          </ul>
        </div>
        <button type="button" class="btn_outline more refresh"><em>추천 제품 더보기</em> <span class="page">1/2</span></button>
      </section>

      <section>
        <h3><a href="IN_PC_HOM_01_12" class="btn_link_arrw">쇼케이스</a></h3>
        <div class="banner_wrap">
          <ul>
            <li v-for="(item, idx) in sampleShowcase.slice(0, 2)" :key="idx">
              <a href="#none">
                <div class="img">
                  <img :src="item.img" />
                </div>
                <span>{{ item.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="shopping_log_wrap">
      <ServiceBanner /><!-- 쇼핑로그 상단 배너 -->
      <h2><em>주소희</em>님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" /></h2>
      <p class="txt_desc">최근 본 제품, 이벤트, 검색어예요</p>

      <div class="shopping_log"><ShoppingLogList /><!-- 쇼핑로그 리스트 --></div>
    </div>
  </div>

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>쇼핑로그 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="bul_list">
          <li>로그인을 하신 고객님들은 30일동안 조회한 최대 100개까지의 쇼핑로그를 확인하실 수 있습니다.</li>
          <li>판매 종료된 제품이나 종료된 이벤트는 쇼핑로그에서 자동으로 삭제됩니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //쇼핑로그 안내 모달 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { sample_goods, sampleShowcase } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})

onMounted(() => {
  //쇼핑로그 영역 고정
  const shopLog = document.getElementsByClassName('shopping_log_wrap')[0]
  const winH = window.innerHeight
  shopLog.style.cssText = 'height:' + winH + 'px'
})
</script>

<style lang="scss" scoped>
.content {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.recommend_area {
  width: 800px;

  .title_wrap {
    padding-left: 0;

    .prd_tit {
      margin-bottom: 30px;
    }
  }

  section {
    h3 {
      margin: 100px 0 30px;

      .btn_link_arrw:after {
        width: 10px;
        height: 10px;
        position: relative;
        top: -3px;
        margin-left: 7px;
      }
    }
  }

  h3 {
    font-size: 24px;

    em {
      color: #00bc70;
    }
  }

  .goods_list {
    li {
      width: 240px;
    }
  }

  :deep([class*='btn_'][class*='_outline']).more {
    width: 340px;
    margin: 30px auto 0;
    font-size: 14px;
    border-color: #eee;
    display: block;

    em {
      color: #666;
    }
  }

  .refresh {
    height: 40px;
    border: 1px solid #eee;
    position: relative;

    em {
      display: inline-flex;
      align-items: center;

      &:before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: 10px;
        background: url('@inmModule/assets/images/common/icon_split.png') -114px -63px / 167px auto no-repeat;
        display: inline-block;
      }
    }

    .page {
      font-size: 12px;
      color: #999;
      position: absolute;
      top: 12px;
      right: 21px;
    }
  }

  :deep(.swiper_progressbar_wrap) {
    width: 100%;

    .navigation {
      display: none;
    }

    .swiper-container {
      .swiper-pagination-progressbar {
        width: 760px;
      }
    }
  }

  .banner_wrap {
    padding-right: 40px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      li {
        width: calc(50% - 10px);
        > a {
          position: relative;
          .img {
            position: relative;
            height: 150px;
            overflow: hidden;
            img {
              vertical-align: top;
            }
            &:after {
              content: '';
              width: 100%;
              height: 100%;
              background: #000;
              opacity: 0.25;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          span {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            white-space: pre-line;
            position: absolute;
            top: 50%;
            left: 30px;
            right: 30px;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}

.shopping_log_wrap {
  width: 480px;
  padding: 132px 40px 0 40px;
  border: 1px solid #f5f5f5;
  border-width: 0 1px;
  overflow: hidden;
  position: sticky;
  top: 0;

  section {
    width: auto;
  }

  h2 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.33em;
    letter-spacing: -0.01em;

    & + p {
      margin-top: 5px;
      color: #999;
    }

    button.tooltip {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      background-position: 0 -260px;
    }

    em {
      color: #00bc70;
    }
  }
}

.shopping_log {
  margin-top: 40px;
  height: calc(100% - 232px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e2e2e2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  section {
    padding-top: 40px;

    h4 {
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 600;
    }

    & + section {
      margin-top: 90px;
      border-top: 1px solid #eee;
    }
  }
}

.modal_set_skin_type {
  .modal_content {
    p {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 1.32em;
      letter-spacing: -0.01em;
      color: #999;
    }

    ul {
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .agree_box {
      :deep(.input_wrap) {
        em.label {
          color: #666;
        }
      }

      p {
        margin: 5px 0 0 30px;
        font-size: 14px;
        line-height: 1.33em;
        color: #999;
      }
    }
  }

  .modal_footer {
    width: 100%;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;

    .btn_big.confirm {
      width: 100%;
    }
  }
}
</style>
