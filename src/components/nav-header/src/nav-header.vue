<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeFold"
    />
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  name: 'NavHeader',
  emits: ['changeFold'],
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('changeFold', isFold.value)
    }
    return { changeFold, isFold }
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
    justify-content: space-between;
    margin: 0 20px;
  }
}
</style>
