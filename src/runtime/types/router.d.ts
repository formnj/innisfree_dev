import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layoutOption?: {
      MO?: any
      PC?: any
    }
  }
}
