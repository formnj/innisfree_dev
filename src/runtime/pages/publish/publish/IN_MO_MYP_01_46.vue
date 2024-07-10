<template>
  <Tabs tabType="type_01" :item="[{ txt: '1&#58;1 문의하기' }, { txt: '1:1 문의내역' }]" :tabidx="0" />
  <div class="inner">
    <section>
      <dl>
        <dt>문의유형<em class="vital">*</em></dt>
        <dd>
          <Selectbox
            :options="[
              { val: 'value', txt: '선택하세요' },
              { val: 'value', txt: '주문/결제문의' },
              { val: 'value', txt: '배송문의' },
              { val: 'value', txt: '취소/반품/교환문의' },
              { val: 'value', txt: '자주하는 문의/기타' },
              { val: 'value', txt: '가맹점 개설문의' }
            ]" />
          <Selectbox
            :options="[
              { val: 'value', txt: '선택해주세요' },
              { val: 'value', txt: '주문/결제문의' },
              { val: 'value', txt: '뷰티포인트/쿠폰' }
            ]" />
        </dd>
      </dl>
      <dl>
        <dt>주문제품</dt>
        <dd>
          <div class="multi_form">
            <Inputs _type="text" _placeholder="주문 제품을 선택해주세요" />
            <Button txt="제품선택" class="btn_outline" @click="modal.open('choice_modal', 'fullMo')" />
          </div>
          <div class="multi_form hide">
            <Inputs _type="text" _placeholder="주문 제품을 선택해주세요" />
            <Button txt="제품선택" class="btn_outline" @click="modal.open('choice_modal', 'fullMo')" />
          </div>
          <div class="multi_form hide">
            <Inputs _type="text" _placeholder="주문 제품을 선택해주세요" />
            <Button txt="제품선택" class="btn_outline" @click="modal.open('choice_modal', 'fullMo')" />
          </div>
        </dd>
      </dl>
      <dl>
        <dt>문의내용<em class="vital">*</em></dt>
        <dd>
          <Inputs _type="text" _placeholder="제목을 입력해주세요. (최대 30자 이내)" />
          <!-- 24-04-25 Add -->
          <div class="txtarea_wrap">
            <Textarea
              @keydown="counter($event)"
              _placeholder="내용을 입력해 주세요. 문의 내용 본문에는 개인정보를 입력하지 말아주세요. 고객정보보호를 위해 마스킹 처리될 수 있습니다.(예 : 성명, 연락처, 이메일주소, 계좌번호 등)" />
            <span class="count"> <em>0</em>/300</span>
          </div>
          <!-- //24-04-25 Add -->
          <ul class="ph_wrap">
            <li>
              <img src="/images/sam/IMG1.png" alt="" />
              <em></em>
            </li>
            <li>
              <img src="/images/sam/IMG2.png" alt="" />
              <em></em>
            </li>
            <li>
              <img src="/images/sam/IMG3.png" alt="" />
              <em></em>
            </li>
            <li>
              <img src="/images/sam/IMG4.png" alt="" />
              <em></em>
            </li>
            <li>
              <img src="/images/sam/IMG5.png" alt="" />
              <em></em>
            </li>
          </ul>
        </dd>
      </dl>
      <Button class="btn_outline" txt="사진 최대 5장(선택)" />
      <hr />
    </section>
    <section>
      <ul>
        <li>
          <dl>
            <dt>답변 결과를 이메일로 받으시겠습니까?</dt>
            <dd>
              <Inputs _type="radio" _text="예" _name="email" value="yes" />
              <Inputs _type="radio" _text="아니요" _name="email" value="no" />
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>답변 결과를 문자 메시지로 받으시겠습니까?</dt>
            <dd>
              <Inputs _type="radio" _text="예" _name="sms" value="yes" />
              <Inputs _type="radio" _text="아니요" _name="sms" value="no" />
            </dd>
          </dl>
        </li>
      </ul>
      <em>
        *이메일, 휴대전화번호 정보 수정을 원하시는 경우<br />
        회원정보 수정을 통해 변경해주시기 바랍니다.
      </em>
      <em>* 답변 결과는 문자 메세지로 전송됩니다.</em>
      <div class="btn_wrap">
        <Button txt="취소" class="btn_mid_outline" />
        <Button txt="등록" class="btn_mid active confirm" @click="modal.open('check_modal', 'full')" />
      </div>
    </section>
  </div>

  <div id="choice_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>주문제품 선택</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="inner">
          <ul class="modal_tab_wrap">
            <li><button class="active" @click="tab_click($event)">1개월</button></li>
            <li><button @click="tab_click($event)">2개월</button></li>
            <li><button @click="tab_click($event)">3개월</button></li>
            <li><button @click="tab_click($event)">6개월</button></li>
          </ul>
        </div>
        <ul>
          <li>
            <div>
              <span>주문번호</span>
              <strong>20542123</strong>
              <em>2023-10-26</em>
            </div>
            <dl>
              <dt>
                <Inputs _type="checkbox" />
                <img src="/images/sam/IMG.png" alt="" />
              </dt>
              <dd>
                <strong>그린티 씨드 히알루론산 세럼 80ml + 그린티7894561234878 </strong>
                <span>마이 파운데이션 1.1 - C13호</span>
                <i>1개</i>
              </dd>
            </dl>
            <dl>
              <dt>
                <Inputs _type="checkbox" />
                <img src="/images/sam/IMG.png" alt="" />
              </dt>
              <dd>
                <strong>그린티 씨드 히알루론산 세럼 80ml + 그린티그린티7894561234878 </strong>
                <span>마이 파운데이션 1.1 - C13호</span>
                <i>1개</i>
              </dd>
            </dl>
          </li>
          <li>
            <div>
              <span>주문번호</span>
              <strong>20542123</strong>
              <em>2023-10-26</em>
            </div>
            <dl>
              <dt>
                <Inputs _type="checkbox" />
                <img src="/images/sam/IMG.png" alt="" />
              </dt>
              <dd>
                <strong>그린티 씨드 히알루론산 세럼 80ml + 그린티1234564 </strong>
                <span>마이 파운데이션 1.1 - C13호</span>
                <i>1개</i>
              </dd>
            </dl>
            <dl>
              <dt>
                <Inputs _type="checkbox" />
                <img src="/images/sam/IMG.png" alt="" />
              </dt>
              <dd>
                <strong>그린티 씨드 히알루론산 세럼 80ml + 그린티78156811111 </strong>
                <span>마이 파운데이션 1.1 - C13호</span>
                <i>1개</i>
              </dd>
            </dl>
          </li>
        </ul>
        <section>
          <div>조회 결과가 없습니다.</div>
        </section>
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="선택" />
      </div>
    </div>
  </div>

  <div id="check_modal" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>알려드립니다.</h2>
      </div>
      <div class="modal_content">1:1문의 작성이 완료되었습니다.</div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-menu-search-cart'
})
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const tab_click = (event) => {
  let tab_title = document.querySelectorAll('.inner .modal_tab_wrap li button')
  console.log(tab_title)
  tab_title.forEach((a) => {
    a.classList.remove('active')
  })
  const target = event.currentTarget
  target.classList.add('active')
}

const counter = (event) => {
  let content = event.target.value
  let num = ref(content)
  let cont_length = num.value.length
  console.log(cont_length)
  let cont = document.querySelector('.txtarea_wrap .count em')
  if (cont_length.length == 0 || cont_length == '') {
    cont.innerText = 0
  } else {
    cont.innerText = cont_length
  }
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '1:1 고객상담')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.tab_wrap {
  .type_01 {
    li {
      button {
        > em {
          padding: 0px !important;
        }
      }
    }
  }
}

section {
  padding: 3rem 0;
  > dl {
    &:first-of-type {
      dt {
        margin-top: 0;
      }
    }
    dt {
      margin: 2.4rem 0 1rem 0;
      .vital {
        margin-left: 0.2rem;
        color: #ff0000;
      }
    }
    dd {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .multi_form {
        button.btn_outline {
          height: auto;
        }
        &.hide {
          button.btn_outline {
            visibility: hidden;
          }
        }
      }
      :deep(.input) {
        textarea {
          height: 14.1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          resize: none;
          &::placeholder {
            color: #aaa;
            font-size: 12px;
            font-style: normal;
            line-height: 18px;
          }
        }
      }
      .ph_wrap {
        display: flex;
        gap: 0.5rem;
        li {
          width: 19.5%;
          height: 6.4rem;
          position: relative;
          img {
            width: 100%;
            object-fit: fill;
          }
          em {
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem -32rem / 25rem auto;
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            cursor: pointer;
          }
        }
      }
      .txtarea_wrap {
        position: relative;
        > span {
          color: #999;
          font-size: 1.2rem;
          position: absolute;
          right: 1rem;
          bottom: 3rem;
          em {
            color: #333;
            font-weight: 600;
          }
        }
      }
    }
  }
  > button {
    width: 100%;
    margin-top: 2rem;
    &.btn_outline {
      &::before {
        content: '';
        width: 16px;
        height: 16px;
        margin-right: -10px;
        background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
        background-repeat: no-repeat;
        background-size: 250px;
        background-position: -170px -135px;
      }
    }
  }
  .btn_wrap {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .btn_mid {
      background-color: #eeeeee;
      flex: 1;
      :deep(em) {
        color: #666666 !important;
        font-weight: 600;
      }
      &.confirm {
        background-color: #00bc70 !important;
        :deep(em) {
          color: #fff !important;
        }
      }
    }
    .btn_mid_outline {
      border: 1px solid #dddddd;
      flex: 1;
      :deep(em) {
        color: #666666 !important;
        font-weight: 600;
      }
    }
  }
  hr {
    margin-top: 60px;
    margin-left: -21px;
    margin-right: -21px;
    border: 2px solid #eee;
  }
  > ul {
    li {
      dl {
        > * {
          margin-bottom: 1.5rem;
        }
        dt {
          color: #666;
        }
        dd {
          display: flex;
          label.check {
            width: 13.7rem !important;
            margin-right: 1.7rem !important;
          }
        }
      }
    }
  }
  em {
    padding-left: 0.5rem;
    color: #ff0000;
    font-size: 1.2rem;
    text-indent: -0.5rem;
    line-height: 1.6rem;
    display: inline-block;
  }
}

#choice_modal {
  .modal_container {
    width: 100% !important;
    max-height: 100% !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(0px, 0px);
    .modal_header {
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }
    .modal_content {
      .inner {
        padding: 0rem 2.1rem 2.4rem 2.1rem;
        border-bottom: 0.5rem solid #f5f5f5;
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          li {
            width: 25%;
            &:first-of-type {
              border-left: 0.1rem solid #ddd;
            }
            button {
              width: 100%;
              height: 4rem;
              color: #999;
              font-size: 1.2rem;
              border: 0.1rem solid #ddd;
              border-width: 0.1rem 0.1rem 0.1rem 0rem;
              background: #f4f4f4;
              text-align: center;
              position: relative;
              &.active {
                color: #000;
                border: 0;
                background: #fff;
                &::before {
                  content: '';
                  width: 100%;
                  height: 100%;
                  border: 0.1rem solid #000;
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
            }
          }
        }
        .tab_wrap {
          margin-left: 0 !important;
          margin-right: 0 !important;
          ul {
            li {
              &:deep(> *) {
                height: 40px !important;
                font-size: 1.3rem !important;
              }
            }
          }
        }
      }
      > ul {
        li {
          padding: 2rem 2.1rem;
          border: 1px solid #f5f5f5;
          > div {
            width: 100%;
            margin-bottom: 2rem;
            display: flex;
            padding: 1rem 1.5rem;
            background-color: #f5f5f5;
            border: 1px solid #eee;
            span,
            em {
              margin-right: 1rem;
              color: #666;
              font-size: 1.3rem;
              font-weight: 400;
            }
            strong {
              font-size: 1.3rem;
              font-weight: 600;
            }
            em {
              margin-left: auto;
              margin-right: 0;
            }
          }
          dl {
            margin-bottom: 2rem;
            display: flex;
            gap: 1.5rem;
            dt {
              min-width: 6.9rem;
              height: 9.2rem;
              position: relative;
              flex: 0 auto;
              :deep(.input_wrap) {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
              }
              &::before {
                content: '';
                background: #f5f5f5;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
              img {
                width: 100%;
                object-fit: fill;
                position: relative;
                z-index: 2;
              }
            }
            dd {
              display: flex;
              flex-direction: column;
              overflow: hidden;
              > * + * {
                margin-top: 1rem;
                margin-block: 0.4rem;
              }
              strong {
                font-weight: 400;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              span,
              i {
                color: #999;
                font-size: 1.2rem;
                font-weight: 400;
              }
              i {
                font-style: inherit;
              }
            }
          }
        }
      }
      section {
        div {
          font-size: 1.6rem;
          font-weight: 600;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &::before {
            content: '';
            width: 6rem;
            height: 6rem;
            margin-bottom: 2rem;
            background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -4.1em -10rem / 25rem auto;
            display: block;
          }
        }
      }
    }
    .modal_footer {
      padding: 0;
      gap: 0;
      > .btn_big {
        width: 50%;
      }
    }
  }
}

#check_modal {
  .modal_container {
    .modal_header {
      font-size: 1.2rem;
      border-bottom: 0;
    }
    .modal_content {
      padding: 30px 30px 30px 20px;
    }
    .modal_footer {
      padding: 0;
      button.btn_big {
        width: 100%;
        padding: 30px !important;
        background: #00bc70;
      }
    }
  }
}
</style>
