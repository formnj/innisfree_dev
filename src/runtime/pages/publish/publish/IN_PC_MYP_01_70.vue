<template>
  <div class="inner">
    <InmButton @click="openModal">주소검색 버튼</InmButton>

    <!-- 주소검색 상세주소 입력시 footer: true 로 변경필요 -->
    <InmModal
      v-model="showModal"
      class="modal_address"
      :header="true"
      :footer="true"
      :overlay="true"
      :type="'alert'"
      :close-button="false"
      :dim-closeble="true">
      <template #header><h2>주소검색</h2></template>
      <div class="multi_form">
        <InmInputText :placeholder="`도로명, 건물명, 번지로 검색해 주세요.`"></InmInputText>
        <InmButton>검색</InmButton>
      </div>

      <!-- 주소검색 팝업: 검색어 입력 전 -->
      <div class="guide_wrap">
        <p>검색어 입력 가이드</p>
        <dl>
          <dt>도로명 + 건물번호</dt>
          <dd>예) 정자일로 95, 불정로 6</dd>
          <dt>동/읍/면/리 + 번지</dt>
          <dd>예) 정자동 178-4, 동면 만천리 1000</dd>
        </dl>
      </div>
      <!-- //주소검색 팝업: 검색어 입력 전 -->

      <!-- 주소검색 팝업: 검색 결과 X -->
      <div class="guide_wrap">
        <p>조회 결과가 없습니다.</p>
        <dl>
          <dt>도로명 + 건물번호</dt>
          <dd>예) 정자일로 95, 불정로 6</dd>
          <dt>동/읍/면/리 + 번지</dt>
          <dd>예) 정자동 178-4, 동면 만천리 1000</dd>
        </dl>
      </div>
      <!-- //주소검색 팝업: 검색 결과 X -->

      <!-- 주소검색 팝업: 검색어 입력 후 -->
      <div class="addr_list_wrap">
        <p>
          목록 <span>(총 <em>45</em>건)</span>
        </p>
        <ul>
          <li v-for="(item, idx) in address_list" :key="idx">
            <div class="addr">
              <h4>{{ item.tit }}</h4>
              <p>{{ item.text }}</p>
              <span>{{ item.num }}</span>
            </div>
            <button>선택</button>
          </li>
        </ul>

        <div class="paging">
          <div>
            <a href="#none" class="first">처음으로</a>
            <a href="#none">1</a>
            <a href="#none">2</a>
            <a href="#none" class="active">3</a>
            <a href="#none">4</a>
            <a href="#none">5</a>
            <a href="#none" class="last">마지막으로</a>
          </div>
        </div>
      </div>
      <!-- //주소검색 팝업: 검색어 입력 후 -->

      <div class="addr_detail_list">
        <InmInputText :placeholder="'서울특별시 용산구 한강대로 100(한강로2가)'" :readonly="true"></InmInputText>
        <InmInputText :placeholder="'상세주소를 입력해 주세요.'"></InmInputText>
      </div>
    </InmModal>
  </div>
</template>

<script setup>
import { ref } from '#imports'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const address_list = [
  {
    tit: '서울특별시 용산구 한강대로 100(한강로2가)',
    text: '서울특별시 용산구 한강로2가 424 아모레퍼시픽',
    num: 57035
  },
  {
    tit: '서울특별시 용산구 한강대로 100(한강로2가)',
    text: '서울특별시 용산구 한강로2가 424 아모레퍼시픽',
    num: 57035
  },
  {
    tit: '서울특별시 용산구 한강대로 100(한강로2가)',
    text: '서울특별시 용산구 한강로2가 424 아모레퍼시픽',
    num: 57035
  },
  {
    tit: '서울특별시 용산구 한강대로 100(한강로2가)',
    text: '서울특별시 용산구 한강로2가 424 아모레퍼시픽',
    num: 57035
  },
  {
    tit: '서울특별시 용산구 한강대로 100(한강로2가)',
    text: '서울특별시 용산구 한강로2가 424 아모레퍼시픽',
    num: 57035
  }
]
</script>

<style lang="scss" scoped>
:deep(.modal_wrap) {
  &.modal_address {
    .modal_container {
      width: 540px;

      .modal_content {
        padding: 0;

        .multi_form {
          padding: 20px;
          border-bottom: 1px solid #eee;

          .input {
            i {
              color: #999;
              font-size: 14px;
              line-height: 20px;
            }
            input {
              border-color: #000;
            }
          }
        }

        .guide_wrap {
          height: 335px;
          padding: 40px;
          background-color: #f5f5f5;

          > p {
            color: #000;
            font-size: 16px;
            font-weight: 600;
          }

          dl {
            margin-top: 20px;
            dt {
              color: #000;
              line-height: 18px;

              & ~ dt {
                margin-top: 20px;
              }
            }
            dd {
              margin-top: 5px;
              color: #888;
            }
          }
        }

        .addr_list_wrap {
          padding: 20px;

          > p {
            color: #000;
            font-weight: 600;

            span {
              font-weight: 400;

              em {
                color: #00bc70;
              }
            }
          }

          > ul {
            margin-top: 10px;
            li {
              padding: 20px;
              border: 1px solid #eee;
              display: flex;
              justify-content: space-between;

              & + li {
                border-top: 0;
              }

              .addr {
                display: flex;
                flex-direction: column;
                gap: 5px;

                h4 {
                  font-weight: 600;
                  color: #000;
                }

                p {
                  color: #666;
                }

                span {
                  color: #000;
                }
              }

              > button {
                height: 24px;
                padding: 6px 8px;
                color: #000;
                font-size: 10px;
                font-weight: 600;
                border: 1px solid #000;
                border-radius: 1px;
              }
            }
          }

          .paging {
            margin-top: 20px;
          }
        }

        .addr_detail_list {
          height: 335px;
          padding: 20px;

          .label_wrap {
            i {
              font-size: 14px;
            }

            &:first-child {
              .input {
                input {
                  margin-bottom: 10px;
                  background-color: #f5f5f5;
                  border: 1px solid #ddd;
                }
              }
            }

            &:last-child {
              .input {
                i {
                  color: #999;
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
