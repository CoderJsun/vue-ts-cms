<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~assets/img/logo.png" alt="logo" />
      <span v-if="!isCollapse" class="title">vue3+ts</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#21252B"
      text-color="#696969"
      active-text-color="#F5F5F5"
      default-active="2"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleSubItemClick(subItem)"
              >
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
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NavMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore<IStoreType>()
    const userMenus = computed(() => store.state.login.userMenus)
    const handleSubItemClick = (item: any) => {
      console.log(item)
      router.push({
        path: item.url ?? 'not-found'
      })
    }
    return {
      userMenus,
      handleSubItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  background-color: rgb(40, 44, 52);
  color: #ffffff;
  height: 100%;
  .el-menu {
    border-right: none;
  }
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
