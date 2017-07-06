<template>
  <div class="router-link">
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link v-bind:to="'/study'">Study</router-link>
      </li>
      <li>
        <router-link :to="'/study/curry'">Study-curry</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/article' }">Article</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/article',query: { page:1 }}">Article?page=1</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/user/guofeng',query: { page:1 }}">
          user/guofeng?page=1
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/user/guofeng/profile',query: { page:1 }}">
          user/guofeng/profile?page=1
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'user',params: {name: 'guofeng' }}">user/guofeng/
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'user',params: {name: 'guofeng' },query: { page:2 }}">user/guofeng/?page=2
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'profile',params: {name: 'guofeng' },query: { page:2 }}">user/guofeng/profile?page=2
        </router-link>
      </li>
    </ul>
    <ul>
      <!--<li><router-link :to="{ name: 'multi' }">multi</router-link></li>-->
      <li><router-link :to="{ path: 'multi' }">multi</router-link></li>
    </ul>
    <ul>
      <li><router-link :to="'computed'">Computed</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'routerLink1',
  data(){
    return {
      title:'router-link'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
