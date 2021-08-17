import { ILoginState } from './types'
import { Module } from 'vuex'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '../../service/login/login'
import { IAccount } from '../../service/login/types'
import { useLocalCache } from 'ofi-hooks'
import { TOKEN, USERINFO, USERMENUS } from './constant'
import { MapMenusToRoutes, mapMenusToPermissions } from '../../untils/map-menus'
import router from '../../router'

const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: [],
      userMenus: [],
      permissions: []
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

      // 加载路由
      const routes = MapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('home', route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
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
      useLocalCache.setCache(TOKEN, token)
      // 用户详细信息
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      useLocalCache.setCache(USERINFO, userInfoResult.data)
      // 权限菜单
      const userMenus = await requestUserMenusById(userInfoResult.data.role.id)
      commit('changeUserMenus', userMenus.data)
      useLocalCache.setCache(USERMENUS, userMenus.data)

      // 跳转到首页
      router.replace('/home')
    },

    // 将 localCache 数据同步到 login/vuex中
    syncLocalCacheData({ commit }) {
      const token = useLocalCache.getCache(TOKEN)
      const userInfo = useLocalCache.getCache(USERINFO)
      const userMenus = useLocalCache.getCache(USERMENUS)
      token ? commit('changeToken', token) : null
      userInfo ? commit('changeUserInfo', userInfo) : null
      userMenus ? commit('changeUserMenus', userMenus) : null
    }
  }
}

export default LoginModule
