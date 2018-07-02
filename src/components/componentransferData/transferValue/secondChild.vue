<template>
    <div class="childBox">
        <el-button size="small" @click="passDataToParen">子组件---点击传值给父组件</el-button>
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
      let str = this.$emit("send",`子组件的当前值：${randomData}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.childBox {
  margin-top: 20px;
  padding: 10px 0;
  border: 1px solid #ccc;
}
</style>
