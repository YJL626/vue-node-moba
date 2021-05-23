import { CategoryModel } from './db/model/category.model'

class CategoryServer {
  async create({ name, parent }: Record<string, string>) {
    //parent为空字符串则不传入
    const categoryInfo = parent ? { name, parent } : { name }
    const category = new CategoryModel(categoryInfo)
    const result = await category
      .save()
      .then(() => true)
      .catch(() => false)
    return result
  }
  async get() {
    const result = await CategoryModel.find().populate('parent')
    return result
  }
  async getItemById({ id }: { id: string }) {
    const result = await CategoryModel.findById(id)
      .populate('parent')
      .catch(() => false)
    return result
  }
  async del({ id }: { id: string }) {
    try {
      const { deletedCount } = await CategoryModel.find({ _id: id }).deleteOne()
      return !!deletedCount
    } catch {
      return false
    }
  }
  async replace({ id, name, parent }: Record<string, string>) {
    const categoryInfo = parent ? { _id: id, name, parent } : { _id: id, name }
    const categoryDocument = new CategoryModel(categoryInfo)
    const result = await CategoryModel.replaceOne({ _id: id }, categoryDocument)
      .then(() => true)
      .catch(() => false)
    return result
  }
}
const categoryServer = new CategoryServer()
export { categoryServer }
