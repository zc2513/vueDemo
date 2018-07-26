<template>
    <div class="oddFileUp">
       <div class="con">
            <el-upload 
                class="avatar-uploader" 
                action="https://jsonplaceholder.typicode.com/posts/" 
                :file-list="fileList"
                :show-file-list="true" 
                list-type='picture-card'
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess" 
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-upload avatar-uploader-icon"></i>
            </el-upload>
       </div>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: '',
            dialogImageUrl: '',
            dialogVisible: false,
            fileList:[]
        };
    },
    props:["oddImg"],
    watch:{
        oddImg(value){
            this.fileList=[{
                url:value
            }];
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            console.log(file.raw)
        },
        beforeAvatarUpload(file) {
            console.log(file)
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {
            this.imageUrl = ''
            console.log(file, fileList);
        },
    }
}
</script>

<style scoped>
</style>
<style lang='scss'>
//插件的样式需要全局修改 ，价格局部的名称防止冲突
.oddFileUp{
    $filew:150px;
    $fileh:150px;
    $hoverColor:#00c;
    $iconColor:#8c939d;
    .con{
        width: $filew;
        height: $fileh;
        margin: 0 auto;
    }
    .avatar-uploader .el-upload {
        width:$filew;
        height: $fileh;
        border: 1px dashed #c00;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: $hoverColor;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: $iconColor;
        width: $filew;
        height: $fileh;
        line-height: $fileh;
        text-align: center;
    }
    .avatar {
        width: $filew;
        height: $fileh;
        display: block;
    }
    .el-upload-list--picture-card{
        position: absolute;
        z-index: 9;
        vertical-align:top;
    }
    .el-upload-list--picture-card .el-upload-list__item{
        width: $filew;
        height: $fileh;
    }
}
</style>
