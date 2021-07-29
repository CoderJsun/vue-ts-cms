import InstallRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new InstallRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
