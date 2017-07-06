<template>
  <div class="user-home">
    <h1>{{ msg }}</h1>
    <button @click="handleClickH1">点击H1</button>
    <button @click="handleClickH2">点击H2</button>
    <button @click="handleClickH3">点击H3</button>
    <child-h1 ref="ChildH1">
      <child-h2 ref="ChildH2">
        <template scope="scopesH2">
          <child-h3 ref="ChildH3" v-show="show">
            <h1 slot="header">这是H3头部</h1>
            <p>{{ scopesH2.text }}</p>
            <template slot="zw" scope="scopesH3">
              {{ scopesH3.text }}
              <p>这是H3正文</p>
            </template>
            <template slot="list" scope="scopesItem">
              <li class="item">{{ scopesItem.text }}</li>
            </template>
            <p slot="footer">这是H3脚部</p>
          </child-h3>
        </template>
      </child-h2>
    </child-h1>
    <keep-alive>
        <component :is="curnView"></component>
    </keep-alive>

    <button @click="show=!show">Toggle</button>
    <transition name="custom-transition-class" enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <child-h2 v-if="show" ref="ChildH2"></child-h2>
    </transition>
  </div>
</template>

<script>
  import ChildH1 from 'views/child/child-h1'
  import ChildH2 from 'views/child/child-h2'
  import ChildH3 from 'views/child/child-h3'

  const Home={template:'<div>Home</div>'}

  export default {
    name   : 'UserHome',
    componentName:'UserHome',
    myOption:'User Home',
    components:{
      ChildH1,
      ChildH2,
      ChildH3
    },
    data () {
      return {
        show:true,
        msg: 'User Home',
        curnView:ChildH1
      }
    },
    methods: {
      handleClickH1(){
        this.$refs.ChildH1.f1();
      },
      handleClickH2(){
        this.$refs.ChildH2.f1();
      },
      handleClickH3(){
        this.$refs.ChildH3.f1();
      }
    },
    created(){
    }
  }
</script>
