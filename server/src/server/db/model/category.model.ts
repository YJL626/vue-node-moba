import { mobaDbConnect } from '..'
import { categorySchema } from '../schema/category.schema'

const categoryModel = mobaDbConnect.model('category', categorySchema)
export { categoryModel }
