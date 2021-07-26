// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// class Request {
//   private instance: AxiosInstance
//   private readonly options: AxiosRequestConfig

//   constructor(options: AxiosRequestConfig) {
//     this.options = options
//     this.instance = axios.create(options)

//     this.instance.interceptors.request.use(
//       (config) => {
//         return config
//       },
//       (err) => {
//         return err
//       }
//     )

//     this.instance.interceptors.response.use(
//       (res) => {
//         return res
//       },
//       (err) => {
//         return err
//       }
//     )
//   }

//   request<T = any>(config: AxiosRequestConfig): Promise<T> {
//     return new Promise((resolve, reject) => {
//       this.instance
//         .request<any, AxiosResponse<Result<T>>>(config)
//         .then((res) => {
//           resolve(res as unknown as Promise<T>)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   }

//   get<T = any>(config: AxiosRequestConfig): Promise<T> {
//     return this.request({ ...config, method: 'GET' })
//   }

//   post<T = any>(config: AxiosRequestConfig): Promise<T> {
//     return this.request({ ...config, method: 'POST' })
//   }

//   patch<T = any>(config: AxiosRequestConfig): Promise<T> {
//     return this.request({ ...config, method: 'PATCH' })
//   }

//   delete<T = any>(config: AxiosRequestConfig): Promise<T> {
//     return this.request({ ...config, method: 'DELETE' })
//   }
// }

// export default Request
