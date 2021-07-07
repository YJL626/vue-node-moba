import { GetArticleCtr } from '@/network/ReqArticleList'

type articleCategory = '热门' | '新闻' | '公告' | '活动' | '赛事'
const articleCategories: articleCategory[] = [
  '热门',
  '新闻',
  '公告',
  '活动',
  '赛事',
]
const getTagColor = (tagName: articleCategory): string => {
  switch (tagName) {
    case '热门':
      return '#FF3636'
    case '新闻':
      return '#1E96AB'
    case '公告':
      return '#DB9E3F'
    case '活动':
      return '#FF3636'
    case '赛事':
      return '#4D9CFF'
  }
}
const getTagName = (
  article: GetArticleCtr['articles'][0],
  index: number
): articleCategory => {
  if (index !== 0) return articleCategories[index]
  const primaryCategory = article.categories[0].name
  if (primaryCategory === '公告' || primaryCategory === '活动') {
    return primaryCategory
  }
  return '热门'
}
export { articleCategories, getTagColor, getTagName }
