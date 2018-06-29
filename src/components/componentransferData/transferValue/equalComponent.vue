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
        height: 100%;
        width: 150px;
        border: 1px solid #f00;
    }
</style>

