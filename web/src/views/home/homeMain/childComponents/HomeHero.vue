<template>
  <HomeCardVue class="m-h-35rem">
    <CardHeaderVue
      title="英雄列表"
      fontIconClass="fa fa-user-circle"
      :rightConfig="{ routeName: 'heroList' }"
    />
    <a
      v-if="reqHomeData.state === networkState.success"
      @click.prevent="$router.push(`/heroes/${heroRec.heroId}`)"
    >
      <img :src="heroRec.pic" alt="heroRecImg" />
    </a>

    <hr class="my-5" />
    <ul class="heroCategory-list flex justify-between pb-3 text-xl">
      <li
        v-for="(heroCategory, index) in heroCategories"
        :key="heroCategory"
        :class="{ active: currentPage === index }"
        @click="
          () => {
            ;(currentPage = index), swiperCtr.slideTo(currentPage)
          }
        "
      >
        {{ heroCategory }}
      </li>
    </ul>
    <Swiper @swiper="onSwiper" @slideChange="onSlideChange" autoHeight>
      <SwiperSlide v-for="(heroDataCtr, index) in heroDataCtrs" :key="index">
        <ul class="hero-list">
          <HeroAvatarVue
            @img-load="updateSwiperHeight"
            v-for="hero in heroDataCtr.heroes"
            :key="hero._id"
            :heroItemData="hero"
          />
        </ul>
      </SwiperSlide>
    </Swiper>
  </HomeCardVue>
</template>
<script setup lang="ts">
import { unref, computed, ref } from 'vue'
import CardHeaderVue from '@/components/CardHeader.vue'
import HomeCardVue from '../../../../components/BaseCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as Swiperctr } from 'swiper'
import HeroAvatarVue from '@/views/hero/childComponents/HeroAvatar.vue'
import { ReqHeroList } from '@/network/ReqHeroList'
import { nextTick, watch } from '@vue/runtime-core'
import { noop } from '@/utils/utils'
import { useDebounceFn } from '@vueuse/core'
import { heroBaseCategories } from '../../utils/heroCategories'
import { reqHomeData } from '@/network/ReqHomeData'
import { networkState } from '@/network'

const heroRec = computed(()=>unref(reqHomeData.result).heroRec )
const heroCategories = ['热门英雄', ...heroBaseCategories]
const heroDataCtrs = heroCategories.map(
  (category) => new ReqHeroList({ category }, 5)
)
const swiperCtr = ref((noop as unknown) as Swiperctr)
let updateSwiperHeight = ref((null as unknown) as Swiperctr['updateAutoHeight'])
const onSwiper = (ctr: Swiperctr) => {
  if (swiperCtr.value !== (noop as unknown)) return
  updateSwiperHeight.value = useDebounceFn(ctr.updateAutoHeight.bind(ctr), 200)
  swiperCtr.value = ctr
}

const currentPage = ref(0)
watch(currentPage, (newValue) => {
  heroDataCtrs[newValue].loadData()
  nextTick(() => updateSwiperHeight.value())
},{immediate:true})

const onSlideChange = (swiper: { activeIndex: number }) =>
  (currentPage.value = swiper.activeIndex)
</script>
<style lang="scss" scope>
@import '@/scss/variable.scss';
.heroCategory-list {
  .active {
    position: relative;
    color: $yellow;
    &::after {
      content: '';
      position: absolute;
      background-color: $yellow;
      bottom: -4px;
      right: 0;
      width: 100%;
      height: 3px;
    }
  }
}

.hero-list {
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
</style>
