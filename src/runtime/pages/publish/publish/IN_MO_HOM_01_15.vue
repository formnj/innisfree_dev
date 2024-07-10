<template>
  <section class="shopping_log_wrap">
    <ServiceBanner /><!-- 쇼핑로그 상단 배너 -->
    <div class="inner">
      <div class="sub_title_wrap">
        <div>
          <h4><em>주소희</em> 님의 쇼핑로그 <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" /></h4>
          <a href="/publish/IN_MO_HOM_01_18" class="btn_link_arrw">전체보기</a>
        </div>
        <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
      </div>

      <div class="shopping_log"><ShoppingLogList limit="2" /><!-- 쇼핑로그 리스트 : FOR ME 쇼핑로그 최대 3개 노출 --></div>
    </div>
  </section>

  <section>
    <div class="inner">
      <div class="sub_title_wrap">
        <h4><em>주소희</em> 님께 추천해요</h4>
      </div>
      <div class="bubble_wrap">
        <div class="bubble">
          <p>이니스프리몰의 <em>활동 데이터를 기반으로</em> 제품을 추천드려요 ♥</p>
        </div>
      </div>
      <div class="bubble_wrap">
        <div class="bubble">
          <p><em>로그인 후 이니스프리몰 활동 데이터가 쌓이면</em> 취향에 맞는 제품을 추천드려요 ♥</p>
          <a href="#none" class="btn_link_arrw">로그인 하기</a>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx">
            <GoodsItem :item="item" :link="item.link" />
          </li>
        </ul>
      </div>
      <Button class="btn_outline btn_list_btm" txt="10개 더보기" />
    </div>
  </section>

  <section>
    <div class="inner no_r_pd">
      <div class="sub_title_wrap">
        <h4><em>왕 벚꽃 글로우 젤리 크림</em>을<br />구매한 고객이 최근 구매한 제품이에요</h4>
      </div>
      <div class="swiper_wrap">
        <swiper :slides-per-view="'auto'">
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section>
    <div class="inner no_r_pd">
      <div class="sub_title_wrap">
        <h4><em>찜</em>한 제품들을 확인하세요</h4>
      </div>
      <div class="swiper_wrap">
        <swiper :slides-per-view="'auto'">
          <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
            <GoodsItem :item="item" :link="item.link" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section>
    <div class="inner">
      <div class="sub_title_wrap">
        <h4><em>왕 벚꽃 글로우 젤리 크림</em>과 잘 맞는 제품이에요</h4>
      </div>
      <div class="list_wrap">
        <ul class="goods_list col_3">
          <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useHash="true" />
          </li>
        </ul>
      </div>
      <button type="button" class="btn_outline btn_list_btm refresh">
        <em>새로운 추천을 받고 싶어요</em> <span class="page">1/2</span>
      </button>
    </div>
  </section>

  <section>
    <div class="inner">
      <div class="sub_title_wrap">
        <h4><em>NEW</em> 포스트</h4>
      </div>
    </div>

    <div class="list_wrap">
      <ul class="post_list_vertial">
        <li v-for="(item, idx) in samplePost.slice(0, 3)" :key="idx">
          <PostItemVertical :item="item" :link="item.link" class="type_vertical" />
        </li>
      </ul>
    </div>
  </section>

  <div class="showcase">
    <ShowcaseModalItem v-for="(item, idx) in sampleShowcase.slice(0, 1)" :key="idx" :item="item" :link="item.link" />
    <Button class="btn_min_outline" txt="전체보기" @click="modal.open('modal_showcase_all', 'fullMo')" />
  </div>

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>
          쇼핑로그 안내
          <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
        </h2>
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

  <!-- 쇼케이스 전체보기 모달 -->
  <div id="modal_showcase_all" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>전체보기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="content">
          <ShowcaseModalItem v-for="(item, idx) in banner_list" :key="idx" :item="item" :link="item.link" />
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- 쇼케이스 전체보기 모달 -->

  <ProductListCartModal /><!-- 장바구니/바로구매 모달 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { sample_goods, samplePost, sampleShowcase, banner_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

definePageMeta({
  layout: 'publish-mo-default'
})
</script>

<style lang="scss" scoped>
section {
  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .inner {
    padding: 3rem 2.1rem;

    &.no_r_pd {
      padding-right: 0;
    }

    &.no_lr_pd {
      padding: 3rem 0;
    }
  }

  .sub_title_wrap {
    display: block;
    margin: 0 0 2rem;

    > div {
      display: flex;
      justify-content: space-between;

      h4 {
        > button {
          line-height: 2.7rem;
        }
      }
    }

    .explain {
      margin-top: 0.5rem;
    }
  }

  &:nth-child(6) {
    .sub_title_wrap {
      margin: 0;
    }
  }
}

:deep([class*='btn_'][class*='_outline']).btn_list_btm {
  width: 100%;
  margin-top: 3rem;
  font-size: 14px;
  border-color: #eee;

  em {
    color: #666;
  }
}

.refresh {
  height: 4rem;
  border: 1px solid #eee;
  position: relative;

  em {
    display: inline-flex;
    align-items: center;

    &:before {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 1rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') -23rem -4rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }

  .page {
    font-size: 1.2rem;
    color: #999;
    position: absolute;
    top: 1.2rem;
    right: 2.1rem;
  }
}

.bubble_wrap {
  margin-bottom: 2rem;
  padding-top: 0.5rem;
  position: relative;

  .bubble {
    padding: 1.6rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #00bc70;
    border-radius: 0.8rem;

    &:before {
      content: '';
      width: 1.2rem;
      height: 2.5rem;
      background-color: #00bc70;
      position: absolute;
      top: 0;
      left: 1.4rem;
      transform: rotate(45deg);
    }

    p {
      line-height: 1.6rem;
    }

    a {
      margin-top: 1.2rem;
      padding-top: 1.2rem;
      font-weight: 600;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: block;

      &:after {
        border-color: #fff;
      }
    }

    em {
      font-weight: 600;
      text-decoration: underline;
    }
  }
}

.swiper_wrap {
  .item {
    width: 14rem;

    & + .item {
      margin-left: 0.3rem;
    }

    :deep(.goods_item) {
      position: relative;
      width: 14rem;

      .review_score {
        display: none;
      }
    }
  }
}

:deep(.goods_list).col_3 {
  .review_score {
    display: none;
  }
}

.showcase {
  position: relative;

  :deep(.btn_min_outline) {
    background-color: #fff !important;
    border-radius: 0.1rem;
    border: 0;
    position: absolute;
    bottom: 3rem;
    right: 2.1rem;
    z-index: 2;

    em {
      font-weight: 600;
      color: #666;
      display: inline-flex;
      align-items: center;

      &:after {
        content: '';
        margin-left: 0.5rem;
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') -12.5rem -7rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }
  }
}

.modal_wrap {
  :deep(.showcase_item) {
    height: 21rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
