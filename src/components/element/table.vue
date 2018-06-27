<template>
  <div style="margin-top:10px;">
      <router-link v-for="(item,index) in btncon" :key='index' v-text="item.con" :to='item.uri' ></router-link>
      <div style="margin-top:20px;">
            <router-view/>          
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        btncon:[{uri:'/elementUi/tablestyle',con:'表格样式添加及方法'}
                ,{uri:'/elementUi/tableEven',con:'表格方法及事件'}
                ,{uri:'/elementUi/tableradio',con:'完整单选全选'}
                ,{uri:'/elementUi/tableselect',con:'单层JSON循环'}
                ,{uri:'/elementUi/tableJson',con:'完整JSON循环'}],
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  