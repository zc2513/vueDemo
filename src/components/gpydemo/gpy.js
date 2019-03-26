import post from '@/common/http.config.js';

export var dowonPic = { //下摄像图
    initDown:StartVideo1,
    submitPic:Capture,
    closeDown:EndVideo1
}
export var upPic = { //平拍摄像图
    initDown:StartVideo2,
    submitPic:Capture1,
    closeDown:EndVideo2
}
export function readCar(){//-----------------读卡
    var IDCard = document.getElementById("IDCard");
        IDCard.OpenUSBPort();
        IDCard.SetHeadPicPath("C:\\Users\\Administrator\\Pictures\\" +"c.jpg");
        var data = {
            tag:IDCard.ReadIDCard(),		
            name:IDCard.GetName().trim(),		
            sex:IDCard.GetSex(),			
            nation:IDCard.GetNation(),		
            birthday:IDCard.GetBirthDate(),	
            address:IDCard.GetAddr(),		
            id:IDCard.GetID(),			
            office:IDCard.GetOffice(),		
            startDate:IDCard.GetBeginDate(),	
            endDate:IDCard.GetEndDate(),		
            headImg64:IDCard.GetHeadPicBase64(),
        }
        IDCard.CloseUSBPort();
        console.log(data)
        return data;
}

//------------------------------------下 start-------------------
function StartVideo1(){
    var CmCaptureOcx = document.getElementById("CmCaptureOcx")
        CmCaptureOcx.Initial();
        this.gpyState = CmCaptureOcx.StartRun(0);
}

function Capture(){
        var CmCaptureOcx = document.getElementById("CmCaptureOcx")
        var strFile = "C:\\Users\\Administrator\\Pictures\\" +"a.jpg";
        var ptstate = CmCaptureOcx.CaptureImage(strFile)
        if(  ptstate == 1){
            upFile(CmCaptureOcx)
        }else{
            alert("拍图失败")
        }
}

function EndVideo1(){
    var CmCaptureOcx = document.getElementById("CmCaptureOcx")
    CmCaptureOcx.Destory();
}
//---end


//------------------------------------平 start-------------------
function StartVideo2(){//上摄像图重启重置
    var CmCaptureOcx1= document.getElementById("CmCaptureOcx1")
    CmCaptureOcx1.Initial();
    CmCaptureOcx1.StartRun(1);
}
function Capture1(){//拍照
    var CmCaptureOcx1= document.getElementById("CmCaptureOcx1")
    var strFile = "C:\\Users\\Administrator\\Pictures\\" +"b.jpg";
    var ptstate = CmCaptureOcx1.CaptureImage(strFile);
    if(  ptstate == 1){
        upFile(CmCaptureOcx1);
    }else{
        alert("拍图失败")
    }
}
function EndVideo2(){//关闭
    var CmCaptureOcx1= document.getElementById("CmCaptureOcx1")
    CmCaptureOcx1.Destory();
}
//---end


//图片上传
function upFile(dom){
    var ipt = document.createElement('input');
        ipt.type = 'file';
        ipt.addEventListener("change",function(){
            var file = ipt.files[0];
            var param = new FormData();
            ipt.style.width = '0px'; ipt.style.height = '0px'; ipt.style.display = 'none'; dom.appendChild(ipt);// 当前行 纯粹是为了解决win7 ie不触发问题
            param.append('file',file);
            post.postFile('/common/attachmentUpload',param).then(res=>{
                console.log(res)
                dom.Destory()//关闭高拍仪
            })
        })
        ipt.click();
}