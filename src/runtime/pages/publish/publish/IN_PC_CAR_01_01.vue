<template>
  <div class="inner flex">
    <div class="cart_area">
      <div class="title_wrap">
        <div>
          <h2>장바구니</h2>
        </div>
      </div>

      <div class="list_wrap">
        <div class="allChk_wrap">
          <Inputs _type="checkbox" _text="전체선택" isDisabled="true" />
          <div class="btn_wrap">
            <Button class="btn_min_outline" txt="선택삭제" />
          </div>
        </div>

        <!-- no data -->
        <ul class="cart_list">
          <li>
            <p class="no_data">
              <strong>장바구니에 담긴 제품이 없습니다.</strong>
              <span>하단의 특가혜택 제품들을 살펴보세요.</span>
            </p>
          </li>
        </ul>
        <!-- no data -->
      </div>

      <!-- custom banner -->
      <div class="custom_banner">
        <a href="#none">
          <img src="/images/sam/bg_cart_banner.png" alt="" />
          <div class="text">
            <div class="t1" style="color: #fff">토스페이 전용카드로 혜택을~</div>
            <div class="t2" style="color: #fff">5,000원 결제일 캐시백!!</div>
          </div>
        </a>
      </div>
      <!-- //custom banner -->
    </div>

    <div class="payment_area">
      <div class="log_box">
        <h4>로그인</h4>
        <p>로그인을 하시면 지 보고있는 제품을<br />나중에도 확인하실 수 있습니다.</p>
        <Button class="btn_outline" txt="로그인하기" />
      </div>

      <div class="payment">
        <h4>결제정보</h4>
        <ul class="bul_list star">
          <li><strong>최종 할인혜택(쿠폰,결제금액조건 할인 등)은 주문서에서 적용됩니다.</strong></li>
          <li style="color: #eb5b54"><strong>최종결제금액에 따라 증정품 내역이 장바구니와 달라질 수 있습니다.</strong></li>
        </ul>
        <dl>
          <dt>주문금액</dt>
          <dd><strong>0</strong>원</dd>
        </dl>
        <dl class="desc">
          <dt>제품할인</dt>
          <dd><strong>0</strong>원</dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd>무료</dd>
        </dl>
        <div class="ord_total_price">
          <dl>
            <dt>결제예정금액</dt>
            <dd><strong>0</strong>원</dd>
          </dl>
        </div>
      </div>
      <Button class="btn_big confirm" txt="쇼핑하러 가기" />
    </div>
  </div>

  <div class="inner">
    <div class="title_wrap">
      <h3>이니스프리 혜택모음</h3>
      <a href="IN_PC_HOM_01_04" class="btn_link_arrw">특가 혜택 더보기</a>
    </div>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
        </li>
        <li v-for="(item, idx) in sample_goods.slice(0, 8)" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" />
        </li>
      </ul>
    </div>
  </div>

  <!-- 증정품 모달 -->
  <div id="modal_gift" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>증정품안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="giveaway_list">
          <dl>
            <dt>
              <img src="/images/sam/giveaway_01.png" />
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_02.png" />
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_03.png" />
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //증정품 모달 -->
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-default'
})
</script>

<style lang="scss" scoped>
.inner {
  width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  &.flex {
    display: flex;
    justify-content: space-between;
  }

  & > .title_wrap {
    width: 100%;
    margin-top: 12px;
  }

  .title_wrap {
    & > h3 {
      font-size: 24px;
    }

    & > .btn_link_arrw {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }
}

.cart_area {
  width: 890px;

  .title_wrap {
    margin-bottom: 60px;
  }

  .list_wrap {
    border-bottom: 1px solid #eee;

    .allChk_wrap {
      padding-bottom: 20px;
      border-bottom: 2px solid #000;
    }

    .cart_list {
      border-top: 0;
    }
  }
}

.payment_area {
  width: 320px;
  height: 100%;
  margin-top: 162px;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;

  & > div {
    padding: 30px 25px;

    & + div {
      border-top: 1px solid #eee;
    }
  }

  .log_box {
    background-color: #fcfcfd;
    h4 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;

      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background: url('@inmModule/assets/images/common/icon_split.png') -480px -220px no-repeat;
        display: inline-block;
        vertical-align: middle;
      }
    }

    p {
      margin: 10px 0 25px;
      line-height: 22px;
    }

    .btn_outline {
      width: 100%;
      background-color: #fff !important;
      border-color: #eee;
    }
  }

  .payment {
    h4 {
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 600;
    }

    ul {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }

    dl {
      color: #333;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & + dl {
        margin-top: 15px;
      }

      &.desc {
        dt {
          font-weight: 400;

          &:before {
            content: '';
            width: 6px;
            height: 6px;
            margin-right: 5px;
            border-left: 1px solid #aaa;
            border-bottom: 1px solid #aaa;
            display: inline-block;
            position: relative;
            top: -4px;
          }
        }
      }

      dt {
        font-weight: 600;
      }

      dd {
        strong {
          font-weight: 500;
        }
      }
    }

    .ord_total_price {
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      dt {
        color: #000;
      }
      dd {
        color: #ff0000;
        font-size: 18px;
        font-weight: 600;
        strong {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }
  }

  button {
    width: 100%;
  }
}

.custom_banner {
  margin: 100px 0;

  a {
    width: 100%;
    display: block;
    position: relative;

    .text {
      position: absolute;
      left: 60px;
      top: 50%;
      transform: translateY(-50%);

      .t1 {
        font-size: 32px;
      }

      .t2 {
        padding-top: 10px;
        font-size: 32px;
        font-weight: 600;
      }
    }
  }
}
</style>
