<template>
    <div>
        <!-- <img src="D:/test/1Img.jpg" alt=""> -->
                高拍仪页面
                    <OBJECT id="CmCaptureOcx" style="margin-left:10px; width: 300px; height:200px" classid="clsid:3CA842C5-9B56-4329-A7CA-35CA77C7128D" ></OBJECT>
                    <OBJECT id="CmCaptureOcx1" style="margin-left:10px; width: 300px; height:200px" classid="clsid:3CA842C5-9B56-4329-A7CA-35CA77C7128D" ></OBJECT>	
                    <center>
                        <input type = "button" value = " 刷新视频1 " @click = "StartVideo1();" name = "start">
                        <input type = "button" value = " 拍    照 " @click = "Capture();" name = "Capture">
                        <input type = "button" value = " 关闭视频1 " @click = "EndVideo1();" name = "end">
                    </center>		
                    <center>
                        <input type = "button" value = " 刷新视频2 " @click = "StartVideo2();" name = "start">
                        <input type = "button" value = " 拍    照 " @click = "Capture1();" name = "Capture">
                        <input type = "button" value = " 关闭视频2 " @click = "EndVideo2();" name = "end">
                    </center>	
                    <OBJECT id="IDCard" style="margin-left:5px; width: 0px; line-height:0px" classid="clsid:284E9DE2-3E31-4F82-B20C-3A3C902B7656" ></OBJECT>		
                        <input type = "button" value = "读取信息 " @click = "Read();" name = "read">
    </div>
</template>
<script>
import {dowonPic,upPic,readCar} from './gpy.js';
export default {
    name:'gpy',
    destroyed(){
        dowonPic.closeDown();
        upPic.closeDown();
    },
    mounted(){
        window.onunload = e => {      //刷新时弹出提示
            dowonPic.closeDown();
            upPic.closeDown();
        };
    },
    methods:{
//---------------------------下摄像图start--------------------------
        StartVideo1(){//----下摄像图开启重置
            dowonPic.initDown();
        },
        Capture(){//下摄像图拍照
            dowonPic.submitPic()
        },
        EndVideo1(){//下摄像图关闭
            dowonPic.closeDown();
        },
//---------------------------下摄像图end--------------------------


//---------------------------上摄像图start--------------------------
        StartVideo2(){//上摄像图重启重置
            upPic.initDown();
        },
        Capture1(){//拍照
            upPic.submitPic();
        },
        EndVideo2(){//关闭
            upPic.closeDown();
        },
//---------------------------上摄像图end--------------------------


//身份证识别------------start---------------------------------------------------			
        Read(){
            readCar()
        },
//-------------------------------本地图片转base64-------------------			
    }
    
}
</script>
