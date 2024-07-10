<template>
  <div class="inner">
    <!-- 입고알림 신청내역 X -->
    <section>
      <span>아이콘</span>
      <p>신청하신 입고 알림 내역이 없습니다</p>
      <div class="btn_wrap">
        <Button class="btn_min_outline" txt="특가 상품 쇼핑하기" />
        <Button class="btn_min_outline" txt="개인정보 수정하기" />
      </div>
    </section>
    <!-- 입고알림 신청내역 X -->

    <!-- 입고알림 신청내역 O -->
    <div>
      <ul>
        <li>
          <a href="#none">
            <p>
              <img src="/images/sam/sam_myp_01_49.jpg" alt="쿠로미이미지" />
            </p>
            <div>
              <em>입고예정</em>
              <p>[쿠로미x이니스프리] 노세범 AC 파우더 5g</p>
              <span>신청일자:2024-04-29</span>
            </div>
          </a>
          <Button class="btn_outline" txt="알림취소" @click="modal.open('delete_modal', 'full')" />
        </li>
        <li>
          <a href="#none">
            <p>
              <img src="/images/sam/sam_myp_01_49.jpg" alt="쿠로미이미지" />
            </p>
            <div>
              <em>입고예정</em>
              <p>[쿠로미x이니스프리] 노세범 AC 파우더 5g</p>
              <span>신청일자:2024-04-29</span>
            </div>
          </a>
          <Button class="btn_outline" txt="알림취소" @click="modal.open('delete_modal', 'full')" />
        </li>
      </ul>
    </div>
    <!-- 입고알림 신청내역 O -->
  </div>

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알려드립니다.</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>입고 알림 신청을 취소 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '입고알림 신청내역')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
  text-align: center;

  section {
    span {
      width: 65px;
      height: 65px;
      margin-top: 10rem;
      text-indent: -9999px;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 250px;
      background-position: -63px -98px;
      display: inline-block;
    }
    p {
      padding: 2rem 0 2rem;
      font-size: 1.6rem;
      font-weight: 600;
    }
    .btn_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .btn_min_outline {
        border: 0.1rem solid #999 !important;
        :deep(em) {
          padding: 0 1.5rem;
          color: #999 !important;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 3rem;
        }
      }
    }
  }
  > div {
    margin-top: 3rem;
    > ul {
      > * + * {
        margin-top: 1rem;
      }
      li {
        position: relative;
        :deep(.btn_outline) {
          height: 3.6rem;
          padding: 0 1rem 0 1rem;
          font-size: 1.1rem;
          text-align: center;
          border: 0.1rem solid #ccc;
          border-radius: 1.8rem;
          background-color: #fff;
          position: absolute;
          bottom: 0.6rem;
          right: 0;
          display: flex;
          align-items: center;
          &::before {
            content: '';
            width: 20px;
            height: 20px;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 250px;
            background-position: -41px -199px;

            display: inline-block;
          }
          em {
            padding: 0 0px !important;
          }
        }
        > a {
          display: flex;
          gap: 1.2rem;
          > p {
            max-width: 12.1rem;
            width: 35%;
            border-radius: 0.5rem;
            overflow: hidden;
            position: relative;
            &::after {
              content: '';
              width: 100%;
              height: 100%;
              border-radius: 0.5rem;
              background-color: rgba(34, 34, 34, 0.02);
              position: absolute;
              top: 0;
              left: 0;
              overflow: hidden;
              z-index: 1;
              display: block;
            }
            img {
              height: 100% !important;
            }
          }
          > div {
            width: 65%;
            font-size: 1.3rem;
            text-align: left;
            em {
              height: 1.9rem;
              margin: 0 0.1rem 0.4rem 0;
              padding: 0 0.6rem 0 0.6rem;
              color: #12b560;
              font-size: 1rem;
              border: 0.1rem solid #a2dec0;
              border-radius: 0.5rem;
              background-color: #effff7;
              line-height: 1.9rem;
              white-space: nowrap;
              box-sizing: border-box;
              display: inline-block;
            }
            > p {
              width: 20.6rem;
              margin-bottom: 0.2rem;
              color: #222;
              white-space: normal;
              text-overflow: ellipsis;
              word-wrap: break-word;
            }
            > span {
              color: #999;
              margin-top: 0.8rem;
              display: block;
            }
          }
        }
      }
    }
  }
}
.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 3rem 2rem 1rem 2rem;
        border-bottom: 0;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 1rem 3rem 3rem 2rem;
        color: #666;
      }
      .modal_footer {
        padding: 0;
        button.btn_big {
          width: 100%;
        }
      }
    }
  }
}
</style>
