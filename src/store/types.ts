import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboard } from './main/analysis/dashboard/types'

export interface IRootState {
  entireDepartment: []
  entireRole: []
  entireMenu: []
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboard
}

export type IStoreType = IRootState & IRootWithModule
