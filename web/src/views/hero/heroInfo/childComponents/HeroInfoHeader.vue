<template>
  <div class="hero-header shadow h-80 relative" v-if="heroInfo">
    <img class="h-full" :src="heroInfo?.bgcPic" alt="" />
    <div
      class="hero-attribute absolute bottom-6 left-6 right-6 text-white z-10"
    >
      <p class=" hero-title animate__animated animate__slideInLeft  my-1">
        {{ heroInfo.heroId.title }}
      </p>
      <p
        class="hero-name animate__animated animate__slideInLeft text-show-animation   text-4xl font-extrabold"
      >
        {{ heroInfo.heroId.name }}
      </p>
      <p class=" text-show-animation animate__animated animate__slideInLeft">
        {{ heroCategory }}
      </p>
      <div class="conver flex  ">
        <ul class="flex flex-1 animate__animated animate__slideInLeft">
          <li
            v-for="heroScores in heroScores"
            :key="heroScores.scoreName"
            class="text-xs pr-3"
          >
            <span>{{ heroScores.scoreName }}</span
            ><i
              class="inline-block align-middle  transform scale-75"
              :class="[heroScores.scoreValueClass]"
            ></i>
          </li>
        </ul>
        <router-link
          :to="{
            name: 'HeroInfoSkins',
            params: { skins: JSON.stringify(heroInfo.skins) },
          }"
          class="text-gray-400  align-middle "
        >
          <span class="align-middle pr-2"
            >皮肤: {{ heroInfo.skins.length }}
          </span>
          <i class="fa fa-angle-right fa-2x align-middle"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue-demi'
import type { HeroInfo } from '@/type/heroInfoType';
const props = defineProps<{
  heroInfo: HeroInfo
}>()
const  heroCategory = computed(()=>{
  const categories = props.heroInfo.heroId.categories.map((categoryInfo)=>categoryInfo.name)
  return categories[1]
            ? categories.join('/')
            : categories[0] || 'EMPETY'
})
const heroScores = computed(()=>{
  type resultItem  = {scoreName:string,scoreValueClass:string}
  const score = props.heroInfo.score
  const scoreEntries = Object.entries(score) as Array<[keyof HeroInfo["score"],number]>
  const result:Array<resultItem> = []
    scoreEntries.forEach(([scoreEnName,scoreValue])=>{
      const scoreValueClass = `${scoreEnName}-score-${scoreValue}`
      switch (scoreEnName) {
        case "difficult":
          result[0] = {scoreName:"难度",scoreValueClass}
          break;
        case "skill":
          result[1] = {scoreName:"技能",scoreValueClass}
          break;
        case "attack":
          result[2] = {scoreName:"攻击",scoreValueClass}
          break;
        case "survive":
          result[3] = {scoreName:"生存",scoreValueClass}
          break;
        default:
          console.warn('unexpected item')
        result.push({scoreName: scoreEnName,scoreValueClass})
          break;
      }
    })
    return result
})
</script>
<style lang="scss" scope>
.hero-header.shadow {
  position: relative;
  &::after {
    content: '6';
    position: absolute;
    top: 0;
    background-image: url('//game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/bt.png');
    height: 100%;
    width: 100%;
  }
}
</style>
