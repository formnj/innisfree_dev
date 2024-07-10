import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dpUrl: useRuntimeConfig().public.dpUrl,
      caUrl: useRuntimeConfig().public.caUrl,
      orUrl: useRuntimeConfig().public.orUrl,
      cuUrl: useRuntimeConfig().public.cuUrl
    }
  }
})
