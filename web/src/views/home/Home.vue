<template>
  <TopBar />
  <NavBar />
  <MCarouselVue :banners="banners" />
  <HomeNavVue />
  <HomeArticeVue />
</template>
<script setup lang="ts">
import { toRefs } from 'vue'

import { GetBanner } from '@/network/Banner'

import TopBar from '@/components/TopBar.vue'
import NavBar from '@/views/home/childComponents/NavBar.vue'
import MCarouselVue from '@/components/MCarousel.vue'
import HomeNavVue from './childComponents/HomeNav.vue'
import HomeArticeVue from './childComponents/HomeArtice.vue'

const { banners } = toRefs(new GetBanner({ category: 'homeBanner' }))
</script>

<style lang="scss" scope></style>
