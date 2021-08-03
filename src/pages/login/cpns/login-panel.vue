<template>
  <div class="login-panel">
    <h1 class="login-title">全媒体内容管理系统</h1>
    <el-tabs type="border-card" stretch ref="ElTabRef">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="mobileRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { ElTabs } from 'element-plus'
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    //记住密码
    const isKeepPassword = ref(true)
    const ElTabRef = ref<InstanceType<typeof ElTabs>>()
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const mobileRef = ref<InstanceType<typeof LoginPhone>>()
    // 登录逻辑
    const handleLoginClick = () => {
      ElTabRef.value?.currentName === '0'
        ? accountRef.value?.AccountLoginAction(isKeepPassword.value)
        : mobileRef.value?.MobileLoginAction()
    }
    return {
      isKeepPassword,
      ElTabRef,
      accountRef,
      mobileRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .login-title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
