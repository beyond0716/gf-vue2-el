<template>
  <div :class="[
    type==='textarea'?'el-textarea':'el-input',
    size ? 'el-input-' + size : '',
    {
      'is-disabled': disabled
    }
  ]">
    <template v-if="type!=='textarea'">
      <slot>
        <i class="el-input-icon fa"
           :class="['el-icon-'+icon,onIconClick?'is-clickable':'']"
           v-if="icon"
           @click="handleIconClick"></i>
      </slot>
      <input type="text" class="el-input-inner"
             ref="input"
             :value="currentValue"
             :placeholder="placeholder"
             :name="name"
             :readonly="readonly"
             :disabled="disabled"
             :autofocus="autofocus"
             :autocomplete="autoComplete"
             :maxlength="maxlength"
             :minlength="minlength"
             :max="max"
             :min="min"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur">
    </template>
    <textarea class="el-textarea-inner"
      v-else
      ref="textarea"
      :rows="rows"
      :style="textareaStyle"
      @input="handleInput">

    </textarea>
  </div>
</template>

<script>
//  import emitter from '../../../mixins/emitter';
  import calcTextareaHeight from './calcTextareaHeight';

  export default {
    name   : 'elInput',
    componentName: 'elInput',
//    mixins: [emitter],
    props  : {
      type:{
        type:String,
        default:'text'
      },
      disabled:{
        type:Boolean,
        default:false
      },
      placeholder: String,
      value      : [String, Number],
      name: String,
      readonly   : Boolean,
      resize:String,
      autofocus: Boolean,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autoComplete:{
        type:String,
        default:'off'
      },
      icon: String,
      maxlength:Number,
      minlength:Number,
      max: {},
      min: {},
      size:String,
      rows:{
        type:Number,
        default:2
      },
      onIconClick:Function
    },
    data () {
      return {
        currentValue:this.value,
        textareaStyle:{}
      }
    },
    watch  : {
      value(val){
        this.setCurrentValue(val);
      }
    },
    methods: {
      handleInput(event){
        this.setCurrentValue(event.target.value);
      },
      handleFocus(event){
        this.$emit('focus', event);
      },
      handleBlur(event){
        this.$emit('blur', event);
      },
      handleIconClick(event){
        if(this.onIconClick){
          this.onIconClick(event);
        }
        this.$emit('click', event);
      },
      setCurrentValue(value){
        if(value===this.currentValue) return;
        this.$nextTick(()=>{
          this.resizeTextarea();
        });
        this.currentValue=value;
        this.$emit('input',value);
        this.$emit('change', value);
      },
      resizeTextarea(){
        var { autosize, type } = this;
        if (!autosize || type !== 'textarea') return;
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;
        const options = {
          resize: this.resize
        };
        this.textareaStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows, options);
      }
    },
    mounted() {
      this.resizeTextarea();
    }
  }
</script>

<style>
  .el-input {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 14px;
  }

  .el-input.is-disabled .el-input-inner {
    background-color: #eef1f6;
    border-color: #d1dbe5;
    color: #bbb;
    cursor: not-allowed
  }

  .el-input.is-disabled .el-input-inner::-webkit-input-placeholder {
    color: #bfcbd9
  }

  .el-input.is-disabled .el-input-inner::-moz-placeholder {
    color: #bfcbd9
  }

  .el-input.is-disabled .el-input-inner:-ms-input-placeholder {
    color: #bfcbd9
  }

  .el-input.is-disabled .el-input-inner::placeholder {
    color: #bfcbd9
  }

  .el-input.is-active .el-input-inner {
    outline: 0;
    border-color: #20a0ff
  }

  .el-input-large {
    font-size: 16px
  }

  .el-input-large .el-input-inner {
    height: 42px
  }

  .el-input-small {
    font-size: 13px
  }

  .el-input-small .el-input-inner {
    height: 30px
  }

  .el-input-mini {
    font-size: 12px
  }

  .el-input-mini .el-input-inner {
    height: 22px
  }


  .el-input-icon {
    position: absolute;
    width: 35px;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    color: #bfcbd9;
    transition: all .3s
  }

  .el-input-icon:after {
    display: inline-block;
    width: 0;
    height: 100%;
    content: '';
    vertical-align: middle
  }

  .el-input-inner {
    width: 100%;
    height: 36px;
    padding: 3px 10px;
    line-height: 1;
    color: #1f2d3d;
    background-color: #ffffff;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  }

  .el-input-icon + .el-input-inner {
    padding-right: 35px;
  }

  .el-input-icon.is-clickable:hover {
    cursor: pointer;
    color: #8391a5
  }

  .el-input-icon.is-clickable:hover+.el-input-inner {
    border-color: #8391a5
  }

  .el-textarea.is-disabled .el-textarea-inner {
    background-color: #eef1f6;
    border-color: #d1dbe5;
    color: #bbb;
    cursor: not-allowed
  }

  .el-textarea.is-disabled .el-textarea-inner::-webkit-input-placeholder {
    color: #bfcbd9
  }

  .el-textarea.is-disabled .el-textarea-inner::-moz-placeholder {
    color: #bfcbd9
  }

  .el-textarea.is-disabled .el-textarea-inner:-ms-input-placeholder {
    color: #bfcbd9
  }

  .el-textarea.is-disabled .el-textarea-inner::placeholder {
    color: #bfcbd9
  }

  .el-textarea-inner {
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #1f2d3d;
    background-color: #fff;
    background-image: none;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1)
  }

  .el-textarea-inner::-webkit-input-placeholder {
    color: #97a8be
  }

  .el-textarea-inner::-moz-placeholder {
    color: #97a8be
  }

  .el-textarea-inner:-ms-input-placeholder {
    color: #97a8be
  }

  .el-textarea-inner::placeholder {
    color: #97a8be
  }

  .el-textarea-inner:hover {
    border-color: #8391a5
  }

  .el-textarea-inner:focus {
    outline: 0;
    border-color: #20a0ff
  }
</style>
