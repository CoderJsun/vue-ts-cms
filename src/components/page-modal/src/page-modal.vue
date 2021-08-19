<template>
  <div class="container">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" center>
      <made-form v-bind="modalConfig" v-model="formData"></made-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { MadeForm } from '@/base-ui/form'

export default defineComponent({
  props: {
    // 配置信息
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    MadeForm
  },
  setup() {
    const formData = {}
    const dialogVisible = ref(true)
    return { dialogVisible, formData }
  }
})
</script>

<style scoped lang="less"></style>
