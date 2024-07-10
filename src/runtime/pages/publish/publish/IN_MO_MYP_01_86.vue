<template>
  <button type="button" class="btn_dot_menu" @click="modal.open('modal_pick_my_shop', 'fullMo')">마이샵 등록하기</button>
  <!-- 마이샵 등록하기 -->
  <div id="modal_pick_my_shop" class="modal_wrap active fullMo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>마이샵 등록하기</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <section>
          <div class="title">
            <h3><em>최근 방문한 매장</em></h3>
          </div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 1)" :key="idx">
              <input :id="'shop0' + idx" type="radio" name="shop0" />
              <label :for="'shop0' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
        <section>
          <div class="title">
            <h3><em>가장 가까운 매장</em></h3>
          </div>
          <div class="noti">
            <p>위치서비스를 이용할 수 없습니다.<br />앱관리 > 이니스프리 > 위치서비스 상태를 변경해주세요.</p>
            <Button class="btn_outline" txt="설정페이지로 이동" />
          </div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 2)" :key="idx">
              <input :id="'shop1' + idx" type="radio" name="shop1" />
              <label :for="'shop1' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
        <section>
          <div class="title">
            <div class="sub_title_wrap mt0">
              <h4>매장 검색</h4>
            </div>
            <div class="multi_form">
              <Selectbox
                :options="[
                  { val: 'op1', name: 'op', txt: '광역시/도' },
                  { val: 'op2', name: 'op', txt: '강원' },
                  { val: 'op3', name: 'op', txt: '경기' },
                  { val: 'op4', name: 'op', txt: '경남' }
                ]" />
              <Selectbox
                :options="[
                  { val: 'op1', name: 'op2', txt: '시/군/구' },
                  { val: 'op2', name: 'op2', txt: '강릉시' },
                  { val: 'op3', name: 'op2', txt: '고성군' },
                  { val: 'op4', name: 'op2', txt: '동해시' }
                ]" />
            </div>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="검색어를 입력해주세요." />
              <Button class="btn_outline" txt="매장 검색" />
            </div>
          </div>

          <p class="list_header">총 <em>337개</em> 매장이 검색되었습니다.</p>
          <div class="no_content">검색된 매장이 없습니다.</div>
          <ul class="pick_shop_list">
            <li v-for="(item, idx) in shop_list.slice(0, 2)" :key="idx">
              <input :id="'shop3' + idx" type="radio" name="shop3" />
              <label :for="'shop3' + idx">
                <ShopInfo :item="item" />
              </label>
            </li>
          </ul>
        </section>
      </div>
      <div class="btn_wrap">
        <Button class="btn_big" txt="마이샵 등록하기" disabled />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
import { shop_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
</script>

<style lang="scss" scoped>
.modal_wrap {
  section {
    & + section {
      border-top: 0.5rem solid #f5f5f5;
    }
  }

  .title {
    padding: 2rem 2.1rem 1.5rem;
    em {
      font-size: 1.3rem;
      font-weight: 600;
      color: #00bc70;
    }

    .multi_form {
      margin-top: 2rem;

      & + .multi_form {
        margin-top: 1.5rem;
      }

      & > label.select {
        flex: 1;
      }
    }

    & + * {
      border-top: 1px solid #f5f5f5;

      & + * {
        border-top: 1px solid #f5f5f5;
      }
    }
  }

  .noti {
    padding: 3rem 2.1rem;

    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      color: #999;
      text-align: center;
    }

    button {
      margin: 0 auto;
    }
  }

  .list_header {
    padding: 1.5rem 2.1rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-top: 0;

    em {
      color: #00bc70;
    }
  }

  .pick_shop_list {
    li {
      display: flex;
      gap: 1rem;
      align-content: flex-start;
      position: relative;

      & + li {
        border-top: 1px solid #f5f5f5;
      }

      :deep(.shop_wrap) {
        .shop {
          padding-left: 5.1rem;
        }
      }

      input[type='radio'] {
        position: absolute;
        width: 0;
        height: 0;
        margin: 2rem 2rem 0 0;

        &:before {
          content: '';
          width: 20px;
          height: 20px;
          background-color: #ddd;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 1.35rem;
          left: 2.1rem;
        }

        &:after {
          content: '';
          width: 1rem;
          height: 1rem;
          background-color: #fff;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 1.9rem;
          left: 2.6rem;
        }

        &:checked:before {
          content: '';
          background-color: #00bc70;
        }

        &:checked + label {
          background-color: #f7fafa;
        }
      }
    }
  }

  .btn_wrap {
    display: fixed;
    bottom: 0;
    left: 0;

    button {
      width: 100%;
    }
  }
}
</style>
