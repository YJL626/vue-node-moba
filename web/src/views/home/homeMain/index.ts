import { Component, h } from '@vue/runtime-core'

import { GetBanner } from '@/network/ReqBanner'
import { toRefs } from 'vue'

import HomeArticleVue from './childComponents/HomeArticle.vue'
import HomeNavVue from './childComponents/HomeNav.vue'
import MCarouselVue from '@/components/MCarousel.vue'
import HomeHeroVue from '@/views/home/homeMain/childComponents/HomeHero.vue'
import { pageTitle } from '@/globalState'
import { reqHomeData } from '@/network/ReqHomeData'
import HomeVideoVue from './childComponents/HomeVideo.vue'
import HomeLoadMoreVue from './childComponents/HomeLoadMore.vue'

const HomeMain: Component = {
  name: 'HomeMain',
  setup() {
    reqHomeData
    const { banners } = toRefs(new GetBanner({ category: 'homeBanner' }))
    pageTitle.value = '王者荣耀'

    return () => [
      h(MCarouselVue, { banners: banners.value }),
      h(HomeNavVue),
      h(HomeArticleVue),
      h(HomeHeroVue),
      h(HomeVideoVue),
      h(HomeLoadMoreVue),
    ]
  },
}

export { HomeMain }
