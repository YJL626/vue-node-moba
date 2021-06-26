import {
  ElContainer,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMain,
  ElTableColumn,
  ElTable,
  ElDropdown,
  ElDropdownMenu,
  ElMenuItemGroup,
  ElDropdownItem,
  ElHeader,
  ElInput,
  ElButton,
  ElForm,
  ElFormItem,
  ElOption,
  ElSelect,
  ElPopconfirm,
  ElLoading,
  ElPagination,
  ElCheckbox,
  ElCheckboxGroup,
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { App } from '@vue/runtime-core'

export default (app: App<Element>): void => {
  locale.use(lang)
  const plugins = [
    ElCheckbox,
    ElCheckboxGroup,
    ElPagination,
    ElLoading,
    ElPopconfirm,
    ElSelect,
    ElOption,
    ElForm,
    ElFormItem,
    ElContainer,
    ElAside,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElMain,
    ElTableColumn,
    ElTable,
    ElDropdown,
    ElDropdownMenu,
    ElMenuItemGroup,
    ElDropdownItem,
    ElHeader,
    ElInput,
    ElButton,
  ]
  plugins.forEach((plugin) => app.use(plugin))
}
