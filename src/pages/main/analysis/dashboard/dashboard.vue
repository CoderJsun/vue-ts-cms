<template>
  <div class="layer">
    <el-row :gutter="10">
      <el-col :span="7"
        ><j-card title="分类商品数量(饼图)">
          <pie-echart :data="categoryGoodsCount"></pie-echart>
        </j-card>
      </el-col>
      <el-col :span="10"
        ><j-card title="不同城市销量图(地图)">
          <map-echart :data="addressGoodsSale"></map-echart> </j-card
      ></el-col>
      <el-col :span="7"
        ><j-card title="分类商品数量(玫瑰图)">
          <rose-echart :data="categoryGoodsCount"></rose-echart
        ></j-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12"
        ><j-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart
        ></j-card>
      </el-col>
      <el-col :span="12"
        ><j-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart
        ></j-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import JCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  components: {
    JCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  name: 'dashboard',
  setup() {
    // 请求数据
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // xAxisLabels: string[]
    // data: any[]
    const categoryGoodsSale = computed(() => {
      const xAxisLabels: string[] = []
      const data: any[] = []
      const Sales = store.state.dashboard.categoryGoodsSale
      for (const item of Sales) {
        xAxisLabels.push(item.name)
        data.push(item.goodsCount)
      }
      return { xAxisLabels, data }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const Favors = store.state.dashboard.categoryGoodsFavor
      for (const item of Favors) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
