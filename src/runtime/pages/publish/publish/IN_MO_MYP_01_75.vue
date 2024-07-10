<template>
  <div class="no_content">
    <ul>
      <li>
        이니스프리 공식 온라인몰 이용 시<br />
        불편한 사항이 있으셨나요?
      </li>
      <li>의견을 남겨주시면 나은 서비스 제공을 위해 운영에 참고하겠습니다. 회원 탈퇴 전, 하기 사항들을 확인해주세요.</li>
    </ul>

    <div class="list_box">
      <dl>
        <dt><em>1.</em>이니스프리 공식 온라인몰에서 탈퇴 시, 다음의 정보는<br />삭제될 수 있습니다.</dt>
        <dd>이니스프리 공식 온라인몰에서 발행한 쿠폰</dd>
        <dd>리뷰 프로필, 리뷰 작성 내역, 리뷰관 활동 내역</dd>
        <dd>1:1 문의 내역 등</dd>
        <dt><em>2.</em>이니스프리 공식 온라인몰에서 탈퇴하더라고 즉시<br />재이용할 수 있습니다.</dt>
        <dd>뷰티포인트 통합 아이디로 로그인 및 이니스프리 서비스 이용약관 동의</dd>
        <dd>뷰티포인트 통합 아이디로 공식 온라인몰을 이용하셨던 경우, 재가입 시점에 따라 1에서 언급한 정보가 유지될 수 있습니다.</dd>
      </dl>
    </div>
  </div>

  <div class="inner">
    <section>
      <div class="sub_title_wrap">
        <h4>이니스프리 온라인 회원탈퇴</h4>
        <p class="explain">비밀번호 재확인</p>
      </div>
      <Inputs _type="password" _placeholder="비밀번호 입력" />
    </section>
    <section>
      <div class="sub_title_wrap">
        <h4>탈퇴사유</h4>
      </div>
      <div class="radio_wrap">
        <Inputs _type="radio" _name="secession_input" _text="재가입을 위해서" />
        <Inputs _type="radio" _name="secession_input" _text="사이트 이용이 불편해서" />
        <Inputs _type="radio" _name="secession_input" _text="정보가 별로 없어서" />
        <Inputs _type="radio" _name="secession_input" _text="서비스 장애 및 지연이 자주 발생해서" />
        <Inputs _type="radio" _name="secession_input" _text="개인정보 유출이 우려되어서" />
        <Inputs _type="radio" _name="secession_input" _text="기타" />
      </div>
    </section>
    <section>
      <div class="sub_title_wrap">
        <h4>뷰티포인트 통합 회원 탈퇴 여부</h4>
        <p class="explain">
          이니스프리 공식 온라인몰에서 회원 탈퇴를 하더라도 통합 회원 정보는 유지됩니다.<br />
          뷰티 포인트 통합 회원도 탈퇴하시겠습니까?
        </p>
      </div>
      <div class="radio_wrap">
        <Inputs _type="radio" _name="input_check" _text="예" />
        <Inputs _type="radio" _name="input_check" _text="아니오" />
      </div>
      <div class="btn_wrap">
        <Button class="btn_" txt="취소" />
        <Button class="btn_ confirm" txt="회원탈퇴" />
      </div>
    </section>
  </div>
</template>
<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '회원 탈퇴')
})
</script>
<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

.no_content {
  padding: 5rem 1.6rem 4.6rem;

  ul {
    li {
      text-align: center;
      &:first-child {
        margin-bottom: 1rem;
        color: #999;
        font-size: 1.7rem;
        font-weight: normal;
        line-height: 1.47;
      }
      &:last-child {
        padding: 0 1.2rem;
        color: #777;
        font-size: 1.3rem;
        font-weight: normal;
        line-height: 1.46;
      }
    }
  }

  .list_box {
    padding: 2.3rem 2rem 2.2rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    background-color: #f4f4f4;

    dl {
      * {
        text-align: left;
      }

      dt {
        padding-left: 1.3rem;
        margin: 1.3rem 0 0.6rem;
        color: #999;
        font-size: 1.3rem;
        font-weight: 400;
        position: relative;

        &:first-child {
          margin-top: 0;
        }

        em {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      dd {
        padding-left: 0.7rem;
        margin-bottom: 0.4rem;
        color: #777;
        font-size: 1.2rem;
        font-weight: 400;
        position: relative;

        &:before {
          content: '';
          width: 0.2rem;
          height: 0.2rem;
          background: #999;
          border-radius: 0.1rem;
          position: absolute;
          top: 0.7rem;
          left: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

section {
  margin-bottom: 2.8rem;

  &:first-child {
    .sub_title_wrap {
      margin-top: 0;
    }
  }

  &:last-child {
    .radio_wrap {
      margin-bottom: 2.6rem;
      flex-direction: row;
      gap: 0;

      .input_wrap {
        flex: 0 0 7.5rem;
      }
    }
  }
}

.sub_title_wrap {
  margin-bottom: 2rem;
  flex-direction: column;

  h4,
  p.explain {
    color: #999;
  }

  .explain {
    margin: 1.2rem 0 0;
  }
}

.radio_wrap {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.btn_wrap {
  display: flex;

  > * {
    flex: 1;
  }
}
</style>
