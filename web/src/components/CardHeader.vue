<template>
  <div class="header py-5 text-2xl ">
    <span class="title inline-block pr-2"
      ><i v-if="fontIconClass" :class="fontIconClass" aria-hidden="true"></i>
    </span>
    <span :class="{ bload: isBload }">{{ title }}</span>
    <a
      v-if="rightConfig"
      @click.prevent="router.push({ name: rightConfig?.routeName })"
      ><i class="fa fa-ellipsis-h float-right"
    /></a>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps<{
  title: string
  rightConfig?: { routeName: string }
  fontIconClass?: string
  isBload?: boolean
}>()
</script>
<style lang="scss" scope>
.bload {
  font-weight: 700;
}
</style>
