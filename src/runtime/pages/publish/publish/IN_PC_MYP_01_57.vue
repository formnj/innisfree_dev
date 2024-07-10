<template>
  <div class="inner">
    <div class="inner_flex">
      <div class="cont_area">
        <div class="title_wrap">
          <h2>공병수거신청</h2>
        </div>
        <div class="sub_title_wrap">
          <div>
            <h3 class="essential">공병수거지</h3>
            <div class="btn_wrap">
              <Button class="btn_outline btn_min" txt="신규배송지" />
              <Button class="btn_outline btn_min" txt="배송지목록" />
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
                <th><span class="essential">배송지명</span></th>
                <td>집<span class="mark">기본배송지</span></td>
              </tr>
              <tr>
                <th><span class="essential">받으실 분</span></th>
                <td>김주영</td>
              </tr>
              <tr>
                <th><span class="essential">휴대폰번호</span></th>
                <td class="flex">
                  010-1234-5678
                  <div class="dis_flex">
                    <InmInputCheckbox
                      v-model="value"
                      text="안심번호사용"
                      true-value="Y"
                      false-value="N"
                      :is-switch="false"
                      :disabled="false" />
                    <Icons class="tooltip_16" />
                  </div>
                </td>
              </tr>
              <tr>
                <th><span class="essential">주소</span></th>
                <td>
                  <strong>04328</strong>
                  <p>서울특별시 용산구 상감대로 28 길</p>
                  <p>303호</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sub_title_wrap">
          <div>
            <h3 class="essential">사진등록</h3>
            <div class="btn_wrap">
              <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle', 'layer tooltip modal_empty_bottle')">
                공병수거 품목보기
              </button>
              <div id="modal_empty_bottle" class="modal_wrap modal_empty_bottle">
                <div class="modal_container">
                  <div class="modal_header">
                    <h2>공병수거 품목보기</h2>
                    <button class="btn_close" @click="modal.close(this)">닫기</button>
                  </div>
                  <div class="modal_content">
                    <img src="@inmModule/assets/images/common/pop_empty_bottle.png" alt="" />
                  </div>
                </div>
                <div class="overlay" @click="modal.close(this)"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="photo_list">
          <button type="button" class="ipt_file">사진 선택</button>
          <div class="img_wrap">
            <img src="/images/sam/IMG1.png" />
            <button type="button" class="btn_del">삭제</button>
          </div>
        </div>
        <ul class="bul_list">
          <li>반납하실 공병 10개 모두 포함된 사진 1장을 첨부해주세요.</li>
          <li class="fc_red">얼굴 등 개인정보가 포함되지 않도록 주의하여 주시기 바랍니다.</li>
        </ul>

        <div class="sub_title_wrap">
          <div>
            <h3 class="essential">확인사항 선택</h3>
            <div class="btn_wrap">
              <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle_check', 'full modal_empty_bottle_check')">
                자세히보기
              </button>
            </div>
          </div>
        </div>
        <p class="txt">아래에 확인 사항을 읽어보시고 모두 체크해주세요.</p>
        <ul class="input_list">
          <li>
            <InmInputCheckbox text="내용물을 비워주셨나요" true-value="Y" false-value="N" :is-switch="false" :disabled="false" />
          </li>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="이니스프리 공병 10개만 넣으셨나요?"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
          </li>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="박스에 잘 포장해 주셔서 “이니스프리 공병수거”라고 꼭! 적어주세요."
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
          </li>
        </ul>
      </div>

      <div class="float_area">
        <div class="box">
          <InmInputCheckbox
            v-model="value"
            text="공병수거 신청동의"
            true-value="Y"
            false-value="N"
            :is-switch="false"
            :disabled="false"
            class="essential" />
          <ul class="input_list">
            <li>
              <InmInputCheckbox
                v-model="value"
                text="[필수] 개인정보 수집/이용동의"
                true-value="Y"
                false-value="N"
                :is-switch="false"
                :disabled="false" />
              <button type="button" class="btn_link_arrw" @click="modal.open('modal_agree', 'layer tooltip')">자세히보기</button>
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
            </li>
            <li>
              <InmInputCheckbox
                v-model="value"
                text="[필수] 공병수거 신청 조건 동의"
                true-value="Y"
                false-value="N"
                :is-switch="false"
                :disabled="false" />
            </li>
          </ul>
          <p class="txt">
            주소/휴대전화 번호가 불명확할 경우 공병 수거신청이 취소될 수 있으며, 공병수거 시 수량이 부족하거나 다른 공병이 포함되어 있는
            경우 공병 수거신청이 취소될 수 있습니다.
          </p>
        </div>
        <Button class="btn_big confirm" txt="공병수거신청" @click="modal.open('alert_bottle_done', 'alert')" />
      </div>
    </div>

    <div id="modal_empty_bottle_check" class="modal_wrap">
      <div class="modal_container">
        <div class="modal_header">
          <h2>공병수거 신청 필수사항 CHECK!</h2>
          <button class="btn_close" @click="modal.close(this)">닫기</button>
        </div>
        <div class="modal_content">
          <img src="@inmModule/assets/images/common/img_bottle_check_01.png" alt="" />
          <ol>
            <li>사용한 이니스프리 공병들을 모아 깨끗하게 비워주세요.<br /><span>* 10개의 이니스프리 공병이 필요해요!</span></li>
          </ol>
          <img src="@inmModule/assets/images/common/img_bottle_check_02.png" alt="" />
          <ol start="2">
            <li>박스에 공병들을 담아 포장을 해주세요.<br /><span>* 1개 박스에 포장 부탁드립니다.</span></li>
          </ol>
          <img src="@inmModule/assets/images/common/img_bottle_check_03.png" alt="" />
          <ol start="3">
            <li>
              박스 겉면에 ‘이니스프리 공병수거'를 잘보이게 적어주세요!<br /><span
                >* 신청 완료되면 영업일 기준 2~3일 내에 택배 기사분이 수거를 위해 방문하실 거에요.</span
              >
            </li>
          </ol>
        </div>
      </div>
      <div class="overlay" @click="modal.close(this)"></div>
    </div>

    <div id="alert_bottle_done" class="modal_wrap">
      <div class="modal_container">
        <button class="btn_close" @click="modal.close(this)">툴팁 닫기</button>
        <div class="modal_content">
          <h2>공병수거 신청완료</h2>
          <p class="txt">
            공병수거 신청이 완료되었습니다. 2~3일 내에 수거지로 택배기사님이 방문 예정입니다. 포인트는 수거완료 후 적립됩니다.
          </p>
          <br />
          <p class="txt fc_red">잠깐! 공병수거 시 택배기사님으로부터 ‘반품수거' 요청 문자가 발송될 수 있으니 참고 부탁드립니다.</p>
        </div>
        <div class="modal_footer">
          <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
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
<style lang="scss" scoped>
.inner_flex {
  display: flex;
  justify-content: space-between;
}
.title_wrap {
  margin-bottom: 0;
}
.cont_area {
  width: 890px;

  .sub_title_wrap {
    margin: 60px 0 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #000;
    z-index: auto;
    & > div {
      display: flex;
      justify-content: space-between;

      .btn_wrap {
        display: flex;
        gap: 5px;
      }
    }

    h3 {
      font-size: 20px;
    }

    .btn_link_arrw {
      color: #888;
      border-bottom: 1px solid #888;
      position: relative;
      right: 0;

      &:after {
        border-color: #888;
      }
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

  .bul_list {
    margin-top: 15px;
    li {
      color: #999;
      &.fc_red {
        &:before {
          background-color: #ff0000;
        }
      }
    }
  }

  .photo_list {
    display: flex;
    gap: 3px;
    .ipt_file {
      width: 86px;
      height: 86px;
      font-size: 0;
      border: 1px solid #ddd;
      background-color: #f5f5f5;
      position: relative;
      &:before {
        content: '';
        width: 2px;
        height: 18px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:after {
        content: '';
        width: 18px;
        height: 2px;
        background-color: #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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

      .btn_del {
        width: 21px;
        height: 21px;
        font-size: 0;
        position: absolute;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);

        &:before {
          content: '';
          width: 2px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &:after {
          content: '';
          width: 2px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }
  p.txt {
    color: #888;
  }
}

.input_list {
  li {
    margin-top: 20px;

    & + li {
      margin-top: 10px;
    }
  }
}

.float_area {
  width: 320px;
  height: 100%;
  margin-top: 23px;
  background-color: #fcfcfd;
  border: 1px solid #eee;
  position: sticky;
  top: 100px;

  .box {
    padding: 30px 25px 36px;

    .input_wrap {
      &.essential {
        margin-bottom: 10px;
        :deep(em) {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }

    .input_list {
      & > li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .btn_link_arrw {
          color: #999;
          font-size: 12px;
          text-decoration: underline;

          &:after {
            width: 7px;
            height: 7px;
            border-color: #999;
          }
        }
      }
    }
  }

  p.txt {
    color: #666;
    line-height: 22px;
    margin-top: 30px;
  }

  .btn_big {
    width: 100%;
    :deep(em) {
      font-size: 16px;
    }
  }
}

:deep(.modal_wrap) {
  &.alert {
    .modal_content {
      padding: 30px 20px;

      .sub_tit {
        font-size: 13px;
        color: #00bc70;
        margin-bottom: 0.6rem;
      }

      h2 {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;

        & + .txt {
          margin-top: 10px;
        }
      }

      .txt {
        font-size: 13px;
        color: #666;
        display: block;
      }
    }
  }
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
</style>
