<template>
  <div>
    <HeroInfoTopBarVue />
    <img :src="pic" alt="hero info picture" />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue-demi'
import HeroInfoTopBarVue from './HeroInfoTopBar.vue'
HeroInfoTopBarVue
defineProps<{
  pic: string
}>()
</script>
<style lang="scss" scope></style>
