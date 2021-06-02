<template>
  <div id="article-page " v-if="ArticleNetworkState === networkState.success">
    <div class="title-container flex items-center pr-8 py-2 ">
      <a @click.prevent="router.back" class="text-4xl mb-1 pl-2 pr-4 ">
        <i class="fa fa-angle-left  text-blue-400  "></i>
      </a>

      <h2 class="w-8/12 text-blue-500 truncate text-2xl font-extrabold">
        {{ articleData.title }}
      </h2>
      <span class=" ml-auto text-sm text-gray-400">
        {{ day(articleData.time).format('YYYY-MM-DD') }}
      </span>
    </div>
    <hr class="box-content bg-gray-300 mb-6 m-h-1px  " />
    <div class="info-container px-8" v-html="articleData.articleInfo"></div>
  </div>
</template>
<script setup lang="ts">
import day from 'dayjs'
import { networkState } from '@/network'
import { ReqArticleInfo } from '@/network/ReqArticleInfo'
import { defineProps, toRefs } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
const props = defineProps<{ id: string }>()
const router = useRouter()
const { articleData, state: ArticleNetworkState } = toRefs(
  new ReqArticleInfo({ id: props.id })
)
</script>
<style lang="scss" scope>
iframe {
  width: 100%;
}
</style>
