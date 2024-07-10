<template>
  <section class="combi">
    <h2>
      <a href="#none"
        >23년 공식몰 어워즈<br />
        이 제품 아직 안샀눈사람~
      </a>
      <span class="date">18:21:01</span>
    </h2>
    <ul class="goods_list col_3">
      <li v-for="(item, idx) in sample_goods.slice(0, 6)" :key="idx">
        <GoodsItem class="type_cart" :item="item" :link="item.link" :useScore="false" />
      </li>
    </ul>
  </section>
</template>
<script setup>
import { sample_goods } from '@inmModule/test/data/publish/dummyData'
</script>
<style lang="scss" scoped>
.combi {
  h2 {
    justify-content: space-between;
    .date {
      color: #ddd;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
  :deep(.goods_list) {
    margin-top: -2rem;
    margin-left: -0.3rem;
    gap: 0;
    & > li {
      width: 33.3333%;
      padding-top: 2rem;
      padding-left: 0.3rem;
      .goods_item {
        width: 100%;
      }
    }
  }
}
</style>
