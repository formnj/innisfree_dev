<template>
  <nav class="nav_gnb" :class="{ main: type === 'main' }">
    <ul>
      <li v-for="(item, idx) in gnbList" :key="idx" :class="{ active: item.active }">
        <NuxtLink
          :class="{ point: item.menuNmEpssYn === 'Y' }"
          @click.prevent="
            () => {
              if (!isMobile && item.pcUrl) {
                $router.push(item.pcUrl)
              } else if (isMobile && item.mblUrl) {
                $router.push(item.mblUrl)
              }
            }
          ">
          <em>{{ item.dispMenuNm }}</em>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useGnb, useDevice } from '#imports'

defineProps({
  type: {
    type: String,
    default: ''
  }
})

const { getGnbList } = useGnb()
const { isMobile } = useDevice()

const gnbList = getGnbList()
</script>

<style lang="scss" scoped>
.nav_gnb {
  padding-left: 40px;
  ul {
    display: flex;
    gap: 24px;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      a {
        height: 58px;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        display: flex;
        align-items: center;
        em {
          position: relative;
          display: block;
        }
        &.dot {
          em {
            padding-right: 10px;
            &:after {
              width: 5px;
              height: 5px;
              background-color: #00bc70;
              border-radius: 50%;
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              display: block;
            }
          }
        }
      }
      &.active {
        // 현재 페이지 표시
        em {
          color: #00bc70;
        }

        &:after {
          content: '';
          width: 100%;
          height: 2px;
          margin-top: -2px;
          background-color: #00bc70;
          display: block;
        }
      }
    }
  }
}
</style>
