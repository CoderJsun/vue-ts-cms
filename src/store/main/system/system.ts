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
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },
  mutations: {
    changeUsersListAction(state, payload: any) {
      state.usersList = payload
    },
    changeUsersCountAction(state, payload: any) {
      state.usersCount = payload
    },
    changeRoleListAction(state, payload: any) {
      state.roleList = payload
    },
    changeRoleCountAction(state, payload: any) {
      state.roleCount = payload
    },
    changeGoodsListAction(state, payload: any) {
      state.goodsList = payload
    },
    changeGoodsCountAction(state, payload: any) {
      state.goodsCount = payload
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
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
