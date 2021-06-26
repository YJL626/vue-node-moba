<template>
  <div id="hero-edit">
    <MtitleVue> {{ id ? '编辑' : '新建' }}英雄 </MtitleVue>
    <el-form
      ref="elFormRef"
      label-width="100px"
      :model="model"
      @submit.prevent="submit"
    >
      <el-form-item
        label="名字"
        prop="name"
        :rules="[{ required: true, message: '名字不能为空' }]"
      >
        <el-input v-model="model.name" />
      </el-form-item>
      <el-form-item
        label="称号"
        prop="title"
        :rules="[{ required: true, message: '称号不能为空' }]"
      >
        <el-input v-model="model.title" />
      </el-form-item>
      <el-form-item
        label="头像链接"
        prop="heroImg"
        :rules="[{ required: true, message: '头像链接不能为空' }]"
        v-model="model.heroImg"
      >
        <el-input v-model="model.heroImg"> </el-input>
        <div class="my-8">
          <span>图片预览 : </span>
          <img class="h-20 w-auto inline-block" :src="model.heroImg" />
        </div>
      </el-form-item>

      <el-form-item
        label="分类"
        prop="categories"
        :rules="[{ required: true, message: '头像链接不能为空' }]"
        v-model="model.heroImg"
      >
        <el-checkbox-group v-model="model.categories" :min="1" :max="5">
          <el-checkbox
            v-for="heroCategory in heroCategories.list"
            :label="heroCategory._id"
            :model-value="heroCategory._id"
            :key="heroCategory._id"
            >{{ heroCategory.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-button native-type="submit" type="primary"> 提交</el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { HeroInfoFormState } from '@/formState/heroInfoFormState'
import { defineProps } from 'vue-demi'
import MtitleVue from '@/components/Mtitle.vue'
import { GetCategories } from '@/network/category.req'
import { noop, toRefs } from '@vueuse/core'
import type { ElFormValidate } from '@/type'
import { ref, watch } from 'vue'
import { req } from '@/network'
import { useAxios } from '@vueuse/integrations'
import { ElMessage } from 'element-plus'
const props = defineProps<{ id?: string }>()
const { model } = toRefs(new HeroInfoFormState(props.id))
const heroCategories = new GetCategories({ parent: '英雄' })
const elFormRef = ref(
  noop as unknown as {
    validate: ElFormValidate
  }
)
const submit = async () => {
  const isFormCorrect = await elFormRef.value.validate().catch(() => false)
  if (!isFormCorrect) return
  req
    .post(`/heroes/${props.id || 'create'}`, model.value)
    .then(() => {
      ElMessage.success({
        message: `${props.id ? '更新' : '创建'}成功`,
        type: 'success',
      })
    })
    .catch(() => {
      ElMessage.warning({
        message: `${props.id ? '更新' : '创建'}失败`,
        type: 'warning',
      })
    })
}
</script>
<style lang="scss" scope>
#hero-edit {
  .el-input {
    max-width: 500px;
  }
}
</style>
