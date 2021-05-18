import { reactive } from '@vue/reactivity'
import { required } from '../validator'

class CategoryCreateFormState {
  forms = { category: '' }
  rules = {
    category: [
      { validator: required('分类名不得为空'), trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 8 个字符', trigger: 'blur' },
    ],
  }
  constructor() {
    return reactive(this)
  }
}
export { CategoryCreateFormState }
