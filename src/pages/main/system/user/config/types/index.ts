export interface IPageContentConfig {
  title?: string //表头名称
  propList: IPropList[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  pageName: string
  headerhandler?: IHandlerProps[] // 表头操作
}

interface IPropList {
  prop: string
  label: string
  minWidth: string
  slotName?: string
}

interface IHandlerProps {
  type: string
  title: string
}
