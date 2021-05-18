import { reqBaseUrl } from '@/config'
import axios from 'axios'
enum networkState {
  none,
  pending,
  err,
  success,
}
const req = axios.create({
  baseURL: `${reqBaseUrl}/admin/api`,
  timeout: 2000,
})
export { req }
