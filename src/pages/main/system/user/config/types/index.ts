export interface IPageContentConfig {
  title?: string //表头名称
  propList: IPropList[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  pageName: string
  operation?: IOptionsClick[] // 表头操作
}

interface IPropList {
  prop: string
  label: string
  minWidth: string
  slotName?: string
}

type Affair = 'create' | 'edit' //事务类型

export interface IOptionsClick {
  type: string
  title: string
  affair?: Affair // 操作的事务
}
