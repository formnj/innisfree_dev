<template>
  <div class="inner">
    <InmButton @click="openModal">휴대전화 번호 변경 버튼</InmButton>

    <InmModal
      v-model="showModal"
      class="modal_phone"
      :header="true"
      :footer="true"
      :overlay="true"
      :type="'alert'"
      :close-button="false"
      :dim-closeble="true"
      :ok-button-text="'인증완료'">
      <template #header><h2>휴대전화 번호 변경</h2></template>
      <p>인증 받으실 휴대전화 번호를 입력하세요.</p>
      <div class="table">
        <table>
          <caption>
            휴대전화번호 변경
          </caption>
          <colgroup>
            <col style="width: 170px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>변경할 휴대전화 입력</th>
              <td>
                <div class="input_list">
                  <Selectbox
                    :_placeholder="'010'"
                    :options="[
                      { val: 'value', txt: '010' },
                      { val: 'value', txt: '011' },
                      { val: 'value', txt: '016' },
                      { val: 'value', txt: '017' },
                      { val: 'value', txt: '018' }
                    ]" />
                  <span>-</span>
                  <Inputs _type="text" />
                  <span>-</span>
                  <div class="multi_form">
                    <Inputs _type="text" />
                    <Button class="btn_outline" txt="인증" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>인증번호입력</th>
              <td><Inputs _type="text" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>인증완료 후 변경된 휴대전화 번호를 저장하시려면 인증완료 버튼을 반드시 눌러주시기 바랍니다.</p>
    </InmModal>
  </div>
</template>

<script setup>
import { ref } from '#imports'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
</script>

<style lang="scss" scoped>
.table {
  margin-top: -1px;
  border-top: 2px solid #000;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    caption {
      font-size: 0;
      text-indent: -9999px;
    }
    thead {
      tr {
        th {
          padding: 15px 20px;
          color: #000;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          border-left: 1px solid #eee;
          background: #f5f5f5;
          &:first-child {
            border-left: 0;
          }
        }
      }
    }
    tbody {
      tr {
        th {
          padding: 15px 20px;
          font-size: 14px;
          font-weight: 400;
          border-bottom: 1px solid #eee;
          text-align: left;
        }
        td {
          padding: 21px 20px;
          color: #333;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
          strong {
            font-size: 19px;
            line-height: 1.5;
            text-decoration: underline;
          }
          &:first-child {
            border-left: 0;
          }
        }
      }
    }
  }
}

:deep(.modal_wrap) {
  &.modal_phone {
    .modal_container {
      width: 800px;
      overflow: visible;

      .modal_content {
        overflow: visible;
        > p {
          font-size: 16px;

          &:last-child {
            text-align: center;
          }
        }

        .table {
          padding: 30px 0;
          margin: 15px 0;
          border-top-width: 1px;
          border-bottom: 1px solid #000;

          tr {
            &:last-child {
              td {
                padding-top: 15px;
              }
            }
            th {
              border: 0;
            }
            td {
              padding: 0;
              border: 0;
              .input_list {
                display: flex;
                align-items: center;
                gap: 5px;

                .select,
                .input_wrap {
                  flex: 0 0 150px;
                }
              }

              .select {
                select {
                  color: #000;
                }
              }
              .input_wrap {
                input {
                  color: #000;
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
