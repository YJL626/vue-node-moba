<template>
  <h2>{{ id ? '编辑' : '创建' }}分类</h2>
  <el-form
    :rules="rules"
    :model="forms"
    label-width="80px"
    label-position="right"
    ref="elForm"
    @submit.prevent="submit"
  >
    <el-form-item label="上级分类">
      <el-select
        v-model="forms.parent"
        placeholder="选择上级分类"
        @click="categoryData.refresh"
      >
        <el-option label="创建顶级分类" value=""></el-option>
        <el-option
          v-for="category in categoryData.list"
          :label="category.name"
          :value="category._id"
          :key="category._id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="分类" prop="category">
      <el-input
        style="max-width: 500px"
        type="text"
        v-model="forms.category"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button typeof="primary" native-type="submit">{{
        id ? '修改' : '创建'
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { CategoryFormState } from '@/formState/category/create'
import { defineComponent, ref } from 'vue'
import { noop } from 'lodash'
import { ElFormValidate } from '@/type'
import {
  GetCategories,
  CreateCategory,
  GetCategoryInfo,
  ReplaceCategory,
} from '@/network/category.req'
import { ElMessage } from 'element-plus'
import { networkState } from '@/network'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    id: { type: String, default: '' },
  },
  setup(prop) {
    const router = useRouter()
    const id = prop.id as string
    const { forms, rules, resetForm } = new CategoryFormState()
    const createCategory = new CreateCategory()
    const replaceCategory = new ReplaceCategory()
    const categoryData = new GetCategories({ type: 'top' })

    if (id) {
      //同步服务端设置
      const categoryInfo = new GetCategoryInfo()
      categoryInfo.get({ id }).then((result) => {
        if (result) {
          forms.category = forms.category || result.name
          forms.parent =
            forms.parent || (result.parent && result.parent?._id) || ''
        }
      })
    }

    /* 用于接受Elform Ref */
    const elForm = ref(
      noop as unknown as {
        validate: ElFormValidate
      }
    )
    const replaceSubmit = async () => {
      if (replaceCategory.state === networkState.pending) return
      const isFormCorrect = await elForm.value.validate().catch(() => false)
      if (!isFormCorrect) return
      const result = await replaceCategory.put({
        id,
        name: forms.category,
        parent: forms.parent,
      })
      if (result) {
        resetForm()
        ElMessage.success({ type: 'success', message: '更新成功' })
        categoryData.refresh()
        router.push({ name: 'categoryList' })
        router
      } else {
        ElMessage.error({ type: 'error', message: '更新失败请重试' })
      }
    }
    const postSubmit = async () => {
      if (createCategory.state === networkState.pending) return
      const isFormCorrect = await elForm.value.validate().catch(() => false)
      if (!isFormCorrect) return
      const result = await createCategory.create({
        name: forms.category,
        parent: forms.parent,
      })
      if (result) {
        resetForm()
        ElMessage.success({ type: 'success', message: '创建成功' })
        categoryData.refresh()
      } else {
        ElMessage.error({ type: 'error', message: '创建失败请重试' })
      }
    }
    const submit = id ? replaceSubmit : postSubmit
    return {
      rules,
      forms,
      elForm,
      submit,
      categoryData,
    }
  },
  components: {},
})
</script>
<style lang="scss" scope></style>
