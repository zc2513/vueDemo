<template>
    <div class="childBox">
        <h4>给父组件传值的子组件</h4>
        <div>
            <el-button size="small" @click="passDataToParen">点击给父组件传值</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    passDataToParen() {
      let randomData = Math.floor(Math.random() * 200 + 100);
      let str = this.$emit(
        "getChildPassData",
        `儿子给老子传值需要用$emit在送一个随机数${randomData}`
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.childBox {
  margin-top: 20px;
  border: 1px solid #f00;
  height: 150px;
}
</style>
