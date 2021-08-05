<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref } from 'vue'
import { account, rules } from './config/account-config'
import { localCache } from 'ofi-hooks'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()

    const store = useStore()

    const AccountLoginAction = (isKeepAccount: boolean) => {
      formRef.value?.validate((validate) => {
        if (validate) {
          if (isKeepAccount) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          }
          // 触发登录
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      AccountLoginAction,
      formRef
    }
  }
})
</script>

<style lang="less" scoped></style>
