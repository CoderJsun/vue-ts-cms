<template>
  <div class="box-card">
    <div class="card-header">
      <slot name="header">
        <span>{{ title }}</span></slot
      >
    </div>
    <div class="item">
      <slot></slot>
    </div>
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
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
}
</style>
