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
        btncon:[{uri:'/elementUi/nav',con:'左侧导航'}]
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  