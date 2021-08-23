import { IResult } from '@/service/types'
import request from '../../index'

export function getPageListData(url: string, query: any) {
  return request.post<IResult>({
    url,
    data: query
  })
}

export function deletePageData(url: string) {
  return request.delete<IResult>({
    url
  })
}

export function createPageData(url: string, data: any) {
  return request.post<IResult>({
    url,
    data
  })
}
