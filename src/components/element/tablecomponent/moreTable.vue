<template>
    <div>
        <h4 style="color:#c00;">多功能表格---------------单选</h4>
        <div class="btncls">
           <el-button type="info" @click="getdata(1)">有选择框</el-button>
           <el-button type="info" @click="getdata(2)">无选择框</el-button>
        </div>
        <div v-if="suninfo">
            <b style="color:00f;font-size:20px;">子组件所传的值展示区域(调试框可看所有值)：</b> {{suninfo.type || suninfo}}
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
                    btnconfig:{//----------------------------按钮项配置/不传则不展示
                        title:'按钮项',
                        width:'250',//按钮项宽度
                        btnlist:[
                            {
                                // con:'删除',  //按钮内容 若果使用内容不使用图标，若使用图标和内容则不建议使用圆形
                                concolor:'#fff',//文字颜色
                                backgroundColor:'#999',  //按钮背景色                                
                                icon:'el-icon-zoom-in', //使用字体图标为按钮  
                                circle:true, //控制按钮是否为圆形   false/true  默认false                                                                                                  
                                type:'primary',//按钮模式
                                size:'small',//按钮大小medium / small / mini 默认为mini
                            },
                            {
                                con:'详情',
                                type:'success',
                                concolor:'#fff',
                                backgroundColor:'#f00',
                            },
                            {
                                con:'共存',
                                concolor:'#00c',
                                backgroundColor:'#ccc',                               
                                icon:'el-icon-check',
                                type:'primary',
                                size:'small',
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