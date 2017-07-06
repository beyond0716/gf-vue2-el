<template>
  <div class="wrap">
    <el-input type="textarea" placeholder="请输入内容" v-model="value" autosize></el-input>
  </div>
</template>

<script>
  import ElInput from '../../components/input'

export default {
  components:{
    ElInput
  },
  data(){
    return {
      value:''
    }
  },
  watch:{

  },
  methods   : {
    change(val){

    }
  }
}
</script>
<style scoped>
  .wrap{width: 200px;}
</style>
