<template>
  <div class="create">
    <button @click="geteditor()">获取</button>
    <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
  </div>
</template>

<script type="text/babel">
  import api from 'services/api'

  export default {
    name   : 'create',
    data () {
      return {
        editor: null
      }
    },
    methods: {
      geteditor() {
        console.log(this.editor.getContent());
      }
    },
    created(){
      this.editor = UE.getEditor('editor');
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>
