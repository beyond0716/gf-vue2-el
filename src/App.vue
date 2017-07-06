<template>
  <div class="wrapper">
    <el-header></el-header>
    <el-sidebar></el-sidebar>
    <div class="content-wrapper">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  componentName:'App',
  components: {
    ElHeader:require('views/header'),
    ElSidebar:require('views/sidebar')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
