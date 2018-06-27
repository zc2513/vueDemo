<template>
  <div>
    <el-table ref="singleTable"
        :data="tableData"
        highlight-current-row
        @select='selectSave'
        @select-all='selectAll'
        @selection-change='selectChange'
        @cell-mouse-enter='cellMouseEnter'
        @row-dblclick='rowDblclick'
        @header-click='headerClick'
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column> 
        <el-table-column type="index"  width="50"></el-table-column>
        <el-table-column  property="date" label="日期" width="120"> </el-table-column>
        <el-table-column property="name" label="姓名" width="120"> </el-table-column>
        <el-table-column property="address" label="地址"> </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
        <el-button @click="Current()">取消所有选则</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
            {   
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, 
            {
                date: '2016-05-04',
                name: '王小虎',
                address: '北京市普陀区金沙江路 1517 弄'
            }, 
            {
                date: '2016-05-01',
                name: '张胜男',
                address: '天津市普陀区金沙江路 1519 弄'
            }, 
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '西安市普陀区金沙江路 1519 弄'
            }
        ],
        currentRow: null
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) { //选中的当前数据 ****点击复选框和行都生效 但是同一行多次点击只生效一次
        this.currentRow = val;
      },
      Current(){
           this.$refs.singleTable.setCurrentRow();
           this.$refs.singleTable.clearSelection();
      },
      selectSave(selection, row){//参数一 选中的所有的数据数组表现，参数二 当前点击的数据
        //   console.log("selection",selection, "row",row)
      },
      selectAll(selection){//选中所有触发
        //   console.log(selection)
      },
      selectChange(selection){//每次选中触发
          console.log(selection)
      },
      cellMouseEnter(){//单元格划过事件
        //   console.log(arguments)
      },
      rowDblclick(){//双击事件
        //   console.log(arguments)      
        this.$notify({
          title: '被双击了',
          type: 'success'
        });
      },
      headerClick(){
        //   console.log(arguments)
      }
    }
  }
</script>
<style>
    .rowCls{
        background-color: #e2e2e2!important;
    }
</style>
