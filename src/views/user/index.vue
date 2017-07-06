<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <div>{{ $route.params.name }} {{ $route.query.page }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name   : 'User',
    componentName:'User',
    myOption:'User Index',
    data () {
      return {
        msg: 'dynamic-route'
      }
    },
    methods: {

    }
  }
</script>
