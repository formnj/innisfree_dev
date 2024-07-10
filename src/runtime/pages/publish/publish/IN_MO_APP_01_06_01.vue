<template>
  <div class="sample_market_top">
    <h2>이니스프리 <em>샘플</em>마켓</h2>
    <p>오직 APP에서만 신청 가능한 이니스프리 샘플 마켓! 보유 샘플포인트로 자유롭게 샘플 신청해보세요~</p>
    <p class="date">신청 가능 기간 : 24.03.01 (수) ~ 24.04.31 (수)</p>

    <div class="point_box">
      <div>보유샘플포인트 <span class="point">10</span></div>
      <div>차감샘플포인트 <span class="point">05</span></div>
    </div>
  </div>

  <div class="inner">
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods.slice(1, 2)" :key="idx">
          <div class="goods_item checked" :class="item.status">
            <!-- 선택된 샘플일 경우 checked 클래스 추가 -->
            <div class="img_wrap">
              <span class="point">1 P</span>
              <span class="thumb_wrap">
                <span class="thumb">
                  <img :src="item.img" />
                </span>
              </span>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="limit em">최대 선택 3개</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>

        <li v-for="(item, idx) in sample_goods.slice(3, 4)" :key="idx">
          <!-- 품절일 경우(.sold_out)-->
          <div class="goods_item" :class="item.status">
            <div class="img_wrap">
              <span class="point">1 P</span>
              <span class="thumb_wrap">
                <span class="thumb">
                  <img :src="item.img" />
                </span>
              </span>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="em">일시품절</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>

        <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
          <div class="goods_item" :class="item.status">
            <div class="img_wrap">
              <span class="point">3 P</span>
              <span class="thumb_wrap">
                <span class="thumb">
                  <img :src="item.img" />
                </span>
              </span>
            </div>
            <div class="cont">
              <Hash v-if="item.hash" :item="item.hash" />
              <p class="name">{{ item.name }}</p>
              <p class="status_txt">
                <span class="em">일시품절</span>
                <span class="limit">최대 선택 3개</span>
                <span class="limit em">최대 선택 3개</span>
              </p>
              <Quantity quanity="0" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <section>
    <p class="list_tit">샘플마켓 유의사항</p>
    <ul class="bul_list star">
      <li>샘플마켓은 이니스프리 공식온라인몰 회원만 신청 가능하며, ID기준 신청기간 내 1회만 가능합니다.</li>
      <li>샘플은 신청 가능한 수량 내에서 중복으로 선택 가능합니다.</li>
      <li>샘플은 이니스프리 공식몰 회원만 APP에서 신청 가능한 서비스 입니다.</li>
      <li>
        샘플마켓 샘플은 0원이며 단독 구매 시 배송비 2,500원이 별도 부과 됩니다. (보유 뷰티포인트가 2,500P 이상일 경우 전액 뷰티포인트 결제
        가능 / 무료배송쿠폰 사용불가)
      </li>
      <li>2만원 이상 구매 시 배송비 무료 기준에 의해 배송비 0원으로 샘플을 신청 하실 수 있습니다.</li>
      <li>
        <em
          >배송완료 이후 30일 이내에 리뷰를 작성 하실 수 있습니다.<br />본품리뷰와 달리 샘플리뷰는 작성하더라도 뷰티포인트가 따로 적립 되지
          않습니다.</em
        >
      </li>
      <li>샘플마켓에 진행 시 보유 샘플포인트 내에서 구매 가능하며, 보유 샘플포인트를 모두 소진 하지 않아도 신청 가능합니다.</li>
      <li>신청한 샘플내역은 [마이페이지>주문내역] 상세에서 확인 가능합니다.</li>
      <li>APP에서 담은 샘플마켓 샘플은 PC와 모바일웹 장바구니에서 수량수정 및 삭제 후 결제가 가능합니다. (샘플신청은APP에서만 가능)</li>
      <li>
        샘플마켓에서 신청한 샘플은 취소/반품/교환이 불가하며, 문의사항은 [마이페이지>1:1문의 또는 고객센터 080-380-0114]로 문의
        주시기바랍니다.
      </li>
    </ul>
  </section>

  <div class="btn_wrap">
    <Button class="btn_big" txt="장바구니 담기" @click="modal.open('alert_into_cart', 'alert')" />
    <Button class="btn_big confirm" txt="바로 신청하기" @click="modal.open('alert_sample_apply', 'alert')" />
  </div>

  <!-- 신청하기 모달 -->
  <div id="alert_sample_apply" class="modal_wrap">
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
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-noactionbar'
})
const props = defineProps({
  link: {
    type: String,
    default: '#none'
  }
})

onMounted(() => {
  const list = document.querySelector('.sample_market_top + .inner')
  const topBox = document.getElementsByClassName('sample_market_top')[0]
  const gnbH = document.getElementsByClassName('gnb_wrap')[0].offsetHeight
  window.addEventListener('scroll', () => {
    const boxTop = list.getBoundingClientRect().y - gnbH
    if (!topBox.classList.contains('sticky') && boxTop <= 0) {
      topBox.classList.add('sticky')
    } else if (topBox.classList.contains('sticky') && boxTop > 0) {
      topBox.classList.remove('sticky')
    }
  })
})
</script>

<style lang="scss" scoped>
.sample_market_top {
  padding: 3rem 2.1rem;
  background: url('@inmModule/assets/mo_images/common/bg_top_sample_market.png');
  background-size: cover;
  letter-spacing: -0.1rem;

  &.sticky {
    .date {
      margin-bottom: 92px;
    }

    .point_box {
      width: 100%;
      position: fixed;
      top: 46px;
      left: 0;
      z-index: 3;
      margin: 0;
      border-radius: 0;
      background-color: #00bc70;

      .point {
        background-color: #fff;
        color: #00bc70;
        font-weight: 600;
      }
    }
  }

  h2 {
    margin-bottom: 1.2rem;
    font-size: 2.8rem;
    line-height: 3.6rem;
    color: #fff;

    em {
      color: #ffff82;
    }
  }

  p {
    width: 20rem;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.8rem;

    &.date {
      width: 100%;
      margin-top: 1.6rem;
    }
  }

  .point_box {
    margin-top: 3.8rem;
    padding: 1.5rem 2.5rem;
    background-color: #000;
    border-radius: 0.5rem;
    color: #fff;
    display: flex;

    & > div {
      flex: 1;

      & + div {
        margin-left: 2.5rem;
        padding-left: 2.5rem;
        border-left: 0.1rem solid #fff;
      }

      .point {
        width: 2.4rem;
        height: 2.4rem;
        margin-left: 0.8rem;
        font-size: 1.2rem;
        text-align: center;
        line-height: 2.4rem;
        background-color: #00bc70;
        border-radius: 1.2rem;
        display: inline-block;
      }
    }
  }
}

.inner {
  padding: 3rem 2.1rem;

  .list_wrap {
    .goods_list {
      margin: 0;
      justify-content: space-between;
      gap: 4rem 0;

      li {
        width: 16.5rem;
        padding: 0;

        :deep(.goods_item) {
          &.sold_out {
            .count_wrap {
              display: none;
            }
          }

          &.checked {
            .img_wrap {
              position: relative;

              &:after {
                content: '';
                width: 100%;
                height: 100%;
                background: url('@inmModule/assets/images/ui/overlay_checked.png') center / 10rem 10rem no-repeat;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }

          &.sold_out,
          &.coming_soon {
            .img_wrap {
              .thumb_wrap {
                position: relative;

                .thumb {
                  display: block;
                }

                &:before,
                &:after {
                  content: '';
                  display: block;
                }

                &:before {
                  background-color: rgba(0, 0, 0, 0.3);
                  background-position: 50%;
                  background-repeat: no-repeat;
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  z-index: 1;
                }
              }
            }
          }

          &.sold_out {
            .img_wrap .thumb_wrap:before {
              background-image: url('@inmModule/assets/images/ui/overlay_soldout.png');
            }
          }

          &.coming_soon {
            .img_wrap .thumb_wrap:before {
              background-image: url('@inmModule/assets/images/ui/overlay_comingsoon.png');
            }
          }

          .point {
            padding: 0.4rem 0.5rem;
            font-size: 1.2rem;
            color: #fff;
            background-color: #000;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
          }

          .cont {
            margin-top: 1.5rem;
            font-size: 1.4rem;

            .hash {
              button {
                padding: 0;
                font-size: 1.2rem;
                line-height: 1.6rem;
                background-color: transparent;
              }
            }

            .name {
              margin-top: 0.5rem;
            }

            .status_txt {
              margin: 1.5rem 0;

              & > span {
                color: #999;
                font-size: 1.2rem;
                display: block;
              }

              .limit {
                padding-left: 1.7rem;
                position: relative;

                &:before,
                &:after {
                  content: '';
                  width: 1px;
                  height: 8px;
                  background-color: #999;
                  display: inline-block;
                  position: absolute;
                  left: 0.4rem;
                  top: 50%;
                  transform: translateY(-50%);
                }

                &:after {
                  left: 0.4rem;
                  transform: translateY(-50%) rotate(90deg);
                }

                &.em {
                  &:before {
                    width: 0.6rem;
                    height: 0.9rem;
                    border-right: 0.1rem solid #ff0000;
                    border-bottom: 0.1rem solid #ff0000;
                    background-color: transparent;
                    transform: translateY(-60%) rotate(45deg);
                  }

                  &:after {
                    content: none;
                  }
                }
              }

              .em {
                color: #ff0000;
                font-weight: 600;
              }
            }

            .count_wrap {
              width: 10rem;

              button {
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
              }

              .label_wrap input[type='text'] {
                height: 3rem;
              }
            }
          }
        }
      }
    }
  }
}

section {
  padding: 3rem 2.1rem;
  border-top: 0.5rem solid #f5f5f5;

  .list_tit {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
  }

  .bul_list {
    li {
      font-size: 1.2rem;
      color: #888;
      line-height: 1.6rem;

      &:before {
        top: 0.23rem;
      }

      & + li {
        margin-top: 1rem;
      }

      em {
        color: #00bc70;
      }
    }
  }
}

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
