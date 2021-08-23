<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :pageContentConfig="pageContentConfig"
      @handleOptionsClick="handleOptionsClick"
    />
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="elTree">
        <el-tree
          :data="entireMenu"
          show-checkbox
          node-key="id"
          :props="{ children: children, label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from '@/pages/main/system/role/config/search.config'
import { pageContentConfig } from '@/pages/main/system/role/config/content.config'
import { modalConfig } from '@/pages/main/system/role/config/pageModal.config'
import { usePageModal } from '@/hooks'

import { useStore } from '@/store'

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
      const menusList = { ...halfCheckedKeys, ...checkedKeys }
      otherInfo.value = { menusList }
    }
    // 操作
    const [pageModalRef, defaultInfo, handleOptionsClick] = usePageModal()

    // 获取全部权限菜单
    const store = useStore()
    const entireMenu = computed(() => store.state.entireMenu)

    return {
      modalConfig,
      searchFormConfig,
      pageContentConfig,
      handleCheckChange,
      handleOptionsClick,
      pageModalRef,
      defaultInfo,
      otherInfo,
      entireMenu
    }
  }
})
</script>

<style scoped lang="less">
.elTree {
  margin-left: 30px;
}
</style>
