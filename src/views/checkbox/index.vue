<template>
  <div>
    <div class="checkbox-list">
      <el-checkbox class="checkbox" v-model="checkboxDept" label="网站部" name="dept" disabled>网站部</el-checkbox>
      <el-checkbox class="checkbox" v-model="checkboxDept" label="技术部" name="dept" disabled>技术部</el-checkbox>
      <el-checkbox class="checkbox" v-model="checkboxDept" label="软件部" name="dept">软件部</el-checkbox>
      <el-checkbox class="checkbox" v-model="checkboxDept" label="游戏部" name="dept">游戏部</el-checkbox>
      <el-checkbox class="checkbox" v-model="checkboxDept" label="人事部" name="dept">人事部</el-checkbox>
      <el-checkbox class="checkbox" v-model="checkboxDept" label="后勤部" name="dept">后勤部</el-checkbox>
    </div>
    <input type="button" value="查看" @click="view">
  </div>
</template>

<script>
  import ElCheckbox from '../../components/checkbox'

  export default {
    components: {
      ElCheckbox
    },
    data(){
      return {
        checkboxDept: ['技术部']
      }
    },
    methods   : {
      view(){
        console.log(this.checkboxDept);
      }
    }
  }
</script>
