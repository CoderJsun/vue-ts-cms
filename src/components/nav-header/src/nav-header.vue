<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeFold"
    />
    <div class="content">
      <made-bread-crumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import { MadeBreadCrumb } from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
import { pathMapToBreadCrumbs } from '@/untils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  name: 'NavHeader',
  emits: ['changeFold'],
  components: {
    UserInfo,
    MadeBreadCrumb
  },
  setup(props, { emit }) {
    //是否折叠
    const isFold = ref(false)
    // 面包屑数据
    const route = useRoute()
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      return pathMapToBreadCrumbs(userMenus, route.path)
    })
    // 折叠事件
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }
    return { changeFold, isFold, breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;
  .fold {
    font-size: 25px;
    cursor: pointer;
    text-align: center;
  }
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
  }
}
</style>
