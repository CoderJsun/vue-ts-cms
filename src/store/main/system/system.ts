import { Module } from 'vuex'
import { ISystemQuery, ISystemState, ISystemDelete } from './types'
import { IRootState } from '@/store/types'
import { getPageListData, deletePageData } from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    changeMenuListAction(state, payload: any) {
      state.menuList = payload
    },
    changeMenuCountAction(state, payload: any) {
      state.menuCount = payload
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
    async getPageListAction({ commit }, payload: ISystemQuery) {
      const url = `/${payload.pageName}/list`
      const pageList = await getPageListData(url, payload.query)
      const { list, totalCount } = pageList.data
      const changeName =
        payload.pageName.slice(0, 1).toUpperCase() + payload.pageName.slice(1)
      commit(`change${changeName}ListAction`, list)
      commit(`change${changeName}CountAction`, totalCount)
    },

    // 删除操作
    async deletePageDataAction({ dispatch }, payload: ISystemDelete) {
      // 1.获取参数
      // pageName -> /users/id
      // id
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      // 2.删除请求
      try {
        await deletePageData(url)
      } catch (error) {
        console.log(error)
      }
      // 3.重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        query: {
          offset: 0,
          pageSize: 10
        }
      })
    }
  }
}

export default systemModule
