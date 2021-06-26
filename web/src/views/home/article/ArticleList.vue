<template>
  <ul class="category-header flex justify-around">
    <li
      class="flex-1 box-content p-3 mb-4 text-center  border-b border-r m-border-gray text-2xl  "
      v-for="(articleCategory, index) in articleCategories"
      :key="articleCategory"
      :class="{ active: index === currenPage }"
      @click="currenPage = index"
    >
      {{ articleCategory }}
    </li>
  </ul>

  <div
    class="px-4 "
    v-for="(articleCtr, index) in articleCtrs"
    :key="index"
    v-show="currenPage === index"
  >
    <ul class="article-categories" :key="index">
      <ArticleItemVue
        v-for="article in articleCtr.articles"
        :article="article"
        :key="article._id"
        dateFormat="YYYY-MM-DD"
      />
    </ul>
    <button
      @click="articleCtr.getMore"
      class="block w-full py-3 rounded-xl bg-gray-300 text-gray-500 text-2xl"
    >
      {{
        articleCtrs[index].state === networkState.pending
          ? '正在加载'
          : articleCtrs[index].isMaxPageCount
          ? '已经到最底了'
          : '点击加载更多'
      }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { networkState } from '@/network'
import { GetArticleCtr } from '@/network/getArticleList'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { articleCategories } from '../utils/article.utils'
import ArticleItemVue from './ArticleItem.vue'
const articleCtrs = articleCategories.map(
  (category) =>
    new GetArticleCtr({
      category,
      size: 15,
      page: 1,
    })
)
const currenPage = ref(0)
//实现懒加载
watch(currenPage, (value) => articleCtrs[value].loadData(), { immediate: true })
</script>
<style lang="scss" scope>
.category-header {
  .active {
    color: #fff;
    background-image: url('//game.gtimg.cn/images/yxzj/m/m201606/cp/video_navBg.png');
    background-size: 100%;
  }
}
</style>
