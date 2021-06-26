import { Component, h } from '@vue/runtime-core'

import { GetBanner } from '@/network/Banner'
import { toRefs } from 'vue'

import HomeArticleVue from './childComponents/HomeArticle.vue'
import HomeNavVue from './childComponents/HomeNav.vue'
import MCarouselVue from '@/components/MCarousel.vue'
import HomeHeroVue from '@/views/home/homeMain/childComponents/HomeHero.vue'
import { pageTitle } from '@/globalState'

const HomeMain: Component = {
  name: 'HomeMain',
  setup() {
    const { banners } = toRefs(new GetBanner({ category: 'homeBanner' }))
    pageTitle.value = '王者荣耀-镜像站,仅供学习交流'
    return () => [
      h(MCarouselVue, { banners: banners.value }),
      h(HomeNavVue),
      h(HomeArticleVue),
      h(HomeHeroVue),
    ]
  },
}

export { HomeMain }
