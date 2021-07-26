<template>
  <h2>home page + {{ $store.state.name }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="less"></style>
