import { CategoryModel } from '../../../db/model/category.model'
let articleId = ''
const handleCategories = async (category: string): Promise<string> => {
  if (!articleId) {
    articleId = await getArticleId()
  }
  let categoryDocument = await CategoryModel.findOne({ name: category })
  if (categoryDocument) {
    return categoryDocument._id
  }
  categoryDocument = await new CategoryModel({
    name: category,
    parent: articleId,
  })
    .save()
    .catch(() => CategoryModel.findOne({ name: category }))

  if (categoryDocument) {
    return categoryDocument._id
  } else {
    console.log('handleCategories id error')
    return ''
  }
}
async function getArticleId() {
  let newsDocument = await CategoryModel.findOne({ name: '文章' })
  if (newsDocument) {
    return newsDocument._id
  }
  newsDocument = await new CategoryModel({ name: '文章' })
    .save()
    .catch(() => CategoryModel.findOne({ name: '文章' }))
  if (newsDocument) {
    return newsDocument._id
  } else {
    console.log('getArticleId error')
    process.exit()
  }
}
export { handleCategories }
