<template>
  <!-- 로그인 전 -->
  <section class="bg_gray">
    <p>
      <button type="button"><em>로그인</em></button> 후 나의 혜택가를 확인하세요!!
    </p>
  </section>

  <!-- 로그인 후 -->
  <div class="acco_wrap my_price">
    <div class="acco_tit" @click="accordionUI">
      <div class="sub_title_wrap">
        <div>
          <h4>
            나의 혜택가
            <Icons v-if="isMo" class="tooltip" txt="나의 혜택가 안내" @click="modal.open('alert_my_price', 'alert')" />
            <Icons
              v-if="!isMo"
              class="tooltip"
              txt="나의 혜택가 안내"
              @click="modal.open('alert_my_price', 'layer tooltip my_price_modal'), modalPositioning()" />
          </h4>
        </div>
        <span class="btn_link_arrw price"><em>36,800원</em></span>
      </div>
    </div>
    <div class="acco_cont">
      <div class="inner">
        <p class="tit">일반쿠폰</p>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp1" _text="그린티 씨드 라인 10% 할인쿠폰" />
          <span>-4,200원</span>
          <button type="button" disabled>보유</button>
        </div>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp1" _text="그린티 씨드 세럼 본품+리필 3천원 할인" />
          <span>-1,200원</span>
          <button type="button" @click="[modal.open('toast_download', 'toast'), toast_pop(3000)]">받기</button>
        </div>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp1" _text="5만원 이상 결제 시 5% 할인" />
          <span>-2,100원</span>
          <button type="button" disabled>보유</button>
        </div>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp1" _text="임직원쿠폰 40%" />
          <span>-16,800원</span>
          <button type="button" disabled>보유</button>
        </div>
      </div>

      <div class="inner">
        <p class="tit">추가쿠폰</p>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp2" _text="그린티 씨드 세럼 1천원 추가쿠폰" />
          <span>-4,200원</span>
          <button type="button" disabled>보유</button>
        </div>
        <div class="ipt_row">
          <Inputs _type="radio" _name="cp2" _text="7만원 이상 결제 시 500원 추가할인" />
          <span>-1,200원</span>
          <button type="button" disabled>보유</button>
        </div>
      </div>
    </div>
  </div>

  <div id="toast_download" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>Modal Title</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">다운로드가 완료되었습니다.</div>
      <div class="modal_footer">
        <Button class="btn_outline" txt="cancel" />
        <Button txt="OK" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="alert_my_price" class="modal_wrap">
    <!-- 나의 혜택가 안내 -->
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
      <div class="modal_content">
        <h2>나의 혜택가 안내</h2>
        <ul class="bul_list txt">
          <li>회원님이 보유한 뷰티포인트를 제외한 쿠폰 최대 할인을 반영한 할인금액 입니다.</li>
          <li><em>제품 1개를 기준</em>으로 계산되었으며, 주문서에서 해당 쿠폰을 사용시 적용됩니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //나의 혜택가 안내 -->
</template>

<script setup>
import { modal, toast_pop } from '@inmModule/assets/js/common-ui'
const props = defineProps({
  isMo: {
    type: Boolean,
    default: true
  } // 나의 혜택가 툴팁 pc,mo 체크
})
const accordionUI = (e) => {
  e.target.closest('.acco_tit').parentElement.classList.toggle('open')
}
const modalPositioning = () => {
  const top = window.scrollY + event.target.getBoundingClientRect().top
  const right = window.outerWidth - event.target.getBoundingClientRect().left + 80 //80은 modal_reply_menu의 너비
  document.getElementsByClassName('my_price_modal')[0].style.cssText = 'top:' + top + 'px;left:unset;right:' + right + 'px;bottom:unset;'
}
</script>

<style lang="scss" scoped>
section {
  padding: 2rem;

  & + .acco_wrap {
    margin-top: 1rem;
  }

  &.bg_gray {
    background-color: #f5f5f5;
  }

  & > p {
    color: #000;

    em {
      color: #00bc70;
      text-decoration: underline;
      font-weight: 600;
    }
  }
}

.modal_wrap {
  &.alert {
    .modal_content {
      padding: 30px 20px;

      .sub_tit {
        font-size: 13px;
        color: #00bc70;
        margin-bottom: 0.6rem;
      }

      h2 {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        & + .txt {
          margin-top: 10px;
        }
      }

      .txt {
        font-size: 13px;
        color: #666;
        display: block;

        em {
          color: #00bc70;
          font-weight: bold;
        }
      }
    }
  }

  &.tooltip {
    .modal_container {
      width: 323px;

      .modal_content {
        .txt {
          li {
            font-size: 13px;
          }

          em {
            color: #00bc70;
          }
        }
      }

      .modal_footer {
        display: none;
      }
    }
  }
}

.acco_wrap {
  background-color: #f5f5f5;

  &.open {
    .acco_tit {
      .sub_title_wrap {
        .price:after {
          top: 0;
          transform: rotate(45deg);
        }
      }
    }
    .acco_cont {
      height: auto;
    }
  }

  .acco_tit {
    padding: 2rem;
    cursor: pointer;

    .sub_title_wrap {
      margin: 0;

      h4 {
        font-size: 1.4rem;
        line-height: 1.8rem;

        button {
          width: 16px;
          height: 16px;
          margin-left: 5px;
          background-position: 0 -260px;
          vertical-align: middle;
        }
      }

      .price {
        em {
          font-size: 1.4rem;
          font-weight: 600;
          color: #00bc70;
        }

        &:after {
          margin-top: 0;
          margin-left: 1rem;
          transform: rotate(-135deg);
          transition: all 0.3s;
          position: relative;
          top: -0.2rem;
        }
      }

      .btn_link_arrw {
        min-width: auto;
        right: 0;
      }
    }
  }

  .acco_cont {
    height: 0;
    overflow: hidden;

    .inner {
      margin: 0 2rem 1rem;
      padding: 1.6rem;
      background-color: #fff;

      &:last-child {
        margin-bottom: 2rem;
      }

      .tit {
        margin-bottom: 1.6rem;
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.6rem;
        color: #888;
      }

      .ipt_row {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        & + .ipt_row {
          margin-top: 1rem;
        }

        :deep(.input_wrap) {
          .check {
            vertical-align: top;
            em {
              color: #000;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
        }

        span {
          font-size: 1.2rem;
          color: #000;
          display: inline-block;
        }

        button {
          height: 2.4rem;
          padding: 0 0.8rem;
          font-size: 1rem;
          line-height: 2.2rem;
          color: #fff;
          border-radius: 0.1rem;
          background-color: #00bc70;
          border: 1px solid #00bc70;

          &:disabled {
            color: #00bc70;
            background: #fff;
          }
        }
      }
    }
  }
}
</style>
