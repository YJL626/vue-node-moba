<template>
  <li>
    <a
      @click.prevent="$router.push(`/heroes/${heroItemData._id}`)"
      class="inline-block"
      v-if="heroItemData"
    >
      <img
        @load="emit('img-load')"
        :src="heroItemData.heroImg"
        :alt="heroItemData.title"
        class="mx-auto rounded-md"
      />
      <h3 class="text-center text-gray-400">{{ heroItemData.name }}</h3>
    </a>
  </li>
</template>
<script setup lang="ts">
import type { hero } from '@/network/ReqHeroList';
import { defineEmit, defineProps } from '@vue/runtime-core'
const emit =defineEmit(["img-load"])
defineProps<{
  heroItemData: hero
}>()
</script>
<style lang="scss" scope></style>
