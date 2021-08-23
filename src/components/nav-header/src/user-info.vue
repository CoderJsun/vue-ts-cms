<template>
  <div class="container">
    <img src="https://avatars.githubusercontent.com/u/69569435?v=4" />
    <el-dropdown>
      <span class="el-dropdown-link">{{ user.name }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item disabled>个人信息</el-dropdown-item>
          <el-dropdown-item divided @click="handleLoginOutClick"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { useLocalCache } from 'ofi-hooks'
import { TOKEN } from '@/store/login/constant'

export default defineComponent({
  setup() {
    const store = useStore()
    const user = computed(() => store.state.login.userInfo)

    // 退出登录
    const router = useRouter()
    const handleLoginOutClick = () => {
      useLocalCache.deleteCache(TOKEN)
      router.push('/home')
    }

    return {
      user,
      handleLoginOutClick
    }
  }
})
</script>

<style scoped lang="less">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .el-dropdown-link {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
