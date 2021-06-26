import { networkState, req, ReqBaseClass } from '.'
type categoryDateForm = {
  _id: string
  name: string
  parent: categoryDateForm | null
}
class GetCategories extends ReqBaseClass {
  list: Array<categoryDateForm> = []
  option: { type?: string; parent?: string }
  constructor(option?: { type?: string; parent?: string }) {
    super()
    this.option = option || {}
    this.refresh()
  }
  refresh = async (): Promise<boolean> => {
    if (this.state === networkState.pending) return false
    try {
      this.state = networkState.pending
      this.list = await req
        .get('/categories', { params: this.option })
        .then((result) => result.data as Array<categoryDateForm>)
      this.state = networkState.success
    } catch {
      this.state = networkState.err
      console.warn('get category error')
    }
    return this.state === networkState.success ? true : false
  }
}
class GetCategoryInfo extends ReqBaseClass {
  categoryInfo!: categoryDateForm
  async get({ id }: Record<string, string>): Promise<false | categoryDateForm> {
    this.state = networkState.pending
    const result: false | categoryDateForm = await req
      .get(`/categories/${id}`)
      .then((result) => result.data as categoryDateForm)
      .catch(() => false)
    if (result) {
      this.state = networkState.success
      this.categoryInfo = result
    } else {
      this.state = networkState.err
    }
    return result
  }
}

class CreateCategory extends ReqBaseClass {
  async create(data: { name: string; parent?: string }): Promise<boolean> {
    this.state = networkState.pending
    const result = await req
      .post('/categories', data)
      .then(() => {
        this.state = networkState.success
        return true
      })
      .catch(() => {
        this.state = networkState.err
        return false
      })

    return result
  }
}
class ReplaceCategory extends ReqBaseClass {
  async put({ id, name, parent }: Record<string, string>): Promise<boolean> {
    this.state = networkState.pending
    return req
      .put(`/categories/${id}`, { name, parent })
      .then(() => {
        this.state = networkState.success
        return true
      })
      .catch(() => {
        this.state = networkState.err
        return false
      })
  }
}
class DelCategory extends ReqBaseClass {
  async del({ id }: { id: string }): Promise<boolean> {
    this.state = networkState.pending
    const result = await req
      .delete(`/categories/${id}`)
      .then(() => {
        this.state = networkState.success
        return true
      })
      .catch(() => {
        this.state = networkState.err
        return false
      })

    return result
  }
}

export {
  CreateCategory,
  GetCategories,
  GetCategoryInfo,
  DelCategory,
  ReplaceCategory,
}
