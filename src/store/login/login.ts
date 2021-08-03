import { LoginState } from './types'
import { Module } from 'vuex'
import { RootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '../../service/login/login'
import { IAccount } from '../../service/login/types'
import localCache from '../../untils/cache'

const LoginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: [],
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    // 账号登录
    async AccountLoginAction({ commit }, payload: IAccount) {
      // 登录逻辑
      const LoginResult = await accountLoginRequest(payload)
      const { id, token } = LoginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 用户详细信息
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult.data)
      // 权限菜单
      const userMenus = await requestUserMenusById(id)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 跳转到首页
      // router.replace('/home')
    },
    // 将 localCache 数据同步到 login/vuex中
    syncLocalCacheData({ commit }) {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      token ? commit('changeToken', token) : null
      userInfo ? commit('changeUserInfo', userInfo) : null
      userMenus ? commit('changeUserMenus', userMenus) : null
    }
  }
}

export default LoginModule
