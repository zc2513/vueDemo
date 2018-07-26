<template>

    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>

        <el-menu default-active="" class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :unique-opened="true"  
        :collapse="isCollapse" 
        @select="selectEvent"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        
         <el-submenu :index="item.upmsPermission.uri" v-for="(item,index) in slideNavData" :key="index" v-if="item.children.length != 0">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">{{item.upmsPermission.name}}</span>
            </template>
            
            <el-submenu :index="val.upmsPermission.uri" v-for="(val,k) in item.children" :key="k">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">{{val.upmsPermission.name}}</span>
              </template>

                <el-menu-item :index="nav.upmsPermission.uri" v-for="(nav, n) in val.children" :key="n">
                  <i :class="nav.upmsPermission.icon" ></i>
                  <span slot="title">{{nav.upmsPermission.name}}</span>
                </el-menu-item>
            </el-submenu>

        </el-submenu>
        <el-menu-item :index="item.upmsPermission.uri" v-else>
          <i class="el-icon-menu" ></i>
          <span slot="title">{{item.upmsPermission.name}}</span>
        </el-menu-item>
       </el-menu>

    </div>
</template>

<script>
export default {
  /* 
        background-color="#545c64"  导航栏背景颜色
        text-color="#fff"    字体颜色
        active-text-color="#ffd04b"   点击后的字体颜色
        :collapse="isCollapse"    //是否支持收缩
        unique-opened  每次只打开一个

        default-active ="" 默认选中项

        theme="dark"  主题
   */
  /* 
        @open="handleOpen"   展开导航栏事件
        @close="handleClose"  收起导航栏事件
        @select="selectEvent"  菜单激活事件
   */
  data() {
    return {
      isCollapse: false,
      slideNavData:null
    };
  },
  created(){
    this.initSlideNav()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath,1);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath,2);
    },
    selectEvent(key,keyPath){
      console.log(key, keyPath,3);
    },

    initSlideNav(){
      this.$http.post('/api/data2').then((res) => {
        console.log(res,88);
        this.slideNavData = res.data;
      }).catch((err) => {
        
      });
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>