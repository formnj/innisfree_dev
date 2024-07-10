<template>
  <div class="inner">
    <section>
      <div class="list_wrap">
        <ul>
          <li v-for="(item, idx) in public_ann" :key="idx">
            <div class="row" @click="link_click()">
              <a :href="item.url" target="_blank">
                <p>{{ item.title }}</p>
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
  layout: 'publish-mo-menu-search-cart'
})

const link_click = () => {
  let link_a = document.querySelectorAll('.list_wrap li')
  link_a.forEach((a, i) => {
    a.addEventListener('click', () => {
      link_a.forEach((b) => {
        b.classList.remove('active')
      })
      link_a[i].classList.add('active')
    })
  })
}

const emit = defineEmits(['title'])

onMounted(() => {
  emit('title', '전자공고')
})
</script>
<style lang="scss" scoped>
:deep(.list_wrap) {
  ul {
    li {
      &:first-child {
        border-top: 0.1rem solid #f5f5f5;
      }

      .row {
        margin-top: 0;
        margin-bottom: 0;
        padding: 2rem 2.1rem 2rem 2.1rem;
        font-size: 1.3rem;
        a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            color: #222;
            font-weight: 500;
          }
          span {
            color: #777;
            font-size: 0;
            display: flex;
            align-items: center;
            &::before {
              content: '';
              width: 2.4rem;
              height: 2.4rem;
              background-image: url('@inmModule/assets/mo_images/common/icon_split.png');
              background-repeat: no-repeat;
              background-size: 25rem;
              background-position: -3rem -35rem;
              display: inline-block;
            }
          }
        }
      }
      &.active {
        .row {
          a {
            p {
              text-decoration: underline;
            }
            span {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
