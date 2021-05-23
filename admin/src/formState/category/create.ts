import { reactive } from '@vue/reactivity'
import { required } from '../validator'
type formKeys = keyof CategoryFormState['forms']
class CategoryFormState {
  forms = { category: '', parent: '' }
  rules = {
    category: [
      { validator: required('分类名不得为空'), trigger: 'blur' },
      { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' },
    ],
  }
  resetForm: () => void
  constructor() {
    const reactiveThis = reactive(this)
    this.resetForm = () => {
      const formKeys = Object.keys(this.forms) as Array<formKeys>
      formKeys.forEach((key) => (reactiveThis.forms[key] = ''))
    }
    return reactiveThis
  }
}
export { CategoryFormState }
