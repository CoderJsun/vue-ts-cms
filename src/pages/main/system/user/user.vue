<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <made-table :listData="userList" :tablePropsConfig="tablePropsConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import { MadeTable } from '@/base-ui/table'
import { tablePropsConfig } from '@/pages/main/system/user/config/table.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    MadeTable
  },
  setup() {
    // store
    const store = useStore()
    // 获取用户数据
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      query: { offset: 0, size: 10 }
    })

    const userList = computed(() => store.state.system.userList)

    return { searchFormConfig, userList, tablePropsConfig }
  }
})
</script>

<style scoped></style>
