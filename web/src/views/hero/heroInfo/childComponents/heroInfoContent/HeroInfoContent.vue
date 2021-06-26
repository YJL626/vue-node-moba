<template>
  <div class="wrap">
    <ul
      class="hero-nav flex justify-around text-xl border-b py-5 border-gray-300 bg-white"
    >
      <li v-for="(item, index) in ['英雄初识', '进阶攻略']" :key="item">
        <a
          @click.prevent="onClick(index)"
          :class="{ active: index === activeIndex }"
          >{{ item }}</a
        >
      </li>
    </ul>
    <Swiper @swiper="onSwiper" autoHeight @slideChange="onSliderChange">
      <SwiperSlide>
        <HeroInfoHeroVideoVue :heroInfo="heroInfo" />
        <HeroInfoHeroSkillsVue :heroInfo="heroInfo" />
        <HeroInfoRecVue :heroInfo="heroInfo" />
        <BaseCardVue
          v-for="(tip, index) in heroInfo.tips"
          :key="tip._id"
          class="pb-5"
          ><CardHeaderVue
            :title="tip.title"
            isBload
            :fontIconClass="tipFontIconClass[index]"
          />
          <p class="text-xl">{{ tip.content }}</p>
        </BaseCardVue>
        <BaseCardVue>
          <CardHeaderVue
            title="英雄关系"
            isBload
            fontIconClass="fa fa-random"
          />
          <ul>
            <li
              v-for="heroRelation in heroInfo.heroRelations"
              :key="heroRelation._id"
            >
              <p class="text-2xl mt-3 mb-4">{{ heroRelation.title }}</p>
              <ul class="gray-border">
                <li
                  v-for="heroRelationItem in heroRelation.list"
                  :key="heroRelationItem._id"
                  class="flex pb-6  "
                >
                  <img
                    class="w-20 h-20 mr-6 rounded-md"
                    :src="heroRelationItem.pic"
                    :alt="heroRelationItem.content"
                  />
                  <p class="text-xl">{{ heroRelationItem.content }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </BaseCardVue>
      </SwiperSlide>
      <SwiperSlide>
        <HeroInfoVideosVue
          :heroInfo="heroInfo"
          @updateAutoHeight="updateSwiperHeight"
        />
      </SwiperSlide>
    </Swiper>
  </div>

  <div></div>
</template>
<script setup lang="ts">
import type { HeroInfo } from '@/type/heroInfoType'

import {  defineProps, nextTick, ref, shallowRef, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper as Swiperctr } from 'swiper'
import 'swiper/swiper.scss'
import { noop } from '@/utils/utils';
import { EMPTY_OBJECT } from '@/globalState';

import HeroInfoHeroVideoVue from './childComponents/HeroInfoHeroVideo.vue';
import HeroInfoHeroSkillsVue from './childComponents/HeroInfoHeroSkills.vue';
import HeroInfoRecVue from './childComponents/HeroInfoRec.vue';
import BaseCardVue from '@/components/BaseCard.vue';
import CardHeaderVue from '@/components/CardHeader.vue';
import HeroInfoVideosVue from './childComponents/HeroInfoVideos.vue';

 defineProps<{
  heroInfo: HeroInfo
}>()
const tipFontIconClass=['fa fa-database','fa fa-handshake-o',"fa fa-motorcycle"]
const activeIndex = ref(0)

const swiperCtr = shallowRef(noop as unknown as Swiperctr)
let updateSwiperHeight = shallowRef(noop  as Swiperctr['updateAutoHeight'])
let slideTo = shallowRef(noop as Swiperctr['slideTo'])
const onSwiper = (ctr: Swiperctr) => {
  if (swiperCtr.value !== (noop as unknown)) return
  updateSwiperHeight.value = useDebounceFn(ctr.updateAutoHeight.bind(ctr), 200)
  slideTo.value = ctr.slideTo.bind(ctr)
  swiperCtr.value = ctr
}
const onClick = (index:number)=>{
  activeIndex.value=index
  slideTo.value(index)
  updateSwiperHeight.value()
}
const onSliderChange=()=>{
  activeIndex.value = swiperCtr.value.activeIndex
  updateSwiperHeight.value()
}
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.hero-nav {
  .active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background-color: $yellow;
      right: 0;
      left: 0;
      bottom: -0.4rem;
      height: 0.3rem;
    }
  }
}
</style>
