<template>
    <div>
        excel 表格数据 导出        
        <el-button  @click="handleDownload" >导出excel</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[
                {
                    date:'2016-10-12',
                    name:'ls',
                    address:'嘻哈值',
                }
            ]
        }
    },
    methods:{
        handleDownload() {
            require.ensure([], () => {
                const { export_json_to_excel } = require('@/vendor/Export2Excel')
                const tHeader = ['日期', '姓名', '地址']
                const filterVal = ['date', 'name', 'address']
                const list = this.tableData
                const data = this.formatJson(filterVal, list)
                export_json_to_excel(tHeader, data, '列表excel')
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
}
</script>
