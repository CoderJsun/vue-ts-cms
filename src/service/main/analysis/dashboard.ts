import request from '@/service'

enum DashboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return request.get({
    url: DashboardApi.categoryGoodsCount
  })
}

export function getcategoryGoodsSale() {
  return request.get({
    url: DashboardApi.categoryGoodsSale
  })
}

export function getcategoryGoodsFavor() {
  return request.get({
    url: DashboardApi.categoryGoodsFavor
  })
}

export function getaddressGoodsSale() {
  return request.get({
    url: DashboardApi.addressGoodsSale
  })
}
