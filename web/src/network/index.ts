import { reactive } from '@vue/reactivity'
import { serveBaseUrl } from '@/config'
import axios from 'axios'
enum networkState {
  none,
  pending,
  success,
  err,
}
class ReqBaseClass {
  state: networkState = networkState.none
  constructor() {
    return reactive(this) as ReqBaseClass
  }
  protected _setStatePending(): void {
    this.state = networkState.pending
  }
  protected _setStateSuccess(): void {
    this.state = networkState.success
  }
  protected _setStateErr(): void {
    this.state = networkState.err
  }
}
const req = axios.create({
  baseURL: `${serveBaseUrl}`,
  timeout: 2000,
})

export { req, ReqBaseClass, networkState }
