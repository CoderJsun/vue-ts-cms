import { App } from 'vue'
import { registerElementPlus } from './register-element'
import { registerProperties } from './register-properties'

export function globalRegister(app: App) {
  app.use(registerElementPlus)
  app.use(registerProperties)
}
