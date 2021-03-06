import { IPageContentConfig } from '@/pages/main/system/user/config/types'
export const pageContentConfig: IPageContentConfig = {
  title: '用户列表', //table 表头名称
  propList: [
    { prop: 'name', label: '用户名', minWidth: '80' },
    { prop: 'realname', label: '真实姓名', minWidth: '80' },
    { prop: 'cellphone', label: '手机号', minWidth: '80' },
    { prop: 'enable', label: '状态', minWidth: '50', slotName: 'status' },
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
  pageName: 'users', //页面名称
  operation: [{ type: 'primary', title: '新建用户' }] //table 表头功能
}
