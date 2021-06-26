<template>
  <div class="hero-vide  bg-white p-5 flex justify-around">
    <HeroInfoContentBtnVue
      :routerToOption="heroInfo.heroVideo"
      class="flex-1 mr-3"
    ></HeroInfoContentBtnVue>
    <HeroInfoContentBtnVue
      :routerToOption="{
        name: 'HeroInfoInfoPic',
        query: { pic: heroInfo.infoPic },
      }"
      class="flex-1"
      content="一图识英雄"
      fontIconClass="fa fa-picture-o"
    >
    </HeroInfoContentBtnVue>
  </div>
</template>
<script setup lang="ts">
import type { HeroInfo } from '@/type/heroInfoType'
import { defineProps } from 'vue-demi'
import HeroInfoContentBtnVue from './HeroInfoContentBtn.vue'
defineProps<{ heroInfo: HeroInfo }>()
</script>
<style lang="scss" scope></style>
