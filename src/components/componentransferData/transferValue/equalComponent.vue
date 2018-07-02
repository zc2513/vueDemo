<template>
    <div>
        <div>
            <h4>同级组件</h4>
            <firstChild></firstChild>
            <div class="leftBox">
                <secondChild></secondChild>
            </div>
        </div>
    </div>
</template>
<script>
import firstChild from "./equalChild/firstChild";
import secondChild from "./equalChild/secondChild";
export default {
  components: {
    firstChild,
    secondChild
  }
};
</script>
<style lang="scss" scoped>
    .leftBox{
        margin-top: 10px;
        height: 60px;
        border: 1px solid #ccc;
    }
</style>

