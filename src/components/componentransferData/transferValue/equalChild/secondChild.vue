<template>
    <div>
        我是左侧导航二儿子
        <div>
            <span>我从大儿子接收的值放在这:</span>
            <span style="color:#f00">{{msg}}</span>
        </div>
    </div>
</template>
<script>
import busEvent from '@/common/eventBus'
export default {
    data(){
        return {
            msg:"我本来有值"
        }
    },
    mounted(){
        busEvent.$on('userDefinedEvent',(val)=>{
            this.msg = val;
        })
    },
    methods:{
        
    }
}
</script>
