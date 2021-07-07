import { Ref } from 'vue'

type Unref<T> = T extends Ref ? T['value'] : T
type MaybeRef<T> = T | Ref<T>
export { MaybeRef, Unref }
