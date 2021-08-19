<template>
  <div class="container">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      stripe
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="section"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column
        width="60"
        label="序号"
        v-if="showIndexColumn"
        type="index"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.label">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          align="center"
          :min-width="item.minWidth"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          class="pagination"
        >
        </el-pagination>
      </slot>
    </div>
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
    listCount: {
      type: Number
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    pageName: {
      type: String
    },
    title: {
      type: String
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['handleSizeChange', 'handleCurrentChange'],
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      emit('handleSizeChange', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('handleCurrentChange', { ...props.page, currentPage })
    }
    return { handleSizeChange, handleCurrentChange }
  }
})
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
  .pagination {
    padding: 10px;
    text-align: right;
  }
  .header-content {
    display: flex;
    justify-content: space-around;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 22px;
    .title {
      font-weight: bold;
    }
    .handler {
      display: flex;
    }
  }
}
</style>
