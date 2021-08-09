import { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElRow,
  ElMenu,
  ElCol,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElOption,
  ElDatePicker,
  ElSelect
} from 'element-plus'

const els = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElRow,
  ElMenu,
  ElCol,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElOption,
  ElDatePicker,
  ElSelect
]

/**
 * @param app 注册 element-plus
 */
export function registerElementPlus(app: App): void {
  els.map((el) => {
    app.component(el.name, el)
  })
}
