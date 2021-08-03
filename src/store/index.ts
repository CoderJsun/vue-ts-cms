import { createStore } from 'vuex'
import login from './login/login'
import { RootState } from './types'

const store = createStore<RootState>({
  state: () => {
    return {}
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { login }
})

export default store
