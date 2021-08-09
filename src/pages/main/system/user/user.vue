<template>
  <div class="user">
    <div class="search">
      <IWForm v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IWForm } from 'components/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    IWForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
