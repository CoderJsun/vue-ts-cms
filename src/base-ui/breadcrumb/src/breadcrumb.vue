<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadCrumb } from '@/base-ui/breadcrumb'
export default defineComponent({
  name: 'MadeBreadCrumb',
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadCrumb[]>,
      required: true
    }
  }
})
</script>

<style scoped lang="less"></style>
