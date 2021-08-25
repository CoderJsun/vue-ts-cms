<template>
  <div class="layer">
    <el-card>
      <div class="card-header">
        <slot name="header">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String
    }
  }
})
</script>

<style scoped lang="less">
.layer {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
  }
  .content {
    margin-top: 20px;
  }
}
</style>
