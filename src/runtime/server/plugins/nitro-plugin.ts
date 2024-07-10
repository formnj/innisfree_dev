import { defineNitroPlugin } from '#imports'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    const requests = getRequestHeaders(event)
    event.context.userAgent = requests['user-agent']
    event.context.referer = requests['referer']
  })
})
