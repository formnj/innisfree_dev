<template>
  <div class="inner">
    <div class="policy_wrap">
      <Selectbox
        :options="[
          { val: 'value', txt: '2024-05-17 (3.00v)' },
          { val: 'value', txt: '2024-02-14 (2.98v)' },
          { val: 'value', txt: '2023-04-22 (2차 개정)' },
          { val: 'value', txt: '2021-03-21 (초안)' }
        ]" />
      <h2>제 1장 총칙</h2>
      <dl>
        <dt>제 1 조 (목적)</dt>
        <dd>
          <span>
            이 약관은 ㈜이니스프리(전자상거래 사업자, 이하 "회사")가 운영하는 이니스프리 쇼핑몰(이하 "몰")에서 제공하는 관련 서비스(이하
            "서비스")를 이용함에 있어 고객의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </span>
        </dd>
      </dl>
      <dl>
        <dt>제 2 조 (정의)</dt>
        <dd>
          <ul class="bul_list num">
            <li>
              본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본 약관에 동의하고, 회사가 그에 대한 승낙을 함으로써 효력이 발생합니다.
            </li>
            <li>
              "본 약관은 유ㆍ무선 인터넷을 통하여 홈페이지 또는 모바일 어플리케이션의 초기 화면 또는 그 연결 화면 등 기타 방법에 의하여 그
              내용을 게시 또는 공지합니다.
            </li>
            <li>
              회사가 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 그 적용일자로부터 7일 이전부터 초기화면 또는
              초기화면과의 연결화면을 통해 공지합니다. 단, 이용자에게 불리하게 약관을 개정하는 경우에는 그 적용일30일 이전부터 공지 외에
              서비스 내 전자우편, 로그인시 동의창 등의 전자적 수단이나 청구서에 표시하여 발송하는 등의 방법을 통해 개별적으로 명확히
              통지합니다.
            </li>
            <li>
              회사가 전항에 따라 개정약관을 공지 또는 통지하면서 이용자에게 30일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로
              본다는 뜻을 명확하게 따로 공지 또는 고지하였음에도 이용자가 명시적으로 거부의사를 표시하지 아니한 경우 이용자가 개정약관에
              동의한 것으로 봅니다.
            </li>
          </ul>
        </dd>
      </dl>

      <dl>
        <dt>제 27 조 (관할 및 준거법)</dt>
        <dd>
          <ul class="bul_list num">
            <li>
              회사와 고객간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 고객의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는
              지방법원을 관할법원으로 합니다. 다만, 제소 당시 고객의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의
              관할법원에 제기합니다.
            </li>
            <li>회사와 고객간에 제기된 법적 분쟁에는 대한민국법률을 적용합니다.</li>
          </ul>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2012. 2. 13.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2012년 2월 13일부터 시행합니다.</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2012. 9. 20.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2012년 10월 10일부터 시행합니다.</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2013. 5. 13.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2013년 5월 20일부터 시행합니다</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2014. 5. 20.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2014년 5월 26일부터 시행합니다</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2020. 10. 21.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2020년 11월 25일부터 시행합니다</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2021. 3. 5.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2021년 4월 6일부터 시행합니다</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2023. 4. 11.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2023년 4월 18일부터 시행합니다</span>
        </dd>
      </dl>
      <dl class="supple_pro">
        <dt>&lt;부칙&gt; 2023. 08. 16.</dt>
        <dd>
          <span>제1조(시행일) 이 약관은 2023년 9월 15일부터 시행합니다</span>
        </dd>
      </dl>
    </div>
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
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
import { modal } from '@inmModule/assets/js/common-ui'

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '위치기반서비스 이용약관')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 2rem 2.1rem;
}
ol {
  > * + * {
    margin-top: 0.3rem !important;
  }
  li {
    color: #888;
    font-size: 1.2rem;
    display: flex;
    &::before {
      content: '1.';
      margin-right: 1.5rem;
      width: 0;
      top: 0;
    }
    &:nth-of-type(2)::before {
      content: '2.';
    }
    &:nth-of-type(3)::before {
      content: '3.';
    }
    &:nth-of-type(4)::before {
      content: '4.';
    }
    &:nth-of-type(5)::before {
      content: '5.';
    }
    &:nth-of-type(6)::before {
      content: '6.';
    }
    &:nth-of-type(7)::before {
      content: '7.';
    }
    &:nth-of-type(8)::before {
      content: '8.';
    }
    &:nth-of-type(9)::before {
      content: '9.';
    }
    &:nth-of-type(10)::before {
      content: '10.';
    }
  }
}

.modal_wrap {
  &#delete_modal {
    .modal_container {
      .modal_header {
        padding: 2rem;
        h2 {
          font-size: 1.8rem;
        }
      }
      .modal_content {
        padding: 3rem;
      }
    }
  }
}
</style>
