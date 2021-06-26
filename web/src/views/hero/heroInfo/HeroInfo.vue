<template>
  <div v-loading="isLoading" class="min-h-screen w-screen overflow-hidden">
    <div class="warp" v-if="isFinished">
      <HeroInfoTopBarVue />
      <HeroInfoHeaderVue :heroInfo="heroInfoData" />
      <HeroInfoContentVue :heroInfo="heroInfoData" />
    </div>
  </div>
</template>
<script setup lang="ts">

import type {Ref} from "vue"
import { defineProps } from 'vue'
import { watch, watchEffect} from "vue"
import { useAxios } from '@vueuse/integrations'
import { req } from '@/network'
import HeroInfoTopBarVue from './childComponents/HeroInfoTopBar.vue'
import HeroInfoHeaderVue from './childComponents/HeroInfoHeader.vue'
import HeroInfoContentVue from './childComponents/heroInfoContent/HeroInfoContent.vue'
import type { HeroInfo } from "../../../type/heroInfoType"
const {id} = defineProps<{
  id: string
}>()
const { data, isLoading,isFinished } = useAxios<HeroInfo>(
  `/heroes/${id}`,
  { method: 'get' },
  req
)
const heroInfoData = data as Ref<HeroInfo>
</script>
<style lang="scss" scope></style>
