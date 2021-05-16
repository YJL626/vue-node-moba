<template>
  <h2>创建分类</h2>

  <el-form
    :rules="rules"
    :model="forms"
    label-width="80px"
    label-position="right"
    ref="elForm"
    @submit="submit"
  >
    <el-form-item label="分类" prop="category">
      <el-input
        style="max-width: 500px"
        type="text"
        v-model="forms.category"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button typeof="primary" native-type="submit">创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { CategoryCreateFormState } from '@/formState/category/create'
import { defineComponent, ref } from 'vue'
import { noop } from 'lodash'
import { ElFormValidate } from '@/type'
export default defineComponent({
  setup() {
    const { rules, forms } = new CategoryCreateFormState()
    /* 接受Elform实例 */
    const elForm = ref(
      noop as unknown as {
        validate: ElFormValidate
      }
    )
    const submit = () => {
      elForm.value
        .validate()
        .then(() => {
          console.log(55)
        })
        .catch((err) => console.log(err))
    }
    return {
      rules,
      forms,
      elForm,
      submit,
    }
  },
  components: {},
})
</script>
<style lang="scss" scope></style>
