// 统一出口
import { InstallRequest } from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { useLocalCache } from 'ofi-hooks'
import { TOKEN } from '../store/login/constant'

const request = new InstallRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    reqestInterceptor: (config) => {
      const token = useLocalCache.getCache(TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default request
