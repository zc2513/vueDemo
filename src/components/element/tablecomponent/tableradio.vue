<template>
  <div>
    <el-table 
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @select='selectSave'
        @select-all='selectAll'
        @row-click='rowClick'
        style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column> 
        <el-table-column type="index"  width="50"></el-table-column>
        <el-table-column property="date" label="日期" width="120"> </el-table-column>
        <el-table-column property="name" label="姓名" width="120"> </el-table-column>
        <el-table-column property="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
            { date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}, 
            { date: '2016-05-04',name: '王小虎',address: '北京市普陀区金沙江路 1517 弄'}, 
            { date: '2016-05-01',name: '张胜男',address: '天津市普陀区金沙江路 1519 弄'}, 
            { date: '2016-05-01',name: '王小虎',address: '西安市普陀区金沙江路 1519 弄'}
        ],
        currentRow: null
      }
    },
    methods: {
        rowClick(row){
            this.radio(row)
            this.currentRow = row;
        },
        selectSave(selection, row){//参数一 选中的所有的数据数组表现，参数二 当前点击的数据  ****只有点击复选框的时候多次生效
            if(this.currentRow && this.currentRow == row){//有值并且跟当前点击同一个值才允许取消
                this.$refs.singleTable.setCurrentRow();
                this.currentRow = null; 
            }else{
                this.radio(row)
                this.currentRow = row; 
            }
        },
        selectAll(selection){//选中所有触发
            if(selection.length == 0){//取消全选 清空行样式
                this.$refs.singleTable.setCurrentRow();
            }
        },
        radio(row){//行单选方法 将行数据传入
            this.$refs.singleTable.clearSelection();//清空多选框的所有选中状态
            this.$refs.singleTable.toggleRowSelection(row,true)//选中当前点击项
            this.$refs.singleTable.setCurrentRow(row);//选中当前行的背景状态                        
        },
    }
  }
</script>
