<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    />
    <page-content
      :pageContentConfig="pageContentConfig"
      ref="pageContent"
    ></page-content>
    <page-modal :modalConfig="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { pageContentConfig } from '@/pages/main/system/user/config/content.config'
import { modalConfig } from '@/pages/main/system/user/config/modal.config'

import { usePageSearch } from '@/hooks'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    return {
      pageContentRef,
      searchFormConfig,
      pageContentConfig,
      handleResetClick,
      handleQueryClick,
      modalConfig
    }
  }
})
</script>

<style scoped></style>
