<template>
  <el-select placeholder="请选择" v-model="value">
    <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>
  import ElSelect from '../../components/select'
  import ElOption from '../../components/select/src/option'

  export default {
    componentName: 'test',
    components   : {
      ElSelect,
      ElOption
    },
    data(){
      return {
        options: [{
          value: '选项1',
          label: '网站部'
        }, {
          value: '选项2',
          label: '技术部'
        }, {
          value: '选项3',
          label: '软件部'
        }, {
          value: '选项4',
          label: '游戏部'
        }, {
          value: '选项5',
          label: '人事部'
        }, {
          value: '选项6',
          label: '后勤部'
        }],
        value  : ''
      }
    },
    methods      : {

    }
  }
</script>

<style>

</style>
