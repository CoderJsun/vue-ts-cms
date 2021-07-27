import { App } from 'vue'
import { ElButton, ElInput } from 'element-plus'

const els = [ElButton, ElInput]

/**
 * @param app 注册 element-plus
 */
export function registerElementPlus(app: App): void {
  els.map((el) => {
    app.component(el.name, el)
  })
}
