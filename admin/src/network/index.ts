import { reqBaseUrl } from '@/config'
import axios from 'axios'

const req = axios.create({
  baseURL: reqBaseUrl,
  timeout: 2000,
})
export { req }
