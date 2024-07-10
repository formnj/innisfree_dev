<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <h3>추가정보 입력</h3>
      </div>
      <div class="chk_privacy">
        <p>약관 동의</p>
        <ul>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="개인정보 수집/이용 동의 (마케팅) (선택)"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
            <button type="button" class="btn_link_arrw" @click="modal.open('modal_privacy', 'full modal_privacy')">자세히보기</button>
          </li>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="광고성 정보 수신 여부 (선택)"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
          </li>
        </ul>
      </div>

      <div class="sub_title_wrap">
        <h3>추가정보 (선택)</h3>
        <p>추가 정보를 입력하시면 고객님께 맞춤상품을 추천해 드립니다.</p>
      </div>
      <div class="table write_table">
        <table>
          <caption>
            추가정보
          </caption>
          <colgroup>
            <col style="width: 170px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>이메일</th>
              <td>
                <div class="email">
                  <Inputs _type="text" />
                  <span>@</span>
                  <Inputs _type="text" />
                  <Selectbox :options="selectOption" />
                  <Button class="btn_outline" txt="메일 확인" />
                </div>
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>
                <div class="address">
                  <Inputs class="sm" _type="text" _value="" isDisabled="true" />
                  <Button class="btn_outline" txt="주소 검색" />
                  <Inputs class="big" _type="text" _value="" isDisabled="true" />
                  <Inputs class="big" _type="text" _value="" />
                  <InmInputCheckbox
                    v-model="value"
                    text="기본배송지로 등록"
                    true-value="Y"
                    false-value="N"
                    :is-switch="false"
                    :disabled="false" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="sub_title_wrap">
        <h3>※ 반려 정보</h3>
      </div>
      <div class="chk_privacy list_table pet_list">
        <ul>
          <li>
            <div class="thumb"><img src="/images/sam/temp_pet_nail.png" /></div>
            <div class="text">
              <p class="desc">
                이니스프리는 PET케어 제품을 지속적으로 연구개발 하고 있습니다.<br />
                아래 정보를 입력해주시면, PET케어 이벤트 진행시 우선적으로 혜택을 제공해드립니다.
              </p>
              <div class="radio_box">
                <p>· 현재 사랑하는 반려동물(강아지, 고양이)과 함께 살고 있나요?</p>
                <Inputs class="love" _type="radio" _name="pets" _text="네" />
                <Inputs _type="radio" _name="pets" _text="아니오" />
              </div>
            </div>
          </li>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="반려동물 정보 수집 및 이용 동의(선택)"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
            <button type="button" class="btn_link_arrw" @click="modal.open('modal_pet', 'full')">자세히 보기</button>
          </li>
          <li>
            <ul class="pets_info">
              <li>
                <span>· 반려동물의 이름을 알려주세요!</span>
                <Inputs _type="text" _placeholder="이름 입력" isDisabled="true" />
              </li>
              <li>
                <span>· 반려동물의 생일은 언제인가요?</span>
                <Inputs _type="text" _placeholder="생일 입력 (예:20230101)" isDisabled="true" />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="btn_wrap">
        <Button class="btn_mid confirm" txt="저장" />
        <Button class="btn_mid" txt="취소" />
      </div>
    </section>

    <div id="modal_privacy" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_header">
          <h2>개인정보 수집·이용 동의 (마케팅) (선택)</h2>
          <button class="btn_close" @click="modal.close(this)"></button>
        </div>
        <div class="modal_content">
          <div class="cont">
            <p>회사는 이용자의 회원서비스 제공을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.</p>
            <div class="table">
              <table>
                <caption></caption>
                <colgroup>
                  <col style="width: 25%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>수집항목</th>
                    <td>휴대전화 번호</td>
                  </tr>
                  <tr>
                    <th>수집이용/<br />목적</th>
                    <td>
                      본인 동의 시 회사 또는 제휴사의<br />
                      서비스/사업 및 정책/기타 이벤트에 관한<br />
                      정보 제공 및 그에 따른 경품 등 물품 배송
                    </td>
                  </tr>
                  <tr>
                    <th>이용/<br />보유기간</th>
                    <td><span>동의 철회 또는 회원 탈퇴 시 까지</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span>※ 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 단, 거부할 경우 문의 서비스의 이용이 불가합니다.</span>
          </div>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>

    <div id="modal_pet" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_header">
          <h2>반려동물 정보 수집 및 이용동의 (선택)</h2>
          <button class="btn_close" @click="modal.close(this)"></button>
        </div>
        <div class="modal_content">
          <div class="cont">
            <ul>
              <li>- 수집항목 : 반려동물 정보(이름, 생년월일)</li>
              <li>- 수집 및 이용목적 : 맞춤서비스 제공</li>
              <li>- 이용 및 보유기간 : <strong>동의 철회 또는 회원 탈퇴 시</strong> 까지</li>
            </ul>
            <span
              >* 귀하는 반려동물 정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 단, 거부할 경우 맞춤서비스 제공이 되지 않을 수
              있습니다.</span
            >
          </div>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const selectOption = [
  { val: 'value', txt: '직접입력' },
  { val: 'value', txt: '천리안' },
  { val: 'value', txt: '싸이월드' },
  { val: 'value', txt: '다음' },
  { val: 'value', txt: '드림위즈' },
  { val: 'value', txt: '엠팔' },
  { val: 'value', txt: '프리첼' },
  { val: 'value', txt: '지메일' },
  { val: 'value', txt: '하나포스' },
  { val: 'value', txt: '한메일' },
  { val: 'value', txt: '핫메일' },
  { val: 'value', txt: '캐비' },
  { val: 'value', txt: '코리아' },
  { val: 'value', txt: '라이코스' },
  { val: 'value', txt: 'MSN' },
  { val: 'value', txt: '네이트' },
  { val: 'value', txt: '네이버' },
  { val: 'value', txt: '네티앙' },
  { val: 'value', txt: '파란' },
  { val: 'value', txt: '야후' }
]
</script>
<style lang="scss" scoped>
section {
  &.pwd_modi {
    .write_table {
      :deep(.input_wrap) {
        width: 234px;
      }
    }
  }
}

.sub_title_wrap {
  padding: 0;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 2px solid #000;
  p {
    padding-top: 10px;
  }
}

.chk_privacy {
  margin-top: 20px;
  p {
    font-size: 20px;
    color: #000;
    margin-bottom: 20px;
  }
  ul {
    li {
      .input_wrap {
        display: inline-block;
      }

      .btn_link_arrw {
        margin-left: 20px;
        text-decoration: underline;
      }

      & + li {
        padding-top: 2rem;
      }
    }
  }
}

.table {
  margin-top: -1px;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      font-size: 0;
      text-indent: -9999px;
    }
    thead {
      tr {
        th {
          padding: 15px 20px;
          color: #000;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          border-left: 1px solid #eee;
          background: #f5f5f5;
          &:first-child {
            border-left: 0;
          }
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 15px 20px;
          font-size: 14px;
          font-weight: 400;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        td {
          padding: 21px 20px;
          color: #333;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
          strong {
            font-size: 19px;
            line-height: 1.5;
            text-decoration: underline;
          }
          &:first-child {
            border-left: 0;
          }
        }
      }
    }
  }

  &.write_table {
    tbody {
      tr {
        th {
          padding: 24px 30px;
          color: #333;
          font-size: 14px;
          text-align: left;
          border-bottom: 1px solid #f5f5f5;
        }
        td {
          padding: 20px 0;
          color: #000;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          border-left: 0;
          border-bottom: 1px solid #f5f5f5;
          .email {
            display: flex;
            align-items: center;
            gap: 24px;
            > span {
              margin: 0 -12px;
            }
            > button {
              margin-left: -15px;
              border-radius: 1px;
            }
            :deep(.select) {
              width: 150px;
              > div {
                &:after {
                  width: 8px;
                  height: 8px;
                  margin-top: -2px;
                }
              }
            }
          }
          .phone {
            display: flex;
            align-items: center;
            gap: 15px;
            > button {
              margin-left: -5px;
            }
          }
          .address {
            display: flex;
            flex-wrap: wrap;
            gap: 10px 8px;
          }
          :deep(.input_wrap) {
            flex: 0 0 150px;
            &.big {
              flex: 0 0 100%;
            }
            .input {
              input {
                border-color: #eee;
                &:disabled {
                  background: #f5f5f5;
                  border-color: #ddd;
                }
              }
            }
          }
          :deep(button) {
            border-color: #000;
            border-radius: 1px;
            em {
              padding: 0 16px;
              font-weight: 600;
              line-height: 38px;
            }
          }
        }
      }
    }
  }
}

.list_table {
  > ul {
    display: flex;
    flex-direction: column;
    > li {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
      display: flex;
    }
  }
  &.pet_list {
    > ul {
      > li {
        &:first-child {
          padding-bottom: 40px;
          gap: 30px;
        }
        .text {
          .desc {
            margin-bottom: 20px;
            color: #666;
            font-size: 14px;
            line-height: 22px;
          }
          .radio_box {
            display: flex;
            flex-wrap: wrap;
            p {
              width: 100%;
              margin-bottom: 10px;
              color: #000;
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
            }
            :deep(.input_wrap) {
              flex: 0 0 17%;
              &.love {
                &:after {
                  content: '♥';
                  margin-left: 5px;
                  color: #00bc70;
                  vertical-align: middle;
                }
              }
              .check {
                padding-left: 32px;
                .label {
                  color: #000;
                  font-size: 14px;
                }
              }
            }
          }
        }
        &:nth-child(2) {
          :deep(.pet_box) {
            margin-right: 25px;
            flex: none;
            .check {
              padding-left: 30px;
              .label {
                font-size: 16px;
                font-weight: 600;
                color: #000;
              }
            }
          }
          button {
            color: #666;
            font-size: 13px;
            text-decoration: underline;
          }
        }
        &:nth-child(3) {
          align-items: center;
          justify-content: center;
          .pets_info {
            display: flex;
            flex: 1;
            li {
              flex: 1;
              display: flex;
              align-items: center;
              gap: 20px;
              span {
                color: #666;
              }
              &:first-child {
                :deep(.input_wrap) {
                  flex: 0 0 160px;
                }
              }
              &:last-child {
                :deep(.input_wrap) {
                  flex: 0 0 190px;
                }
              }
            }
          }
        }
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
    &:nth-child(2) {
      margin-top: 30px;
    }
    &:nth-child(3) {
      margin-top: 5px;
      font-size: 16px;
      text-align: right;
    }
    :deep(.input_wrap) {
      .check {
        padding-left: 30px;
        .label {
          color: #000;
          font-size: 16px;
        }
      }
    }
    > span {
      color: #000;
      font-size: 16px;
    }
  }
}

.btn_wrap {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  :deep(button) {
    padding: 0 62px;
    &:first-child {
      background-color: #00bc70;
    }
    em {
      padding: 0;
      font-size: 18px;
    }
  }
}

.leave_wrap {
  margin-top: 80px;
  padding: 40px 0;
  border: 1px solid #eee;
  background: #fcfcfd;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    :deep(button) {
      border-color: #000 !important;
      border-radius: 1px;
      > em {
        padding: 0 16px;
        color: #000 !important;
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
}

.modal_wrap {
  &.full {
    :deep(.modal_container) {
      width: 540px;
    }
  }
}
</style>
