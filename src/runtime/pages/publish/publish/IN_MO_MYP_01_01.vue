<template>
  <div class="mypage_wrap">
    <section>
      <div class="info_wrap">
        <h2><strong>로그인</strong>을 해주세요</h2>
        <p>주문 및 다양한 혜택 정보들을 확인할 수 있습니다.</p>
        <div class="btn_wrap">
          <Button class="btn_login confirm" txt="로그인" />
          <Button class="btn_benefit" txt="회원 가입하고 혜택 받기" />
        </div>
      </div>
    </section>
    <section>
      <div class="list_wrap">
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

const emit = defineEmits(['title', 'pageId'])

onMounted(() => {
  emit('title', '마이페이지')
  emit('pageId', 'IN_MO_MYP_01_01')

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
  .info_wrap {
    padding: 4rem 2.1rem 6rem;
    background-color: #000;

    > * {
      color: #fff;
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 3.2rem;
      font-weight: 300;
      line-height: 3.6rem;
    }

    p {
      margin-bottom: 4rem;
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.6rem;
    }

    .btn_wrap {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      :deep(.btn_benefit) {
        background-color: #fff;

        em {
          color: #666;
        }
      }
    }
  }

  .list_wrap {
    ul {
      border-bottom: 0.5rem solid #f5f5f5;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      gap: 1px;

      &:nth-of-type(n + 3) {
        border-bottom: 0;
      }

      li {
        background-color: #fff;
        flex: 1;
        padding: 2.1rem 2.6rem;

        a {
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
