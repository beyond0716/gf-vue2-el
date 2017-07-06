<template>
<div class="child-h1">
  <h1>这是标题H1</h1>
  <slot>标题H1副文本</slot>
</div>
</template>

<script>
  export default {
    name   : 'ChildH1',
    componentName:'ChildH1',
    myOption:'Child H1',
    data () {
      return {}
    },
    methods: {
      f1(){
        console.log(this.$parent.$options.componentName);
      }
    },
    created(){

    }
  }
</script>
