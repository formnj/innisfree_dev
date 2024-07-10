<template>
  <div id="wrap">
    <InmHeaderPc v-if="layoutConfigPc.header" v-bind="{ ...layoutConfigPc.headerOptions }" />
    <div :id="containerId">
      <InmBreadcrumb v-if="layoutConfigPc.category" :menu-list="breadcrumbData" />
      <slot />
    </div>
    <InmFooterPc v-if="layoutConfigPc.footer" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useRoute, onMounted, useFetch, useGnb } from '#imports'
interface LayoutConfigPc {
  header?: boolean
  footer?: boolean
  category?: boolean
  headerOptions?: {
    buttons: string[]
  }
}

const containerId = ref<string>('container')

const route = useRoute()
const { loadGnb } = useGnb()

const layoutConfigPc = computed<LayoutConfigPc>(() => {
  const pcConfig = route.meta.layoutOption?.PC

  const defaultConfig: LayoutConfigPc = {
    header: true,
    headerOptions: { buttons: ['zzim', 'mypage', 'delivery', 'cart'] },
    footer: true,
    category: false
  }

  const returnValue = { ...defaultConfig, ...pcConfig }

  console.log('layoutConfigPc', returnValue)
  return returnValue
})

const breadcrumbData = [
  {
    menuText: '카테고리',
    subMenuList: [
      { menuText: '특가', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '이벤트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '베스트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '라이브', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: 'FOR ME', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: 'ABOUT', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '고객센터', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '마이페이지', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '공병수거 캠페인', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '멤버십', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '유형별',
    subMenuList: [
      { menuText: '피부고민', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '메뉴1', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '메뉴2', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '스킨케어',
    subMenuList: [
      { menuText: '메이크업', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '남성', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '헤어/바디/펫', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기획 세트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '미용소품', url: 'https://www.innisfree.com/kr/ko' }
    ]
  },
  {
    menuText: '전체',
    subMenuList: [
      { menuText: '에센스/세럼/앰플', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '로션/크림', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '스킨/토너/미스트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '립/아이케어', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '선케어', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '오일/마사지', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '클렌징', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '팩/마스크', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기획 세트', url: 'https://www.innisfree.com/kr/ko' },
      { menuText: '기타', url: 'https://www.innisfree.com/kr/ko' }
    ]
  }
]
const loadData = async () => {
  try {
    loadGnb('2')

    const response2 = await useFetch<ApiResponse<INavGnbItem>>(`http://localhost:8080/api/dp/display/category/v1/getCategoryList`, {
      method: 'post',
      body: {
        channelCode: '1'
      }
    })

    console.log(response2)
  } catch (e) {
    console.log(e)
  }
}

loadData()

onMounted(() => {
  const pcConfig = route.meta.layoutOption?.PC
  const type = pcConfig?.type || ''
  if (type !== '') {
    containerId.value = `container-${type}`
  }
})
</script>

<style lang="scss" scoped>
#wrap {
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

#container {
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    max-width: 1320px;
    margin: 0 auto;
  }
}

#container-category {
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    margin: 0 auto;
  }
}

#container-order {
  height: 100%;
  padding-bottom: 100px;
  flex: 1 auto;
  :deep(.inner) {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }
}

#container-sub {
  padding-bottom: 100px;
  flex: 1 auto;
  .content {
    & > :deep(.inner) {
      width: 1280px;
      margin: 0 auto;
    }
  }
}
</style>
