import axios from 'axios'
import type { AxiosInstance } from 'axios'
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

  private request<T = any>(config: InstallRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: InstallRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: InstallRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: InstallRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: InstallRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export { InstallRequest }
