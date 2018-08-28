<template>
    <div>
        <form action="">
            文件： <input type="file" name="myFile" @change="change($event)"> <br>
            <div>
                <meter max="100%" ref="meter" min="0" style="width: 1000px;"></meter>
            </div>
            <img ref="img">
        </form>
        <video ref="video" controls></video>
    </div>
</template>

<script>
    export default {
        methods:{
            change(e){
                let files = e.target.files
                let that = this;
                let fileReader=new FileReader();
                alert("文件上传类型："+files[0].type)
                fileReader.readAsDataURL(files[0]);//将文件转为base64
                fileReader.onload=function(){//读取完成拿出
                    that.$refs.video.src=this.result;
                    that.$refs.img.src=this.result;
                };
                fileReader.onprogress=function(event){//读取进度值--百分比
                    var event=event||window.event;
                    var loaded=event.loaded;
                    var total=event.total;
                    var per=loaded/total;
                    that.$refs.meter.value=per;
                };
            }
        }
    }
</script>
