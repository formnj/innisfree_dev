import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`${from.path}에서 ${to.path}로 이동 합니다`)

  // 미들웨어 업무로직 정의
  /*
  skip middleware on server
  if (import.meta.server) return
  skip middleware on client side entirely
  if (import.meta.client) return
  or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
  */

  // 쿼리스트링별 분기
  /*
  if (to.params.id === '1') {
    return abortNavigation()
  }
  if (to.path !== '/') {
    return navigateTo('/')
  }
  */
})
