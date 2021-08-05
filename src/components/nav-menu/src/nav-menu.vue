<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="~assets/img/logo.png" alt="logo" />
      <span class="title">vue3+ts</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#21252B"
      text-color="#696969"
      active-text-color="#F5F5F5"
      default-active="2"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                <template #title>
                  <i v-if="subItem.icon" :class="subItem.icon"></i>
                  <span>{{ subItem.name }}</span>
                </template></el-menu-item
              >
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import { IStoreType } from '../../../store/types'

export default defineComponent({
  name: 'NavMenu',
  setup() {
    const store = useStore<IStoreType>()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  background-color: rgb(40, 44, 52);
  color: #ffffff;
  height: 100%;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .logo-img {
      width: 50px;
      height: 50px;
    }
    .title {
      font-size: 20px;
    }
  }
  .el-menu-vertical {
  }
}
</style>
