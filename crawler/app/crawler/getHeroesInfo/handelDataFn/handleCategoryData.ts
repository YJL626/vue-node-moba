import { dbService } from '../../../db/service'
const categoryHeroId = '60ab8d9393e5bf39f491e5ec'
const tempMap = new Map<string, string>()
const handleCategoryData = async (categoryData: string): Promise<string[]> => {
  const categories = categoryData.split('/')

  const result = await Promise.allSettled<string, string>(
    categories.map(async (category: string): Promise<string> => {
      //有缓存则返回缓存
      if (tempMap.has(category)) return tempMap.get(category) || ''

      const result = await dbService.getCategoryIdByName(category)
      if (result) {
        //保存缓存
        tempMap.set(category, result)
        return result
      }

      const document = await dbService.createCategory({
        name: category,
        parent: categoryHeroId,
      })
      return document ? document._id : false
    })
  )
  return result.map(({ value = '' }) => value)
}
export { handleCategoryData }
