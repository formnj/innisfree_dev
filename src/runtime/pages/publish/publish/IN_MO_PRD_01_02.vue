<template>
  <div class="prod_detail_info">
    <ProductDetailInfo :isMo="true" />
    <!-- 제품 정보/리뷰수 -->
  </div>

  <ProductMyPrice :isMo="true" />
  <!-- 제품 혜택가 -->

  <section>
    <div class="list_wrap">
      <productDetailBenefit />
      <!-- 증정혜택 -->
      <!-- 결제 혜택, 관련 이벤트 -->
      <dl class="benefit_list txt">
        <dt>결제/카드 혜택</dt>
        <dd>
          <ul>
            <li><a href="#none">멤버십세일 결제혜택 모음 SAVE 5,000!!</a></li>
            <li><a href="#none">KB Pay 3만원 결제 시, 최대 1만원 혜택</a></li>
            <li><a href="#none">현대카드 M포인트 결제금액 20% 할인</a></li>
          </ul>
        </dd>
      </dl>

      <dl class="benefit_list txt">
        <dt>관련 이벤트</dt>
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
      <!-- //결제 혜택, 관련 이벤트 -->
    </div>
  </section>

  <!-- 상세 탭 / 컨텐츠 -->
  <div class="prod_detail">
    <productDetailTab :isMo="true" />
    <!-- 상세정보 탭 -->

    <div class="tab_contents">
      <!-- 탭 컨텐츠 -->
      <!-- 상세정보 -->
      <div class="tab_cont" style="display: block">
        <!-- 제품 상세 배너 -->
        <a href="#none" class="prod_detail_banner">
          <img src="/images/sam/img_prod_detail_banner.png" alt="" />
        </a>
        <!-- //제품 상세 배너 -->

        <ProductDetailConts :isMo="true" />

        <section>
          <dl class="benefit_list">
            <dt>뷰티포인트</dt>
            <dd>
              결제 금액의 1%적립
              <Icons class="tooltip" txt="뷰티포인트 안내 자세히 보기" @click="modal.open('modal_beauty_point_tip', 'alert tooltip')" />
              <div id="modal_beauty_point_tip" class="modal_wrap">
                <!-- 뷰티포인트 적립안내 툴팁 -->
                <div class="modal_container">
                  <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                  <div class="modal_content">
                    <h2>뷰티포인트 안내</h2>
                    <p class="txt">
                      아모레퍼시픽 뷰티포인트 통합회원은 회원 등급과 상관없이 (뷰티포인트 적립 대상상품에 한하여) 포인트가 적립됩니다.<br /><br />
                      <strong
                        >포인트 적립률은 제품별, 브랜드별로 상이하며,<br />쿠폰/뷰티포인트 사용 조건과 금액에 따라 상이할 수
                        있습니다.</strong
                      >
                    </p>
                  </div>
                  <div class="modal_footer">
                    <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
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

          <ProductDetailOnepoint /><!-- 원포인트 -->
        </section>

        <section>
          <ProductReviewSummary :isMo="true" limit="5" :usePhotoList="false" />
          <!-- 리뷰 요약 -->
        </section>

        <!-- 리뷰 리스트 -->
        <div class="review_list_wrap">
          <div class="no_content">등록된 리뷰가 없습니다.</div>
          <!-- 리뷰없을 경우 -->

          <ul class="review_list has_bd">
            <li v-for="(item, idx) in sample_review.slice(0, 3)" :key="idx">
              <div class="review_header">
                <div class="rate">
                  <Reviewpoint :width="item.rate" />
                </div>
                <strong class="buy_cnt"><em>1</em>회 구매</strong>
              </div>

              <div class="review_header">
                <div class="user_info">
                  <span class="name">{{ item.user }}</span>
                  <span class="age">{{ item.age }}</span>
                  <span class="type">{{ item.type }}</span>
                  <span class="date ar">{{ item.date }}</span>
                </div>
              </div>

              <ProductReview :item="item" :isMo="true" />
              <!-- 리뷰 -->

              <div class="btn_area">
                <button v-if="item.useMore" type="button" class="btn_more" @click="toggleReviewTxt">더보기</button>
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
            </li>
          </ul>

          <div class="btn_wrap">
            <Button class="btn_outline btn_list_btm" txt="리뷰 전체보기" />
          </div>
        </div>
        <!-- //리뷰 리스트 -->

        <section>
          <div class="sub_title_wrap">
            <div>
              <h4>함께 진행하는 기획전 제품</h4>
              <button type="button" @click="modal.open('alert_prod_alert', 'alert tooltip')">유의사항</button>
            </div>
            <p class="explain">탄탄쫀쫀 콜라겐 꿀 조합 할인 혜택</p>
          </div>

          <div class="swiper_wrap">
            <swiper :slides-per-view="'auto'">
              <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
                <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
              </swiper-slide>
            </swiper>
          </div>
        </section>

        <section>
          <div class="sub_title_wrap">
            <div>
              <h4>이 제품과 같은 라인</h4>
              <a href="#none" class="btn_link_arrw"><strong>브라이트닝 포어</strong> 라인</a>
            </div>
          </div>

          <div class="swiper_wrap">
            <swiper :slides-per-view="'auto'">
              <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
                <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
              </swiper-slide>
            </swiper>
          </div>
        </section>

        <section>
          <div class="sub_title_wrap">
            <div>
              <h4>이 제품의 카테고리 BEST</h4>
            </div>
          </div>

          <div class="swiper_wrap goods_list">
            <swiper :slides-per-view="'auto'">
              <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
                <span class="ranking" v-if="idx < 9">{{ '0' + (idx + 1) }}</span>
                <span class="ranking" v-else>{{ idx + 1 }}</span>
                <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
              </swiper-slide>
            </swiper>
          </div>
        </section>

        <section>
          <div class="sub_title_wrap">
            <div>
              <h4>이 제품을 본 분들의 관심 제품</h4>
            </div>
          </div>
          <div class="swiper_wrap">
            <swiper :slides-per-view="'auto'">
              <swiper-slide v-for="(item, idx) in sample_goods.slice(0, 10)" :key="idx" class="item">
                <GoodsItem :item="item" :link="item.link" class="type_cart" :useMark="false" />
              </swiper-slide>
            </swiper>
          </div>
        </section>
      </div>
      <!-- //상세정보 -->

      <!-- 리뷰 -->
      <div class="tab_cont tab_cont_review">
        <!-- 리뷰없을 경우 -->
        <div class="no_review">
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_review_point_info', 'fullMo modal_review_point_info')">
            리뷰 포인트 혜택
          </button>
          <div class="btn_wrap">
            <Button class="btn_mid" txt="리뷰작성 (최대 +600P)" />
          </div>
          <div class="no_content">등록된 리뷰가 없습니다.</div>
        </div>
        <!-- //리뷰없을 경우 -->

        <section class="no_bd">
          <div class="sub_title_wrap">
            <div>
              <h4>Editor 포스팅</h4>
            </div>
          </div>
          <div class="list_wrap post_list_wrap">
            <ul class="post_list">
              <li v-for="(item, idx) in samplePost" :key="idx">
                <a :href="link">
                  <span class="thumb">
                    <img :src="item.img" alt="" />
                  </span>
                  <span class="info">
                    <img :src="item.editor.photo" alt="" class="photo" />
                    <span>{{ item.editor.name }}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <ProductReviewSummary :isMo="true" limit="5" />
          <!-- 리뷰 요약 -->
        </section>

        <!-- 리뷰 옵션 선택 -->
        <div class="review_option">
          <div class="sort">
            <button type="button" class="btn_dropdown" @click="modal.open('review_filter', 'bottom')">전체 리뷰</button>
            <div id="review_filter" class="modal_wrap">
              <!-- 리뷰 필터 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this)"></button>
                </div>
                <div class="modal_content">
                  <ul class="select_list">
                    <li class="active">
                      <a href="#none" class="active">전체 리뷰</a>
                    </li>
                    <li><a href="#none">포토 리뷰</a></li>
                    <li><a href="#none">한달 사용</a></li>
                    <li><a href="#none">체험단</a></li>
                    <li><a href="#none">샘플마켓</a></li>
                  </ul>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
          </div>

          <div class="sort">
            <button type="button" class="btn_dropdown" @click="modal.open('review_sort', 'bottom')">추천순</button>
            <div id="review_sort" class="modal_wrap">
              <!-- 리뷰 정렬 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this)"></button>
                </div>
                <div class="modal_content">
                  <ul class="select_list">
                    <li class="active">
                      <a href="#none" class="active">추천순</a>
                    </li>
                    <li><a href="#none">최신순</a></li>
                    <li><a href="#none">평점순</a></li>
                  </ul>
                  <div class="inner">
                    <p class="i_noti">
                      추천순 : 리뷰의 내용을 단위별로 분석해 AI가 부여한 점수 산정 기준에 따라 높은 점수 순으로 리뷰를 정렬합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
          </div>
        </div>

        <div class="filter_wrap">
          <Tabs
            tabType="type_02"
            :item="[
              { txt: '발림성', Cnt: '1,123' },
              { txt: '향', Cnt: '1,123' },
              { txt: '피부결', Cnt: '1,123' },
              { txt: '가격', Cnt: '1,123' }
            ]"
            :tabidx="0" />
        </div>

        <div class="select_wrap">
          <selectbox
            :options="[
              { val: 'op0', name: 'op', txt: '전체' },
              { val: 'op1', name: 'op', txt: '1호 샐먼 베이지' },
              { val: 'op2', name: 'op', txt: '2호 피치 베이지' }
            ]" />
        </div>
        <!-- //리뷰 옵션 선택 -->

        <!-- 리뷰 리스트 -->
        <div class="review_list_wrap">
          <ul class="review_list">
            <li v-for="(item, idx) in sample_review" :key="idx">
              <div class="review_header">
                <div class="rate">
                  <Reviewpoint :width="item.rate" />
                </div>
              </div>

              <div class="review_header">
                <div class="user_info">
                  <span class="name">{{ item.user }}</span>
                  <span class="age">{{ item.age }}</span>
                  <span class="type">{{ item.type }}</span>
                  <span class="date ar">{{ item.date }}</span>
                </div>
              </div>

              <ProductReview :item="item" :isMo="true" />
              <!-- 리뷰 -->

              <div class="btn_area">
                <button v-if="item.useMore" type="button" class="btn_more" @click="toggleReviewTxt">더보기</button>
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
            </li>

            <li>
              <p>회원님의 요청으로 차단된 리뷰입니다.</p>
            </li>
          </ul>

          <div class="btn_wrap">
            <Button class="btn_outline btn_list_btm" txt="더보기" />
          </div>
        </div>
        <!-- //리뷰 리스트 -->
      </div>
      <!-- //리뷰 -->

      <!-- 유의사항 -->
      <div class="tab_cont">
        <div class="inner">
          <ProductDetailNotice />
        </div>
      </div>
      <!-- //유의사항 -->
    </div>

    <div class="bottom_fixed"><ProductBottomButtons :isMo="true" /><!-- 구매 버튼 --></div>
  </div>

  <ProductQnaModal />
  <!-- 제품문의 작성 모달 -->
  <ProductReviewPhotoAllModal />
  <!-- 포토리뷰 모아보기 모달-->
  <ProductReviewModal :isMo="true" />
  <!-- 리뷰보기 모달 -->

  <!-- 기획전 유의사항 -->
  <div id="alert_prod_alert" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <h2>기획전 제품 구매 시 유의사항</h2>
        <p class="txt">
          <strong>납작아이브로우 / 컨실러 2개이상 구매시 40%</strong><br /><br />동일 제품 및 교차 구매 가능 / 기간 내 최대 10 구매 가능<br />기간
          : 4/14(일) - 5/1(수) 23:59:00까지
        </p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //기획전 유의사항 -->

  <!-- 리뷰 포인트 혜택 안내 -->
  <div id="modal_review_point_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>리뷰 포인트 혜택 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="table">
          <table>
            <caption>
              리뷰 포인트 혜택 안내
            </caption>
            <colgroup>
              <col style="width: 50%" />
              <col style="width: 25%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">활동내용</th>
                <th scope="col">적립포인트</th>
                <th scope="col">적립 제한</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>일반리뷰 (90자 미만 리뷰)</td>
                <td>150P</td>
                <td rowspan="6">월 최대<br />6,000P<br />적립가능</td>
              </tr>
              <tr>
                <td>포토리뷰 (90자 미만 리뷰)</td>
                <td>300P</td>
              </tr>
              <tr>
                <td>일반리뷰 (90자 이상 리뷰)</td>
                <td>300P</td>
              </tr>
              <tr>
                <td>포토리뷰 (90자 이상 리뷰)</td>
                <td>600P</td>
              </tr>
              <tr>
                <td>한달사용리뷰 (텍스트)</td>
                <td>50P</td>
              </tr>
              <tr>
                <td>한달사용리뷰 (포토)</td>
                <td>100P</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>리뷰 포인트 혜택 안내</h3>
        <ul class="bul_list dot">
          <li>
            2022년 1월 1일부터 뷰티포인트 운영 정책에 따라 비구매성 포인트(이벤트 포인트)는 연간 누적 2,000,000P 를 초과하거나 동일한 적립
            사유로 고객님의 일 적립 요청 횟수가 50회를 초과하는 경우, 뷰티포인트 적립이 불가능합니다.
            <ul class="bul_list dot">
              <li>
                비구매성 포인트 예시: 리뷰 작성, 리뷰 프로필 등록, 이벤트 참여, 공병수거 적립, 공병 프리퀀시 혜택, 특정 제품 구매 추가 적립
                등으로 인한 적립 뷰티포인트
              </li>
              <li>잔여 한도 내에서는 부분 적립됩니다.</li>
              <li>누적 포인트는 사용기한, 적립된 포인트의 사용/소멸 여부 등과 관계없이 초과적립분에 대해서는 적립 제한됩니다.</li>
            </ul>
          </li>
          <li>리뷰 작성은 무제한으로 가능하나, 월 최대 6,000P까지 적립이 제한됩니다.</li>
          <li>한달리뷰 작성 시 일반 한달리뷰의 경우 50P, 포토 한달리뷰의 경우 뷰티포인트 100P 적립됩니다.</li>
          <li>샘플 마켓 신청 제품의 경우 샘플 리뷰를 작성하더라도 뷰티포인트가 따로 자동 적립 되지 않습니다.</li>
          <li>
            리뷰 작성으로 적립된 뷰티포인트는 적립일 기준 90일간 사용할 수 있으며, 유효기간 경과 후에는 별도 알람없이 소멸됩니다.
            <ul class="bul_list dot">
              <li>
                (소멸 예정 포인트에 대해 회사는 별도의 고지에 대한 의무를 부담하지 않습니다. 자세한 포인트 소멸 예정일은 뷰티포인트 사이트
                및 어플에서 확인 가능합니다.)
              </li>
            </ul>
          </li>
          <li>리뷰 이벤트 진행 제품은 뷰티포인트 적립액이 달라질 수 있습니다.</li>
          <li>
            작성하신 리뷰를 삭제하면 적립되었던 리뷰포인트가 회수되며, 리뷰 작성 가능 기간이 지나지 않은 경우에는 재작성후 포인트 재적립이
            가능합니다. ( 리뷰 삭제 시점에 리뷰 작성 가능 기간이 지난 경우 리뷰 재작성 및 포인트 재적립이 불가합니다. )
          </li>
          <li>작성하신 리뷰를 수정하면 기존 적립된 리뷰포인트가 회수된 후 일반 리뷰 적립 기준에 맞게 재적립 됩니다.</li>
          <li>
            이벤트성으로 적립된 비구매성포인트의 경우, 이벤트 기간 이후 리뷰 수정 시 동일 수준의 포인트 적립이 불가할 수 있으며, 이미 적립된
            비구매성 포인트 차감 후 일반 리뷰 적립 포인트 기준으로 재적립됩니다.
          </li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //리뷰 포인트 혜택 안내 -->

  <ProductReviewReport />
  <!-- 신고 팝업 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { sample_review, sample_goods, samplePost } from '@inmModule/test/data/publish/dummyData'
// import Swiper core and required components
import SwiperCore from 'swiper'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { definePageMeta } from '#imports'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y])

definePageMeta({
  layout: 'publish-mo-home-search-cart'
})

const closeNotify = () => {
  document.querySelector('.swiper_notify').style.display = 'none'
}

const toggleReviewTxt = (e) => {
  const el = e.target
  const txt = el.parentElement.parentElement.querySelector('.txt')
  txt.classList.toggle('open')
  el.classList.toggle('open')
  if (el.classList.contains('open')) {
    el.innerText = '접기'
  } else {
    el.innerText = '더보기'
  }
}
</script>
<style lang="scss" scoped>
.prod_swiper_wrap {
  position: relative;

  .swiper_notify {
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.3rem;
    color: #fff;
    background-color: #000;
    align-items: center;
    bottom: 0;
    right: 7rem;
    position: absolute;
    z-index: 3;
    display: inline-flex;

    em {
      color: #00bc70;
      padding-right: 0.4rem;
      font-weight: 600;

      &.type02 {
        color: #ffff82;
      }
    }

    .btn_close {
      width: 1.6rem;
      height: 1.6rem;
      margin-left: 1rem;
      font-size: 0;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') -10.5rem -7rem / 25rem auto no-repeat;
      display: inline-block;
    }
  }
}

section {
  padding: 3rem 2.1rem;
  border-top: 0.5rem solid #f5f5f5;

  & + .acco_wrap + section {
    border-top: 0;
  }

  &.no_bd {
    border-top: 0;
  }

  .sub_title_wrap {
    display: block;
    margin: 0 0 2rem;

    > div {
      display: flex;
      justify-content: space-between;

      h4 {
        display: flex;
        justify-content: space-between;
      }

      button {
        color: #000;
        text-decoration: underline;
      }
    }

    .explain {
      margin-top: 0.5rem;
    }
  }
}

.prod_detail {
  border-top: 0.5rem solid #f5f5f5;
}

.prod_detail_info {
  padding: 3rem 2.1rem;
}

:deep(.benefit_list) {
  &.gift {
    padding: 0;
    border-top: 0;
    flex-direction: column;

    dd {
      width: 100%;
    }
  }

  &.txt {
    dd {
      width: 100%;
    }
  }
}

:deep(.text_notify) {
  margin-top: 1rem;
}

.tab_cont {
  display: none;

  .inner {
    padding: 3rem 2.1rem;
  }
}

.prod_detail_banner {
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;

  img {
    vertical-align: top;
  }
}

:deep(.prod_detail_conts) {
  height: 84rem;
}

:deep(.onepoint) {
  margin-top: 3rem;
  padding: 3rem 0;
  font-size: 1.3rem;
  text-align: center;
  display: block;

  .hash {
    justify-content: center;
  }

  .icons {
    margin: 1rem 0 0;
    justify-content: center;
  }
}

:deep(.prod_detail_review) {
  .summary {
    padding: 0;
    border: 0;
    display: block;

    .total_point {
      min-height: auto;
      margin: 0;
      padding: 0;
      flex-direction: row;
      justify-content: space-between;

      .emoji_txt {
        & > * {
          &:before {
            width: 16px;
            height: 16px;
            background-size: auto 16px;
          }
        }
        p {
          font-size: 1.4rem;
          font-weight: 600;
          color: #000;
        }
      }
    }

    .review {
      .txt {
        margin-top: 1.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
      }

      .i_noti {
        padding: 1rem 1rem 1rem 3.1rem;
        background-color: #f5f5f5;

        &:before {
          top: 1rem;
          left: 1.1rem;
        }
      }
    }
  }

  .list_photo_wrap {
    margin-bottom: 0;
    ul {
      li {
        width: auto;
        height: 6.4rem;

        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
}

.review_option {
  padding: 0 2.1rem;
  display: flex;
  justify-content: space-between;

  & > .sort {
    display: flex;

    & > button {
      font-size: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;

      &:after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        margin-left: 0.5rem;
        background: url('@inmModule/assets/images/common/icon_split.png') -11rem -6rem / 25rem auto no-repeat;
        display: inline-block;
      }
    }

    .modal_wrap {
      .modal_content {
        padding: 0 0 34px;
      }
      .inner {
        padding: 0 2.1rem;
      }
    }
  }
}

.review_list_wrap {
  padding: 0 2.1rem 3rem;

  .no_content {
    margin: 3rem 0 5rem;
  }

  .review_list {
    &.has_bd {
      border-top: 1px solid #eee;
    }

    & > li {
      padding: 3rem 0;
      border-bottom: 0.1rem solid #eee;

      &:last-child {
        border-bottom: 0;
      }

      & > p {
        text-align: center;
      }

      .review_header {
        display: flex;
        justify-content: space-between;

        .buy_cnt {
          font-size: 1.2rem;

          em {
            color: #00bc70;
          }
        }

        .user_info {
          .date:before {
            display: none;
          }
        }
      }

      .btn_area {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          font-size: 1.2rem;
          color: #999;

          &.btn_more {
            &:after {
              content: '';
              width: 0.8rem;
              height: 0.8rem;
              margin-left: 0.8rem;
              border-bottom: 1px solid #999;
              border-left: 1px solid #999;
              display: inline-block;
              transform: rotate(-45deg);
              position: relative;
              top: -0.2rem;
              transition: all 0.3s;
            }

            &.open {
              &:after {
                transform: rotate(135deg);
                top: 0.2rem;
              }
            }
          }

          em {
            color: #000;
            font-weight: 600;
          }
        }

        .btn_wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-left: auto;

          & > button {
            & + button:before {
              content: '';
              width: 0.1rem;
              height: 1rem;
              margin: 0 1.5rem;
              background-color: #eee;
              display: inline-block;
            }
          }
        }
      }
    }

    :deep(.review) {
      .option_name {
        margin: 2rem 0;
      }

      .review_photo_list_wrap {
        display: flex;
        margin: 2rem -2.1rem 0;
        overflow-x: scroll;
        overflow-y: hidden;

        &::-webkit-scrollbar {
          width: 0;
        }

        .review_photo_list {
          margin: 0 2.1rem;

          li {
            width: 10.9rem;
            height: 10.9rem;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}

.no_review {
  padding: 3rem 2.1rem;
  text-align: center;

  .btn_link_arrw {
    font-size: 1.3rem;
    color: #666;

    &:after {
      width: 0.6rem;
      height: 0.6rem;
      border-color: #999;
      vertical-align: middle;
    }
  }

  .btn_wrap {
    margin-top: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    button {
      width: 100%;
    }
  }

  .no_content {
    margin: 3rem 0 5rem;
  }
}

.prod_qna_wrap:deep {
  .modal_container {
    .modal_header {
      border-bottom: 0;
    }
    .modal_content {
      padding: 0 2rem;
    }

    .modal_footer {
      padding: 0;
    }
  }
}

.modal_photo_review_all:deep {
  .modal_container {
    width: 100%;
    height: 100%;
    max-height: 100%;

    .modal_content {
      padding: 0 1.6rem;

      .list_photo_wrap {
        ul {
          gap: 0.3rem;
          li {
            width: 10.9rem;
            height: 10.9rem;
          }
        }
      }
    }
  }
}

.modal_review:deep {
  .modal_container {
    width: 100%;
    height: 100%;
    max-height: 100%;

    .modal_content {
      padding: 0 1.6rem;
      overflow: hidden;

      .review {
        .option_name {
          margin: 2rem 0;
        }

        .review_photo_list_wrap {
          display: flex;
          margin: 2rem -2.1rem;
          overflow-x: scroll;
          overflow-y: hidden;

          .review_photo_list {
            margin: 0 2.1rem;

            li {
              width: 10.9rem;
              height: 10.9rem;
              flex-shrink: 0;
            }
          }
        }
      }
    }
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

.swiper_wrap {
  margin: 0 -2.1rem;

  .swiper {
    display: flex;
    padding: 0 2.1rem;
  }

  .item {
    width: 10.9rem;

    & + .item {
      margin-left: 0.3rem;
    }

    :deep(.goods_item) {
      position: relative;
      width: 10.9rem;

      .review_score {
        display: none;
      }
    }
  }
}

:deep([class*='btn_'][class*='_outline']).btn_list_btm {
  width: 100%;
  font-size: 14px;
  border-color: #eee;

  em {
    color: #666;
  }
}

.post_list_wrap {
  display: flex;
  margin: 0 -2.1rem;
  padding: 0 2.1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .post_list {
    flex-wrap: nowrap;

    li {
      width: 10.9rem;
      flex-shrink: 0;

      a,
      span {
        display: inline-block;
      }

      .info {
        margin-top: 0.8rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;

        .photo {
          width: 2.4rem;
        }
      }
    }
  }
}

.filter_wrap {
  margin: 1.6rem 0 0;
  padding: 0 2.1rem 2.2rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  position: relative;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  :deep(.tab_wrap) {
    ul.type_02 {
      margin: 0;
      gap: 0.8rem 0.5rem;
      flex-wrap: nowrap;

      li {
        margin: 0;
        padding: 0;

        & > * {
          padding: 0.7rem 1.5rem;
          font-size: 1.2rem;
          background: #fff;
          border-color: #eee;

          em {
            height: 3rem;
            padding: 0 14px;
            line-height: 3rem;
            font-weight: 600;
          }

          span {
            font-size: 1.2rem;
          }
        }

        &.current {
          & > * {
            border-color: #000;
            span {
              color: #00bc70;
            }
          }
        }
      }
    }
  }
}

.select_wrap {
  margin-top: 2rem;
  padding: 0 2.1rem;
}

.modal_wrap.modal_review_point_info {
  .modal_content {
    padding: 3rem 2.1rem;

    h3 {
      margin: 4rem 0 1.5rem;
      padding-bottom: 1rem;
      font-size: 1.6rem;
      border-bottom: 1px solid #000;
    }

    .bul_list {
      li {
        color: #666;
        .bul_list {
          margin: 1rem 0;
          li {
            padding-left: 8px;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: #999;

            &:before {
              width: 2px;
              height: 2px;
              top: 7px;
            }
          }
        }
      }
    }
  }
}

.table {
  border-top: 0.1rem solid #999;
  position: relative;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    caption {
      position: absolute;
      z-index: -1;
      font-size: 0;
      text-indent: -99999px;
    }
    th {
      padding: 1.1rem 1rem;
      color: #666;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      border-bottom: 0.1rem solid #eee;
      border-left: 0.1rem solid #eee;
      background: #f5f5f5;
    }
    td {
      padding: 1.5rem 1rem;
      color: #000;
      font-size: 1.3rem;
      line-height: 1.6rem;
      text-align: center;
      border-left: 0.1rem solid #eee;
      border-bottom: 0.1rem solid #eee;
      sup {
        line-height: 1;
      }
    }
    th:first-child,
    td:first-child {
      border-left: 0;
    }
  }
  &.row {
    th,
    td {
      text-align: left;
    }
  }
}

:deep(.prod_notice_wrap) {
  .bul_list {
    li {
      font-size: 1.3rem;
    }
  }
}

.bottom_fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}
</style>
