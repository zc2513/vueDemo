<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <section>
            <el-button type="success" @click="lee">按钮</el-button>
        </section>
        <router-link to='watch'>watch</router-link>
        <router-link to='watch1'>watch1</router-link>
        <router-link to='detectaphone'>detectaphone</router-link>
        <router-link to='excel'>excel</router-link>
        <router-link to='erweima'>二维码</router-link>
        <router-link to='bround'>数据绑定</router-link>
        <router-link to='elementUi'>elementUi</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message: 'Hello'
        }
    },
    computed: {
        reversedMessage: function () {// 计算属性的 getter   计算属性的显示内容在data中不能是已经定义过的
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        lee(){
            this.message = Math.random().toFixed(2)+''
        }
    }
}

</script>
<style scoped lang='scss'>
    @import '../assets/scss/a_style';
    p{
        padding-left: 40px;
        line-height: 40px;
    }
    section{
        padding-left: 40px;
        height: 50px;
    }

</style>


