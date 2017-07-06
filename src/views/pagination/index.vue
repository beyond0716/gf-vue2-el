<template>
  <el-pagination :current-page="16" :total="200" @current-change="currentChange" small layout="total,prev,page,next,->,jump"></el-pagination>
</template>

<script>
  import ElPagination from '../../components/pagination'

  export default {
    components: {
      ElPagination
    },
    data(){
      return {}
    },
    methods   : {
      currentChange(val){
        console.log(val);

      }
    }
  }
</script>
