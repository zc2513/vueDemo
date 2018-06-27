<template>
  <div>
    <el-table 
        ref="singleTable"
        :data="tableDataAll.tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column> 
        <el-table-column type="index"  width="50"></el-table-column>
        <el-table-column v-for="(item,index) in tableDataAll.tabTitle" :key='index' 
                         :property="item.data" :label="item.name" 
                         :width=" (item.name == '日期' || item.name == '姓名') ? '140':''"> 
        </el-table-column>
        <el-table-column type="btn" label='操作' width="80" header-align="center">
                <template slot-scope="scope">   
                    <el-button type="success">{{scope.row.btn}}</el-button>
                </template>  
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableDataAll:{
            tableData:[],
            tabTitle:[],
        },
        currentRow: null
      }
    },
    created(){
        this.init()
    },
    methods: {
        init(){
            this.tableDataAll.tableData = [
                { date: '2016-05-02',name: '王小虎',address: '上海市普陀区金沙江路 1518 弄',btn:'删除'}, 
                { date: '2016-05-04',name: '王小虎',address: '北京市普陀区金沙江路 1517 弄',btn:'删除'}, 
                { date: '2016-05-01',name: '张胜男',address: '天津市普陀区金沙江路 1519 弄',btn:'删除'}, 
                { date: '2016-05-01',name: '王小虎',address: '西安市普陀区金沙江路 1519 弄',btn:'删除'}
            ]
            this.tableDataAll.tabTitle = [{name:'日期',data:'date'},{name:'姓名',data:'name'},{name:'地址',data:'address'}]
        },
    }
  }
</script>
