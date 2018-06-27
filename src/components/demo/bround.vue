<template>
    <div class="broundStyle">
        <div class="slider fl">
            左侧栏
        </div>
        <div class="content fr">
            <div class="btn1" :class='{active:isActive , active2: (isId== 3)||(isId== 1)}' @click="btn1">点击添加样式</div>
            <ul class="clearfix">
                <li class="fl" 
                    v-for="(item,index) in options" 
                    :key='index' 
                    @click="btn(item.id)"
                    :class='{active:item.id==isId}' 
                    v-text="item.con"></li>
            </ul>
            <div>
                <h4>动态属性，根据计算属性变化</h4>
                <div class="btn1 fl" :class='classObj' v-text="(num1-0)+(num2-0)"></div>
                <input type="number" v-model="num1">
                <input type="number" v-model="num2">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive:false,
            options:[{id:1,con:'按钮1'},{id:2,con:'按钮2'},{id:3,con:'按钮3'},],
            isId:2,
            num1:0,
            num2:0
        }
    },
    computed:{
        classObj:function() {
            return {
                active: this.num1>=1 && this.num2>5,
                active2:this.num1>10 && this.num2<=5
            }
        }
    },
    methods:{
        btn1(){
            this.isActive = !this.isActive;
        },
        btn(id){
            this.isId = id;
        },
    }
}
</script>
<style lang="sass" scoped>
    @import '../../assets/scss/bround'
</style>
