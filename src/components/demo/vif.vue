<template>
    <div>
        <section>
            <h4>一、 v-if  v-else-if </h4>
            <div v-if="type === 'A'">
                A
            </div>
            <div v-else-if="type === 'B'">
                B
            </div>
            <div v-else-if="type === 'C'">
                C
            </div>
            <div v-else>
                Not A/B/C
            </div>
        </section>
        <section>
            <h4>二、vue-不能通过索引改变数据而实现动态刷新--------------(数组)</h4>
            <div>
                <span style="display:inline-block;width:100px;height:30px;line-height:30px;text-align:center;color:#fff;background-color:#333;margin-right:4px;" 
                    v-for="(item,index) in options" :key='index' v-text="item"></span>
            </div>
            <el-button type="info" @click="changeVal">通过arr[index]改变数组 ---数据不会刷新</el-button>
            <el-button type="info" @click="change">通过splice改变数组--解决方式1</el-button>
            <el-button type="info" @click="change2">通过this.$set改变数组--解决方式2</el-button>
        </section>
        <section>
            <h4>三、vue-不能通过索引改变数据而实现动态刷新--------------(对象)</h4>
            <div v-for="(item,index) in object" :key='index'>
                <span style="display:inline-block;width:100px;height:30px;line-height:30px;text-align:center;color:#fff;background-color:#333;margin:2px;" v-text="item.name"></span>
                <span style="display:inline-block;width:100px;height:30px;line-height:30px;text-align:center;color:#fff;background-color:#333;margin:2px;" v-text="item.age"></span>
                <span style="display:inline-block;width:100px;height:30px;line-height:30px;text-align:center;color:#c00;background-color:#333;margin:2px;" v-text="item.leave || '无'"></span>
            </div>
            <el-button type="info" @click="objchangeVal">通过object[index]改变对象 ---数据不会刷新</el-button>
            <el-button type="info" @click="objchange">通过splice改变对象--解决方式1</el-button>
            <el-button type="info" @click="objchange2">this.$set给对象添加新元素--解决方式2</el-button>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            type:'B',
            options:[1,2,3],
            object:[
                {name:'zs',age:18},
                {name:'ls',age:88}
            ]
        }
    },
    methods:{
        changeVal(){
            this.options[1]='改变的值';
            console.log(this.options)
        },
        change(){
            this.options.splice(1, 1, '改变的值');
        },
        change2(){
            this.$set(this.options, 1, '改变的值2')
        },
        objchangeVal(){
            this.object[0]['leave']='添加的值';
            console.log(this.object)
        },
        objchange(){
            this.object.splice(0, 1, {name:'新值',age:(Math.random()*10).toFixed()});
        },
        objchange2(){
            this.$set(this.object[1], 'leave', (Math.random()*10).toFixed(1));
        },
    }
}
</script>
<style lang="scss" scoped>
section{
    border: 1px solid #ccc;
    margin: 4px;
    h4{
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        color: #00c;
    }
}

</style>


