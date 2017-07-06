<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <button @click="go">Go</button>
    <!--<img src="../../assets/img/logo.png">-->
    <button @click="show=!show">Toggle</button>
    <!--<transition name="custom-transition-class" enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <child-h2 v-if="show" ref="ChildH2"></child-h2>
    </transition>-->
    <!--<transition v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false">
      <child-h2 v-if="show" ref="ChildH2"></child-h2>
    </transition>-->
    <transition name="fade">
      <button v-if="show" key="save">
        Save
      </button>
      <button v-else key="edit">
        Edit
      </button>
    </transition>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'
  import ChildH1 from 'views/child/child-h1'
  import ChildH2 from 'views/child/child-h2'
  import ChildH3 from 'views/child/child-h3'
  import Mixin from 'views/user/mixin'

  export default {
    name   : 'UserProfile',
    componentName:'UserProfile',
    myOption:'UserProfile',
    mixins: [Mixin],
    components:{
      ChildH1,
      ChildH2,
      ChildH3
    },
    data () {
      return {
        show:true,
        msg: 'User Profile'
      }
    },
    methods: {
      go(){
        this.$router.push('/radio')
      },
      hello: function () {
        console.log('hello from profile!')
      },
      test(){
        var myOption=this.$options.myOption;
        if(myOption){
          console.log(myOption);
        }
      },
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter: function (el, done) {
        Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      leave: function (el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    },
    created(){
      this.test();
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2.5s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(30px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in 2.5s;
  }
  .bounce-leave-active {
    animation: bounce-out 2.5s;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
