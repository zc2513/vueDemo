<template>
    <div class="box">
        我是顶部导航
        <el-button size="small" @click="senDataToSecondChild">大儿子向二儿子传值</el-button>
    </div>
</template>
<script>
import busEvent from '@/common/eventBus'
export default {
 
 methods:{
     senDataToSecondChild(){
         let num = Math.floor(Math.random()*500 + 100);
         busEvent.$emit('userDefinedEvent',`大儿子给二儿子值${num}`);
     }
 }
}
</script>
<style lang="scss" scoped>
    .box{
        height: 50px;
        width: 100%;
        border: 1px solid red;
        line-height: 50px;
    }
</style>
