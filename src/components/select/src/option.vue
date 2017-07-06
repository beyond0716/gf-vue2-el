<template>
  <li class="el-select-option" @click.stop="selectOptionClick">
    <slot>{{ currentLabel }}</slot>
  </li>
</template>

<script>
  import Emitter from '../../../mixins/emitter';

  export default {
    mixins       : [Emitter],
    name         : 'elSelectOption',
    componentName: 'elSelectOption',
    props        : {
      value: {
        required: true
      },
      label: [String, Number]
    },
    data () {
      return {}
    },
    watch        : {},
    computed     : {
      currentLabel(){
        return this.label;
      }
    },
    methods      : {
      selectOptionClick(){
        this.dispatch('ElSelect', 'handleOptionClick', this);
      }
    }
  }
</script>

<style>
  .el-select-option {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 36px;
    padding: 8px 10px;
    line-height: 1.5;
    color: #475669;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .el-select-option.hover {
    background-color: #e5e9f2;
  }
</style>
