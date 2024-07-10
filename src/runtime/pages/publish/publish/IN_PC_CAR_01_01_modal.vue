<template>
  <div class="inner">
    <Button txt="로그인 체크" @click="modal.open('alert1', 'alert')" />
    <Button txt="결제금액 + 제품구매 할인 미충족시" @click="modal.open('alert2', 'alert')" />
    <Button txt="본품 재고 부족 시" @click="modal.open('alert3', 'alert')" />
    <Button txt="제품증정품 수량 부족 시 - 증정품전체품절" @click="modal.open('alert4', 'alert')" />
    <Button txt="제품증정품 수량 부족 시 – 부분증정가능일 시" @click="modal.open('alert5', 'alert')" />
    <Button txt="첫구매 – 재고부족" @click="modal.open('alert6', 'alert')" />
    <Button txt="체험단 - 재고부족" @click="modal.open('alert7', 'alert')" />
    <Button txt="뷰티포인트 전용제품 – 포인트부족 시" @click="modal.open('alert8', 'alert')" />
  </div>

  <!-- 로그인 체크 -->
  <div id="alert1" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">이니스프리 공식몰은 회원만 구매 가능합니다.<br />로그인을 해주세요.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //로그인 체크 -->

  <!-- 결제금액 + 제품구매 할인 미충족시 -->
  <div id="alert2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">
          {제품명} 은 {40,000}원 이상 결제 시,<br />{6,900}원으로 구매 가능한 제품입니다.<br /><br />
          결제금액이 부족하여, 정상가로 결제 됩니다.
        </p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //결제금액 + 제품구매 할인 미충족시 -->

  <!-- 본품 재고 부족 시 -->
  <div id="alert3" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">{제품명}의 재고가 n개 부족합니다.<br />M개까지만 구매 가능합니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //본품 재고 부족 시 -->

  <!-- 제품증정품 수량 부족 시 - 증정품전체품절 -->
  <div id="alert4" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">{제품명}의 제품증정품의 조기 소진되어 증정품 제공이 불가합니다.<br />증정품 없이 구매 하시겠습니까?</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="구매하기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //제품증정품 수량 부족 시 - 증정품전체품절 -->

  <!-- 제품증정품 수량 부족 시 – 부분증정가능일 시 -->
  <div id="alert5" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">
          {제품명}의. 제품증정품의 조기 소진되어 n개 구매시까지만 증정품이 제공됩니다.<br /><br />
          수량 조정 없이 구매 시 일부 본품의 증정품은 미제공 됩니다.<br />구매하시겠습니까?
        </p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="수량조정하기" />
        <Button class="btn_big confirm" txt="구매하기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //제품증정품 수량 부족 시 – 부분증정가능일 시 -->

  <!-- 첫구매 – 재고부족 -->
  <div id="alert6" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">첫구매전용 제품 재고부족으로<br />구매가 불가합니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //첫구매 – 재고부족 -->

  <!-- 체험단 - 재고부족 -->
  <div id="alert7" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">체험단 제품 재고부족으로<br />구매가 불가합니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //체험단 - 재고부족 -->

  <!-- 체험단 - 재고부족 -->
  <div id="alert8" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>알림</h2>
        <p class="txt">
          뷰티포인트 전용 제품 가격보다 보유하신 뷰티포인트가 적어 구매가 불가 합니다.<br /><br />
          해당 제품을 제외 하고 구매하시겠습니까?
        </p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="구매하기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //체험단 - 재고부족 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})
</script>

<style lang="scss" scoped>
.inner {
  width: 1280px;
  margin: 0 auto;

  button {
    margin-bottom: 20px;
  }
}

.modal_wrap {
  &.alert {
    .modal_container {
      width: 323px;
    }

    .modal_content {
      padding: 3rem 2rem;

      .sub_tit {
        font-size: 1.3rem;
        color: #00bc70;
        margin-bottom: 0.6rem;
      }

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
  }
}
</style>
