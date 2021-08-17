export const pageContentConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '40' },
    { prop: 'oldPrice', label: '原价格', minWidth: '40' },
    { prop: 'newPrice', label: '现价格', minWidth: '40' },
    { prop: 'status', label: '状态', minWidth: '40', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '60', slotName: 'image' },
    { prop: 'desc', label: '描述 ', minWidth: '40' },
    {
      prop: 'options',
      label: '操作',
      minWidth: '60',
      slotName: 'options'
    }
  ],
  showIndexColumn: true, //是否显示索引
  showSelectColumn: false, //是否显示勾选
  pageName: 'goods'
}
