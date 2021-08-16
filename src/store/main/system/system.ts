import { Module } from 'vuex'
import { IQuery, ISystemState } from './types'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersListAction(state, payload: any) {
      state.usersList = payload
    },
    changeUsersCountAction(state, payload: any) {
      state.usersCount = payload
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IQuery) {
      const url = `/${payload.pageName}/list`
      const pageList = await getPageListData(url, payload.query)
      const { list, totalCount } = pageList.data
      const changeName =
        payload.pageName.slice(0, 1).toUpperCase() + payload.pageName.slice(1)
      commit(`change${changeName}ListAction`, list)
      commit(`change${changeName}CountAction`, totalCount)
    }
  }
}

export default systemModule
