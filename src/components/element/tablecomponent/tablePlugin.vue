<template>
     <div class="tableGBCls" v-if="list.length != 0">
          <el-table size="small" ref="multipleTable" 
                    :data="list.tableData" 
                    highlight-current-row
                    border 
                    @select="handleSelect"
                    @row-click="selectTableData"
                    @select-all='selectAll'
                    @row-dblclick='dblclick'
                    style="width: 100%" >
                    <el-table-column type="selection" width="55" align='center' v-if="list.type"></el-table-column>
                    <el-table-column v-for="(item,index) in list.titles"  align='center' :key='index' 
                                    :property="item.data" :label="item.name"
                                    > 
                                    <!-- :width=" (item.name == '订单金额' || item.name == '支付方式') ? '100':''" 
                                        根据自己需求，如果定义的内容过多可以让指定的列固定宽度
                                    -->
                    </el-table-column>
                    <el-table-column fixed="right"  type="btn"  v-if="list.btnconfig" :label='list.btnconfig.title' :width='list.btnconfig.width' align="center">
                            <template slot-scope="scope">   
                                <el-button 
                                    v-for="(ele,y) in list.btnconfig.btnlist" :key='y'
                                    :style='{color:ele.concolor,backgroundColor:ele.backgroundColor,borderColor:ele.backgroundColor}'
                                    :type="ele.type" 
                                    :size='ele.size||"mini"'            
                                    @click.stop='operate(ele.con||ele.icon,scope.row)' 
                                    :icon="ele.icon"
                                    :circle='ele.circle'
                                    >
                                    {{ele.con}}
                                    </el-button>
                            </template>  
                    </el-table-column>
            </el-table>
        <br>
    </div>  
</template>
<script>
export default {
    data(){
        return{
            list:[],
            selectData: null
        }
    },
    props:["msg"],
    watch:{
        msg:{
            handler(val, oldVal){
                this.list = val;
            },
            deep:true
        }    
    },
    methods: {
        handleSelect(selection,row) {//表单行数据获取      
            this.radio(row,'select框')    
        },
        selectTableData(row){
            this.radio(row,'行')    
        },
        radio(row,type){//行单选方法 将行数据传入
            if(this.selectData && this.selectData == row){
                this.$refs.multipleTable.toggleRowSelection(row,false)
                this.$refs.multipleTable.setCurrentRow();
                this.selectData = null; 
            }else{
                this.selectData = row;                       
                this.$refs.multipleTable.clearSelection();//清空多选框的所有选中状态
                this.$refs.multipleTable.toggleRowSelection(row,true)//选中当前点击项
                this.$refs.multipleTable.setCurrentRow(row);//选中当前行的背景状态   
            }    
            this.$emit('sendVal',{type:type,data:this.selectData})                                    
        },
        selectAll(selection){//选中所有触发
            if(selection.length == 0){//取消全选 清空行样式
                this.$refs.multipleTable.setCurrentRow();
                this.selectData = null
            }else{
                this.selectData = [...selection];
            }
            this.$emit('sendVal',{type:'全选',data:this.selectData}) 
        },
        dblclick(row){
            this.radio(row,'双击')//走 第三次点击 所以还是选中
        },
        operate(item,row){
            this.$emit('sendVal',{type:item,data:row})
        },
    }
};
</script>
<style lang='scss'>
.tableGBCls{
    .el-button [class*=el-icon-]+span{
        margin: 0;
    }
}
</style>


