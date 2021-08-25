<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7"
        ><j-card title="分类商品数量(饼图)" /><j-echart
          :options="option"
        ></j-echart
      ></el-col>
      <el-col :span="10"><j-card title="不同城市销量图" /></el-col>
      <el-col :span="7"><j-card title="分类商品数量(玫瑰图)" /></el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="11"
        ><j-card title="分类商品数量(饼图)" /><j-echart
          :options="option"
        ></j-echart
      ></el-col>
      <el-col :span="11"><j-card title="分类商品数量(玫瑰图)" /></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
import JCard from '@/base-ui/card'
import JEchart from '@/base-ui/echarts'

export default defineComponent({
  components: { JCard, JEchart },
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const option = {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    return { option }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
