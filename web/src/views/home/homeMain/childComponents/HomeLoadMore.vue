<template>
  <router-link
    class="block bg-white text-gray-400 text-xl text-center py-5"
    :to="{ name: 'strategy' }"
    :href="strategyCenterURL"
    >加载更多内容</router-link
  >
</template>
<script setup lang="ts">
import { strategyCenterURL } from '@/globalState'
</script>
<style lang="scss" scope></style>
