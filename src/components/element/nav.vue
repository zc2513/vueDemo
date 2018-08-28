<template>
  <div style="margin-top:10px;">
      <router-link  v-for="(item,index) in btncon" :key='index' v-text="item.con" :to='item.uri' ></router-link>
      <a @click='goback'>返回上一页</a>
      <div style="margin-top:20px;">
            <router-view/>          
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        btncon:[{uri:'/nav/sliderNav',con:'左侧导航'}]
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  