<template>
  <TopBarVue>
    <template #logo-text>
      <p class="text-white text-xl align-middle  flex-1">
        <span class=" px-5">王者荣耀</span><span>攻略站</span>
      </p>
    </template>
    <template #right v-if="!hiddenMoreHero">
      <a
        @click.prevent="$router.push({ name: `heroList` })"
        class="text-white align-middle flex items-center text-2xl font-medium h-full"
      >
        <span class="pr-2 ">更多英雄</span>
        <span class="font-black"> ></span>
      </a>
    </template>
    <template #right v-else> <div></div> </template>
  </TopBarVue>
</template>
<script setup lang="ts">
import TopBarVue from '@/components/TopBar.vue'
import { defineProps } from 'vue-demi'
defineProps<{
  hiddenMoreHero?: boolean
}>()
</script>
<style scoped></style>
