<template>
  <InmMainTopBanner :banner-text="mainTopBannerData.bannerText" :url="mainTopBannerData.url" />
  <header>
    <div class="inner">
      <h1>
        <a href="/publish"><img src="@inmModule/assets/images/common/logo_innisfree.png" /></a>
      </h1>

      <InmSearchLayer
        :placeholder="searchData.placeholder"
        :is-mobile="props.isMobile"
        :latest-search-word-list="latestSearchWordData"
        :category-list="categoryForSearchLayerData" />

      <InmSearchRanking v-if="!props.isMobile" :search-ranking-list="searchRankingData" />
      <div class="quick_wrap">
        <ul v-if="!props.isMobile" class="quick">
          <li>
            <a href="#none">로그인</a>
          </li>
          <li>
            <a href="#none">회원가입</a>
          </li>
          <li>
            <a href="#none">고객센터</a>
          </li>
          <li>
            <a href="#none">ABOUT</a>
          </li>
        </ul>
        <ul class="icon_menu">
          <template v-if="!props.isMobile">
            <li>
              <a href="#none" class="wish">관심상품</a>
            </li>
            <li>
              <a href="#none" class="mypage">마이페이지</a>
            </li>
            <li>
              <a href="#none" class="delivery">배송조회</a>
            </li>
          </template>
          <li>
            <a href="#none" class="cart"
              >장바구니
              <em>5</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="gnb_wrap">
      <div class="inner">
        <InmButton v-if="!isMobile" class="btn_category">카테고리</InmButton>
        <InmNavigationBar :navigation-list="navigationBarData" />
        <InmQuickLink v-if="!isMobile" />
      </div>

      <div class="navCategory" @mouseleave="cate_layer.close">
        <!-- mo search -->
        <div class="search" v-if="props.device == 'MO'">
          <Button txt="닫기" class="sam_close" @click="cate_layer.close" v-if="props.device == 'MO'" />
          <div>
            <Inputs _placeholder="새로워진 이니스프리 SHOWCASE" />
            <Button class="btn_search" />
          </div>
          <ul class="icon_menu" v-if="props.device == 'MO'">
            <li v-if="props.device == 'PC'">
              <a href="#none" class="wish">관심상품</a>
            </li>
            <li v-if="props.device == 'PC'">
              <a href="#none" class="mypage">마이페이지</a>
            </li>
            <li v-if="props.device == 'PC'">
              <a href="#none" class="delivery">배송조회</a>
            </li>
            <li>
              <a href="#none" class="cart"
                >장바구니
                <em>5</em>
              </a>
            </li>
          </ul>
        </div>
        <!-- //mo search -->

        <!-- mo banner -->
        <div class="banner" v-if="props.device == 'MO'">
          <a href="#none">한정 기간 특가할인 / 사은품 증정 제품 모아보기</a>
        </div>
        <!-- //mo banner -->

        <!-- <nav>
          <div class="nav_wrap" v-if="props.device == 'PC'">
            <Button class="btn_category" txt="카테고리" />
            <dl v-for="(item, idx) in global_menu" :key="idx">
              <dt>
                <a :href="item.link">{{ item.menu }}</a>
              </dt>
              <dd>
                <ul>
                  <li v-for="(item, idx) in item.sub_menu" :key="idx">
                    <a :href="item.link">{{ item.menu }}</a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>

          <div class="nav_wrap" v-else>
            <ul>
              <li v-for="(item, idx) in global_menu" :key="idx">
                <a :href="item.link">{{ item.menu }}</a>
              </li>
            </ul>
            <div>
              <section v-for="(item, idx) in global_menu" :key="idx">
                <a href="#none">{{ item.menu }} 전체</a>
                <ul class="list">
                  <li v-for="(item, idx) in item.sub_menu" :key="idx">
                    <a :href="item.link">{{ item.menu }}</a>
                  </li>
                </ul>
                <ul class="goods" v-if="item.goods">
                  <li v-for="item in item.goods" :key="item">
                    <GoodsItem :item="item" />
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </nav> -->
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import {
  mainTopBannerData,
  searchRankingData,
  navigationBarData,
  searchData,
  latestSearchWordData,
  categoryForSearchLayerData
} from '@inmModule/test/data/publish/dummyData'

interface IHeaderProps {
  device: string
  isMobile: boolean
}

const props = defineProps<IHeaderProps>()
</script>
<style lang=""></style>
