import { mobaDbConnect } from '..'
import { categorySchema } from '../schema/category.schema'

const CategoryModel = mobaDbConnect.model('category', categorySchema)
export { CategoryModel }
