<template>
  <section>
    <div class="default">
      <div class="sub_title_wrap">
        <h4>기본정보</h4>
      </div>
      <ul>
        <li>
          <dl>
            <dt>이름</dt>
            <dd>김민수</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>아이디</dt>
            <dd>kkk*******</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>비밀번호</dt>
            <dd><Button class="btn_outline btn_sm btn_change" txt="변경하기" @click="modal.open('modal_pwd', 'fullMo modal_pwd')" /></dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>생년월일</dt>
            <dd>1234 년 12 월 12 일</dd>
          </dl>
        </li>
        <li class="line">
          <dl class="type_input">
            <dt>이메일</dt>
          </dl>
          <Inputs _type="text" _placeholder="abcdefg@naver.com" />
        </li>
        <li>
          <dl class="type_input">
            <dt>휴대전화</dt>
            <dd>
              <Button class="btn_outline btn_change btn_sm" txt="변경하기" @click="modal.open('modal_phone', 'fullMo modal_phone')" />
            </dd>
          </dl>
          <Inputs _type="text" _value="010-1234-1234" isDisabled="true" />
        </li>
        <li>
          <dl class="type_input">
            <dt>주소</dt>
          </dl>
          <div class="addr_wrap">
            <Inputs _type="text" _value="12345" isDisabled="true" />
            <Button class="btn_outline" txt="주소검색" @click="modal.open('modal_address', 'fullMo modal_address')" />
            <Button class="btn_outline" txt="초기화" />
          </div>
          <Inputs _type="text" _value="서울 용산구 한강대로30길 25" isDisabled="true" />
          <Inputs _type="text" _placeholder="123동 1234호" />
        </li>
      </ul>
      <div class="help_wrap">
        <ul>
          <li>배송지 정보와 연동되지 않습니다.</li>
        </ul>
      </div>
      <div class="chk_privacy">
        <ul>
          <li>
            <Inputs _type="checkbox" _text="개인정보 수집·이용 동의 (마케팅) (선택)" />
            <button type="button" @click="modal.open('modal_privacy', 'fullMo modal_privacy')">자세히보기</button>
            <span>(최근변경일시 : - )</span>
          </li>
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
  </section>

  <section>
    <div class="ad">
      <div class="sub_title_wrap">
        <h4>광고성정보 수신 여부</h4>
        <div class="explain">이니스프리의 쇼핑, 혜택, 이벤트 소식을 받아보세요.</div>
      </div>
      <div class="chk_privacy">
        <ul>
          <li>
            <Inputs _type="checkbox" _text="광고성정보 수신 동의(선택)" />
            <span>(최근변경일시 : 2024-03-28 11:11)</span>
          </li>
        </ul>
      </div>
      <div class="explain">
        *이니스프리 개인정보 수집이용 동의(마케팅)(선택), 광고성 정보<br />
        수신여부(선택) 온/오프라인 일괄 관리됩니다.
      </div>
    </div>
  </section>

  <section>
    <div class="sns">
      <div class="sub_title_wrap">
        <h4>SNS/Apple ID 계정 연동 관리</h4>
      </div>
      <ul>
        <li class="facebook">
          <div class="icon">페이스북</div>
          <div class="info"><Button class="btn_sm_outline" txt="연결 정보 없음" /></div>
        </li>
        <li class="kakao">
          <div class="icon">카카오톡</div>
          <div class="info connect">
            <div class="txt">연결됨</div>
            <Button class="btn_sm_outline" txt="연결 해제" @click="modal.open('modal_disconnect', 'alert modal_disconnect')" />
          </div>
        </li>
        <li class="naver">
          <div class="icon">네이버</div>
          <div class="info"><Button class="btn_sm_outline" txt="연결 정보 없음" /></div>
        </li>
        <li class="apple">
          <div class="icon">Apple</div>
          <div class="info connect">
            <div class="txt">연결됨</div>
            <Button class="btn_sm_outline" txt="연결 해제" @click="modal.open('modal_disconnect', 'alert modal_disconnect')" />
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section>
    <div class="secession">
      <div class="sub_title_wrap">
        <h4>
          회원탈퇴
          <button type="button" @click="$router.push('IN_MO_MYP_01_75')">탈퇴신청</button>
        </h4>
        <div class="explain">이니스프리 회원을 탈퇴하시겠습니까?</div>
      </div>
    </div>
  </section>

  <div class="explain_box">
    <ul>
      <li>약관안내 및 서비스 내용/주문/배송/회사의 주요 정책 관련 변경에 따른 매일은 정보 수신 거부와 상관없이 발송됩니다.</li>
      <li>이름 변경(개명)은 이니스프리 고객상담실(080-380-0114)로 문의 부탁 드립니다.</li>
    </ul>
  </div>

  <div class="btn_wrap"><Button class="btn_mid confirm" txt="수정완료" /></div>

  <div id="modal_pwd" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>뷰티포인트 통합 비밀번호 수정</h2>
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div class="cont">
          <p>
            <strong>개인정보 보호를 위해 비밀번호는 90일마다 변경해주세요.</strong>
            타인에게 비밀번호가 노출되지 않도록 주의해 주세요. 비밀번호 변경시, 뷰티포인트ID로 로그인 된 모든 서비스에서
            로그아웃됩니다.(자동 로그인 포함)
          </p>
          <ul class="input_list">
            <li>
              <p>현재 비밀번호</p>
              <Inputs _type="password" _placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)" />
            </li>
            <li>
              <p>새 비밀번호</p>
              <Inputs _type="password" _placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)" />
            </li>
            <li>
              <p>새 비밀번호 확인</p>
              <Inputs _type="password" _placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)" />
            </li>
          </ul>
          <div class="explain_box">
            <ul>
              <li>
                영문,소문자,숫자,특수문자중 최소 2가지 조합으로 8-16자<br />
                - 사용 가능한 특수문자: !”#$%&’()*+,-./:;<=>?@[ ]^_`{|}~<br />
                - 공백 사용 불가
              </li>
              <li>아이디와 동일한 비밀번호 사용 불가</li>
              <li>개인정보와 관련되거나 연속된 숫자, 반복된 문자는 사용하지 않도록 주의</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

  <div id="modal_phone" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>휴대전화 번호 변경</h2>
        <button class="btn_close" @click="modal.close(this)"></button>
      </div>
      <div class="modal_content">
        <div class="cont">
          <p>인증받으실 휴대전화 번호를 입력하세요.</p>
          <ul class="input_list">
            <li>
              <p>변경할 휴대전화 번호</p>
              <div class="multi_form">
                <Inputs _type="text" _placeholder="휴대폰 번호 입력 (“-”제외)" />
                <Button class="btn_outline" txt="인증" />
              </div>
            </li>
            <li>
              <p>인증번호 입력</p>
              <Inputs _type="text" _placeholder="인증번호를 입력해주세요" />
            </li>
          </ul>
          <div class="help_wrap">
            <ul>
              <li>인증완료 후 변경된 휴대전화 번호를 저장하시려면 인증완료 버튼을 반드시 눌러주시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>

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

  <div id="modal_disconnect" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_content">
        <div class="cont">
          <button class="btn_close" @click="modal.close(this)"></button>
          <p>
            <strong>간편 로그인 연결해제 완료 알림</strong>
            간편 로그인 연결이 해제 되었습니다. <br />로그인 화면에서 언제든지 다시<br />
            이용할 수 있습니다.
          </p>
        </div>
      </div>
      <div class="modal_footer">
        <Button class="btn_big confirm" txt="확인" @click="modal.close(this)" />
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

const desc_list = [
  {
    text: '* 이 페이지에서 회원정보 수정, 비밀번호 수정시 뷰티포인트 통합 아이디로 로그인하는 아모레퍼시픽 사이트의 정보가 함께 변경됩니다.'
  },
  {
    text: '개인정보 보호를 위해 비밀번호는 90일마다 변경해주세요.\n타인에게 비밀번호가 노출되지 않도록 주의해 주세요.\n비밀번호 변경시, 뷰티포인트ID로 로그인 된 모든 서비스에서 로그아웃됩니다.(자동 로그인 포함)'
  }
]

const members = ref(true)
const title = ref('회원 정보')
const desc = ref(desc_list[0].text)
const address_act = ref(false)

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '개인정보수정')

  document.querySelectorAll('#privacy_tab li').forEach((item, idx) => {
    item.addEventListener('click', () => {
      if (idx === 0) {
        members.value = true
        title.value = '회원 정보'
        desc.value = desc_list[idx].text
      }
      if (idx === 1) {
        members.value = false
        title.value = '비밀번호'
        desc.value = desc_list[idx].text
      }
    })
  })
})
</script>
<style lang="scss" scoped>
section {
  padding: 3rem 2.1rem;
  border-bottom: 0.5rem solid #f5f5f5;

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
    .explain {
      margin-top: 0.5rem;
      font-size: 1.3rem;
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
        padding-top: 2rem;
        border-top: 0.1rem solid #f4f4f4;
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

  .ad {
    > .explain {
      margin-top: 1.5rem;
      color: #999;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }

  .sns {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem 0;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
          width: 10.8rem;
          color: #999;
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 1.8rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;

          &:before {
            content: '';
            width: 4rem;
            height: 4rem;
            background: url('/_nuxt/assets/mo_images/common/icon_split.png') no-repeat -210px -210px;
            background-size: 25rem auto;
            display: inline-block;
          }
        }

        .info {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;

          &.connect {
            :deep(button) {
              border-color: #999;

              em {
                color: #999;
              }
            }
          }

          .txt {
            color: #999;
            font-size: 1.2rem;
            line-height: 1.6rem;
          }

          :deep(button) {
            margin-left: auto;
            border-color: #000;

            em {
              padding: 0 0.8rem;
              font-size: 1rem;
              font-weight: 600;
              line-height: 1.2rem;
            }
          }
        }

        &.kakao {
          .icon {
            &:before {
              background-position: -170px -210px;
            }
          }
        }

        &.naver {
          .icon {
            &:before {
              background-position: -170px -250px;
            }
          }
        }

        &.apple {
          .icon {
            &:before {
              background-position: -210px -250px;
            }
          }
        }
      }
    }
  }
}

.help_wrap {
  margin-top: 1rem;
  .none {
    li {
      padding-left: 0;
      &:before {
        content: none;
      }
    }
  }
  li {
    padding-left: 0.7rem;
    margin-top: 1rem;
    color: #888;
    font-size: 1.2rem;
    line-height: 1.35;
    position: relative;
    &:before {
      content: '*';
      position: absolute;
      top: 0;
      left: 0;
    }
    &:first-child {
      margin-top: 0;
    }
  }
}

.explain_box {
  margin: 3rem 2.1rem;
  padding: 2rem;
  border: 0.1rem solid #eee;
  background: #f5f5f5;
  > ul {
    li {
      margin-bottom: 1rem;
      padding-left: 0.7rem;
      color: #888;
      font-size: 1.2rem;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        content: '·';
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}

.btn_wrap {
  margin: 2.4rem 1.2rem 1.4rem;

  :deep(button) {
    width: 100%;

    em {
      font-size: 1.3rem;
    }
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

  &.modal_pwd {
    .modal_container {
      .modal_content {
        padding: 1.2rem 1rem 2rem 1rem;
        border-top: 0.1rem solid #dcdcdc;
        background: #f4f4f4;

        .cont {
          padding: 3rem 1.6rem 2.25rem;
          background: #fff;
          box-shadow: 0.2rem 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.07);

          > p {
            margin-bottom: 1.5rem;
            color: #222;
            font-size: 1.3rem;

            strong {
              font-weight: 600;
              line-height: 1.9rem;
              display: block;
            }
          }

          .input_list {
            li {
              margin-top: 2rem;
              &:first-child {
                margin-top: 0;
              }
              p {
                margin-bottom: 0.8rem;
                font-size: 1.3rem;
              }

              :deep(.input_wrap) {
                .input {
                  input {
                    height: 4rem;
                  }
                }
              }
            }
          }

          .explain_box {
            margin: 2.8rem 0 0;
            padding: 1.4rem 1.6rem;
            border-radius: 0.5rem;
            border: 0;
            background: #f4f4f4;

            ul {
              li {
                color: #777;
              }
            }
          }
        }
      }
      .modal_footer {
        padding: 0;
        :deep(button) {
          width: 100%;

          em {
            font-size: 1.7rem;
            font-weight: 400;
          }
        }
      }
    }
  }

  &.modal_phone {
    .modal_container {
      .modal_content {
        padding: 3.2rem 2.6rem 3rem;
        .cont {
          > p {
            margin-bottom: 2rem;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 2rem;
          }

          .input_list {
            li {
              &:last-child {
                margin-top: 2.5rem;
              }
              p {
                color: #666;
                font-size: 1.3rem;
                margin-bottom: 1rem;
              }
              .multi_form {
                gap: 0.4rem;

                :deep(button) {
                  width: 9rem;
                }
              }
              :deep(.input_wrap) {
                .input {
                  input {
                    height: 4rem;
                  }
                }
              }
            }
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

  &.modal_disconnect {
    .modal_container {
      .modal_content {
        padding: 3rem 2rem;
        .cont {
          > p {
            font-size: 1.3rem;

            strong {
              margin-bottom: 1rem;
              font-size: 1.8rem;
              font-weight: 600;
              display: block;
            }
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

          &.active {
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
