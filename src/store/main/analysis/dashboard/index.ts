import { Module } from 'vuex'
import { IDashboard } from './types'
import { IRootState } from '@/store/types'

import {
  getCategoryGoodsCount,
  getaddressGoodsSale,
  getcategoryGoodsFavor,
  getcategoryGoodsSale
} from '@/service/main/analysis/dashboard'

const DashboardModule: Module<IDashboard, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, payload: any) {
      state.categoryGoodsCount = payload
    },
    changeCategoryGoodsFavor(state, payload: any) {
      state.categoryGoodsFavor = payload
    },
    changeCategoryGoodsSale(state, payload: any) {
      state.categoryGoodsSale = payload
    },
    changeAddressGoodsSale(state, payload: any) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)

      const categoryGoodsFavorResult = await getcategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)

      const categoryGoodsSaleResult = await getcategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)

      const addressGoodsSaleResult = await getaddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  }
}

export default DashboardModule
