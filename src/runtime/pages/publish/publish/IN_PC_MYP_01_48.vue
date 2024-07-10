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
                  <Button class="btn_" txt="검색" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span>고객님이 문의하신 내용에 대한 처리 결과입니다.</span>
        <em>(고객님께서 적어주신 문의글에 개인정보가 포함된 경우, 고객정보보호를 위해 마스킹처리가 될 수 있습니다.)</em>
      </p>
    </section>
    <div>
      <div class="table_wrap">
        <table>
          <caption>
            주문내역
          </caption>
          <colgroup>
            <col style="width: 100px" />
            <col style="" />
            <col style="width: 170px" />
            <col style="width: 170px" />
          </colgroup>
          <thead>
            <tr>
              <th>NO.</th>
              <th>제목</th>
              <th>작성일</th>
              <th>처리현황</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">3</td>
              <td class="subject"><a href="#none">test</a></td>
              <td class="date">2024-04-25 08:42:20</td>
              <td class="btn">
                <span>처리중</span>
                <Button class="btn_outline btn_min" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
              </td>
            </tr>
            <tr class="questionCont">
              <td></td>
              <td colspan="3">
                <p>뷰티포인트 소멸시기가 궁금합니다.</p>
                <p class="retitle">
                  <span>답변</span>
                  뷰티포인트 소멸시기가 궁금합니다.
                </p>
                <p>
                  안녕하세요 고객님. 이니스프리입니다. 먼저, 저희 이니스프리에 관심을 가져주시고 이용해 주시는 고객님께 진심으로 감사의
                  마음을 전합니다. 구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시
                  소멸됩니다. 이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시
                  소멸됩니다. 고객님의 뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며, 기존 보유하셨던 뷰티포인트의
                  소멸기한이 궁금하신 부분이라면 아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로
                  문의부탁드립니다. 소중한 시간 내어 문의 주신 점 감사 드립니다. 행복한 하루 보내세요.
                </p>
                <p class="re_date">2024-04-25</p>
              </td>
            </tr>

            <tr>
              <td class="num">4</td>
              <td class="subject"><a href="#none">test</a></td>
              <td class="date">2024-04-25 08:42:20</td>
              <td class="btn">
                <span>처리중</span>
                <Button class="btn_outline btn_min" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
              </td>
            </tr>
            <tr class="questionCont">
              <td></td>
              <td colspan="3">
                <p>뷰티포인트 소멸시기가 궁금합니다.</p>
                <p class="retitle">
                  <span>답변</span>
                  뷰티포인트 소멸시기가 궁금합니다.
                </p>
                <p>
                  안녕하세요 고객님. 이니스프리입니다. 먼저, 저희 이니스프리에 관심을 가져주시고 이용해 주시는 고객님께 진심으로 감사의
                  마음을 전합니다. 구매적립으로 인하여 적립된 뷰티포인트는 최종구매일로부터 1년이나 새용가능하며, 해당 기간 내 미사용시
                  소멸됩니다. 이벤트로 인하여 적립된 뷰티포인트는 각 이벤트별로 정해진 기한 내 사용가능하며, 해당 기간 내 미사용시
                  소멸됩니다. 고객님의 뷰티포인트 확인시 현재 보유한 뷰티포인트가 없는 것으로 확인되며, 기존 보유하셨던 뷰티포인트의
                  소멸기한이 궁금하신 부분이라면 아모레퍼시픽 뷰티포인트 상담실(080-023-5454/오전 9시 - 6시, 단, 12시 - 1시 점심시간 제외)로
                  문의부탁드립니다. 소중한 시간 내어 문의 주신 점 감사 드립니다. 행복한 하루 보내세요.
                </p>
                <p class="re_date">2024-04-25</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알림</h2>
      </div>
      <div class="modal_content">
        <div>해당 상담내역을 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
        <Button class="btn_big" txt="취소" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})

import { modal } from '@inmModule/assets/js/common-ui'
/* //component sample data */

onMounted(() => {
  function accordion() {
    let taget = document.querySelectorAll('td.subject')
    let questionCont = document.querySelectorAll('.questionCont')
    console.log(questionCont)
    taget.forEach((el, i) => {
      el.addEventListener('click', () => {
        el.parentElement.nextElementSibling.classList.toggle('active')
        // console.log(el.parentElement.nextElementSibling.childNodes)
        // el.parentElement.nextElementSibling.childNodes.forEach((a)=>{
        //   a.classList.toggle('active')
        // })
      })
    })
  }

  accordion()
})
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
          .btn_ {
            padding: 0 20px;
            font-weight: 600;
            background: #00bc70;
          }
        }
        tbody {
          tr {
            td {
              :deep(.input_wrap) {
                em {
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
    }
    > p {
      margin: 60px 0 30px;
      display: flex;
      flex-direction: column;
      span {
        font-size: 16px;
        font-weight: 500;
      }
      em {
        margin-top: 10px;
        color: #d72137;
        font-size: 14px;
        font-weight: 400;
        display: block;
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
          padding: 24px 0;
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
              :deep(.label_wrap) {
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
          &.qa_email {
            > div {
              gap: 6px;
              :deep(.label_wrap) {
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
          .error {
            margin-top: 10px;
            color: #ff0000;
            font-size: 12px;
            display: block;
          }
          &.num {
            text-align: center;
          }
          &.date {
            color: #888;
            font-size: 14px;
          }
          &.btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            button {
              &.btn_outline {
                padding: 0 1px;
                border-radius: 1px;
                em {
                  color: #999;
                  font-size: 12px;
                }
              }
            }
          }
        }
        &.questionCont {
          display: none;
          td {
            color: #777;
            font-size: 16px;
            line-height: 1.5;
            background: #f8fbfa;
            &[colspan='3'] {
              p {
                width: 95%;
                &.retitle {
                  margin: 40px 0 15px 0;
                  color: #333;
                  font-size: 16px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  gap: 15px;
                  span {
                    height: 22px;
                    padding: 0 5px;
                    color: #009d5e;
                    font-weight: 400;
                    font-size: 12px;
                    background-color: #edfff8;
                    line-height: 1.5em;
                    display: inline-flex;
                    align-items: center;
                  }
                }
                &.re_date {
                  margin-top: 20px;
                }
              }
            }
          }
          &.active {
            display: table-row;
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

        :deep(.tab_wrap) {
          ul {
            border-bottom: 1px solid #eee;
            gap: 50px;
            li {
              width: 100%;
              flex: 0 !important;
              > * {
                em {
                  width: 50px;
                  padding: 0 !important;
                  color: #666;

                  font-size: 16px;
                  font-weight: 600;
                }
              }
              &.current {
                > * em {
                  color: #00bc70 !important;
                }
                > * {
                  &::after {
                    border-bottom: 2px solid #00bc70 !important;
                  }
                }
              }
            }
          }
        }

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
