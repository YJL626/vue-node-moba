<template>
  <TopBarVue hiddenRight />
  <div class="p-2">
    <Swiper @swiper="onSwiper" @slideChange="onSlideChange" loop>
      <SwiperSlide v-for="skin in skins" :key="skin._id">
        <img class="w-full p-1 mb-4" :src="skin.pic" :alt="skin.name" />
        <p class="text-center mb-2">{{ skin.name }}</p>
      </SwiperSlide>
    </Swiper>
  </div>
  <ul class="skin-controller flex justify-center">
    <li
      class="bg-gray-500"
      :class="{ active: active === index }"
      v-for="(skin, index) in skins"
      :key="skin.name"
      @click="onNavClick(index)"
    />
  </ul>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as Swiperctr } from 'swiper'

import type { HeroInfo } from '@/type/heroInfoType';
import { computed, defineProps, ref } from 'vue';
import 'swiper/swiper.scss';
import { noop } from '@/utils/utils';
import { useDebounceFn } from '@vueuse/core';
import TopBarVue from '@/components/TopBar.vue';

const props = defineProps<{
  skins:string
}>()
const skins = computed(()=>{
  return JSON.parse(props.skins) as HeroInfo['skins']
})
const active = ref(0)
const swiperCtr = ref((noop as unknown) as Swiperctr)
let updateSwiperHeight = ref((noop as unknown) as Swiperctr['updateAutoHeight'])
let slideTo = ref((noop as unknown) as Swiperctr['slideTo'])
const onSwiper = (ctr: Swiperctr) => {
  if (swiperCtr.value !== (noop as unknown)) return
  updateSwiperHeight.value = useDebounceFn(ctr.updateAutoHeight.bind(ctr), 200)
  slideTo.value = ctr.slideTo.bind(ctr)
  swiperCtr.value = ctr
}

const onNavClick = (index:number)=>{
  active.value=index
  slideTo.value(index)
}
const onSlideChange = (ctr:Swiperctr)=>{
  const activeIndex = ctr.activeIndex
  active.value =activeIndex >  skins.value.length ? 0 :activeIndex - 1
}
</script>
<style lang="scss" scope>
.skin-controller {
  li {
    background-color: gray;
    width: 1rem;
    height: 0.5rem;
    margin: 0 0.2rem;
    transition: width 0.5s;
    border-radius: 0.4rem;
    &.active {
      background-color: black;
      width: 1.5rem;
    }
  }
}
</style>
