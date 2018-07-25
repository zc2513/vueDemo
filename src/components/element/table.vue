<template>
  <div style="margin-top:10px;">
      <section style="margin-bottom:20px;">
        <el-button type='info' @click="table">table表格</el-button>
        <el-button type='info' @click="nav">导航栏</el-button>
        <el-button type='info' @click="file">文件上传</el-button>
      </section>
      <div>
        <router-link v-for="(item,index) in btncon" :key='index' v-text="item.con" :to='item.uri' ></router-link>
      </div>
      <div style="margin-top:20px;">
            <router-view/>          
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        btncon:'',
      }
    },
    methods:{
      table(){
        this.btncon =[{uri:'/elementUi/tablestyle',con:'表格样式添加及方法'}
                ,{uri:'/elementUi/tableEven',con:'表格方法及事件'}
                ,{uri:'/elementUi/tableradio',con:'完整单选全选'}
                ,{uri:'/elementUi/tableselect',con:'单层JSON循环'}
                ,{uri:'/elementUi/tableJson',con:'json带有操作的选择'}
                ,{uri:'/elementUi/moreTable',con:'插件封装-多功能表格'}
                ]
      },
      nav(){
        this.btncon = [{uri:'/nav',con:'导航栏'}]
      },
      file(){
        this.$router.push('/upfile')
      }
    },
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  