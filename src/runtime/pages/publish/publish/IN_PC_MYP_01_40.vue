<template>
  <div class="inner">
    <div class="title_wrap" :data-layout="props.layoutType">
      <h2>찜한 제품</h2>
      <div>
        <Inputs _type="checkbox" _text="전체 선택" />
        <Button class="btn_min_outline" txt="선택 삭제" @click="modal.open('delete_modal', 'alert')" />
      </div>
    </div>

    <div class="table_wrap">
      <table>
        <caption>
          찜한 제품
        </caption>
        <colgroup>
          <col style="width: 65px" />
          <col style="width: 100px" />
          <col style="" />
          <col style="width: 110px" />
          <col style="width: 350px" />
        </colgroup>
        <tbody>
          <tr v-for="(goods, idx) in select_list" :key="idx">
            <td>
              <Inputs _type="checkbox" />
            </td>
            <td>
              <a href="#none">
                <img :src="goods.img" alt="" />
              </a>
            </td>
            <td class="name">
              <a href="#none">{{ goods.name }}</a>
            </td>
            <td class="price">
              <del>{{ goods.price.regular }}</del>
              <span>{{ goods.price.discount }}</span>
            </td>
            <td class="btn">
              <div class="btn_wrap">
                <Button class="btn_outline btn_min" txt="바로구매" />
                <Button class="btn_outline btn_min" txt="장바구니로 이동" />
                <a href="#none" @click="modal.open('delete_modal', 'alert')"></a>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <span>찜 목록이 없습니다.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
    <span>찜한 제품의 구매를 원하시면 해당 제품을 선택 후 ‘장바구니 이동’ 버튼을 통해 구매하실 수 있습니다.</span>
    <span>선택 및 장바구니 이동 불가 : 일시 품절, 모바일/APP 전용 제품(삭제만 가능)</span>

    <Button class="btn_mid confirm" txt="장바구니로 이동" />
  </div>

  <!--modal-->
  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알림</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div>삭제하시겠습니까?</div>
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
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

import { modal } from '@inmModule/assets/js/common-ui'
import { select_list } from '@inmModule/test/data/publish/dummyData'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})
</script>

<style lang="scss" scoped>
.title_wrap {
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 30px;
    font-size: 24px !important;
    font-weight: 600;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :deep(.check) {
      margin-top: -10px;
    }
    :deep(.btn_min_outline) {
      width: 84px !important;
      border-radius: 1px;
      em {
        padding: 0 14px;
        color: #999;
        font-size: 11px;
      }
    }
  }
}

.inner {
  > span {
    margin-top: 30px;
    color: #888;
    font-size: 13px;
    display: block;
    + span {
      margin-top: 5px;
    }
    &::before {
      content: '※';
      margin-right: 5px;
      display: inline-block;
    }
  }
  > button.btn_mid.confirm {
    margin: 60px auto 0 auto;
    text-align: center;
    :deep(em) {
      padding: 0px 62px;
      font:
        16px / 40px 'Pretendard',
        'SDNeoL',
        'notoR';
      font-weight: 600;
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
        td {
          height: 100% !important;
          padding: 30px 0;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          text-align: center;
          &.btn {
            position: relative;
            .btn_wrap {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              :deep(button.btn_outline) {
                width: 120px;
                font:
                  12px / 40px 'Pretendard',
                  'SDNeoL',
                  'notoR';
                border: 1px solid #000;
                border-radius: 1px;
                em {
                  color: #000;
                }
              }
              > a {
                width: 24px;
                height: 24px;
                background-image: url('@inmModule/assets/images/common/icon_split.png');
                background-repeat: no-repeat;
                background-size: 250px;
                background-position: -26px -252px;
                position: absolute;
                top: 30px;
                right: 2px;
                display: block;
              }
            }
          }
          :deep(button.btn_outline) {
            em {
              padding: 0 5px;
              color: #999;
              font-weight: 600;
            }
          }
          &:first-of-type {
            vertical-align: top;
          }
          &.name {
            padding-left: 20px;
            text-align: left;
          }
          &.price {
            text-align: right;
            del {
              color: #aaa;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.29em;
            }
            span {
              margin-top: 5px;
              font-size: 18px;
              font-weight: 700;
              display: inline-block;
            }
          }
          &[colspan='5'] {
            font-weight: 600;
          }
        }
      }
    }
  }
}

.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 20px;
        h2 {
          font-size: 18px;
        }
      }
      .modal_content {
        padding: 30px;
      }
    }
  }
}
</style>
