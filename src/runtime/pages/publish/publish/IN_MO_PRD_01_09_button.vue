<template>
  <div class="inner">
    <ProductBottomButtons :isMo="true" />
    <!-- 기본(장바구니/바로구매) -->
    <ProductBottomButtons :isMo="true" :useStock="true" />
    <!-- 입고알림 신청 -->
    <ProductBottomButtons :isMo="true" :useDisabled="true" />
    <!-- 구매불가 -->
    <Button txt="제품구매 + 추가구성품 할인 – 추가구성품 선택 x" @click="modal.open('alert1', 'alert')" />
    <Button txt="결제금액 + 제품구매 할인" @click="modal.open('alert2', 'alert')" />
    <Button txt="추가구성품 제한" @click="modal.open('alert3', 'alert')" />
    <Button txt="옵션선택" @click="modal.open('alert4', 'alert')" />
    <Button txt="일시품절" @click="modal.open('alert5', 'alert')" />
    <Button txt="로그인 필요" @click="modal.open('alert6', 'alert')" />
    <Button txt="체험단 대상자(구매이력포함)가 아닐 경우" @click="modal.open('alert7', 'alert')" />
    <Button txt="체험단 제품을 장바구니에 이미 담은 경우" @click="modal.open('alert8', 'alert')" />
    <Button txt="회원 구매 혜택" @click="modal.open('modal_member_benefit', 'alert modal_member_benefit')" />

    <!-- 제품구매 + 추가구성품 할인 – 추가구성품 선택 x -->
    <div id="alert1" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">추가구성품 할인은 본품 1개 구매당 1개 구매 가능합니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //제품구매 + 추가구성품 할인 – 추가구성품 선택 x -->

    <!-- 결제금액 + 제품구매 할인 -->
    <div id="alert2" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">
            해당제품은 최종결제금액 00,000원 이상 결제시 0,000원으로 구매 가능합니다.<br />
            최종 결제금액 미충족시 할인 적용되지 않습니다.
          </p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //결제금액 + 제품구매 할인 -->

    <!-- 추가구성품 제한 -->
    <div id="alert3" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">추가구성품 할인은 본품 1개 구매당 1개 구매 가능합니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //추가구성품 제한 -->

    <!-- 옵션선택 -->
    <div id="alert4" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">옵션을 선택해주세요.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //옵션선택 -->

    <!-- 일시품절 -->
    <div id="alert5" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">일시품절 제품입니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //일시품절 -->

    <!-- 로그인 필요 -->
    <div id="alert6" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">로그인이 필요한 기능입니다.<br />로그인 하시겠습니까?</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big" txt="취소" @click="modal.close(this)" />
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //로그인 필요 -->

    <!-- 체험단 대상자(구매이력포함)가 아닐 경우 -->
    <div id="alert7" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">해당제품은 체헌단전용제품으로 대상자가 아닙니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //체험단 대상자(구매이력포함)가 아닐 경우 -->

    <!-- 체험단 제품을 장바구니에 이미 담은 경우 -->
    <div id="alert8" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>알림</h2>
          <p class="txt">체험단전용 제품은 1개만 주문 가능합니다.<br />이미 장바구니에 체험단전용제품이 담겨 있습니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //체험단 제품을 장바구니에 이미 담은 경우 -->

    <!-- 회원 구매 혜택 -->
    <div id="modal_member_benefit" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_content">
          <button class="btn_close" @click="modal.close(this)">닫기</button>
          <h2>회원 구매 혜택</h2>
          <p class="txt">
            로그인 후 구매 가능합니다.<br /><br />
            뷰티포인트 적립, 쿠폰할인, 이벤트 참여 등 다양한 회원 혜택을 받으세요.
          </p>
          <div class="gray_box">
            <p>
              지금 신규가입하면?<br />최대 <em>70,000원</em><br />쿠폰팩 즉시지급<br /><a href="#none" class="btn_link_arrw">자세히보기</a>
            </p>
            <span class="img_wrap">
              <img src="@inmModule/assets/mo_images/common/img_mem_coupon.png" alt="70,000원" />
              <span class="flag">쿠폰팩</span>
            </span>
          </div>
        </div>
        <div class="modal_footer">
          <Button class="btn_big" txt="취소" @click="modal.close(this)" />
          <Button class="btn_big confirm" txt="로그인" />
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
    <!-- //회원 구매 혜택 -->
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-default'
})
</script>

<style lang="scss" scoped>
.inner {
  :deep(.btn_wrap) {
    margin-bottom: 2rem;
  }

  > button {
    margin-bottom: 2rem;
  }
}

.modal_wrap {
  &.alert {
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

.modal_member_benefit {
  .gray_box {
    margin-top: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.8rem;

      em {
        color: #00bc70;
      }

      a {
        margin-top: 0.8rem;
        color: #666;
        font-weight: 400;
        text-decoration: underline;
        display: inline-block;

        &:after {
          width: 0.6rem;
          height: 0.6rem;
          margin-left: 3px;
          border-color: #666;
        }
      }
    }

    .img_wrap {
      position: relative;

      img {
        width: 12.4rem;
      }

      .flag {
        width: 3.6rem;
        height: 3.6rem;
        line-height: 3.6rem;
        text-align: center;
        font-size: 1rem;
        color: #fff;
        background-color: #000;
        border-radius: 3.6rem;
        position: absolute;
        top: -1rem;
        right: -1rem;
      }
    }
  }
}
</style>
