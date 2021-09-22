<template>
  <header class="m-h-18   w-screen">
    <div
      id="left"
      class="home-top-img flex items-center fixed top-0 z-10 left-0 px-6  "
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
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  hiddenRight: Boolean,
})
</script>
<style lang="scss" scope>
.home-top-img {
  background-image: url('../assets/image/sprit.png');
  background-repeat: repeat-x;
  background-position: 0 87.195%;
  background-size: 37.5rem 45.5rem;
  width: 100%;
  height: 4.6rem;
}
</style>
