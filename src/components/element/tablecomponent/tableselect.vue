<template>
  <div>
    <el-table 
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column> 
        <el-table-column type="index"  width="50"></el-table-column>
        <el-table-column v-for="(item,index) in tabTitle" :key='index' 
                         :property="item.data" :label="item.name" :width=" (item.name == '日期' || item.name == '姓名') ? '140':''"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [],
        tabTitle:[],
        currentRow: null
      }
    },
    created(){
        this.init()
    },
    methods: {
        init(){
            this.tableData = [
                { date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄'}, 
                { date: '2016-05-04',name: '王小虎',address: '北京市普陀区金沙江路 1517 弄'}, 
                { date: '2016-05-01',name: '张胜男',address: '天津市普陀区金沙江路 1519 弄'}, 
                { date: '2016-05-01',name: '王小虎',address: '西安市普陀区金沙江路 1519 弄'}
            ]
            this.tabTitle = [{name:'日期',data:'date'},{name:'姓名',data:'name'},{name:'地址',data:'address'}]
        }  
    }
  }
</script>
