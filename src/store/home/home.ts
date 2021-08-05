import { Module } from 'vuex'
import { IRootState } from '../types'
import { IHomeState } from './types'

const homeModule: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {}
}
export default homeModule
