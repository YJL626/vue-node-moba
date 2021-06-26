<template>
  <header class="m-h-18   w-screen ">
    <div
      id="left"
      class="home-top-img flex items-center fixed top-0 z-10 left-0  px-6 "
    >
      <a
        @click.prevent="$router.push({ name: `homeMain` })"
        class="log-img "
      ></a>
      <slot name="logo-text">
        <div class="logo-content flex flex-grow">
          <div class="logo-title pl-5">
            <h1 class="text-white text-xl">王者荣耀</h1>
            <p class="pt-1 m-text-gray text-sm">团队成就更多</p>
          </div>
        </div>
      </slot>
      <slot name="right">
        <a
          v-if="!hiddenRight"
          href="//pvp.qq.com/zlkdatasys/mct/d/play.shtml"
          class="block mb-1 download-img"
        ></a>
      </slot>
    </div>
  </header>
</template>
<script setup lang="ts">
import { defineProps } from 'vue-demi'

defineProps<{
  hiddenRight?: boolean
}>()
</script>
<style lang="scss" scope></style>
