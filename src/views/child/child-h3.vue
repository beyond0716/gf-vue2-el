<template>
<div class="child-h3">
  <h3>这是标题H3</h3>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <div class="zw"><slot name="zw" text="Hello from child-h3"></slot></div>
    <ul class="list">
      <slot name="list" v-for="item in items" :text="item.text"></slot>
    </ul>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</div>
</template>

<script>
  export default {
    name   : 'ChildH3',
    componentName:'ChildH3',
    myOption:'Child H3',
    props:[],
    data () {
      return {
        items:[
          {text:'aa'},
          {text:'bb'},
          {text:'cc'},
          {text:'dd'},
          {text:'ee'}
        ]
      }
    },
    methods: {
      f1(){
        console.log(this.$parent.$options.componentName);
        var aa=this.$options.myOption;
        if(aa){
          console.log(aa)
        }
      }
    },
    created(){

    }
  }
</script>
