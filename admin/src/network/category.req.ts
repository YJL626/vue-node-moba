import { reqState } from '@/type'
import { result } from 'lodash'
import { req } from '.'
type categoryDateForm = {
  _id: string
  name: string
  parent: string
}
class CategoryCreate {
  private _state: reqState = 'none'
  get state() {
    return this._state
  }
  constructor(data: { name: string; parents?: string }) {
    req.post('/category/create', data).then((result) => {
      console.log('11')
    })
  }
}
class Category {
  data: Array<categoryDateForm> = []
}
export { CategoryCreate }
