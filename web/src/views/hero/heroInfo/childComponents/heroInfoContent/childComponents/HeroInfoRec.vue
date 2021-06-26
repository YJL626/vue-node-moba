<template>
  <BaseCardVue>
    <CardHeaderVue
      title="加点建议"
      isBload
      fontIconClass="fa fa-plus-square-o"
    />
    <ul class="hero-addponit-rec ">
      <li v-for="recItem in addPointRec" :key="recItem.name">
        <p class="recItem-name text-center ">{{ recItem.name }}</p>
        <ul class="rec-skill-list ">
          <li v-for="skill in recItem.skills" :key="skill.skillName">
            <img :src="skill.skillPic" :alt="skill.skillName" />
            <p class="text-center">{{ skill.skillName }}</p>
          </li>
        </ul>
      </li>
    </ul>
    <div class="rec-equip">
      <CardHeaderVue title="出装推荐" isBload fontIconClass="fa fa-thumbs-up" />
      <ul class="rec-equip-type-list">
        <li v-for="(type, index) in recEquip.types" :key="type">
          <p :class="`rec-equip-type-name-${index + 1} `">{{ type }}</p>
          <ul class="rec-equip-list" :class="{ 'gray-border': index === 0 }">
            <li v-for="skill in recEquip.recEquipLists[index]" :key="skill._id">
              <img :src="skill.pic" :alt="skill.name" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </BaseCardVue>
  <BaseCardVue>
    <CardHeaderVue title="铭文推荐" isBload fontIconClass="fa fa-database" />
    <ul class="rune-list flex justify-around mb-6">
      <li v-for="rune in heroInfo.runes" :key="rune._id">
        <img class=" m-auto" :src="rune.pic" :alt="rune.name" />
        <p class="text-center text-2xl">
          {{ rune.name }}
        </p>
        <p class="text-center" v-for="buff in rune.buffs" :key="buff">
          {{ buff }}
        </p>
      </li>
    </ul>
  </BaseCardVue>
</template>
<script setup lang="ts">
import BaseCardVue from '@/components/BaseCard.vue'
import CardHeaderVue from '@/components/CardHeader.vue';
import type { HeroInfo } from '@/type/heroInfoType';
import { computed } from 'vue';
import { defineProps } from 'vue-demi';
const props = defineProps<{
  heroInfo: HeroInfo
}>()
const addPointRec =computed(()=>{
  type addPointRecItem = {name:string,skills:Array<{skillName:string,skillPic:string}>}
  const originalAddPointRec = props.heroInfo.addPointRec
  const originalMain = originalAddPointRec.main
  const originalSecondary = originalAddPointRec.secondary
  const originalSummonerSpell = originalAddPointRec.summonerSpell

  const main:addPointRecItem = {name:'主升',skills:[{skillPic:originalMain.pic,skillName:originalMain.name}] }
  const second:addPointRecItem = {name:'副升',skills:[{skillPic:originalSecondary.pic,skillName:originalSecondary.name}] }
  const summonerSpell:addPointRecItem = {name:'召唤师技能',skills:originalSummonerSpell.map(skill=>({skillPic:skill.pic,skillName:skill.name})) }
  return [main,second,summonerSpell ]
})
const recEquip = computed(()=>{
  const heroInfo = props.heroInfo
  const smoothly = heroInfo.equipmentRecs.smoothly
  const hard = heroInfo.equipmentRecs.hard
  return {
    types:['顺风出装', '逆风出装'],
    recEquipLists:[smoothly,hard ]
  }
})
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';

.hero-addponit-rec {
  display: flex;
  .recItem-name {
    font-size: 1.6rem;
    padding-bottom: 0.6rem;
  }
  .rec-skill-list {
    display: flex;
    justify-content: space-between;
    li {
      img {
        padding-bottom: 0.5rem;
        width: 6rem;
        border-radius: 50%;
      }
    }
  }
  & > li {
    margin-right: 3rem;
    &:nth-child(3) {
      margin-left: auto;
      margin-right: 0;
      li:nth-child(1) {
        margin-right: 1rem;
      }
    }
  }
}
.rec-equip-type-list {
  & > li {
    & > p {
      @apply text-2xl py-3;
    }
    .rec-equip-type-name-1 {
      @apply pt-0;
    }
  }

  .rec-equip-list {
    display: flex;
    justify-content: space-around;
    li {
      margin: 0.5rem;
      img {
        border-radius: 50%;
      }
    }
  }
}
</style>
