import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { InstallRequestInterceptors, InstallRequestConfig } from './type'

class InstallRequest {
  private instance: AxiosInstance
  interceptors?: InstallRequestInterceptors
  constructor(options: InstallRequestConfig) {
    this.instance = axios.create(options)
    this.interceptors = options.interceptors
    // 所有实例都会有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
    // 单个实例额外的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.reqestInterceptor,
      this.interceptors?.reqestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responeInterceptor,
      this.interceptors?.responeInterceptorCatch
    )
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res as unknown as any)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default InstallRequest
