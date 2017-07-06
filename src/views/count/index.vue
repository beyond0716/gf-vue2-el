<template>
  <div class="count">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'count',
    data () {
      return {

      }
    },
    computed: {
      count () {
        return this.$store.state.front.count;
      },
      donetodos(){
        return this.$store.getters.donetodos;
      },
      donetodosCount(){
        return this.$store.getters.donetodosCount;
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    },
    created(){
      console.log(this.donetodos);
      console.log(this.donetodosCount);
    }
  }
</script>
