<template>
  <!-- title washed -->
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>1:1 문의</h2>
    </div>
  </div>
  <!-- //title washed -->

  <div class="inner">
    <Tabs tabType="type_03" :item="[{ txt: '1&#58;1 문의하기' }, { txt: '답변확인' }]" :tabidx="0" />
    <section>
      <div class="info">
        <strong>1:1 문의전에 꼭! 확인해주세요</strong>
        <p>1:1 고객문의 처리시간은 09:00 ~18:00 입니다. (문의는 24시간 언제나 가능합니다.)</p>
        <p>최단시간 내에 접수사항을 조치하여 해결해 드리도록 하겠습니다.</p>
        <p>피해 발생시에는 공정거래위원회 소비자분쟁해결기준에 의거해서 처리됩니다.</p>
        <em
          >상담내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보 보호를 위해 마스킹 처리될 수 있습니다.<br />
          (예: 성명, 연락처, 이메일주소, 계좌번호 등)</em
        >
      </div>
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
              <th>이름</th>
              <td>김이나</td>
            </tr>
            <tr>
              <th>
                <em>*</em>
                <span>상담구분</span>
              </th>
              <td>
                <Selectbox
                  :options="[
                    { val: 'value', txt: '옵션01' },
                    { val: 'value', txt: '옵션02' }
                  ]" />
                <span class="error">상품구분을 선택해 주세요.</span>
              </td>
            </tr>
            <tr>
              <th>
                <em>*</em>
                <span>문의유형</span>
              </th>
              <td>
                <Selectbox
                  :options="[
                    { val: 'value', txt: '옵션01' },
                    { val: 'value', txt: '옵션02' }
                  ]" />
              </td>
            </tr>
            <tr>
              <th>
                <span>문의제품</span>
              </th>
              <td>
                <Button class="btn_outline" txt="주문상품찾기" @click="modal.open('choice_modal', 'full')" />
              </td>
            </tr>
            <tr>
              <th>
                <span>제목</span>
              </th>
              <td>
                <Inputs _type="text" _placeholder="최대 30자 이내" />
                <span class="error">제목을 입력해 주세요.</span>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <Textarea
                  _placeholder="상담내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보보호를 위해 마스킹 처리될 수 있습니다.
                                (예 : 성명, 연락처, 이메일주소, 계좌번호 등)" />
              </td>
            </tr>
            <tr>
              <th>첨부파일</th>
              <td>
                <Button class="btn_outline" txt="사진첨부(최대5개)" />
              </td>
            </tr>
            <tr>
              <th>답변 받으실 이메일</th>
              <td class="qa_email">
                <div>
                  <Inputs _type="text" _placeholder="" value="rianag" />
                  <span>@</span>
                  <Inputs _type="text" _placeholder="" value="nave.com" />
                </div>
                <dl>
                  <dt>답변 결과를 이메일로 받으시겠습니까?</dt>
                  <dd>
                    <Inputs _type="radio" _text="예" _name="email" value="yes" />
                    <Inputs _type="radio" _text="아니요" _name="email" value="no" />
                  </dd>
                </dl>
              </td>
            </tr>
            <tr>
              <th>휴대전화 번호</th>
              <td class="qa_sms">
                <div>
                  <Inputs _type="text" _placeholder="" value="010" />
                  <span>~</span>
                  <Inputs _type="text" _placeholder="" value="1234" />
                  <span>~</span>
                  <Inputs _type="text" _placeholder="" value="5678" />
                </div>
                <dl>
                  <dt>답변등록 여부를 SMS로 받으시겠습니까?</dt>
                  <dd>
                    <Inputs _type="radio" _text="예" _name="email" value="yes" />
                    <Inputs _type="radio" _text="아니요" _name="email" value="no" />
                  </dd>
                </dl>
              </td>
            </tr>
          </tbody>
        </table>
        <em> *이메일, 휴대전화번호 정보 수정을 원하시는 경우 회원정보 수정을 통해 변경해주시기 바랍니다. </em>
      </div>
      <div class="btn_wrap">
        <Button txt="문의하기" class="btn_mid" />
        <Button txt="취소" class="btn_mid_outline active" />
      </div>
    </section>
  </div>

  <div class="modal_wrap" id="choice_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>주문제품 선택</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="inner">
          <Tabs tabType="type_04" :item="[{ txt: '1개월' }, { txt: '2개월' }, { txt: '3개월' }, { txt: '6개월' }]" :tabidx="0" />
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
            <Button class="btn_outline" txt="검색" />
          </div>
        </div>
        <p class="alt">최근 <span>1년 내역만 검색</span>이 가능합니다.</p>
        <div class="table_wrap">
          <table>
            <caption>
              주문내역
            </caption>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>주문제품</th>
                <th>주문일자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3">검색된 주문정보가 없습니다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
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
/* //component sample data */
</script>

<style lang="scss" scoped>
.tab_wrap {
  ul {
    li {
      &.current {
        button {
          background: #000 !important;
          em {
            color: #fff !important;
          }
        }
      }
    }
  }
}

.inner {
  section {
    position: relative;
    .info {
      margin: 80px 0px 50px;
      padding: 100px 0 0;
      color: #666;
      text-align: center;
      &::before {
        content: '';
        width: 80px;
        height: 80px;
        background-image: url('@inmModule/assets/images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 500px;
        background-position: -247px -399px;
        position: absolute;
        top: -15px;
        left: 50%;
        display: block;
        transform: translateX(-50%);
      }
      strong {
        font-size: 24px;
        margin-bottom: 15px;
        display: block;
      }
      em {
        margin-top: 10px;
        color: #d72137 !important;
        display: block;
      }
    }
    .btn_wrap {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 10px;
      :deep(button) {
        &.btn_mid {
          padding: 0 30px;
          font-size: 16px;
          font-weight: 600;
          background: #00bc70;
        }
        &.btn_mid_outline {
          padding: 0 30px;
          font-size: 16px;
          font-weight: 600;
        }
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
    tbody {
      tr {
        th {
          padding: 24px 30px;
          color: #333;
          font-size: 14px;
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
          padding: 20px 0;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 1px solid #f5f5f5;
          :deep(button.btn_outline) {
            border-radius: 1px;
            em {
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
                width: 600px !important;
              }
              textarea {
                width: 600px;
                height: 200px !important;
              }
            }
          }
          > div {
            display: flex;
            align-items: center;
          }
          > dl {
            margin-top: 16px;
            display: flex;
            align-items: center;
            dt {
              margin-right: 30px;
              font-size: 14px;
            }
            dd {
              display: flex;
              gap: 15px;
            }
          }

          &.qa_sms {
            > div {
              gap: 6px;
              :deep(.input_wrap) {
                flex: 0 auto !important;
                .label_wrap {
                  flex: 0 !important;
                  label.input {
                    width: 150px !important;
                    input[type='text'] {
                      width: 150px !important;
                    }
                  }
                }
              }
            }
            dl {
              dd {
                :deep(.input_wrap) {
                  flex: 0 auto;
                }
              }
            }
          }
          &.qa_email {
            > div {
              gap: 6px;

              :deep(.input_wrap) {
                flex: 0 auto !important;
                .label_wrap {
                  flex: 0 !important;
                  label.input {
                    width: 150px !important;
                    input[type='text'] {
                      width: 150px !important;
                    }
                  }
                }
              }
            }
            dl {
              dd {
                :deep(.input_wrap) {
                  flex: 0 auto;
                }
              }
            }
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

#choice_modal {
  .modal_container {
    width: 720px;
    font-size: 16px !important;
    .modal_header {
      padding: 30px 20px;
      h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.33rem;
      }
    }
    .modal_content {
      padding: 0px 30px 30px 30px;
      .inner {
        padding: 0;

        .date_wrap {
          margin: 40px 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          .date {
            width: 160px;
            height: 4rem;
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
          .btn_outline {
            font-weight: 600;
            border-radius: 1px;
          }
        }
      }
      .alt {
        margin: 0 0 8px;
        color: #222;
        font-size: 16px;
        span {
          color: #00bc70;
        }
      }
      .table_wrap {
        table {
          thead {
            tr {
              th {
                padding: 20px 0;
                color: #666;
                font-size: 13px;
                border-bottom: 1px solid #eee;
                background: #f5f5f5;
                &:not(:first-of-type) {
                  border-left: 1px solid #eee;
                }
                &:nth-of-type(2) {
                  width: 60%;
                }
              }
            }
          }
          tbody {
            text-align: center;
            tr {
              td {
                font-size: 13px;
              }
            }
          }
        }
      }
      section {
        div {
          padding: 10rem 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
