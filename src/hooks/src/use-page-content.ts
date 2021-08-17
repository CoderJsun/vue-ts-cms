import { ref } from 'vue'

import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (query: any = {}) => {
    pageContentRef.value?.getPageData(query)
  }
  return { pageContentRef, handleResetClick, handleQueryClick }
}
