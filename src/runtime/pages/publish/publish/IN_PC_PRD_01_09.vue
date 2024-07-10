<template>
  <div class="inner">
    <div class="prod_detail_wrap">
      <!-- 상세 상단 -->
      <div class="prod_detail_top">
        <!-- 상품 이미지, 결제/카드/이벤트 영역 -->
        <div class="prod_swiper_wrap">
          <productDetailSwiper />
          <!-- 상품 이미지 슬라이드 -->
          <!-- 결제/카드/혜택, 이벤트 -->
          <div class="list_wrap">
            <dl class="benefit_list txt">
              <dt>결제/카드 헤택</dt>
              <dd>
                <ul>
                  <li>
                    <a href="#none">멤버십세일 결제혜택 모음 SAVE 5,000!!</a>
                  </li>
                  <li>
                    <a href="#none">KB Pay 3만원 결제 시, 최대 1만원 혜택</a>
                  </li>
                  <li>
                    <a href="#none">현대카드 M포인트 결제금액 20% 할인</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="benefit_list txt">
              <dt @click="modal.open('modal_review_report', 'alert modal_review_report')">관련 이벤트</dt>
              <dd>
                <ul>
                  <li>
                    <a href="#none">24.4.11~24.4.13<span class="title">~50% 멤버십세일 최대 6,000원 추가할인!</span></a>
                  </li>
                  <li>
                    <a href="#none">24.4.11~24.4.13<span class="title">그린티 씨드 세럼 대용량 [지구의달 에디션] 출시!</span></a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //상품 이미지, 결제/카드/이벤트 영역 -->
        <div class="prod_detail_info">
          <!-- 상품 정보 -->
          <productDetailInfo />
          <productMyPrice :isMo="false" />
          <div class="list_wrap">
            <productDetailBenefit />
            <dl class="benefit_list">
              <dt>뷰티포인트</dt>
              <dd>
                결제 금액의 1%적립
                <Icons class="tooltip" txt="뷰티포인트 안내 자세히 보기" @click="modal.open('modal_beauty_point_tip', 'layer tooltip')" />
                <div id="modal_beauty_point_tip" class="modal_wrap">
                  <!-- 뷰티포인트 적립안내 툴팁 -->
                  <div class="modal_container">
                    <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                    <div class="modal_content">
                      <h2>뷰티포인트 적립안내</h2>
                      <p>
                        아모레퍼시픽 뷰티포인트 통합회원은 회원 등급과 상관없이<br />(뷰티포인트 적립 대상상품에 한하여) 포인트가
                        적립됩니다.<br /><br />
                        <strong
                          >포인트 적립률은 제품별, 브랜드별로 상이하며,<br />쿠폰/뷰티포인트 사용 조건과 금액에 따라 상이할 수
                          있습니다.</strong
                        >
                      </p>
                    </div>
                  </div>
                  <div class="overlay" @click="modal.close(this)"></div>
                </div>
                <!-- //뷰티포인트 적립안내 툴팁 -->
              </dd>
              <dt>배송비</dt>
              <dd>2,500원 (20,000원 이상 구매 시 무료배송)</dd>
              <dt>유의사항</dt>
              <dd>3.7~9 / 기간내 n개 / 뷰티포인트 전용, APP 전용 / 할인제외, 증정제외, 구매금액 제외 /반품교환 불가능</dd>
            </dl>
          </div>
          <!-- 상품 정보 -->
          <!-- 상품 옵션 및 가격 : IN_PC_PRD_01_09_button 참고 -->
          <div class="prod_option">
            <!-- 단품 케이스 -->
            <p><strong>블랙티 유스 인핸싱 앰플 30mL</strong></p>
            <dl class="quantity_control">
              <dt>
                <span class="name">수량</span>
                <div class="count">
                  <Quantity _id="detail" quantity="1" />
                </div>
              </dt>
              <dd>
                <div class="price"><em>23,400</em>원</div>
                <div class="cost"><em>39,000</em>원</div>
              </dd>
            </dl>
            <!-- //단품 케이스 -->
          </div>
          <div class="total_price">
            <span>총 수량<em>1</em>개</span>
            <span
              >합계<span><em>23,400</em>원</span></span
            >
          </div>
          <!-- //상품 옵션 및 가격 -->

          <ProductBottomButtons />
          <!-- 구매 버튼 영역 : IN_PC_PRD_01_09_button 참고 -->

          <!-- 구매하기 플로팅 영역 : IN_PC_01_09_button 참고 -->
          <div class="floating_cart_wrap">
            <div class="inner">
              <Button class="btn_big confirm" txt="구매하기" @click="toggleStickyOption" />
              <div class="header">
                <strong>그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</strong>
                <div class="btn_wrap">
                  <button type="button" class="btn_share" @click="shareUI">공유하기</button>
                  <button type="button" class="btn_like" @click="zzimUI">찜하기</button>
                </div>
              </div>
              <div class="contents">
                <div class="cart_area">
                  <div class="option">
                    <!-- 단품 케이스 -->
                    <ul class="selected_list">
                      <li>
                        <span class="name">그린티 씨드 세럼 대용량 + 리필(130mL+80mL)</span>
                        <div class="box">
                          <div class="quantity_control">
                            <div class="count">
                              <Quantity _id="detail_1" :quantity="1" />
                            </div>
                          </div>
                          <span class="price">17,300원 <span class="cost">25,000원</span></span>
                        </div>
                      </li>
                    </ul>
                    <!-- //단품 케이스 -->
                  </div>
                </div>

                <div class="btn_area">
                  <div class="total_price">
                    <span>총 수량<em>2</em>개</span>
                    <span
                      >합계<span><em>60,000</em>원</span></span
                    >
                  </div>
                  <div class="btn_wrap">
                    <Button class="btn_big" txt="장바구니" @click="cartUI" />
                    <Button class="btn_big confirm" txt="바로구매" @click="modal.open('bottom_cart', 'bottom bottom_cart buy')" />
                  </div>
                  <p class="text_notify">옵션을 선택하지 않고 입고알림 신청을 하시면 옵션에 상관 없이 제품 입고 시 알림을 드립니다.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- //구매하기 플로팅 영역 -->
        </div>
      </div>
      <!-- //상세 상단 -->

      <ProductDetailOnepoint /><!-- 원포인트 -->

      <!-- 상세 탭 / 컨텐츠 -->
      <div class="prod_detail_cont">
        <productDetailTab />
        <!-- 상세 탭 -->
        <div class="tab_contents">
          <!-- 상세 탭 컨텐츠 -->
          <!-- 상세 정보 -->
          <div class="tab_cont" style="display: block">
            <!-- 제품 상세 배너 -->
            <a href="#none" class="prod_detail_banner">
              <img src="/images/sam/img_prod_detail_banner_pc.png" alt="" />
            </a>
            <!-- //제품 상세 배너 -->
            <ProductDetailConts />
          </div>
          <!-- //상세 정보 -->
          <!-- 리뷰 -->
          <div class="tab_cont tab_cont_review" style="display: block">
            <ProductReviewSummary limit="10" />
            <!-- 리뷰 요약 -->
            <!-- 리뷰 옵션 선택 -->
            <div class="review_option">
              <div class="sort">
                <button type="button" class="active" @click="setFilter">전체<span>195</span></button>
                <button type="button" @click="setFilter">포토리뷰<span>127</span></button>
                <button type="button" @click="setFilter">한달사용<span>52</span></button>
                <button type="button" @click="setFilter">체험단<span>0</span></button>
                <button type="button" @click="setFilter">샘플<span>10</span></button>
              </div>
              <div class="sort">
                <span>
                  <button type="button" @click="setFilter">추천순</button>
                  <Icons class="tooltip" txt="추천순 리뷰 기준 자세히 보기" @click="modal.open('modal_review_standard', 'layer tooltip')" />
                  <div id="modal_review_standard" class="modal_wrap">
                    <!-- 추천순 리뷰 기준 툴팁 -->
                    <div class="modal_container">
                      <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                      <div class="modal_content">
                        <h2>추천순 리뷰 기준</h2>
                        <p>리뷰의 내용을 단위별로 분석해<br />AI가 부여한 점수 산정 기준에 따라<br />높은 점수순으로 리뷰를 정렬합니다.</p>
                      </div>
                    </div>
                    <div class="overlay" @click="modal.close(this)"></div>
                  </div>
                  <!-- //추천순 리뷰 기준 툴팁 -->
                </span>
                <button type="button" @click="setFilter">최신순</button>
                <button type="button" @click="setFilter">평점순</button>
              </div>
            </div>
            <div class="review_option">
              <div class="custom">
                <Tabs
                  tabType="type_02"
                  :item="[
                    { txt: '발림성', Cnt: '1,123' },
                    { txt: '향', Cnt: '1,123' },
                    { txt: '피부결', Cnt: '1,123' },
                    { txt: '가격', Cnt: '1,123' }
                  ]" />
              </div>
            </div>
            <!-- //리뷰 옵션 선택 -->
            <!-- 리뷰 리스트 -->
            <div class="review_list_wrap">
              <ul class="review_list">
                <li v-for="(item, idx) in sample_review" :key="idx">
                  <div class="review_header">
                    <div class="user_info">
                      <span v-if="item.user" class="name">{{ item.user }}</span>
                      <span v-if="!item.user" class="name">회원정보없음</span>
                      <span class="age">{{ item.age }} {{ item.type }}</span>
                      <span class="buy_cnt">
                        <em>{{ item.count }}</em
                        >회 구매
                      </span>
                      <!-- <span class="type">{{ item.type }}</span> -->
                      <div class="rate">
                        <Reviewpoint :width="item.rate" />
                      </div>
                      <span class="date">{{ item.date }}</span>
                    </div>
                    <div class="btn_wrap">
                      <button v-if="!item.writer" type="button" @click="modal.open('modal_review_report', 'alert modal_review_report')">
                        신고
                      </button>
                      <button v-if="!item.writer" type="button">차단</button>
                      <button v-if="item.writer" type="button">
                        <em>수정</em>
                      </button>
                      <button v-if="item.writer" type="button">
                        <em>삭제</em>
                      </button>
                    </div>
                  </div>
                  <ProductReview :item="item" />
                  <!-- 리뷰 -->
                </li>

                <li>
                  <p>회원님의 요청으로 차단된 리뷰입니다.</p>
                </li>
              </ul>
              <div class="paging">
                <div>
                  <a href="#none" class="first">처음으로</a>
                  <a href="#none">1</a>
                  <a href="#none">2</a>
                  <a href="#none" class="active">3</a>
                  <a href="#none">4</a>
                  <a href="#none">5</a>
                  <a href="#none" class="last">마지막으로</a>
                </div>
              </div>
            </div>
            <!-- //리뷰 리스트 -->
            <section>
              <h2>이 제품의 카테고리 BEST</h2>
              <ProductDetailSwiperProgressBar />
            </section>
            <section>
              <h2>이 제품을 본 분들의 관심 제품</h2>
              <ProductDetailSwiperProgressBar />
            </section>
          </div>
          <!-- //리뷰 -->
          <!-- 유의사항 -->
          <div class="tab_cont">
            <ProductDetailNotice />
          </div>
          <!-- //유의사항 -->
          <!-- 문의 --
          <div class="tab_cont">d_type
          </div>
           //문의 -->
        </div>
        <!-- //상세 컨텐츠 -->
      </div>
    </div>

    <ProductQnaModal />
    <!-- 문의 모달(제품문의 작성) -->
    <ProductReviewPhotoAllModal />
    <!-- 포토리뷰 모아보기 모달-->
    <ProductReviewModal />
    <!-- 리뷰보기 모달 -->
    <ProductStockAlertModal />
    <!-- 입고알림 신청 -->
    <ProductReviewReport />
    <!-- 신고 팝업 -->
  </div>

  <!-- 플로팅 배너 -->
  <div class="floating_wrap bann01 open">
    <button type="button" class="btn_close" @click="float_close">닫기</button>
    <p>지금 <em>2명의 고객님</em>이<br />이 제품을 함께 보고 있습니다!</p>
    <div class="ipt_wrap">
      <Inputs _type="checkbox" _text="이 알림을 일주일간 보지 않기" />
    </div>
  </div>

  <div class="floating_wrap bann02 open">
    <button type="button" class="btn_close" @click="float_close">닫기</button>
    <p><strong class="fc_red">품절임박</strong>이 제품의 재고가 얼마 남지 않았습니다.<br />곧 품절될 예정이니 서두르세요!</p>
    <div class="ipt_wrap">
      <Inputs _type="checkbox" _text="이 알림을 일주일간 보지 않기" />
    </div>
  </div>
  <!-- //플로팅 배너 -->

  <!-- 피부 속성 필터 모달 -->
  <div id="modal_skin_type" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>피부 속성 필터</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="list_wrap">
          <h3>피부타입(필수 1개)</h3>
          <ul>
            <li>
              <Inputs _id="skinType1" _name="skinType" _type="checkbox" class="checkbox02" _text="건성" />
            </li>
            <li>
              <Inputs _id="skinType2" _name="skinType" _type="checkbox" class="checkbox02" _text="중성" />
            </li>
            <li>
              <Inputs _id="skinType3" _name="skinType" _type="checkbox" class="checkbox02" _text="지성" />
            </li>
            <li>
              <Inputs _id="skinType4" _name="skinType" _type="checkbox" class="checkbox02" _text="민감성" />
            </li>
            <li>
              <Inputs _id="skinType5" _name="skinType" _type="checkbox" class="checkbox02" _text="복합성" />
            </li>
            <li>
              <Inputs _id="skinType6" _name="skinType" _type="checkbox" class="checkbox02" _text="약건성" />
            </li>
            <li>
              <Inputs _id="skinType7" _name="skinType" _type="checkbox" class="checkbox02" _text="트러블성" />
            </li>
          </ul>

          <h3>연령대(필수 1개)</h3>
          <ul>
            <li>
              <Inputs _id="age1" _name="age" _type="checkbox" class="checkbox02" _text="10대" />
            </li>
            <li>
              <Inputs _id="age2" _name="age" _type="checkbox" class="checkbox02" _text="20대" />
            </li>
            <li>
              <Inputs _id="age3" _name="age" _type="checkbox" class="checkbox02" _text="30대" />
            </li>
            <li>
              <Inputs _id="age4" _name="age" _type="checkbox" class="checkbox02" _text="40대" />
            </li>
            <li>
              <Inputs _id="age5" _name="age" _type="checkbox" class="checkbox02" _text="50대 이상" />
            </li>
          </ul>
        </div>

        <div class="list_wrap">
          <h3>피부고민(최대 3개)</h3>
          <ul>
            <li>
              <Inputs _id="skinTrb1" _name="skinTrb" _type="checkbox" class="checkbox02" _text="모공" />
            </li>
            <li>
              <Inputs _id="skinTrb2" _name="skinTrb" _type="checkbox" class="checkbox02" _text="주름" />
            </li>
            <li>
              <Inputs _id="skinTrb15" _name="skinTrb" _type="checkbox" class="checkbox02" _text="탄력" />
            </li>
            <li>
              <Inputs _id="skinTrb3" _name="skinTrb" _type="checkbox" class="checkbox02" _text="블랙헤드" />
            </li>
            <li>
              <Inputs _id="skinTrb4" _name="skinTrb" _type="checkbox" class="checkbox02" _text="트러블" />
            </li>
            <li>
              <Inputs _id="skinTrb5" _name="skinTrb" _type="checkbox" class="checkbox02" _text="각질" />
            </li>
            <li>
              <Inputs _id="skinTrb6" _name="skinTrb" _type="checkbox" class="checkbox02" _text="잡티" />
            </li>
            <li>
              <Inputs _id="skinTrb7" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피지과다" />
            </li>
            <li>
              <Inputs _id="skinTrb8" _name="skinTrb" _type="checkbox" class="checkbox02" _text="건조함" />
            </li>
            <li>
              <Inputs _id="skinTrb9" _name="skinTrb" _type="checkbox" class="checkbox02" _text="민감성" />
            </li>
            <li>
              <Inputs _id="skinTrb10" _name="skinTrb" _type="checkbox" class="checkbox02" _text="색소침착" />
            </li>
            <li>
              <Inputs _id="skinTrb11" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피부톤" />
            </li>
            <li>
              <Inputs _id="skinTrb12" _name="skinTrb" _type="checkbox" class="checkbox02" _text="다크서클" />
            </li>
            <li>
              <Inputs _id="skinTrb13" _name="skinTrb" _type="checkbox" class="checkbox02" _text="피부결" />
            </li>
            <li>
              <Inputs _id="skinTrb14" _name="skinTrb" _type="checkbox" class="checkbox02" _text="홍조" />
            </li>
          </ul>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_outline btn_mid" txt="초기화" disabled />
        <Button class="btn_mid" txt="적용하기" disabled />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //피부 속성 필터 -->

  <!-- 공유 모달 -->
  <div id="modal_share" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>공유하기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">URL이 복사되었습니다.</div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //공유 모달 -->

  <!-- PC 찜 토스트 팝업 -->
  <div id="toast_zzim" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">찜 목록에 추가되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //PC 찜 토스트 팝업 -->

  <!-- PC 찜 해제 토스트 팝업 -->
  <div id="toast_zzim_unset" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">찜 목록에 삭제되었습니다.</div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //PC 찜 해제 토스트 팝업 -->
</template>

<script setup>
import { modal, setFilter, toast_pop } from '@inmModule/assets/js/common-ui'
import { sample_review } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})

const float_close = () => {
  const el = event.currentTarget
  el.parentElement.classList.remove('open')
}

onMounted(() => {
  //화면 우측 플로팅 배너 닫기
  const floatBanner = document.querySelectorAll('.floating_wrap')
  floatBanner.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('open')
    }, 6000)
  })

  // 구매하기 플로팅 버튼 보이기/숨기기
  const gnbH = document.getElementsByClassName('gnb_wrap')[0].offsetHeight
  const flotCart = document.getElementsByClassName('floating_cart_wrap')[0]
  window.addEventListener('scroll', () => {
    const posY = document.getElementsByClassName('onepoint')[0].getBoundingClientRect().y - gnbH - 60
    if (posY <= 0) {
      flotCart.classList.add('on')
    } else if (posY > 0) {
      flotCart.classList.remove('on')
    }
  })
})

const toggleStickyOption = () => {
  const fixedArea = document.getElementsByClassName('floating_cart_wrap')[0]
  fixedArea.classList.toggle('open')
}

const shareUI = () => {
  modal.open('modal_share', 'alert')
}

const zzimUI = (e) => {
  const btn = e.target
  btn.classList.toggle('on')
  if (btn.classList.contains('on')) {
    modal.open('toast_zzim', 'toast')
  } else {
    modal.open('toast_zzim_unset', 'toast')
  }
  toast_pop(2000)
}
</script>

<style lang="scss" scoped>
.inner {
  width: 1280px;
  margin: 0 auto;
}

.prod_detail_wrap {
  margin-top: 60px;

  .prod_detail_top {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;

    .prod_swiper_wrap {
      width: 500px;

      .list_wrap {
        margin: 0 35px;
      }
    }

    .prod_detail_info {
      width: 680px;

      .prod_option {
        padding: 20px 0;
        border-top: 1px solid #eee;

        p {
          margin-bottom: 10px;
          font-size: 15px;
          line-height: 20px;
          color: #333;
        }

        .option {
          width: 100%;

          label.check {
            font-size: 16px;
            line-height: 20px;
          }
        }

        & + p.txt {
          padding-top: 0;
          border-top: 0;
        }
      }

      .prod_select {
        margin-bottom: 10px;
      }

      .total_price {
        padding: 20px 0 30px;
        border-top: 1px solid #f5f5f5;
      }

      p.fc_red {
        padding-top: 20px;
        border-top: 1px solid #f5f5f5;
      }

      :deep(.selected_list) {
        li {
          padding: 1.5rem;
          display: block;
          position: relative;

          .name {
            font-size: 1.3rem;
            display: block;
            em {
              font-size: 1.3rem;
            }
          }

          .box {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .quantity_control {
            width: auto;
          }

          .price {
            margin: 1rem 0 0;
            text-align: right;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 3rem;
            display: block;
            position: relative;
          }

          .cost {
            font-size: 1rem;
            font-weight: 400;
          }

          .btn_del {
            position: absolute;
            right: 1rem;
            top: 1rem;
          }
        }
      }

      p.txt {
        padding: 20px 0;
        font-size: 18px;
        text-align: right;
        border-top: 1px solid #eee;
      }
    }

    :deep(.my_price) {
      margin-bottom: 30px;
    }

    :deep(.benefit_list.gift) {
      dd {
        ul {
          li {
            &:first-child {
              padding-top: 0;
            }

            .desc {
              font-size: 14px;

              span:last-child {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }

  .prod_detail_cont {
    .prod_detail_banner {
      display: block;
      margin-bottom: 60px;
      text-align: center;

      img {
        vertical-align: top;
      }
    }
  }

  section {
    padding: 50px 0;

    h2 {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }
  }

  .modal_review_standard {
    .modal_container {
      .modal_header {
        padding: 0;
        border-bottom: 0;

        .btn_close {
          width: 18px;
          height: 18px;
          top: 10px;
          right: 10px;

          &:before,
          &:after {
            border-top: 2px solid #000;
          }
        }
      }
    }

    .modal_content {
      padding: 30px 20px;

      h3 {
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #000;
      }

      p {
        font-size: 13px;
        color: #666;
        line-height: 18px;
        white-space: nowrap;

        em {
          font-weight: 600;
        }
      }
    }
  }

  .tab_cont {
    display: none;
    padding: 60px 0;
  }

  .review_option {
    padding: 20px 0;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;

    button {
      color: #666;
      vertical-align: middle;

      &.active {
        font-weight: 600;
        color: #000;
      }

      span {
        padding-left: 5px;
        font-size: 12px;
        color: #888;
        line-height: 15px;
        vertical-align: middle;
      }
    }

    .type {
      display: flex;
      align-items: center;
    }

    .sort {
      display: flex;
      align-items: center;

      & > * {
        color: #666;
        & + *:before {
          content: '';
          width: 1px;
          height: 10px;
          margin: 0 15px;
          vertical-align: middle;
          background-color: #eee;
          display: inline-block;
        }
      }
    }

    .custom {
      display: flex;
      align-items: center;

      :deep(.tab_wrap) {
        .type_02 {
          margin: 0;
          gap: 10px;

          li {
            padding: 0;

            &.current {
              button {
                color: #000;
                border-color: #000;

                span {
                  color: #00bc70;
                }
              }
            }

            button {
              padding: 6px 15px;
              color: #999;
              font-size: 12px;
              font-weight: 600;
              background-color: #fff;
              border: 1px solid #eee;

              span {
                font-size: 12px;
                font-weight: 600;
              }
            }
          }
        }
      }

      .txt {
        &:before {
          content: '';
          width: 1px;
          height: 10px;
          margin: 0 15px;
          background-color: #eeeeee;
          display: inline-block;
        }
      }
    }
  }
}

.floating_wrap {
  width: 280px;
  height: auto;
  padding: 0;
  right: 0;
  transform: translateX(100%);

  &.open {
    transform: translateX(-40px);
  }

  .btn_close {
    top: 10px;
    right: 10px;

    &:before,
    &:after {
      width: 18px;
      margin-left: 2px;
      border-top: 1px solid #000;
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }

  p {
    padding: 20px 30px;
    font-size: 16px;
    color: #666;
    line-height: 20px;

    &:before {
      content: '';
      width: 60px;
      height: 60px;
      margin: 10px auto;
      display: block;
    }

    em {
      font-weight: 600;
      color: #00bc70;
    }
  }

  &.bann01 {
    top: 279px;

    p {
      &:before {
        background: url('@inmModule/assets/images/common/icon_split.png') -420px -260px no-repeat;
      }
    }
  }

  &.bann02 {
    top: 526px;

    p {
      font-size: 13px;

      &:before {
        background: url('@inmModule/assets/images/common/icon_split.png') -360px -660px no-repeat;
      }

      .fc_red {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 24px;
        display: block;
      }
    }
  }

  .ipt_wrap {
    padding: 15px;
    text-align: left;
    border-top: 1px solid #eee;
  }
}

.modal_skin_type {
  .modal_container {
    width: 804px;
  }

  .modal_content {
    padding: 40px;
    display: flex;
    gap: 30px;

    .list_wrap {
      flex: 1;

      h3 {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
        color: #222;
        line-height: 27px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 8px;

        & + h3 {
          margin-top: 26px;
        }
      }
    }
  }

  .modal_footer {
    padding: 30px 20px 45px;

    button {
      width: 260px;
      border-radius: 5px;
    }
  }
}

/* 상품 상세 내 공통 사용 */
.bul_list {
  li {
    font-size: 13px;
    color: #666;
  }
}

.quantity_control {
  width: 100%;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .count {
    width: 122px;

    .count_wrap {
      :deep(.input_wrap) {
        .input {
          input {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }

  dd {
    button {
      margin-left: 10px;
    }
  }
}

button.tooltip {
  width: 16px;
  height: 16px;
  margin-left: 6px;
  font-size: 0;
  background: url('@inmModule/assets/images/common/icon_split.png') 0px -260px / 250px auto no-repeat;
  vertical-align: middle;
  display: inline-block;
}

.review_list_wrap {
  .review_list {
    & > li {
      padding: 40px 0;
      border-bottom: 1px solid #eee;

      & > p {
        text-align: center;
      }

      :deep(.review) {
        .txt {
          display: flex;
          gap: 10px;

          .mark {
            margin-bottom: 0;
          }
        }
      }

      .btn_wrap {
        button {
          em {
            color: #000;
            font-weight: 600;
          }
        }
      }
    }
  }

  .paging {
    margin: 60px 0 0;
  }
}

.floating_cart_wrap {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  transform: translateY(100%);
  transition: all 0.3s;

  &.on {
    .inner {
      & > button {
        top: -60px;
      }
    }
  }

  .inner {
    width: 1280px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #000;
    position: relative;

    & > button {
      width: 280px;
      padding: 0 30px;
      position: absolute;
      top: 0;
      right: -1px;
      justify-content: space-between;
      align-items: center;
      transition: top 0.3s;

      :deep(em) {
        padding: 0;
        font-size: 16px;
      }

      &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(135deg);
        transition: all 0.2s;
        transition: all 0.2s;
        position: relative;
        top: 5px;
      }
    }

    .header {
      padding: 20px 30px;
      font-size: 16px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn_wrap {
        display: flex;
        gap: 15px;

        .btn_share,
        .btn_like {
          width: 32px;
          height: 32px;
          font-size: 0;
          text-align: center;
          flex: none;

          &:before {
            content: '';
            width: 3.2rem;
            height: 3.2rem;
            vertical-align: middle;
            display: inline-block;
          }
        }

        .btn_share:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -170px -170px / 250px auto no-repeat;
        }

        .btn_like:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -215px -324px / 250px auto no-repeat;
        }

        .btn_like.on:before {
          background: url('@inmModule/assets/images/common/icon_split.png') -215px -360px / 250px auto no-repeat;
        }

        :deep(.btn_big):disabled {
          background-color: #666;
          em {
            color: #aaa;
          }
        }
      }
    }

    .contents {
      padding: 30px;
      display: flex;

      .cart_area {
        width: 920px;
        display: flex;

        & > * {
          width: 50%;
          max-height: 200px;
          padding-right: 20px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #e5e5e5;
            border-radius: 5px;
          }
          &::-webkit-scrollbar-track {
            background-color: transparent;
          }

          & + * {
            padding-left: 19px;
            padding-right: 0;
            border-left: 1px solid #eee;
          }
        }

        .option {
          .selected_list {
            margin-bottom: 10px;
          }
        }

        .selected_area {
          & > p {
            padding: 90px 0;
            color: #aaa;
            text-align: center;
          }
        }

        .selected_list {
          width: 100%;
          margin-top: 0;

          li {
            .name {
              font-size: 16px;
            }

            .price {
              font-size: 16px;

              .cost {
                font-size: 14px;
              }
            }
          }
        }
      }

      .btn_area {
        padding-left: 20px;
        margin-left: 20px;
        border-left: 1px solid #eee;
        flex: 1;

        .total_price {
          padding: 0 0 20px;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .btn_wrap {
          display: flex;
          flex-direction: column;
          gap: 3px;

          button {
            width: 100%;
          }
        }

        .text_notify {
          margin-top: 20px;
        }
      }
    }
  }

  &.open {
    transform: translateY(0);
    .inner {
      & > button {
        &:after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
  }
}

/* 신고 버튼 모달 PC버전 */
:deep(.modal_review_report) {
  .modal_container {
    width: 540px;

    .modal_header {
      padding: 20px;
      border-bottom: 1px solid #eee;
      h2 {
        font-size: 20px;
      }
    }

    .modal_content {
      padding: 0 30px 40px;

      h3 {
        margin: 20px 0 0;
        font-size: 16px;

        span {
          color: #888;
          font-size: 12px;
          font-weight: 400;
        }
      }

      .input_wrap {
        width: calc(50% - 8px);
        display: inline-block;

        &:nth-of-type(even) {
          margin-left: 15px;
        }

        &:last-child {
          width: 100%;
        }
      }
    }
  }
}
</style>
