<template>
  <div class="container">
    <made-form v-bind="searchFormConfig">
      <template #footer>
        <div class="btns-footer">
          <el-button @click="handleResetClick">重置</el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >检索</el-button
          >
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
  },
  emits: ['handleResetClick', 'handleQueryClick'],
  setup(props, { emit }) {
    // 重置数据
    const handleResetClick = () => {
      emit('handleResetClick')
    }
    // 检索数据
    const handleQueryClick = () => {
      emit('handleQueryClick', props.searchFormConfig)
    }
    return { handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped lang="less">
.btns-footer {
  text-align: right;
  padding: 20px 50px;
}
</style>
