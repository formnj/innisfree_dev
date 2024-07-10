<template>
  <div class="inner">
    <div class="sub_title_wrap">
      <h4>내 피부 정보</h4>
      <a href="#none" class="btn_text">수정하기</a>
    </div>

    <!-- 프로필 등록 전 -->
    <div class="profile_wrap">
      <div>
        <a href="#none">피부 프로필 등록하고 혜택 받기</a>
        <p>
          프로필 등록 시 뷰티포인트 적립은 기본!<br />
          나에게 딱 맞는 맞춤형 추천까지!
        </p>
      </div>
    </div>
    <!-- //프로필 등록 전 -->
  </div>

  <Tabs tabType="type_01" :item="[{ txt: '작성 가능한 리뷰' }, { txt: '내가 작성한 리뷰' }]" :tabidx="1" />

  <div class="inner">
    <div class="list_wrap">
      <div class="list_top">
        <Selectbox
          :options="[
            { val: 'value', txt: '옵션01' },
            { val: 'value', txt: '옵션02' }
          ]" />
        <a href="#none" @click="modal.open('review_policy', 'fullMo')" class="btn_link_arrw">리뷰 정책</a>
      </div>
      <ul class="review_list">
        <li v-for="(item, idx) in sample_review.slice(0, 2)" :key="idx">
          <div class="review_header">
            <div class="user_info" data-type="date">
              <span class="date">{{ item.date }}</span>
              <span class="modi_date">{{ item.date }}</span>
            </div>
            <div class="btn_wrap ar">
              <button type="button">수정</button>
              <button type="button">삭제</button>
            </div>
          </div>
          <div class="review_cont">
            <p v-html="item.txt"></p>
          </div>
          <div class="review_header">
            <div class="user_info">
              <Reviewpoint :width="item.rate" />
              <span class="mark">한달사용</span>
            </div>
          </div>
          <GoodsItem :item="item.goods" class="type_column" />
        </li>
      </ul>
    </div>
  </div>

  <!-- modal -->
  <div id="review_policy" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>제품 리뷰 운영 정책</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="policy_wrap">
          <dl>
            <dt>[리뷰 작성 유의사항]</dt>
            <dd>
              <ul>
                <li>
                  상품과 관련이 없거나, 이미 등록된 사진, 타인의 리뷰에서 도용한 사진, 화면 캡쳐 등의 리뷰는 이니스프리 공식몰 리뷰 정책에
                  따라 게시가 제한될 수 있습니다.
                </li>
                <li>
                  상품과 관련 없는 내용이나 사진/동영상, 동일 문자 반복, 욕설이나 타인의 리뷰 도용 등의 내용이 포함 된 경우 통보없이 삭제 및
                  뷰티포인트 적립 혜택이 회수될 수 있습니다.
                </li>
                <li>한 주문 건 내 동일 제품을 여러 개 구매하시는 경우 1회만 리뷰 작성이 가능하며, 리뷰포인트 적립도 1회만 가능합니다.</li>
                <li>
                  단, 한 주문 건 내 동일 제품의 여러 옵션을 구매하시는 경우 옵션 별로 1회씩 리뷰 작성이 가능하며, 리뷰포인트 적립도 옵션 별
                  1회만 가능합니다.
                </li>
                <li>정기 구독 제품의 경우 1회차 제품만 리뷰 작성이 가능하며 일반 리뷰 정책을 따릅니다.</li>
              </ul>
            </dd>

            <dt>[리뷰 포인트 혜택 안내]</dt>
            <dd>
              <ul class="dashList">
                <li>
                  2022년 1월 1일부터 뷰티포인트 운영 정책에 따라 비구매성 포인트(이벤트 포인트)는 연간 누적 2,000,000P 를 초과하거나 동일한
                  적립 사유로 고객님의 일 적립 요청 횟수가 50회를 초과하는 경우, 뷰티포인트 적립이 불가능합니다.
                  <p>
                    비구매성 포인트 예시: 리뷰 작성, 피부정보 등록, 이벤트 참여, 공병수거 적립, 공병 프리퀀시 혜택, 특정 제품 구매 추가 적립
                    등으로 인한 적립 뷰티포인트
                  </p>
                  <p>잔여 한도 내에서는 부분 적립됩니다.</p>
                  <p>누적 포인트는 사용기한, 적립된 포인트의 사용/소멸 여부 등과 관계없이 초과적립분에 대해서는 적립 제한됩니다.</p>
                </li>
                <li>리뷰 작성은 무제한으로 가능하나, 월 최대 6,000P까지 적립이 제한됩니다.</li>
                <li>한달리뷰 작성 시 일반 한달리뷰의 경우 50P, 포토 한달리뷰의 경우 뷰티포인트 100P 적립됩니다.</li>
                <li>샘플 마켓 신청 제품의 경우 샘플 리뷰를 작성하더라도 뷰티포인트가 따로 자동 적립 되지 않습니다.</li>
                <li>
                  리뷰 작성으로 적립된 뷰티포인트는 적립일 기준 90일간 사용할 수 있으며, 유효기간 경과 후에는 별도 알람없이 소멸됩니다.<br />
                  (소멸 예정 포인트에 대해 회사는 별도의 고지에 대한 의무를 부담하지 않습니다. 자세한 포인트 소멸 예정일은 뷰티포인트 사이트
                  및 어플에서 확인 가능합니다.)
                </li>
                <li>리뷰 이벤트 진행 제품은 뷰티포인트 적립액이 달라질 수 있습니다.</li>
                <li>
                  작성하신 리뷰를 삭제하면&nbsp;적립되었던 리뷰포인트가 회수되며, 리뷰 작성 가능 기간이&nbsp;지나지 않은 경우에는 재작성후
                  포인트 재적립이 가능합니다. ( 리뷰&nbsp;삭제 시점에 리뷰 작성 가능 기간이 지난 경우 리뷰 재작성
                  및&nbsp;포인트&nbsp;재적립이 불가합니다. )
                </li>
                <li>작성하신 리뷰를 수정하면 기존 적립된 리뷰포인트가 회수된 후 일반 리뷰 적립 기준에 맞게 재적립 됩니다.</li>
                <li>
                  이벤트성으로 적립된 비구매성포인트의 경우, 이벤트 기간 이후 리뷰 수정 시 동일 수준의 포인트 적립이 불가할 수 있으며, 이미
                  적립된 비구매성 포인트 차감 후 일반 리뷰 적립 포인트 기준으로 재적립됩니다.&nbsp;
                </li>
                <li>이벤트 성으로 적립된 비구매성포인트의 경우 월 최대 6,000P적립 제한에 포함되지 않습니다.</li>
              </ul>
            </dd>

            <dt>[리뷰 작성 기간]</dt>
            <dd>
              <ul class="dashList">
                <li>일반리뷰/포토리뷰는[배송완료기준]으로부터 30일까지 작성이 가능합니다.</li>
                <li>오프라인 매장에서 구매한 제품의 경우 구매 후 하루가 지난 시점부터 리뷰 작성이 가능합니다.</li>
                <li>한달리뷰는 [배송완료기준]으로부터 한 달이 지난 시점부터 한 달 동안 작성할 수 있는 리뷰입니다.(31일~60일 기준)</li>
                <li>체험단과 샘플마켓 리뷰의 경우, 한달리뷰 작성이 불가합니다.</li>
                <li>
                  체험단/일부 이벤트 리뷰의 경우, 약관 및 이벤트 종료 기간과 별개로 리뷰 작성 가능 기한이 상이 할 수 있습니다.
                  마이페이지&gt;내리뷰&gt;작성가능리뷰 내 상품 별 리뷰 작성 가능 기한을 확인해주세요.
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //modal -->
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

import { sample_review } from '@inmModule/test/data/publish/dummyData'

import { modal } from '@inmModule/assets/js/common-ui'
/* //component sample data */

const emit = defineEmits(['title'])
onMounted(() => {
  emit('title', '리뷰')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.sub_title_wrap {
  .btn_text {
    color: #999;
    font-size: 1.2rem;
    text-decoration: underline;
    text-underline-position: from-font;
  }
}

.tab_wrap {
  margin-right: -2.1rem;
  margin-bottom: 3rem;
  margin-left: -2.1rem;
}

.list_top {
  text-align: right;
  display: block;
  .select {
    margin-bottom: 2rem;
    display: block;
  }
}

.review_list {
  border-top: 2px solid #000;
  > li {
    padding: 3rem 0;
    border-bottom: 0.1rem solid #eee;
    display: flex;
    flex-direction: column-reverse;
  }
}

.profile_wrap {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border: 0.1rem solid #eee;
  text-align: center;
  div {
    p {
      margin-top: 0.8rem;
      color: #999;
      line-height: 1.8rem;
    }
  }
}

.review_header {
  margin-bottom: 0;
  .ar:before {
    display: none;
  }

  .user_info {
    justify-content: space-between;

    &[data-type='date'] {
      justify-content: flex-start;
    }

    .mark {
      padding: 0.2rem 0.5rem;
      background-color: #00bc70;
      color: #fff;
      font-size: 1rem;

      &:before {
        content: unset;
      }
    }
  }
}

.review_cont {
  margin: 2rem 0;
}

:deep(.goods_item) {
  margin-bottom: 2rem;

  &.type_column {
    .img_wrap a {
      .thumb {
        width: 3.6rem;
        height: 4.8rem;
      }
    }

    .cont {
      .name {
        font-size: 1.3rem;
      }
      .price {
        display: none;
      }
    }
  }
}

:deep(.modal_content) {
  padding: 2rem 2.1rem 3rem !important;
}

.policy_wrap {
  dt {
    font-weight: 400;
  }
  dd + dt {
    margin: 1.5rem 0 0.5rem 0;
  }
  li {
    margin-top: 0.5rem;
    padding-left: 0.6rem;
    color: #777;
    font-size: 1.3rem;
    line-height: 1.35;
    position: relative;
    &:before {
      content: '-';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
    }
  }
}
</style>
