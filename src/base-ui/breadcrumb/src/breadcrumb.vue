<template>
  <div class="container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MadeBreadCrumb',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped lang="less"></style>
