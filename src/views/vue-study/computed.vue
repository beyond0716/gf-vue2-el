<template>
  <div class="computed">
    <h1>{{ msg }}</h1>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
      <p>Computed reversed message: "{{ reverseMessage() }}"</p>
    </div>
    <div><input type="text" v-model="firstName"><input type="text" v-model="lastName"></div>
    <div><input type="text" v-model="fullName"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Computed',
        message: 'Hello',
        firstName:'Guo',
        lastName:'Feng'
      }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      fullName: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    },
    methods: {
      reverseMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>
