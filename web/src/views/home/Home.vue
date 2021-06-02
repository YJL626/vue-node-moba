<template>
  <TopBar />
  <NavBar />
  <router-view></router-view>
</template>
<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import NavBar from '@/views/home/homeMain/HomeNavBar.vue'
</script>

<style lang="scss" scope></style>
