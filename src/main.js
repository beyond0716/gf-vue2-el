// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el    : '#app',
  router,
  store,
  render: h => h(App)
})

/*
 new Vue({
 router,
 template: '<App/>',
 components: { App }
 }).$mount('#app')*/

/*Vue.mixin({
 created(){
 var myOption=this.$options.myOption;
 if(myOption){
 console.log(myOption);
 }
 }
 })*/
