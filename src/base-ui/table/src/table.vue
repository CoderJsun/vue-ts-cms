<template>
  <div class="container">
    <el-table :data="listData" border style="width: 100%" stripe>
      <template v-for="item in tablePropsConfig" :key="item.label">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          align="center"
          :min-width="item.minWidth"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    tablePropsConfig: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}
</style>
