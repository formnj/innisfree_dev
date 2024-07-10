import { getLogger } from './winston-logger'

const winston = getLogger()
const logLevels = Object.keys(winston.levels)
const InmLogger = {}

logLevels.forEach((element) => {
  InmLogger[element] = (event, message, logType = '', errorCode = '') => {
    const messageObject = {
      hostName: process.env.HOSTNAME,
      userAgent: event.context.userAgent,
      logType: logType,
      pagePath: event.context.referer || '',
      errorCode,
      message
    }
    winston[element](messageObject)
  }
})

Object.freeze(InmLogger)

export { InmLogger }
