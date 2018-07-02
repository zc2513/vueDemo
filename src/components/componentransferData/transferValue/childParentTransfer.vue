<template>
    <div>
        <secondChild @send="getChildData"></secondChild>        
        子父组件传值:
        <span v-text="childData" style="display:inline-block;color:#f00;font-size:14px;"></span>
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
      childData: null
    };
  },
  methods: {
    getChildData(val) {
      this.childData = val;
    }
  }
};
</script>
