import { reactive } from '@vue/reactivity'
import { reqBaseUrl } from '@/config'
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
    return reactive(this)
  }
}
const req = axios.create({
  baseURL: `${reqBaseUrl}/admin/api`,
  timeout: 2000,
})

export { req, ReqBaseClass, networkState }
