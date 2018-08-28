<template>
    <div>
        <el-upload action="http://192.168.1.131:9095/common/attachmentUpload/" 
            ref='fileup'
            list-type="picture-card" 
            :on-preview="handlePictureCardPreview" 
            :file-list="fileList"
            :limit='3'
            :http-request='upimg'
            :on-exceed='ccxz'
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
    </div>
</template>

<script>
// limit :最大文件上传次数
// on-exceed :超过limit限制后触发
// on-preview :放大
// on-remove :移除
// http-request :自定义请求
    export default {
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                fileList:[]
            };
        },
        props:["setImaSrc"],
        watch:{
            setImaSrc(value){
                this.fileList.push({
                    url:value
                });
            }
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
                let img = file.file;
                console.log(img)
                let imageUrl = URL.createObjectURL(img);
                this.fileList.push({ //一般在有拍照和本地图片上传，才使用，防止用户拍照和本地混合上传，***如果使用一般也要在传成功后添加***
                    url:imageUrl
                })
                // console.log(`文件大小${img.size},类型：${img.type}`)
                var param = new FormData();
                    param.append("file",img)
                    param.append('chunk', '{"name":"测试"}')
                    this.$http.postFile("http://seal.yuxinyun.net:8082/common/attachmentUpload/",param).then((data)=>{
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
