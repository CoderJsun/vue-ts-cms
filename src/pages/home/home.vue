<template>
  <el-container class="el-container">
    <el-aside class="el-aside"><nav-menu /></el-aside>
    <el-container>
      <el-header><nav-header /></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '../../components/nav-menu'
import NavHeader from '../../components/nav-header'
export default defineComponent({
  name: 'Home',
  components: {
    NavMenu,
    NavHeader
  }
})
</script>

<style lang="less">
.el-container {
  height: 100%;
  .el-aside {
    width: 200px;
  }
  .el-header {
    padding: 0;
  }
}
</style>
