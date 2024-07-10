<template>
  <div class="inner">
    <a href="#none" @click="modal.open('date_check', 'bottom')">최근 3개월</a>
    <p>
      <span>2024.05.03</span>
    </p>
    <div>
      <p>
        <strong>배송완료</strong>
        <em>21288166</em>
        <button @click="$router.push('/publish/IN_MO_MYP_01_11')">상세보기</button>
      </p>
      <dl>
        <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
          <dt>
            <p>
              <img src="/images/sam/36804_l_S_90.png" alt="" />
            </p>
          </dt>
        </a>
        <dd>
          <a @click="$router.push('/publish/IN_MO_MYP_01_11')">
            <p>비타C 그린티 엔자임 잡티 토닝 세럼 체험단</p>
            <div>
              <p><em>+0</em>P</p>
              <span>2,500</span>
            </div>
          </a>
        </dd>
      </dl>
    </div>
    <Button class="btn_outline" txt="배송조회" @click="modal.open('my_delivery', 'fullMo')" />
  </div>

  <!-- modal -->
  <div class="modal_wrap" id="my_delivery">
    <div class="modal_container">
      <div class="modal_header">
        <h2>배송조회</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
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

  <div class="modal_wrap" id="date_check">
    <div class="modal_container">
      <div class="modal_header">
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <span>조회기간</span>
        <Tabs tabType="type_05" :item="[{ txt: '3개월' }, { txt: '1년' }, { txt: '기간입력' }]" :tabidx="0" />
        <div class="date_wrap">
          <div class="date">
            <input type="date" id="dpSttlDt1" required="required" value="2024-03-24" />
            <div class="dataValue">2024-03-24</div>
            <em></em>
          </div>
          <div>~</div>
          <div class="date">
            <input type="date" id="dpSttlDt1" required="required" value="2024-03-24" />
            <div class="dataValue">2024-03-24</div>
            <em></em>
          </div>
        </div>
      </div>
      <div class="modal_footer">
        <Button txt="검색" class="btn_ confirm" />
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
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

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '주문내역')

  function date_tab() {
    let tab = document.querySelectorAll('.type_05 li')
    let footer_btn = document.querySelector('#date_check .modal_container .modal_footer')

    tab.forEach((a, i) => {
      a.addEventListener('click', () => {
        footer_btn.classList.remove('active')
      })
      tab[2].addEventListener('click', () => {
        footer_btn.classList.add('active')
      })
    })
  }
  date_tab()
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 0 2.1rem;
}

button {
  &.btn_outline {
    width: 100%;
    margin-top: 2rem;
  }
}

.inner {
  > a {
    padding: 1.7rem 0;
    font-size: 1.3rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    &::after {
      content: '';
      width: 1.6rem;
      height: 1.6rem;
      display: block;
      background-image: url('@inmModule/assets/images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 25rem;
      background-position: -13rem -6rem;
    }
  }
  > p {
    margin-left: -2.1rem;
    margin-right: -2.1rem;
    padding: 1.1rem 2.1rem;
    color: #888;
    background: #f5f5f5;
    span {
      font-size: 1.3rem;
    }
  }
  > div {
    > p {
      margin: 3rem 0 2rem;
      font-size: 1.2rem;
      position: relative;
      strong {
        margin-right: 1rem;
        font-size: 1.6rem;
        font-weight: 600;
      }
      em {
        color: #aaa;
        font-weight: 400;
      }
      button {
        font-size: 1.2rem;
        position: absolute;
        top: 50%;
        right: 0;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        &::after {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          margin-left: 0.5rem;
          display: inline-block;
          background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
          background-repeat: no-repeat;
          background-size: 25rem auto;
          background-position: 0px -7rem;
          transform: rotate(270deg);
        }
      }
    }
    > dl {
      display: flex;
      a {
        cursor: pointer;
      }
      dt {
        p {
          width: 6.9rem;
          height: 9.2rem;
          position: relative;
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            background-color: rgba(34, 34, 34, 0.02);
            border-radius: 0.5rem;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            z-index: 1;
          }
        }
      }
      dd {
        padding-left: 1.5rem;
        flex: 1;
        div {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          p {
            height: 100%;
            margin-right: 0.5rem;
            color: #009d5e;
            font-size: 1.2rem;
            white-space: normal;
            word-wrap: break-word;
            em {
            }
          }
          span {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
    }
  }
}

.modal_wrap {
  &#date_check {
    .modal_content {
      > span {
        color: #666;
        font-size: 1.3rem;
      }
      > .tab_wrap {
        margin-top: 1rem;
      }
      padding: 0 2rem 3.4rem;
    }
    .modal_footer {
      padding: 0;
      display: none;
      &.active {
        display: block;
      }
      .btn_ {
        width: 100%;
        padding: 3rem 0;
      }
    }
  }
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

.date_wrap {
  margin-top: 1.6rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .date {
    width: calc(50% - 1.35rem);
    height: 4rem;
    padding: 0 1.5rem;
    border: 0.1rem solid #eee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      opacity: 0;
      color: #000;
    }
    > em {
      width: 1.6rem;
      height: 1.6rem;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-repeat: no-repeat;
      background-size: 25rem;
      background-position: -19.6rem -13.5rem;
    }
  }
}
</style>
