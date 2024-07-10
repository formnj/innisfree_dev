<template>
  <div class="shopping_log_wrap">
    <div class="shopping_log">
      <ServiceBanner /><!-- 쇼핑로그 상단 배너 -->

      <div class="inner">
        <div class="sub_title_wrap">
          <div>
            <h4>
              <em>주소희</em> 님의 쇼핑로그
              <Icons class="tooltip" txt="툴팁" @click="modal.open('log_info', 'alert')" />
            </h4>
            <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
          </div>
        </div>

        <ShoppingLogList /><!-- 쇼핑로그 리스트 -->
      </div>
    </div>
  </div>

  <!-- 쇼핑로그 안내 모달 -->
  <div id="log_info" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>
          쇼핑로그 안내
          <p class="explain">최근 본 제품, 이벤트, 검색어예요</p>
        </h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="bullet_list">
          <li>로그인을 하신 고객님들은 30일동안 조회한 최대 100개까지의 쇼핑로그를 확인하실 수 있습니다.</li>
          <li>판매 종료된 제품이나 종료된 이벤트는 쇼핑로그에서 자동으로 삭제됩니다.</li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button @click="modal.close(this)" class="btn_big confirm" txt="확인" />
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
  layout: 'publish-mo-default'
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 3rem 2.1rem;

  .sub_title_wrap {
    margin: 0;

    h4 {
      button {
        line-height: 2.7rem;
      }
    }

    .explain {
      margin-top: 0.5rem;
    }
  }
}
</style>
