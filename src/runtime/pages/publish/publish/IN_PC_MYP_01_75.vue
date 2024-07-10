<template>
  <section>
    <div class="sub_title_wrap">
      <h3>회원탈퇴</h3>
    </div>

    <div class="no_data">
      <h4>이니스프리 공식 온라인몰을 이용하는데 불편한 사항이 있으셨나요?</h4>
      <p>
        의견을 남겨주시면, 보다 나은 서비스 제공을 위해 참고하겠습니다.<br />
        회원 탈퇴 전 아래의 사항들을 확인해주세요.
      </p>
      <ul>
        <li>
          1.이니스프리 공식 온라인몰에서 탈퇴시 다음의 정보는 삭제될 수 있습니다.<br />
          - 이니스프리 공식 온라인몰에서 발행한 쿠폰<br />
          - 리뷰 프로필, 리뷰 작성 내역, 리뷰관 활동 내역<br />
          - 1:1 문의 내역 등
        </li>
        <li>
          2. 이니스프리 공식 온라인몰에서 탈퇴하더라도, 즉시 재이용 하실 수 있습니다.<br />
          - 뷰티포인트 통합 아이디로 로그인 및 이니스프리 서비스 이용약관 동의<br />
          - 뷰티포인트 통합 아이디로 공식 온라인몰을 이용하셨던 경우, 재가입 시점에 따라 1에서 언급한 정보가 유지될 수 있습니다.
        </li>
      </ul>
    </div>
  </section>

  <section>
    <div class="sub_title_wrap type_cont">
      <h3>이니스프리 온라인 회원탈퇴</h3>
    </div>
    <table>
      <caption>
        회원탈퇴 정보
      </caption>
      <colgroup>
        <col width="175px" />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th>비밀번호</th>
          <td><Inputs _type="password" /></td>
        </tr>
        <tr>
          <th>탈퇴사유</th>
          <td>
            <div class="radio_wrap">
              <Inputs _type="radio" _name="secession_input" _text="재가입을 위해서" />
              <Inputs _type="radio" _name="secession_input" _text="사이트 이용이 불편해서" />
              <Inputs _type="radio" _name="secession_input" _text="정보가 별로 없어서" />
              <Inputs _type="radio" _name="secession_input" _text="서비스 장애 및 지연이 자주 발생해서" />
              <Inputs _type="radio" _name="secession_input" _text="개인정보 유출이 우려되어서" />
              <Inputs _type="radio" _name="secession_input" _text="기타" />
            </div>
            <Textarea />
            <div class="text_count">{{ text }}/100자</div>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      이니스프리 공식 온라인몰에서 회원 탈퇴를 하시더라도 통합 회원 정보는 유지됩니다.<br />
      뷰티포인트 통합 회원도 함께 탈퇴하기를 원하시면, ‘예’를 선택해주세요.
    </p>
    <div class="radio_wrap">
      <Inputs _type="radio" _name="input_check" _text="예" />
      <Inputs _type="radio" _name="input_check" _text="아니오" />
    </div>
  </section>

  <div class="btn_wrap">
    <Button class="btn_mid" txt="취소" />
    <Button class="btn_mid confirm" txt="회원탈퇴" />
  </div>
</template>
<script setup>
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-mypage'
})

const text = ref(0)

const textarea_value = (e) => {
  text.value = e.target.value.length
}

onMounted(() => {
  document.querySelector('.label_wrap textarea').setAttribute('maxlength', '100')
  document.querySelector('.label_wrap textarea').addEventListener('input', textarea_value)
})
</script>
<style lang="scss" scoped>
.sub_title_wrap {
  margin: 60px 0 24px;

  h3 {
    color: #000;
  }

  &.type_cont {
    h3 {
      font-size: 22px;
    }
  }
}

.no_data {
  padding-top: 70px;
  margin: 0;
  border-top: 2px solid #000;

  h4 {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: normal;
  }

  p {
    margin-top: 0;
    margin-bottom: 50px;
    color: #666;
    font-size: 14px;
    text-align: center;
  }

  ul {
    width: 100%;
    padding: 30px;
    border: 1px solid #eee;
    background: #fcfcfd;
    display: flex;
    flex-direction: column;
    gap: 30px;

    li {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.25em;
    }
  }
}

p {
  margin: 20px 0;
}

.radio_wrap {
  display: flex;

  .input_wrap {
    flex: 0 0 100px;
  }
}

table {
  width: 100%;
  border-top: 2px solid #000;

  caption {
    font-size: 0;
    text-indent: -99999px;
  }

  tbody {
    tr {
      th {
        padding: 24px 30px;
        color: #333;
        font-size: 14px;
        font-weight: normal;
        text-align: left;
        border-bottom: 1px solid #f5f5f5;
        vertical-align: top;
      }

      td {
        padding: 20px 0;
        color: #000;
        font-size: 16px;
        border-bottom: 1px solid #f5f5f5;

        > .input_wrap {
          width: 210px;
        }

        .radio_wrap {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;

          .input_wrap {
            flex: 1;
          }
        }

        :deep(.label_wrap) {
          textarea {
            height: 120px;
          }
        }

        .text_count {
          color: #000;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}

.btn_wrap {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    width: 200px;
  }
}
</style>
