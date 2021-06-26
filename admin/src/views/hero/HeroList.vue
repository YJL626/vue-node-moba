<template>
  <el-table
    :data="heroes"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
    v-loading="isFinished === false"
    :style="{ minHeight: '500px' }"
  >
    <el-table-column prop="_id" label="id" sortable> </el-table-column>
    <el-table-column prop="name" label="英雄名" sortable> </el-table-column>
    <el-table-column prop="title" label="称号"> </el-table-column>
    <el-table-column label="类型">
      <template #default="scopeProps">
        <p>
          <span
            v-for="(category, index) in scopeProps.row.categories"
            :key="category._id"
          >
            {{ Number(index) > 0 ? '  ' + category.name : category.name }}
          </span>
        </p>
      </template>
    </el-table-column>
    <el-table-column label="头像">
      <template #default="scopeProps">
        <img :src="scopeProps.row.heroImg" alt="头像" class="w-20" />
      </template>
    </el-table-column>
    <el-table-column label="头像">
      <template #header>
        <el-input
          v-model="fiflterPrams"
          size="mini"
          placeholder="输入英雄类型进行搜索"
        />
      </template>
      <template #default="scopeProps">
        <el-button
          @click="
            router.push({ name: 'heroEdit', query: { id: scopeProps.row._id } })
          "
          >编辑</el-button
        >
        <el-button>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-if="isFinished"
    background
    :page-size="10"
    layout="prev, pager, next"
    :current-change="1"
    @current-change="pageChange"
    :page-count="pageCount"
    :total="total"
    class="absolute bottom-20 right-80"
  >
  </el-pagination>
</template>
<script setup lang="ts">
import { req } from '@/network'
import { useAxios } from '@vueuse/integrations'
import { ref, unref, watch, computed } from 'vue'

import type { Ref } from 'vue'
import type { hero } from './type'
import { useRouter } from 'vue-router'
const router = useRouter()
const { data: heroesData, isFinished } = useAxios<Array<hero>>(
  '/heroes',
  { method: 'get' },
  req
)
let heroesDataBackup: Array<hero> = []
let heroes: Ref<Array<hero>> = ref([])
const pageSize = ref(10)
const total = ref(10)
const pageCount = computed(() => Math.max(total.value / pageSize.value, 1))

const fiflterPrams = ref('')
watch([isFinished, fiflterPrams], () => {
  if (heroesDataBackup.length === 0 && isFinished.value) {
    heroesDataBackup = heroesData.value || []
  }
  //空则reset 其余条件筛选
  if (fiflterPrams.value === '') {
    heroesData.value = heroesDataBackup
  } else {
    heroesData.value =
      heroesDataBackup.filter((hero) =>
        hero.categories.some((category) => category.name === fiflterPrams.value)
      ) || []
  }
  //重新分页
  heroes.value = heroesData.value?.slice(0, pageSize.value) || []
  total.value = heroesData.value?.length || 10
})
const pageChange = (currentPage: number) => {
  const startIndex = pageSize.value * (currentPage - 1)
  heroes.value =
    heroesData.value?.slice(startIndex, startIndex + pageSize.value) || []
}
</script>

<style lang="scss" scope>
.circular {
  margin: 0 auto;
}
</style>
