<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <div>
      <h2>쇼핑로그</h2>
    </div>
  </div>

  <div class="inner">
    <Button class="btn_history" txt="쇼핑로그" @click="modal.open('shopping_log_wrap', 'detailSearch shopping_log_wrap')" />
  </div>
  <!-- 쇼핑로그 모달 -->
  <div id="shopping_log_wrap" class="modal_wrap detailSearch active">
    <div class="modal_container">
      <div class="modal_header">
        <h2>
          <strong>김이니</strong>님의 쇼핑로그
          <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" />
        </h2>
        <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content shopping_log">
        <ServiceBanner /><!-- 쇼핑로그 상단 배너 -->
        <ShoppingLogList /><!-- 쇼핑로그 리스트 -->
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //쇼핑로그 모달 -->

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>쇼핑로그 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="bul_list">
          <li>로그인을 하신 고객님들은 30일동안 조회한 최대 100개까지의 쇼핑로그를 확인하실 수 있습니다.</li>
          <li>판매 종료된 제품이나 종료된 이벤트는 쇼핑로그에서 자동으로 삭제됩니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button class="btn_ confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //쇼핑로그 안내 모달 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  layoutType: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="scss" scoped></style>
