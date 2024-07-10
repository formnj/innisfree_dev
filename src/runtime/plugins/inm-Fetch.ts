import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      inmFetch: $fetch.create({
        // baseURL: '',
        onRequest({ request, options, error }) {
          // TODO
          console.log('executed request')
        },
        onResponseError({ response }) {
          // TODO
        }
      })
    }
  }
})
