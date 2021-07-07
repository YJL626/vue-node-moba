<template>
  <BaseCardVue>
    <CardHeaderVue
      title="精彩视频"
      fontIconClass="fa fa-play-circle"
      :rightConfig="{ routeName: 'strategy' }"
    />
    <hr />
    <template v-if="reqHomeData.state === networkState.success">
      <ul class="home-video-nav mt-6">
        <li
          v-for="(videos, index) in videosCollection"
          :key="videos._id"
          @click="void (activeIndex = index) || slideTo(index)"
          :class="{ active: activeIndex === index }"
        >
          {{ videos.name }}
        </li>
      </ul>
      <Swiper @slideChange="slideChange" @swiper="onSwiper">
        <SwiperSlide v-for="videos in videosCollection" :key="videos._id">
          <div class="home-video-container mt-4">
            <VideoCardVue
              v-for="video in videos.videos"
              :key="video._id"
              :data="video"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </template>
  </BaseCardVue>
</template>
<script setup lang="ts">
import { computed, unref,ref } from 'vue'

import type { Unref } from '@/type'
import type { ReqHomeData } from '@/network/ReqHomeData'

import { Swiper, SwiperSlide } from 'swiper/vue'
import  {  Swiper as SwiperCtr } from 'swiper'

import BaseCardVue from '@/components/BaseCard.vue'
import CardHeaderVue from '@/components/CardHeader.vue'
import VideoCardVue from '@/components/VideoCard.vue'

import { reqHomeData } from '@/network/ReqHomeData'
import { noop } from '@/utils/utils'
import { networkState } from '@/network'

const videosCollection = computed(() => {
  if (!unref(reqHomeData.result).video){
    return noop as Unref<ReqHomeData["result"]>['video']
  }
  return unref(reqHomeData.result).video.sort((a,b)=>a.index-b.index)
})
const activeIndex = ref(0)
const swiperCtr = ref((noop as unknown) as SwiperCtr)
const slideTo = ref((noop as unknown) as SwiperCtr['slideTo'])
const onSwiper = (ctr: SwiperCtr) => {
  swiperCtr.value = ctr
  slideTo.value = ctr.slideTo.bind(ctr)
}

const slideChange = (swiper: { activeIndex: number }) => {
  activeIndex.value = swiper.activeIndex
}
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.home-video-nav {
  display: flex;
  li {
    font-size: 1.4rem;
    margin-right: 4rem;
    border-bottom: 3px solid transparent;
    &.active {
      color: $yellow;
      border-color: $yellow;
    }
  }
}
.home-video-container {
  @apply flex flex-wrap mb-10;
  & > * {
    margin-right: auto;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
