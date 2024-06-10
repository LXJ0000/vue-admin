<template>
  <div class="admin">
    <div class="aside">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="main">
      <div class="header">
        <div class="bread_crumb"></div>
        <div class="action">
          <icon-home />
          <icon-sun-fill />
          <icon-moon-fill />
          <icon-fullscreen-exit />
          <icon-fullscreen />
          <div class="user"></div>
        </div>
      </div>
      <div class="tab"></div>
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less"></style>
