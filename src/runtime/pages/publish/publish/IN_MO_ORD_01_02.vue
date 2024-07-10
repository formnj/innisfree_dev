<template>
  <div class="inner">
    <section>
      <Button class="btn_outline" txt="새배송지 추가" @click="modal.open('address_add_modal', 'fullMo')" />
    </section>
    <ul class="adress_wrap">
      <li v-for="(item, idx) in adress_list" :key="idx" class="tab_title" @click="tab_click($event)">
        <dl>
          <dt>
            <span>{{ item.name }}</span>
            <em v-if="item.on">{{ item.on }}</em>
          </dt>
          <dd>
            <Button class="btn_outline btn_sm" txt="수정" @click="modal.open('address_modify_modal', 'fullMo')" />
            <Button class="btn_outline btn_sm" txt="삭제" @click="modal.open('delete_modal', 'alert')" />
          </dd>
        </dl>
        <p>{{ item.tel }}</p>
        <span>{{ item.adress }}</span>
      </li>
    </ul>
  </div>

  <!--modal-->
  <div class="modal_wrap" id="delete_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 삭제</h2>
      </div>
      <div class="modal_content">
        <div>등록된 배송지를 삭제 하시겠습니까?</div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
        <Button class="btn_big" txt="취소" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="address_add_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 추가</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <section>
          <Inputs _type="text" _placeholder="도로명, 건물명, 번지로 검색해주세요." />
          <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
        </section>
        <div>
          <h3>
            검색결과
            <span>1건</span>
          </h3>
          <div class="res_address_wrap" @click="[setFilter($event), show_hide()]">
            <p>
              <span class="flag">도로명</span>
              서울특별시 강서구 양천로 551-17
            </p>
            <p>
              <span class="flag">지번</span>
              서울특별시 강서구 가양동 449-4
            </p>
            <a href="#none"></a>
          </div>
        </div>
        <ul>
          <li>
            <Inputs _type="text" _placeholder="상세주소" :isError="false" _err_text="상세주소를 입력해주세요." />
            <span class="error">상세주소를 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
            <span class="error">배송지명을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="받으시는 분" :isError="false" _err_text="받으시는 분 이름을 입력해주세요." />
            <span class="error">받으시는 분 이름을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
            <span class="error">휴대폰 번호를 확인해주세요.</span>
          </li>
          <li class="chk_address">
            <Inputs _type="checkbox" _text="기본배송지 사용" />
          </li>
          <li class="chk_agree">
            <Inputs _type="checkbox" _text="개인정보 수집동의" /><a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button txt="배송지 등록" class="btn_big confirm" />
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="shippingArmyInfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>군부대 배송 안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <p>
          <strong>- 사서함 주소</strong>
          <strong>- 배송지 명이 ‘부대’일 시 우체국 택배로 배송되며, 그 외에는 CJ택배로 배송됩니다.</strong>
        </p>
        <ol>
          <li>우체국 택배 서비스는 군부대 배송의 경우에만 가능합니다.</li>
          <li>수신인의 군 부대명 / 사서함 번호를 정확하게 기재하셔야 배송됩니다.</li>
          <li>
            <em>군 부대 발송 택배는 우체국 택배만 가능하기 때문에, 1차 CJ 택배 출고 → 2차 우체국 택배 이관 출고하여 최종 발송</em> 됩니다.
            택배 송장 번호 확인 시, CJ 택배 송장으로 표기되며 최종 우체국 송장 번호는 고객 상담실로 문의 시 확인 <br />가능합니다. (1:1 상담
            혹은 080 유선상담) 위의 특수한 배송 절차로 인해 일반 배송보다 배송일이 2~3일 정도 더 <br />소요될 수 있음을 안내 드립니다.
          </li>
          <li>
            <em>군부대 배송안내에 따른 기재를 정확하게 하지 않으실 경우, 이니스프리 물류 쪽으로 다시 반입</em>되기 때문에 배송 <br />지연,
            <em>왕복 배송비 5,000원을 입금</em>해 주셔야 합니다. '사서함 주소' 또는 '부대'를 입력해 주세요!
          </li>
          <li>
            군부대 배송건은 교환/반품접수시 부대 내 택배기사님 방문이 불가하여 직접 반품처리 해주셔야 합니다.<br />
            이점 양해 부탁드립니다.
          </li>
        </ol>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div class="modal_wrap" id="personalinfo">
    <div class="modal_container">
      <div class="modal_header">
        <h2>개인정보 수집동의</h2>
        <button class="btn_close" @click="[modal.close(this)]">닫기</button>
      </div>
      <div class="modal_content">
        <p>㈜이니스프리는 다음과 같이 서비스 제공을 위한 최소한의 이용자의 개인정보를 수집 및 이용하고 있습니다.</p>
        <div class="table_wrap">
          <table>
            <caption>
              개인정보 수집동의
            </caption>
            <colgroup>
              <col style="width: 100px" />
            </colgroup>
            <tbody>
              <tr>
                <th>수집항목</th>
                <td>[필수] 이름(상품수령인), 주소(상품수령지), 휴대폰번호</td>
              </tr>
              <tr>
                <th>수집이용/<br />목적</th>
                <td>
                  배송지 등록 및<br />
                  주문 편의 목적
                </td>
              </tr>
              <tr>
                <th>이용/<br />보유기간</th>
                <td>
                  회원탈외 또는<br />
                  배송지 정보 삭제 시까지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>※ 귀하는 개인정보 수집 및 이용에 거부할 수 있습니다. 단, 거부하는 경우 제품을 구매 하실 수 없습니다.</p>
      </div>
    </div>
  </div>

  <div class="modal_wrap" id="address_modify_modal">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송지 수정</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul>
          <li>
            <Inputs _type="text" _placeholder="배송지명" :isError="false" _err_text="배송지명을 입력해주세요." />
            <span class="error">배송지명을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="받으시는분" :isError="false" _err_text="배송지명을 받으시는 분 이름을 입력해주세요." />
            <span class="error">받으시는 분 이름을 입력해주세요.</span>
          </li>
          <li>
            <Inputs _type="text" _placeholder="휴대폰번호 입력('-')제외" :isError="false" _err_text="휴대폰 번호를 확인해주세요." />
            <span class="error">휴대폰 번호를 확인해주세요.</span>
          </li>
          <li>
            <div class="multi_form">
              <Inputs _type="text" _placeholder="문구를 입력해주세요" />
              <Button class="btn_outline" txt="주소검색" />
            </div>
            <Inputs _type="text" _placeholder="" />
          </li>
          <li>
            <Inputs _type="text" _placeholder="" :isError="false" _err_text="상세주소를 입력해주세요." />
            <span class="error">상세주소를 입력해주세요.</span>
          </li>

          <li class="chk_army">
            <a href="#none">군부대 배송안내<Icons class="tooltip" @click="modal.open('shippingArmyInfo', 'full')" /></a>
          </li>
          <li class="chk_agree">
            <div>
              <Inputs _type="checkbox" _text="개인정보 수집동의" />
              <a @click="modal.open('personalinfo', 'fullMo')">자세히보기</a>
            </div>
            <span class="error">개인정보 수집에 동의해주셔야 배송지 저장 가능합니다.</span>
          </li>
        </ul>
      </div>
      <div class="modal_footer">
        <Button txt="배송지 등록" class="btn_big confirm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { modal, setFilter } from '@inmModule/assets/js/common-ui'
import { adress_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const tab_click = (event) => {
  let tab_title = document.querySelectorAll('.adress_wrap li')
  console.log(tab_title)
  tab_title.forEach((a) => {
    a.classList.remove('active')
  })
  const target = event.currentTarget
  target.classList.add('active')
}

const show_hide = () => {
  let target = document.querySelector('.res_address_wrap')
  target.parentElement.nextElementSibling.classList.toggle('show')
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '배송지 관리')
})
</script>

<style lang="scss" scoped>
.chk_agree {
  > div {
    display: flex;
    :deep(.input_wrap) {
      flex: 0 auto;
    }
  }
}
.inner {
  section {
    padding: 0rem 2.1rem 3rem;
    border-bottom: 0.5rem solid #f5f5f5;
    > button {
      width: 100%;
      margin-top: 2rem;
      vertical-align: middle;
      &.btn_outline {
        display: flex;
        align-items: center;
        :deep(em) {
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          &::before {
            content: '';
            width: 16px;
            height: 16px;
            margin-right: 1rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 250px;
            background-position: -228px -98px;
            display: inline-block;
          }
        }
      }
    }
  }
  > ul {
    margin-top: 1rem;
    > * + * {
      margin-top: 1rem;
    }
    li {
      padding: 2.5rem 2.1rem;
      border: 0.1rem solid #eeeeee;
      &.active {
        border: 0.2rem solid #00bc70;
      }
      > dl {
        display: flex;
        align-items: center;
        justify-content: space-between;
        + p {
          margin: 1rem 0 0.5rem;
        }

        dt {
          display: flex;
          align-items: center;
          span {
            margin-right: 1rem;
            color: #000;
            font-size: 1.6rem;
            font-weight: 600;
          }
          em {
            padding: 0.3rem;
            color: #00bc70;
            font-size: 1rem;
            background: #e0fbf0;
          }
        }
        dd {
          display: flex;
          gap: 8px;
          :deep(button.btn_outline) {
            border: 0.1rem solid #999 !important;
            border-radius: 0.1rem;
            em {
              padding: 0 1rem;
              color: #999;
              font-size: 1rem;
              font-weight: 600;
            }
          }
        }
      }
      p {
        color: #999;
        font-size: 1.3rem;
      }
      span {
        color: #666;
        font-size: 1.4rem;
      }
    }
  }
}

.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 3rem 2rem 1rem 2rem;
        border-bottom: 0;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 2rem 3rem 3rem 2rem;
        text-align: center;
      }
    }
  }
  &#address_modify_modal {
    .modal_container {
      .modal_content {
        overflow: hidden;
        > ul {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 3rem 4rem;
          > * + * {
            margin-top: 0.8rem;
          }
          li {
            font-size: 1.3rem;
            > * + * {
              margin-top: 0.8rem;
            }
            &.chk_army {
              margin-top: 1.5rem;
              a {
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
            }
            &:last-of-type {
              margin-top: 1.5rem;
              display: flex;
              flex-direction: column;

              a {
                margin-left: 1rem;
                text-decoration: underline;
              }
            }
            > .multi_form {
              height: 100%;
              align-items: center;
              gap: 0.5rem;
              :deep(.input_wrap) {
                flex: 1;
              }
              .btn_outline {
                display: block;
              }
              + .label_wrap {
                margin-top: 0.8rem;
              }
            }
            > .error {
              margin-top: 1rem;
              color: #ff0000;
              font-size: 1.2rem;
              display: block;
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        button.btn_big {
          width: 100%;
        }
      }
    }
  }
  &#address_add_modal {
    .modal_container {
      .modal_content {
        overflow: hidden;
        > section {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2rem 4rem 1.5rem;
          border-bottom: 0.5rem solid #f5f5f5;
          :deep(div.label_wrap) {
            &::after {
              content: '';
              width: 2.4rem;
              height: 2.4rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-position: 0 -40px;
              background-size: 250px;
              position: absolute;
              top: 50%;
              right: 2.1rem;
              display: inline-block;
              transform: translateY(-50%);
            }
          }
          > a {
            margin: 1.5rem 0 2.1rem;
            display: flex;
            align-content: center;
          }
        }
        > div {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2.5rem 2.1rem 2rem;
          border-bottom: 0.1rem solid #f5f5f5;
          position: relative;
          a {
            width: 1.6rem;
            height: 1.6rem;
            background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
            background-repeat: no-repeat;
            background-position: -1px -70px;
            background-size: 250px;
            position: absolute;
            bottom: 2rem;
            right: 4rem;
            display: inline-block;
            transition: all 0.2s;
            transform: rotate(0deg);
          }
          h3 {
            margin-left: -2.1rem;
            margin-right: -2.1rem;
            padding: 0 4rem 2.5rem;
            font-size: 1.6rem;
            border-bottom: 0.1rem solid #f5f5f5;
            display: flex;
            align-items: center;
            > span {
              margin-left: 1rem;
              color: #00bc70;
              font-size: 1.3rem;
            }
          }
          .res_address_wrap {
            margin-top: 2.5rem;
            > * + * {
              margin-top: 0.8rem;
            }
            p {
              padding: 0 2.1rem;
              display: flex;
              align-items: center;
              gap: 1rem;
              span {
                width: 3.6rem;
                height: 1.6rem;
                color: #666;
                font-size: 1rem;
                background: #eee;
                text-align: center;
                line-height: 1.6rem;
                display: inline-block;
              }
            }
            &.active {
              a {
                transform: rotate(180deg);
              }
            }
          }
        }
        > ul {
          margin-left: -2.1rem;
          margin-right: -2.1rem;
          padding: 2.5rem 4rem 2rem;
          background: #f5f5f5;
          display: none;
          &.show {
            display: block;
          }
          > * + * {
            margin-top: 0.8rem;
          }
          li {
            font-size: 1.3rem;
            &.chk_address {
              margin-top: 1.5rem;
            }
            &:last-of-type {
              margin-top: 1.5rem;
              display: flex;
              align-items: center;
              a {
                margin-left: 1rem;
                text-decoration: underline;
              }
            }
            > .error {
              margin-top: 1rem;
              color: #ff0000;
              font-size: 1.2rem;
              display: block;
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        :deep(button) {
          width: 100%;
          height: 6rem;
        }
      }
    }
  }
  &#shippingArmyInfo {
    z-index: 20;
    .modal_container {
      .modal_header {
        border-bottom: 0;
        h2 {
          padding-top: 1.5rem;
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 0px 20px 30px;
        p {
          color: #666666;
          font-size: 13px;
          line-height: 1.54em;
          letter-spacing: -0.01em;
          display: flex;
          flex-direction: column;
          strong {
            font-weight: 600;
          }
        }
        ol {
          margin: 10px 0 0 15px;
          > * + * {
            margin-top: 5px;
          }
          li {
            color: #888;
            font-size: 13px;
            list-style-type: decimal;
            em {
              color: #d72137 !important;
            }
          }
        }
      }
    }
  }
  &#personalinfo {
    z-index: 20;
    .modal_container {
      padding: 3rem 2rem 3rem 2rem;
      .modal_header {
        padding: 0;
      }
      .modal_content {
        padding-top: 3rem;
        p {
          color: #222;
          font-size: 1.3rem;
        }
        .table_wrap {
          margin: 2rem 0;
          table {
            caption {
              display: none;
            }

            tbody {
              tr {
                &:first-of-type {
                  th {
                    border-top: 0.1rem solid #999;
                  }
                  td {
                    border-top: 0.1rem solid #999;
                  }
                }
                &:last-of-type {
                  td {
                    color: #ff3131;
                  }
                }
                > * {
                  text-align: left;
                }
                th {
                  padding: 1.1rem 1rem;
                  color: #666;
                  font-weight: normal;
                  font-size: 1.2rem;
                  border-bottom: 0.1rem solid #eee;
                  background: #f5f5f5;
                }
                td {
                  padding: 1.5rem 1rem;
                  color: #777777;
                  font-size: 1.3rem;
                  border-left: 0.1rem solid #eee;
                  border-bottom: 0.1rem solid #eee;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
