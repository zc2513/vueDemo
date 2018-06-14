<template>
    <div>
        <div>{{ fullName }}</div>
        <p>{{ele}}</p>
        <button @click="save">更新数据1</button>
        <button @click="save1">更新数据1</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstName: 'Foo',
            lastName: 'Bar',
            ele:''
        }
    },
    watch: {//适合用来检测结果的改变做出某些事情
        fullName: function (val) {
            console.log('watch',Math.random().toFixed(2)*100)
            this.ele = 'watch最好是用来检测结果,唯一量改变 再做出改变'+Math.random().toFixed(2)
        }
    },
    computed: {//适合用来检测大量的数据改变而导致的结果改变
        fullName: function () {
            console.log('computed',Math.random().toFixed(2)*100)
            return this.firstName + ' ' + this.lastName
        }
    },
    methods:{
        save(){
            this.firstName = 'demo'
        },
        save1(){
            this.lastName = 'demo222'
        }
    }
}
//执行：当firstName或者lastName值改变的时候->fullName会改变 当fullName改变的时候 ele被赋值   监听属性只有被监听的内容发生改变 才会执行,不改变不执行
//1.watch适合监听 一个变量改变影响多个结果 所有监听的值一般都是定义好的
//2.computed适合监听多个变量任意一个变化，最终影响一个结果
//***3.computed属性监听在页面进行初始化的时候会执行一次  但是watch时间不会执行
</script>

