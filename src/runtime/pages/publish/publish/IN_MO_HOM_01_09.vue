<template>
  <!-- 포스트 영역 -->
  <div class="post_header">
    <span class="topic">뽀용뽀용☁️️</span>
    <h2>내가 히알루론산 수분 촉촉 선크림에 정착한 이유</h2>
    <span class="post_icons">
      <span class="i clock">2023.3.27</span>
      <span class="i view">0.3k</span>
    </span>

    <div class="post_editor">
      <a href="IN_MO_HOM_01_10">
        <span v-for="(item, idx) in samplePost.slice(0, 1)" :key="idx" class="info">
          <EditorProfile :item="item" />
        </span>
      </a>
    </div>
  </div>

  <div class="postFixedArea">
    <button class="btn_like" title="좋아요" @click="setFilter">32</button>
    <button class="btn_reply" title="답글" @click="openReplyModal()">120</button>
  </div>

  <div class="post_back">
    <Button class="btn_icon btn_icon_back" txt="" />
  </div>

  <div class="post_detail">
    <!-- 개발 시 아래 div 삭제 -->
    <div style="width: 100%; padding: 5rem 0; background-color: #ccc; text-align: center; color: #fff">포스트 내용</div>
  </div>
  <!-- //포스트 영역 -->

  <!-- 에디터 PICK -->
  <section>
    <div class="inner">
      <h2>
        <span>에디터 PICK</span>
      </h2>
      <div class="swiper_wrap full horizontal">
        <!-- Edit 24.05.30 JH : 꽉찬 스와이퍼 class="swiper_wrap full" -->
        <swiper :slides-per-view="'auto'" :space-between="3">
          <swiper-slide v-for="(item, idx) in sample_goods" :key="idx" class="goods_slide">
            <GoodsItem :item="item" :link="item.link" class="type_cart" :useHash="true" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- //에디터 PICK -->

  <!-- 답글 -->
  <section>
    <div class="inner">
      <h2>
        <button type="button" class="btn_link_arrw" @click="openReplyModal()">답글 <em>3</em></button>
      </h2>
    </div>
    <!-- 답글 없을 경우 -->
    <div class="no_content">등록된 답글이 없습니다.<br />답글을 남겨보세요</div>
    <!-- //답글 없을 경우 -->

    <div class="cmnt_list">
      <ul>
        <li v-for="(item, idx) in sampleCmnt.slice(0, 3)" :key="idx">
          <PostComment :item="item" />
        </li>
      </ul>
    </div>

    <div class="inner inner_s">
      <Inputs _type="text" _placeholder="답글을 남겨보세요" @click="openReplyModal()" />
    </div>
  </section>
  <!-- //답글 -->

  <!-- 같은 주제 다른 포스트 -->
  <section>
    <div class="inner">
      <h2>같은 주제의 다른 포스트</h2>

      <div class="list_wrap">
        <ul class="post_list">
          <li v-for="(item, idx) in samplePost" :key="idx" class="topic">
            <PostItem :item="item" :link="link" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- //같은 주제 다른 포스트 -->

  <!-- 인기 포스트 -->
  <section>
    <div class="inner">
      <h2>
        <a href="" class="btn_link_arrw"><em>이사배</em> 님의 인기 포스트</a>
      </h2>
    </div>

    <div class="list_wrap">
      <ul class="post_list_vertial">
        <li v-for="(item, idx) in samplePost" :key="idx">
          <PostItemVertical :item="item" :link="item.link" class="type_vertical" />
        </li>
      </ul>
    </div>
  </section>
  <!-- //인기 포스트 -->

  <!-- 답글 메뉴 -->
  <div id="modal_reply_menu" class="modal_wrap">
    <div class="modal_container">
      <ul class="reply_menu">
        <li><button type="button" class="btn_single_menu">신고하기</button></li>
        <li><button type="button" class="btn_single_menu">차단하기</button></li>
        <li><button type="button" class="btn_single_menu">수정하기</button></li>
        <li><button type="button" class="btn_single_menu">삭제하기</button></li>
      </ul>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //답글 메뉴 -->

  <!-- 답글 모달 -->
  <PostCommentModal />
  <!-- //답글 모달 -->
</template>

<script setup>
import { modal, setFilter } from '@inmModule/assets/js/common-ui'
import { sample_goods, sampleCmnt, samplePost } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

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
  layout: 'publish-mo-share-home-cart'
})

onMounted(() => {
  //답글 메뉴 외 영역 클릭 시 메뉴 닫힘
  const body = document.querySelector('body')
  body.addEventListener('click', (event) => {
    const target = event.target
    const replyMenuModal = document.getElementById('modal_reply_menu')

    if (
      !target.classList.contains('btn_reply_menu') &&
      replyMenuModal.classList.contains('active') &&
      !target.classList.contains('btn_single_menu')
    ) {
      replyMenuModal.classList.remove('active')
    }
  })
})

const openReplyModal = () => {
  modal.open('modal_comment', 'bottom modal_comment')
}
</script>

<style lang="scss" scoped>
.post_header {
  padding: 2rem 2.1rem 3rem;

  .topic {
    padding: 0.3rem 1rem;
    font-size: 1.3rem;
    color: #009d5e;
    line-height: 1.6rem;
    border: 1px solid #009d5e;
    border-radius: 1.6rem;

    & + h2 {
      margin-top: 1.5rem;
    }
  }

  h2 {
    font-size: 2.4rem;
  }

  :deep(.post_icons) {
    margin: 1rem 0 0;
    padding: 0;
    border-top: 0;
    gap: 1rem;

    .i {
      flex: none;

      &:before {
        margin-right: 0.2rem;
      }
    }
  }

  .post_editor {
    margin-top: 2rem;

    a {
      gap: 0 1rem;
      display: flex;

      img {
        width: 4rem;
        height: 4rem;
      }

      .info {
        gap: 0.5rem 0;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        color: #999;

        em {
          gap: 0.8rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #666;
          display: flex;
          align-items: center;
        }

        & > span {
          height: 1.6rem;
          line-height: 1.6rem;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }
  }
}

:deep(.mark_editor) {
  gap: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  color: #00bc70;
  display: inline-flex;
  align-items: center;

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    background: url('@inmModule/assets/mo_images/common/icon_split.png') -20.8rem -9.8rem / 25rem auto no-repeat;
    display: inline-block;
    padding: 0.2rem;
  }
}

section {
  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .inner {
    padding: 3rem 2.1rem;

    &.inner_s {
      padding: 2rem 2.1rem;
    }

    &.no_r_pd {
      padding-right: 0;
    }

    &.no_lr_pd {
      padding: 3rem 0;
    }

    &.no_t_pd {
      padding-top: 0;
    }
  }

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + * {
      margin-top: 2rem;
    }

    .btn_link_arrw {
      font-size: 1.8rem;
      font-weight: 500;
      display: flex;
      align-items: center;

      &:after {
        margin-left: 1rem;
      }

      em {
        color: #00bc70;
        margin-left: 0.4rem;
      }
    }
  }
}

:deep(.no_content) {
  padding-bottom: 2rem;
  font-size: 1.3rem !important;
  font-weight: 400 !important;
  color: #888;
  text-align: center;
  border-bottom: 1px solid #f5f5f5;
}

.reply_menu {
  border: 1px solid #999;

  li {
    width: 8rem;

    & + li {
      border-top: 1px solid #999;
    }

    button {
      padding: 1.2rem 0;
      width: 100%;
      font-size: 1.2rem;
      text-align: center;
      line-height: 1.6rem;
      display: block;
    }
  }
}

.postFixedArea {
  width: 100%;
  padding: 1.5rem 2.1rem 1.6rem;
  gap: 2rem;
  background-color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;

  button {
    line-height: 1.8rem;
    color: #333;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      margin-right: 0.5rem;
      width: 2.4rem;
      height: 2.4rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') -4rem -14.5rem / 25rem auto no-repeat;
      display: inline-block;
    }

    &.btn_like {
      &.active:before {
        background-position: -18rem -7rem;
      }
    }

    &.btn_reply:before {
      background-position: -4rem -17rem;
    }
  }
}

.post_back {
  position: fixed;
  bottom: 7.8rem;
  left: 2.1rem;
  z-index: 2;

  :deep(button) {
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    box-shadow: 0.2rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.95) url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -2.2rem -3.2rem;
    background-size: 25rem auto;
  }
}

.modal_reply_menu {
  z-index: 16;
}

.swiper_wrap.full {
  .swiper {
    margin-right: -2.1rem;
    margin-left: -2.1rem;
    padding-right: 2.1rem;
    padding-left: 2.1rem;
  }
}
</style>
