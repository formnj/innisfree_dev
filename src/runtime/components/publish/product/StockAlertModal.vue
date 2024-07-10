<template>
  <div id="modal_stock_alert" class="modal_wrap">
    <div class="modal_container">
      <button class="btn_close" @click="modal.close(this)">닫기</button>
      <div class="modal_content">
        <h2>입고알림 신청</h2>
        <p class="txt">
          입고알림 신청을 하면 제품이 입고 되어 판매가 시작되는 시점에 회원님의 휴대폰으로 입고알림 메시지를 발송해드립니다.
        </p>
        <ul class="bul_list star">
          <li>구매자가 많을 경우 메시지 확인 후, 즉시 구매하지 않으면 재고가 소진 될 수 있습니다.</li>
        </ul>

        <h3>제품 및 신청 정보 확인</h3>
        <dl class="gray_box">
          <dt>제품명</dt>
          <dd>리얼핏 매트 리퀴드</dd>
          <dt>용량/중량</dt>
          <dd>3.5g</dd>
          <dt>옵션</dt>
          <dd>2호 코랄핑크 더블샷</dd>
          <dt>신청자</dt>
          <dd>김이니</dd>
          <dt>연락처</dt>
          <dd>010-1234-5678</dd>
        </dl>
        <ul class="bul_list star">
          <li>연락처 등 개인정보 수정은 내정보 수정 메뉴를 이용해주세요.</li>
          <li>SMS 정보 이용료는 무료입니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="입고알림 신청" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
</script>
<style lang="scss" scoped>
.modal_stock_alert {
  .modal_container {
    width: 540px;
  }

  .modal_content {
    padding: 3rem 2rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;

      & + .txt {
        margin-top: 1rem;
      }
    }

    .txt {
      font-size: 1.3rem;
      color: #666;
      line-height: 2rem;
      display: block;

      em {
        color: #00bc70;
        font-weight: bold;
      }
    }
  }

  .modal_footer {
    padding: 0;

    button {
      width: 100%;
    }
  }

  .bul_list.star {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #888;
    li {
      line-height: 1.4rem;
    }
  }

  h3 {
    margin: 2.5rem 0 1rem;
    padding-top: 2.5rem;
    font-size: 1.4rem;
    border-top: 1px solid #eee;
  }

  .gray_box {
    padding: 1rem 1.5rem 1.5rem;
    background-color: #f5f5f5;
  }

  dl {
    width: 100%;
    font-size: 1.3rem;

    & > * {
      margin-top: 0.5rem;
      line-height: 2rem;
      display: inline-block;
      vertical-align: top;
    }

    dt {
      width: 5rem;
      color: #666;
      margin-right: 1.6rem;
    }

    dd {
      width: calc(100% - 6.6rem);
      color: #000;
    }
  }
}
</style>
