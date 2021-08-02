<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, ref } from 'vue'
import { account, rules } from './config/account-config'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const formRef = ref<InstanceType<typeof ElForm>>()

    const AccountLoginAction = () => {
      formRef.value?.validate((validate) => {
        console.log(validate, '账号-LoginAccount 登录~')
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
