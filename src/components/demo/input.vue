<template>
<!-- 选框的值只有两个，true/false,但是可以通过绑定一个不显示的value 将我们需要的值传递 -->
    <div>
        <input type="checkbox" id="jack" value="表单1" v-model="checkedNames">
        <label for="jack">吃</label>
        <input type="checkbox" id="john" value="选框2" v-model="checkedNames">
        <label for="john">喝</label>
        <input type="checkbox" id="mike" value="选框3" v-model="checkedNames">
        <label for="mike">玩</label>
        <br>
        <span>被选中的表单: {{ checkedNames.length ? checkedNames:'暂无选择' }}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // checkedNames: null,//表单属性的v-model只有true，或者false两种状态，但是如果将它声明为数组，则会在表单为true的时候将表单的value 绑定值添加到数组当中
            checkedNames:new Array
        }
    }
}
</script>
