import { useTitle } from '@vueuse/core'

const EMPTY_OBJECT: Record<string, never> = {}
const pageTitle = useTitle()
const strategyCenterURL = '//pvp.qq.com/m/m201706/strategycenter.shtml'
export { pageTitle, EMPTY_OBJECT,strategyCenterURL }
