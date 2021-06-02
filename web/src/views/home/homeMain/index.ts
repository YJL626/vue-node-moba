import { Component, h } from '@vue/runtime-core'

import { GetBanner } from '@/network/Banner'
import { reactive, toRefs, toRef } from 'vue'

import HomeArticleVue from './HomeArticle.vue'
import HomeNavVue from './HomeNav.vue'
import MCarouselVue from '@/components/MCarousel.vue'
import { GetArticleCtr } from '@/network/getArticleList'
import { articleCategories } from '../utils/article.utils'

const HomeMain: Component = {
  name: 'HomeMain',
  setup() {
    const { banners } = toRefs(new GetBanner({ category: 'homeBanner' }))

    return () => [
      h(MCarouselVue, { banners: banners.value }),
      h(HomeNavVue),
      h(HomeArticleVue),
    ]
  },
}
export { HomeMain }
