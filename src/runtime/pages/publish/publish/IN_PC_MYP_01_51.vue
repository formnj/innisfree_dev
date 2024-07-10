<template>
  <div class="inner">
    <div class="title_wrap">
      <h2>공병수거현황</h2>
    </div>

    <!-- 기본 공병수거 컨텐츠 -->
    <div class="my_bottle">
      <div class="recycle">
        <h3>주소희님<br />이번 달 이만큼 재활용 했어요.</h3>
        <p>5월 기준 적립한 공병수거 개수</p>
        <div class="num"><strong>8</strong>개</div>
      </div>
      <div class="direct">
        <div>
          <h3>이제, 이니스프리가<br /><em>직접 수거</em>하러 찾아갈게요!</h3>
          <p>(명절, 연휴기간에는 수거가 불가할 수 있습니다.)</p>
        </div>
        <InmButton class="btn_ confirm" @click="openModal($event, 0)">온라인 공병수거 신청하기</InmButton>
      </div>
    </div>
    <!-- //기본 공병수거 컨텐츠 -->

    <!-- 첫 공병수거 컨텐츠 -->
    <!-- <div class="my_bottle first">
      <div class="recycle">
        <h3>주소희님<br />이번 달 이만큼 재활용 했어요.</h3>
        <p>5월 기준 적립한 공병수거 개수</p>
        <div class="num"><strong>0</strong>개</div>
      </div>
      <div class="first_recycle">
        <div class="top">
          <h4>
            <em>김이니</em>님<br />
            <em>LESS PLASTIC</em><br />
            <em>실천</em>에 동참해 보세요
          </h4>
          <p>첫 수거하고 뷰티포인트<br /><em>5,000P</em> 받으세요</p>
        </div>
        <div class="bottom">
          <p>기간 : 2022.08.11 ~ 별도 안내시까지</p>
          <button type="button">유의사항</button>
        </div>
      </div>
      <div class="direct">
        <div class="top">
          <h4>이제, 이니스프리가<br /><em>직접 수거</em>하러 찾아갈게요!</h4>
          <p>(명절, 연휴기간에는 수거가 불가할 수 있습니다.)</p>
        </div>
        <InmButton class="btn_ confirm" @click="openModal">온라인 공병수거 신청하기</InmButton>
      </div>
    </div> -->
    <!-- //첫 공병수거 컨텐츠 -->

    <div class="details">
      <div class="sub_title_wrap">
        <h3>공병수거 내역</h3>
      </div>

      <!-- 공병수거 내역이 없을떄 -->
      <!-- <div class="no_data"><strong>진행된 공병수거 내역이 없습니다.</strong></div> -->
      <!-- //공병수거 내역이 없을떄 -->

      <div class="select_table">
        <table>
          <caption>
            공병수거 내역
          </caption>
          <colgroup>
            <col width="147px" />
            <col width="333px" />
          </colgroup>
          <tbody>
            <tr>
              <th>구매처</th>
              <td>
                <InmTab v-model="tabIndex01" :item-list="[{ text: '전체' }, { text: '온라인' }, { text: '매장' }]" :tab-type="tabType" />
              </td>
            </tr>
            <tr>
              <th>기간별 조회</th>
              <td>
                <InmTab v-model="tabIndex02" :item-list="[{ text: '3개월' }, { text: '6개월' }, { text: '1년' }]" :tab-type="tabType" />
              </td>
              <td>
                <div class="date">
                  <InmInputText v-model="inputTextValue01" :readonly="true" />
                  <span>~</span>
                  <InmInputText v-model="inputTextValue02" :readonly="true" />
                  <InmButton class="btn_ confirm">검색</InmButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="con_table">
        <span>총 <em>n</em>건</span>

        <table>
          <caption>
            공병수거 내역 리스트
          </caption>
          <colgroup>
            <col width="204px" />
            <col width="204px" />
            <col width="204px" />
            <col width="204px" />
            <col width="204px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>수거신청일</th>
              <th>공병수거신청번호</th>
              <th>공병수량</th>
              <th>적립포인트</th>
              <th>상태</th>
              <th>상태변경</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023.05.05</td>
              <td>00000001</td>
              <td>10개</td>
              <td>-</td>
              <td>수거신청</td>
              <td>
                <div class="btn_wrap">
                  <InmButton class="btn_outline_min">수거취소</InmButton>
                  <InmButton class="btn_outline_min">수거지변경</InmButton>
                </div>
              </td>
            </tr>
            <tr>
              <td>2023.04.29</td>
              <td>00000002</td>
              <td>7개</td>
              <td>-</td>
              <td>수거신청</td>
              <td></td>
            </tr>
            <tr>
              <td>2023.03.10</td>
              <td>00000003</td>
              <td>4개</td>
              <td>-</td>
              <td>수거거부</td>
              <td>
                <div class="btn_wrap">
                  <InmButton class="btn_outline_min" @click="openModal($event, 9)">수거거부 사유</InmButton>

                  <InmModal
                    v-model="showModal9"
                    class="modal_reject"
                    :header="true"
                    :footer="false"
                    :overlay="false"
                    :type="'layer'"
                    :close-button="false"
                    :dim-closeble="false"
                    ok-button-text="저장">
                    <template #header><h2>수거거부사유 안내</h2></template>
                    <p>
                      수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로
                      문의해주세요. (<NuxtLink to="#" class="btn_link_arrw">1:1문의</NuxtLink>
                      <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
                    </p>
                    <p class="bg_gray">
                      BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한
                      수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력
                    </p>
                  </InmModal>

                  <!-- <div id="modal_reject" class="modal_wrap">
                    <div class="modal_container">
                      <div class="modal_header">
                        <h2>수거거부사유 안내</h2>
                        <button class="btn_close" @click="modal.close(this)">닫기</button>
                      </div>
                      <div class="modal_content">
                        <p>
                          수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로
                          문의해주세요. (<NuxtLink to="#" class="btn_link_arrw">1:1문의</NuxtLink>
                          <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
                        </p>
                        <p class="bg_gray">
                          BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한
                          수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유
                          출력
                        </p>
                      </div>
                    </div>
                    <div class="overlay" @click="modal.close(this)"></div>
                  </div> -->
                </div>
              </td>
            </tr>
            <tr>
              <td>2023.02.16</td>
              <td>00000004</td>
              <td>9개</td>
              <td>2,700P</td>
              <td>수거완료</td>
              <td></td>
            </tr>
            <tr>
              <td>2023.01.08</td>
              <td>00000005</td>
              <td>1개</td>
              <td>300P</td>
              <td>매장수거완료<br />(IF수원 성대점)</td>
              <td></td>
            </tr>
          </tbody>
        </table>

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
      </div>
    </div>

    <div class="notice">
      <div class="sub_title_wrap">
        <h3>공병수거 캠페인 유의사항</h3>
      </div>
      <ol class="num_type">
        <li>
          공병 1개당 뷰티포인트 300점 적립(상시 운영)<br />
          - 월 최대 10개, 총 3,000점 적립 가능<br />
          - 사용 기한 : 적립일로부터 1년<br />
          - 최대 적립 한도는 온라인/오프라인 매장 통합으로 운영됩니다.<br />
          - 매월 25일 ~ 월말까지는 온라인 공병수거 신청이 불가합니다.
        </li>
        <li>
          공병수거 품목 안내<br />
          - 가능 품목 : 이니스프리 스킨케어, 바디, 클렌징, 헤어, 방향 본품 등(유리, 캔, 플라스틱 재질에 한하며, 불가능 품목 제외, 단 네일
          리무버 적립 가능)<br />
          - 불가능 품목 : 재질 혼용 제품의 재질 분리가 불가능한 제품, 메이크업류, 뷰티툴(도구류), 염모제, 증정용 표기 제품, 타사 제품<br />
          - 소용량 세트 제품의 경우 구성품 모두 지참하셔야 공병 1개로 인정됩니다.(ex. 홀리데이 핸드크림 미니어처 세트, 트루케어 AC진정 앰플,
          마이헤어 스칼프 스케일러 등)<br />
          - 튜브형 제품을 절단한 경우, 이니스프리 제품인지와 제품명이 정확히 확인된다면 공병 적립 가능합니다.<br />
          - 본품 뚜껑이 없더라도 대상 품목일 경우 공병수거 적립 가능합니다.
        </li>
        <li>
          기타<br />
          - 2022년 1월 1일부터 뷰티포인트 운영 정책에 따라 비구매성 포인트(이벤트 포인트)는 연간 누적 2,000,000P를 초과하거나 동일한 적립
          사유로 고객님의 일 적립 요청 횟수가 50회를 초과하는 경우, 뷰티포인트 적립이 불가능합니다.<br />
          - 비구매성 포인트 예시 : 리뷰 작성, 리뷰 프로필 등록, 이벤트 참여, 공병수거 적립, 특정 제품 구매 추가 적립 등으로 인한 적립
          뷰티포인트<br />
          - 잔여 한도 내에서는 부분 적립됩니다.<br />
          - 누적 포인트는 사용 기한, 적립된 포인트의 사용, 소멸 여부 등과 관계없이 초과 적립분에 대해서는 적립 제한됩니다.
        </li>
      </ol>
    </div>

    <!-- 공병수거 불가안내 팝업 -->
    <InmModal
      v-model="showModal"
      class="modal_impossible"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="'alert'"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="저장">
      <h2>공병수거 불가안내</h2>
      <button type="button" class="btn_close">닫기</button>
      <p>현재 공병수거 서비스 신청이 불가능합니다. 공병수거 신청이 가능할 때 다시 시도해 주세요.</p>
      <ul class="bul_list ref">
        <li>매달 25일부터 말일에는 온라인 공병수거 신청이<br />불가능합니다.</li>
        <li>명절 및 연휴기간에는 온라인 공병수거 신청이 불가능합니다.</li>
      </ul>
    </InmModal>
  </div>
</template>
<script setup>
import { ref, reactive } from '#imports'

definePageMeta({
  layout: 'publish-pc-sub'
})

const tabIndex01 = ref(0)
const tabIndex02 = ref(0)
const tabType = ref('type_05')
const inputTextValue01 = ref('2024-02-02')
const inputTextValue02 = ref('2024-02-04')

// 모달 변수
const closeButton = ref(false)
const dimCloseble = ref(true)
const style = reactive({ top: ``, left: `` })
const showModal = ref(false)
const showModal9 = ref(false)
const showHeader = ref(false)
const showFooter = ref(true)
const showOverlay = ref(true)

const openModal = (event, idx) => {
  if (idx === 9) showModal9.value = true
  else if (idx === 0) showModal.value = true
}
</script>
<style lang="scss" scoped>
.my_bottle {
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 628px;
    height: 450px;
    padding: 30px;
    border-radius: 10px;

    * {
      letter-spacing: -0.01em;
    }

    h3 {
      margin-bottom: 10px;
      color: #000;
      font-size: 32px;
      font-weight: 600;
      line-height: 42px;

      em {
        color: #00bc70;
      }
    }

    h4 {
      margin-bottom: 8px;
      color: #333;
      font-size: 20px;
      line-height: 28px;

      em {
        color: #00bc70;
      }
    }

    p {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
    }
  }

  .recycle {
    background: url('@inmModule/assets/images/ui/bg_recycle_01.png') no-repeat 0 0;
    position: relative;

    .num {
      color: #000;
      font-size: 28px;
      font-weight: 600;
      position: absolute;
      top: 201px;
      right: 87px;

      strong {
        font-size: 52px;
        font-weight: 700;
        line-height: 50px;
      }
    }
  }

  .direct {
    background: url('@inmModule/assets/images/ui/bg_recycle_02.png') no-repeat 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :deep(button) {
      width: 246px;
    }
  }

  &.first {
    gap: 20px;

    .first_recycle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .bottom {
        p {
          color: #999;
          font-size: 13px;
        }

        button {
          color: #666;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          &:after {
            content: '';
            width: 6px;
            height: 6px;
            border-top: 1.5px solid #999;
            border-right: 1.5px solid #999;
            display: block;
            transform: rotate(45deg);
          }
        }
      }
    }

    .first_recycle,
    .direct {
      width: auto;
      flex: 1;

      p {
        color: #888;

        em {
          color: #666;
        }
      }
    }

    .recycle {
      background-image: url('@inmModule/assets/images/ui/bg_recycle_03.png');
    }

    .first_recycle {
      background: #f5f5f5 url('@inmModule/assets/images/ui/bg_recycle_04.png') no-repeat 0 0;
    }

    .direct {
      background-image: url('@inmModule/assets/images/ui/bg_recycle_05.png');
    }
  }
}

table {
  width: 100%;

  caption {
    font-size: 0;
  }
}

.sub_title_wrap {
  margin: 100px auto 20px;
}

.no_data {
  padding: 50px 0;
  border: 1px solid #eee;
}

.select_table {
  padding: 20px 30px;
  margin-bottom: 20px;
  background-color: #fcfcfd;
  border: 1px solid #eee;

  tbody {
    tr {
      &:first-child {
        border-bottom: 1px solid #eee;

        th,
        td {
          padding-bottom: 20px;
        }
      }

      &:last-child {
        th,
        td {
          padding-top: 20px;
        }
      }

      th {
        color: #999;
        font-size: 16px;
        text-align: left;
      }

      td {
        padding-right: 24px;

        :deep(.tab_wrap) {
          li {
            &.current {
              button {
                z-index: 2;
              }
            }

            button {
              width: 111px;
              z-index: 1;
            }
          }
        }

        .date {
          display: flex;
          align-items: center;

          :deep(.label_wrap) {
            flex: unset;

            .input {
              input {
                width: 200px;
                color: #000;
                font-size: 14px;
              }

              &:after {
                content: '';
                width: 1.6rem;
                height: 1.6rem;
                background: url('@inmModule/assets/images/common/icon_split.png') no-repeat 0 -28rem;
                background-size: 25rem auto;
                position: absolute;
                top: 1.2rem;
                right: 1.5rem;
              }
            }
          }

          span {
            margin: 0 10px;
          }

          :deep(button) {
            width: 100px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.con_table {
  > span {
    em {
      color: #00bc70;
    }
  }

  table {
    margin-top: 20px;
    border-top: 2px solid #000;

    thead {
      tr {
        th {
          padding: 14px 0;
          background-color: #f5f5f5;
          border-left: 1px solid #eee;

          &:first-child {
            border-left: 0;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          height: 65px;
          color: #333;
          font-size: 16px;
          text-align: center;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;

          .btn_wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            position: relative;
          }

          :deep(button) {
            border-color: #999 !important;

            em {
              color: #999 !important;
              font-size: 12px;
              pointer-events: none;
            }
          }

          &:first-child {
            border-left: 0;
          }
        }
      }
    }
  }

  .paging {
    margin-top: 30px;
  }
}

.notice {
  ol {
    height: 300px;
    padding: 30px;
    background-color: #f5f5f5;
    overflow-y: scroll;
    li {
      margin-left: 15px;
      line-height: 24px;

      & + li {
        margin-top: 30px !important;
      }
    }
  }
}

:deep(.modal_wrap) {
  &.modal_impossible {
    .modal_container {
      width: 323px;

      .modal_content {
        padding: 30px 20px;

        h2 {
          margin-bottom: 20px;
          color: #000;
          font-size: 18px;
          line-height: 24px;
        }

        p {
          margin-bottom: 8px;
          color: #666;
          font-size: 13px;
        }

        .bul_list {
          &.ref {
            li {
              padding-left: 12px;
              color: #888;
              font-size: 13px;
              line-height: 16px;
            }
          }
        }
      }
    }
  }

  .bg_gray {
    margin: 60px 0 0 0;
    padding: 23px 20px;
    background-color: #fcfcfc;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }

  .btn_wrap.bottom {
    margin-top: 60px;
    display: flex;
    justify-content: center;

    & > button {
      width: 200px;
      font-weight: 600;
    }
  }

  &.modal_reject {
    top: 30px;
    left: -465px;
    text-align: left;

    .modal_header {
      h2 {
        font-size: 20px;
      }
    }

    .modal_content {
      width: 540px;

      padding: 30px 20px;

      p {
        &:first-child {
          font-size: 14px;
        }
      }

      .btn_link_arrw {
        margin-right: 10px;
        border-bottom: 1px solid #666;
        &:after {
          width: 6px;
          height: 6px;
          border-color: #666;
        }
      }

      .bg_gray {
        margin-top: 30px;
        padding: 15px;
        font-size: 13px;
        line-height: 20px;
        color: #666;
      }
    }
  }
}
</style>
