<template>
  <router-link
    :to="routerToOption"
    class=" hero-info-btn border border-solid rounded-md flex flex-row justify-center py-3"
  >
    <p class="text-4xl flex items-center">
      <i
        :class="[fontIconClass ? fontIconClass : `fa fa-play-circle-o`]"
        class="align-middle  pr-3"
        aria-hidden="true"
      ></i>
    </p>
    <p class="btn-text text-2xl">
      <span class="align-middle">{{ content ? content : '英雄介绍视频' }}</span>
    </p>
  </router-link>
</template>
<script setup lang="ts">
import { defineProps } from 'vue-demi'
import type { RouteLocationRaw}from 'vue-router'
import  { useRouter}from 'vue-router'

defineProps<{
  routerToOption: RouteLocationRaw
  content?:string
  fontIconClass?:string
}>()
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.hero-info-btn {
  background: #fcfcfc;
  .fa {
    color: $yellow;
  }
  .p {
    line-height: 0;
  }
}
</style>
