<template>
<div class="child-h2">
  <h2>这是标题H2</h2>
  <slot text="Hello from child-h2">标题H2副文本</slot>
</div>
</template>

<script>
  export default {
    name   : 'ChildH2',
    componentName:'ChildH2',
    myOption:'Child H2',
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
