<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account">
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
import { defineComponent } from 'vue'
import { account, rules } from './config/account-config'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    return {
      account,
      rules
    }
  }
})
</script>

<style lang="less"></style>
