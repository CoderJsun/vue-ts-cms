<template>
  <div class="container">
    <made-table v-bind="pageContentConfig" :listData="dataList">
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          size="mini"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #options>
        <div>
          <el-button plain size="mini" type="text" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button plain size="mini" type="text" icon="el-icon-delete"
            >删除</el-button
          >
        </div>
      </template>
    </made-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { MadeTable } from '@/base-ui/table'

import { useStore } from '@/store'

export default defineComponent({
  components: {
    MadeTable
  },
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // store
    const store = useStore()
    // 请求用户数据
    store.dispatch(`system/getPageListAction`, {
      pageName: props.pageContentConfig.pageName,
      query: { offset: 0, size: 10 }
    })

    // 获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageContentConfig.pageName)
    )

    return { dataList }
  }
})
</script>

<style scoped lang="less"></style>
