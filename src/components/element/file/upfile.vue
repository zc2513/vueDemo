<template>
    <div>
        选择文件1: 
        <input name="fileUpload" type="file" id="fileUp" accept="image/png,image/gif,image/jpeg" @change="upFile($event)" ref="inputFile"/>
        <br>
        图片编码上传:
        <el-button @click="upBS"> base64编码上传 </el-button>
        <div class="file">
            <h4 style="color:#c00;line-height:30px;">一、自定义请求方法--默认覆盖所有的事件只执行当前的请求事件和文件超出的钩子及删除放大方法</h4>
            <filel></filel>
        </div>
    </div>
</template>

<script>
import {img64} from './file.js'
import filel from './el-upfile.vue'
    export default {
        components:{
            filel
        },
        methods:{
                upFile(e){
                    var file = e.target.files[0]
                    var param = new FormData();// 创建form对象
                    param.append("file",file)// 通过append向form对象添加数据
                    param.append('chunk', '{"name":"测试"}')//添加form表单中其他数据
                     // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
                    this.$http.postFile("/common/attachmentUpload/",param)
                    .then(function(data){
                        console.log(data);
                    },function(err){
                        console.log("err------: ");
                        console.log(err);
                    })
                },
                upBS(){
                    let data =JSON.stringify({
                            "picData":img64,
                            "picExt":'.bmp',
                            'fileType':'2'
                        })
                    this.$http.postObj('/common/attachmentUploadByBase64',data).then(res=>{
                        console.log(res)
                    })
                }
        }
    }
</script>

<style scoped>
    .file{
        width: 96%;
        height: 200px;
        background-color: #eee;
        margin: 20px 2%;
    }
</style>