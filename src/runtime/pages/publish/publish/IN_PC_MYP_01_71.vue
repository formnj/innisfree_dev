<template>
  <div class="sub_title_wrap">
    <h3>뷰티포인트 통합 {{ title }} 수정</h3>
    <div :class="{ explain: members, desc: !members }">{{ desc }}</div>
  </div>
  <Tabs v-if="members" id="privacy_tab" tabType="type_03" :item="[{ txt: '회원정보 수정' }, { txt: '비밀번호 수정' }]" :tabidx="0" />
  <section v-if="members" class="member_wrap member_info_modi">
    <div class="sub_title_wrap type_cont"><h3>SNS/Apple ID 계정 연동 관리</h3></div>
    <div class="table sns_table">
      <table>
        <caption>
          SNS/Apple ID 계정 연동 관리
        </caption>
        <colgroup>
          <col style="width: 170px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th class="facebook">페이스북</th>
            <td>
              <span>연결 정보 없음</span>
            </td>
          </tr>
          <tr>
            <th class="kakao">카카오톡</th>
            <td>
              <div class="connect">
                <span>연결됨</span>
                <Button class="btn_min_outline" txt="연결해제" @click="openModal" />
              </div>
            </td>
          </tr>
          <tr>
            <th class="naver">네이버</th>
            <td>
              <span>연결 정보 없음</span>
            </td>
          </tr>
          <tr>
            <th class="apple">Apple</th>
            <td>
              <div class="connect">
                <span>연결됨</span>
                <Button class="btn_min_outline" txt="연결해제" @click="openModal" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="sub_title_wrap type_cont">
      <div class="explain">이름 변경(개명)의 경우 이니스프리 고객상담실(080-380-0114)로 문의 부탁드립니다.</div>
    </div>
    <div class="table write_table">
      <table>
        <caption>
          기본정보
        </caption>
        <colgroup>
          <col style="width: 170px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>이름</th>
            <td>김민수</td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>kkk*******</td>
          </tr>
          <tr>
            <th>생년월일</th>
            <td>1234 년 12 월 12 일</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <div class="email">
                <Inputs _type="text" />
                <span>@</span>
                <InmInputText :disabled="true"></InmInputText>
                <Selectbox :options="selectOption" :_placeholder="'선택하세요'" />
                <Button class="btn_outline" txt="메일 확인" />
              </div>
            </td>
          </tr>
          <tr>
            <th>휴대전화 번호</th>
            <td>
              <div class="phone">
                <Inputs _type="text" _value="010" isDisabled="true" />
                -
                <Inputs _type="text" _value="1234" isDisabled="true" />
                -
                <Inputs _type="text" _value="1234" isDisabled="true" />
                <Button class="btn_outline" txt="변경" />
              </div>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td>
              <div class="address">
                <Inputs class="sm" _type="text" _value="04386" isDisabled="true" />
                <Button class="btn_outline" txt="주소 검색" />
                <Button class="btn_outline" txt="주소 초기화" />
                <Inputs class="big" _type="text" _value="서울 용산구 한강대로30길 25" isDisabled="true" />
                <Inputs class="big" _type="text" _value="6층" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="sub_title_wrap type_cont">
      <h3>※ 반려 정보</h3>
    </div>
    <div class="list_table pet_list">
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
          <Inputs class="pet_box" _type="checkbox" _text="반려동물 정보 수집 및 이용 동의(선택)" />
          <button type="button" @click="modal.open('modal_pets_info_tip', 'layer')">자세히 보기</button>
          <div id="modal_pets_info_tip" class="modal_wrap">
            <!-- 반려동물 정보 수집 툴팁 -->
            <div class="modal_container">
              <div class="modal_header">
                <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
              </div>
              <div class="modal_content">
                <h3>반려동물 정보 수집 및<br />이용동의 (선택)</h3>
                <p>
                  - 수집항목 : 반려동물 정보(이름, 생년월일)<br />
                  - 수집 및 이용목적 : 맞춤서비스 제공<br />
                  - 이용 및 보유기간 : <strong>동의 철회 또는 회원 탈퇴 시</strong><br />까지<br /><br />
                  <em>
                    * 귀하는 반려동물 정보 수집 및 이용에 대한 동의를 거부<br />
                    할 수 있습니다. 단, 거부할 경우 맞춤서비스 제공이 되지<br />
                    않을 수 있습니다.
                  </em>
                </p>
              </div>
            </div>
            <div class="overlay" @click="modal.close(this)"></div>
          </div>
          <!-- //반려동물 정보 수집 툴팁 -->
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

    <div class="sub_title_wrap type_cont">
      <h3>※ 개인정보 수집·이용 동의 (마케팅) (선택)</h3>
      <div class="explain">회사는 이용자의 회원서비스 제공을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.</div>
    </div>
    <div class="table">
      <table>
        <caption>
          기본정보
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col />
          <col style="width: 30%" />
        </colgroup>
        <thead>
          <tr>
            <th>수집항목</th>
            <th>수집·이용목적</th>
            <th>보유기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>휴대전화 번호</td>
            <td>
              <strong>
                본인 동의 시 회사 또는 제휴사의<br />
                서비스/사업 및 정책/기타 이벤트에 관한 정보 제공 및<br />
                그에 따른 경품 등 물품 배송
              </strong>
            </td>
            <td><strong>동의 철회 또는 회원 탈퇴 시 까지</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="help_wrap">
      <ul class="none">
        <li>※ 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 단, 거부할 경우 이벤트 정보등이 제공되지 않을 수 있습니다.</li>
        <li>
          <Inputs _type="checkbox" _text="동의합니다." />
        </li>
        <li>(최근변경일시 : - )</li>
      </ul>
    </div>

    <div class="sub_title_wrap type_cont">
      <h3>광고성정보 수신여부</h3>
    </div>
    <div class="list_table ad_info">
      <ul>
        <li>이니스프리 쇼핑, 혜택, 이벤트 소식을 받아보세요.</li>
      </ul>
    </div>
    <div class="help_wrap">
      <ul class="none">
        <li>
          <Inputs _type="checkbox" _text="동의합니다." />
        </li>
        <li>
          <span>※이니스프리 개인정보 수집이용 동의(마케팅)(선택), 광고성 정보 수신여부(선택) 온/오프라인 일괄 관리됩니다.</span>
        </li>
        <li>(최근변경일시 : 2024-03-28 11:11)</li>
      </ul>
    </div>
    <div class="btn_wrap">
      <Button class="btn_mid" txt="확인" />
      <Button class="btn_mid_outline" txt="취소" />
    </div>
    <div class="leave_wrap">
      <p>
        이니스프리 회원 또는 이니스프리 밀리터리 회원에서 탈퇴가 가능합니다.
        <Button class="btn_min_outline" txt="회원탈퇴" @click="$router.push('IN_PC_MYP_01_75')" />
      </p>
    </div>
  </section>

  <section v-if="!members" class="member_wrap pwd_modi">
    <div class="table write_table">
      <table>
        <caption>
          비밀번호 입력
        </caption>
        <colgroup>
          <col style="width: 170px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>현재 비밀번호</th>
            <td>
              <Inputs _type="text" />
            </td>
          </tr>
          <tr>
            <th>새 비밀번호</th>
            <td>
              <Inputs _type="text" />
            </td>
          </tr>
          <tr>
            <th>새 비밀번호 확인</th>
            <td>
              <Inputs _type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="explain_box">
      <p class="tit">비밀번호 입력 시 유의사항</p>
      <ul>
        <li>
          * 영문 소문자, 숫자, 특수문자 중 최소 2가지 조합으로 8~16자
          <ul>
            <li>- 사용 가능한 특수문자: !”#$%&’()*+,-./:;<=>?@[ ]^_`{|}~</li>
            <li>- 공백 사용 불가</li>
          </ul>
        </li>
        <li>* 아이디와 동일한 비밀번호 사용불가</li>
        <li>* 개인정보와 관련되거나 연속된 숫자, 반복된 문자는 사용하지 않도록 주의</li>
      </ul>
    </div>
  </section>

  <InmModal
    v-model="showModal"
    class="modal_disconnect"
    :header="true"
    :footer="true"
    :overlay="true"
    :type="'alert'"
    :close-button="false"
    :dim-closeble="true"
    ok-button-text="확인"
    close-button-text="취소">
    <template #header><h2>간편 로그인 연결해제 완료 알림</h2></template>
    <p>간편 로그인 연결이 해제 되었습니다.<br />로그인 화면에서 언제든지 다시 이용할 수 있습니다.</p>
  </InmModal>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const desc_list = [
  {
    text: '* 이 페이지에서 회원정보 수정, 비밀번호 수정시 뷰티포인트 통합 아이디로 로그인하는 아모레퍼시픽 사이트의 정보가 함께 변경됩니다.'
  },
  {
    text: '개인정보 보호를 위해 비밀번호는 90일마다 변경해주세요.\n타인에게 비밀번호가 노출되지 않도록 주의해 주세요.\n비밀번호 변경시, 뷰티포인트ID로 로그인 된 모든 서비스에서 로그아웃됩니다.(자동 로그인 포함)'
  }
]

const members = ref(true)
const title = ref('회원 정보')
const desc = ref(desc_list[0].text)

onMounted(() => {
  document.querySelectorAll('#privacy_tab li').forEach((item, idx) => {
    item.addEventListener('click', () => {
      if (idx === 0) {
        members.value = true
        title.value = '회원 정보'
        desc.value = desc_list[idx].text
      }
      if (idx === 1) {
        members.value = false
        title.value = '비밀번호'
        desc.value = desc_list[idx].text
      }
    })
  })
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
  margin-bottom: 24px;
  .explain {
    margin-top: 6px;
    color: #888;
    font-size: 13px;
  }
  .desc {
    margin-top: 24px;
    color: #000;
    font-size: 16px;
    white-space: pre-line;
  }
  &.type_cont {
    h3 {
      font-size: 22px;
    }
    .explain {
      margin-bottom: 20px;
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
  }
}

.tab_wrap {
  &#privacy_tab {
    :deep(ul) {
      li {
        button {
          border-color: #a7a7a7;
        }
      }
    }
  }
}

.table {
  margin-top: -1px;
  border-top: 2px solid #000;
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

  &.sns_table {
    table {
      tbody {
        tr {
          th {
            font-weight: 500;
            &:before {
              content: '';
              width: 32px;
              height: 32px;
              margin-right: 16px;
              background: url('@inmModule/assets/images/common/icon_split.png') no-repeat 0 -330px;
              background-size: 250px auto;
              vertical-align: middle;
              display: inline-block;
            }
            &.kakao {
              &:before {
                background-position: -40px -330px;
              }
            }
            &.naver {
              &:before {
                background-position: 0 -365px;
              }
            }
            &.apple {
              &:before {
                background-position: -40px -365px;
              }
            }
          }
        }
        td {
          padding: 21px 20px;
          color: #999;
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          border-left: 0;
          border-bottom: 1px solid #eee;
          > * {
            height: 30px;
            display: inline-block;
          }
          .connect {
            color: #333;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 5px;
            > :deep(button) {
              border-color: #999;
              em {
                padding: 0 16px;
                font-size: 12px;
                font-weight: 600;
                color: #999;
              }
            }
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
              height: 40px;

              button {
                border-color: #eee;
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
            &.sm {
              flex: 0 0 110px;
            }
            &.big {
              flex: 0 0 70%;
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
          :deep(.label_wrap) {
            flex: 0 0 150px;
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
  border-top: 2px solid #000;
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
  &.ad_info {
    > ul {
      > li {
        color: #000;
        font-size: 16px;
        border-bottom: 0;
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

.explain_box {
  margin-top: 20px;
  padding: 30px;
  border: 1px solid #eee;
  background: #fcfcfd;
  .tit {
    margin-bottom: 20px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    &:before {
      content: '';
      width: 24px;
      height: 24px;
      background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -200px -250px;
      background-size: 250px auto;
      display: inline-block;
    }
  }
  > ul {
    li {
      margin-top: 15px;
      padding-left: 7px;
      position: relative;
      &:before {
        content: '';
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #888;
        position: absolute;
        top: 8px;
        left: 0;
      }
      ul {
        li {
          margin-top: 10px;
          color: #999;
          font-size: 13px;
          &:before {
            background: #999;
          }
        }
      }
    }
  }
}

.modal_wrap {
  &.layer {
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
          font-size: 0;
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

        strong {
          font-size: 16px;
          font-weight: 600;
          text-decoration: underline;
        }

        em {
          font-weight: 600;
        }
      }
    }
  }

  &.modal_disconnect {
    .modal_container {
      .modal_content {
        p {
          font-size: 13px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
