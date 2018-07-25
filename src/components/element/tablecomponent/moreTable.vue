<template>
    <div>
        <h4 style="color:#c00;">多功能表格---------------单选</h4>
        <div class="btncls">
           <el-button type="info" @click="getdata(1)">有选择框</el-button>
           <el-button type="info" @click="getdata(2)">无选择框</el-button>
        </div>
        <div v-if="suninfo">
            <b style="color:00c;font-size:20px;">子组件所传的值展示区域(调试框可看所有值)：</b> {{suninfo.type || suninfo}}
        </div>
        <tablePug :msg = 'tableList' @sendVal='getVal'></tablePug>
        <page @pagesend='getPageData'></page>
    </div>
</template>

<script>
import tablePug from './tablePlugin'
import page from './page'
    export default {
        components:{
            tablePug,
            page
        },
        data(){
            return{
                tableList:{//表格所需数据
                    tableData: [],
                    titles: [],
                    type:true,//有无选择框 true/false 默认为true
                    btnconfig:{//----------------------------按钮项配置
                        title:'按钮项',
                        width:'200',//每增加一个按钮宽度增加100
                        btnlist:[
                            {
                                con:'删除',                                
                                type:'primary',//按钮模式
                                concolor:'#00c',
                                backgroundColor:'#ccc',            
                            },
                            {
                                con:'详情',
                                type:'success',
                                concolor:'#0c0',
                                backgroundColor:'#f00'
                            },
                        ] 
                    }
                },
                initData:[],
                suninfo:''
            }
        },
        created() {
            this.getVal()
            this.getPageData()
        },
        mounted() {
            this.init()                           
        },
        methods:{
            init(){
                this.$http.get('/api/data').then(res=>{
                    this.initData = res.data.map((ele)=>{
                        ele.ctime = new Date(ele.ctime).toLocaleString();
                        return ele
                    })
                   this.getdata(1)
                })
                this.tableList.titles = 
                    [{name:'订单编号',data:'orderCode'},
                    {name:'订单状态',data:'state'},
                    {name:'单位编号',data:'cNumber'},
                    {name:'单位名称',data:'cName'},
                    {name:'订单金额',data:'total'},
                    {name:'支付方式',data:'payMethod'},
                    {name:'登记时间',data:'ctime'},];

            },
            getVal(val){
                this.suninfo = val
                console.log(val)
            },
            getPageData(params){
                this.suninfo = params;
            },
            getdata(params){
                this.tableList.tableData = this.initData.slice((params-1)*8,params*8)
                if(params == 2){
                    this.tableList['type'] = false
                }else{
                    this.tableList['type'] = true
                }
            }

        }
    }

</script>
<style scoped>
    .btncls{
        text-align: center;
    }
</style>