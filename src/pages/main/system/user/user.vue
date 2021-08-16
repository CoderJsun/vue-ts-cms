<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :pageContentConfig="pageContentConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { pageContentConfig } from '@/pages/main/system/user/config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return { searchFormConfig, pageContentConfig }
  }
})
</script>

<style scoped></style>
