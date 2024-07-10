import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss', '~/assets/scss/common.scss', '~/assets/scss/_mo_mixin.scss'],
  srcDir: 'src/runtime',
  modules: ['@pinia/nuxt', '@nuxtjs/device'],
  plugins: ['~/plugins/dompurify-html'],
  components: [
    {
      path: '~/components/dev',
      pathPrefix: false,
      prefix: 'Inm'
    },
    {
      path: '~/components/publish'
    }
  ],
  vite: {
    resolve: {
      alias: {
        '@inmModule': fileURLToPath(new URL('./src/runtime', import.meta.url))
      }
    }
  }
})
