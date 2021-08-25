// 统一出口

import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'
import { IRootState, IStoreType } from './types'
import { getPageListData } from '@/service/main/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeDepartment(state, payload: any) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload: any) {
      state.entireRole = payload
    },
    changeEntireMenu(state, payload: any) {
      state.entireMenu = payload
    }
  },
  getters: {},
  actions: {
    async initialDataAction({ commit }) {
      // 请求部门数据
      const department = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })

      // 请求角色信息
      const role = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      // 请求全局权限菜单数据
      const menus = await getPageListData('/menu/list', {
        offset: 0,
        size: 1000
      })
      // 存储数据
      commit('changeDepartment', department.data.list)
      commit('changeEntireRole', role.data.list)
      commit('changeEntireMenu', menus.data.list)
    }
  },
  modules: { login, system, dashboard }
})

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/syncLocalCacheData')
}

export default store

// 加到响应式系统才会动态更新数据
