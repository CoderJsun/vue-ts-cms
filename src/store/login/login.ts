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
import { TOKEN, USERINFO, USERMENUS } from './constant'
import router from '../../router'

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
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录逻辑
      const LoginResult = await accountLoginRequest(payload)
      const { id, token } = LoginResult.data
      commit('changeToken', token)
      localCache.setCache(TOKEN, token)

      // 用户详细信息
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache(USERINFO, userInfoResult.data)

      // 权限菜单
      const userMenus = await requestUserMenusById(userInfoResult.data.role.id)
      commit('changeUserMenus', userMenus.data)
      localCache.setCache(USERMENUS, userMenus.data)

      // 跳转到首页
      router.replace('/home')
    },

    // 将 localCache 数据同步到 login/vuex中
    syncLocalCacheData({ commit }) {
      const token = localCache.getCache(TOKEN)
      const userInfo = localCache.getCache(USERINFO)
      const userMenus = localCache.getCache(USERMENUS)
      token ? commit('changeToken', token) : null
      userInfo ? commit('changeUserInfo', userInfo) : null
      userMenus ? commit('changeUserMenus', userMenus) : null
    }
  }
}

export default LoginModule
