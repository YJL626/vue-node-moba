<template>
  <div>
    <li class="mb-4" v-if="article?._id">
      <router-link
        :to="{ name: 'articleInfo', query: { id: article._id } }"
        :href="article.src"
        class="flex  items-center"
      >
        <span
          class="text-base px-1 py-1 border rounded-md text-center inline-block mr-2"
          :style="{
            borderColor: getTagColor(getTagName(article)),
            color: getTagColor(getTagName(article)),
          }"
          >{{ getTagName(article) }}</span
        >
        <span class="w-3/5  truncate text-xl mr-0  ">
          {{ article.title }}
        </span>
        <span class="ml-auto text-gray-400">{{
          dayjs(article.time).format(dateFormat)
        }}</span>
      </router-link>
    </li>
  </div>
</template>
<script setup lang="ts">
import { GetArticleCtr } from '@/network/ReqArticleList'
import { defineProps, getCurrentInstance } from '@vue/runtime-core'
import dayjs from 'dayjs'
type articleCategory = '热门' | '新闻' | '公告' | '活动' | '赛事'

const props = defineProps<{
  article: GetArticleCtr['articles'][0]
  isHotCategory?: boolean
  dateFormat: 'MM-DD' | 'YYYY-MM-DD'
}>()
const getTagColor = (tagName: articleCategory): string => {
  switch (tagName) {
    case '热门':
      return '#FF3636'
    case '新闻':
      return '#1E96AB'
    case '公告':
      return '#DB9E3F'
    case '活动':
      return '#FF3636'
    case '赛事':
      return '#4D9CFF'
  }
}
const instant = getCurrentInstance()
const getTagName = (article: GetArticleCtr['articles'][0]): articleCategory => {
  const primaryCategory = article.categories[0].name as articleCategory
  if (
    props.isHotCategory === false ||
    article.categories.length === 1 ||
    primaryCategory === '公告' ||
    primaryCategory === '活动'
  ) {
    return primaryCategory
  }
  return '热门'
}
</script>
<style lang="scss" scope></style>
