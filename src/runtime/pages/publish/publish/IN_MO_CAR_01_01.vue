<template>
  <div class="list_wrap">
    <!-- no data -->
    <ul class="cart_list">
      <li>
        <p class="no_data">
          <strong>장바구니에 담긴 제품이 없습니다.</strong>
          <span>하단의 특가혜택 제품들을 살펴보세요.</span>
        </p>
      </li>
    </ul>
    <!-- //no data -->
  </div>

  <!-- custom banner -->
  <div class="custom_banner">
    <a href="#none">
      <img src="/images/sam/bg_cart_banner.png" alt="" />
      <div class="text">
        <div class="t1" style="color: #fff">토스페이 전용카드로 혜택을~</div>
        <div class="t2" style="color: #fff">5,000원 결제일 캐시백!!</div>
      </div>
    </a>
  </div>
  <!-- //custom banner -->

  <section>
    <div class="title_wrap">
      <h3>이니스프리 혜택모음</h3>
    </div>
    <div class="list_wrap">
      <ul class="goods_list">
        <li v-for="(item, idx) in sample_goods" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" modal_type="bottom" />
        </li>
        <li v-for="(item, idx) in sample_goods.slice(0, 8)" :key="idx">
          <GoodsItem :item="item" :link="item.link" :useGiveaway="true" modal_type="bottom" />
        </li>
      </ul>
    </div>
    <a hef="IN_MO_HOM_01_04" class="btn_list_btm">더 많은 특가 혜택 확인하기</a>
  </section>

  <!-- 증정품 모달 -->
  <div id="modal_gift" class="modal_wrap">
    <div class="modal_container">
      <div class="modal_header">
        <h2>증정품안내</h2>
        <button class="btn_close" @click="modal.close(this)">닫기</button>
      </div>
      <div class="modal_content">
        <div class="giveaway_list">
          <dl>
            <dt>
              <img src="/images/sam/giveaway_01.png" />
            </dt>
            <dd>
              <p>제주 루트 에너지 마스크[당근] 5매 세트</p>
              <em>24.3.25 ~ 24.3.31</em>
              <span>1개 구매시 1개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_02.png" />
            </dt>
            <dd>
              <p>비타C 세럼 럭키 박스 (30ml + 랜덤기프트)</p>
              <em>23.4.11</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="/images/sam/giveaway_03.png" />
            </dt>
            <dd>
              <p>레티놀 시카 앰플 포커싱 패치 1ea / 9patches</p>
              <em>24.2.29 ~ 24.3.31</em>
              <span>1개 구매시 n개 증정</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="overlay" @click="modal.close(this)"></div>
  </div>
  <!-- //증정품 모달 -->
</template>

<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
import { modal } from '@inmModule/assets/js/common-ui'
import { definePageMeta, ref, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-mo-name'
})

const promotion_table = ref(false)

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '장바구니')
})
</script>

<style lang="scss" scoped>
section {
  padding: 0 2.1rem 3rem;
}

.btn_list_btm {
  width: 100%;
  height: 4rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  line-height: 3.8rem;
  text-align: center;
  color: #666;
  border: 1px solid #eee;
  display: block;
}

.custom_banner {
  a {
    width: 100%;
    display: block;
    position: relative;

    .text {
      position: absolute;
      left: 2rem;
      top: 50%;
      transform: translateY(-50%);

      .t1 {
        font-size: 1.6rem;
      }

      .t2 {
        padding-top: 0.2rem;
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }
}
</style>
