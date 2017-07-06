<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <child-h2 ref="ChildAa"></child-h2>
  </div>
</template>

<script>
  const NotFound={template:'<div>NotFound</div>'}
  const Foo={template:'<div>Foo</div>'}
  const Bar={template:'<div>Bar</div>'}
  const Tom={template:'<div>Tom</div>'}

  const Routes={
    '/foo':Foo,
    '/bar':Bar,
    '/tom':Tom
  }

  export default {
    name   : 'Route',
    componentName:'Route',
    data () {
      return {
        curnRoute: window.location.pathname
      }
    },
    computed:{
      curnComponent(){
        return Routes[this.curnRoute] || NotFound
      }
    },
    render(h){
      return h(this.curnComponent)
    }
    methods: {

    },
    created(){

    }
  }
</script>
