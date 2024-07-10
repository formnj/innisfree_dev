<template>
  <div id="wrap">
    <InmHeaderMo v-if="layoutConfigMo.header" v-bind="{ ...layoutConfigMo.headerOptions }" />
    <div :id="containerId">
      <slot />
    </div>
    <InmFooterMo v-if="layoutConfigMo.footer" />
    <InmActionbar v-if="layoutConfigMo.actionBar" v-bind="{ ...layoutConfigMo.actionBarOptions }" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useRoute, onMounted, useGnb, useFetch } from '#imports'

interface LayoutConfigMo {
  header?: boolean
  headerOptions?: {
    type: string
    back: boolean
    logo: boolean
    menu: boolean
    search: boolean
    navGnb: boolean
    name: string
    buttons: string[]
  }
  footer?: boolean
  actionBar?: boolean
  actionBarOptions?: {
    top?: boolean
    search?: boolean
    history?: boolean
    back?: boolean
  }
}

const containerId = ref<string>('container')

const route = useRoute()
const { loadGnb } = useGnb()

const layoutConfigMo = computed<LayoutConfigMo>(() => {
  const moConfig = route.meta.layoutOption?.MO
  console.log('moConfig', moConfig)

  const type = moConfig?.type || 'main'
  console.log('type', type)

  const defaultConfig: LayoutConfigMo = {
    header: true,
    headerOptions: {
      type: 'main',
      back: false,
      logo: true,
      menu: false,
      search: false,
      navGnb: true,
      name: '',
      buttons: ['share', 'home', 'search', 'cart']
    },
    footer: true,
    actionBar: true,
    actionBarOptions: { top: true, search: false, history: false, back: true }
  }

  const searchConfig: LayoutConfigMo = {
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

  const subConfig: LayoutConfigMo = {
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
  }

  const conifg = type === 'sub' || type === 'cart' ? subConfig : type === 'search' ? searchConfig : defaultConfig

  const returnValue = { ...conifg, ...moConfig }

  console.log('layoutConfigMo', returnValue)
  return returnValue
})

const loadData = async () => {
  try {
    loadGnb('1')

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
  const moConfig = route.meta.layoutOption?.MO
  const type = moConfig?.type || ''
  if (type === 'cart') {
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
  flex: 1 auto;
}

#container-cart {
  flex: 1 auto;
  margin-top: -5.8rem;
}

@import '../../../../../assets/scss/mobile.scss';
</style>
