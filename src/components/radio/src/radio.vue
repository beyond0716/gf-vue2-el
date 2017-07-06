<template>
  <label class="el-radio">
    <span class="el-radio_input" :class="{'is-disabled':disabled,'is-focus':focus,'is-checked':model===label}">
      <span class="el-radio_icon"></span>
      <input type="radio" class="el-radio_original" v-model="model" :disabled="disabled" :value="label" :name="name"
             @focus="focus=true" @blur="focus=false">
    </span>
    <span class="el-radio_label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name         : 'ElRadio',
    componentName: 'ElRadio',
    props        : {
      value   : {},
      label   : {},
      name    : String,
      disabled: Boolean
    },
    data () {
      return {
        focus: false
      }
    },
    computed     : {
      model: {
        get(){
          return this.value;
        },
        set(val){
          this.$emit('input',val);
        }
      }
    },
    methods      : {

    }
  }
</script>

<style scoped>
  .el-radio {
    display: inline-block;
    color: #1f2d3d;
    white-space: nowrap;
    cursor: pointer;
  }

  .el-radio_input {
    position: relative;
    display: inline-block;
    float: left;
    width: 18px;
    height: 18px;
  }

  .el-radio_icon {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #c0ccda;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .el-radio_icon:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ffffff;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s cubic-bezier(.71, -.46, .88, .6);
  }

  .el-radio_input.is-checked .el-radio_icon {
    border-color: #20a0ff;
    background-color: #20a0ff;
  }

  .el-radio_input.is-checked .el-radio_icon:after {
    transform: translate(-50%, -50%) scale(1);
  }

  .el-radio_input.is-disabled .el-radio_icon {
    border-color: #d3dce6;
    background-color: #eff2f7;
    cursor: not-allowed;
  }

  .el-radio_input.is-disabled.is-checked .el-radio_icon {
    border-color: #d3dce6;
    background-color: #d3dce6;
  }

  .el-radio_original {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 3px 0 0 3px;
    cursor: pointer;
    opacity: 0;
  }

  .el-radio_label {
    float: left;
    margin-top: 2px;
    padding-left: 5px;
    font-size: 14px;
    line-height: 1;
  }

  .el-radio_input.is-disabled + .el-radio_label {
    color: #bbbbbb;
    cursor: not-allowed;
  }
</style>
