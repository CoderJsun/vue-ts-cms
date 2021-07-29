import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**拦截器 */
export interface InstallRequestInterceptors {
  reqestInterceptor?: (config: InstallRequestConfig) => InstallRequestConfig
  reqestInterceptorCatch?: (err: any) => any
  responeInterceptor?: (res: AxiosResponse) => AxiosResponse
  responeInterceptorCatch?: (err: any) => any
}

export interface InstallRequestConfig extends AxiosRequestConfig {
  interceptors?: InstallRequestInterceptors
}
