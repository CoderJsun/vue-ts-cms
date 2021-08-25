<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      @handleOptionsClick="handleOptionsClick"
      @handleEditClick="handleOptionsClick"
    />
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="elTree">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          ref="ElTreeRef"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from '@/pages/main/system/role/config/search.config'
import { pageContentConfig } from '@/pages/main/system/role/config/content.config'
import { modalConfig } from '@/pages/main/system/role/config/modal'
import { usePageModal } from '@/hooks'
import { mapMenuToLeafKeys } from '@/untils/map-menus'

import { useStore } from '@/store'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 选中的权限菜单
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const halfCheckedKeys = data2.halfCheckedKeys
      const checkedKeys = data2.checkedKeys
      const menuList = [...halfCheckedKeys, ...checkedKeys]
      otherInfo.value = { menuList }
    }

    // 处理编辑数据的数据回显
    const ElTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallFn = (item: any) => {
      //设置 eltree叶子节点
      const leafKeys = mapMenuToLeafKeys(item.menuList)
      nextTick(() => {
        ElTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    // 操作
    const { pageModalRef, defaultInfo, handleOptionsClick } = usePageModal(
      undefined,
      editCallFn
    )

    // 获取全部权限菜单
    const store = useStore()
    const data = computed(() => store.state.entireMenu)
    console.log('computed', data)

    return {
      ElTreeRef,
      modalConfig,
      searchFormConfig,
      pageContentConfig,
      handleCheckChange,
      pageModalRef,
      defaultInfo,
      otherInfo,
      data,
      handleOptionsClick
    }
  }
})
</script>

<style scoped lang="less">
.elTree {
  margin-left: 30px;
}
</style>
