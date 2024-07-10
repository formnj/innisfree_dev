<template>
  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <h3 class="essential">공병수거지</h3>
        <div class="btn_wrap">
          <Button txt="등록/변경" class="btn_sm gray" />
        </div>
      </div>
      <div class="cont">
        <!-- 수거지 없을 경우 -->
        <p class="addr">수거지를 등록해주세요.</p>
        <!-- //수거지 없을 경우 -->
        <p>배송지명</p>
        <p>주소희 · 010-1234-5678</p>
        <p class="addr">(12345)서울 용산구 한강대로 100 아모레퍼시픽 (이니스프리 2단지 아파트) 한강로2가 424</p>
        <div class="dis_flex">
          <InmInputCheckbox v-model="value" text="안심번호사용" true-value="Y" false-value="N" :is-switch="false" :disabled="false" />
          <Icons class="tooltip_16" />
        </div>
      </div>
    </section>
    <section>
      <div class="sub_title_wrap">
        <h3 class="essential">사진등록</h3>
        <div class="btn_wrap">
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle', 'alert modal_empty_bottle')">
            공병수거 품목보기
          </button>
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
    </section>
    <section>
      <div class="sub_title_wrap">
        <h3 class="essential">확인사항 선택</h3>
        <div class="btn_wrap">
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_empty_bottle_check', 'full modal_empty_bottle_check')">
            자세히보기
          </button>
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
    </section>
    <section>
      <div class="sub_title_wrap">
        <h3 class="essential">공병수거 신청동의</h3>
      </div>
      <ul class="input_list">
        <li>
          <strong>
            <InmInputCheckbox v-model="value" text="전체 동의하기" true-value="Y" false-value="N" :is-switch="false" :disabled="false" />
          </strong>
        </li>
        <li>
          <InmInputCheckbox
            v-model="value"
            text="[필수] 개인정보 수집/이용동의"
            true-value="Y"
            false-value="N"
            :is-switch="false"
            :disabled="false" />
          <button type="button" class="btn_link_arrw" @click="modal.open('modal_agree', 'alert modal_agree')">자세히보기</button>
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
      <ul class="bul_list">
        <li>
          주소/휴대전화 번호가 불명확할 경우 공병 수거신청이 취소될 수 있으며, 공병수거 시 수량이 부족하거나 다른 공병이 포함되어 있는 경우
          공병 수거신청이 취소될 수 있습니다.
        </li>
      </ul>
    </section>
    <div class="btm_btn_wrap"><Button class="btn_big" disabled txt="공병수거 신청" /></div>
    <div class="btm_btn_wrap"><Button class="btn_big confirm" txt="공병수거 신청" @click="modal.open('alert_bottle_done', 'alert')" /></div>

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
          <p>고객님께서는 개인정보 수집 및 이용동의에 거부할 수 있습니다. 다만, 거부하는 경우 공병수거 참여가 불가능합니다.</p>
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
import { onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '공병수거신청')
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin-top: 0;
    align-items: center;

    .btn_link_arrw {
      height: auto;
      color: #999;
      text-decoration: underline;
      position: relative;
      right: 0;

      &:after {
        border-color: #999;
        position: relative;
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
      }
    }
  }
}

[class*='btn_'].gray {
  background-color: #999;
  color: #fff;
  :deep(em) {
    padding: 0 0.8rem;
    font-size: 1rem;
    font-weight: 600;
  }
}

.cont {
  p {
    line-height: 1.8rem;

    & + p {
      margin-top: 1rem;
    }

    &.addr {
      margin-top: 0.7rem;
      color: #888;
      line-height: 2rem;
    }
  }

  .dis_flex {
    margin-top: 2rem;
    gap: 0.6rem;
  }
}

.dis_flex {
  display: flex;
  align-items: center;
}

.photo_list {
  display: flex;
  gap: 3px;
  .ipt_file {
    width: 6.4rem;
    height: 6.4rem;
    font-size: 0;
    border: 1px solid #ddd;
    background-color: #f5f5f5;
    position: relative;
    &:before {
      content: '';
      width: 1rem;
      height: 0.1rem;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:after {
      content: '';
      width: 0.1rem;
      height: 1rem;
      background-color: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .img_wrap {
    width: 6.4rem;
    height: 6.4rem;
    text-align: center;
    background-color: #000;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }

    .btn_del {
      width: 2rem;
      height: 2rem;
      font-size: 0;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.6);

      &:before {
        content: '';
        width: 0.2rem;
        height: 1.2rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:after {
        content: '';
        width: 0.2rem;
        height: 1.2rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  & + .bul_list {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #f5f5f5;
    li {
      margin-top: 0;
      font-size: 1.2rem;
      color: #999;

      &.fc_red {
        &:before {
          background-color: #ff0000;
        }
      }
    }
  }
}

p.txt {
  color: #888;
}

.input_list {
  & > li {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn_link_arrw {
      color: #000;
      font-size: 1.2rem;
      text-decoration: underline;

      &:after {
        width: 0.7rem;
        height: 0.7rem;
        border-color: #000;
      }
    }
  }
  & + li {
    margin-top: 1.6rem;
    padding-top: 1.6rem;
    border-top: 1px solid #eee;
  }

  & + .bul_list {
    margin-top: 2rem;
    color: #888;
    li {
      &:before {
        background-color: #888;
      }
    }
  }
}

.btm_btn_wrap {
  button {
    width: 100%;
    font-size: 1.6rem;
  }
}

:deep(.modal_wrap) {
  &.modal_empty_bottle {
    .modal_content {
      padding: 0;
      img {
        width: 100%;
        vertical-align: top;
      }
    }
  }
  &.modal_empty_bottle_check {
    .modal_content {
      padding: 2.1rem;
    }

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

  &.modal_agree {
    .modal_content {
      padding: 3rem 2rem;

      h2 {
        margin-bottom: 1rem;
      }

      p {
        color: #666;

        & + ul {
          margin: 0.5rem 0;
          color: #666;
        }
      }
    }
  }

  &.alert {
    .modal_content {
      padding: 3rem 2rem;
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;

      & + .txt {
        margin-top: 1rem;
        line-height: 2rem;
      }
    }
  }
}
</style>
