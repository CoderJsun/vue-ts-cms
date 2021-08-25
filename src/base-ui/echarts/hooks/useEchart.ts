import * as echarts from 'echarts'

import chinaData from '../data/china.json'

// 注册china map
echarts.registerMap('china', chinaData)

export function useEchart(el: HTMLElement) {
  const echartsInstance = echarts.init(el)
  const setOptions = (options: echarts.EChartsOption) => {
    echartsInstance.setOption(options)
  }
  const updateSize = () => {
    echartsInstance.resize()
  }
  window.addEventListener('resize', () => {
    updateSize()
  })
  return { echartsInstance, setOptions, updateSize }
}
