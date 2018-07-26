<template>
    <div>
        <div class="block">
            <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="8"
            layout="total , prev, pager, next, jumper"
            :total="100"
            >
            </el-pagination>
        </div>  
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentPage:1
            }
        },
        methods:{
            handleCurrentChange(val){
                this.$emit("pagesend",val)
            }
        }
    }
</script>

<style scoped>
    .block{
        text-align: right;
    }
</style>