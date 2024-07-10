<template>
  <section>
    <div>
      <div class="sub_title_wrap">
        <h4>약관 동의</h4>
      </div>
      <div class="chk_privacy">
        <ul>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="개인정보 수집/이용 동의 (마케팅) (선택)"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
            <button type="button" @click="modal.open('modal_privacy', 'fullMo modal_privacy')">자세히보기</button>
          </li>
          <li>
            <InmInputCheckbox
              v-model="value"
              text="광고성 정보 수신 여부 (선택)"
              true-value="Y"
              false-value="N"
              :is-switch="false"
              :disabled="false" />
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div class="default">
      <div class="sub_title_wrap">
        <h4>추가정보 (선택)</h4>
      </div>
      <ul>
        <li class="line">
          <dl class="type_input">
            <dt>이메일</dt>
          </dl>
          <Inputs _type="text" />
        </li>
        <li>
          <dl class="type_input">
            <dt>주소</dt>
          </dl>
          <div class="addr_wrap">
            <Inputs _type="text" isDisabled="true" />
            <Button class="btn_outline" txt="주소검색" @click="modal.open('modal_address', 'fullMo modal_address')" />
            <Button class="btn_outline" txt="초기화" />
          </div>
          <Inputs _type="text" isDisabled="true" />
          <Inputs _type="text" />
        </li>
      </ul>
      <div class="list_wrap">
        <ul class="bul_list star">
          <li>배송지 정보와 연동되지 않습니다.</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div class="pet">
      <div class="sub_title_wrap">
        <h4>※ 반려 정보</h4>
      </div>
      <ul>
        <li>
          <span class="thumb"><img src="/public/images/sam/temp_pet_nail.png" alt="" /></span>
          <p class="desc">
            이니스프리는 PET케어 제품을 지속적으로 연구개발 하고 있습니다. 아래 정보를 입력해주시면, PET케어 이벤트 진행시 우선적으로 혜택을
            제공해드립니다.
          </p>
          <div class="chk_pet">
            <p>· 현재 사랑하는 반려동물(강아지, 고양이)과 함께 살고 있나요?</p>
            <Inputs class="love" _type="radio" _name="pets" _text="네" />
            <Inputs _type="radio" _name="pets" _text="아니오" />
          </div>
        </li>
        <li>
          <div class="chk_privacy">
            <ul>
              <li>
                <Inputs _type="checkbox" _text="반려동물 정보 수집 및 이용 동의(선택)" />
                <button type="button" @click="modal.open('modal_pet', 'alert modal_pet')">자세히보기</button>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="pet_info">
            <ul>
              <li>
                <p>· 반려동물의 이름을 알려주세요!</p>
                <Inputs _type="text" _value="이름 입력" isDisabled="true" />
              </li>
              <li>
                <p>· 반려동물의 생일은 언제인가요?</p>
                <Inputs _type="text" _value="생일 입력 (예:20240101)" isDisabled="true" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="btn_wrap">
      <Button class="btn_mid confirm" txt="저장" />
      <Button class="btn_mid" txt="취소" />
    </div>
  </section>

  <div id="modal_privacy" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>개인정보 수집·이용 동의 (마케팅) (선택)</h2>
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div class="cont">
          <p>회사는 이용자의 회원서비스 제공을 위하여 아래와 같이 개인정보를 수집 및 이용합니다.</p>
          <div class="table">
            <table>
              <caption></caption>
              <colgroup>
                <col style="width: 25%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>수집항목</th>
                  <td>휴대전화 번호</td>
                </tr>
                <tr>
                  <th>수집이용/<br />목적</th>
                  <td>
                    본인 동의 시 회사 또는 제휴사의<br />
                    서비스/사업 및 정책/기타 이벤트에 관한<br />
                    정보 제공 및 그에 따른 경품 등 물품 배송
                  </td>
                </tr>
                <tr>
                  <th>이용/<br />보유기간</th>
                  <td><span>동의 철회 또는 회원 탈퇴 시 까지</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>※ 귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 단, 거부할 경우 문의 서비스의 이용이 불가합니다.</span>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_pet" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <div class="cont">
          <button class="btn_close" @click="modal.close(this)"></button>
          <p>반려동물 정보 수집 및 이용동의 (선택)</p>
          <ul>
            <li>- 수집항목 : 반려동물 정보(이름, 생년월일)</li>
            <li>- 수집 및 이용목적 : 맞춤서비스 제공</li>
            <li>- 이용 및 보유기간 : <strong>동의 철회 또는 회원 탈퇴 시</strong> 까지</li>
          </ul>
          <span
            >* 귀하는 반려동물 정보 수집 및 이용에 대한 동의를 거부할 수 있습니다. 단, 거부할 경우 맞춤서비스 제공이 되지 않을 수
            있습니다.</span
          >
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_address" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>주소검색</h2>
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
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
                <Inputs _type="text" _placeholder="상세주소" :isError="false" _err_text="상세주소를 입력해주세요." />
              </div>
            </dd>
          </dl>
        </section>
        <!-- //올바른 키워드 입력 시 -->
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="완료" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
</template>
<script setup>
import { modal, setFilter } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})

const address_act = ref(false)

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '추가정보 입력')
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;

  & + section {
    border-top: 0.5rem solid #f5f5f5;
  }

  .sub_title_wrap {
    margin: 0 0 2rem;
    flex-wrap: wrap;
    h4 {
      width: 100%;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        margin-left: auto;
        color: #999;
        font-size: 1.3rem;
        text-decoration: underline;
      }
    }
  }

  :deep(.input_wrap) {
    .input {
      input {
        height: 4rem;

        &:disabled {
          color: #999;
          border-color: #ddd;
          background: #f4f4f4;
        }
      }
    }
  }

  > .default {
    > ul {
      > li {
        padding-top: 2.5rem;
        &:nth-child(-n + 4) {
          padding-top: 1.5rem;
        }
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          > .input_wrap {
            margin-top: 0.8rem;
          }
        }
        &.line {
          margin-top: 2rem;
          border-top: 1px solid #f5f5f5;
        }
        dl {
          display: flex;
          align-items: center;
          gap: 2rem;
          &.type_input {
            margin: 0 auto 1rem 0;
            justify-content: space-between;
          }
          dt {
            min-width: 7rem;
            color: #888;
            font-size: 1.4rem;
            line-height: 2.4rem;
          }
          dd {
            color: #333;
            font-size: 1.4rem;
            font-weight: 500;
            white-space: nowrap;
            :deep(button) {
              &.btn_change {
                height: auto;
                border: 0.1rem solid #999;
                em {
                  padding: 0.5rem 0.8rem;
                  color: #999;
                  font-size: 1rem;
                  font-weight: 600;
                  line-height: 1.2rem;
                }
              }
            }
          }
        }
        .addr_wrap {
          display: flex;
          :deep(button) {
            width: 8rem;
            em {
              padding: 0;
              color: #999;
              font-size: 1.3rem;
            }
            &:last-child {
              border-left: 0;
            }
          }
        }
      }
    }
  }

  .chk_privacy {
    margin-top: 2.2rem;
    ul {
      li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        :deep(.input_wrap) {
          flex: none;
          .check {
            .label {
              font-size: 1.4rem;
              font-weight: 300;
            }
          }
        }
        > button {
          color: #999;
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.8rem;
          white-space: noWrap;
          text-decoration: underline;
          text-underline-position: from-font;
        }
        > span {
          margin-left: 2.5rem;
          color: #999;
          font-size: 1.3rem;
        }

        & + li {
          padding-top: 2rem;
        }
      }
    }
  }

  .pet {
    > ul {
      > li {
        padding: 1.5rem 0;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          padding-top: 0;
          display: flex;
          flex-wrap: wrap;

          .thumb {
            width: 8rem;
            height: 8rem;
            margin-right: 2rem;
          }

          .desc {
            width: calc(100% - 10rem);
            color: #666;
            font-size: 1.3rem;
            line-height: 2rem;
          }

          .chk_pet {
            margin-top: 2rem;

            p {
              margin-bottom: 1rem;
              color: #000;
              font-size: 1.3rem;
              font-weight: 600;
              line-height: 2.2rem;
            }

            :deep(.input_wrap) {
              display: inline-block;
              margin-right: 2rem;
              &.love {
                &:after {
                  content: '♥';
                  margin-left: 5px;
                  color: #00bc70;
                  vertical-align: middle;
                }
              }
            }
          }
        }

        &:last-child {
          border: 0;
        }

        .chk_privacy {
          margin: 0;
          ul {
            li {
              padding-top: 0;
              border: 0;
            }
          }
        }

        .pet_info {
          ul {
            li {
              &:last-child {
                margin-top: 2rem;

                .input_wrap {
                  width: 20rem;
                }
              }

              p {
                color: #666;
                font-size: 1.4rem;
                letter-spacing: -0.014rem;
              }

              .input_wrap {
                margin-top: 1rem;
              }
            }
          }
        }
      }
    }
  }
}

.btn_wrap {
  margin: 2.4rem 0 0;
  display: flex;

  :deep(button) {
    flex: 1;
    em {
      font-size: 1.3rem;
    }
  }
}

.list_wrap {
  margin-top: 1rem;
  li {
    color: #888;
  }
}

.table {
  border-top: 0.1rem solid #999;
  position: relative;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    caption {
      position: absolute;
      z-index: -1;
      font-size: 0;
      text-indent: -99999px;
    }
    th {
      padding: 1.1rem 1rem;
      color: #666;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      text-align: left;
      border-bottom: 0.1rem solid #eee;
      border-left: 0.1rem solid #eee;
      background: #f5f5f5;
    }
    td {
      padding: 1.5rem 1rem;
      color: #000;
      font-size: 1.3rem;
      line-height: 1.6rem;
      text-align: left;
      border-left: 0.1rem solid #eee;
      border-bottom: 0.1rem solid #eee;
      span {
        color: #ff3131;
      }
    }
    th:first-child,
    td:first-child {
      border-left: 0;
    }
  }
  &.row {
    th,
    td {
      text-align: left;
    }
  }
}

.modal_wrap {
  .modal_container {
    .modal_content {
      .cont {
        .btn_close {
          width: 2.4rem;
          height: 2.4rem;
          font-size: 0;
          background-color: transparent;
          position: absolute;
          top: 1rem;
          right: 1rem;

          &:before,
          &:after {
            width: 100%;
            border-top: 2px solid #222;
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
          }

          &:before {
            transform: rotate(45deg);
          }

          &:after {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  &.modal_privacy {
    .modal_container {
      .modal_header {
        color: #999;
      }
      .modal_content {
        padding: 3rem 2rem;
        .cont {
          > p {
            color: #999;
            font-size: 1.4rem;
          }

          .table {
            margin-top: 2rem;
          }

          > span {
            margin-top: 1.6rem;
            color: #999;
            font-size: 1.3rem;
            display: inline-block;
          }
        }
      }
    }
  }

  &.modal_pet {
    .modal_container {
      .modal_content {
        .cont {
          > p {
            margin-bottom: 1rem;
            color: #000000;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.4rem;
            letter-spacing: -0.18rem;
          }

          ul {
            li {
              font-size: 1.3rem;
              line-height: 2rem;
              letter-spacing: -0.013rem;
              color: #666666;

              strong {
                font-weight: 600;
                font-size: 1.6rem;
                letter-spacing: -0.016rem;
                color: #666666;
                text-decoration: underline;
              }
            }
          }

          > span {
            margin-top: 0.8rem;
            color: #666666;
            font-size: 1.3rem;
            font-weight: 600;
            line-height: 2rem;
            letter-spacing: -0.013rem;
            display: block;
          }
        }
      }
    }
  }

  &.modal_address {
    .modal_content {
      section {
        padding: 0 2.1rem;

        &:nth-of-type(n + 2) {
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
        margin: 2rem 0 1.5rem;
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
            padding: 2.5rem 2rem 2rem;
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
}
</style>
