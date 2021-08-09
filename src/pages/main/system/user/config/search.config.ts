import { IForm } from 'components/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      label: 'id',
      type: 'input',
      placeholder: '请输入id'
    },
    {
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      label: '状态',
      type: 'select',
      placeholder: '请选择状态',
      options: [
        {
          title: '足球',
          value: 'football'
        },
        {
          title: '篮球',
          value: 'baskball'
        }
      ]
    },
    {
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
