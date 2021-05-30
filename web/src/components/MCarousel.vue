<template>
  <div id="carousel">
    <Swiper
      class="min-height-165"
      :slides-per-view="1"
      :space-between="0"
      :pagination="true"
      :scrollbar="{ draggable: true }"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="banner in banners" :key="banner._id"
        ><a :href="banner.src"><img :src="banner.pic" alt=""/></a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
import 'swiper/components/pagination/pagination.min.css'

import 'swiper/swiper.scss'
import { defineProps } from '@vue/runtime-core'
import { GetBanner } from '@/network/Banner'
defineProps<{
  banners: GetBanner['banners']
}>()

SwiperCore.use([Pagination, Autoplay])
</script>
<style lang="scss" scope>
#carousel {
  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 3%;
    * {
      @apply rounded-sm bg-white opacity-100;
    }
    .swiper-pagination-bullet-active {
      @apply bg-blue-500;
    }
  }
}
.min-height-165 {
  min-height: 160px;
}
</style>
