<template>
  <div class="curry">
    <h1>curry</h1>
  </div>
</template>

<script>
  import api from 'services/api'
  import _ from 'lodash'

  export default {
    name   : 'curry',
    data () {
      return {

      }
    },
    methods: {
      test(){
        const match = _.curry(function(what, str) {
          return str.match(what);
        });

        const replace = _.curry(function(what, replacement, str) {
          return str.replace(what, replacement);
        });

        const filter = _.curry(function(f, ary) {
          return ary.filter(f);
        });

        const map = _.curry(function(f, ary) {
          return ary.map(f);
        });

//        console.log(match(/\s+/g, "hello world"));
//        console.log(match(/\s+/g)("hello world"));

        const hasSpaces =match(/\s+/g);
//        console.log(hasSpaces ("hello world"));
//        console.log(hasSpaces("spaceless"));

//        console.log(filter(hasSpaces, ["tori_spelling", "tori amos"]));

        const findSpaces = filter(hasSpaces);
//        console.log(findSpaces(["tori_spelling", "tori amos"]));

        const noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }
        console.log(noVowels("*","Chocolate Rain"));
        const censored = noVowels("*");
//        console.log(censored("Chocolate Rain"));
        const getChildren = function(x) {
          return x.childNodes;
        };
        const allTheChildren = map(getChildren);

      }
    },
    created(){
      this.test();
    }
  }
</script>
