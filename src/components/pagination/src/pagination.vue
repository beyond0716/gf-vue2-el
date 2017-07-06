<script type="text/babel">
  import Page from './page.vue';

  export default {
    name         : 'ElPagination',
    componentName: 'ElPagination',
    props        : {
      pageSize   : {
        type   : Number,
        default: 10
      },
      total      : Number,
      pageCount  : Number,
      currentPage: {
        type   : Number,
        default: 1
      },
      small: Boolean,
      layout: {
        default: 'prev, page, next, jump, ->, total'
      }
    },
    data () {
      return {
        internalCurrentPage:1,
        internalPageSize: 10
      }
    },
    computed     : {
      internalPageCount(){
        if (typeof this.total === 'number') {
          return Math.ceil(this.total / this.internalPageSize);
        } else if (typeof this.pageCount === 'number') {
          return this.pageCount;
        }
        return null;
      }
    },
    render(h){
      let template=<div class="el-pagination"></div>;
      let rightWrapper=<div class='el-pagination-rightwrapper'></div>;
      let haveRightWrapper = false;
      const layout=this.layout || '';
      if(!layout) return;
      const components=layout.split(',').map((item)=>item.trim());
      const template_map={
        total:<total></total>,
        prev: <prev></prev>,
        page: <page current-page={ this.internalCurrentPage } page-count={ this.internalPageCount } on-change={this.handleCurrentChange}></page>,
        next: <next></next>,
        jump: <jump></jump>
      };
      if(this.small){
        template.data.class += ' el-pagination-small';
      }
      components.forEach(comp=>{
        if(comp ==='->'){
          haveRightWrapper=true;
          return;
        }
        if(!haveRightWrapper){
          template.children.push(template_map[comp]);
        }else{
          rightWrapper.children.push(template_map[comp]);
        }
      });
      if(haveRightWrapper){
        template.children.push(rightWrapper);
      }
      return template;
    },
    components   : {
      Total: {
        render(h) {
          return (
              typeof this.$parent.total === 'number'?<span class="el-pagination-total">共{this.$parent.total}条</span>:''
          );
        }
      },
      Prev: {
        render(h){
          return(
            <button class={['btn-prev',{disabled:this.$parent.internalCurrentPage<=1}]} on-click={ this.$parent.prev }>
              <i class="fa fa-angle-left"></i>
            </button>
          );
        }
      },
      Page,
      Next: {
        render(h){
          return(
            <button class={['btn-next',{disabled:this.$parent.internalCurrentPage===this.$parent.internalPageCount || this.$parent.internalCurrentPage===0}]} on-click={ this.$parent.next }>
              <i class="fa fa-angle-right"></i>
            </button>
          );
        }
      },
      Jump: {
        render(h) {
          return (
            <span class="el-pagination-jump">
              前往<input class="el-pagination-editor"
                         type="number"
                         min={1}
                         max={this.internalPageCount}
                         domProps-value={this.$parent.internalCurrentPage}
                         on-change={this.handleChange}
                         style={{width: '30px'}}
                     />页
            </span>
          );
        },
        methods:{
          handleChange({ target }) {
            this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(target.value);
          }
        }
      }
    },
    methods      : {
      handleCurrentChange(val){
        this.internalCurrentPage = this.getValidCurrentPage(val);
      },
      prev(){
        const newVal=this.internalCurrentPage-1;
        this.internalCurrentPage=this.getValidCurrentPage(newVal);
      },
      next(){
        const newVal=this.internalCurrentPage+1;
        this.internalCurrentPage=this.getValidCurrentPage(newVal);
      },
      getValidCurrentPage(value) {
        value = parseInt(value, 10);
        const havePageCount = typeof this.internalPageCount === 'number';
        let resetValue;
        if (!havePageCount) {
          if (isNaN(value) || value < 1) resetValue = 1;
        } else {
          if (value < 1) {
            resetValue = 1;
          } else if (value > this.internalPageCount) {
            resetValue = this.internalPageCount;
          }
        }

        if (resetValue === undefined && isNaN(value)) {
          resetValue = 1;
        } else if (resetValue === 0) {
          resetValue = 1;
        }

        return resetValue === undefined ? value : resetValue;
      }
    },
    watch        : {
      pageSize: {
        immediate: true,
        handler(val){
          this.internalPageSize = val;
        }
      },
      currentPage:{
        immediate:true,
        handler(val){
          this.internalCurrentPage=val;
        }
      },
      internalCurrentPage(val){
        val=parseInt(val,10);
        this.$emit('current-change', val);
      }
    }
  }
</script>

<style >
  .el-pagination {
    padding: 2px 5px;
    color: #475669;
    font-size: 0;
    white-space: nowrap;
  }
  .el-pagination-rightwrapper{float: right;}

  .el-pagination span {
    display: inline-block;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box
  }

  .el-pagination button {
    display: inline-block;
    min-width: 27px;
    height: 28px;
    margin: 0;
    padding: 0 4px;
    line-height: 28px;
    text-align: center;
    font-size: 13px;
    background-color: #ffffff;
    border: 1px solid #d3dce6;
    cursor: pointer;
    box-sizing: border-box;
    vertical-align: top;
    outline: none;
  }

  .el-pagination button.disabled {
    color: #e4e4e4;
    cursor: not-allowed;
  }

  .el-pagination .btn-prev {
    border-radius: 2px 0 0 2px;
    border-right: 0;
  }

  .el-pagination .btn-next {
    border-radius: 0 2px 2px 0;
    border-left: 0;
  }

  .el-pagination-total{margin: 0 10px;}

  .el-pagination-jump{margin-left: 10px;}

  .el-pagination-editor {
    width: 30px;
    margin: 0 6px;
    padding: 4px 2px;
    line-height: 18px;
    text-align: center;
    border: 1px solid #D3DCE6;
    border-radius: 2px;
    box-sizing: border-box;
    transition: border .3s;
  }
  .el-pagination-editor::-webkit-inner-spin-button,
  .el-pagination-editor::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0
  }
  .el-pagination-editor:focus {
    outline: 0;
    border-color: #20a0ff
  }

  .el-pagination-small .btn-next,
  .el-pagination-small .btn-prev,
  .el-pagination-small .el-page li,
  .el-pagination-small .el-page li:last-child {
    border-color: transparent;
    font-size: 12px;
    line-height: 22px;
    height: 22px;
    min-width: 22px
  }

  .el-pagination-small .arrow.disabled {
    visibility: hidden
  }

  .el-pagination-small .el-page li {
    border-radius: 2px
  }
</style>
