import { App } from 'vue'
import { ElButton } from 'element-plus'

const els = [ElButton]

/**
 * @param app 注册 element-plus
 */
export function registerElment(app: App): void {
  els.map((el) => {
    app.use(el)
  })
}
