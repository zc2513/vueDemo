<template>
    <div class="childBox">
        <h4>子组件</h4>
        <div>
            接收老子传过来的值 <span style="color:#f00;">{{passChildData}}</span>
        </div>
    </div>
</template>
<script>
export default {
  //   props: ["passChildData"],
  props: {
    // 检测类型
    // passChildData: String,
    // 检测类型 + 其他验证
    passChildData: {
      type: String,
      default: "老子不传值过来我就是老大",
      required: true
      //   validator: function(value) {
      //     return value >= 0;
      //   }
    }
  },
  data() {
    return {
      isTrue: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.childBox {
  margin-top: 20px;
}
</style>
