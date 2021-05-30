<template>
  <header class="m-h-18   w-screen">
    <div
      id="left"
      class="home-top-img flex items-center absolute top-0 left-0  px-6 "
    >
      <div class="logo-content flex flex-grow">
        <a href="//pvp.qq.com/m/index.shtml" class="log-img "></a>
        <div class="logo-title pl-5">
          <h1 class="text-white text-xl">王者荣耀</h1>
          <p class="pt-1 m-text-gray text-sm">团队成就更多</p>
        </div>
      </div>
      <slot name="right">
        <a
          href="//pvp.qq.com/zlkdatasys/mct/d/play.shtml"
          class="block mb-1 download-img"
        ></a>
      </slot>
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style lang="scss" scope></style>
