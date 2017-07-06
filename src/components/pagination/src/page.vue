<template>
  <ul class="el-page" @click="onPagerClick">
    <li :class="{active:currentPage===1}">1</li>
    <li class="fa more btn-quickprev" v-if="showPrevMore" :class="[quickprevIconClass]" @mouseenter="quickprevIconClass = 'fa-angle-double-left'"
        @mouseleave="quickprevIconClass='fa-ellipsis-h'"></li>
    <li v-for="pager in pagers" :class="{active:currentPage===pager}">{{ pager }}</li>
    <li class="fa more btn-quicknext" v-if="showNextMore" :class="[quicknextIconClass]" @mouseenter="quicknextIconClass = 'fa-angle-double-right'"
        @mouseleave="quicknextIconClass='fa-ellipsis-h'"></li>
    <li :class="{active:currentPage===pageCount}">{{ pageCount }}</li>
  </ul>
</template>

<script>
  export default {
    name         : 'ElPage',
    componentName: 'ElPage',
    props        : {
      test:String,
      currentPage:Number,
      pageCount: Number
    },
    data () {
      return {
        showPrevMore:false,
        showNextMore:false,
        quickprevIconClass: 'fa-ellipsis-h',
        quicknextIconClass: 'fa-ellipsis-h'
      }
    },
    computed     : {
      pagers(){
        const array=[];
        const pagerCount=7;
        const currentPage=Number(this.currentPage);
        const pageCount=Number(this.pageCount);
        let showPrevMore=false;
        let showNextMore=false;
        if(pageCount>pagerCount){
          if(currentPage>pagerCount-3){
            showPrevMore=true;
          }
          if(currentPage<pageCount-3){
            showNextMore=true;
          }
        }
        if (showPrevMore && !showNextMore){
          const startPage=pageCount-(pagerCount-2);
          for(let i=startPage;i<pageCount;i++){
            array.push(i);
          }

        }else if (showPrevMore && showNextMore){
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        }else if(!showPrevMore && showNextMore){
          for(let i=2;i<pagerCount;i++){
            array.push(i);
          }
        }else{
          for(var i=2;i<pageCount;i++){
            array.push(i);
          }
        }
        this.showPrevMore=showPrevMore;
        this.showNextMore=showNextMore;
        return array;
      }
    },
    watch:{
      showPrevMore(val) {
        if (!val) this.quickprevIconClass = 'fa-ellipsis-h';
      },

      showNextMore(val) {
        if (!val) this.quicknextIconClass = 'fa-ellipsis-h';
      }
    },
    methods      : {
      onPagerClick(event){
        const target=event.target;
        let newPage=Number(target.textContent);
        const currentPage=this.currentPage;
        if(target.className.indexOf('more')!==-1){
          if(target.className.indexOf('quickprev')!==-1){
            newPage=currentPage-5;
          }else if(target.className.indexOf('quicknext')!==-1){
            newPage=currentPage+5;
          }
        }

        if(newPage!==currentPage){
          this.$emit('change',newPage);
        }
      }
    }
  }
</script>

<style>
  .el-page {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-size: 0;
    list-style: none;
    vertical-align: top;
  }

  .el-page li{
    display: inline-block;
    min-width: 27px;
    height: 28px;
    padding: 0 4px;
    line-height: 28px;
    text-align: center;
    font-size: 13px;
    background-color: #ffffff;
    border: 1px solid #d3dce6;
    border-right: 0;
    cursor: pointer;
    box-sizing: border-box;
  }
  .el-page li:last-child{border-right: 1px solid #d3dce6;}
  .el-page li.active{color: #ffffff;background-color: #20a0ff;border-color: #20a0ff;cursor: default;}
  .el-page li.active+li{border-left-color: #20a0ff;}
</style>
