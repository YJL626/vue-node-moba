<template>
  <el-container class="max-h-screen h-screen">
    <el-aside width="200px">
      <el-menu router unique-opened :default-openeds="['1']">
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>内容管理</template>
          <el-menu-item-group>
            <template #title>分类</template>
            <el-menu-item index="/category/create"
              ><i class="el-icon-circle-plus"></i> 新建分类</el-menu-item
            >
            <el-menu-item index="/category/list"
              ><i class="el-icon-menu"></i> 分类列表</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group>
            <template #title>英雄</template>
            <el-menu-item index="/hero/create"
              ><i class="el-icon-circle-plus"></i> 新建英雄</el-menu-item
            >
            <el-menu-item index="/hero/list"
              ><i class="el-icon-menu"></i> 英雄列表</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template #title><i class="el-icon-message"></i>运营管理</template>
          <el-menu-item-group>
            <template #title>banner</template>
            <el-menu-item index="/banner/create"
              ><i class="el-icon-circle-plus"></i> 新建banner</el-menu-item
            >
            <el-menu-item index="/banner/list"
              ><i class="el-icon-menu"></i>banner列表</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container class="flex-col">
      <el-header class="bg-gray-400"> 施工中 </el-header>
      <el-main class="flex-1">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {},
})
</script>
<style lang="scss" scope></style>
