import { createLogger, format, transports } from 'winston'

export const getLogger = () => {
  const customFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.align(),
    format.printf((i) => `${[i.timestamp]} ${i.level} ${i.hostName} ${i.userAgent} ${i.logType} ${i.pagePath} ${i.errorCode} ${i.message}`)
  )

  return createLogger({
    format: customFormat,
    level: 'debug',
    transports: [new transports.Console()]
  })
}
