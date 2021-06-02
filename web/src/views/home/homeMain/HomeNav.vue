<template>
  <HomeCardVue id="card">
    <ul
      class="entry-list flex w-screen overflow-y-scroll"
      :class="{ 'flex-wrap': isListOpen }"
    >
      <li
        v-for="homeNavItem in homeNavList"
        :key="homeNavItem.name"
        class="w-1/4 py-4 flex-none "
      >
        <a
          :href="homeNavItem.src"
          class="relative block flex flex-col  overflow-hidden  text-center h-20  right-line "
        >
          <div class="flex-1 flex justify-center items-center   w-full">
            <i :style="homeNavItem.iconStyle" class="block"></i>
          </div>
          <span class="leading-none text-gray-400">{{ homeNavItem.name }}</span>
        </a>
      </li>
    </ul>
    <div
      class="open h-12 bg-gray-50  text-3xl text-gray-300 text-center cursor-pointer"
      @click="
        () => {
          isListOpen = !isListOpen
        }
      "
    >
      <i
        class="fa fa-angle-double-down transform"
        :class="{ 'rotate-180': isListOpen }"
      ></i>
      <span class="text-lg text-gray-900 font-normal">{{
        isListOpen ? '收起' : '展开'
      }}</span>
    </div>
  </HomeCardVue>
</template>
<script setup lang="ts">
import { homeNavList } from '../utils/homeNavList'
import { ref } from '@vue/reactivity'
import HomeCardVue from './HomeCard.vue'
const isListOpen = ref(false)
</script>
<style lang="scss" scope>
#card {
  padding: 0;
}
.open {
  @apply flex-wrap;
}
li {
  .right-line::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    height: 100%;
    width: 1px;
    @apply bg-gray-300;
  }
  &:nth-child(4n + 4) {
    .right-line::after {
      width: 0;
    }
  }
}
</style>
