<template>
  <section>
    <div class="inner">
      <!-- title washed -->
      <div class="sub_title_wrap">
        <h4>봄맞이 핑크템으로<br />생기를 더하세요!</h4>
        <Button class="btn_all btn_outline" txt="전체보기" @click="modal.open('modal_all', 'fullMo')" />
      </div>
      <!-- //title washed -->
    </div>
  </section>

  <section>
    <div class="prd_wrap">
      <div><img src="/images/sam/pinkdoc1.jpg" /></div>
      <div>
        <img src="/images/sam/pinkdoc2.jpg" />
        <div class="video"><img src="/images/sam/colored.gif" /></div>
        <div class="overlay"><img src="/images/sam/lipstick.png" /></div>
      </div>
    </div>
  </section>

  <section>
    <div class="inner">
      <div class="list_wrap">
        <ul class="goods_list">
          <li v-for="(item, idx) in sample_goods.slice(0, 5)" :key="idx">
            <GoodsItem :item="item" :link="item.link" :useHash="false" />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div class="banner_wrap">
      <ul>
        <li v-for="(item, idx) in banner_list" :key="idx">
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

  <!-- 전체보기 모달 -->
  <div id="modal_all" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>쇼케이스 전체보기</h2>
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
  <!-- 전체보기 모달 -->
</template>
<script setup>
import { sample_goods, banner_list } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})

onMounted(() => {})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
  .sub_title_wrap {
    margin-top: 2rem;
  }
}

.prd_wrap {
  > div {
    max-width: 780px;
    margin: 0 auto;
    position: relative;
    img {
      vertical-align: top;
    }
    .video {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }
  }
}

.list_wrap {
  padding: 6rem 0;
  .goods_list {
    margin: 0;
    gap: 2rem 0.3rem;
    justify-content: space-between;
    > li {
      width: 16.5rem;
      padding: 0;
    }
  }
}

.banner_wrap {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
    li {
      width: 100%;
      height: 15rem;
      > a {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: relative;
        * {
          width: 100%;
          height: 100%;
        }
        .img {
          position: relative;
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
          width: auto;
          height: auto;
          color: #fff;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 2.4rem;
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
          left: 2.1rem;
          bottom: 50%;
          transform: translateY(50%);
        }
      }
    }
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      :deep(.showcase_item) {
        height: 21rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
