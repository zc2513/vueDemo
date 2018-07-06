<template>
    <section>
        组件启动自动获取焦点：<input type="text" v-focus v-model="val">
        <div class="tr">
           <b> 全局过滤器： </b>{{val | capitalize}}
        </div>
        <div class="tr">
           <b>本地过滤器：</b> {{time | dateFormat('YYYY-MM-DD HH:MM:SS')}}
        </div>
        <div class="tr">
           <b>本地过滤器：</b> {{time | dateFormat('yyyy/mm/dd')}}
        </div>
        <div class="tr">
           <b>本地过滤器：</b> {{time | dateFormat('年')}}
        </div>
        <div class="tr">
           <b>本地过滤器：</b> {{time | dateFormat}}
        </div>
        <el-button type="success" @click='getTime'>
            获取当前时间
        </el-button>
    </section>
</template>
<script>
export default{
    directives: {
        focus: {// 指令的定义
            inserted: function (el) {
                el.focus()
            }
        }
    },
    data(){
        return{
            val:'',
            time:Date.now()
        }
    },
    filters: {
        dateFormat: function (value,type) {
            //接收的参数类型：'YYYY-MM-DD HH:MM:SS'   'yyyy/mm/dd'    '年'
            if (!value) return ''
            let dateTime = new Date(value);
            let Y, M, D, Hours, Minutes, Seconds;
            Y = dateTime.getFullYear()
            M = (dateTime.getMonth() + 1 < 10 ? "0" + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1)
            D = dateTime.getDate() + 1 < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
            Hours=(dateTime.getHours() <10 ? '0'+dateTime.getHours():dateTime.getHours() );
            Minutes=(dateTime.getMinutes() <10 ? '0'+dateTime.getMinutes():dateTime.getMinutes() );
            Seconds=(dateTime.getSeconds() <10 ? '0'+dateTime.getSeconds():dateTime.getSeconds() );
            if(type && type!='年'){
                let face = type.toLowerCase().trim();
                let str
                let zfc = face.slice(4,5);
                if(face == 'yyyy'+zfc+'mm'+zfc+'dd'){
                    str = Y+zfc+M+zfc+D
                }else if(face.indexOf('hh:mm:ss')!=-1){
                    str = Y+zfc+M+zfc+D+' '+Hours+':'+Minutes+':'+Seconds
                }
                return str;  
            }
            if(type && type=='年'){
                return Y+'年'+M+'月'+D+' '+Hours+'时'+Minutes+'分'+Seconds+'秒';    
            }
            return Y+'年'+M+'月'+D;    
        }
    },
    methods:{
        getTime(){
            this.time = Date.now()
        }
    }
}
</script>
<style lang="scss" scoped>
.tr{
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    color: #0c0;
}
</style>


