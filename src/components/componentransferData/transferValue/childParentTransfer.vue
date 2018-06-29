<template>
    <div>子父组件
        <div>
            <div v-text="childData || '' " style="color:#f00;"></div>
            <secondChild @getChildPassData="getChildPassData"></secondChild>
        </div>
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
    getChildPassData(val) {
      this.childData = val;
    }
  }
};
</script>
