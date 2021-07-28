<template>
  <div class="login">
    <el-input
      placeholder="手机号"
      v-model="tel"
      clearable
      class="el-item"
      maxlength="11"
    >
    </el-input>
    <el-input
      placeholder="密码"
      v-model="psw"
      clearable
      class="el-item"
      maxlength="26"
      show-password="false"
    >
    </el-input>
    <el-button class="setup" @click="login">Login</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const tel = ref('')
    const psw = ref('')

    const router = useRouter()

    const login = () => {
      router.replace('/home')
    }
    return {
      tel,
      psw,
      login
    }
  }
})
</script>

<style lang="less">
.login {
  width: 30%;
  margin: 0 auto;
  border: 1px solid rgba(102, 102, 102, 0.3);
  border-radius: 10px;
  padding: 10px;
}
.el-item {
  margin-top: 10px;
}
.setup {
  margin-top: 20px;
  width: 200px;
}
</style>
