<template>
  <div class="header py-6 text-2xl ">
    <slot name="icon" />
    <span>{{ title }}</span>
    <a
      v-if="rightConfig"
      @click.prevent="router.push({ name: rightConfig?.routeName })"
      ><i class="fa fa-ellipsis-h float-right"
    /></a>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
defineProps<{
  title: string
  rightConfig?: { routeName: string }
}>()
</script>
<style lang="scss" scope></style>
