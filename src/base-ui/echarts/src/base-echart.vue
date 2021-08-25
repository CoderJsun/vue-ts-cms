<template>
  <div class="container">
    <div ref="echartRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import { useEchart } from '@/base-ui/echarts/hooks/useEchart'
import { EChartsOption } from 'echarts'

// 定义属性
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width: string
    height: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const { echartsInstance } = useEchart(echartRef.value!)
  echartsInstance.setOption(props.options)
})
</script>

<style scoped lang="less"></style>
