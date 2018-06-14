<template>
    <div>
        <div>{{ fullName }}</div>
        <button @click="save">更新数据</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar',
        }
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        },
    },
    methods:{
        save(){
            this.firstName = 'demo'
        }
    }
}
//watch监听属性，监听数据,两个参数，参数1现在的值，参数2改变前的值
//fullName输出值需要提前定义好

</script>

