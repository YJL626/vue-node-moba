import { useTitle } from '@vueuse/core'

const EMPTY_OBJECT: Record<string, never> = {}
const pageTitle = useTitle()
export { pageTitle, EMPTY_OBJECT }
