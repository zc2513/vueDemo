<template>
    <div>
        <secondChild @send="getChildData"></secondChild>        
        子父组件传值:
        <span v-text="childData" style="display:inline-block;color:#00c;font-size:14px;"></span>
    </div>
</template>
<script>
import secondChild from "./secondChild";
export default {
  components: {
    secondChild
  },
  data() {
    return {
      childData: '初始值'
    };
  },
  methods: {
    getChildData(val) {
      this.childData = val;
    }
  }
};
</script>
