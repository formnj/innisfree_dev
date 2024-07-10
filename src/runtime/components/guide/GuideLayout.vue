<template>
  <div>
    <GuideComponent
      title="Layout 설정"
      :initial-code="initialCode"
      :descriptions="descriptions"
      :props-data="propsData"
      :events-data="eventsData"
      :initial-show-code="true">
      <div class="multi_form">
        <nuxt-link to="/dev/guide/layout-sub">
          <InmButton>Mo Sub Layout Page</InmButton>
        </nuxt-link>
        <nuxt-link to="/dev/guide/infinite-scroll">
          <InmButton>Mo Search Layout Page</InmButton>
        </nuxt-link>
      </div>
    </GuideComponent>
  </div>
</template>

<script setup lang="ts">
import { computed } from '#imports'

import GuideComponent from './GuideComponent.vue'

const initialCode = computed(() => {
  return `
// layout 속성 설정하지 않았을 경우 default 설정값
definePageMeta({
  layoutOption: {
    MO : {
      header: true,   // 해더 노출 여부
      headerOptions: {
        type: 'type_search',
        back: false,
        logo: true,
        menu: false,
        search: false,
        navGnb: true,
        name: '',
        buttons: ['search', 'cart']
      },
      footer: true,
      actionBar: true,
      actionBarOptions: { top: true, search: false, history: false, back: true }
    },
    //콤퓨터 기본 설정값
    PC: {
      type : 'category' // '' | 'category' | 'order' | 'sub'
      header: true,
      footer: true
    }
  }
})


// 모바일 해더 유형 sub 설정할 경우 기본값
// 사용 코드
definePageMeta({
  layoutOption: {
    //mobile main 설정값
    MO: {
      header: true,
      headerOptions: {
        type: 'type_search',
        back: false,
        logo: false,
        menu: false,
        search: true,
        navGnb: false,
        name: '',
        buttons: ['barcode']
      },
      footer: false,
      actionBar: true,
      actionBarOptions: { top: true, search: false, history: false, back: true }
    }
  }
})

// 실제 적용 값
definePageMeta({
  layoutOption: {
      //mobile sub 설정값
      MO: {
      header: true,
      headerOptions: {
        type: 'type_sub',
        back: true,
        logo: false,
        menu: true,
        search: false,
        navGnb: true,
        name: '',
        buttons: ['search', 'cart']
      },
      footer: false,
      actionBar: true,
      actionBarOptions: { top: true, search: true, history: true, back: true }
    },
  }
})


`
})

const descriptions = ['해더 정리가 아직 안되어 업데이터 예정입니다.']

const propsData = undefined

const eventsData = undefined
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}
</style>
