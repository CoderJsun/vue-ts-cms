import request from '../index'
import { IAccount, IResult, ILoginResult } from './types'

enum LoginApi {
  login = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}

// 账号登录
export function accountLoginRequest(account: IAccount) {
  return request.post<IResult<ILoginResult>>({
    url: LoginApi.login,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return request.get<IResult>({
    url: LoginApi.userInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return request.get<IResult>({
    url: LoginApi.userMenus + id + '/menu'
  })
}
