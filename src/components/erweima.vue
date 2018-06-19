<template>
    <div class="erweima">
        <div class="first">
            <canvas id="canvas"></canvas>     
            <img :src="canvasImg" style="width:80px;height:80px;" alt="">       
        </div>
        <input type="text" v-model="cont">        
        <div id="qrcode"></div>
    </div>
</template>
<script>
import QRCode1 from 'qrcode' 
import QRCode from '../vendor/qrcode.js'
export default {
    data(){
        return{
            cont:'',
            qrcode:null,
            canvasImg:''
        }
    },
    mounted(){
        this.useqrcode()
    },
    watch:{
        cont(val){//监听值改变 刷新二维码
            this.save()
        }
    },
    methods:{
        useqrcode(){ 
            　　　　let QueryDetail='https://www.baidu.com/';
                    var canvas = document.getElementById('canvas')//使用canvas形式
                    // var canvas = document.createElement('canvas');//使用img形式 动态创建canvas 转为base码 赋值给img标签
                    QRCode1.toCanvas(canvas, QueryDetail, function (error) {
                        if (error) console.error(999,error)
                    })
                   this.canvasImg =  canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");//toDataURL是canvas的一个方法，没有用get(0)会报错canvas.tofDataURL is not a function
    //方式二：参考http://code.ciaoca.com/javascript/qrcode/  参数说明
            this.qrcode =  new QRCode(document.getElementById("qrcode"), {
                width : 100,//设置宽高  
                height : 100,
                colorDark : '#f00',//前景颜色
                colorLight : '#fff',//背景颜色
                // text:'http://www.baidu.com'//扫描所得内容--网址跳转，内容直接展示
                text:'"批次:1408M1" \n "图号:M01-01-001"'
            });  
        },
        save(){
            this.qrcode.clear(); // 清除上面生成的二维码   一般用在一个不变的二维码 在点击对应内容的时候让二维码刷新
            this.qrcode.makeCode(this.cont); // 生成另外一个二维码
        }
    }
}
</script>
<style scoped lang='scss'>
    @import '../assets/scss/erweima'
</style>


