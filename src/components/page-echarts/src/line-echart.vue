<template>
  <div class="layer">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue'
import BaseEchart from '@/base-ui/echarts'

// 定义属性
// 需要外界传
const props = defineProps<{
  xAxisLabels: string[]
  data: any[]
}>()

const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisLabels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>
