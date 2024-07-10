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
      <Tabs id="beauty_tab" :item="[{ txt: '뷰티포인트' }, { txt: 'VIP등급안내' }]" :tabidx="1" tabType="type_04" />

      <div class="vip_wrap">
        <div class="header">
          <h4>VIP 등급 안내 <span>by Amorepacific</span></h4>
          <span>뷰티포인트 회원을 위한 등급별 다양하고 특별한 혜택을 만나보세요!</span>
        </div>
        <div class="sub_title_wrap"><h4>등급 산정 기준 및 혜택 안내</h4></div>
        <div class="table">
          <table>
            <caption>
              등급 산정 기준 및 혜택 안내
            </caption>
            <colgroup>
              <col style="width: auto" />
              <col style="width: auto" />
              <col style="width: auto" />
              <col style="width: auto" />
              <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">기준 구매 금액</th>
                <th scope="col">승급시 웰컴포인트<br />VIP 선정 전 구매금액</th>
                <th scope="col" colspan="2">리워드 포인트 Ⅰ<br />VIP선정 후 구매금액 (200만원 이상)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PLATINUM 플래티넘</td>
                <td>300만원 이상</td>
                <td>50,000 P</td>
                <td colspan="2" rowspan="4">20,000 P</td>
              </tr>
              <tr>
                <td>GOLD 골드</td>
                <td>150만원 이상</td>
                <td>20,000 P</td>
              </tr>
              <tr>
                <td>SILVER 실버</td>
                <td>100만원 이상</td>
                <td>10,000 P</td>
              </tr>
              <tr>
                <td>GREEN 그린</td>
                <td>50만원 이상</td>
                <td>5,000 P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="help_wrap">
          <ul>
            <li>GREEN(그린) 등급은 21년 신설된 VIP 등급입니다.</li>
            <li>
              GR21년 VIP 선정 시 기준 기간은 20년 1월~12월입니다.<br />
              · 단, 17년 1월 이후 첫 구매 고객은 첫 구매월로부터 12개월입니다.(예: 17년 3월 첫 구매 고객의 21년 VIP 선정 기간: 20년 3월~21년
              2월)<br />
              · 단, 휴면 재거래 고객은 재거래 시작월로부터 12개월입니다.
            </li>
            <li>구매 금액 집계 기간: 웰컴 포인트 - 21년 VIP 선정 전 12개월 / 리워드 포인트 I, II - 21년 VIP 선정 후 12개월</li>
          </ul>
        </div>
        <div class="sub_title_wrap"><h4>혜택 적립, 소멸 안내</h4></div>
        <div class="table">
          <table>
            <caption>
              혜택 적립, 소멸 안내
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col style="width: auto" />
              <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">포인트</th>
                <th scope="col" colspan="2">적립시점</th>
                <th scope="col" colspan="2">소멸시점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>승급시 웰컴 포인트</td>
                <td colspan="2"><sup>1&#41;</sup>21년 VIP 선정 월 15일 적립</td>
                <td colspan="2">플래티넘, 골드, 실버 : 적립일 포함 90일차 자정 소멸<br />그린 : 적립일로부터 90일</td>
              </tr>
              <tr>
                <td>리워드 포인트 Ⅰ</td>
                <td colspan="2">200만원 구매 월의 익월 15일 자동 적립</td>
                <td colspan="2" rowspan="2">적립일 포함 90일차 자정 소멸</td>
              </tr>
              <tr>
                <td>리워드 포인트 Ⅱ</td>
                <td colspan="2">250만원 구매 월의 익월 15일 자동 적립</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="help_wrap">
          <ul class="none">
            <li>1&#41; 선정월 15일부터 다음달 15일까지 아모레몰에서 직접 신청</li>
            <li>* 신청방법<br />아모레몰 > 뷰티파우치 > 뷰티포인트 회원등급 > VIP 등급별 혜택 > 웰컴 포인트 적립하기</li>
          </ul>
        </div>
        <div class="desc_wrap">
          <p>유의사항</p>
          <ul>
            <li>회원등급 선정 기준 및 등급별 혜택은 회사 사정에 따라 변경될 수 있습니다.</li>
            <li>회원등급은 현금 결제금액&#40;할인 후 금액&#41;과 포인트 결제금액의 합산금액이 반영됩니다.&#40;고객별 집계기간 상이&#41;</li>
            <li>방문판매&#40;방판/리리코스&#41;를 통한 제품 구매 시, 수금금액을 기준으로 반영됩니다.</li>
            <li>ABC회원 혜택을 받기 위해서는 반드시 아모레퍼시픽 멤버십 ‘뷰티포인트’회원&#40;실명인증&#41;이어야 합니다.</li>
            <li>
              내부 심사기준에 따라 아래의 경우 선정이 제한될 수 있습니다.<br />
              <ul>
                <li>선정시점의 통합 탈퇴고객</li>
                <li>휴대번호 비정상&#40;3회 이상 중복, 번호 미기재, 번호오류 등&#41;</li>
                <li>특정 브랜드 구매 편중 및 적립 과다로 비정상적으로 판단될 경우</li>
                <li>직원&#40;판매사원 및 가맹점주&#41;</li>
                <li>카운셀러/뷰레이터 전화번호로 고객이 등록</li>
              </ul>
            </li>
            <li>VIP 선정기준 및 혜택에 대한 더욱 자세한 안내는 아모레몰 > 마이페이지 > 통합 회원 등급 혜택에서 확인하실 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

onMounted(() => {})

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

  &.hide {
    display: none;
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
