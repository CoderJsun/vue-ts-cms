import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**拦截器 */
export interface InstallRequestInterceptors<T = AxiosResponse> {
  reqestInterceptor?: (config: InstallRequestConfig) => InstallRequestConfig
  reqestInterceptorCatch?: (err: any) => any
  responeInterceptor?: (res: T) => T
  responeInterceptorCatch?: (err: any) => any
}

export interface InstallRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: InstallRequestInterceptors<T>
}
