<template>
    <div>
        <el-upload action="http://192.168.1.131:9095/common/attachmentUpload/" 
            ref='fileup'
            list-type="picture-card" 
            :on-preview="handlePictureCardPreview" 
            :limit='2'
            :http-request='upimg'
            :on-exceed='ccxz'
            :on-remove="handleRemove">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log('移除的照片',file)
                console.log('fileList中剩余的照片',fileList);
            },
            handlePictureCardPreview(file) {
                console.log("点击放大触发")
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            upimg(file){
                console.log(666,file)    
                let img = file.file;
                console.log(img)
                // console.log(`文件大小${img.size},类型：${img.type}`)
                var param = new FormData();
                    param.append("file",img)
                    param.append('chunk', '{"name":"测试"}')
                    this.$http.postFile("/common/attachmentUpload/",param).then((data)=>{
                        if(data.state == 'OK'){
                            console.log(data);
                            this.$notify({
                                title:'上传成功',
                                message:`文件大小${(img.size/1024).toFixed(2)}kb,文件格式：${img.type}`
                            })
                        }
                    },(err)=>{
                        console.log("err------: ",err);
                    })
            },
            ccxz(){
                this.$notify({
                    title: '错误',
                    message: '文件超出最大个数限制,清空文件列表',
                    position: 'top-left'
                });
                this.$refs.fileup.clearFiles()   
            },
        }
    }
</script>
