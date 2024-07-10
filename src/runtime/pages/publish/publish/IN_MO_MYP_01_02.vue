<template>
  <div class="mypage_wrap">
    <section>
      <div class="info_wrap">
        <h2><strong>주소희</strong>님<em>임직원</em></h2>
        <p>
          <a :href="path + 'IN_MO_MYP_01_04'"><em>그린티클럽</em> 멤버시네요! 멤버십 혜택을 확인해보세요.</a>
        </p>
        <ul>
          <li>
            <a href="#none">
              <h4>뷰티포인트</h4>
              <p>100,000 P</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <h4 class="point">보유쿠폰</h4>
              <p>4 장</p>
            </a>
          </li>
          <li>
            <a href="#none">
              <h4>공병수거 현황</h4>
              <p>10 개</p>
            </a>
          </li>
        </ul>
        <div class="review">
          <p>작성 가능한 리뷰 <em>4건</em></p>
          <span>+ 2,400P</span>
        </div>
      </div>
    </section>
    <section>
      <div class="list_wrap">
        <ul class="order_list">
          <li>
            <a href="#none">주문내역</a>
            <ul>
              <li>
                <a href="#none">
                  <span>0</span>
                  <p>주문접수</p>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>0</span>
                  <p>결제완료</p>
                </a>
              </li>
              <li class="valid">
                <a href="#none">
                  <span>1</span>
                  <p>제품<br />준비중</p>
                </a>
              </li>
              <li>
                <a href="#none">
                  <span>0</span>
                  <p>배송중</p>
                </a>
              </li>
              <li class="valid">
                <a href="#none">
                  <span>12</span>
                  <p>배송완료</p>
                </a>
              </li>
              <li class="valid">
                <a href="#none">
                  <span>17</span>
                  <p>구매확정</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li v-for="(item, idx) in mypage_list.slice(0, 9)" :key="idx">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
        <ul>
          <li v-for="(item, idx) in mypage_list.slice(9, 15)" :key="idx">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
        <ul>
          <li v-for="(item, idx) in mypage_list.slice(15, 19)" :key="idx">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
        <div class="customer_wrap">
          <h4><a href="#none">고객센터</a></h4>
          <a href="tel:0803800114" class="phone">
            080 · 380 · 0114
            <span>전화하기</span>
          </a>
          <ul>
            <li>평일 오전 9:00 ~ 오후 6:00</li>
            <li>수신자 요금부담</li>
          </ul>
        </div>
        <div class="mask"><span>INNISFREE</span></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { mypage_list } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-mypage'
})

const path = '/publish/'

const emit = defineEmits(['title', 'pageId'])

onMounted(() => {
  emit('title', '마이페이지')
  emit('pageId', 'IN_MO_MYP_01_02')

  const header = document.querySelector('header')
  const mypage_info_wrap = document.querySelector('.info_wrap')
  const doc_top_banner = document.querySelector('.docTopBanner')

  const mypage_scroll = () => {
    // 마이페이지 스크롤 이벤트
    if (window.scrollY >= mypage_info_wrap.clientHeight + doc_top_banner.clientHeight) {
      header.querySelector('.header_wrap').style.cssText = 'background-color: #fff'
    } else {
      header.querySelector('.header_wrap').style.cssText = 'background-color: #000'
    }
  }

  mypage_scroll()
  window.addEventListener('scroll', mypage_scroll)
})
</script>

<style lang="scss" scoped>
section {
  &:first-child {
    position: sticky;
    top: 5.8rem;
  }
  &:last-child {
    position: relative;
    z-index: 1;
  }

  .info_wrap {
    padding: 4rem 2.1rem 4rem;
    background-color: #000;

    > * {
      color: #fff;
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 3.2rem;
      font-weight: 300;
      line-height: 3.6rem;
      display: inline-block;
      position: relative;

      em {
        color: #00bc70;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.2rem;
        position: absolute;
        top: 0;
        right: -0.5rem;
        transform: translateX(100%);
      }
    }

    > p {
      margin-bottom: 4.3rem;
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.8rem;
      display: flex;
      align-items: center;

      &:after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        margin-top: -0.2rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem 0;
        background-size: 25rem auto;
        display: block;
      }

      em {
        color: #00bc70;
        font-weight: 400;
        text-decoration: underline;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        vertical-align: bottom;

        &:before {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          background: url('@inmModule/assets/images/common/icon_rank_gt.png') no-repeat 0 0;
          background-size: 100% 100%;
          display: inline-block;
        }
      }
    }

    ul {
      margin-bottom: 4rem;
      display: flex;
      justify-content: space-between;

      li {
        flex: 1;
        &:nth-of-type(n + 2) {
          padding-left: 2rem;
          border-left: 0.1rem solid #222;
        }

        h4 {
          color: #888;
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.6rem;
          display: inline-block;
          position: relative;

          &.point {
            &:after {
              content: '';
              width: 0.5rem;
              height: 0.5rem;
              background-color: #00bc70;
              border-radius: 50%;
              position: absolute;
              top: 0;
              right: -5px;
              transform: translateX(100%);
            }
          }
        }

        p {
          margin-bottom: 0;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 2rem;
        }
      }
    }

    .review {
      padding: 0.8rem 3.8rem 0.8rem 1.6rem;
      background-color: #00bc70;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      p {
        font-size: 1.4rem;
        line-height: 1.8rem;

        em {
          font-weight: 600;
          text-decoration: underline;
        }
      }

      span {
        padding: 0.4rem 0.8rem;
        font-size: 1.3rem;
        border: 0.1rem solid #fff;
        border-radius: 1.2rem;
      }

      &:after {
        content: '';
        width: 1.6rem;
        height: 1.6rem;
        background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem 0;
        background-size: 25rem auto;
        position: absolute;
        top: 50%;
        right: 1.6rem;
        transform: translateY(-50%);
      }
    }
  }

  .list_wrap {
    background-color: #fff;

    ul {
      border-bottom: 0.5rem solid #f5f5f5;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      gap: 1px;

      &:nth-of-type(n + 3) {
        border-bottom: 0;
      }

      &.order_list {
        li {
          > a {
            padding: 1.6rem 2.1rem;
            border-bottom: 0.1rem solid #f5f5f5;
          }

          ul {
            padding: 1.2rem;
            border: 0;
            background-color: unset;
            flex-direction: row;

            li {
              &:first-child {
                a {
                  border-left: 0;
                }
              }

              &.valid {
                a {
                  span {
                    color: #000;
                  }
                }
              }

              a {
                height: 100%;
                padding: 0;
                border-left: 0.1rem solid #f5f5f5;
                border-bottom: 0;
                display: flex;
                flex-direction: column;
                gap: 0.8rem;

                &:after {
                  content: unset;
                }

                span {
                  color: #999;
                  font-size: 2rem;
                  font-weight: 600;
                  line-height: 2.4rem;
                }

                p {
                  color: #aaa;
                  font-size: 1.2rem;
                  font-weight: 400;
                  line-height: 1.6rem;
                  text-align: center;
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
            }
          }
        }
      }

      li {
        background-color: #fff;
        flex: 1;

        a {
          padding: 2.1rem 2.6rem;
          color: #000;
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          &:after {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            display: inline-block;
            background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -8rem -2rem;
            background-size: 25rem auto;
          }
        }
      }
    }

    .customer_wrap {
      padding: 3rem 2.6rem 0;
      margin-bottom: 3rem;

      h4 {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        color: #00bc70;
        border-bottom: 0.1rem solid #f5f5f5;
        display: flex;
        justify-content: flex-start;
        gap: 0.5rem;

        &:after {
          content: '';
          width: 1.6rem;
          height: 1.6rem;
          display: inline-block;
          background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat -10rem -2rem;
          background-size: 25rem auto;
        }
      }

      .phone {
        padding: 0 0 1rem 0;
        color: #00bc70;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: 2.4rem;
        display: flex;
        justify-content: flex-start;
        gap: 1rem;

        &:after {
          content: unset;
        }

        span {
          padding: 0.6rem 0.8rem;
          color: #fff;
          font-size: 1rem;
          line-height: 1.2rem;
          border-radius: 1.7rem;
          background-color: #00bc70;
        }
      }

      > ul {
        background-color: unset;
        border: 0;
        li {
          padding: 0;
          color: #888;
          font-size: 1.2rem;
          line-height: 1.6rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          &:before {
            content: '';
            width: 1.6rem;
            height: 1.6rem;
            background: url('@inmModule/assets/mo_images/common/icon_split.png') no-repeat 0 0;
            background-size: 25rem auto;
            display: inline-block;
          }

          &:first-child {
            margin-bottom: 0.5rem;
            &:before {
              background-position: -17rem -16rem;
            }
          }
          &:last-child {
            &:before {
              background-position: -21rem 0;
            }
          }
        }
      }
    }

    .mask {
      height: 4.3rem;
      margin: 0 2.1rem;
      background: url('@inmModule/assets/images/common/logo_mypage.png') no-repeat 0 0.1rem / 100% 100%;

      span {
        font-size: 0;
      }
    }
  }
}
</style>
