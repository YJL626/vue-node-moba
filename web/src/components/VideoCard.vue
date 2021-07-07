<template>
  <div class="video-card">
    <img :src="data.pic" :alt="data.title" class="rounded-md" />
    <h3>{{ data.title }}</h3>
    <p class="overflow-hidden v-info  text-gray-400 px-1">
      <span class="click-count float-left"
        ><i class="fa fa-play-circle-o mr-1" />{{ data.clickCount }}</span
      >
      <span class="float-right">{{ data.createTime }}</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import type { VideoInfo } from '@/network/ReqHomeData'
import { defineProps } from 'vue-demi';
defineProps<{
  data:VideoInfo
}>()
</script>
<style lang="scss" scope>
.video-card {
  width: 49%;
  h3 {
    margin-top: 0.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
    -webkit-box-orient: vertical; /* 垂直排列 */
    word-break: break-all; /* 内容自动换行 */
  }
  .v-info {
    font-size: 1rem;
  }
}
</style>
