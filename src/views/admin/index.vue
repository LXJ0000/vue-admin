<template>
  <div class="admin">
    <div class="aside">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="main">
      <div class="header">
        <div class="bread_crumb">bread_crumb</div>
        <div class="action">
          <icon-home />
          <icon-sun-fill />
          <icon-moon-fill />
          <icon-fullscreen-exit />
          <icon-fullscreen />
          <div class="user">user</div>
        </div>
      </div>
      <div class="tab"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
.admin {
  display: flex;
  height: 100vh;
  .aside {
    width: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid var(--color-neutral-2);
    .logo {
      height: 100px;
      width: 100%;
      border-bottom: 1px solid var(--color-neutral-2);
    }
  }
  .main {
    width: calc(100% - 200px);
    .header {
      height: 60px;
      width: 100%;
      border-bottom: 1px solid var(--color-neutral-2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .bread_crumb {
        margin-left: 10px; /* Space from the left */
      }
      .action {
        margin-right: 10px;
        display: flex;
        align-items: center;
      }
      .action > *:not(:last-child) {
        margin-right: 10px; /* Space between elements inside action */
        font-size: 16px;
      }
    }
    .tab {
      height: 40px;
      width: 100%;
      border-bottom: 1px solid var(--color-neutral-2);
    }
    .content {
      height: calc(100% - 100px - 2px);
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}
</style>
