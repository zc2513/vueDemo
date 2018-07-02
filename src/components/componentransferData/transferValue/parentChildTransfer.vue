<template>
    <div>
        父子组件传值：
        <el-button size="small" @click="getPassData">点击给子组件传值</el-button>
        <div class="childbox">
          <children :passChildData="data"></children>
        </div>
    </div>
</template>

<script>
import children from "./child";
export default {
  components: {
    children
  },
  data() {
    return {
      data: ""
    };
  },
  methods: {
    getPassData() {
      let randomNum = Math.floor(Math.random() * 100 + 1);
      this.data = "父组件值" + randomNum;
    }
  }
};
</script>
<style lang="scss" scoped>
  .childbox{
    width: 99.9%;
    height: 150px;
    border: 1px solid #f00;
    margin-top: 20px;
  }
</style>
