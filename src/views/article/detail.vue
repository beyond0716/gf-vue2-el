<template>
  <div class="detail">
    <p>{{ detailData.title }}</p>
  </div>
</template>

<script>
  import api from 'services/api'

  export default {
    name   : 'detail',
    data () {
      return {
        detailData:{}
      }
    },
    methods: {
      getDetail(){
        const params=['5433d5e4e737cbe96dcef312'];
        api.getDetail({ params }).then((res)=>{
          console.log(res);
          this.detailData=res;
        });
      }
    },
    created(){
      this.getDetail();
    }
  }
</script>
