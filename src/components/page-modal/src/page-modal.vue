<template>
  <div class="container">
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <made-form v-bind="modalConfig" v-model="formData"></made-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { MadeForm } from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    // 配置信息
    modalConfig: {
      type: Object,
      required: true
    },
    // 默认数据
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    //其他数据
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MadeForm
  },
  setup(props) {
    const formData = ref<any>({})
    const dialogVisible = ref(false)

    // 确认编辑
    const store = useStore()
    const handleConfirmClick = () => {
      //提交请求
      dialogVisible.value = false
      store.dispatch('system/createPageDataAction', {
        pageName: props.modalConfig.pageName,
        data: { ...formData.value, ...props.otherInfo }
      })
    }

    return { dialogVisible, formData, handleConfirmClick }
  }
})
</script>

<style scoped lang="less"></style>
