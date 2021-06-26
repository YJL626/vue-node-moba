interface hero {
  categories: Category[]
  _id: string
  name: string
  title: string
  heroImg: string
  __v: number
}
interface Category {
  _id: string
  name: string
  parent: string
  __v: number
}
export { hero }
