<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>주문/배송현황</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <Tabs
      tabType="type_03"
      :item="[
        { txt: '주문배송내역' },
        { txt: '취소신청' },
        { txt: '반품신청' },
        { txt: '교환신청' },
        { txt: '증빙서류발급' },
        { txt: '구매내역' }
      ]"
      :tabidx="0" />
    <div class="sub_title_wrap">
      <div>
        <h3>주문정보</h3>
      </div>
    </div>
    <div class="table_wrap">
      <table>
        <caption>
          주문/배송현황
        </caption>
        <colgroup>
          <col style="width: 15%" />
          <col style="width: 35%" />
          <col style="width: 15%" />
          <col style="width: 35%" />
        </colgroup>
        <tbody>
          <tr>
            <th>주문번호</th>
            <td>21288166</td>
            <th>주문자(아이디)</th>
            <td>김이나(rianag)</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>rianag@rianag.com</td>
            <th>회원등급</th>
            <td>WELCOME</td>
          </tr>
          <tr>
            <th>주문일</th>
            <td>2024.05.03 17:41:36</td>
            <th>결제완료일</th>
            <td>2024.05.03 17:41:36</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>네이버페이</td>
            <th>영수증여부</th>
            <td>N</td>
          </tr>
          <tr>
            <th>주문상태</th>
            <td>배송완료</td>
            <th>송장번호</th>
            <td>
              <Button class="btn_min_outline" txt="배송조회" @click="modal.open('my_delivery', 'alert')" />
            </td>
          </tr>
          <tr>
            <th>배송완료일</th>
            <td colspan="3">2024.05.09 00:40:01</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="sub_title_wrap">
      <div>
        <h3>내 주문상품정보</h3>
      </div>
    </div>
    <div class="table_wrap goods_info">
      <table>
        <caption>
          주문내역
        </caption>
        <colgroup>
          <col style="width: 100px" />
          <col />
          <col style="width: 5%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 8%" />
          <col style="width: 10%" />
          <col style="width: 10%" />
          <col style="width: 8%" />
          <col style="width: 10%" />
        </colgroup>
        <thead>
          <tr>
            <th colspan="2">제품명</th>
            <th>수량</th>
            <th>판매가</th>
            <th>판매단가</th>
            <th>일반결제</th>
            <th>할인금액</th>
            <th>뷰티포인트 사용</th>
            <th>적립포인트</th>
            <th>상태</th>
            <th>구매후기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">
              <a href="#none">
                <img src="/images/sam/36804_l_S_90.png" alt="" />
                <p>
                  <span>비타C 그린티 엔자임 잡티 토닝 세럼 체험단7ml</span>
                  <em>제품코드: 36804</em>
                </p>
              </a>
            </td>
            <td>1</td>
            <td>0원</td>
            <td>0원</td>
            <td>0원</td>
            <td>0원</td>
            <td>0P</td>
            <td>
              0P<br />
              (기본 : 0P<br />
              , 추가 : 0P)
            </td>
            <td>배송완료</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="myord_price">
      <li>
        <p>총 주문 금액</p>
        <span><em>0</em>원</span>
      </li>
      <li>
        <p>할인 및 차감금액</p>
        <span><em>- 0</em>원</span>
      </li>
      <li>
        <p>배송비</p>
        <span><em>2,500</em>원</span>
      </li>
      <li>
        <p>적립 뷰티포인트</p>
        <span><em>+0</em>P <br />(기본 : 0P , 추가 : 0P)</span>
      </li>
      <li>
        <dl>
          <dt>최종 결제 금액</dt>
          <dd>
            <strong>2,500원</strong>
          </dd>
        </dl>
      </li>
    </ul>
    <ul class="bullistType_02">
      <li>뷰티포인트는 배송완료(또는 수취확인) 후 15일째 되는 날 적립됩니다.</li>
      <li>주문접수 상태의 주문은 주문일에서 3일간 보관되며, 이후 자동 취소처리 됩니다.</li>
      <li>결제완료 후 배송지 변경은 어렵습니다. 취소 후 변경 주소로 재 주문하여 주세요.</li>
      <li>
        상태에 따른 주문 취소 방법
        <p>[결제완료]: 마이페이지에서 취소신청이 가능합니다.</p>
        <p>[상품준비중]: 고객상담실을 통해 문의 시, 출고 확정 전인 경우만 취소가 가능합니다.</p>
      </li>
      <li>샘플마켓 제품은 고객센터(080-380-0114)문의를 통해 교환/반품이 가능합니다.</li>
    </ul>
  </div>

  <div class="sub_title_wrap">
    <div>
      <h3>결제정보</h3>
    </div>
  </div>
  <div class="list_wrap">
    <div class="table_wrap">
      <table>
        <caption>
          결제정보
        </caption>
        <colgroup>
          <col style="width: 170px" />
        </colgroup>
        <tbody>
          <tr>
            <th>결제방법</th>
            <td>네이버페이</td>
          </tr>
          <tr>
            <th>결제금액</th>
            <td>2,500원</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="sub_title_wrap">
    <div>
      <h3>내 배송지 정보</h3>
    </div>
  </div>
  <div class="table_wrap myaddr_info">
    <table>
      <caption>
        내 배송지 정보
      </caption>
      <colgroup>
        <col style="width: 170px" />
      </colgroup>
      <tbody>
        <tr>
          <th>받으실 분</th>
          <td class="my_name">
            <Inputs _type="text" _value="김이나" isDisabled />
          </td>
        </tr>
        <tr class="my_addr">
          <th>
            <span>주소</span>
          </th>
          <td>
            <Inputs _type="text" _placeholder="" _value="012345" isDisabled />
            <Inputs _type="text" _placeholder="" _value="서울특별시" isDisabled />
            <Inputs _type="text" _placeholder="" _value="한화비즈" isDisabled />
          </td>
        </tr>
        <tr class="my_phone">
          <th>
            <span>휴대폰 번호</span>
          </th>
          <td>
            <div>
              <Selectbox
                :options="[
                  { val: 'value', txt: '010' },
                  { val: 'value', txt: '012' }
                ]"
                isDisabled />
              <span>-</span>
              <Inputs _type="text" _placeholder="" _value="1234" isDisabled />
              <span>-</span>
              <Inputs _type="text" _placeholder="" _value="5678" isDisabled />
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>배송 시 요청사항</span>
          </th>
          <td class="shippingMsg">
            <Inputs _type="text" _placeholder="" _value="부재시 문앞에 놓아주세요." isDisabled />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <Button txt="목록" class="btn_mid confirm" @click="$router.push('/publish/IN_PC_MYP_01_08')" />
  <!-- modal -->
  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송조회</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <dl>
          <dt>CJ대한통운</dt>
          <dd>운송장 번호 540189756906</dd>
        </dl>
        <ul>
          <li class="current">
            <span>배송완료</span>
            <em>인천</em>
            <i>2024-05-07 13:19:49</i>
          </li>
          <li>
            <span>배송출발</span>
            <em>부평A</em>
            <i>2024-05-07 13:19:49</i>
          </li>
          <li>
            <span>집화처리</span>
            <em>옥천HUB</em>
            <i>2024-05-07 13:19:49</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

import { main } from '@popperjs/core'
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})

const sub_erChk = ref(0) //[Tip] 최초의 article에 active 클래스 조건을 맞춰 줄 변수 지정
/* //component sample data */

onMounted(() => {})
</script>

<style lang="scss" scoped>
.tab_wrap {
  :deep(.type_03) {
    li {
      button {
        font-size: 18px !important;
      }
    }
  }
}

.btn_mid {
  margin: 60px auto 0 auto;
  padding: 0 62px;
  :deep(em) {
    padding: 0;
    font-size: 16px !important;
    font-weight: 600;
  }
}
.sub_title_wrap {
  margin: 60px auto 20px;
  padding: 0 !important;
}

.myord_price {
  margin: 20px 0 15px;
  padding: 30px;
  border: 1px solid #eee;
  background-color: #fafafa;
  li {
    padding: 25px 0;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 500;
    }
    span {
      text-align: right;
    }
    &:first-of-type {
      padding-top: 0;
    }
    &:last-of-type {
      padding-bottom: 0;
      border-bottom: 0;
    }
    dl {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      dt {
        margin-right: 10px;
      }
      dd {
        display: flex;
        align-items: center;
        strong {
          font-size: 28px;
          font-weight: 700;
        }
      }
    }
  }
}
.myaddr_info {
  tbody {
    tr {
      td {
        display: flex;
        :deep(.input_wrap) {
          width: 90%;
          flex: 0 auto;
        }
        &.my_name {
          :deep(.input_wrap) {
            width: 28%;
          }
        }
      }
      &.my_addr {
        td {
          flex-direction: column;
          > * + * {
            margin-top: 8px;
          }
          :deep(.input_wrap) {
            &:first-of-type {
              width: 13%;
            }
          }
        }
      }
      &.my_phone {
        td {
          > div {
            display: flex;
            align-items: center;
            :deep(.input_wrap) {
              width: 25%;
            }
            span {
              margin: 0 5px;
              display: block;
            }
          }
          label.select {
            width: 25%;
            display: block !important;
          }
        }
      }
    }
  }
}

.bullistType_02 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    color: #888;
    font-size: 13px;
    &::before {
      content: '※';
      margin-right: 10px;
      display: inline-block;
    }
    > * {
      margin-top: 5px;
    }
    p {
      margin-left: 20px;
    }
  }
}
.table_wrap {
  border-top: 2px solid #000;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      display: none;
    }
    thead {
      tr {
        th {
          padding: 15px 20px 15px;
          color: #000;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          border-left: 1px solid #eee;
          background: #f5f5f5;
          text-align: center;
          &:first-of-type {
            border-left: 0;
          }
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 15px 20px;
          font-weight: 400;
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
        }
        td {
          padding: 21px 20px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #f5f5f5;
          :deep(button.btn_min_outline) {
            border-radius: 1px;
            em {
              padding: 0 16px;
              font-size: 12px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  > em {
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    color: #d72137 !important;
    display: block;
  }
}

.goods_info {
  table {
    thead {
      tr {
        text-align: center;
        th {
          padding: 15px 0 !important;
        }
      }
    }
    tbody {
      tr {
        text-align: center;
        td {
          padding: 15px 0 !important;
          font-weight: normal;
          border-left: 1px solid #eee;
          &:first-of-type {
            border-left: 0;
          }
          a {
            display: flex;
            align-items: center;
            img {
              width: 100px;
            }
            p {
              padding: 0 17px;
              text-align: left;
              display: flex;
              flex-direction: column;
              flex: 1;
              span {
                margin-bottom: 8px;
              }
              em {
                color: #999;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}

.modal_wrap {
  &#my_delivery {
    .modal_container {
      width: 540px !important;
      .modal_content {
        dl {
          height: 60px;
          margin: 0 20px;
          padding: 20px;
          background-color: #f5f5f5;
          display: flex;
          align-items: center;
          dt {
            height: 100%;
            margin-right: 20px;
            padding-right: 21px;
            font-size: 16px;
            font-weight: 600;
            position: relative;
            &::after {
              content: '';
              width: 1px;
              height: 100%;
              background: #ddd;
              position: absolute;
              top: 0;
              right: 0;
              display: inline-block;
            }
          }
          dd {
            color: #999;
            font-size: 16px;
          }
        }
        ul {
          margin-top: 10px;
          li {
            padding: 20px 0 18px;
            border-bottom: 1px solid #ccc;
            position: relative;
            span {
              font-weight: 600;
            }
            em {
              margin-left: 20px;
              padding-left: 21px;
              color: #666;
              font-weight: 400;
              position: relative;
              &::before {
                content: '';
                width: 1px;
                height: 100%;
                background-color: #ddd;
                position: absolute;
                top: 0;
                left: 0;
                display: inline-block;
              }
            }
            i {
              color: #999;
              font: inherit;
              position: absolute;
              top: 50%;
              right: 4px;
              transform: translateY(-50%);
            }
            &.current {
              span,
              em {
                color: #00bc70;
              }
            }
            &:last-of-type {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
