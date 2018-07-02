<template>
    <div class="box">
        <el-button size="small" @click="senDataToSecondChild">同级组件传值--发送组件</el-button>
    </div>
</template>
<script>
import busEvent from '@/common/eventBus'
export default {
 
 methods:{
     senDataToSecondChild(){
         let num = Math.floor(Math.random()*500 + 100);
         busEvent.$emit('userDefinedEvent',`兄组件的当前值：${num}`);
     }
 }
}
</script>
<style lang="scss" scoped>
    .box{
        height: 50px;
        width: 100%;
        border: 1px solid #ccc;
        line-height: 50px;
    }
</style>
