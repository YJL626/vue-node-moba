<template>
  <div class="hero-skills bg-white pt-5 px-5">
    <ul class="skills-nav flex justify-around ">
      <li
        class="flex-1  mx-5"
        @click="activeSkill = index"
        v-for="(skill, index) in heroInfo.skills"
        :key="skill._id"
      >
        <img
          :class="{ active: activeSkill === index }"
          :src="skill.pic"
          :alt="skill.name"
        />
      </li>
    </ul>
    <ul class="skills-info">
      <li
        v-show="activeSkill === index"
        v-for="(skill, index) in heroInfo.skills"
        :key="skill._id"
      >
        <p class="skill-title  mt-8 ">
          <span>{{ skill.name }}</span>
          <span class="plus-vlaue">{{ skill.plusValue }}</span>
        </p>
        <p class="py-5 text-xl ">{{ skill.info }}</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { HeroInfo } from '@/type/heroInfoType'
import { ref } from 'vue'
import { defineProps } from 'vue-demi'

defineProps<{
  heroInfo: HeroInfo
}>()
const activeSkill = ref(0)
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.skills-nav {
  img {
    border: 0.25rem solid transparent;
    border-radius: 2.6rem;
    &.active {
      border-color: $yellow;
    }
  }
}
p.skill-title {
  span {
    vertical-align: middle;
    &:nth-child(1) {
      font-size: 1.5rem;
      font-weight: 600;
      padding-right: 20px;
    }
    &:nth-child(2) {
      font-size: 1.2rem;
      color: grey;
    }
  }
}
</style>
