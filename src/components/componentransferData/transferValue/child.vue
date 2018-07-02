
<template>
    <div class="childBox">
        子组件：<span style="color:#f00;">{{passChildData}}</span>
    </div>
</template>
<script>
export default {
    props: ["passChildData"],
    // props: {
    //     passChildData: {
    //         type: String,
    //         default: "老子不传值过来我就是老大",
    //         required: true
    //     }
    // }
};
</script>
<style lang="scss" scoped>
.childBox {
    margin-top: 20px;
}
</style>
