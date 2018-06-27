<template>
  <div id="app">
    <router-link to='/' class="ahome">首页</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    #app{
        width: 100%;
        height: 100vh;
        background-color: #e2e2e2;
    }
    .ahome{
        display: block;        
        height: 4vh;
        line-height: 4vh;
        background-color: #caa8a8;
    }
    router-view{
        height: 90vh;
    }
</style>
