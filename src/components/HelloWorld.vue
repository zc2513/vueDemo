<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <button @click="lee">按钮</button>
        <router-link to='watch'>watch</router-link>
        <router-link to='watch1'>watch1</router-link>
        <router-link to='excel'>excel</router-link>
        <router-link to='erweima'>二维码</router-link>
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
<style>

</style>

