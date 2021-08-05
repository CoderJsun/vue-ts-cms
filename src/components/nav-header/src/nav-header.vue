<template>
  <div class="nav-header">
    <i
      class="fold"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="changeFold"
    />
    <div class="user-info">
      <img
        class="img"
        :src="'https://avatars.githubusercontent.com/u/69569435?v=4'"
        alt="avator"
      />
      <span>coderz</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'NavHeader',
  emits: ['changeFold'],
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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .fold {
    font-size: 25px;
    cursor: pointer;
    text-align: center;
  }
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    span {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>
