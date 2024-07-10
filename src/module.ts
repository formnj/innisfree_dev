import {
  defineNuxtModule,
  createResolver,
  addComponentsDir,
  addRouteMiddleware,
  addPlugin,
  addImportsDir,
  addServerImportsDir,
  addServerPlugin,
  extendPages,
  resolveFiles,
  addLayout
} from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'inm-common-npm',
    configKey: 'inmCommonNpm'
  },
  defaults: {},

  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.alias['@inmModule'] = resolve('./runtime')

    addRouteMiddleware({
      name: 'navigationGuard',
      path: resolve('./runtime/middleware/navigation-guard'),
      global: true
    })

    await addComponentsDir({
      path: resolve('./runtime/components/dev'),
      pathPrefix: false,
      prefix: 'Inm',
      global: false
    })

    addPlugin({
      src: resolve('./runtime/plugins/inm-Fetch')
    })

    addPlugin({
      src: resolve('./runtime/plugins/inm-url-resolver')
    })

    addImportsDir(resolve('./runtime/composables'))

    addServerImportsDir(resolve('./runtime/server/utils'))

    addServerPlugin(resolve('./runtime/server/plugins/nitro-plugin'))

    nuxt.options.css.push(...[resolve('./runtime/assets/scss/common.css'), resolve('./runtime/assets/scss/global.css')])

    addLayout({ src: resolve('./runtime/layouts/default.vue'), write: true }, 'default')

    // const publishFiles = await resolveFiles(resolve('./runtime/pages'), '**/*.vue')

    // publishFiles.forEach((file) => {
    //   const name = file.match(/\/pages\/(.+)\.vue$/)?.[1]
    //   const path = file.match(/\/pages(.+)\.vue$/)?.[1].replace(/\/index$/, '/')

    //   if (path === '/') {
    //     return
    //   }

    //   extendPages((pages) => {
    //     if (name && path) {
    //       pages.unshift({ name, path, file })
    //     }
    //   })
    // })
  }
})
