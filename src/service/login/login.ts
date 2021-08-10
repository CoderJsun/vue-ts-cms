import instance from '../index'
import { IAccount, ILoginResult } from './types'
import { IResult } from '@/service/types'

enum LoginApi {
  login = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}

// 账号登录
export function accountLoginRequest(account: IAccount) {
  return instance.post<IResult<ILoginResult>>({
    url: LoginApi.login,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return instance.get<IResult>({
    url: LoginApi.userInfo + id
  })
}

export function requestUserMenusById(id: number) {
  return instance.get<IResult>({
    url: LoginApi.userMenus + id + '/menu'
  })
}
