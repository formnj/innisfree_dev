<template>
  <div class="inner">
    <button type="button" class="btn_link_arrw" @click="modal.open('modal_agree', 'layer tooltip')">개인정보 수집/이용 동의</button>
    <div id="modal_agree" class="modal_wrap">
      <div class="modal_container">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <div class="modal_content">
          <h2>개인정보 수집/이용 동의</h2>
          <p>이니스프리에서 공병수거를 진행하기 위하여 다음과 같이 개인정보를 수집 및 이용합니다.</p>
          <ul class="bul_list">
            <li>수집하는 개인정보 항목 : 이름, 휴대폰번호, 주소</li>
            <li>수집 및 이용목적 : 공병수거 신청자연락 및 공병수거지 방문</li>
            <li>보유 및 이용기간 : <strong>공병수거 완료 후 30일</strong></li>
          </ul>
          <br />
          <p>고객님께서는 개인정보 수집 및 이용동의에 거부할 수 있습니다. 다만, 거부하는 경우 공병수거 참여가 불가능합니다.</p>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
definePageMeta({
  layout: 'publish-pc-sub'
})
</script>
