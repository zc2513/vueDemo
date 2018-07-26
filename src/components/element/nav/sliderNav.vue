<template>

    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>

        <el-menu default-active="1" class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :unique-opened="true"  
        theme="dark" 
        :collapse="isCollapse" 
        @select="selectEvent"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        collapse-transition
        router
        >
          <!-- <el-menu-item :index="item.upmsPermission.uri" v-for="(item,index) in slideNavData" :key="index" v-if="item.children.length == 0"><i class="el-icon-menu"></i><span slot="title">{{item.upmsPermission.name}}</span></el-menu-item> -->
          
          
        
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

            <!-- <el-submenu :index="val.upmsPermission.uri" v-for="(val,k) in item.children" :key="k" v-if="val.upmsPermission.name != item.upmsPermission.name">
              <template>
                <span slot="title">{{val.upmsPermission.name}}</span>
              </template>
                <el-menu-item :index="nav.upmsPermission.uri" v-for="(nav, n) in val.children" :key="n">
                  <i :class="nav.upmsPermission.icon" ></i>
                  <span slot="title">{{nav.upmsPermission.name}}</span>
                </el-menu-item>
            </el-submenu>

            <el-menu-item v-else :index="nav.upmsPermission.uri" v-for="(nav, n) in val.children" :key="n">
                <i :class="nav.upmsPermission.icon" ></i>
                <span slot="title">{{nav.upmsPermission.name}}</span>
            </el-menu-item> -->

        </el-submenu>
        <el-menu-item :index="item.upmsPermission.uri" v-else>
          <i class="el-icon-menu" ></i>
          <span slot="title">{{item.upmsPermission.name}}</span>
        </el-menu-item>
       </el-menu>

       <!-- <el-menu
       default-active="4" 
       class="el-menu-vertical-demo"
        @open="handleOpen" 
        @close="handleClose" 
        :unique-opened="true"  
        theme="dark" 
        :collapse="isCollapse" 
        @select="selectEvent"
        background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
       >
        <el-submenu  index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"> 导航一</span>
          </template>
          
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-menu-item-group>

          <el-submenu index="4-4">
            <span slot="title"> 选项4</span>
            <el-menu-item index="4-4-1">选项1</el-menu-item>
          </el-submenu>

        </el-submenu>
       </el-menu> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      dd:'3-1-1',
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