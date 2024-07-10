<template>
  <div class="inner">
    <!-- 기본 공병수거 컨텐츠 -->
    <div class="my_bottle">
      <div class="recycle">
        <h3>주소희님<br />이번 달 이만큼 재활용 했어요.</h3>
        <p>5월 기준 적립한 공병수거 개수</p>
        <div class="num"><strong>8</strong>개</div>
      </div>
      <div class="direct">
        <p>이제, 이니스프리가 직접 수거하러 찾아갈게요!</p>
        <span>(명절, 연휴기간에는 수거가 불가할 수 있습니다.)</span>
        <InmButton class="btn_ confirm" @click="openModal($event, 0)">온라인 공병수거 신청하기</InmButton>
      </div>
    </div>
    <!-- //기본 공병수거 컨텐츠 -->

    <!-- 첫 공병수거 컨텐츠 -->
    <div class="my_bottle first">
      <div class="recycle">
        <h3>주소희님<br />이번 달 이만큼 재활용 했어요.</h3>
        <p>5월 기준 적립한 공병수거 개수</p>
        <div class="num"><strong>8</strong>개</div>
      </div>
      <div class="first_recycle">
        <p>주소희님<br />LESS PLASTIC 실천에 동참해보세요</p>
        <h4>첫 수거하고 뷰티포인트 <em>5,000P</em> 받으세요</h4>
        <span>기간 : 2022.08.11 ~ 별도 안내시까지</span>
        <button type="button">유의사항</button>
      </div>
      <div class="direct">
        <p>이제, 이니스프리가 직접 수거하러 찾아갈게요!</p>
        <span>(명절, 연휴기간에는 수거가 불가할 수 있습니다.)</span>
        <InmButton class="btn_ confirm" @click="openModal($event, 0)">온라인 공병수거 신청하기</InmButton>
      </div>
    </div>
    <!-- //첫 공병수거 컨텐츠 -->

    <div class="details">
      <div class="sub_title_wrap">
        <h4>공병수거 내역</h4>
      </div>

      <!-- 공병수거 내역이 없을떄 -->
      <div class="no_data"><strong>진행된 공병수거 내역이 없습니다.</strong></div>
      <!-- //공병수거 내역이 없을떄 -->

      <div class="title_wrap">
        <h2>
          <strong class="badge count">총 <em>32</em>건</strong>
        </h2>
        <div class="btn_wrap">
          <button class="btn_dropdown" @click="openModal($event, 1)">전체</button>
          <button @click="openModal($event, 2)">최근1년</button>
        </div>
      </div>

      <div class="bottle_history">
        <ul>
          <li v-for="(item, idx) in bottle_list_sample" :key="idx">
            <div class="info_num">
              <span class="date">{{ item.date }}</span>
              <span class="id">{{ item.id }}</span>
              <div class="num">
                <strong>{{ item.num }}개</strong>
                <span>{{ item.point }}</span>
              </div>
            </div>
            <div class="info_text">
              <span>
                {{ item.text }}
                <em>{{ item.shop }}</em>
              </span>
              <div class="btn_wrap">
                <button v-if="item.cancel" type="button">수거취소</button>
                <button v-if="item.change" type="button">수거지변경</button>
                <button v-if="item.refuse" type="button" @click="openModal($event, 9)">수거거부 사유</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="notice">
      <button :class="{ show: notice_list }" type="button" @click="notice_list = !notice_list">공병수거 캠페인 유의사항</button>
      <ul v-if="notice_list">
        <li>
          공병 1개당 뷰티포인트 300점 적립(상시 운영)
          <ul>
            <li>· 월 최대 10개, 총 3,000점 적립 가능</li>
            <li>· 사용 기한 : 적립일로부터 1년</li>
            <li>· 최대 적립 한도는 온라인/오프라인 매장 통합으로 운영됩니다.</li>
            <li>· 매월 25일 ~ 월말까지는 온라인 공병수거 신청이 불가합니다.</li>
          </ul>
        </li>
        <li>
          공병수거 품목 안내
          <ul>
            <li>
              · 가능 품목 : 이니스프리 스킨케어, 바디, 클렌징, 헤어, 방향 본품 등(유리, 캔, 플라스틱 재질에 한하며, 불가능 품목 제외, 단
              네일 리무버 적립 가능)
            </li>
            <li>
              · 불가능 품목 : 재질 혼용 제품의 재질 분리가 불가능한 제품, 메이크업류, 뷰티툴(도구류), 염모제, 증정용 표기 제품, 타사 제품
            </li>
            <li>
              · 소용량 세트 제품의 경우 구성품 모두 지참하셔야 공병 1개로 인정됩니다.(ex. 홀리데이 핸드크림 미니어처 세트, 트루케어 AC진정
              앰플, 마이헤어 스칼프 스케일러 등)
            </li>
            <li>· 튜브형 제품을 절단한 경우, 이니스프리 제품인지와 제품명이 정확히 확인된다면 공병 적립 가능합니다.</li>
            <li>· 본품 뚜껑이 없더라도 대상 품목일 경우 공병수거 적립 가능합니다.</li>
          </ul>
        </li>
        <li>
          기타
          <ul>
            <li>
              · 2022년 1월 1일부터 뷰티포인트 운영 정책에 따라 비구매성 포인트(이벤트 포인트)는 연간 누적 2,000,000P를 초과하거나 동일한
              적립 사유로 고객님의 일 적립 요청 횟수가 50회를 초과하는 경우, 뷰티포인트 적립이 불가능합니다.
            </li>
            <li>
              · 비구매성 포인트 예시 : 리뷰 작성, 리뷰 프로필 등록, 이벤트 참여, 공병수거 적립, 특정 제품 구매 추가 적립 등으로 인한 적립
              뷰티포인트
            </li>
            <li>· 잔여 한도 내에서는 부분 적립됩니다.</li>
            <li>· 누적 포인트는 사용 기한, 적립된 포인트의 사용, 소멸 여부 등과 관계없이 초과 적립분에 대해서는 적립 제한됩니다.</li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 공병수거 불가안내 팝업 -->
    <InmModal
      v-model="showModal0"
      class="modal_impossible"
      :header="showHeader"
      :footer="showFooter"
      :overlay="showOverlay"
      :type="'alert'"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="확인"
      :style="style">
      <h2>공병수거 불가안내</h2>
      <button type="button" class="btn_close">닫기</button>
      <p>현재 공병수거 서비스 신청이 불가능합니다. 공병수거 신청이 가능할 때 다시 시도해 주세요.</p>
      <ul class="bul_list ref">
        <li>매달 25일부터 말일에는 온라인 공병수거 신청이<br />불가능합니다.</li>
        <li>명절 및 연휴기간에는 온라인 공병수거 신청이<br />불가능합니다.</li>
      </ul>
    </InmModal>

    <!-- 공병수거 구분 선택 목록 -->
    <InmModal
      v-model="showModal1"
      class="modal_sort"
      :header="true"
      :footer="false"
      :overlay="showOverlay"
      :type="'bottom'"
      :close-button="closeButton"
      :dim-closeble="dimCloseble"
      ok-button-text="확인"
      :style="style">
      <div>
        <ul>
          <li class="active"><a href="#none" class="active">전체</a></li>
          <li><a href="#none">온라인 공병수거</a></li>
          <li><a href="#none">매장 공병수거</a></li>
        </ul>
      </div>
    </InmModal>

    <!-- 공병수거 기간 구분 선택 목록 -->
    <InmModal
      v-model="showModal2"
      class="modal_date"
      :header="true"
      :footer="true"
      :overlay="showOverlay"
      :type="'bottom '"
      :close-button="true"
      :dim-closeble="dimCloseble"
      close-button-text="초기화"
      ok-button-text="검색"
      :style="style">
      <p>조회기간</p>
      <InmTab v-model="tabIndex" :item-list="[{ text: '3개월' }, { text: '6개월' }, { text: '1년' }]" :tab-type="'type_05'" />

      <div class="date">
        <InmInputText v-model="inputTextValue01" :readonly="true" />
        <span>~</span>
        <InmInputText v-model="inputTextValue02" :readonly="true" />
      </div>
    </InmModal>

    <!-- 공병 수거거부 사유 모달 -->
    <InmModal
      v-model="showModal9"
      class="modal_reject"
      :header="false"
      :footer="false"
      :overlay="showOverlay"
      :type="'alert'"
      :close-button="false"
      :dim-closeble="dimCloseble"
      :style="style">
      <button class="btn_close" @click="modal.close(this)">닫기</button>
      <h2>수거거부사유 안내</h2>
      <p class="txt">
        수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로 문의해주세요. (<NuxtLink
          to="#"
          class="btn_link_arrw"
          >1:1문의</NuxtLink
        >
        <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
      </p>
      <p class="bg_gray">
        BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력
        BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력
      </p>
    </InmModal>
    <div id="modal_reject" class="modal_wrap">
      <div class="modal_container">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <div class="modal_content">
          <h2>수거거부사유 안내</h2>
          <p class="txt">
            수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로 문의해주세요.
            (<NuxtLink to="#" class="btn_link_arrw">1:1문의</NuxtLink> <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
          </p>
          <p class="bg_gray">
            BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유
            출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력 BO에서 입력한 수가불가 사유 출력
          </p>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const bottle_list_sample = [
  { date: '24.05.22', id: '0000007', num: '10', text: '수거신청', cancel: true, change: true },
  { date: '24.05.22', id: '0000007', num: '5', text: '수거거부', refuse: true },
  { date: '24.05.22', id: '0000007', num: '7', text: '수거취소' },
  { date: '24.05.22', id: '0000007', num: '2', text: '수거대기' },
  { date: '24.05.22', id: '0000007', num: '3', text: '수거실패' },
  { date: '24.05.22', id: '0000007', num: '6', text: '수거중' },
  { date: '24.05.22', id: '0000007', num: '5', text: '수거거부', point: '3,000P 적립' },
  { date: '24.05.22', id: '0000007', num: '9', text: '매장수거완료', shop: '(IF 수원 성대점)', point: '300P 적립' }
]

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '공병수거현황')
})

// 모달 변수
const closeButton = ref(false)
const dimCloseble = ref(true)
const style = reactive({ top: ``, left: `` })
const showModal0 = ref(false)
const showModal1 = ref(false)
const showModal2 = ref(false)
const showModal9 = ref(false)
const showHeader = ref(false)
const showFooter = ref(true)
const showOverlay = ref(true)

const openModal = (event, idx) => {
  if (idx === 9) showModal9.value = true
  else if (idx === 0) showModal0.value = true
  else if (idx === 1) showModal1.value = true
  else if (idx === 2) showModal2.value = true
}

// 유의사항 이벤트
const notice_list = ref(true)

// 기간 구분 모달 이벤트
const tabIndex = ref(0)
const inputTextValue01 = ref('2024-02-02')
const inputTextValue02 = ref('2024-02-04')
</script>
<style lang="scss" scoped>
.inner {
  padding: 3rem 2.1rem 10rem;
}

.my_bottle {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    * {
      letter-spacing: -0.01em;
    }
  }

  .recycle {
    height: 29.8rem;
    padding: 3rem 0 0 2rem;
    background: url('@inmModule/assets/images/ui/bg_mo_recycle_02.png') no-repeat 0 0 / cover;
    border-radius: 1rem;
    position: relative;

    h3 {
      margin-bottom: 1rem;
      color: #000;
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.4rem;

      em {
        color: #00bc70;
      }
    }

    p {
      color: #666;
      font-size: 1.4rem;
    }

    .num {
      color: #000;
      font-size: 2rem;
      font-weight: 600;
      display: flex;
      align-items: flex-end;
      position: absolute;
      top: 13.4rem;
      right: 5.6rem;

      strong {
        font-size: 3.6rem;
        font-weight: 700;
        line-height: 3.2rem;
      }
    }
  }

  .direct {
    padding: 3rem 2rem;
    border: 1px solid #eee;
    text-align: center;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      margin-bottom: 0.5rem;
      color: #333;
      font-size: 1.4rem;
      font-weight: 500;
    }

    span {
      color: #999;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }

    :deep(button) {
      margin-top: 1.5rem;

      em {
        font-weight: 600;
      }
    }
  }

  &.first {
    .first_recycle {
      padding: 3rem 2rem;
      text-align: center;
      border: 0.1rem solid #eee;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        color: #999;
        font-size: 1.3rem;
        line-height: 2rem;
      }

      h4 {
        color: #000;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.4rem;

        em {
          color: #00bc70;
        }
      }

      span {
        color: #666;
        font-size: 1.3rem;
        line-height: 2rem;
      }

      button {
        margin-top: 2rem;
        color: #000;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        &:after {
          content: '';
          width: 0.6rem;
          height: 0.6rem;
          border-top: 0.1rem solid #999;
          border-right: 0.1rem solid #999;
          display: block;
          transform: rotate(45deg);
        }
      }
    }

    .recycle {
      background-image: url('@inmModule/assets/images/ui/bg_mo_recycle_01.png');
    }
  }
}

.no_data {
  padding: 5rem 0;
  border: 1px solid #eee;
}

.details {
  margin-bottom: 3rem;

  .title_wrap {
    margin: 2rem 0 1.2rem;

    h2 {
      .badge {
        font-size: 1.3rem;
        gap: 0;

        em {
          margin-left: 0.5rem;
        }
      }
    }

    .btn_wrap {
      display: flex;
      gap: 2rem;

      button {
        height: auto;
        color: #000;
        font-size: 1.3rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:after {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          background: url('@inmModule/assets/images/common/icon_split.png') no-repeat -13rem -6rem;
          background-size: 25rem auto;
          display: block;
        }
      }
    }
  }

  .bottle_history {
    ul {
      li {
        padding: 0 2rem;
        border: 0.1rem solid #eee;
        border-top: 0;

        &:first-child {
          border-top: 0.1rem solid #eee;
        }
      }
    }

    .info_num {
      padding: 1.8rem 0;
      border-bottom: 0.1rem solid #f5f5f5;
      .date {
        margin-right: 0.5rem;
        color: #333;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 2rem;
      }
      .id {
        color: #999;
        font-size: 1.3rem;
        line-height: 2rem;
      }
      .num {
        margin-top: 1rem;
        color: #00bc70;
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          font-size: 2.2rem;
          font-weight: 600;
        }

        span {
          font-size: 1.4rem;
        }
      }
    }

    .info_text {
      padding: 1.8rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        color: #000;
        font-size: 1.4rem;
        font-weight: 600;

        em {
          font-weight: 400;
        }
      }

      .btn_wrap {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
          color: #00bc70;
          font-size: 1.4rem;
          font-weight: 600;
          text-decoration: underline;

          &:last-child {
            display: flex;
            align-items: center;
            gap: 1rem;
            &:before {
              content: '';
              width: 0.1rem;
              height: 1rem;
              background-color: #ddd;
              display: block;
            }
          }

          &:first-child {
            &:before {
              content: unset;
            }
          }
        }
      }
    }
  }
}

.notice {
  background-color: #f5f5f5;

  button {
    width: 100%;
    height: 5.4rem;
    padding: 0 2rem;
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.show {
      &:after {
        transform: rotate(180deg);
      }
    }

    &:after {
      content: '';
      width: 2.4rem;
      height: 2.4rem;
      background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -0.5rem -21.4rem;
      background-size: 25rem auto;
      display: block;
      transition: transform 0.3s;
    }
  }

  > ul {
    padding: 0 2rem 3rem;
    > li {
      color: #333;
      font-size: 1.2rem;
      line-height: 1.6rem;

      & + li {
        margin-top: 2rem;
      }

      ul {
        li {
          margin-top: 1rem;
          color: #888;
        }
      }

      span {
        color: #888;
        display: block;
      }
    }
  }
}

.bg_gray {
  padding: 1rem 2.1rem;
  color: #888;
  font-size: 1.3rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

:deep(.modal_wrap) {
  &.alert {
    .modal_content {
      padding: 3rem 2rem;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;

      & + .txt {
        margin-top: 1rem;
        line-height: 2rem;
      }
    }
  }

  &.modal_impossible {
    .modal_container {
      width: 32.3rem;

      .modal_content {
        padding: 3rem 3rem 3rem 2rem;

        h2 {
          margin-bottom: 2rem;
        }

        p {
          margin-bottom: 0.8rem;
          color: #666;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .bul_list {
          &.ref {
            li {
              padding-left: 1rem;
              color: #888;
              font-size: 1.2rem;
              line-height: 1.6rem;
            }
          }
        }
      }
    }
  }

  &.modal_sort {
    .modal_container {
      border-top-left-radius: 20px 20px;
      border-top-right-radius: 20px 20px;

      .modal_header {
        width: 100%;
        padding: 0;
        border-bottom: 0;
        position: relative;
        .btn_close {
          top: 100%;
          right: 50%;
          transform: translate(-50%, -100%);
        }
      }
      .modal_content {
        padding: 0;
        height: calc(100% - 29.4px);
        overflow-y: auto;

        div {
          ul {
            li {
              padding: 16px 28px;
              border-bottom: 1px solid #f5f5f5;

              &:last-child {
                border-bottom: 0;
              }

              &.active {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &::after {
                  content: '';
                  width: 1.6rem;
                  height: 1.6rem;
                  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -8.05rem -7rem;
                  display: inline-block;
                }
                a {
                  color: #00bc70;
                  font-weight: 700;
                }
              }

              a {
                color: #000000;
                font-weight: 300;
                font-size: 16px;
                line-height: 17.5px;
                letter-spacing: -0.14px;
              }
            }
          }
        }
      }
    }
  }

  &.modal_date {
    .modal_container {
      .modal_content {
        p {
          margin-bottom: 1rem;
          color: #666;
          font-size: 1.3rem;
        }

        .tab_wrap {
          margin-bottom: 1rem;
        }

        .date {
          display: flex;
          align-items: center;
          gap: 0.9rem;

          .label_wrap {
            .input {
              position: relative;

              input {
                border-color: #eee;
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
        }
      }
    }
  }

  &.modal_reject {
    .modal_content {
      .txt {
        color: #666;
        font-size: 1.3rem;
      }

      .btn_link_arrw {
        margin-right: 10px;
        color: #000;
        border-bottom: 1px solid #000;
        &:after {
          width: 6px;
          height: 6px;
          border-color: #000;
        }
      }

      .bg_gray {
        margin-top: 2rem;
        padding: 1.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
        color: #666;
      }
    }
  }
}
</style>
