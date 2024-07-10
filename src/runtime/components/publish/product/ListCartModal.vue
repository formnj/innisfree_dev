<template>
  <div id="modal_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>장바구니</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="cart_box">
          <div class="row">
            <div class="pdt_img">
              <span class="thumb">
                <em><img src="https://images.innisfree.co.kr/upload/product/36116_l_S_140.jpg?T202404300927" alt="" /></em>
              </span>
            </div>
            <div class="pdt_info">
              <div class="name">
                제품명은 최대 두줄까지 노출됩니다. 말줄임 표시
                됩니다.상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명
              </div>
              <p class="price">
                <strong>1,800원</strong>
                <em>3,000원</em>
              </p>
            </div>
          </div>
          <Inputs _type="checkbox" _text="품절상품 제외" />
          <ProdSelectbox
            :selectedPriceShow="false"
            :options="[
              {
                val: 'op1',
                name: 'op',
                txt: '1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지 1호 샐먼 베이지',
                soldout: true,
                stockAlert: true
              },
              { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
            ]" />
          <div class="total">
            합계 <span class="price"><em>17,300</em>원</span>
          </div>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="장바구니" @click="modal.open('alert_cart', 'alert')" />
        <Button class="btn_ confirm" txt="바로구매" @click="modal.open('alert_cart2', 'alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <!-- 장바구니 담기 완료 -->
  <div id="alert_cart" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">프로모션 혜택 안내</p>
        <p class="txt">장바구니 담기가 완료되었습니다.</p>
        <div class="gray_box">
          <p class="tit">3/14 ~ 31까지</p>
          <p class="txt"><em>5개</em> 더 담으면 50%할인</p>
          <p class="txt">
            <em>1개</em> 더 담으면 30%할인,<br />
            <em>2개</em> 더 담으면 50%할인
          </p>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="장바구기가기" />
        <Button class="btn_big confirm" txt="제품 더 담기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //장바구니 담기 완료 -->

  <!-- 바로구매 -->
  <div id="alert_cart2" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">프로모션 혜택 안내</p>
        <p class="txt">장바구니 담기가 완료되었습니다.</p>
        <div class="gray_box">
          <p class="tit">3/14 ~ 31까지</p>
          <p class="txt"><em>5개</em> 더 담으면 50%할인</p>
          <p class="txt">
            <em>1개</em> 더 담으면 30%할인,<br />
            <em>2개</em> 더 담으면 50%할인
          </p>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="바로구매" />
        <Button class="btn_big confirm" txt="제품 더 담기" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //바로구매 -->
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
</script>

<style lang="scss" scoped>
.modal_wrap {
  &.alert.modal_cart {
    .modal_content {
      padding: 30px;

      .cart_box {
        .row {
          display: flex;
          gap: 20px;

          .pdt_img {
            width: 60px;
            flex-shrink: 0;
          }

          .pdt_info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .name {
              font-size: 16px;
              line-height: 20px;
              text-overflow: ellipsis;
              white-space: normal;
              word-wrap: break-word;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .price {
              em {
                font-weight: 300;
                font-size: 13px;
                line-height: 1;
                color: #999;
                text-decoration: line-through;
                margin-left: 10px;
              }
            }
          }

          & + .input_wrap {
            text-align: right;
            margin: 10px 0 30px;
          }
        }

        .total {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;

          .price {
            margin-left: 10px;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: -0.18px;
            color: #00bc70;
            display: flex;
            align-items: center;

            em {
              margin-right: 3px;
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              letter-spacing: -0.2px;
            }
          }
        }
      }
    }
  }

  &.alert {
    .modal_content {
      padding: 30px 20px;

      .sub_tit {
        font-size: 13px;
        color: #00bc70;
        margin-bottom: 0.6rem;
      }

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

        em {
          color: #00bc70;
          font-weight: bold;
        }
      }

      .gray_box {
        margin-top: 20px;
        padding: 15px;
        background-color: #f5f5f5;

        .tit {
          font-size: 13px;
          line-height: 20px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
