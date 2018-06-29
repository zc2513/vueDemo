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
        btncon:[{uri:'/components/childParentTransfer',con:'子父组件'}
                ,{uri:'/components/equalComponent',con:'同级组件'}
                ,{uri:'/components/parentChildTransfer',con:'父子组件'}
                // ,{uri:'/elementUi/tableselect',con:'单层JSON循环'}
                // ,{uri:'/elementUi/tableJson',con:'完整JSON循环'}
                ],
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  