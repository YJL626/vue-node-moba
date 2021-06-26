<template>
  <div>
    <ul>
      <li
        v-for="videoInfo in learnVideos"
        :key="videoInfo._id"
        class="px-4   bg-white"
      >
        <a :href="videoInfo.src" class="flex py-4 gray-border">
          <img :src="videoInfo.pic" :alt="videoInfo.title" />
          <div class="info flex flex-col justify-between px-5">
            <p>{{ videoInfo.title }}</p>
            <p>
              <span>
                <i class="fa fa-play-circle-o" aria-hidden="true" />{{
                  videoInfo.createTime
                }}</span
              >
              <span class="float-right"> {{ videoInfo.clickCount }}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
    <p
      class="text-center py-5 text-gray-500"
      @click="currentVideoLen += pageSize"
    >
      {{
        currentVideoLen >= heroInfo.learnVideos.length
          ? '全部加载完成'
          : '点击加载数据'
      }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { HeroInfo } from '@/type/heroInfoType'
import { computed, defineEmit, defineProps, ref } from 'vue'
const emit =  defineEmit(['updateAutoHeight'])
const props =  defineProps<{
  heroInfo: HeroInfo
  pageSize?:number
}>()
const pageSize = computed(()=>{
  if(props.pageSize)return props.pageSize
  return 5
})
const currentVideoLen =ref(pageSize.value)
const learnVideos =computed(()=>{
  emit("updateAutoHeight")
  return props.heroInfo.learnVideos.slice(0,currentVideoLen.value)
})
</script>
<style lang="scss" scoped>
img {
  width: 11.6rem;
}
</style>
