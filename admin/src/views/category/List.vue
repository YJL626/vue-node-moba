<template>
  <h1>分类列表</h1>
  <el-table :data="categoryData.list" style="width: 100%" max-height="750">
    <el-table-column label="id" prop="_id"> </el-table-column>
    <el-table-column label="上级分类">
      <template #default="scopeData">
        <span style="margin-left: 10px">{{
          scopeData.row.parent ? scopeData.row.parent.name : ''
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="分类名称" property="name"> </el-table-column>

    <el-table-column fixed="right" label="操作">
      <template #default="scopeData">
        <el-button
          type="primary"
          size="small"
          @click="jumpTo('editCategory', { id: scopeData.row._id })"
          >编辑</el-button
        >
        <el-popconfirm
          title="确认删除该分类吗？"
          @confirm="del(scopeData.row._id)"
          confirmButtonType="danger"
          iconColor="red"
        >
          <template #reference>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { GetCategories, DelCategory } from '@/network/category.req'
import { ElMessage } from 'element-plus'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const categoryData = new GetCategories()
    const delCategory = new DelCategory()
    const router = useRouter()
    const jumpTo = (name: string, query: Record<string, string>) => {
      router.push({ name: name, query })
    }
    const del = async (id: string) => {
      const result = await delCategory.del({ id })
      if (result) {
        categoryData.refresh()
        ElMessage.success({ type: 'success', message: '删除成功' })
      } else {
        categoryData.refresh()
        ElMessage.warning({ type: 'warning', message: '删除失败' })
      }
    }
    return { categoryData, del, jumpTo }
  },
  components: {},
})
</script>
<style lang="scss" scope></style>
