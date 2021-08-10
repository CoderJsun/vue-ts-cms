<template>
  <div class="user">
    <div class="search">
      <made-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MadeForm } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    MadeForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
