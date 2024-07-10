import type { UseFetchOptions } from 'nuxt/app'
import { useNuxtApp, useFetch } from '#imports'

export function useInmFetch<T>(url: string | (() => string), options: Omit<UseFetchOptions<T>, 'default'>) {
  const nuxtApp = useNuxtApp()
  const inmFetch = nuxtApp.$inmFetch
  const isMounted = nuxtApp.vueApp._instance?.isMounted

  return !nuxtApp.isHydrating && isMounted
    ? inmFetch(url, options)
    : (async () => {
        const { data } = await useFetch(
          url,
          {
            ...options,
            $fetch: inmFetch
          },
          'INNISFREE_AUTOKEY'
        )
        return data.value
      })()
}
