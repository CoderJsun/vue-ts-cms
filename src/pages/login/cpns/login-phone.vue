<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="phone.mobile"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="CoderWrapper">
          <el-input v-model="phone.code" type="password"></el-input>
          <el-button type="primary" class="code-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { phone, rules } from './config/phone-config'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    return {
      phone,
      rules
    }
  }
})
</script>

<style lang="less">
.CoderWrapper {
  display: flex;
  justify-content: space-between;
  .code-button {
    margin-left: 10px;
  }
}
</style>
