import { ref } from 'vue'

import PageModal from '@/components/page-modal'

type CallFn = (item?: any) => void

export function usePageModal(newFn?: CallFn, editFn?: CallFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  // 编辑
  const edit = (item?: any) => {
    console.log('edit', { ...item })
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editFn && editFn(item)
  }
  const create = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newFn && newFn()
  }
  // options
  const handleOptionsClick = (option: any) => {
    if (option.affair === 'create') {
      return create()
    } else if (option.affair === 'edit') {
      return edit(option)
    } else {
      // 非 IOptionsClick 类型 默认调用 edit
      return edit(option)
    }
  }

  return { pageModalRef, defaultInfo, handleOptionsClick }
}
