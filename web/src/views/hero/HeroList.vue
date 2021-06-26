<template>
  <div id="hero-list" class="px-5 mt-3">
    <div class="hero-nav">
      <ul class="flex justify-between text-xl py-2">
        <li
          v-for="(heroCategoriy, index) in heroCategories"
          :key="heroCategoriy"
          :class="{ active: activeCategory === index }"
          @click="activeCategory = index"
        >
          {{ heroCategoriy }}
        </li>
      </ul>
    </div>
    <div class="hero-list-container mt-5">
      <ul
        v-for="(heroes, index) in heroLists"
        :key="index"
        v-show="activeCategory === index"
        v-loading="heroLists.length === 0"
      >
        <HeroAvatarVue
          v-for="hero in heroes"
          :heroItemData="hero"
          :key="hero._id"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MaybeRef} from '@vueuse/core'

import { pageTitle } from '@/globalState'
import { toRefs } from '@vueuse/core'
import {  reactive, ref, toRaw, unref, watch } from 'vue-demi'
import { heroBaseCategories } from '../home/utils/heroCategories'
import HeroAvatarVue from './childComponents/HeroAvatar.vue'
import { ReqHeroList } from '@/network/ReqHeroList'
import { networkState } from '@/network'
import { hasOwnProperty } from '@/utils/utils'
pageTitle.value = 'list'
const heroCategories = ['全部', ...heroBaseCategories]
const activeCategory = ref(0)
const reqHeroListCtr = new ReqHeroList().loadData()
const heroLists: Array<ReqHeroList['heroes']> = reactive([])
watch(
  [activeCategory,reqHeroListCtr],
  () =>{
    const active = unref(activeCategory)
    const {heroes,state} = reqHeroListCtr
    const categoryName = heroCategories[active]
    if(state!==networkState.success || hasOwnProperty(heroLists ,active)  )return
    if(heroCategories[active]==="全部" )return heroLists[active] = heroes
    heroLists[active] = heroes.filter((hero)=>hero.categories.some((category)=>category.name=== categoryName ))
  }

)
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
#hero-list {
  .active {
    color: $yellow;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background: $yellow;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
    }
  }
  .hero-list-container {
    overflow: hidden;
    ul {
      width: 35rem;
      overflow: hidden;
      li {
        float: left;
        width: 18%;
        margin-right: 2%;
        margin-bottom: 1.5rem;
        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
