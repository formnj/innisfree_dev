import { useState, watch, useRoute, onMounted, useDevice, useUtils, useFetch } from '#imports'

export interface INavGnbItem {
  dispMenuNm: string
  englDispMenuNm?: string
  menuNmEpssYn?: string
  pcUrl?: string
  pcInmBrsrExctMthdCd?: string
  mblUrl?: string
  mblInmBrsrExctMthdCd?: string
  defaultImageUrl?: string
  activeImageUrl?: string
  active?: boolean
}

/**
 * Gnb 정보를 관리하는 훅입니다.
 * @param param Gnb List
 * @returns
 */
export default function useGnb(param?: Array<INavGnbItem>) {
  const route = useRoute()
  const { isMobile } = useDevice()
  const { isEmpty } = useUtils()

  const list = useState<Array<INavGnbItem>>('globalGnbList', () => [])

  if (param) {
    list.value = param
  }

  const currentGnb = useState<INavGnbItem>('globalCurrentGnb', () => ({
    dispMenuNm: ''
  }))

  /**
   * Gnb List 를 세팅합니다.
   * @param param
   */
  const setGnbList = (param: Array<INavGnbItem>) => {
    if (param?.length > 0) {
      list.value = param
    }
  }

  /**
   * Gnb List 반환합니다.
   * @returns
   */
  const getGnbList = () => {
    return list
  }

  /**
   * 현재페이지의 Gnb 를 반환합니다.
   * @returns
   */
  const getCurrentGnb = () => {
    return currentGnb
  }

  const setCurrentItem = (path: string) => {
    list.value.map((item) => {
      if (isMobile && item.mblUrl === path) {
        item.active = true
        currentGnb.value = item
      } else if (!isMobile && item.pcUrl === path) {
        item.active = true
        currentGnb.value = item
      } else {
        item.active = false
      }

      return item
    })
  }
  // const loadGnb = async (channelCode: string) => {
  //   const response = await $fetch<ApiResponse<INavGnbItem>>(`http://localhost:8080/api/dp/display/menu/v1/getMenuList`, {
  //     method: 'post',
  //     body: {
  //       channelCode: channelCode,
  //       menuType: '01'
  //     }
  //   })

  //   if (response) {
  //     const { data, statusCode } = response
  //     if (statusCode === 200) {
  //       if (Array.isArray(data)) {
  //         list.value = data
  //       } else {
  //         list.value = [data]
  //       }
  //       return
  //     }
  //   }

  //   if (isEmpty(list.value)) {
  //     list.value = [
  //       { dispMenuNm: '특가', pcUrl: '', mblUrl: '/dp/event', menuNmEpssYn: 'N' },
  //       { dispMenuNm: '이벤트', pcUrl: '/dp/event', mblUrl: '/dp/event', menuNmEpssYn: 'N' },
  //       { dispMenuNm: '베스트', pcUrl: '/dp/best', mblUrl: '/dp/best', menuNmEpssYn: 'Y' },
  //       { dispMenuNm: '쇼케이스', pcUrl: '/dp/show-case', mblUrl: '/dp/show-case', menuNmEpssYn: 'N' },
  //       { dispMenuNm: '에디터', pcUrl: '/dp/editor', mblUrl: '/dp/editor', menuNmEpssYn: 'N' },
  //       { dispMenuNm: '라이브', pcUrl: '/dp/live', mblUrl: '/dp/live', menuNmEpssYn: 'N' },
  //       { dispMenuNm: 'FOR ME', pcUrl: '/dp/recommend', mblUrl: '/dp/recommend', menuNmEpssYn: 'N' }
  //     ]
  //   }
  // }

  const loadGnb = async (channelCode: string) => {
    const response = await useFetch<ApiResponse<INavGnbItem>>(`http://localhost:8080/api/dp/display/menu/v1/getMenuList`, {
      method: 'post',
      body: {
        channelCode: channelCode,
        menuType: '01'
      }
    })

    const responseData = response.data.value

    if (responseData) {
      const { data, statusCode } = responseData
      if (statusCode === 200) {
        if (Array.isArray(data)) {
          list.value = data
        } else {
          list.value = [data]
        }
        return
      }
    }

    if (isEmpty(list.value)) {
      list.value = [
        { dispMenuNm: '특가', pcUrl: '', mblUrl: '/dp/event', menuNmEpssYn: 'N' },
        { dispMenuNm: '이벤트', pcUrl: '/dp/event', mblUrl: '/dp/event', menuNmEpssYn: 'N' },
        { dispMenuNm: '베스트', pcUrl: '/dp/best', mblUrl: '/dp/best', menuNmEpssYn: 'Y' },
        { dispMenuNm: '쇼케이스', pcUrl: '/dp/show-case', mblUrl: '/dp/show-case', menuNmEpssYn: 'N' },
        { dispMenuNm: '에디터', pcUrl: '/dp/editor', mblUrl: '/dp/editor', menuNmEpssYn: 'N' },
        { dispMenuNm: '라이브', pcUrl: '/dp/live', mblUrl: '/dp/live', menuNmEpssYn: 'N' },
        { dispMenuNm: 'FOR ME', pcUrl: '/dp/recommend', mblUrl: '/dp/recommend', menuNmEpssYn: 'N' }
      ]
    }
  }

  watch(
    () => route.path,
    (newPath) => {
      setCurrentItem(newPath)
    }
  )

  onMounted(async () => {
    // await load()
    setCurrentItem(route.path)
    setTimeout(() => {})
  })
  return { getCurrentGnb, getGnbList, setGnbList, loadGnb }
}
