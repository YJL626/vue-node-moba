<template>
  <nav>
    <ul
      class="flex justify-around items-center m-h-18 px-4  text-xl text-white m-bg-yellow"
    >
      <li
        :class="{ active: index === current }"
        class="inactive"
        v-for="(itemTitle, index) in pages"
        :key="itemTitle"
        @click="current = index"
      >
        {{ itemTitle }}
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts" scope>
import { ref } from 'vue'
const pages = ['首页', '攻略中心', '赛事中心', 'IP新游']
const current = ref(0)
</script>
<style lang="scss">
.inactive {
  margin-top: 0.3rem;
  box-sizing: content-box;
  padding-bottom: 0.2rem;
  border-bottom: 0.3rem solid transparent;
  &.active {
    border-color: white;
  }
}
</style>
