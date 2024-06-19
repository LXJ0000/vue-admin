<template>
  <a-layout class="layout-demo">
    <a-layout-sider
      breakpoint="lg"
      :width="220"
      collapsible
      :collapsed="collapsed"
      @collapse="onCollapse"
    >
      <div class="logo" />
      <a-menu
        :defaultOpenKeys="['1']"
        :defaultSelectedKeys="['0_2']"
        @menuItemClick="onClickMenuItem"
      >
        <a-menu-item key="0_1" disabled>
          <IconHome />
          Menu 1
        </a-menu-item>
        <a-menu-item key="0_2">
          <IconCalendar />
          Menu 2
        </a-menu-item>
        <a-sub-menu key="1">
          <template #title>
            <span><IconCalendar />Navigation 1</span>
          </template>
          <a-menu-item key="1_1">Menu 1</a-menu-item>
          <a-menu-item key="1_2">Menu 2</a-menu-item>
          <a-sub-menu key="2" title="Navigation 2">
            <a-menu-item key="2_1">Menu 1</a-menu-item>
            <a-menu-item key="2_2">Menu 2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="3" title="Navigation 3">
            <a-menu-item key="3_1">Menu 1</a-menu-item>
            <a-menu-item key="3_2">Menu 2</a-menu-item>
            <a-menu-item key="3_3">Menu 3</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="4">
          <template #title>
            <span><IconCalendar />Navigation 4</span>
          </template>
          <a-menu-item key="4_1">Menu 1</a-menu-item>
          <a-menu-item key="4_2">Menu 2</a-menu-item>
          <a-menu-item key="4_3">Menu 3</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-menu :openKeys="['1']" :selectedKeys="['0_2']" mode="horizontal">
          <a-menu-item key="0_1" disabled>
            <IconHome />
            Menu 1
          </a-menu-item>
          <a-menu-item key="0_2">
            <IconCalendar />
            Menu 2
          </a-menu-item>
          <a-sub-menu key="1">
            <template #title>
              <span><IconCalendar />Navigation 1</span>
            </template>
            <a-menu-item key="1_1">Menu 1</a-menu-item>
            <a-menu-item key="1_2">Menu 2</a-menu-item>
            <a-sub-menu key="2" title="Navigation 2">
              <a-menu-item key="2_1">Menu 1</a-menu-item>
              <a-menu-item key="2_2">Menu 2</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3" title="Navigation 3">
              <a-menu-item key="3_1">Menu 1</a-menu-item>
              <a-menu-item key="3_2">Menu 2</a-menu-item>
              <a-menu-item key="3_3">Menu 3</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="4">
            <template #title>
              <span><IconCalendar />Navigation 4</span>
            </template>
            <a-menu-item key="4_1">Menu 1</a-menu-item>
            <a-menu-item key="4_2">Menu 2</a-menu-item>
            <a-menu-item key="4_3">Menu 3</a-menu-item>
          </a-sub-menu>
        </a-menu>
        <div class="action">
          <icon-home />
          <IconSunFill v-if="!isNightMode" @click="toggleDayNightMode" />
          <IconMoonFill v-else @click="toggleDayNightMode" />
          <IconFullscreenExit v-if="isFull" @click="toggleFullscreen" />
          <IconFullscreen v-else @click="toggleFullscreen" />
          <icon-notification />
          <div class="user">
            <a-dropdown>
              <a-avatar :style="{ backgroundColor: '#00d0b6' }" :size="40">
                Marcus
              </a-avatar>
              <template #content>
                <a-doption>个人中心</a-doption>
                <a-doption :value="{ value: 'Setting' }">设置</a-doption>
                <a-doption disabled>退出登录</a-doption>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          Content
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import { IconHome, IconCalendar } from '@arco-design/web-vue/es/icon'

export default defineComponent({
  components: {
    IconHome,
    IconCalendar,
  },
  setup() {
    const isNightMode = ref(false)
    const toggleDayNightMode = () => {
      isNightMode.value = !isNightMode.value
      if (isNightMode.value === true) {
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        document.body.removeAttribute('arco-theme')
      }
      // 进行日/夜模式相关的逻辑处理
      const mode = isNightMode.value ? '夜间模式' : '日间模式'
      Message.info({
        content: `切换到${mode}`,
        duration: 2000,
      })
    }

    const toggleFullscreen = () => {
      fullScreen()
      const action = isFull.value ? '进入全屏' : '退出全屏'
      Message.info({
        content: action,
        duration: 2000,
      })
    }
    const collapsed = ref(false)
    const onCollapse = (val, type) => {
      const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩'
      Message.info({
        content,
        duration: 2000,
      })
      collapsed.value = val
    }

    const isFull = ref(false)

    function isFullScreen() {
      return document.fullscreenElement == null
    }

    function exitFullScreen() {
      let exitMethod =
        document.cancelFullScreen ||
        document.webkitCancelFullScreen ||
        document.mozCancelFullScreen ||
        document.exitFullScreen
      if (exitMethod) {
        exitMethod.call(document)
      } else if (typeof window.ActiveXObject !== 'undefined') {
        let wscript = new ActiveXObject('WScript.Shell')
        if (wscript != null) {
          wscript.SendKeys('{F11}')
        }
      }
    }

    // 全屏或取消全屏
    function fullScreen() {
      let element = document.documentElement
      // 判断一下是否处于全屏
      isFull.value = !isFull.value
      if (!isFullScreen()) {
        // 退出全屏
        exitFullScreen()
        return
      }
      // 全屏

      let requestMethod =
        element.requestFullScreen ||
        element.webkitRequestFullScreen ||
        element.mozRequestFullScreen ||
        element.msRequestFullScreen
      if (requestMethod) {
        requestMethod.call(element)
      } else if (typeof window.ActiveXObject !== 'undefined') {
        //for Internet Explorer
        let wscript = new ActiveXObject('WScript.Shell')
        if (wscript !== null) {
          wscript.SendKeys('{F11}')
        }
      }
    }
    return {
      collapsed,
      onCollapse,
      onClickMenuItem(key) {
        Message.info({ content: `You select ${key}`, showIcon: true })
      },
      isNightMode,
      isFull,
      toggleDayNightMode,
      toggleFullscreen,
    }
  },
})
</script>
<style scoped>
.layout-demo {
  height: 100vh;
  background: var(--color-border-1);
}
.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .action {
    background: var(--color-bg-2);
    margin-right: 24px;
    display: flex;
    align-items: center;
    color: var(--color-text-1);
  }
  .action > *:not(:last-child) {
    margin-right: 24px;
    font-size: 20px;
  }
  .action:hover {
    cursor: pointer;
  }
}
.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
