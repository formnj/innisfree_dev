<template>
  <div id="modal_review_report" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>신고</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <h3>무엇을 신고하시겠습니까? <span>(중복 선택 가능)</span></h3>
        <Inputs _type="checkbox" _text="게시글" _name="type" />
        <Inputs _type="checkbox" _text="사용자" _name="type" />

        <h3>신고 사유를 선택해주세요 <span>(택1)</span></h3>
        <Inputs _type="radio" _text="상품과 관련없음" _name="cont" />
        <Inputs _type="radio" _text="음란, 욕설, 비방, 성희롱" _name="cont" />
        <Inputs _type="radio" _text="상업적 홍보 및 광고" _name="cont" />
        <Inputs _type="radio" _text="개인정보 유출 위험" _name="cont" />
        <Inputs _type="radio" _text="게시글 도배" _name="cont" />
        <Inputs _type="radio" _text="저작권 침해 (타인 리뷰, 사진 등)" _name="cont" />
        <Inputs _type="radio" _text="타인 사칭, 계정 도용한 사용자" _name="cont" />
        <Inputs _type="radio" _text="비매너 사용자" _name="cont" />
        <Inputs _type="radio" _text="기타" _name="cont" />
        <div class="ipt_row">
          <Textarea _placeholder="내용을 입력해주세요." />
          <span class="txt_cnt"><em>0</em> / 300</span>
        </div>

        <ul class="bul_list star">
          <li>신고가 접수 되면 운영자가 신고내용을 검토하여, 신고가 적절한 경우 게시글 삭제 등 적절한 조치를 취할 수 있습니다.</li>
        </ul>
        <Inputs _type="checkbox" _text="사용자의 글 모두 보지 않기 (선택사항)" _name="agree" />
      </div>
      <div class="modal_footer">
        <Button class="btn_big" txt="취소" />
        <Button class="btn_big confirm" txt="저장" @click="modal.open('alert_report', 'alert')" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <!-- 신고 완료 -->
  <div id="alert_report" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
        <p class="tit">알림</p>
        <p class="txt">신고가 접수되었습니다.</p>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //신고 완료 -->
</template>
<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
</script>
<style lang="scss" scoped>
.modal_review_report {
  .modal_header {
    padding: 3rem 2rem 0;
    border-bottom: 0;

    h2 {
      font-size: 1.8rem;
    }
  }
  .modal_content {
    padding: 0 2rem 3rem;

    h3 {
      margin: 3rem 0 1.5rem;
      font-size: 1.6rem;
    }

    .input_wrap {
      & + .input_wrap {
        margin-top: 1.5rem;
      }
    }

    .ipt_row {
      margin: 1.5rem 0 3rem;
      position: relative;

      .txt_cnt {
        font-size: 1rem;
        color: #333;
        position: absolute;
        bottom: 1rem;
        left: 1.5rem;
      }
    }

    .label_wrap {
      :deep(label.input) {
        i {
          top: 2rem;
        }

        textarea {
          padding: 10px 15px 22px;
          height: 7.7rem;
          font-size: 1.3rem;
        }
      }
    }

    .bul_list {
      margin-bottom: 1.5rem;
      li {
        color: #999;
      }
    }
  }
}

/* alert 모달 스타일 */
.modal_wrap.alert {
  .modal_content {
    .tit {
      font-size: 1.8rem;
      font-weight: 600;
      color: #000;
      line-height: 2.4rem;
    }

    .txt {
      margin-top: 1rem;
      font-size: 1.3rem;
      font-weight: 400;
      color: #666;
      line-height: 2rem;
    }
  }
}
</style>
