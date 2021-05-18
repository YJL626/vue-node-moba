import { categoryModel } from './db/model/category.model'

class CategoryServer {
  async create(data: { name: string }) {
    const category = new categoryModel(data)
    const result = await category
      .save()
      .then(() => true)
      .catch(() => false)
    return result
  }
  async get() {
    const result = await categoryModel.find()
    return result
  }
}
const categoryServer = new CategoryServer()
export { categoryServer }
