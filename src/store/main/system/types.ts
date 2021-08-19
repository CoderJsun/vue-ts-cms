export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
}

interface IQuery {
  offset: number
  pageSize: number
}

export interface ISystemQuery {
  pageName: string
  query: IQuery
}

export interface ISystemDelete {
  pageName: string
  id: number
}
