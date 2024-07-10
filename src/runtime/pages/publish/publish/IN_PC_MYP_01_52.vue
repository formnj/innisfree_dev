<template>
  <div class="inner">
    <div class="title_wrap">
      <h2>공병수거 신청 상세</h2>
    </div>

    <div class="bg_gray">
      <span>공병수거 번호 <strong>00000000</strong></span>
      <span>2024.04.05 07:00</span>
    </div>

    <div class="sub_title_wrap">
      <div>
        <h3>공병수거 신청정보</h3>
      </div>
    </div>
    <div class="photo_list">
      <div class="img_wrap">
        <img src="/images/sam/IMG1.png" />
      </div>
      <span><strong>10개</strong></span>
      <em><strong>수거신청</strong></em>
    </div>

    <!-- 수거 거부 -->
    <div class="photo_list">
      <div class="img_wrap">
        <img src="/images/sam/IMG1.png" />
      </div>
      <span><strong>10개</strong></span>
      <button type="button" class="btn_link_arrw" @click="modal.open('modal_reject', 'layer tooltip modal_reject')">수거 거부</button>
      <div id="modal_reject" class="modal_wrap">
        <div class="modal_container">
          <div class="modal_header">
            <h2>수거거부사유 안내</h2>
            <button class="btn_close" @click="modal.close(this)">닫기</button>
          </div>
          <div class="modal_content">
            <p>
              수거신청하신 제품이 아래의 사유로 수거거부 처리되었습니다. 불가처리에 대한 상세안내가 필요하시면 고객센터로 문의해주세요.
              (<NuxtLink to="#" class="btn_link_arrw">1:1문의</NuxtLink>
              <NuxtLink to="#" class="btn_link_arrw">고객센터 전화연결</NuxtLink>)
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
    <!-- //수거 거부 -->

    <div class="btn_wrap bottom">
      <Button class="btn_mid btn_outline" txt="수거취소" />
    </div>

    <div class="sub_title_wrap">
      <div>
        <h3>수거지정보</h3>
        <div class="btn_wrap">
          <div class="btn_wrap"><Button class="btn_min btn_outline" txt="신규배송지" /></div>
          <div class="btn_wrap"><Button class="btn_min btn_outline" txt="배송지목록" /></div>
        </div>
        <div class="btn_wrap">
          <div class="btn_wrap"><Button class="btn_min btn_outline" txt="변경" /></div>
          <div class="btn_wrap"><Button class="btn_min btn_outline" txt="취소" /></div>
          <div class="btn_wrap"><Button class="btn_min" txt="저장" /></div>
        </div>
      </div>
    </div>
    <div class="table_wrap">
      <table>
        <caption>
          주문/배송정보
        </caption>
        <colgroup>
          <col style="width: 200px" />
        </colgroup>
        <tbody>
          <tr>
            <th><span>배송지명</span></th>
            <td>집<span class="mark">기본배송지</span></td>
          </tr>
          <tr>
            <th><span>받으실 분</span></th>
            <td>김주영</td>
          </tr>
          <tr>
            <th><span>휴대폰번호</span></th>
            <td class="flex">
              010-1234-5678
              <div class="dis_flex">
                <InmInputCheckbox v-model="value" text="안심번호사용" true-value="Y" false-value="N" :is-switch="false" :disabled="false" />
                <Icons class="tooltip_16" />
              </div>
            </td>
          </tr>
          <tr>
            <th><span>주소</span></th>
            <td>
              <strong>04328</strong>
              <p>서울특별시 용산구 상감대로 28 길</p>
              <p>303호</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn_wrap bottom">
      <Button class="btn_mid confirm" txt="확인" />
    </div>
  </div>
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
definePageMeta({
  layout: 'publish-pc-sub'
})
</script>
<style lang="scss" scoped>
.title_wrap {
  margin-bottom: 0;
}
.sub_title_wrap {
  margin: 60px 0 15px;
  padding-bottom: 15px;
  border-bottom: 2px solid #000;
  z-index: auto;
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .btn_wrap {
      display: flex;
      gap: 5px;
    }
  }

  h3 {
    font-size: 20px;
    flex: 1;
  }
}
.table_wrap {
  margin-top: -15px;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      display: none;
    }
    thead {
      th {
        padding: 15px 20px;
        color: #000;
        font-size: 14px;
        border-bottom: 1px solid #eee;
        background: #f5f5f5;
        &:not(:first-of-type) {
          border-left: 1px solid #eee;
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 24px 20px;
          color: #333;
          font-size: 14px;
          font-weight: 300;
          border-bottom: 1px solid #f5f5f5;
          text-align: left;
          vertical-align: center;
        }
        td {
          padding: 20px 0 20px 50px;
          font-size: 16px;
          font-weight: 300;
          border-bottom: 1px solid #f5f5f5;

          &.flex {
            display: flex;
          }

          p {
            margin-top: 8px;
          }
        }
      }
    }
  }
}
.mark {
  margin-left: 10px;
  padding: 2px 5px;
  color: #00bc70;
  font-size: 12px;
  background-color: #e0fbf0;
  display: inline-block;
}

.dis_flex {
  display: flex;
  margin-left: 20px;
  align-items: center;
  gap: 5px;
}

.photo_list {
  padding-right: 70px;
  display: flex;
  align-items: center;
  gap: 20px;

  & + .photo_list {
    margin-top: 20px;
  }

  .img_wrap {
    width: 86px;
    height: 86px;
    text-align: center;
    background-color: #000;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }
  }

  span {
    flex: 1;
  }

  & > em,
  & > .btn_link_arrw {
    color: #00bc70;
    text-align: center;
  }

  & > .btn_link_arrw {
    font-weight: 600;
    border-bottom: 1px solid #00bc70;
    &:after {
      width: 7px;
      height: 7px;
      border-color: #00bc70;
    }
  }
}

:deep(.modal_wrap) {
  &.modal_empty_bottle {
    .modal_content {
      padding: 0;
      background-color: #fff;

      img {
        vertical-align: top;
      }
    }
  }

  &.modal_empty_bottle_check {
    width: 580px;
    margin: 0 auto;

    ol {
      margin: 10px 0 30px;
      list-style: auto;
      padding-left: 15px;
      li {
        color: #666;
        line-height: 20px;
        span {
          font-size: 13px;
          color: #888;
          line-height: 16px;
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

:deep(.modal_wrap) {
  &.modal_reject {
    .modal_content {
      width: 540px;

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
