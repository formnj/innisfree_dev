<template>
  <div>
    <InmButton class="btn_outline" txt="주소검색" @click="openModal" />

    <!-- 주소검색 팝업 -->
    <InmModal
      v-model="showModal"
      class="modal_address"
      :header="true"
      :footer="true"
      :overlay="true"
      :type="'fullMo'"
      :close-button="false"
      :dim-closeble="true">
      <template #header><h2>주소검색</h2></template>
      <section>
        <!-- 검색 영역 -->
        <div class="search_wrap">
          <Inputs _placeholder="도로명, 건물명, 번지로 검색해 주세요" />
          <Icons class="btn_search" txt="검색" />
        </div>
        <!-- //검색 영역 -->
      </section>
      <!-- 잘못된 키워드 입력 시 -->
      <section>
        <h3>검색 결과가 없습니다.</h3>
        <ul>
          <li>도로명 + 건물번호&nbsp;&nbsp;<em>(예 : 한강대로 100)</em></li>
          <li>동/읍/면/리 + 번지&nbsp;&nbsp;<em>(예 : 아모레퍼시픽)</em></li>
          <li>건물명, 아파트명&nbsp;&nbsp;<em>(예 : 한강로2가)</em></li>
        </ul>
      </section>
      <!-- //잘못된 키워드 입력 시 -->

      <!-- 올바른 키워드 입력 시 -->
      <section class="answer">
        <dl>
          <dt>
            <h3>검색결과<em>2,103건</em></h3>
          </dt>
          <dd @click="setFilter($event), (address_act = !address_act)">
            <ul>
              <li>
                <Sticker :item="[{ txt: '도로명', type: 'type01' }]" />
                <span>서울특별시 용산구 한강대로 23</span>
              </li>
              <li>
                <Sticker :item="[{ txt: '지번', type: 'type01' }]" />
                <span>서울특별시 용산구 한강로3가 40-19</span>
              </li>
            </ul>
            <div v-if="address_act" class="list_cont">
              <InputValidation :is-error="true" err-text="상세주소를 입력해주세요">
                <Inputs _type="text" _placeholder="상세주소" :isError="false" _err_text="상세주소를 입력해주세요." />
              </InputValidation>
            </div>
          </dd>
        </dl>
      </section>
      <!-- //올바른 키워드 입력 시 -->
    </InmModal>
  </div>
</template>
<script setup>
import { setFilter } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const address_act = ref(false)

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
</script>
<style lang="scss" scoped>
.modal_address {
  .modal_content {
    section {
      padding: 0 2.1rem;

      &:first-child {
        padding: 2rem 2.1rem;
        border-bottom: 0.5rem solid #f5f5f5;
      }

      &:nth-child(2) {
        padding: 3rem 2.1rem;
        border-bottom: 0;
      }

      &.answer {
        padding: 3rem 0;

        dl {
          > dt {
            padding-left: 2.1rem;
            padding-right: 2.1rem;
          }
        }
      }
    }

    .search_wrap {
      height: 4rem;
      border: 0.1rem solid #eeeeee;
      overflow: hidden;
      display: flex;
      align-items: center;
      flex: 1;

      :deep(.input_wrap) {
        .input {
          i,
          input {
            font-size: 1.3rem;
          }
          i {
            left: 1.5rem;
          }
          input {
            height: 4rem;
            padding-left: 1.5rem;
            padding-right: 0.5rem;
            border: 0;
          }
        }
      }

      .btn_search {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 0.8rem;
        background-color: transparent;
        background-position: 0 -4rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1.8rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      li {
        color: #666;
        font-size: 1.3rem;

        em {
          color: #999;
        }
      }
    }

    dl {
      dt {
        em {
          margin-left: 1rem;
          color: #00bc70;
          font-size: 1.3rem;
        }
      }

      dd {
        padding: 2.5rem 0;
        border-top: 0.1rem solid #f5f5f5;
        display: flex;
        flex-direction: column;

        position: relative;

        &:last-child {
          border-bottom: 0.1rem solid #f5f5f5;
        }

        > ul {
          padding: 0 2.1rem 2rem;

          li {
            display: flex;
            gap: 1rem;

            :deep(.sticker) {
              em {
                width: 3.6rem;
                font-size: 1rem;
                text-align: center;
              }
            }

            span {
              color: #333;
            }
          }
        }

        .list_cont {
          background: #f5f5f5;
          padding: 3rem 2.1rem;

          :deep(.err_wrap) {
            i {
              left: 1.5rem;
            }
          }
        }
      }
    }
  }
  .modal_footer {
    padding: 0;

    button {
      flex: 1;
    }
  }
}
</style>
