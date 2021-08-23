import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      type: 'input',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      label: '角色介绍',
      type: 'input',
      placeholder: '请输入角色介绍'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemLayout: {
    padding: '10px 40px'
  },
  labelWidth: '100px'
}
