<template>
  <div class="el-select" v-clickoutside="handleClose">
    <el-input ref="reference"
              v-model="selectedLabel"
              :placeholder="currentPlaceholder"
              :readonly="true"
              @focus="handleFocus"
              @click="handleIconClick">
    </el-input>
    <el-dropdown v-show="visible">
      <ul class="el-select-list">
        <el-option v-if="showNewOption"></el-option>
        <slot></slot>
      </ul>
    </el-dropdown>
  </div>
</template>

<script>
  import ElInput from '../../input';
  import ElOption from './option';
  import ElDropdown from './dropdown';
  import Clickoutside from '../../../utils/clickoutside';

  export default {
    name: 'ElSelect',
    componentName: 'ElSelect',
    components:{
      ElInput,
      ElOption,
      ElDropdown
    },
    directives: { Clickoutside },
    props:{
      placeholder: String,
      value: {}
    },
    data () {
      return {
        visible: false,
        currentPlaceholder:'',
        selectedLabel: ''
      }
    },
    computed:{
      showNewOption(){
        return false;
      }
    },
    watch:{
      visible(val){
        if(!val){
          this.handleIconHide();
        }else{
          this.handleIconShow();
        }
      }
    },
    methods:{
      handleFocus(){
        this.visible=true;
      },
      handleIconClick(){
        this.toggleMenu();
      },
      handleIconShow(){
        let $icon=$(".el-input-icon");
        $icon.addClass("is-reverse");
      },
      handleIconHide(){
        let $icon=$(".el-input-icon");
        $icon.removeClass("is-reverse");
      },
      handleClose() {
        this.visible = false;
      },
      toggleMenu(){
        this.visible = !this.visible;
      },
      setSelected(){
        this.selectedLabel = this.value;
      },
      handleOptionSelect(option){
        this.selectedLabel=option.label;
        this.visible = false;
      }
    },
    created(){
      this.currentPlaceholder=this.placeholder;
      this.setSelected();
      this.$on('handleOptionClick', this.handleOptionSelect);
    }
  }
</script>

<style>
  .el-select{width: 240px;}
  .el-select .el-input-inner{cursor: pointer;}
  .el-select-list{padding: 6px 0;margin: 0;max-height: 274px;box-sizing: border-box;}
  .el-select .el-input .el-input-icon{
    top: 50%;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;
    transform: translateY(-50%) rotate(180deg);}
</style>
