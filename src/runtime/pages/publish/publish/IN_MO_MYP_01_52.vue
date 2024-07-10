<template>
  <div class="inner">
    <div class="bg_gray">
      <span>공병수거 번호 <strong>00000000</strong></span>
      <span>2024.04.05 07:00</span>
    </div>

    <section>
      <div class="sub_title_wrap">
        <h3>공병수거 신청정보</h3>
      </div>
      <div class="photo_list">
        <div class="img_wrap">
          <img src="/images/sam/IMG1.png" />
        </div>
        <span><strong>10개</strong></span>
        <em><strong>수거신청</strong></em>
      </div>

      <!-- 수거 거부 -->
      <div class="photo_list">
        <div class="img_wrap">
          <img src="/images/sam/IMG1.png" />
        </div>
        <span><strong>10개</strong></span>
        <button type="button" class="btn_link_arrw" @click="modal.open('modal_reject', 'alert modal_reject')">수거 거부</button>
      </div>
      <!-- //수거 거부 -->

      <div class="btn_wrap bottom">
        <Button class="btn_outline" txt="수거취소" />
      </div>
    </section>

    <section>
      <div class="sub_title_wrap">
        <h3>공병수거지정보</h3>
        <div class="btn_wrap">
          <Button txt="변경" class="btn_sm gray" />
        </div>
      </div>
      <div class="cont">
        <p>배송지명</p>
        <p>주소희 · 010-1234-5678</p>
        <p class="addr">(12345)서울 용산구 한강대로 100 아모레퍼시픽 (이니스프리 2단지 아파트) 한강로2가 424</p>
        <div class="dis_flex">
          <InmInputCheckbox v-model="value" text="안심번호사용" true-value="Y" false-value="N" :is-switch="false" :disabled="false" />
          <Icons class="tooltip_16" />
        </div>
      </div>
    </section>

    <div id="modal_reject" class="modal_wrap">
      <div class="modal_container">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <div class="modal_content">
          <h2>수거거부사유 안내</h2>
          <p class="txt">
            수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로 문의해주세요.
            (<NuxtLink to="#" class="btn_link_arrw">1:1문의</NuxtLink> <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
          </p>
          <p class="bg_gray">
            BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유
            출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력
          </p>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '공병수거 신청 상세')
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    padding-bottom: 1.5rem;
    margin-top: 0;
    align-items: center;
    border-bottom: 1px solid #000;

    .btn_link_arrw {
      height: auto;
      color: #999;
      text-decoration: underline;
      position: relative;
      right: 0;

      &:after {
        border-color: #999;
        position: relative;
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
      }
    }
  }
}
[class*='btn_'].gray {
  background-color: #999;
  color: #fff;
  :deep(em) {
    padding: 0 0.8rem;
    font-size: 1rem;
    font-weight: 600;
  }
}

.cont {
  p {
    line-height: 1.8rem;

    & + p {
      margin-top: 1rem;
    }

    &.addr {
      margin-top: 0.7rem;
      color: #888;
      line-height: 2rem;
    }
  }

  .dis_flex {
    margin-top: 2rem;
    gap: 0.6rem;
  }
}

.dis_flex {
  display: flex;
  align-items: center;
}

.photo_list {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & + .photo_list {
    margin-top: 2rem;
  }

  .img_wrap {
    width: 6.4rem;
    height: 6.4rem;
    text-align: center;
    background-color: #000;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }
  }

  span {
    flex: 1;
  }

  & > em,
  & > .btn_link_arrw {
    color: #00bc70;
    text-align: center;
  }

  & > .btn_link_arrw {
    font-weight: 600;
    text-decoration: underline;
    &:after {
      width: 7px;
      height: 7px;
      border-color: #00bc70;
    }
  }
}

p.txt {
  color: #888;
}

.input_list {
  & > li {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn_link_arrw {
      color: #000;
      font-size: 1.2rem;
      text-decoration: underline;

      &:after {
        width: 0.7rem;
        height: 0.7rem;
        border-color: #000;
      }
    }
  }
  & + li {
    margin-top: 1.6rem;
    padding-top: 1.6rem;
    border-top: 1px solid #eee;
  }

  & + .bul_list {
    margin-top: 2rem;
    color: #888;
    li {
      &:before {
        background-color: #888;
      }
    }
  }
}

.bg_gray {
  padding: 1rem 2.1rem;
  color: #888;
  font-size: 1.3rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

:deep(.modal_wrap) {
  &.alert {
    .modal_content {
      padding: 3rem 2rem;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;

      & + .txt {
        margin-top: 1rem;
        line-height: 2rem;
      }
    }
  }

  &.modal_reject {
    .modal_content {
      .btn_link_arrw {
        margin-right: 10px;
        color: #000;
        border-bottom: 1px solid #000;
        &:after {
          width: 6px;
          height: 6px;
          border-color: #000;
        }
      }

      .bg_gray {
        margin-top: 2rem;
        padding: 1.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
        color: #666;
      }
    }
  }
}

.btn_wrap.bottom {
  margin-top: 2rem;
  :deep(button) {
    width: 100%;
    border-color: #00bc70;
    em {
      color: #00bc70;
    }
  }
}
</style>
