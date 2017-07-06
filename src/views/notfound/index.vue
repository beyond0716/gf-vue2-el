<template>
  <h1>{{ msg }}</h1>
</template>

<script>

export default {
  name:'notfound',
  data(){
    return {
      msg:'Not Found...'
    }
  },
  created(){
    console.log(window.location.pathname);
  }
}
</script>
