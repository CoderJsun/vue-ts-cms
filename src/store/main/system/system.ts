import { Module } from 'vuex'
import { IQuery, ISystemState } from './types'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserListAction(state, payload: any) {
      state.userList = payload
    },
    changeUserCountAction(state, payload: any) {
      state.userCount = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IQuery) {
      const pageList = await getPageListData(payload.url, payload.query)
      const { list, totalCount } = pageList.data
      commit('changeUserListAction', list)
      commit('changeUserCountAction', totalCount)
    }
  }
}

export default systemModule
