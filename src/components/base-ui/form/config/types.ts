type IFormType = 'password' | 'input' | 'select' | 'datepicker'

interface ISports {
  title: string
  value: string
}

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: string
  rules?: any[]
  options?: ISports[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
