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
    <div class="term">
      <div class="table_wrap">
        <table>
          <caption>
            답변확인
          </caption>
          <colgroup>
            <col style="width: 170px" />
          </colgroup>
          <tbody>
            <tr>
              <th>기간별조회</th>
              <td>
                <Inputs _type="radio" _text="15일" _name="month" />
                <Inputs _type="radio" _text="1개월" _name="month" />
                <Inputs _type="radio" _text="2개월" _name="month" />
                <Inputs _type="radio" _text="3개월" _name="month" />
                <Inputs _type="radio" _text="6개월" _name="month" />
              </td>
            </tr>
            <tr>
              <th>일자별 조회</th>
              <td>
                <div class="date_wrap">
                  <div class="date">
                    <input type="date" id="dpSttlDt1" required="required" value="2024-03-24" />
                    <div class="dataValue">2024-03-24</div>
                  </div>
                  <div>~</div>
                  <div class="date">
                    <input type="date" id="dpSttlDt1" required="required" value="2024-03-24" />
                    <div class="dataValue">2024-03-24</div>
                  </div>
                  <Button class="btn_ confirm" txt="검색" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section class="delivery active">
      <Tabs
        tabType="type_04"
        :item="[{ txt: '전체주문체결내역' }, { txt: '주문취소내역' }, { txt: '반품처리내역' }, { txt: '교환처리내역' }]"
        :tabidx="0" />
      <article class="active">
        <span>총<em>1</em>건</span>
        <div class="table_wrap">
          <table>
            <caption>
              주문내역
            </caption>
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 115px" />
              <col style="" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th>주문일자</th>
                <th>주문번호</th>
                <th>대표제품 명</th>
                <th>결제금액</th>
                <th>처리현황</th>
                <th>배송조회</th>
                <th>수취확인</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.05.03</td>
                <td>21288166</td>
                <td class="goods_name">
                  <a @click="$router.push('/publish/IN_PC_MYP_01_11')">비타C 그린티 엔자임 잡티 토닝 세럼 체험단</a>
                </td>
                <td>2,500원</td>
                <td>배송완료</td>
                <td>
                  <Button txt="배송조회" class="btn_min_outline" @click="modal.open('my_delivery', 'alert')" />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
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
        <ul class="bullistType_02">
          <li>주문번호와 제품명을 클릭 하시면 주문 상세 내역을 보실 수 있습니다.</li>
          <li>배송정보는 처리현황이 배송 중, 배송완료 상태에서 조회가 가능합니다.</li>
          <li>
            이상없이 제품을 받으셨다면 수취확인을 해주세요. 확인하지 않으실 경우 배송시작일 부터 7일이후에 자동으로 배송완료상태로
            변경됩니다.
          </li>
          <li>온라인에서 구매내역 표기시 제품의 정상가로 표기 됩니다. (단, 등급 반영시 실제 결제가 기준으로 반영됩니다.)</li>
          <li>등급 반영시 반품내역, 포인트 구매내역은 제외 됩니다.</li>
        </ul>
        <ol>
          <li>
            <strong class="icon icon_1">결제대기</strong>
          </li>
          <li>
            <strong class="icon icon_2">결제완료</strong>
            <span>
              결제가 완료되어 관리자가<br />
              주문내역을 확인 중입니다.<br />
              취소가 가능합니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_3">제품준비중</strong>
            <span>
              결제 확인 후 택배사에서<br />
              제품을 포장하고 있습니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_4">배송중</strong>
            <span>
              제품을 포장 후 배송중입니다.<br />
              송장번호를 통해 현 배송상태를<br />
              확인하실 수 있습니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_5">배송완료</strong>
          </li>
        </ol>
      </article>
      <article class="delivery_cancel">
        <span>총<em>0</em>건</span>
        <div class="table_wrap">
          <table>
            <caption>
              주문내역
            </caption>
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 115px" />
              <col style="" />
              <col style="width: 110px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th>주문일자</th>
                <th>주문번호</th>
                <th>대표제품 명</th>
                <th>결제금액</th>
                <th>처리현황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.05.03</td>
                <td>21288166</td>
                <td class="goods_name">
                  <a @click="$router.push('/publish/IN_PC_MYP_01_11')">비타C 그린티 엔자임 잡티 토닝 세럼 체험단</a>
                </td>
                <td>2,500원</td>
                <td>배송완료</td>
              </tr>
              <tr>
                <td colspan="5">주문취소 내역이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        <ul class="bullistType_02">
          <li>주문번호나 제품명을 클릭 하시면 주문 상세 내역을 보실 수 있습니다.</li>
          <li>취소가 완료된 경우 취소완료로 상태가 표시됩니다.</li>
        </ul>
        <ol>
          <li>
            <strong class="icon icon_1">취소접수</strong>
            <span>
              취소일과 결제일의 해당 월이<br />
              다른 휴대폰결제와 가상계좌<br />
              결제인 경우 환불이<br />
              완료되기 전까지<br />
              취소접수로 표시 됩니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_2">취소완료</strong>
            <span>
              관리자가 취소 접수내역을<br />
              확인 후 환불해 드리고<br />
              취소 승인 시<br />
              취소 완료 상태가 됩니다.
            </span>
          </li>
        </ol>
      </article>
      <article class="delivery_return">
        <span>총<em>0</em>건</span>
        <div class="table_wrap">
          <table>
            <caption>
              반품처리내역
            </caption>
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 115px" />
              <col style="" />
              <col style="width: 110px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th>주문일자</th>
                <th>반품번호</th>
                <th>대표제품 명</th>
                <th>결제금액</th>
                <th>처리현황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.05.03</td>
                <td>21288166</td>
                <td class="goods_name">
                  <a @click="$router.push('/publish/IN_PC_MYP_01_11')">비타C 그린티 엔자임 잡티 토닝 세럼 체험단</a>
                </td>
                <td>2,500원</td>
                <td>배송완료</td>
              </tr>
              <tr>
                <td colspan="5">반품내역이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        <ul class="bullistType_02">
          <li>주문번호나 제품명을 클릭 하시면 주문 상세 내역을 보실 수 있습니다.</li>
          <li>취소가 완료된 경우 취소완료로 상태가 표시됩니다.</li>
        </ul>
        <ol>
          <li>
            <strong class="icon icon_1">반품접수</strong>
            <span> 반품신청을 한 상태입니다. </span>
          </li>
          <li>
            <strong class="icon icon_2">반품불가</strong>
            <span>
              반품 사유 분석 및 통화 후,<br />
              반품 불가로 승인 날 경우 입니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_3">반품중</strong>
            <span>
              모든 결제방법 공통으로<br />
              반품승인 후 제품을 수령 해<br />
              올 때 까지의 단계 입니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_4">환불진행</strong>
            <span>
              무통장입금 결제의 경우만<br />
              존재하는 단계로 반품제품 수량<br />
              확인 후 관리자가 환불<br />
              계좌로 입금하는 단계입니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_5">반품완료</strong>
            <span>
              환불이 완료된 상태입니다.<br />
              (입금확인에는 반품 완료 후<br />
              2,3일의 시간이 소요될 수<br />
              있습니다.)
            </span>
          </li>
        </ol>
      </article>
      <article class="delivery_exchange">
        <span>총<em>0</em>건</span>
        <div class="table_wrap">
          <table>
            <caption>
              교환처리내역
            </caption>
            <colgroup>
              <col style="width: 120px" />
              <col style="width: 115px" />
              <col style="" />
              <col style="width: 110px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th>주문일자</th>
                <th>교환번호</th>
                <th>대표제품 명</th>
                <th>결제금액</th>
                <th>처리현황</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024.05.03</td>
                <td>21288166</td>
                <td class="goods_name">
                  <a @click="$router.push('/publish/IN_PC_MYP_01_11')">비타C 그린티 엔자임 잡티 토닝 세럼 체험단</a>
                </td>
                <td>2,500원</td>
                <td>배송완료</td>
              </tr>
              <tr>
                <td colspan="5">교환 내역이 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
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
        <ul class="bullistType_02">
          <li>씨드 내역 반영 시 씨드 쿠폰 발급, 등급산정에 대한 씨드 차감개수는 제외 됩니다.</li>
        </ul>
        <ol>
          <li>
            <strong class="icon icon_1">교환접수</strong>
            <span>
              교환을 신청하신<br />
              상태 입니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_2">교환불가</strong>
            <span>
              교환이 불가능한 제품인 경우<br />
              교환불가상태로 변경됩니다.<br />
              상담은 고객센터를<br />
              이용해 주시기 바랍니다.
            </span>
          </li>
          <li>
            <strong class="icon icon_3">교환안내</strong>
            <span>
              반품하신 제품이<br />
              확인된 상태입니다.
            </span>
          </li>
        </ol>
      </article>
    </section>
  </div>

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

onMounted(() => {
  function main_tab() {
    let main_tab = document.querySelectorAll('.inner .tab_wrap .type_03 li')
    let main_cont = document.querySelectorAll('.content .inner section')
    var idx
    main_tab.forEach((a, idx) => {
      a.addEventListener('click', () => {
        main_cont.forEach((b) => {
          b.classList.remove('active')
        })
        main_cont[idx].classList.add('active')
      })
    })
  }
  main_tab()

  function sub_tab() {
    let sub_tab = document.querySelectorAll('section.active .tab_wrap .type_04 li')
    let sub_cont = document.querySelectorAll('.inner section article')
    var idx
    sub_tab.forEach((a, idx) => {
      a.addEventListener('click', () => {
        sub_cont.forEach((b) => {
          b.classList.remove('active')
        })
        sub_cont[idx].classList.add('active')
      })
    })
  }
  sub_tab()
})
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
          padding: 24px 0px;
          color: #999;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
          em {
            margin-left: -10px;
            margin-right: 3px;
            color: #ff0000;
          }
        }
        td {
          padding: 21px 20px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #f5f5f5;
          :deep(button.btn_outline) {
            em {
              font-weight: 600;
            }
          }
          label.check {
            margin-right: 30px !important;
          }
          label.select {
            width: 30%;
            display: block !important;
          }
          .label_wrap {
            :deep(label.input) {
              input {
                width: 600px !important;
              }
              textarea {
                width: 600px;
                height: 200px !important;
              }
            }
          }
          > div {
            display: table-cell;
          }
          .error {
            margin-top: 10px;
            color: #ff0000;
            font-size: 12px;
            display: block;
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
.term {
  .table_wrap {
    margin: 30px 0 60px;
    padding: 0 30px;
    border: 1px solid #eee;
    background: #fcfcfd;
    table {
      .date_wrap {
        overflow: hidden;
        display: flex;
        align-items: center;

        gap: 10px;
        .date {
          width: 270px;
          height: 40px;
          padding: 0 1.5rem;
          border: 1px solid #ddd;
          background: #f5f5f5;
          position: relative;
          display: flex;
          align-items: center;
          input {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 100%;
            opacity: 0;
            color: #000;
          }
        }
        .btn_ {
          padding: 0 20px;
          font-weight: 600;
        }
      }
      tbody {
        tr {
          th {
            padding: 30px 0;
          }
          td {
            :deep(.input_wrap) {
              em {
                margin-right: 30px;
                margin-left: 5px;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}

section {
  display: none;
  &.active {
    display: block;
  }
  .sub_title_wrap {
    margin: 60px auto 20px;
    padding: 0 !important;
  }
  .btn_min_outline {
    margin: 0 auto !important;
    border-radius: 1px;
  }

  article {
    > * + * {
      margin-top: 30px;
    }
    display: none;
    &.active {
      display: block;
    }
    ol {
      margin-top: 60px;
      color: #999;
      font-size: 12px;
      border: 1px solid #eeeeee;
      background: #fcfcfd;
      text-align: center;
      line-height: 1.33em;
      box-sizing: border-box;
      display: flex;
      li {
        padding: 20px 0;
        border-right: 1px solid #eee;
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        &:last-of-type {
          border-right: 0;
        }
        strong {
          color: #333;
          font-size: 18px;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          &::after {
            content: '';
            width: 61px;
            height: 60px;
            margin: 10px 0;
            background-image: url('@inmModule/assets/images/common/goodsDetail_split.png');
            background-size: 300px auto;
            background-repeat: no-repeat;
            background-position: 0px 0px;
            display: block;
          }
          &.icon_2 {
            &::after {
              background-position: -70px 0px;
            }
          }
          &.icon_3 {
            &::after {
              background-position: -140px 0px;
            }
          }
          &.icon_4 {
            &::after {
              background-position: -214px 0px;
            }
          }
          &.icon_5 {
            &::after {
              background-position: 0px -70px;
            }
          }
        }
      }
    }
    > span {
      margin: 36px 0 20px;
      font-weight: 400;
      display: block;
      em {
        margin: 0 5px;
        color: #12b560 !important;
        font-weight: 500;
        display: inline-block;
      }
    }
    &.delivery_cancel {
      ol {
        li {
          strong {
            &.icon_1 {
              &::after {
                background-position: -70px -70px;
              }
            }
            &.icon_2 {
              &::after {
                background-position: -140px -70px;
              }
            }
          }
        }
      }
    }
    &.delivery_return {
      ol {
        li {
          strong {
            &.icon_1 {
              &::after {
                background-position: -70px -70px;
              }
            }
            &.icon_2 {
              &::after {
                background-position: -210px -70px;
              }
            }
            &.icon_3 {
              &::after {
                background-position: -210px 0px;
              }
            }
            &.icon_4 {
              &::after {
                background-position: 0px -140px;
              }
            }
            &.icon_5 {
              &::after {
                background-position: -70px -140px;
              }
            }
          }
        }
      }
    }
    &.delivery_exchange {
      ol {
        li {
          strong {
            &.icon_1 {
              &::after {
                background-position: -70px -70px;
              }
            }
            &.icon_2 {
              &::after {
                background-position: -140px -140px;
              }
            }
            &.icon_3 {
              &::after {
                background-position: -210px -140px;
              }
            }
          }
        }
      }
    }
    .table_wrap {
      table {
        tbody {
          tr {
            td {
              font-weight: normal;
              border-left: 1px solid #eee;
              text-align: center;
              &:first-of-type {
                border-left: none;
              }
              &.goods_name {
                text-align: left;
                a {
                  cursor: pointer;
                }
              }
              :deep(.btn_min_outline) {
                em {
                  padding: 0 12px;
                  font-size: 12px;
                  font-weight: 600;
                }
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
