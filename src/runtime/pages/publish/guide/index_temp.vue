<template>
  <h2>퍼블리싱 리스트</h2>
  <table>
    <colgroup>
      <col />
    </colgroup>
    <thead>
      <tr>
        <th>구분</th>
        <th>1 Depth</th>
        <th>2 Depth</th>
        <th>3 Depth</th>
        <th>4 Depth</th>
        <th>PAGE</th>
        <th>상태</th>
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
definePageMeta({
  layout: 'publish-guide'
})

import { onMounted } from 'vue'

const list_arry = [
  {
    type: 'MO',
    depth: ['메인', '', '', ''],
    id: 'IN_MO_HOM_01_01',
    status: '완료',
    note: 'visual stick기능 추가 [Edit 24.06.13 JH]',
    sDate: '',
    eDate: ' / 2024-06-11',
    worker: '이종환'
  },
  {
    type: 'MO',
    depth: ['메인', '', '', ''],
    id: 'IN_MO_HOM_01_02',
    status: '완료',
    note: '',
    sDate: '',
    eDate: ' / 2024-06-11',
    worker: '이종환'
  }
]

onMounted(() => {
  for (let i = 0; i < list_arry.length; i++) {
    document
      .querySelector('tbody')
      .insertAdjacentHTML(
        'beforeend',
        '<tr>' +
          '<td>' +
          list_arry[i].type +
          '</td>' +
          '<td>' +
          list_arry[i].depth[0] +
          '</td>' +
          '<td>' +
          list_arry[i].depth[1] +
          '</td>' +
          '<td>' +
          list_arry[i].depth[2] +
          '</td>' +
          '<td>' +
          list_arry[i].depth[3] +
          '</td>' +
          '<td><a href="/publish/publish/' +
          list_arry[i].id +
          '" target="_blank">' +
          list_arry[i].id +
          '</a></td>' +
          '<td>' +
          list_arry[i].status +
          '</td>' +
          '<td>' +
          list_arry[i].note +
          '</td>' +
          '<td>' +
          list_arry[i].sDate +
          '</td>' +
          '<td>' +
          list_arry[i].eDate +
          '</td>' +
          '<td class="ac">' +
          list_arry[i].worker +
          '</td></tr>'
      )
  }
})
</script>

<style lang="scss" scoped>
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
h2 .legend {
  margin-top: 15px;
  display: flex;
  justify-content: end;
  gap: 15px;
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
  a {
    font-weight: 700;
    text-decoration: underline;
    display: block;
  }
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
:deep(td) {
  border-bottom: 1px solid #ddd;
}
</style>
