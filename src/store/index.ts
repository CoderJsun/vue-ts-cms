// 统一出口

import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { login, system }
})

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export function setupStore() {
  store.dispatch('login/syncLocalCacheData')
}

export default store
