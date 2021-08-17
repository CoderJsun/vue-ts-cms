export const pageContentConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '80' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '60' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
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
  ],
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showFooter: false,
  pageName: 'menu'
}
