<template>
  <label class="el-checkbox">
    <span class="el-checkbox_input" :class="{'is-disabled':disabled,'is-focus':focus,'is-checked':isChecked}">
      <span class="el-checkbox_icon"></span>
      <input type="checkbox" class="el-checkbox_original" v-model="model" :disabled="disabled" :value="label" :name="name" @focus="focus=true" @blur="focus=false">
    </span>
    <span class="el-checkbox_label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
  export default {
    name         : 'ElCheckbox',
    componentName: 'ElCheckbox',
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
      },
      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        }
      },
    },
    methods      : {

    }
  }
</script>

<style scoped>
  .el-checkbox {
    display: inline-block;
    color: #1f2d3d;
    white-space: nowrap;
    cursor: pointer;
  }

  .el-checkbox_input {
    position: relative;
    display: inline-block;
    float: left;
    width: 18px;
    height: 18px;
  }

  .el-checkbox_icon {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .el-checkbox_icon:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: 2px solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scaleY(0);
    transform-origin: center;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
  }

  .el-checkbox_input.is-checked .el-checkbox_icon {
    border-color: #2e90fe;
    background-color: #20a0ff;
  }

  .el-checkbox_input.is-checked .el-checkbox_icon:after {
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox_input.is-disabled .el-checkbox_icon {
    border-color: #d3dce6;
    background-color: #eff2f7;
    cursor: not-allowed;
  }

  .el-checkbox_input.is-disabled.is-checked .el-checkbox_icon {
    border-color: #d3dce6;
    background-color: #d3dce6;
  }

  .el-checkbox_original {
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

  .el-checkbox_label {
    float: left;
    margin-top: 2px;
    padding-left: 5px;
    font-size: 14px;
    line-height: 1;
  }

  .el-checkbox_input.is-disabled + .el-checkbox_label {
    color: #bbbbbb;
    cursor: not-allowed;
  }
</style>
