// 登录接口
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IResult<T = any> {
  code: number
  data: T
}