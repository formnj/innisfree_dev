<template>
  <div class="inner">
    <div class="title_wrap">
      <h2>멤버십</h2>
    </div>
    <Tabs
      id="membership_tab"
      tabType="type_03"
      :item="[{ txt: '멤버십 등급/혜택안내' }, { txt: '뷰티포인트 안내' }, { txt: '모바일 앱 다운로드' }]"
      :tabidx="1" />
    <div class="user_wrap">
      <div class="user_grade">
        <h3>형민우님은 <strong>웰컴</strong> 고객 입니다.</h3>
        <ul class="user_list">
          <li>
            <span>VIP 승급까지</span>
            <span>61,800 원 부족</span>
          </li>
          <li>
            <span>최근 6개월 구매 금액</span>
            <span>38,200 원</span>
          </li>
          <li>
            <span>다음 등급 산정일</span>
            <span>2024.05.01</span>
          </li>
        </ul>
        <!-- 웰컴일 경우 -->
        <div class="grade">
          <!-- 등급마다 grade에 클래스 추가, 아래 예시 참고
              1. 웰컴: 추가 클래스 없음
              2. VIP : vip
              3. 그린티클럽 : gtclub -->
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //웰컴일 경우 -->

        <!-- vip일 경우 -->
        <div class="grade vip">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //vip -->

        <!-- gtclub일 경우 -->
        <div class="grade gtclub">
          <div class="grade_bar">grade bar</div>
          <div class="txt">
            <span class="t1">웰컴</span>
            <span class="t2">VIP</span>
            <span class="t3">그린티클럽</span>
          </div>
        </div>
        <!-- //gtclub -->
      </div>
      <ul>
        <li class="point">
          <div>
            뷰티포인트
            <Icons class="tooltip" @mouseenter="modal.open('modal_beauty_point_tip', 'layer')" />
            <div id="modal_beauty_point_tip" class="modal_wrap">
              <!-- 뷰티포인트 적립안내 툴팁 -->
              <div class="modal_container">
                <div class="modal_header">
                  <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
                </div>
                <div class="modal_content">
                  <h3>뷰티 포인트</h3>
                  <p>
                    뷰티 포인트는 쌓을수록 아름다워지는 아모레퍼시픽 통합<br />멤버십 포인트 입니다.<br /><br />
                    <em>
                      아모레퍼시픽의 화장품, 생활용품, 건강식품의 모든 브랜드와<br />
                      이니스프리, 에뛰드, 에스쁘아의 고객들에게 제공되는 통합<br />
                      멤버십 서비스입니다. 뷰티포인트는 회원이 제품 구매 시<br />
                      적립해 드리는 뷰티포인트를 모아 브랜드에 관계없이 자유롭게<br />
                      사용할 수 있으며, 다양한 제휴 서비스도 누릴 수 있습니다.
                    </em>
                  </p>
                </div>
              </div>
              <div class="overlay" @click="modal.close(this)"></div>
            </div>
            <!-- //뷰티포인트 적립안내 툴팁 -->
          </div>
          <span class="num"><strong>1,000</strong>P</span>
        </li>
        <li class="coupon">
          <p>보유 쿠폰</p>
          <span class="num"><strong>6</strong>장</span>
        </li>
      </ul>
    </div>

    <!-- 비로그인 시 영역 -->
    <div class="user_wrap no_info">
      <p>로그인하고 고객님의 등급과 혜택을 확인해 보세요.</p>
      <button type="button">로그인</button>
    </div>

    <section class="beauty_point">
      <Tabs id="beauty_tab" :item="[{ txt: '뷰티포인트' }, { txt: 'VIP등급안내' }]" :tabidx="0" tabType="type_04" />
      <div class="beauty_wrap">
        <div class="header">
          <h4>뷰티 포인트는 쌓을수록 아름다워지는<br />아모레퍼시픽 통합 멤버십 서비스 입니다.</h4>
          <p>
            뷰티포인트는 회원이 제품 구매 시 적립해 드리는 뷰티포인트를 모아<br />브랜드에 관계없이 자유롭게 사용할 수 있으며, 다양한 제휴
            서비스도 누릴 수 있습니다.
          </p>
          <span> 아모레퍼시픽 전 매장&#40;온/오프라인&#41;에서 자유롭게 합산 및 사용하실 수 있습니다. </span>
          <Button class="btn_outline btn_shop" txt="사용가능매장" @mouseenter="modal.open('modal_beauty_shop_tip', 'layer')" />
          <div id="modal_beauty_shop_tip" class="modal_wrap">
            <!-- 뷰티포인트 사용가능매장 툴팁 -->
            <div class="modal_container">
              <div class="modal_header">
                <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
              </div>
              <div class="modal_content">
                <h3>사용가능 매장</h3>
                <p>
                  아모레퍼시픽 전 매장(온/오프라인)에서<br />
                  자유롭게 합산 및 사용하실 수 있습니다.<br />
                  아모레퍼시픽, 설화수, 헤라, 라네즈, 마몽드,<br />
                  아이오페, 아리따움, 한율, 프리메라, 리리코스,<br />
                  베리떼, makeON, 이니스프리, 에뛰드, 에스쁘아,<br />
                  오설록, VB프로그램, 롤리타렘피카, ANNICKGOUTAL,<br />
                  려, 미장센, 해피바스, 일리, 오딧세이, 미래파,<br />
                  틴:클리어, 댄트롤, 메디안, 송염
                </p>
              </div>
            </div>
            <div class="overlay" @click="modal.close(this)"></div>
          </div>
          <!-- //뷰티포인트 사용가능매장 툴팁 -->
        </div>
        <div class="sub_title_wrap">
          <h4>뷰티포인트 적립안내</h4>
        </div>
        <div class="table">
          <table>
            <caption>
              포인트 적립안내
            </caption>
            <colgroup>
              <col style="width: 100%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">제품 구매 포인트 적립</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>결제금액의 1%<br /><span>*할인 구매 시 적립 불가</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="desc_wrap">
          <p>유의사항</p>
          <ul>
            <li class="point">
              제품 구매시 연간 적립 가능한 최대 뷰티포인트는 50만 포인트로 초과분에 대해서는 포인트 적립이 되지 않습니다.
            </li>
            <li>제품 환불 시, 적립된 뷰티포인트도 자동으로 취소됩니다.</li>
            <li>
              AP 및 계열사 쇼핑몰에서 로그인 후 구매 혹은 결제하시면 포인트가 적립됩니다.<br />
              단, 온라인 쇼핑몰의 경우 배송상품의 특성상 상품 수령 후, 해당 온라인 쇼핑몰에서 구매확정 절차인 [수취확인]을 클릭하셔야
              포인트가 적립됩니다.
            </li>
            <li>이니스프리 공식 온라인몰은 배송완료 후 15일 후에 포인트가 적립됩니다.</li>
            <li>할인쿠폰/교환권/일부 상품권으로 결제 시 뷰티포인트가 적립되지 않습니다.</li>
            <li>
              뷰티포인트 카드 미소지 등의 이유로 현장에서 적립을 받지 못하셨을 경우, 구매일로부터 60일 이내에 제품 구매 매장에 구매
              영수증이나 카드대금 청구서를 제시하면 뷰티포인트 적립이 가능합니다.
            </li>
            <li>내부 심사기준에 따라 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 적립률은 회사 정책에 따라 사전 고지 후 변동될 수 있습니다.</li>
            <li>
              뷰티포인트는 제휴사 포인트 전환, 공병으로도 적립하실 수 있습니다. 자세한 내용은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수
              있습니다.
            </li>
          </ul>
        </div>
        <div class="sub_title_wrap">
          <h4>
            뷰티포인트 사용안내
            <p>
              적립된 뷰티포인트는 <em>P=1</em>원가치를 지니며, 사용처별 세부 기준은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수 있습니다.
            </p>
          </h4>
        </div>
        <div class="point_info">
          <ul>
            <li>사용시 명의자 본인 방문<br /><span class="sub">&#40;모바일/실물 카드 or 신분증 소지&#41;</span></li>
            <li>제품 결제시 부분 또는 전체 사용<br /><span class="sub">&#40;사용처별, 제품별 상이할 수 있음&#41;</span></li>
          </ul>
        </div>
        <div class="help_wrap">
          <ul>
            <li>
              할인 특가, 염가 판매 등 일부 상품은 뷰티포인트 사용 대상에서 제외될 수 있으며, 뷰티포인트를 사용하여 뷰티포인트로 상품을
              교환한 후 구매를 취소할 경우 차감된 포인트는 다시 적립됩니다.
            </li>
          </ul>
        </div>
        <div class="sub_title_wrap">
          <h4>
            뷰티포인트 유효기간 및 소멸안내
            <p>유효기간과 소멸 기준을 확인하여 포인트를 관리하실 수 있습니다.</p>
          </h4>
        </div>
        <div class="desc_wrap">
          <p>유의사항</p>
          <ul>
            <li>
              기본 적립 포인트는 추가 구매 적립이 없는 경우 자동 소멸되며 회사는 별도의 고지에 대한 의무를 부담하지 않습니다.<br />
              소멸 예정 및 소멸 시기 등 관련된 정보는 아모레몰 홈페이지 또는 모바일 앱에서 확인 가능합니다.<br />
              ※ 할인 적용 제품 구매 시에는 포인트가 적립되지 않습니다.<br />
              &#40;단, 아리따움의 경우, 할인 후 실결제금액에 대해 뷰티포인트 적립 가능&#41;
            </li>
            <li>이벤트 포인트의 경우 각 포인트마다 별도 지정된 소멸 일자를 따릅니다.</li>
            <li>
              포인트 사용 후 취소할 경우 차감된 포인트는 기존 유효기간으로 복구되며 유효기간이 지난 포인트의 경우 취소일로부터 3일간
              유효기간이 적용됩니다. &#40;1회에 한함&#41;
            </li>
            <li>
              회원 탈퇴, 무거래&#40;1년&#41; 등의 사유로 포인트가 소멸되는 경우 포인트는 현금으로 반환되지 않고 소멸되며, 소멸된 포인트는
              복구가 불가능합니다.
            </li>
            <li>
              포인트 소멸은 소멸 예정일 자정에 완료되므로, 소멸 예정일까지 사용하시기 바랍니다.<br />
              예&#41; 2023.07.30 소멸 예정 포인트 → 2023.07.30에서 2023.07.31로 넘어가는 밤 12시에 소멸
            </li>
            <li>
              뷰티포인트 카드 미소지 등의 이유로 현장에서 적립을 받지 못하셨을 경우, 구매일로부터 60일 이내에 제품 구매 매장에 구매
              영수증이나 카드대금 청구서를 제시하면 뷰티포인트 적립이 가능합니다.
            </li>
            <li>내부 심사기준에 따라 특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우 뷰티포인트가 적립되지 않습니다.</li>
            <li>뷰티포인트 적립률은 회사 정책에 따라 사전 고지 후 변동될 수 있습니다.</li>
            <li>
              뷰티포인트는 제휴사 포인트 전환, 공병으로도 적립하실 수 있습니다. 자세한 내용은 아모레몰 > 뷰티포인트 가이드에서 확인하실 수
              있습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  },
  link: {
    type: String,
    default: '#none'
  }
})
</script>
<style lang="scss" scoped>
.user_wrap {
  margin-top: 30px;
  padding: 40px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  &.hide {
    display: none;
  }

  // 비로그인시 css style
  &.no_info {
    margin: 30px 0 0;
    padding: 38px 39px;
    background-color: #fcfcfd;
    border: 1px solid #eee;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      margin-bottom: 15px;
    }

    button {
      width: 114px;
      height: 38px;
      color: #333;
      line-height: 36px;
      text-align: center;
      background-color: transparent;
      border: 1px solid #222;
      border-radius: 46px;
    }
  }

  .user_grade {
    h3 {
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: 300;
      line-height: 36px;
    }
    .user_list {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.29em;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        display: flex;
        align-items: center;
        span {
          &:first-child {
            width: 132px;
            color: #888;
          }
          &:last-child {
            font-weight: 500;
          }
        }
      }
    }
    .grade {
      width: 720px;
      margin-top: 45px;
      &.vip {
        .grade_bar {
          &:before {
            background: #12b560;
            animation: vip_bar 2s forwards;
          }
          &:after {
            animation: vip_bullet 2s forwards;
          }
        }
        .txt {
          span.t1,
          span.t2 {
            color: #009d5e;
          }
        }
      }
      &.gtclub {
        .grade_bar {
          &:before {
            background: #12b560;
            animation: gtclub_bar 2s forwards;
          }
          &:after {
            animation: gtclub_bullet 2s forwards;
          }
        }
        .txt {
          span.t1,
          span.t2,
          span.t3 {
            color: #009d5e;
          }
        }
      }
      .grade_bar {
        height: 8px;
        font-size: 0;
        background: #eee;
        position: relative;
        &:before {
          content: '';
          height: 100%;
          display: block;
        }
        &:after {
          content: '';
          width: 20px;
          height: 20px;
          background: #12b560;
          border-radius: 50%;
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2));
          position: absolute;
          top: -6px;
          left: -10px;
        }
      }
      .txt {
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          color: #999;
          font-size: 13px;
          line-height: 1.23em;
          &.t1 {
            color: #009d5e;
          }
          &.t2 {
            margin-left: 40px;
          }
        }
      }
    }
  }
  > ul {
    margin-top: 10px;
    display: flex;
    gap: 30px;
    > li {
      min-width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:before {
        content: '';
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
        background: url('@inmModule/assets/images/common/icon_split.png') no-repeat;
        background-size: 250px auto;
        display: block;
      }
      &.point {
        &:before {
          background-position: -170px -210px;
        }
        button {
          width: 16px;
          height: 16px;
          margin-left: 6px;
          background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
          background-position: -230px -20px;
        }
      }
      &.coupon {
        &:before {
          background-position: -210px -210px;
        }
      }
      > p,
      > div {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.29em;
        display: flex;
        align-items: center;
      }
      span {
        width: 100%;
        margin-top: 5px;
        font-size: 14px;
        line-height: 1.29em;
        text-align: center;
        strong {
          margin-right: 5px;
          font-size: 24px;
          font-weight: 700;
          line-height: 29px;
        }
      }
    }
  }
}

.sub_title_wrap {
  margin: 100px 0 20px;
  padding: 0;
}

.beauty_point {
  :deep(.tab_wrap) {
    margin: 60px 0 50px;
    border-bottom: 1px solid #eee;

    button {
      font-weight: 600;
    }
  }

  .header {
    width: 700px;
    height: 140px;
    margin: 10px auto 0;
    padding-left: 170px;
    background: url('@inmModule/assets/images/common/img_beauty_logo.png') no-repeat 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: -0.01em;
    position: relative;
    h4 {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.2em;
      > span {
        margin-left: 10px;
        color: #333;
        font-size: 16px;
        font-weight: 400;
        display: inline-block;
      }
    }
    > p {
      margin: 10px 0 0;
      font-size: 16px;
      line-height: 18px;
    }
    span {
      margin: 20px 0 0;
      color: #888;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    :deep(button.btn_shop) {
      width: 68px;
      height: 24px;
      color: #999;
      font-size: 10px;
      font-family: inherit;
      line-height: 22px;
      border-color: #999;
      position: absolute;
      bottom: 0;
      right: 20px;
      em {
        padding: 0;
        color: #999;
        font-size: 10px;
        font-weight: 600;
      }
    }
  }

  .point_info {
    padding: 40px 0;
    border: 1px solid #eee;
    background: #fcfcfd;
    ul {
      display: flex;
      li {
        min-height: 90px;
        padding-left: 115px;
        margin-left: 60px;
        font-size: 16px;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        background: url('/images/sam/icon_point01.png') no-repeat 0 0;
        &:last-child {
          background: url('/images/sam/icon_point02.png') no-repeat 0 0;
        }
        span {
          line-height: 1.2;
        }
      }
    }
  }

  .help_wrap {
    margin-top: 15px;
    .none {
      li {
        padding-left: 0;
        &:before {
          content: none;
        }
      }
    }
    li {
      padding-left: 16px;
      margin-top: 5px;
      color: #888;
      font-size: 13px;
      line-height: 1.54;
      position: relative;
      &:before {
        content: '※';
        position: absolute;
        top: 0;
        left: 0;
      }
      &:first-child {
        margin-top: 0;
      }
    }
  }
}

.table {
  border-top: 2px solid #000;
  position: relative;
  table {
    width: 100%;
    caption {
      position: absolute;
      z-index: -1;
      font-size: 0;
    }
    th {
      padding: 15px 20px;
      border-bottom: 1px solid #eee;
      border-left: 1px solid #eee;
      color: #000;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      text-align: center;
      background: #f5f5f5;
    }
    td {
      padding: 21px 20px;
      color: #333;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      border-left: 1px solid #eee;
      border-bottom: 1px solid #eee;
      span {
        color: #777;
        font-size: 14px;
      }
      sup {
        font-size: 10px;
        line-height: 12px;
      }
    }
    th:first-child,
    td:first-child {
      border-left: 0;
    }
  }
}

.desc_wrap {
  margin-top: 20px;
  padding: 30px;
  border: 1px solid #eee;
  background: #fcfcfd;
  > p {
    margin-bottom: 20px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  ul {
    li {
      padding-left: 16px;
      margin-top: 10px;
      color: #555;
      line-height: 1.43em;
      position: relative;
      &.point {
        color: #eb5b54;
      }
      &:before {
        content: '※';
        color: inherit;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:first-child {
        margin-top: 0;
      }
      > ul {
        margin-top: 5px;
        li {
          margin-top: 5px;
          color: #888;
          &:first-child {
            margin-top: 0;
          }
          &:before {
            content: '·';
          }
        }
      }
    }
  }
}

.modal_wrap.layer {
  top: unset;
  right: unset;
  bottom: unset;
  left: unset;
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
}

@keyframes vip_bar {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}
@keyframes vip_bullet {
  0% {
    left: -1%;
  }
  100% {
    left: 49%;
  }
}
@keyframes gtclub_bar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes gtclub_bullet {
  0% {
    left: -1%;
  }
  100% {
    left: 99%;
  }
}
</style>
