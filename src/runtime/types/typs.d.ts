interface ApiResponse<T> {
  statusCode: number
  message: string
  messageCode: string
  data: T | T[]
}
