<template>
  <div class="list">
    <div v-if="loading">
      Loading...
    </div>

    <ul v-if="listData">
      <li v-for="item in listData">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
  import api from 'services/api'

  export default {
    name   : 'list',
    data () {
      return {
        loading:false,
        listData: null
      }
    },
    watch:{
      $route(){
        this.getList();
      }
    },
    methods: {
      getList(){
        this.loading=true;
        const query={}
        api.getList({ query }).then((res)=>{
          this.loading=false;
          this.listData=res;
        });
      }
    },
    created(){
      this.getList();
    }
  }
</script>
