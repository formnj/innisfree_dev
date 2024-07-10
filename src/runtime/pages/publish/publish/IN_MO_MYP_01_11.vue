<template>
  <div class="inner">
    <article class="ord_addres_info">
      <div class="sub_title_wrap">
        <h4>주문/배송 정보</h4>
        <p class="explain">2024-05-03 17:41:36</p>
      </div>
      <ul>
        <li>
          <span>주문번호</span>
          <p>21288166</p>
        </li>
        <li>
          <span>주문자</span>
          <p>
            <span class="name">김이안</span>
            <em>010-2315-5704</em>
          </p>
        </li>
        <li>
          <span>배송지</span>
          <div>
            <span class="name">김이안</span>
            <em>010-2315-5704</em>
            <p>(22819) 인천광역시 서구 원적로7번길 20 하이팰리스 3차 302호</p>
          </div>
        </li>
        <li>
          <span>배송 메세지</span>
          <p>부재시 문앞에 놓아주세요.</p>
        </li>
      </ul>
    </article>
    <article class="ord_goods_info">
      <div class="sub_title_wrap">
        <div>
          <h4>주문 제품</h4>
        </div>
        <em>총 1건</em>
      </div>
      <dl class="active">
        <dt>
          <p>
            <strong>배송완료</strong>
          </p>
          <dl>
            <dt>
              <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
                <p>
                  <img src="/images/sam/36804_l_S_90.png" alt="" />
                </p>
              </a>
            </dt>
            <dd>
              <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
                <p>
                  비타C 그린티 엔자임 잡티 토닝 세럼 체험단
                  <em>1개</em>
                </p>
                <span>0</span>
              </a>
            </dd>
          </dl>
        </dt>
        <dd>
          <ul>
            <li>
              <p>일반결제금액</p>
              <span> <em>0</em>원 </span>
            </li>
            <li>
              <p>할인 금액</p>
              <span> <em>-0</em>원 </span>
            </li>
            <li>
              <p>뷰티포인트 사용</p>
              <span> <i>-0</i>P </span>
            </li>
            <li>
              <p>뷰티포인트 적립</p>
              <span> +0 P (기본 0P / 추가 0P) </span>
            </li>
          </ul>
        </dd>
      </dl>
      <div class="more_btns">
        <Button class="more_list active" @click="show($event)">
          <span>전체보기</span>
        </Button>
        <Button class="more_close" @click="hide($event)">
          <span>닫기</span>
        </Button>
      </div>
      <div class="btn_wrap">
        <Button txt="배송 조회" class="btn_outline" @click="modal.open('my_delivery', 'fullMo')" />
        <Button txt="교환 신청" class="btn_outline" />
        <Button txt="반품 신청" class="btn_outline" />
      </div>
    </article>
    <article class="ord_methodpay">
      <div class="sub_title_wrap">
        <div>
          <h4>결제수단</h4>
        </div>
      </div>
      <dl>
        <dt>네이버페이</dt>
        <dd>2,500원</dd>
      </dl>
    </article>
    <article class="ord_price">
      <div class="sub_title_wrap">
        <div>
          <h4>결제 금액</h4>
        </div>
      </div>
      <ul>
        <li>
          <p>총 주문 금액</p>
          <span><em>0</em>원</span>
        </li>
        <li>
          <p>할인 금액</p>
          <span><i>- 0원</i></span>
        </li>
        <li>
          <p>배송비</p>
          <span><em>2,500</em>원</span>
        </li>
        <li>
          <dl>
            <dt>최종 결제 금액</dt>
            <dd>
              <strong><em>2,500</em>원</strong>
              <p>
                <span>적립 예정 뷰티포인트</span>
                <em><i>0</i>P</em>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
      <ol class="bul_list dot">
        <li>뷰티포인트는 배송완료(또는 수취확인) 후 15일째 되는 날 적립됩니다.</li>
        <li>주문접수 상태의 주문은 주문일에서 3일간 보관되며, 이후 자동 취소처리 됩니다.</li>
        <li>결제완료 후 배송지 변경은 어렵습니다. 취소 후 변경 주소로 재 주문하여 주세요.</li>
        <li>
          상태에 따른 주문 취소 방법
          <p>[결제완료]: 마이페이지에서 취소신청이 가능합니다.</p>
          <p>[상품준비중]: 고객상담실을 통해 문의 시, 출고 확정 전인 경우만 취소가 가능합니다.</p>
        </li>
        <li>샘플마켓 제품은 고객센터(080-380-0114)문의를 통해 교환/반품이 가능합니다.</li>
      </ol>
    </article>
  </div>

  <!-- modal -->
  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송조회</h2>
        <Button class="btn_close" @click="modal.close(this)">닫기</Button>
      </div>
      <div class="modal_content">
        <dl>
          <dt>CJ대한통운</dt>
          <dd>운송장 번호 540189756906</dd>
        </dl>
        <ul>
          <li>
            <div class="bold">
              <strong>배송완료</strong>
              <em>서울 용산</em>
            </div>
            <span>2024-05-07 12:22:24</span>
          </li>
          <li>
            <div>
              <strong>간선하차</strong>
              <em>서울 용산</em>
            </div>
            <span>2024-05-07 12:22:24</span>
          </li>
          <li>
            <div>
              <strong>간선하차</strong>
              <em>서울 용산</em>
            </div>
            <span>2024-05-07 12:22:24</span>
          </li>
          <li>
            <div>
              <strong>간선하차</strong>
              <em>서울 용산</em>
            </div>
            <span>2024-05-07 12:22:24</span>
          </li>
          <li>
            <div>
              <strong>집화수리</strong>
              <em>수지직영</em>
            </div>
            <span>2024-05-07 12:22:24</span>
          </li>
        </ul>
      </div>
    </div>
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

const show = (event) => {
  let list = document.querySelector('.ord_goods_info > dl')
  let close_btn = document.querySelector('.more_btns .more_close')
  let more_list = document.querySelector('.more_btns .more_list')
  list.classList.remove('active')
  more_list.classList.remove('active')
  close_btn.classList.add('active')
}

const hide = (event) => {
  let list = document.querySelector('.ord_goods_info > dl')
  let more_list = document.querySelector('.more_btns .more_list')
  let close_btn = document.querySelector('.more_btns .more_close')
  close_btn.classList.remove('active')
  more_list.classList.add('active')
  list.classList.add('active')
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '주문내역')

  /**
   * 전체보기버튼을 누르면, dl의 active가 사라진고, 전체보기버튼이 none, 닫기버튼에 active가 추가된다
   * 닫기버튼을 누르면 닫기버튼에 active가 사라지고 전체보기버튼의 active가 추가, dl의 active가 추가된다.
   */
})
</script>

<style lang="scss" scoped>
i {
  font-style: normal;
}
.inner {
  padding: 0 2.1rem;
  article {
    padding-bottom: 2rem;
    border-bottom: 0.5rem solid #f5f5f5;
    &:last-of-type {
      border-bottom: 0;
    }
    .sub_title_wrap {
      .explain {
        margin-top: 0;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        justify-content: space-between;
      }
    }
    &.ord_addres_info {
      ul {
        gap: 1.5rem;
        li {
          justify-content: flex-start;
          > span {
            width: 7rem;
            margin-right: 2rem;
            color: #888888;
          }
          > div {
            word-break: break-all;
            flex: 1;
          }
          .name {
            &::after {
              content: '·';
              margin: 0 0.5rem;
            }
          }
        }
      }
    }
    &.ord_goods_info {
      .sub_title_wrap {
        justify-content: flex-start;
        align-items: center;
        h4 {
          margin-right: 1rem;
        }
        em {
          color: #888888;
          font-size: 1.3rem;
          font-weight: 600;
        }
      }
      > dl {
        padding-bottom: 4rem;
        border-bottom: 0.1rem solid #f5f5f5;
        position: relative;
        &.active {
          max-height: 20rem;
          overflow: hidden;
          border-bottom: 0;
        }
        &::after {
          content: '';
          width: 100%;
          height: 4rem;
          background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
          position: absolute;
          left: 0;
          bottom: 0;
          display: block;
        }
        dt {
          > p {
            margin-bottom: 1rem;
            color: #00bc70;
            font-size: 1.3rem;
            strong {
              font-weight: 400;
            }
          }
          dl {
            display: flex;
            dt {
              a {
                p {
                  width: 6.9rem;
                  height: 9.2rem;
                  position: relative;
                  &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    border-radius: 0.5rem;
                    background-color: rgba(34, 34, 34, 0.02);
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    overflow: hidden;
                  }
                }
              }
            }
            dd {
              margin-left: 1.5rem;
              flex: 1;
              a {
                height: 100%;
                display: flex;
                flex-direction: column;
                p {
                  display: flex;
                  flex-direction: column;
                  em {
                    margin-top: 0.5rem;
                    color: rgb(153, 153, 153);
                    font-size: 1.2rem;
                    display: inline-block;
                  }
                }
                span {
                  margin-top: 1.5rem;
                  margin-left: auto;
                  margin-right: 0;
                  font-size: 1.6rem;
                  font-weight: 600;
                }
              }
            }
          }
        }
        dd {
          ul {
            > * + * {
              margin-top: 0.8rem;
            }
            margin-top: 1rem;
            padding: 1.5rem;
            font-size: 1.2rem;
            background: #f5f5f5;
            border: 1px solid #eeeeee;
            li {
              p {
                color: #888888;
              }
            }
          }
        }
      }
      .more_btns {
        margin-top: 2rem;
        border-top: 0.1rem solid #eeeeee;
        border-bottom: 0.1rem solid #eeeeee;
        display: flex;
        flex-direction: column;
        justify-content: center;
        button {
          padding: 2rem;
          color: #999999;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
              content: '';
              width: 1.6rem;
              height: 1.6rem;
              margin-left: 0.5rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 25rem;
              display: inline-block;
            }
          }
          &.more_list {
            display: none;
            span {
              &::after {
                background-position: -0.5rem -32.7rem;
              }
            }
            &.active {
              display: block;
            }
          }
          &.more_close {
            display: none;
            &.active {
              display: block;
            }
            span {
              &::after {
                background-position: -0.5rem -32.7rem;
                transform: rotate(180deg);
              }
            }
          }
        }
      }
      .btn_wrap {
        width: 100%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem 0.4rem;
        .btn_outline {
          flex: 1;
        }
      }
    }
    &.ord_methodpay {
      > dl {
        margin-bottom: 3rem;
        color: #333;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        dd {
          color: #222;
        }
      }
    }
    &.ord_price {
      > ul {
        > * + * {
          margin-top: 1.5rem;
        }
        li {
          width: 100%;
          span {
            i {
              color: #ff0000;
              font-style: normal;
            }
          }
          dl {
            width: 100%;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 0.1rem solid #eeeeee;
            display: flex;
            justify-content: space-between;
            dt {
              color: #333;
              font-weight: 600;
            }
            dd {
              text-align: right;
              strong {
                em {
                  font-size: 2rem;
                  font-weight: 600;
                }
              }
              p {
                margin-top: 0.4rem;
                color: #999999;
                font-size: 1.2rem;
                em {
                  color: #009d5e;
                  font-weight: 400;
                  font-size: 1.2rem;
                  i {
                    margin: 0 0.3rem;
                    font-style: normal;
                  }
                }
              }
            }
          }
        }
      }
      ol {
        margin-top: 3rem;
        padding: 1.9rem;
        color: #888888;
        font-size: 1.2rem;
        background-color: #f5f5f5;
        border: 0.1rem solid #eeeeee;
        li {
          line-height: 1.33em;
        }
      }
    }
  }
}

.modal_wrap {
  &#my_delivery {
    .modal_container {
      .modal_content {
        padding-top: 2rem;
        dl {
          margin: 0 2rem;
          padding: 1.5rem;
          color: #333;
          font-size: 1.3rem;
          background-color: #f7f9fa;
          display: flex;
          align-items: center;
          dt {
            height: 100%;
            margin-right: 0.5rem;
          }
        }
        ul {
          margin: 3rem 2.8rem 0;
          overflow-y: hidden;
          position: relative;
          &::before {
            content: '';
            width: 0.2rem;
            height: auto;
            background: #eee;
            position: absolute;
            top: 0;
            left: 1.2rem;
            bottom: 5rem;
          }
          li {
            padding: 0 0 2.5rem 3.3rem;
            position: relative;
            &:last-of-type {
              margin-bottom: 0;
            }
            > * + * {
              margin-top: 0.5rem;
            }
            div {
              color: #333;
              font-size: 1.3rem;
              &::before {
                content: '';
                width: 1rem;
                height: 1rem;
                border: 0.2rem solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-sizing: border-box;
                position: absolute;
                left: 0.8rem;
                top: 0.1rem;
              }
              &.bold {
                color: #009d5e;
                &::before {
                  width: 1.8rem;
                  height: 1.8rem;
                  background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
                  background-repeat: no-repeat;
                  background-size: 25rem;
                  background-position: -0.4rem -30.6rem;
                  background-color: #00bc70;
                  border: 0.1rem solid #00bc70;
                  left: 0.4rem;
                  display: inline-block;
                }
              }

              strong {
                font-weight: 600;
              }
              em {
                margin: 0 0 0 0.5rem;
                padding: 0 0 0 0.6rem;
                font-weight: 400;
                position: relative;
                &::before {
                  content: '';
                  width: 0.1rem;
                  height: 1rem;
                  background: #ddd;
                  position: absolute;
                  top: 50%;
                  left: 0;
                  transform: translateY(-50%);
                }
              }
            }
            span {
              color: #aaa;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
