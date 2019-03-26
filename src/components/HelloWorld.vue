<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <p>$forceUpdate---强制更新，一般是vue数据数组追踪理解不到位 </p>
        <section>
            <el-button type="success" @click="lee">按钮</el-button>
            <el-button type="success" @click="dq">文件读取原生js</el-button>
        </section>
        <router-link to='watch'>watch</router-link>
        <router-link to='watch1'>watch1</router-link>
        <router-link to='detectaphone'>detectaphone</router-link>
        <router-link to='excel'>excel-表格导出</router-link>
        <router-link to='erweima'>二维码</router-link>
        <router-link to='bround'>数据绑定+左上固定布局</router-link>
        <router-link to='elementUi'>elementUi</router-link>
        <router-link to='components'>组件传值</router-link>
        <router-link to='transition'>过渡效果</router-link>
        <router-link to='extend'>可复用性，混入</router-link>
        <router-link to='directive'>自定义指令---与过滤器</router-link>
        <router-link :to="`route/${message}`">页面路由--初级</router-link>
        <router-link to="validateForm">表单验证</router-link>
        <router-link to='gpy'>高拍仪</router-link>
        <br>
        <br>
        <br>
        <div class="text">
            <div class="textont">
                我是文本内容我是文本内容我是文本内容我是文本内容我是文本内容我是文本内容
            </div>
        </div>
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
        },
        dq(){
            this.$router.push("fileReander")
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
    .text{
        width: 30%;
        height: 40px;
        border-radius: 20px;
        background-color: #ccc;
        .textont{
            width: 80%;
            margin-left:10%;
            line-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

</style>


