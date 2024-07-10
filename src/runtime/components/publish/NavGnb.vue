<template>
  <nav class="nav_gnb" :class="{ main: type === 'main' }">
    <ul>
      <!-- active: true 면 active 클래스 적용 -->
      <li v-for="(con, idx) in item" :key="idx" :class="{ active: con.active }">
        <!-- admChk: true 면 dot 클래스 적용 -->
        <a :href="con.url" :class="{ dot: con.admChk }">
          <em>{{ con.tit }}</em>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default() {
      return []
    }
  },
  type: {
    type: String,
    default: ''
  }
})
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
