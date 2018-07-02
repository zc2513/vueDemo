<template>
    <section>
        同组件传值---弟--接收组件:<span style="color:#00c;display:inline-block;">{{msg}}</span>
    </section>
</template>
<script>
import busEvent from '@/common/eventBus'
export default {
    data(){
        return {
            msg:"初始值"
        }
    },
    mounted(){
        busEvent.$on('userDefinedEvent',(val)=>{
            this.msg = val;
        })
    }
}
</script>
