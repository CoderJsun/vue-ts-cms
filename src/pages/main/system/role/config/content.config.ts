import { IPageContentConfig } from '@/pages/main/system/user/config/types'
export const pageContentConfig: IPageContentConfig = {
  title: '角色列表', //table 表头名称
  propList: [
    { prop: 'name', label: '角色名', minWidth: '80' },
    { prop: 'intro', label: '角色介绍', minWidth: '80' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    {
      prop: 'options',
      label: '操作',
      minWidth: '60',
      slotName: 'options'
    }
  ], //表格属性
  showIndexColumn: true, //是否显示索引
  showSelectColumn: false, //是否显示勾选
  pageName: 'role', //页面名称
  operation: [{ type: 'primary', title: '新建角色', affair: 'create' }] //table 表头功能
}
