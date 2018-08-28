<template>
    <div>
        选择文件1: 
        <input name="fileUpload" type="file" id="fileUp" accept="image/png,image/gif,image/jpeg" @change="upFile($event)" ref="inputFile"/>
        <br>
        图片编码上传:
        <el-button @click="upBS"> base64编码上传 </el-button>
        <img :src="imgsrc" width="100px" height="100px" alt="未上传" title='base64上传的照片'>
        <div class="file">
            <h4 style="color:#00c;line-height:30px;">一、自定义请求方法--默认覆盖所有的事件只执行当前的请求事件和文件超出的钩子及删除放大方法</h4>
            <filel :setImaSrc="imgsrc"></filel>
        </div>
        <div class="file">
            <h4 style="color:#00c;line-height:30px;">一、单图片上传/拍照 --样式可随意修改</h4>
            <oddFile :oddImg="imgsrc"></oddFile>
        </div>
    </div>
</template>

<script>
import {img64} from './file.js'
import filel from './el-upfile.vue'
import oddFile from './el-upfileodd.vue'
    export default {
        components:{
            filel,
            oddFile
        },
        data(){
            return{
                imgsrc:'',
            }
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
                    // this.imgsrc = img64;//有网的时候需要放到请求处理展示，如果上传失败直接提示                    
                    let data =JSON.stringify({
                            "picData":img64,
                            "picExt":'.bmp',
                            'fileType':'2'
                        })
                        this.imgsrc = img64;

                    /* this.$http.postObj('http://seal.yuxinyun.net:8082/common/attachmentUploadByBase64',data).then(res=>{//图片上传
                        if(res.state == 'OK'){
                            this.imgsrc = img64;
                            this.$notify({
                                title:'上传成功',
                            })
                            
                        }
                    }) */
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