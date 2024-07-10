import 'nuxt3'

declare module '#app' {
  interface NuxtApp {
    $isBack: () => boolean
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $isBack: () => boolean
  }
}
