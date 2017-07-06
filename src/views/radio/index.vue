<template>
  <div>
    <div class="radio-list">
      <el-radio class="radio" v-model="radioDept" label="0" name="dept" disabled>网站部</el-radio>
      <el-radio class="radio" v-model="radioDept" label="1" name="dept" disabled>技术部</el-radio>
      <el-radio class="radio" v-model="radioDept" label="2" name="dept">软件部</el-radio>
      <el-radio class="radio" v-model="radioDept" label="3" name="dept">游戏部</el-radio>
      <el-radio class="radio" v-model="radioDept" label="4" name="dept">人事部</el-radio>
      <el-radio class="radio" v-model="radioDept" label="5" name="dept">后勤部</el-radio>
    </div>
    <input type="button" value="查看" @click="view">
  </div>
</template>

<script>
  import ElRadio from '../../components/radio'

export default {
  components:{
    ElRadio
  },
  data(){
    return {
      radioDept:'1'
    }
  },
  methods   : {
    view(){
      console.log(this.radioDept);
    }
  }
}
</script>
