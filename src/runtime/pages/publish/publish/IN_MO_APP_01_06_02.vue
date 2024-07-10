<template>
  <div class="btn_wrap">
    <Button class="btn_big" txt="장바구니 담기" @click="modal.open('alert_into_cart', 'alert')" />
    <Button class="btn_big confirm" txt="바로 신청하기" @click="modal.open('alert_sample_apply', 'alert')" />
  </div>

  <!-- 신청하기 모달 -->
  <div id="alert_sample_apply" class="modal_wrap active alert alert_sample_apply">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">샘플바로신청하기</p>
        <p class="txt">
          샘플만 바로 신청할 경우 배송비 <em>2,500원</em>이 발생 합니다.<br />
          뷰티포인트 2,500P 이상 보유시 뷰티포인트로 배송비 결제가 가능합니다.<br />
        </p>

        <div class="point_info">
          <p>ooo님의 보유샘플포인트</p>
          <em>5,300P</em>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="바로 신청하기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //신청하기 동의 -->

  <!-- 장바구니 담기 완료 -->
  <div id="alert_into_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">장바구니 담기가 완료 되었습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="화면유지하기" />
        <Button class="btn_big confirm" txt="장바구니가기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //장바구니 담기 완료 -->

  <!-- 선택한 샘플 없음 -->
  <div id="alert_into_cart2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">선택한 샘플이 없습니다.<br />샘플을 선택해주세요.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //선택한 샘플 없음 -->

  <!-- 선택한 샘플 없음 -->
  <div id="alert_sample_apply2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">샘플신청안내</p>
        <p class="txt">보유 샘플을 모두 사용하지 않았습니다.<br />이대로 신청하시겠습니까?</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="샘플더담기" />
        <Button class="btn_big confirm" txt="신청하기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //선택한 샘플 없음 -->

  <!-- 신청 갯수 초과 -->
  <div id="alert_into_cart3" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">해당 샘플은 <strong>최대 9개</strong>까지만 신청 가능합니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //신청 갯수 초과 -->

  <!-- 포인트 부족 -->
  <div id="alert_into_cart4" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">보유 샘플포인트가 부족합니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //포인트 부족 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-noactionbar'
})
const props = defineProps({
  link: {
    type: String,
    default: '#none'
  }
})
</script>

<style lang="scss" scoped>
.btn_wrap {
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;

  button {
    flex: 1;
  }
}

/* alert 모달 스타일 */
.modal_wrap.alert {
  .modal_content {
    padding: 3rem 2rem;

    .tit {
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
      line-height: 2rem;

      em {
        color: #00bc70;
        font-weight: bold;
      }
    }

    .point_info {
      margin-top: 2.5rem;
      padding: 7.8rem 0 1.5rem;
      text-align: center;
      background: #f5f5f5 url('@inmModule/assets/images/common/img_beauty_logo_108.png') center 1.5rem / 5.4rem auto no-repeat;
      border: 1px solid #eee;

      p {
        font-size: 1.4rem;
        font-weight: 400;
      }

      em {
        margin-top: 0.3rem;
        font-size: 1.8rem;
        color: #00bc70;
        line-height: 2.4rem;
        display: inline-block;
      }
    }
  }
}
</style>
