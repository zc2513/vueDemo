<template>
  <div>
    <el-table ref="singleTable"
        :data="tableData"
        highlight-current-row
        :row-class-name='saveCls'
        :row-style='savestyle'
        :cell-style='dygstyle'
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
                address: '上海市普陀区金沙江路 1517 弄'
            }, 
            {
                date: '2016-05-01',
                name: '张胜男',
                address: '上海市普陀区金沙江路 1519 弄'
            }, 
            {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, 
            {
                date: '2016-05-03',
                name: '张胜男',
                address: null
            }
        ],
        currentRow: null
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      saveCls(row){//根据行数据返回 添加指定需求效果 --样式添加到class
          if(row.rowIndex == 2){
              return "rowCls"
          }
      },
      savestyle(row){//根据行数据返回 添加指定需求效果 --样式添加到style
          if(row.rowIndex == 3){
              return "background-color:#999";
          }
      },
      dygstyle(option){//单元格style方法
        if(option.column.label == '日期' && option.row.name == '张胜男'){
             return "background-color:#cc0";
        }
      },
    }
  }
</script>
<style>
    .rowCls{
        background-color: #e2e2e2!important;
    }
</style>
