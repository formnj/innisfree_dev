<template>
  <div class="inner">
    <Tabs tabType="type_01" :item="[{ txt: 'Brand Story' }, { txt: 'Green Tea Heritage' }, { txt: 'Better For Earth' }]" :tabidx="0" />
    <section>
      <dl>
        <dt>
          <img src="/images/sam/brandStory_bg0101.png" alt="" />
        </dt>
        <dd>
          <h2>Effective, <br />Nature-Powered <br />Skincare Discovered <br />from the Island</h2>
          <p>
            무한한 자연의 힘을 담은 다채로운 식물과<br />
            생명력 가득한 토양을 품은 대지,<br />그리고 미지의 에너지로 가득한 청록의 바다
          </p>
        </dd>
      </dl>
      <div>
        <p>비디오 영역</p>
        <em>이 모든 것들이 자유롭게 살아 숨쉬는</em>
        <strong>THE NEW ISLE</strong>
      </div>
      <ul>
        <li>
          <img src="/images/sam/brandStory_bg0102.png" alt="" />
        </li>
        <li>
          <strong> Enjoy being you,<br />Be free <br />with INNISFREE </strong>
          <span>
            이니스프리와 함께<br />
            겉으로 보이는 아름다움을 넘어<br />
            당신의 모든 아름다운 찰나를 발견해보세요.
          </span>
        </li>
      </ul>
      <div class="link_box">
        <a class="list02" @click="$router.push('/publish/IN_MO_FOO_01_02')">
          <span>The Origin<br />Green Tea Heritage</span>
        </a>
        <a class="list03" @click="$router.push('/publish/IN_MO_FOO_01_03')">
          <span>Better for Earth</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name-search-cart'
})
const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  link: {
    type: String,
    default: '#none'
  }
})

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', 'ABOUT')
})
</script>

<style lang="scss" scoped>
.inner {
  padding: 2rem 2.1rem;
  :deep(.tab_wrap) {
    margin-left: -2.1rem;
    margin-right: -2.1rem;
    ul {
      &.type_01 {
        li {
          button {
            height: 5.1rem !important;
          }
        }
      }
    }
  }
}

section {
  margin-left: -2.1rem;
  margin-right: -2.1rem;
  > dl {
    margin-bottom: 10rem;
    dd {
      margin-top: -3.5rem;
      margin-left: 4rem;
      h2 {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 3.6rem;
      }
      p {
        margin: 1.5rem 0 0 0;
        padding: 0 0 8rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }
    &::after {
      content: '';
      width: 4rem;
      height: 4rem;
      margin-left: 4rem;
      background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
      background-position: -5.7rem -35rem;
      background-repeat: no-repeat;
      background-size: 25rem auto;
      display: block;
    }
  }
  > div {
    margin: 0 4rem 10rem 0;
    display: flex;
    flex-direction: column;
    p {
      width: 35rem;
      height: 18.7rem;
      color: #fff;
      background: #888;
    }
    em {
      margin-left: 4rem;
      color: #666;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2.2rem;
    }
    strong {
      margin-left: 4rem;
      color: #333;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;
    }
  }
  > ul {
    margin-bottom: 10rem;
    padding: 0 2.1rem;
    li {
      display: flex;
      flex-direction: column;
      img {
        margin-bottom: 3rem;
      }
      strong {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.4rem;
      }
      span {
        margin: 1rem 0 0 0;
        color: #666;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.2rem;
      }
    }
  }
}

.link_box {
  margin: 0;
  > * + * {
    margin-top: 0.3rem;
  }
  a {
    height: 15rem;
    padding: 0 2.1rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2rem;
    display: flex;
    align-items: center;
    position: relative;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background: #000000;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.25;
    }
    &.list02 {
      background: url('/images/sam/bg_page02.png') no-repeat center top / 100% auto;
    }
    &.list03 {
      background: url('/images/sam/bg_page03.png') no-repeat center top / 100% auto;
    }
    span {
      position: relative;
      z-index: 1;
    }
  }
}
:deep(footer) {
  margin-top: 10px !important;
}
</style>
