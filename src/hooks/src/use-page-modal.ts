import { ref } from 'vue'

import PageModal from '@/components/page-modal'
import { IOptionsClick } from '@/pages/main/system/user/config/types'

export function usePageModal() {
  // 拿到组件
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleOptionsClick = (item: IOptionsClick) => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }

  return [pageModalRef, defaultInfo, handleOptionsClick]
}
