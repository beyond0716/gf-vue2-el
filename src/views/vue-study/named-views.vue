<template>
  <div class="named-views">
    <router-view class="view a" name="a"></router-view>
    <router-view class="view b" name="b"></router-view>
    <router-view class="view c" name="c"></router-view>
  </div>
</template>

<script>

export default {
  name:'named-views',
  data(){
    return {
    }
  }
}
</script>
