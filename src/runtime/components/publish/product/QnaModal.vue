<template>
  <div id="prod_qna_wrap" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>제품문의 작성</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <ul class="bul_list dot">
          <li>문의 내역 및 답변은 마이페이지 &gt; 내 상담내역 또는 답변확인에서 확인 가능합니다.</li>
          <li>제품 문의 처리 시간은 09:00~18:00 이며, 문의는 24시간 가능합니다.</li>
          <li>
            제품문의 본문에는 개인정보를 입력하지 말아주세요 고객정보 보호를 위해 마스킹 처리 될 수 있습니다. (예 : 성명, 연락처, 이메일
            주소, 계좌번호 등)
          </li>
        </ul>
        <div class="ipt_wrap">
          <Inputs _type="text" _placeholder="제목을 입력하세요. (최대 30자 이내)" />
          <Textarea class="ipt_textarea" _placeholder="내용을 입력하세요." />
          <div class="txt_cnt"><em>0</em> / 300자</div>
          <!-- 300자 초과시 em에 err 클래스 추가 -->
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="문의 등록" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>

<script setup>
import { modal } from '@inmModule/assets/js/common-ui'
</script>

<style lang="scss" scoped>
.modal_wrap {
  .modal_container {
    max-width: 480px;

    h2 {
      font-size: 20px;
    }

    .modal_content {
      padding: 30px 30px 0;

      .bul_list {
        li {
          color: #666;
        }
      }

      .ipt_wrap {
        position: relative;
        margin: 20px 0;
        & > * + * {
          margin-top: 7px;
        }

        :deep(label.input) {
          i,
          input[type='text'] {
            font-size: 14px;
          }
        }

        .ipt_textarea {
          padding-bottom: 30px;
          border: 1px solid #eee;

          :deep(label.input) {
            i {
              top: 14px;
              transform: none;
            }

            textarea {
              height: 130px;
              padding: 14px;
              border: 0;
            }
          }
        }

        .txt_cnt {
          position: absolute;
          bottom: 15px;
          right: 15px;
          font-weight: 500;
          color: #777;

          em {
            color: #000;
            font-weight: 600;

            &.err {
              color: #ff0000;
            }
          }
        }
      }
    }

    .modal_footer {
      padding: 0 30px 30px;

      button {
        width: 100%;
      }
    }
  }
}
</style>
