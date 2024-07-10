<template>
  <div class="filter_wrap">
    <Tabs
      tabType="type_02"
      :item="[
        { txt: '전체' },
        { txt: '최대여덟글자입력' },
        { txt: '장원영피부되기' },
        { txt: '왓츠인마이백' },
        { txt: '인생탬' },
        { txt: '메이크업대결' },
        { txt: '갈웜뉴트럴추천' }
      ]"
      :tabidx="0" />
    <button type="button" @click="modal.open('modal_topic', 'bottom modal_topic')">토픽 모달 열기</button>
  </div>

  <div class="inner-cont">
    <div class="list_header">
      <button class="btn_dropdown" @click="modal.open('modal_sort', 'bottom')">추천순</button>
    </div>

    <div class="list_wrap">
      <ul class="post_list">
        <li v-for="(item, idx) in samplePost" :key="idx">
          <PostItem :item="item" :link="link" />
        </li>
      </ul>
    </div>
  </div>

  <!-- 토픽 모달 -->
  <div id="modal_topic" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div class="filter_wrap">
          <Tabs
            tabType="type_02"
            :item="[
              { txt: '장원영피부되기' },
              { txt: '왓츠인마이백' },
              { txt: '인생탬' },
              { txt: '인생탬' },
              { txt: '메이크업대결' },
              { txt: '갈웜뉴트럴추천' },
              { txt: '장원영피부되기' },
              { txt: '왓츠인마이백' },
              { txt: '인생탬' },
              { txt: '인생탬' },
              { txt: '메이크업대결' },
              { txt: '갈웜뉴트럴추천' }
            ]"
            :tabidx="0" />
        </div>
        <div class="btn_wrap">
          <button type="button">토픽 <em>20개</em> <span>더보기</span></button>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <!-- 정렬 모달 -->
  <div id="modal_sort" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <ul class="select_list">
          <li class="active"><a href="#none" class="active">최신순</a></li>
          <li><a href="#none">좋아요순</a></li>
          <li><a href="#none">조회수순</a></li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { samplePost } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})
</script>

<style lang="scss" scoped>
.inner-cont {
  padding: 0 2.1rem;
}

.filter_wrap {
  padding: 3rem 2.1rem 2rem;
  border-bottom: 1px solid #f5f5f5;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 2rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), transparent);
    position: absolute;
    top: 0;
    left: 0;
  }

  :deep(.tab_wrap) {
    max-height: 7.2rem;
    overflow: hidden;

    ul.type_02 {
      width: calc(100% - 4rem);
      margin: 0;
      gap: 0.8rem 0.5rem;
      flex-wrap: wrap;

      li {
        margin: 0;
        padding: 0;

        & > * {
          background: #fff;
          border-color: #eee;

          em {
            height: 3rem;
            padding: 0 14px;
            line-height: 3rem;
            font-weight: 600;
          }
        }

        &.current {
          & > * {
            border-color: #000;
          }
        }
      }
    }
  }

  button {
    position: absolute;
    bottom: 2rem;
    right: 2.5rem;
    width: 3rem;
    height: 3rem;
    font-size: 0;
    border-radius: 50%;
    background: #fff url(/assets/mo_images/common/icon_split.png) -11.9rem -6.4rem / 25rem auto no-repeat;
    border: 1px solid #eee;
    transition: all 0.45s;
  }
}

.list_header {
  padding: 2.2rem 0;
  .btn_dropdown {
    padding: 0 1ren;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    &:after {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 0.5rem;
      background: url('@inmModule/assets/images/common/icon_split.png') -11rem -6rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }
}

.modal_topic {
  .filter_wrap {
    padding: 0 2.6rem;
    border-bottom: 0;

    &:before {
      content: none;
    }

    :deep(.tab_wrap) {
      max-height: 40rem;
      overflow-y: scroll;

      ul.type_02 {
        width: 100%;
        gap: 0.8rem;
      }
    }
  }

  .btn_wrap {
    margin: 2rem 2.6rem 0;
    padding-top: 2rem;
    border-top: 1px solid #eee;

    button {
      font-weight: 600;

      em {
        color: #00bc70;
      }

      span {
        font-size: 1.2rem;
        display: inline-block;

        &:after {
          content: '';
          width: 0.7rem;
          height: 0.7rem;
          margin-left: 0.8rem;
          border-left: 1px solid #000;
          border-bottom: 1px solid #000;
          transform: rotate(-45deg);
          display: inline-block;
          position: relative;
          top: -0.2rem;
        }
      }
    }
  }
}
</style>
