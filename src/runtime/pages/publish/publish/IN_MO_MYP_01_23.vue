<template>
  <button type="button" class="btn_link_arrw" @click="modal.open('modal_review_point_info', 'fullMo modal_review_point_info')">
    리뷰 포인트 혜택
  </button>
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
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-home-search-cart'
})
</script>
<style lang="scss" scoped>
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
</style>
