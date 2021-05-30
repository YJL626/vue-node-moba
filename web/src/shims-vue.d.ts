/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'swiper/vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  const Swiper: component
  const SwiperSlide: component
  export { Swiper, SwiperSlide }
}