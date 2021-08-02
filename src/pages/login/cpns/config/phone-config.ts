import { reactive } from 'vue'

export const phone = reactive({
  mobile: '',
  code: ''
})
// 规则
export const rules = {
  mobile: [
    {
      required: true,
      message: '手机号必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{5,10}$/,
      message: '手机号必须11位数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
