import type { NavigationGuardNext } from 'vue-router'
import { useRouter, defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  let isBack = false

  // popstate 이벤트 리스너
  if (process.client) {
    window.addEventListener('popstate', () => {
      isBack = true
    })
  }

  // 상태를 확인할 수 있는 메서드 주입
  nuxtApp.provide('isBack', () => isBack)
  const router = useRouter()
  // 페이지 이동 시마다 상태 초기화
  router.beforeEach((_, __, next: NavigationGuardNext) => {
    if (isBack) {
      isBack = false
    }
    next()
  })
})
