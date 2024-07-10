<template>
  <div class="inner">
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>배송지 관리</h2>
    </div>
    <div class="table_wrap">
      <table>
        <caption>
          배송지 관리
        </caption>
        <colgroup>
          <col style="width: 190px" />
          <col style="" />
          <col style="width: 190px" />
        </colgroup>
        <thead>
          <tr>
            <th>주소별칭</th>
            <th>배송 주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Inputs _type="radio" _text="집(기본배송지)" _name="adrees" /></td>
            <td><a href="#none">[22780] 서울특별시 강서구 양천로 551-17</a></td>
            <td class="btn_wrap">
              <Button class="btn_outline btn_min" txt="수정" @click="modal.open('adress_manage', 'alert')" />
              <Button class="btn_outline btn_min" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
            </td>
          </tr>
          <tr>
            <td><Inputs _type="radio" _text="회사" _name="adrees" /></td>
            <td><a href="#none">[22780] 서울특별시 강서구 양천로 551-17</a></td>
            <td class="btn_wrap">
              <Button class="btn_outline btn_min" txt="수정" @click="modal.open('adress_manage', 'alert')" />
              <Button class="btn_outline btn_min" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
            </td>
          </tr>
          <tr>
            <td colspan="3">등록된 배송지가 없습니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span>배송지를 선택하세요</span>
    <div class="btn_wrap">
      <Button txt="기본 배송지로 설정" class="btn_mid confirm" />
      <Button txt="배송지 추가" class="btn_outline btn_mid" @click="modal.open('adress_manage', 'alert')" />
    </div>
  </div>

  <!--modal-->
  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 관리</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>배송지를 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_ confirm btn_big" txt="확인" />
        <Button class="btn_big" txt="취소" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="adress_manage" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 관리</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <Inputs _type="checkbox" _text="내 우편수신처 불러오기(선택)" />
        <!-- 배송지 관리 > 배송지 추가일 때만 노출 -->
        <div class="table_wrap">
          <table>
            <caption>
              1:1 문의작성
            </caption>
            <colgroup>
              <col style="width: 170px" />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <em>*</em>
                  <span>배송지명</span>
                </th>
                <td>
                  <Inputs _type="text" />
                  <span class="error">배송지명을 입력해주세요</span>
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>받으실 분</span>
                </th>
                <td>
                  <Inputs _type="text" />
                  <span class="error">받으실 분을 입력해 주세요.</span>
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>주소</span>
                </th>
                <td class="adress">
                  <div class="multi_form">
                    <Inputs _type="text" _placeholder="" />
                    <Button txt="우편번호 검색" class="btn_outline" />
                  </div>
                  <Inputs _type="text" _placeholder="" />
                  <Inputs _type="text" _placeholder="" />
                  <a href="#none" @mouseover="[modal.open('shippingArmyInfo', 'layer')]">군부대 배송안내 </a>
                </td>
              </tr>
              <tr>
                <th>
                  <em>*</em>
                  <span>휴대폰번호</span>
                </th>
                <td class="qa_sms">
                  <div>
                    <Selectbox
                      :options="[
                        { val: 'value', txt: '010' },
                        { val: 'value', txt: '012' }
                      ]" />
                    <span>-</span>
                    <Inputs _type="text" _placeholder="" value="1234" />
                    <span>-</span>
                    <Inputs _type="text" _placeholder="" value="5678" />
                  </div>
                  <span class="error">휴대폰번호를 입력해 주세요.</span>
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <Inputs _type="checkbox" _text="개인정보 수집 동의" />
              <a class="info_more" href="#none" @click="[modal.open('personalinfo', 'layer'), adress_more($event)]">자세히보기</a>
            </li>
            <li>
              <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="저장" class="btn_ confirm btn_big" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="shippingArmyInfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>군부대 배송 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <p>
          <strong>- 사서함 주소</strong>
          <strong>- 배송지 명이 ‘부대’일 시 우체국 택배로 배송되며, 그 외에는 CJ택배로 배송됩니다.</strong>
        </p>
        <ol>
          <li>우체국 택배 서비스는 군부대 배송의 경우에만 가능합니다.</li>
          <li>수신인의 군 부대명 / 사서함 번호를 정확하게 기재하셔야 배송됩니다.</li>
          <li>
            <em>군 부대 발송 택배는 우체국 택배만 가능하기 때문에, 1차 CJ 택배 출고 → 2차 우체국 택배 이관 출고하여 최종 발송</em> 됩니다.
            택배 송장 번호 확인 시, CJ 택배 송장으로 표기되며 최종 우체국 송장 번호는 고객 상담실로 문의 시 확인 <br />가능합니다. (1:1 상담
            혹은 080 유선상담) 위의 특수한 배송 절차로 인해 일반 배송보다 배송일이 2~3일 정도 더 <br />소요될 수 있음을 안내 드립니다.
          </li>
          <li>
            <em>군부대 배송안내에 따른 기재를 정확하게 하지 않으실 경우, 이니스프리 물류 쪽으로 다시 반입</em>되기 때문에 배송 <br />지연,
            <em>왕복 배송비 5,000원을 입금</em>해 주셔야 합니다. '사서함 주소' 또는 '부대'를 입력해 주세요!
          </li>
          <li>
            군부대 배송건은 교환/반품접수시 부대 내 택배기사님 방문이 불가하여 직접 반품처리 해주셔야 합니다.<br />
            이점 양해 부탁드립니다.
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="personalinfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>개인정보 수집동의</h2>
        <button class="btn_close" @click="[modal.close(this), reset($event)]">닫기</button>
      </div>
      <div class="modal_content">
        <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
        <div class="table_wrap">
          <table>
            <caption>
              개인정보 수집동의
            </caption>
            <colgroup>
              <col style="" />
              <col style="width: 145px" />
              <col style="width: 184px" />
            </colgroup>
            <thead>
              <tr>
                <th>수집항목</th>
                <th>수집이용/목적</th>
                <th>이용/보유기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호</td>
                <td>배송지 등록 및<br />주문 편의 목적</td>
                <td>
                  <strong>
                    회원탈퇴 또는<br />
                    배송지 정보 삭제 시까지
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from '#imports'

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

const adress_more = (event) => {
  document.querySelector('#adress_manage .modal_container').style.display = 'none'
  document.querySelector('#adress_manage .modal_container').style.display = 'none'
  document.querySelector('.modal_wrap#shippingArmyInfo').classList.remove('active')
}
const reset = (event) => {
  document.querySelector('#adress_manage .modal_container').style.display = 'block'
  document.querySelector('#adress_manage .modal_container').style.display = 'block'
  document.querySelector('.modal_wrap#shippingArmyInfo').classList.remove('active')
}
</script>

<style lang="scss" scoped>
:deep(.multi_form) {
  .btn_outline {
    border-radius: 1px !important;
  }
}

.title_wrap {
  margin-bottom: 24px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 24px !important;
    font-weight: 600;
  }
}

.inner {
  > span {
    margin-top: 10px;
    color: #ff0000;
    font-size: 12;
    display: block;
  }
  > .btn_wrap {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 10px;
    button[class*='btn_'] {
      padding: 20px 30px;
      font-size: 16px;
      font-weight: 600;
      &.btn_outline {
        font:
          18px / 40px 'Pretendard',
          'SDNeoL',
          'notoR';
      }
      em {
        font-size: 16px;
      }
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
      th {
        padding: 15px 20px;
        color: #000;
        font-size: 14px;
        border-bottom: 1px solid #eee;
        background: #f5f5f5;
        &:not(:first-of-type) {
          border-left: 1px solid #eee;
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 20px;
          color: #333;
          font-size: 14px;
          font-weight: normal;
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
          vertical-align: top;
          em {
            margin-left: -10px;
            margin-right: 3px;
            color: #ff0000;
          }
        }
        td {
          padding: 20px;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          &:not(:first-of-type) {
            border-left: 1px solid #eee;
          }
          &.btn_wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            :deep(button.btn_outline) {
              width: 60px;
              font-size: 12px;
              border: 1px solid #999;
            }
          }
          :deep(button.btn_outline) {
            em {
              padding: 0 15px;
              color: #999;
              font-weight: 600;
            }
          }
          label.select {
            width: 30%;
            display: block !important;
          }
          .label_wrap {
            :deep(label.input) {
              input {
                width: 140px !important;
              }
              textarea {
                width: 600px;
                height: 200px !important;
              }
            }
          }
          .error {
            margin-top: 10px;
            color: #ff0000;
            font-size: 12px;
            display: block;
          }
          &[colspan='3'] {
            text-align: center;
          }
          &.qa_sms {
            > div {
              display: flex;
              align-items: center;
              gap: 8px;
              :deep(label.select) {
                display: block !important;
                select {
                  width: 140px !important;
                }
              }
            }
          }
          &.adress {
            > * + * {
              margin-top: 8px;
            }
            :deep(.label_wrap) {
              input[type='text'] {
                width: 100% !important;
              }
            }
            > .multi_form {
              gap: 5px;
              .label_wrap {
                flex: 0 !important;
                :deep(label.input) {
                  input {
                    width: 140px !important;
                  }
                }
              }
            }
            > a {
              padding: 4px 0;
              color: #666;
              font-size: 13px;
              text-decoration: underline;
              position: relative;
              display: inline-block;
              &::after {
                content: '';
                width: 12px;
                height: 12px;
                background-image: url('@inmModule/assets/images/common/icon_split.png');
                background-repeat: no-repeat;
                background-size: 250px;
                background-position: -67px -146px;
                vertical-align: middle;
                position: absolute;
                top: 48%;
                right: -15px;
                transform: translateY(-50%) rotate(270deg) !important;
              }
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

.modal_wrap {
  .modal_container {
    .modal_header {
    }
    .modal_content {
      .table_wrap {
        tbody {
          tr {
            td {
              :deep(.input_wrap) {
                width: 29%;
              }
            }
          }
        }
      }
      ul {
        li {
          :deep(.input_wrap) {
            flex: 0 auto;
          }
        }
      }
    }
  }
  &#adress_manage {
    .modal_container {
      width: 720px;
      .modal_content {
        .table_wrap {
          margin-top: 10px;
          tbody {
            tr {
              td {
                &.adress {
                  .multi_form {
                    :deep(.input_wrap) {
                      flex: 0 auto;
                    }
                  }
                  > .input_wrap {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
        ul {
          li {
            :deep(.input_wrap) {
              flex: 0 auto;
            }
          }
        }
      }
    }
  }

  &#adress_manage {
    .modal_container {
      width: 720px;
      .table_wrap {
        tbody {
          tr {
            td {
              &.adress {
                .multi_form {
                  :deep(.input_wrap) {
                    flex: 0 auto;
                  }
                }
                > .input_wrap {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
  &#shippingArmyInfo {
    z-index: 15;
    &.active {
      display: block;
    }
    .modal_container {
      max-width: 640px;
      left: 560px;
      @media screen and (min-width: 1921px) {
        top: 350px;
      }
      @media screen and (min-width: 3840px) {
        top: 755px;
      }
      @media screen and (max-width: 1920px) {
        top: 226px;
      }
      @media screen and (max-width: 1280px) {
        top: 195px;
      }
      .modal_header {
        border-bottom: 0;
      }
      .modal_content {
        padding: 30px 20px;
        p {
          color: #666666;
          font-size: 13px;
          line-height: 1.54em;
          letter-spacing: -0.01em;
          display: flex;
          flex-direction: column;
          strong {
            font-weight: 600;
          }
        }
        ol {
          margin: 10px 0 0 15px;
          > * + * {
            margin-top: 5px;
          }
          li {
            color: #888;
            font-size: 13px;
            list-style-type: decimal;
            em {
              color: #d72137 !important;
            }
          }
        }
      }
    }
  }
  &#personalinfo {
    .modal_container {
      width: 720px !important;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .modal_content {
        p {
          color: #888;
          font-size: 13px;
        }
        .table_wrap {
          margin: 10px 0;
          table {
            thead {
              th {
                color: #888;
                font-size: 13px;
              }
            }
            tbody {
              tr {
                > * + * {
                  text-align: center;
                }
                td {
                  padding: 10px;
                  color: #888;
                  font-size: 13px;
                  strong {
                    font-size: 17px;
                    font-weight: normal;
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .modal_container {
    .modal_content {
      > .check {
        margin-bottom: 20px;
        color: #000;
        font-weight: 500;
      }
      .error {
        margin: 10px 0;
        color: #ff0000;
        font-size: 12px;
        display: block;
      }
      ul {
        margin-top: 10px;
        li {
          display: flex;
          align-items: center;
          a {
            margin-left: 20px;
            color: #666;
            font-size: 14px;
            text-decoration: underline;
          }
        }
      }
      :deep(button.btn_outline) {
        border: 1px solid #000;
        box-sizing: border-box;
        em {
          padding: 0 20px;
          color: #000;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
