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
/* 
    1.
    :file-list  = [{url:http://src}]   file-list 有值得时候直接展示file-list的img照片
    :show-file-list='false/true'       控制是否显示file-list数组对象里面的照片
    list-type='text/picture/picture-card' 默认值text  显示照片的三种方式 text文本，照片和 盒子照片
 */
/* 
    2. on-preview  与  on-remove 需要结合el-dialog 模态框的照片展示盒子使用
    :on-preview  照片放大方法
    :on-remove   照片移除方法
*/
/* 
    3.
    on-success  上传成功方法
    before-upload 照片上传前的限制
 */
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
        },
        beforeAvatarUpload(file) {
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
        handlePictureCardPreview(file) {//放大功能
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemove(file, fileList) {//移除功能
            this.imageUrl = ''
            console.log(file, fileList);
        },
    }
}
</script>

<style scoped>
</style>
<style lang='scss'>
//插件的样式需要全局修改 ，局部的名称防止冲突
.oddFileUp{
    $filew:150px;//盒子宽高
    $fileh:150px;
    $hoverColor:#00c;//获取焦点/经过颜色
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
    .avatar-uploader-icon {//设置字体图标的样式
        font-size: 28px;
        color: $iconColor;
        width: $filew;
        height: $fileh;
        line-height: $fileh;
        text-align: center;
    }
    .avatar {//照片展示样式
        width: $filew;
        height: $fileh;
        display: block;
    }
    .el-upload-list--picture-card{//放大删除模态框的大小
        position: absolute;
        z-index: 9;
        vertical-align:top;
    }
    .el-upload-list--picture-card .el-upload-list__item{//放大删除模态框的大小
        width: $filew;
        height: $fileh;
    }
}
</style>
