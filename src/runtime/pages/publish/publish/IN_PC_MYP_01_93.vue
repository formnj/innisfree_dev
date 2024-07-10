<template>
  <div class="title_wrap" :data-layout="props.layoutType">
    <h2>고객센터</h2>
  </div>

  <div class="inner">
    <Tabs
      class="type_03"
      tabType="type_03"
      :item="[{ txt: 'FAQ' }, { txt: '공지사항' }, { txt: '1:1상담' }, { txt: '매장안내' }, { txt: '창업안내' }, { txt: '전자공고' }]"
      :tabidx="1" />
    <div class="sub_title_wrap">
      <div>
        <h3>Innisfree 전자공고</h3>
      </div>
    </div>
    <section>
      <div class="list_wrap">
        <ul>
          <li v-for="(item, idx) in public_ann" :key="idx">
            <div class="row">
              <p>{{ item.title }}</p>
              <a :href="item.url" target="_blank">
                <span>다운로드</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import { public_ann } from '@inmModule/test/data/publish/dummyData'
import { definePageMeta, onMounted } from '#imports'

definePageMeta({
  layout: 'publish-pc-category'
})

const props = defineProps({
  //default값이 'default'가 아니면 lnb 노출 없음
  layoutType: {
    type: String,
    default: 'default'
  }
})

onMounted(() => {})
</script>
<style lang="scss" scoped>
.list_wrap {
  ul {
    border-top: 2px solid #000;

    > li + li {
      border-color: #dcdcdc !important;
    }
    li {
      &:hover {
        .row {
          p {
            text-decoration: underline;
          }
          a {
            span {
              text-decoration: underline;
            }
            &::before {
              background-position: -91px -371px;
            }
          }
        }
      }
      .row {
        padding: 25px 33px 25px 31px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        p {
          color: #222;
        }
        a {
          color: #777;
          display: flex;
          align-items: center;
          &::before {
            content: '';
            width: 20px;
            height: 20px;
            margin-right: 10px;
            background-image: url('@inmModule/assets/images/common/icon_split.png');
            background-repeat: no-repeat;
            background-size: 250px;
            background-position: -91px -334px;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
