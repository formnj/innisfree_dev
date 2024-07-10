<template>
  <h2>
    퍼블리싱 리스트
    <div>
      <Button class="btn_small_outline active" txt="MO" @click="change_device()" />
      <Button class="btn_small_outline" txt="PC" @click="change_device()" />
    </div>
    <ul class="legend">
      <li><span class="badge modal">modal popup</span></li>
      <li><span class="badge com">완료</span></li>
      <li><span class="badge ing">진행중</span></li>
      <li><span class="badge edit">수정요청</span></li>
    </ul>
  </h2>
  <table>
    <colgroup>
      <col />
    </colgroup>
    <thead>
      <tr>
        <th>1Depth</th>
        <th>2Depth</th>
        <th>3Depth</th>
        <th>4Depth</th>
        <th>link</th>
        <th>비고</th>
        <th>시작일</th>
        <th>종료일(예정/실제)</th>
        <th>작업자</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</template>

<script setup>
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-guide'
})

/* device check text : 개발 시 제거해주세요. */
const device = ref('MO')

import { onMounted } from 'vue'

const MO_arry = [
  {
    depth: ['앱', '샘플마켓', '', ''],
    id: 'IN_MO_APP_01_06_01',
    status: 'com',
    type: '',
    note: '전체 모달 포함',
    sDate: '',
    eDate: '2024-05-24/2024-05-17',
    worker: '김나람'
  },
  {
    depth: ['', '', '샘플마켓바로신청하기', ''],
    id: 'IN_MO_APP_01_06_02',
    status: 'com',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '2024-05-24/2024-05-17',
    worker: '김나람'
  },
  {
    depth: ['', '', '신청완료', ''],
    id: 'IN_MO_APP_01_06_07',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-24/2024-05-17',
    worker: '김나람'
  },
  {
    depth: ['홈', '메인', '', ''],
    id: 'IN_MO_HOM_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-04-22/2024-04-22<br/> <strong>24-06-03 디자인 반영</strong>',
    worker: '이종환'
  },
  {
    depth: ['', '메인배너 전체보기', '', ''],
    id: 'IN_MO_HOM_01_02',
    status: 'com',
    type: '',
    note: '홈 전체보기 팝업 분리',
    sDate: '2024-07-03',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '특가(T)', '', ''],
    id: 'IN_MO_HOM_01_04_01',
    status: 'com',
    type: '',
    note: '디자인 고도화<br/> 증정품안내 모달 포함',
    sDate: '',
    eDate: '2024-04-19/2024-05-03',
    worker: '김희경'
  },
  {
    depth: ['', '이벤트', '목록', ''],
    id: 'IN_MO_EVE_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-15',
    eDate: '2024-04-16',
    worker: '김희경'
  },
  {
    depth: ['', '랭킹', '', ''],
    id: 'IN_MO_HOM_01_07',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: '형민우'
  },
  {
    depth: ['', '쇼케이스', '', ''],
    id: 'IN_MO_HOM_01_12',
    status: 'com',
    type: '',
    note: '전체보기 mobile full modal (fullMo 참조)',
    sDate: '',
    eDate: '2024-04-26/2024-04-24',
    worker: '형민우'
  },
  {
    depth: ['', '', '쇼케이스 전체보기', ''],
    id: 'IN_MO_HOM_01_13',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-04-26/2024-04-25',
    worker: '형민우'
  },
  {
    depth: ['', '에디터(T)', '목록', ''],
    id: 'IN_MO_HOM_01_08',
    status: 'com',
    type: '',
    note: '05-17 디자인 반영 완료',
    sDate: '',
    eDate: '2024-04-19/2024-04-19',
    worker: '김나람'
  },
  {
    depth: ['', '', '상세(포스팅)', ''],
    id: 'IN_MO_HOM_01_09',
    status: 'com',
    type: '',
    note: '05-17 디자인 반영 완료<br/> 꽉찬 스와이퍼 관련 수정 Edit 24.05.30',
    sDate: '',
    eDate: '2024-05-03/2024-04-26',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '댓글팝업'],
    id: 'IN_MO_HOM_01_09_01',
    status: 'com',
    type: '',
    note: '영역 분리',
    sDate: '',
    eDate: '',
    worker: '김나람'
  },
  {
    depth: ['', '', '에디터별 보기', ''],
    id: 'IN_MO_HOM_01_10',
    status: 'com',
    type: '',
    note: '05-17 디자인 반영 완료<br>mo-noicons.vue layout 사용',
    sDate: '',
    eDate: '2024-05-03/2024-04-29',
    worker: '김나람'
  },
  {
    depth: ['', '', '신고하기', ''],
    id: 'IN_MO_HOM_01_11',
    status: 'com',
    type: '',
    note: '영역 분리',
    sDate: '',
    eDate: '',
    worker: '김나람'
  },
  {
    depth: ['', '라이브', '', ''],
    id: 'IN_MO_HOM_01_14',
    status: 'ing',
    type: '',
    note: '라이브 예고 노출 케이스, 라이브 알림 팝업 작업 필요<br/> 플랫폼 영역은 타사 플랫폼 호출 영역으로 기존 스와이퍼 제거',
    sDate: '',
    eDate: '2024-04-26/2024-04-25',
    worker: '이종환'
  },
  {
    depth: ['', 'FOR ME', '쇼핑로그,추천키워드, 추천제품리스트', ''],
    id: 'IN_MO_HOM_01_15',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-04-26/2024-04-25',
    worker: '김나람'
  },
  {
    depth: ['', '임직원샵', '', ''],
    id: 'IN_MO_HOM_01_16',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-04-16/ 2024-04-16',
    worker: '형민우'
  },
  {
    depth: ['', '쇼핑로그', '쇼핑로그,추천키워드', ''],
    id: 'IN_MO_HOM_01_18',
    status: 'com',
    type: '',
    note: 'goods_item > btnIconBox > btn_heart 노출<br>쇼핑로그: 리스트, 신규 서비스 배너를 컴포넌트로 변환(ShoppingLogList.vue, <del>ShoppingLogBanner.vue</del>ServiceBanner.vue)-김나람',
    sDate: '',
    eDate: '2024-04-23/2024-04-23',
    worker: '이종환'
  },
  {
    depth: ['전체메뉴', '', '', ''],
    id: 'IN_MO_HOM_01_19',
    status: 'com',
    type: '',
    note: '메인 전체메뉴 페이지 분리작업',
    sDate: '',
    eDate: '2024-06-27',
    worker: '형민우'
  },
  {
    depth: ['검색', '검색', '', ''],
    id: 'IN_MO_SER_01_01',
    status: 'com',
    type: '',
    note: '모바일 검색 페이지 분리, 자동완성 페이지 분리',
    sDate: '',
    eDate: '2024-04-24/2024-05-08',
    worker: '형민우'
  },
  {
    depth: ['', '검색결과', '', ''],
    id: 'IN_MO_SER_01_02',
    status: 'com',
    type: '',
    note: '모바일 검색 페이지 분리',
    sDate: '',
    eDate: '2024-04-24/2024-05-08',
    worker: '형민우'
  },
  {
    depth: ['', '', '필터', ''],
    id: 'IN_MO_SER_01_02_01',
    status: 'com',
    type: '',
    note: '모바일 검색 페이지 분리 필터 모달',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '', '제품', ''],
    id: 'IN_MO_SER_01_02_02',
    status: 'com',
    type: '',
    note: '모바일 검색 페이지 분리 제품 구분 모달',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '자동완성', '', ''],
    id: 'IN_MO_SER_01_03',
    status: 'com',
    type: '',
    note: '검색 페이지 자동완성 페이지 분리',
    sDate: '',
    eDate: '2024-07-04',
    worker: '형민우'
  },
  {
    depth: ['제품', '목록', '', ''],
    id: 'IN_MO_PRDL_01_01',
    status: 'com',
    type: '',
    note: '2024-05-21 장바구니 모달 포함(김나람)',
    sDate: '',
    eDate: '2024-04-24/2024-04-11',
    worker: '김희경'
  },
  {
    depth: ['', '상세', '', ''],
    id: 'IN_MO_PRD_01_01',
    status: 'com',
    type: '',
    note: '디자인 고도화',
    sDate: '',
    eDate: '2024-05-10/2024-05-09',
    worker: '김나람'
  },
  {
    depth: ['', '', '', ''],
    id: 'IN_MO_PRD_01_09_button',
    status: 'com',
    type: '',
    note: '제품 상세 버튼 및 팝업',
    sDate: '',
    eDate: '',
    worker: '김나람'
  },
  {
    depth: ['장바구니', '제품 없음', '', ''],
    id: 'IN_MO_CAR_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-10/2024-04-30/2024-06-14(김나람)',
    worker: '이종환'
  },
  {
    depth: ['', '제품 있음', '', ''],
    id: 'IN_MO_CAR_01_02',
    status: 'com',
    type: '',
    note: '한페이지 모두 배치<br/> 갯수 증/차감 콤포넌트 추가',
    sDate: '',
    eDate: '2024-05-10/2024-06-14(김나람)',
    worker: '이종환'
  },
  {
    depth: ['', '장바구니 모달', '', ''],
    id: 'IN_MO_CAR_01_01_modal',
    status: 'com',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '/2024-06-14',
    worker: '김나람'
  },
  {
    depth: ['주문서', '', '', ''],
    id: 'IN_MO_ORD_01_01',
    status: 'ing',
    type: '',
    note: '결제하기페이지<br/> 장바구니 참고<br/>디자인 고도화 수정 필요',
    sDate: '2024-05-17',
    eDate: '2024-05-24/2024-05-24',
    worker: '김희경'
  },
  {
    depth: ['', '배송지 등록/변경', '', ''],
    id: 'IN_MO_ORD_01_02',
    status: 'com',
    type: '',
    note: '마이페이지 > 배송지관리 > 추가',
    sDate: '2024-04-29',
    eDate: '2024-05-03/2024-04-29',
    worker: '김희경'
  },
  {
    depth: ['', '', '배송지 수정', ''],
    id: 'IN_MO_ORD_01_03',
    status: 'com',
    type: 'modal',
    note: 'IN_MO_ORD_01_02 모달팝업 내에서 확인가능',
    sDate: '',
    eDate: '2024-05-03/2024-04-29',
    worker: '김희경'
  },
  {
    depth: ['', '', '배송지 추가', ''],
    id: 'IN_MO_ORD_01_04',
    status: 'com',
    type: 'modal',
    note: 'IN_MO_ORD_01_02 모달팝업 내에서 확인가능',
    sDate: '',
    eDate: '22024-05-03/2024-04-29',
    worker: '김희경'
  },
  {
    depth: ['', '안심번호 서비스 안내', '', ''],
    id: 'IN_MO_ORD_01_08',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '배송 포장재 안내', '', ''],
    id: 'IN_MO_ORD_01_09',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '사용 가능한 쿠폰 안내', '', ''],
    id: 'IN_MO_ORD_01_10',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '뷰티포인트 적립 혜택 안내', '', ''],
    id: 'IN_MO_ORD_01_11',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '유의사항 안내', '', ''],
    id: 'IN_MO_ORD_01_12',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '원클릭 결제(T)', '', ''],
    id: 'IN_MO_ORD_01_14',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '신용카드(T)', '', ''],
    id: 'IN_MO_ORD_01_16',
    status: '',
    type: '',
    note: 'IN_MO_ORD_01_01에서 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['마이페이지', '', '', ''],
    id: 'IN_MO_MYP_01_02',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-06-28 / 2024-06-18',
    worker: '형민우'
  },
  {
    depth: ['', '로그인 전', '', ''],
    id: 'IN_MO_MYP_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-06-28 / 2024-06-18',
    worker: '형민우'
  },
  {
    depth: ['', '바코드', '', ''],
    id: 'IN_MO_MYP_01_03',
    status: '',
    type: 'modal',
    note: '로그인 > 마이페이지 > 우측 바코드 버튼으로 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '멤버십', '멤버십 혜택안내', ''],
    id: 'IN_MO_MYP_01_04',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '뷰티포인트 안내(T)', '뷰티포인트'],
    id: 'IN_MO_MYP_01_05',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '', 'VIP 등급안내(T)'],
    id: 'IN_MO_MYP_01_06',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '모바일 앱 다운로드(T)', ''],
    id: 'IN_MO_MYP_01_07',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '주문내역', '목록', ''],
    id: 'IN_MO_MYP_01_08',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-14',
    eDate: '2024-05-24/2024-05-16',
    worker: '김희경'
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_MO_MYP_01_11',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-16',
    eDate: '2024-05-24/2024-05-17',
    worker: '김희경'
  },
  {
    depth: ['', '배송내역', '목록', ''],
    id: 'IN_MO_MYP_01_00-1',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '취소/교환/반품', '내역', ''],
    id: 'IN_MO_MYP_01_00-2',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_MO_MYP_01_00-3',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '리뷰', '작성 가능한 리뷰 안내', ''],
    id: 'IN_MO_MYP_01_19',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '작성 가능 리뷰(T)', ''],
    id: 'IN_MO_MYP_01_20',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '제품 리뷰 운영 정책 팝업', ''],
    id: 'IN_MO_MYP_01_21',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '리뷰 작성', ''],
    id: 'IN_MO_MYP_01_22',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '리뷰 포인트 혜택 안내 팝업', ''],
    id: 'IN_MO_MYP_01_23',
    status: 'com',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '2024-06-04',
    worker: '김나람'
  },
  {
    depth: ['', '', '제품 리뷰 이용약관', ''],
    id: 'IN_MO_MYP_01_25',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '작성한 리뷰(T)', ''],
    id: 'IN_MO_MYP_01_26',
    status: 'com',
    type: '',
    note: '리뷰정책 팝업 포함',
    sDate: '',
    eDate: '2024-05-03 / 2024-05-03',
    worker: '이종환'
  },
  {
    depth: ['', '임직원 인증/해제', '', ''],
    id: '<del>IN_MO_MYP_01_28</del>',
    status: 'com',
    type: '',
    note: 'SB 변경 5/21 프로세스 변경에 따른 삭제',
    sDate: '',
    eDate: '2024-05-17/2024-05-16',
    worker: '형민우'
  },
  {
    depth: ['', '참여한 이벤트 내역', '체험단/키트 신청내역', ''],
    id: 'IN_MO_MYP_01_29',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '이벤트 참여내역', ''],
    id: 'IN_MO_MYP_01_30',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '개인결제', '', ''],
    id: 'IN_MO_MYP_01_31',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '보유쿠폰', '다운로드 가능한 쿠폰(T)', ''],
    id: 'IN_MO_MYP_01_32',
    status: '',
    type: '',
    note: '마이페이지 > 보유쿠폰',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '보유쿠폰(T)', ''],
    id: 'IN_MO_MYP_01_35',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '쿠폰상세', ''],
    id: 'IN_MO_MYP_01_36',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '뷰티포인트 내역', '', ''],
    id: 'IN_MO_MYP_01_38',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '찜한제품', '', ''],
    id: 'IN_MO_MYP_01_40',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-30',
    eDate: '2024-05-03/2024-04-30',
    worker: '김희경'
  },
  {
    depth: ['', '스마트 영수증', '목록', ''],
    id: 'IN_MO_MYP_01_43',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_MO_MYP_01_44',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '1:1문의', '내역', ''],
    id: 'IN_MO_MYP_01_45',
    status: 'com',
    type: '',
    note: '답변확인에서 확인가능',
    sDate: '',
    eDate: '2024-04-26',
    worker: '김희경'
  },
  {
    depth: ['', '', '1:1 문의하기(T)', ''],
    id: 'IN_MO_MYP_01_46',
    status: 'ing',
    type: '',
    note: '디자인 고도화 수정 필요',
    sDate: '2024-04-24',
    eDate: '2024-04-26/2024-04-24',
    worker: '김희경'
  },
  {
    depth: ['', '', '1:1 답변확인(T)', ''],
    id: 'IN_MO_MYP_01_48',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-24',
    eDate: '2024-04-26/2024-04-24',
    worker: '김희경'
  },
  {
    depth: ['', '입고알림 신청내역', '', ''],
    id: 'IN_MO_MYP_01_49',
    status: 'com',
    type: '',
    note: '품절제품 상세에서 알림신청가능 - PC에서도 신청 가능',
    sDate: '2024-04-30',
    eDate: '2024-05-03/2024-04-30',
    worker: '김희경'
  },
  {
    depth: ['', '공병수거 현황', '내 공병수거 현황(T)', ''],
    id: 'IN_MO_MYP_01_51',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '첫 공병수거 혜택 안내'],
    id: 'IN_MO_MYP_01_53',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '공병수거 신청안내'],
    id: 'IN_MO_MYP_01_55',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '공병수거 신청 상세', ''],
    id: 'IN_MO_MYP_01_52',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '공병수거 신청', ''],
    id: 'IN_MO_MYP_01_57',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '공병수거 신청 필수사항 check'],
    id: 'IN_MO_MYP_01_56',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '공병수거 품목보기'],
    id: 'IN_MO_MYP_01_65',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '개인정보 수집/이용동의'],
    id: 'IN_MO_MYP_01_66',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '개인정보 수정', '비밀번호 확인', ''],
    id: 'IN_MO_MYP_01_68',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-10/2024-05-10',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '개인정보 수정'],
    id: 'IN_MO_MYP_01_69',
    status: 'com',
    type: '',
    note: '주소검색 팝업 수정 완료, 연결 해제 완료 알림 팝업, 반려동물 정보 수집 및 이용동의 팝업',
    sDate: '',
    eDate: '2024-05-10/2024-05-10',
    worker: '형민우'
  },
  {
    depth: ['', '회원탈퇴', '', ''],
    id: 'IN_MO_MYP_01_75',
    status: 'com',
    type: '',
    note: '회원탈퇴 페이지 추가<br>개인정보수정 탈퇴신청 버튼 클릭시 이동되는 페이지',
    sDate: '',
    eDate: '',
    worker: '형민우'
  },
  {
    depth: ['', '배송지 관리', '', ''],
    id: 'IN_MO_MYP_01_76',
    status: 'com',
    type: '',
    note: '주문서 배송지 등록/변경',
    sDate: '',
    eDate: '',
    worker: '김희경'
  },
  {
    depth: ['', '피부정보 관리', '', ''],
    id: 'IN_MO_MYP_01_81',
    status: '',
    type: '',
    note: '리뷰>프로필 등록하기 시 이동',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '원클릭결제 카드관리', '', ''],
    id: 'IN_MO_MYP_01_82',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '설정', '', ''],
    id: 'IN_MO_MYP_01_84',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '매장찾기', '마이샵관리', ''],
    id: 'IN_MO_MYP_01_85',
    status: 'com',
    type: '',
    note: 'IN_MO_MYP_01_86 팝업 포함',
    sDate: '',
    eDate: '2024-05-10/2024-05-13',
    worker: '김나람'
  },
  {
    depth: ['', '매장찾기', '마이샵 등록하기', ''],
    id: 'IN_MO_MYP_01_86',
    status: 'com',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '2024-05-10/2024-05-13',
    worker: '김나람'
  },
  {
    depth: ['', 'FAQ', '', ''],
    id: '<del>IN_MO_MYP_01_87</del>',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '공지사항', '', ''],
    id: '<del>IN_MO_MYP_01_88</del>',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '추가정보 입력', '', ''],
    id: 'IN_MO_MYP_01_94_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-05',
    worker: '김나람'
  },
  {
    depth: ['고객센터', '', '', ''],
    id: 'IN_MO_MYP_01_90',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', 'FAQ', '', ''],
    id: 'IN_MO_MYP_01_91',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-17/2024-05-16',
    worker: '형민우'
  },
  {
    depth: ['', '공지사항', '', ''],
    id: 'IN_MO_MYP_01_92',
    status: 'com',
    type: '',
    note: '목록/상세',
    sDate: '',
    eDate: '2024-05-24/2024-05-21',
    worker: '형민우'
  },
  {
    depth: ['', '전자공고', '', ''],
    id: 'IN_MO_MYP_01_93',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-27',
    eDate: '2024-05-31/2024-05-27',
    worker: '김희경'
  },
  {
    depth: ['회원', '회원가입', '', ''],
    id: 'IN_MO_MYP_01_94',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '로그인', '', ''],
    id: 'IN_MO_MYP_01_95',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '임직원 인증', '', ''],
    id: 'IN_MO_MYP_01_97',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '비회원 주문조회', '주문번호/주문비밀번호 입력', ''],
    id: 'IN_MO_MYP_01_98',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '주문번호 찾기'],
    id: 'IN_MO_MYP_01_99',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '주문 비밀번호 찾기'],
    id: 'IN_MO_MYP_01_100',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '비회원 주문 내역 조회'],
    id: 'IN_MO_MYP_01_101',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['풋터', 'ABOUT US(T)', 'BRAND STORY(T)', ''],
    id: 'IN_MO_FOO_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '', 'GREEN TEA HERITAGE(T)', ''],
    id: 'IN_MO_FOO_01_02',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '', 'BETTER FOR EARTH(T)', ''],
    id: 'IN_MO_FOO_01_03',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-13',
    eDate: '2024-06-12/2024-06-13',
    worker: '김희경'
  },
  {
    depth: ['', '이용약관', '', ''],
    id: 'IN_MO_FOO_01_04',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-10',
    eDate: '2024-06-10/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '개인정보처리방침', '', ''],
    id: 'IN_MO_FOO_01_05',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-10',
    eDate: '2024-06-10/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '영상기기관리방침', '', ''],
    id: 'IN_MO_FOO_01_10',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-11',
    eDate: '2024-06-10/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '위치기반서비스 이용약관', '', ''],
    id: 'IN_MO_FOO_01_11',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-10',
    eDate: '2024-06-10/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '사업자정보 확인', '보안문자 입력', ''],
    id: 'IN_MO_FOO_01_13',
    status: 'com',
    type: '',
    note: '푸터 -> 사업자정보확인 클릭시 공정거래 페이지로 새창 이동 ',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '', '', '사업자정보'],
    id: 'IN_MO_FOO_01_14',
    status: 'com',
    type: '',
    note: 'IN_MO_FOO_01_13 문자 입력 시, 공정거래 페이지로 변공 ',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '약관 및 법적고지', '', ''],
    id: 'IN_MO_FOO_01_15',
    status: 'com',
    type: '',
    note: '푸터 내 약관및 법적고지확인 클릭 시 모달팝업으로 노출',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  },
  {
    depth: ['', '', '토스페이먼츠 구매안전 서비스 가입 확인', ''],
    id: 'IN_MO_FOO_01_16',
    status: 'com',
    type: '',
    note: '법적고지확인 안내 내 구매안전서비스 가입확인 버튼 클릭 시 타페이지로 연결 ',
    sDate: '2024-06-11',
    eDate: '2024-06-11/2024-06-11',
    worker: '김희경'
  }
]

const PC_arry = [
  {
    depth: ['메인', '', '', ''],
    id: 'IN_PC_HOM_01_01',
    status: 'com',
    type: '',
    note: 'swiper play/pause 기능, pagination : scrollbar',
    sDate: '',
    eDate: '2024-04-22/2024-04-22<br/> <strong>24-06-03 디자인 반영</strong>',
    worker: '이종환'
  },
  {
    depth: ['', '특가', '', ''],
    id: 'IN_PC_HOM_01_04_01',
    status: 'com',
    type: '',
    note: '디자인 고도화 / <del>sticky 시 해당영역 스크롤 바 없이는 좌우 스크롤 불가함</del><br/> [tooltip 버튼], [layout 모달]<br/> 증정품안내 모달 포함',
    sDate: '2024-05-31',
    eDate: '2024-04-19/2024-04-16',
    worker: '김희경'
  },
  {
    depth: ['', '이벤트', '목록', ''],
    id: 'IN_PC_EVE_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-15',
    eDate: '2024-04-15',
    worker: '김희경'
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_PC_HOM_01_06',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: '이종환'
  },
  {
    depth: ['', '랭킹', '', ''],
    id: 'IN_PC_HOM_01_07',
    status: 'com',
    type: '',
    note: 'layout : pc-default',
    sDate: '',
    eDate: '',
    worker: '형민우'
  },
  {
    depth: ['', '임직원샵', '목록', ''],
    id: 'IN_PC_HOM_01_09',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-04-16/ 2024-04-16',
    worker: '형민우'
  },
  {
    depth: ['', '베스트', '', ''],
    id: 'IN_PC_HOM_01_00-1',
    status: 'com',
    type: '',
    note: 'swiper 샘플 완료 후 적용',
    sDate: '',
    eDate: '2024-04-12/ 2024-04-12',
    worker: '이종환'
  },
  {
    depth: ['', '쇼케이스(T)', '', ''],
    id: 'IN_PC_HOM_01_12',
    status: 'com',
    type: '',
    note: '공유하기 Layer modal (share_wrap 참조)',
    sDate: '',
    eDate: '2024-04-26/2024-04-24',
    worker: '형민우'
  },
  {
    depth: ['', '라이브(T)', '', ''],
    id: 'IN_PC_HOM_01_14',
    status: 'ing',
    type: '',
    note: '라이브 예고 노출 케이스, 라이브 알림 팝업 작업 필요<br/> 플랫폼 영역은 타사 플랫폼 호출 영역으로 기존 스와이퍼 제거',
    sDate: '',
    eDate: '2024-05-23/2024-04-25',
    worker: '이종환'
  },
  {
    depth: ['', 'FOR ME(T)', '', ''],
    id: 'IN_PC_HOM_01_15',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-16/2024-05-16',
    worker: '김나람'
  },
  {
    depth: ['', '쇼핑로그', '', ''],
    id: 'IN_PC_HOM_01_18',
    status: 'com',
    type: '',
    note: 'footer에 모달, float_menu 삽입 [tooltip 버튼]',
    sDate: '',
    eDate: '2024-05-29/2024-04-23',
    worker: '이종환'
  },
  {
    depth: ['검색', '검색창/인기검색어', '', ''],
    id: 'IN_PC_SER_01_01',
    status: 'com',
    type: '',
    note: '메인 검색창 페이지 분리 작업',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '검색어 자동완성', '', ''],
    id: 'IN_PC_SER_01_02',
    status: 'com',
    type: '',
    note: '메인 검색창 페이지 분리 작업',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '검색결과', '', ''],
    id: 'IN_PC_SER_02_01',
    status: 'com',
    type: '',
    note: '메인 검색창 페이지 분리 작업',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '검색결과', '필터', ''],
    id: 'IN_PC_SER_02_02',
    status: 'com',
    type: '',
    note: '메인 검색창 페이지 분리 작업',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['제품', '목록', '', ''],
    id: 'IN_PC_PRD_01_01',
    status: 'com',
    type: '',
    note: '2024-05-21 장바구니 모달 포함, 이후 디자인 확인 필요(김나람)',
    sDate: '',
    eDate: '2024-04-24/2024-04-09',
    worker: '김희경'
  },
  {
    depth: ['', '상세', '', ''],
    id: 'IN_PC_PRD_01_09',
    status: 'ing',
    type: '',
    note: '디자인 고도화 필요<br/> 갯수 증/차감 콤포넌트 추가',
    sDate: '',
    eDate: '<del>2024-05-03</del><br/> 2024-05-10/2024-05-09',
    worker: '김나람'
  },
  {
    depth: ['', '리뷰보기 팝업', '', ''],
    id: 'IN_PC_PRD_01_15',
    status: 'com',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: '김나람'
  },
  {
    depth: ['장바구니', '제품 없음', '', ''],
    id: 'IN_PC_CAR_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-10/2024-04-30/2024-06-14(김나람)',
    worker: '이종환'
  },
  {
    depth: ['', '제품 있음', '', ''],
    id: 'IN_PC_CAR_01_02',
    status: 'com',
    type: '',
    note: '한페이지에 모두 배치<br/> 갯수 증/차감 콤포넌트 추가',
    sDate: '',
    eDate: '2024-05-10/2024-06-14(김나람)',
    worker: '이종환'
  },
  {
    depth: ['', '장바구니 모달', '', ''],
    id: 'IN_PC_CAR_01_01_modal',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '/2024-06-14',
    worker: '김나람'
  },
  {
    depth: ['주문서', '', '', ''],
    id: 'IN_PC_ORD_01_01',
    status: 'com',
    type: '',
    note: '결제하기페이지',
    sDate: '2024-05-07',
    eDate: '2024-05-24/2024-05-10',
    worker: '김희경'
  },
  {
    depth: ['', '배송지 등록/변경', '', ''],
    id: 'IN_PC_ORD_01_02',
    status: 'com',
    type: 'modal',
    note: '마이페이지 > 배송지관리 > 추가',
    sDate: '2024-04-26',
    eDate: '2024-05-03/2024-04-26',
    worker: '김희경'
  },
  {
    depth: ['', '', '배송지 수정', ''],
    id: 'IN_PC_ORD_01_03',
    status: 'com',
    type: 'modal',
    note: 'IN_PC_ORD_01_02 에서 해당 팝업창 확인 가능',
    sDate: '2024-04-26',
    eDate: '2024-05-03/2024-05-02',
    worker: '김희경'
  },
  {
    depth: ['', '', '배송지 추가', ''],
    id: 'IN_PC_ORD_01_04',
    status: 'com',
    type: 'modal',
    note: 'IN_PC_ORD_01_02 에서 해당 팝업창 확인 가능',
    sDate: '2024-04-26',
    eDate: '2024-05-03/2024-05-02',
    worker: '김희경'
  },
  {
    depth: ['', '안심번호 서비스 안내', '', ''],
    id: 'IN_PC_ORD_01_08',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '배송 포장재 안내', '', ''],
    id: 'IN_PC_ORD_01_09',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '사용 가능한 쿠폰 안내', '', ''],
    id: 'IN_PC_ORD_01_10',
    status: 'com',
    type: '',
    note: '결제하기 페이지 내 쿠폰/포인트 적용 영역 ',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '뷰티포인트 적립 혜택 안내', '', ''],
    id: 'IN_PC_ORD_01_11',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '유의사항 안내', '', ''],
    id: 'IN_PC_ORD_01_12',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '원클릭 결제(T)', '', ''],
    id: 'IN_PC_ORD_01_14',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '신용카드(T)', '', ''],
    id: 'IN_PC_ORD_01_16',
    status: 'com',
    type: '',
    note: 'IN_PC_ORD_01_01 확인가능',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['마이페이지', '로그인 전', '', ''],
    id: 'IN_PC_MYP_01_01',
    status: '',
    type: '',
    note: 'PC 마이페이지 로그인전 페이지 X',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '로그인 후', '', ''],
    id: 'IN_PC_MYP_01_02',
    status: '',
    type: '',
    note: 'PC 마이페이지 주문내역 페이지와 동일 ( IN_PC_MYP_01_08 )',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '멤버십', '멤버십 혜택안내', ''],
    id: 'IN_PC_MYP_01_04',
    status: 'com',
    type: '',
    note: 'tooltip',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '뷰티포인트 안내(T)', '뷰티포인트'],
    id: 'IN_PC_MYP_01_05',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '', 'VIP 등급안내(T)'],
    id: 'IN_PC_MYP_01_06',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '', '모바일 앱 다운로드(T)', ''],
    id: 'IN_PC_MYP_01_07',
    status: 'com',
    type: '',
    note: 'https://www.innisfree.com/kr/ko/GreenteaClubMembership.do',
    sDate: '',
    eDate: '2024-05-03/2024-05-02',
    worker: '형민우'
  },
  {
    depth: ['', '주문내역', '목록', ''],
    id: 'IN_PC_MYP_01_08',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-10',
    eDate: '2024-05-24/2024-05-14',
    worker: '김희경'
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_PC_MYP_01_11',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-14',
    eDate: '2024-05-24/2024-05-14',
    worker: '김희경'
  },
  {
    depth: ['', '배송내역', '목록', ''],
    id: 'IN_PC_MYP_01_00-1',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '취소/교환/반품', '내역', ''],
    id: 'IN_PC_MYP_01_00-2',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_PC_MYP_01_00-3',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '리뷰', '작성 가능한 리뷰 안내', ''],
    id: 'IN_PC_MYP_01_19',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '작성 가능 리뷰(T)', ''],
    id: 'IN_PC_MYP_01_20',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '제품 리뷰 운영 정책 팝업', ''],
    id: 'IN_PC_MYP_01_21',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '리뷰 작성', ''],
    id: 'IN_PC_MYP_01_22',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '리뷰 포인트 혜택 안내 팝업', ''],
    id: 'IN_PC_MYP_01_23',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '제품 리뷰 이용약관', ''],
    id: 'IN_PC_MYP_01_25',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '작성한 리뷰(T)', ''],
    id: 'IN_PC_MYP_01_26',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-10 / 2024-05-03',
    worker: '이종환'
  },
  {
    depth: ['', '쿠폰', '보유 쿠폰(T)', ''],
    id: 'IN_PC_MYP_01_35',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-07-08',
    eDate: '2024-07-12 / 2024-07-08',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '쿠폰상세'],
    id: 'IN_PC_MYP_01_33',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-07-08',
    eDate: '2024-07-12 / 2024-07-08',
    worker: '김나람'
  },
  {
    depth: ['', '', '다운로드 가능 쿠폰(T)', ''],
    id: 'IN_PC_MYP_01_32',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-07-08',
    eDate: '2024-07-12 / 2024-07-08',
    worker: '김나람'
  },
  {
    depth: ['', '임직원 인증/해제', '', ''],
    id: 'IN_PC_MYP_01_28',
    status: '',
    type: '',
    note: '현행 사이트 확인 불가',
    sDate: '',
    eDate: '',
    worker: '형민우'
  },
  {
    depth: ['', '참여한 이벤트 내역', '체험단/키트 신청내역', ''],
    id: 'IN_PC_MYP_01_29',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '이벤트 참여내역', ''],
    id: 'IN_PC_MYP_01_30',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '개인결제', '', ''],
    id: 'IN_PC_MYP_01_31',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '보유쿠폰', '다운로드 가능한 쿠폰(T)', ''],
    id: 'IN_PC_MYP_01_32',
    status: '',
    type: '',
    note: '마이페이지 > 보유쿠폰',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '보유쿠폰(T)', ''],
    id: 'IN_PC_MYP_01_35',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '쿠폰상세', ''],
    id: 'IN_PC_MYP_01_36',
    status: '',
    type: 'modal',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '뷰티포인트 내역', '', ''],
    id: 'IN_PC_MYP_01_38',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '찜한제품', '', ''],
    id: 'IN_PC_MYP_01_40',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-30',
    eDate: '2024-05-03/2024-04-30',
    worker: '김희경'
  },
  {
    depth: ['', '스마트 영수증', '목록', ''],
    id: 'IN_PC_MYP_01_43',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '상세', ''],
    id: 'IN_PC_MYP_01_44',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '1:1문의', '내역', ''],
    id: 'IN_PC_MYP_01_45',
    status: 'com',
    type: '',
    note: '답변확인에서 확인가능',
    sDate: '',
    eDate: '2024-04-26',
    worker: '김희경'
  },
  {
    depth: ['', '', '1:1 문의하기(T)', ''],
    id: 'IN_PC_MYP_01_46',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-25',
    eDate: '2024-04-26/2024-04-25',
    worker: '김희경'
  },
  {
    depth: ['', '', '1:1 답변확인(T)', ''],
    id: 'IN_PC_MYP_01_48',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-04-25',
    eDate: '2024-04-26/2024-04-26',
    worker: '김희경'
  },
  {
    depth: ['', '공병수거 현황', '내 공병수거 현황(T)', ''],
    id: 'IN_PC_MYP_01_51',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '첫 공병수거 혜택 안내'],
    id: 'IN_PC_MYP_01_53',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '공병수거 신청안내'],
    id: 'IN_PC_MYP_01_55',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '형민우'
  },
  {
    depth: ['', '', '공병수거 신청 상세', ''],
    id: 'IN_PC_MYP_01_52',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '공병수거 신청'],
    id: 'IN_PC_MYP_01_57',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '공병수거 신청 필수사항 check'],
    id: 'IN_PC_MYP_01_56',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '공병수거 품목보기'],
    id: 'IN_PC_MYP_01_65',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '', '', '개인정보 수집/이용동의'],
    id: 'IN_PC_MYP_01_66',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-03',
    worker: '김나람'
  },
  {
    depth: ['', '개인정보 수정', '비밀번호 확인', ''],
    id: 'IN_PC_MYP_01_68',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-10/2024-05-09',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '개인정보 수정'],
    id: 'IN_PC_MYP_01_69',
    status: 'com',
    type: '',
    note: '개인정보 수정 컨텐츠( 회원정보 수정, 비밀번호 수정 ) 포함',
    sDate: '',
    eDate: '2024-05-10/2024-05-10',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '개인정보 수정-우편번호 검색'],
    id: 'IN_PC_MYP_01_70',
    status: 'com',
    type: '',
    note: '개인정보 수정 주소검색 팝업 분리',
    sDate: '',
    eDate: '2024-07-08',
    worker: '형민우'
  },
  {
    depth: ['', '', '', '개인정보 수정-휴대전화 번호 변경'],
    id: 'IN_PC_MYP_01_72',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-09',
    worker: '형민우'
  },
  {
    depth: ['', '회원탈퇴', '', ''],
    id: 'IN_PC_MYP_01_75',
    status: 'com',
    type: '',
    note: '회원탈퇴 페이지 추가<br>개인정보수정 탈퇴신청 버튼 클릭시 이동되는 페이지',
    sDate: '',
    eDate: '',
    worker: '형민우'
  },
  {
    depth: ['', '배송지 관리', '', ''],
    id: 'IN_PC_MYP_01_76',
    status: 'com',
    type: '',
    note: '주문서 배송지 등록/변경',
    sDate: '',
    eDate: '',
    worker: '김희경'
  },
  {
    depth: ['', '피부정보 관리', '', ''],
    id: 'IN_PC_MYP_01_81',
    status: '',
    type: '',
    note: '리뷰>프로필 등록하기 시 이동',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '원클릭결제 카드관리', '', ''],
    id: 'IN_PC_MYP_01_82',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '설정', '', ''],
    id: 'IN_PC_MYP_01_84',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '마이샵 관리', '', ''],
    id: 'IN_PC_MYP_01_85',
    status: 'ing',
    type: '',
    note: '디자인 고도화 필요',
    sDate: '',
    eDate: '2024-05-10/2024-05-13',
    worker: '김나람'
  },
  {
    depth: ['', 'FAQ', '', ''],
    id: '<del>IN_PC_MYP_01_87</del>',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '공지사항', '', ''],
    id: '<del>IN_PC_MYP_01_88</del>',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '추가정보 입력', '', ''],
    id: 'IN_PC_MYP_01_94_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-07-05',
    worker: '김나람'
  },
  {
    depth: ['고객센터', '', '', ''],
    id: 'IN_PC_MYP_01_90',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', 'FAQ', '', ''],
    id: 'IN_PC_MYP_01_91',
    status: 'com',
    type: '',
    note: '',
    sDate: '',
    eDate: '2024-05-17/2024-05-16',
    worker: '형민우'
  },
  {
    depth: ['', '공지사항', '', ''],
    id: 'IN_PC_MYP_01_92',
    status: 'com',
    type: '',
    note: '목록/상세',
    sDate: '',
    eDate: '2024-05-24/2024-05-21',
    worker: '형민우'
  },
  {
    depth: ['', '전자공고', '', ''],
    id: 'IN_PC_MYP_01_93',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-05-27',
    eDate: '2024-05-31/2024-05-27',
    worker: '김희경'
  },
  {
    depth: ['회원', '회원가입', '', ''],
    id: 'IN_PC_MYP_01_94',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '로그인', '', ''],
    id: 'IN_PC_MYP_01_95',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '임직원 인증', '', ''],
    id: 'IN_PC_MYP_01_97',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '비회원 주문조회', '주문번호/주문비밀번호 입력', ''],
    id: 'IN_PC_MYP_01_98',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '주문번호 찾기'],
    id: 'IN_PC_MYP_01_99',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '주문 비밀번호 찾기'],
    id: 'IN_PC_MYP_01_100',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '비회원 주문 내역 조회'],
    id: 'IN_PC_MYP_01_101',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['풋터', 'ABOUT US(T)', 'BRAND STORY(T)', ''],
    id: 'IN_PC_FOO_01_01',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-13',
    eDate: '2024-06-13/2024-06-13',
    worker: '김희경'
  },
  {
    depth: ['', '', 'GREEN TEA HERITAGE(T)', ''],
    id: 'IN_PC_FOO_01_02',
    status: 'com',
    type: '',
    note: '스와이퍼 스크롤바 수정-[JH 24.06.17]',
    sDate: '2024-06-14',
    eDate: '2024-06-14/2024-06-14',
    worker: '김희경'
  },
  {
    depth: ['', '', 'BETTER FOR EARTH(T)', ''],
    id: 'IN_PC_FOO_01_03',
    status: 'ing',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: '김희경'
  },
  {
    depth: ['', '이용약관', '', ''],
    id: 'IN_PC_FOO_01_04',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-20',
    eDate: '/2024-06-20',
    worker: '김희경'
  },
  {
    depth: ['', '개인정보처리방침', '', ''],
    id: 'IN_PC_FOO_01_05',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-20',
    eDate: '/2024-06-20',
    worker: '김희경'
  },
  {
    depth: ['', '영상기기관리방침', '', ''],
    id: 'IN_PC_FOO_01_10',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-20',
    eDate: '/2024-06-20',
    worker: '김희경'
  },
  {
    depth: ['', '위치기반서비스 이용약관', '', ''],
    id: 'IN_PC_FOO_01_11',
    status: 'com',
    type: '',
    note: '',
    sDate: '2024-06-20',
    eDate: '/2024-06-20',
    worker: '김희경'
  },
  {
    depth: ['', '사업자정보 확인', '보안문자 입력', ''],
    id: 'IN_PC_FOO_01_13',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '', '사업자정보'],
    id: 'IN_PC_FOO_01_14',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '약관 및 법적고지', '', ''],
    id: 'IN_PC_FOO_01_15',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  },
  {
    depth: ['', '', '토스페이먼츠 구매안전 서비스 가입 확인', ''],
    id: 'IN_PC_FOO_01_16',
    status: '',
    type: '',
    note: '',
    sDate: '',
    eDate: '',
    worker: ''
  }
]

let row_chk, path, link

const change_device = () => {
  const tbody = document.querySelector('table tbody')

  while (tbody.firstElementChild) {
    tbody.removeChild(tbody.firstElementChild)
    // key_cnt.value = document.querySelector('.latest').childElementCount;
  }

  const deviceBtn = event.target.closest('div')

  for (let i = 0; i < deviceBtn.childElementCount; i++) {
    if (deviceBtn.children[i].classList.contains('active')) {
      deviceBtn.children[i].classList.remove('active')
    }
  }

  event.target.parentNode.classList.add('active')

  switch (event.target.textContent) {
    case 'PC':
      device.value = PC_arry
      break
    default:
      device.value = MO_arry
      break
  }

  for (let i = 0; i < device.value.length; i++) {
    /* row 시작 체크 */
    if (device.value[i].depth[0].length != 0) {
      row_chk = 'row'
    } else {
      row_chk = ''
    }

    /* path */
    if (device.value[i].type == 'modal') {
      path = '/publish/modal/'
    } else {
      path = '/publish/'
    }

    if (device.value[i].id == 'IN_MO_HOM_01_01') {
      link = path
    } else {
      link = path + device.value[i].id
    }

    if (device.value[i].status == '') {
      device.value[i].status = 'not_link'
    }

    if (device.value[i].type == 'component') {
      device.value[i].status = device.value[i].status + ' not_link'
    }

    // device.value

    document
      .querySelector('tbody')
      .insertAdjacentHTML(
        'beforeend',
        '<tr class="' +
          row_chk +
          '">' +
          '<th>' +
          device.value[i].depth[0] +
          '</th>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[1] +
          '</td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[2] +
          '</td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[3] +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '"><a href="/publish/publish/' +
          device.value[i].id +
          '" target="_blank" class="' +
          device.value[i].type +
          '">' +
          device.value[i].id +
          '</a></td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].note +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].sDate +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].eDate +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].worker +
          '</td>' +
          '</tr>'
      )
  }
}

onMounted(() => {
  switch (device.value) {
    case 'PC':
      device.value = PC_arry
      break
    default:
      device.value = MO_arry
      break
  }

  for (let i = 0; i < device.value.length; i++) {
    /* row 시작 체크 */
    if (device.value[i].depth[0].length != 0) {
      row_chk = 'row'
    } else {
      row_chk = ''
    }

    /* path */
    if (device.value[i].type == 'modal') {
      path = '/publish/modal/'
    } else {
      path = '/publish/'
    }

    // if(device.value[i].id == 'IN_PC_HOM_01_01'){
    //     link = path
    // } else {
    //     link = path+device.value[i].id
    // }

    if (device.value[i].status == '') {
      device.value[i].status = 'not_link'
    }

    if (device.value[i].type == 'component') {
      device.value[i].status = device.value[i].status + ' not_link'
    }

    document
      .querySelector('tbody')
      .insertAdjacentHTML(
        'beforeend',
        '<tr class="' +
          row_chk +
          '">' +
          '<th>' +
          device.value[i].depth[0] +
          '</th>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[1] +
          '</td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[2] +
          '</td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].depth[3] +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '"><a href="/publish/publish/' +
          device.value[i].id +
          '" target="_blank" class="' +
          device.value[i].type +
          '">' +
          device.value[i].id +
          '</a></td>' +
          '<td class="' +
          device.value[i].status +
          '">' +
          device.value[i].note +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].sDate +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].eDate +
          '</td>' +
          '<td class="ac ' +
          device.value[i].status +
          '">' +
          device.value[i].worker +
          '</td>' +
          '</tr>'
      )
  }
})
</script>

<style lang="scss" scoped>
.ac {
  text-align: center;
}
h2 {
  margin: 20px 20px 40px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}
h2:after {
  clear: both;
  content: '';
  display: block;
}
h2 div {
  display: flex;
  gap: 5px;
}
h2 div [class*='btn_'] :deep(em) {
  height: 100%;
  display: flex;
  align-items: center;
}
h2 div [class*='btn_'].active {
  background-color: #00bc70 !important;
}
h2 div [class*='btn_'].active :deep(em) {
  color: #fff !important;
}
h2 .legend {
  margin-top: 15px;
  display: flex;
  justify-content: end;
  gap: 15px;
}
h2 .badge {
  font-size: 14px;
  font-weight: 500;
}
h2 .badge:before {
  width: 18px;
  height: 18px;
  margin-right: 5px;
  border-radius: 4px;
  vertical-align: middle;
  content: '';
  display: inline-block;
}
h2 .badge.modal:before {
  background-color: #0070ba;
}
h2 .badge.com:before {
  background-color: #ddeeff;
}
h2 .badge.ing:before {
  background-color: #fff4f4;
}
h2 .badge.edit:before {
  background-color: yellow;
}
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
:deep(th),
:deep(td) {
  padding: 8px 10px;
  font-size: 12px;
}
thead {
  background-color: #fcfcfc;
  border-bottom: 1px solid #222;
}
thead tr > * + *,
:deep(td) {
  border-left: 1px solid #ddd;
}
:deep(th) {
  background-color: #f2f3f5;
}
:deep(tr.row) {
  border-top: 2px solid #222;
}
:deep(td.com) {
  background-color: #ddeeff;
}
:deep(td.ing) {
  background-color: #fff4f4;
}
:deep(td.edit) {
  background-color: yellow;
}
:deep(td) {
  border-bottom: 1px solid #ddd;
}
:deep(td) a {
  font-weight: 700;
  text-decoration: underline;
  display: block;
}
:deep(td) a.modal {
  padding: 4px 5px;
  color: #fff;
  font-weight: 400;
  background-color: #0070ba;
  border: 1px solid #0070ba;
  text-decoration: none;
  border-radius: 4px;
}
:deep(td) .noti {
  padding: 3px;
  color: #fff;
  background-color: #00bc70;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
}
:deep(td) .noti:before {
  content: '[SB]';
}

.content section + section:before {
  margin: 30px -20px;
  border-top: 4px solid #f1f1f1;
  content: '';
  display: block;
}

:deep(.not_link) a {
  cursor: default;
  pointer-events: none;
}
</style>
