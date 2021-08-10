<template>
  <div class="container">
    <made-form v-bind="searchFormConfig">
      <template #footer>
        <div class="btns-footer">
          <el-button>重置</el-button>
          <el-button type="primary" icon="el-icon-search">检索</el-button>
        </div>
      </template>
    </made-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { MadeForm } from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    MadeForm
  }
})
</script>

<style scoped lang="less">
.btns-footer {
  text-align: right;
  padding: 20px 50px;
}
</style>
