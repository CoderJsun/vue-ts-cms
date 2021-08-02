import { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus'

const els = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
]

/**
 * @param app 注册 element-plus
 */
export function registerElementPlus(app: App): void {
  els.map((el) => {
    app.component(el.name, el)
  })
}
