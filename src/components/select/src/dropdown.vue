<template>
  <div class="el-select-dropdown">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name         : 'elSelectDropdown',
    componentName: 'elSelectDropdown',
    data () {
      return {}
    }
  }
</script>

<style>
  .el-select-dropdown {
    margin: 5px 0;
    border: 1px solid #d3dce6;
    border-radius: 2px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    box-sizing: border-box;
  }
</style>
