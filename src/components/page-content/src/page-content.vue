<template>
  <div class="container">
    <made-table
      v-bind="pageContentConfig"
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    >
      <!-- 固定 slot -->
      <template #handler>
        <!-- <el-button type="primary" size="medium">新建用户</el-button> -->
        <el-button
          v-for="item in pageContentConfig.operation"
          :key="item.type"
          :type="item.type"
          @click="handleOptionsClick(item)"
          >{{ item.title }}</el-button
        >
      </template>
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
      <template #options="scope">
        <div>
          <el-button
            v-if="permission.isUpdate"
            plain
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            plain
            size="mini"
            type="text"
            icon="el-icon-delete"
            v-if="permission.isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 动态slot -->
      <template v-for="item in slots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </made-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

import { MadeTable } from '@/base-ui/table'

import { useStore } from '@/store'
import { usePermission } from '@/hooks'

import { IPageContentQuery } from '@/components/page-content'
import { IPermission } from '@/hooks/src/use-permission'

export default defineComponent({
  components: {
    MadeTable
  },
  emits: ['handleOptionsClick', 'handleEditClick'],
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    // store
    const store = useStore()

    // 操作权限
    const permission = ref<IPermission>({
      isCreate: usePermission(props.pageContentConfig.pageName, 'create'),
      isUpdate: usePermission(props.pageContentConfig.pageName, 'update'),
      isDelete: usePermission(props.pageContentConfig.pageName, 'delete'),
      isQuery: usePermission(props.pageContentConfig.pageName, 'query')
    })

    // 监听 queryInfo变化
    const pageInfo = ref<IPageContentQuery>({ currentPage: 1, pageSize: 10 })
    const handleCurrentChange = (newValue: IPageContentQuery) => {
      pageInfo.value = newValue
    }
    const handleSizeChange = (newValue: IPageContentQuery) => {
      pageInfo.value = newValue
    }
    watch(pageInfo, () => getPageData())

    // 请求用户数据
    const getPageData = (query: any = {}) => {
      if (permission.value.isQuery) {
        store.dispatch(`system/getPageListAction`, {
          pageName: props.pageContentConfig.pageName,
          query: {
            offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
            size: pageInfo.value.pageSize,
            ...query
          }
        })
      }
    }

    getPageData()

    // 获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageContentConfig.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageContentConfig.pageName)
    )

    // 获取动态slot
    const slots = props.pageContentConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'options') return false
      return true
    })

    // 删除/编辑/新建 操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageContentConfig.pageName,
        id: item.id
      })
    }

    // 编辑数据
    const handleEditClick = (item: any) => {
      emit('handleEditClick', item)
    }

    // 操作
    const handleOptionsClick = (item: any) => {
      emit('handleOptionsClick', item)
    }

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      handleCurrentChange,
      handleSizeChange,
      slots,
      permission,
      handleDeleteClick,
      handleEditClick,
      handleOptionsClick
    }
  }
})
</script>

<style scoped lang="less"></style>
