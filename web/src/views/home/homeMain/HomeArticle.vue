<template>
  <HomeCardVue>
    <CardHeaderVue title="新闻资讯" :rightConfig="{ routeName: 'articleList' }">
      <template #icon>
        <i class="fa fa-newspaper-o pr-2" />
      </template>
    </CardHeaderVue>
    <hr class="mb-6" />
    <ul class="article-categoriy-list flex justify-between active mb-4">
      <li
        v-for="(category, index) in articleCategories"
        :key="category"
        class=" m-pb-1px text-xl"
        :class="{ active: currentPage === index }"
        @click="() => ((currentPage = index), swiperCtr.slideTo(index))"
      >
        {{ category }}
      </li>
    </ul>
    <Swiper @slideChange="slideChange" @swiper="onSwiper">
      <SwiperSlide v-for="(articleList, index) in articleLists" :key="index">
        <ul>
          <ArticleItemVue
            v-for="article in articleList.articles"
            :key="article._id"
            :article="article"
            :isHotCategory="index === 0"
          /></ul
      ></SwiperSlide>
    </Swiper>
    <div class="article-container"></div>
  </HomeCardVue>
</template>
<script setup lang="ts">
import { reactive, ref, toRef } from '@vue/reactivity'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Controller, Swiper as SwiperCtr } from 'swiper'
import 'swiper/swiper.scss'

import { GetArticleCtr } from '@/network/getArticleList'

import CardHeaderVue from '@/components/CardHeader.vue'
import HomeCardVue from './HomeCard.vue'
import { noop } from '@/utils/utils'
import { articleCategories } from '../utils/article.utils'
import { defineAsyncComponent, watch } from '@vue/runtime-core'
import ArticleItemVue from '../article/ArticleItem.vue'
import { networkState } from '@/network'

SwiperCore.use([Controller])
const swiperCtr = ref((noop as unknown) as SwiperCtr)
const onSwiper = (ctr: SwiperCtr) => {
  swiperCtr.value = ctr
}

const slideChange = (swiper: { activeIndex: number }) => {
  currentPage.value = swiper.activeIndex
}
const articleLists = reactive(
  articleCategories.map(
    (category) => new GetArticleCtr({ category, page: 1, size: 5 }, 5)
  )
)
const currentPage = ref(0)
//初始化默认页面
articleLists[currentPage.value].init()
//实现懒加载
watch(currentPage, (value) => {
  if (articleLists[value].state !== networkState.none) return
  articleLists[value].init()
})
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.article-categoriy-list {
  li {
    border-bottom: transparent solid 3px;
  }
  .active {
    color: $yellow;
    border-color: $yellow;
  }
}
</style>
