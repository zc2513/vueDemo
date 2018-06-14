<template>
  <div>
      人员统计
        <object id="plugin0"  classid="clsid:53a85b25-d195-5023-abef-ff17536e2b99" codebase="./SKAPI.CAB#1.0.0.7" width="0" height="0" style="visibility: visible">
            <param name="onload" value="onPluginLoad" />
        </object>
        <el-button type="primary" @click="Test_GetSealSerialUID">读卡</el-button>
        <el-button type="success" @click="Test_SealRevoke">注销清卡</el-button>
        <div style="width:500px;height:500px;background-color:#ccc;"  
                v-loading="fullscreenLoading"
                element-loading-text="写卡中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)">
        </div>
  </div>
</template>
<script>
import SKApi from'../../../common/SKApiHelper.js'
export default {
  name:'persontj',
  data(){
      return{
          middleDate:'',
          fullscreenLoading: false
      }
  },
  mounted(){
      this.endDom()
  },
  methods:{
        endDom(){
            SKApi.load()  
        },
        Test_GetSealSerialUID(){//读卡
            this.fullscreenLoading=true;
            var dwRet = SKApi.SK_GetSealSerialUID();
            if (dwRet[0] == 0xe0330080) {
                var pbUID = dwRet[1];
            } else if (dwRet[0] == 0) {
                var pbUID = dwRet[1];
                // this.middleDate = pbUID;
                var pbSerial = dwRet[2];
                if(pbSerial){
                    this.$message({
                        type:'warning',
                        message:"此卡已有数据"
                    })
                    return;
                }else{
                    this.Test_SealPersonalize()
                }
            } 
            // var strError = SKApi.SK_GetErrorString(dwRet[0]);
            // alert(strError);
        },
        Test_SealPersonalize() { //写卡
            var dwLen = 0;
            var strSealSerial = "1110123456789123456"; //后台需注册
            if (strSealSerial.length > 0)
                dwLen = strSealSerial.length;
            if (dwLen == 0) {
                alert("印章编号不能为为空\n");
                return;
            }

            if (dwLen > 19) {
                alert("印章编号长度不能超过19个字符\n");
                return;
            }
            var strSealName = "北京安建康业咨询中心发票专用章";  //后台需注册
            dwLen = strSealName.length;
            if (dwLen == 0) {
                alert("印章名称不能为空\n");
                return;
            }

            if (dwLen > 80) {
                alert("印章名称不能超过80个字\n");
                return;
            }
            var strStateCode = "1";
            dwLen = strStateCode.length;
            if (dwLen == 0) {
                alert("印章状态码不能为空\n");
                return;
            }

            if (dwLen > 1) {
                alert("印章状态码不能超过1个字符\n");
                return;
            }
            var strUserCompanyCode = "123456789058";
            dwLen = strUserCompanyCode.length;
            if (dwLen == 0) {
                alert("使用单位编码不能为空\n");
                return;
            }

            if (dwLen > 17) {
                alert("使用单位编码不能超过17个字符\n");
                return;
            }
            var strUserCompanyNameChs = "北京安建康业咨询中心";
            dwLen = strUserCompanyNameChs.length;
            if (dwLen == 0) {
                alert("使用单位名称(汉字)不能为空\n");
                return;
            }

            if (dwLen > 120) {
                alert("使用单位名称(汉字)不能超过120个字符\n");
                return;
            }
            //var strUserCompanyNameMin = "༄༅";
            var strUserCompanyNameMin = "";
            dwLen = strUserCompanyNameMin.length;
            if (dwLen > 120) {
                alert("使用单位名称(少数民族)不能超过120个字符\n");
                return;
            }
            var strUserCompanyNameEng = "beijingyangguangjianshenjulebuyouxiangongsi";
            dwLen = strUserCompanyNameEng.length;
            if (dwLen > 120) {
                alert("使用单位名称(英文)不能超过120个字符\n");
                return;
            }
            var strApprovalCompanyCode = "123456789012";
            dwLen = strApprovalCompanyCode.length;
            if (dwLen == 0) {
                alert("备案单位编码不能为空\n");
                return;
            }

            if (dwLen > 12) {
                alert("备案单位编码不能超过12个字符\n");
                return;
            }

            var strApprovalCompanyNameChs = "北京市公安局";
            dwLen = strApprovalCompanyNameChs.length;
            if (dwLen == 0) {
                alert("备案单位名称不能为空\n");
                return;
            }

            if (dwLen > 120) {
                alert("备案单位名称不能超过120个字符\n");
                return;
            }
            var strProductCompanyCode = "123456789098";
            dwLen = strProductCompanyCode.length;
            if (dwLen == 0) {
                alert("制作单位编码不能为空\n");
                return;
            }

            if (dwLen > 17) {
                alert("制作单位编码不能超过17个字符\n");
                return;
            }
            var strProductCompanyNameChs = "***有限公司";
            dwLen = strProductCompanyNameChs.length;
            if (dwLen == 0) {
                alert("制作单位名称不能为空\n");
                return;
            }

            if (dwLen > 120) {
                alert("制作单位名称不能超过120个字符\n");
                return;
            }
            var strProductCompanyNameEng = "***Co.Ltd.";
            dwLen = strProductCompanyNameEng.length;
            if (dwLen > 120) {
                alert("制作单位名称(英文)长度超过120个字符\n");
                return;
            }

            var strProductCompanyNameMin = "༄༅";
            dwLen = strProductCompanyNameMin.length;
            if (dwLen > 120) {
                alert("制作单位名称(少数民族)长度超过120个字符\n");
                return;
            }
            var strSealTypeCode = "03";
            dwLen = strSealTypeCode.length;
            if (dwLen == 0) {
                alert("章面类型代码不能为空\n");
                return;
            }

            if (dwLen > 2) {
                alert("章面类型代码长度超过2个字符\n");
                return;
            }

            var strMaterialCode = "02";
            dwLen = strMaterialCode.length;
            
            var strInkpadDesc = "朱印油";
            dwLen = strInkpadDesc.length;
            if (dwLen == 0) {
                alert("印油说明不能为空\n");
                return;
            }

            if (dwLen > 40) {
                alert("印油说明长度超过40个字符\n");
                return;
            }
            var strOperator = "梁皓";
            dwLen = strOperator.length;
            if (dwLen == 0) {
                alert("经办人不能为空\n");
                return;
            }

            if (dwLen > 30) {
                alert("经办人长度超过30个字符\n");
                return;
            }
            var strOperatorID = "450404198307082117";
            dwLen = strOperatorID.length;
            if (dwLen == 0) {
                alert("经办人公民身份号码不能为空\n");
                return;
            }

            if (dwLen > 18) {
                alert("经办人公民身份号码不能长度超过18个字符\n");
                return;
            }
            var strApprover = "邹翔";
            dwLen = strApprover.length;
            if (dwLen == 0) {
                alert("备案人不能为空\n");
                return;
            }

            if (dwLen > 30) {
                alert("备案人不能超过30个字符\n");
                return;
            }
            var strApprovalDate = "20150608";
            dwLen = strApprovalDate.length;
            if (dwLen == 0) {
                alert("备案日期不能为空\n");
                return;
            }

            if (dwLen > 8) {
                alert("备案日期不能超过8个字符\n");
                return;
            }
            var strUndertakeDate = "20150609";
            dwLen = strUndertakeDate.length;
            if (dwLen == 0) {
                alert("承接日期不能为空\n");
                return;
            }

            if (dwLen > 8) {
                alert("承接日期不能超过8个字符\n");
                return;
            }

            var strProductDate = "20150610";
            dwLen = strProductDate.length;
            if (dwLen == 0) {
                alert("制作日期不能为空\n");
                return;
            }

            if (dwLen > 8) {
                alert("制作日期不能超过8个字符\n");
                return;
            }

            var strCompressLabel = "1";
            dwLen = strCompressLabel.length;
            if (dwLen == 0) {
                alert("压缩标记不能为空\n");
                return;
            }

            if (dwLen > 1) {
                alert("压缩标记不能超过1个字符\n");
                return;
            }
            var strPersonName = "法人123";
            dwLen = strPersonName.length;
            if (dwLen == 0) {
                alert("法人代表不能为空\n");
                return;
            }

            if (dwLen > 30) {
                alert("法人代表长度超过30个字符\n");
                return;
            }
            var strPersonIdentity = "320324197806084885";
            dwLen = strPersonIdentity.length;
            if (dwLen == 0) {
                alert("法人代表身份证号不能为空\n");
                return;
            }

            if (dwLen > 18) {
                alert("法人代表身份证号超过18个字符\n");
                return;
            }
						
			var strUserCompanyNameMin = "2";
			 dwLen = strUserCompanyNameMin.length;
			            if (dwLen > 120) {
        
                alert("少数民族使用单位不能超过120个字符\n");
                return;
            }
            
			var strApproveNo = "1";
				 dwLen = strApproveNo.length;
					if(dwLen > 20)
			{
				alert("准可证号超过20个字节\n");
				return;
			}
			
				var strSocialCredit = "2"; 
						 dwLen = strSocialCredit.length; 
						if(dwLen > 18)
			{
				alert("社会信用统一代码超过18个字符\n");
				return;
			}
			
			if(dwLen == 0)
			{
				alert("社会信用统一代码不能为空\n");
				return;
			} 	
				var strCompanyType="test";  
					 dwLen = strCompanyType.length; 
						if(dwLen == 0)
			{
			alert("单位类型不能为空\n");
				return;
			}
			
			if(dwLen == 0)
			{
				alert("单位类型不能为空\n");
				return;
			} 		
				var strSealSpec = "2"; 
					 dwLen = strSealSpec.length;  
						if(dwLen > 10)
			{
				alert("印章规格不能为超过10个字符\n");
				return;
			}
			
			if(dwLen == 0)
			{
				alert("印章规格不能为空\n");
				return;
			}
			 			
				var strExtension1 = "1";
						dwLen = strExtension1.length;
			if(dwLen > 200)
			{
				alert("扩展字段1超过200个字符\n");
				return;
			}
				var strExtension2 = "2";
									dwLen = strExtension2.length;
			if(dwLen > 200)
			{
				alert("扩展字段1超过200个字符\n");
			}
				var strExtension3 = "";
								dwLen = strExtension3.length;
			if(dwLen > 200)
			{
				alert("扩展字段3超过200个字符\n");
			}
				var strExtension4 = "4";
											dwLen = strExtension4.length;
			if(dwLen > 200)
			{
				alert("扩展字段4超过200个字符\n");
			}
				var strExtension5 = "5";
											dwLen = strExtension5.length;
			if(dwLen > 200)
			{
				alert("扩展字段5超过200个字符\n");
			}
				var strPerJson = "{\"strSealSerial\":\"" + strSealSerial + "\",\"strSealName\":\"" + strSealName + "\",\"strStateCode\":\"" + strStateCode + "\",\"strUserCompanyCode\":\"" + strUserCompanyCode + "\",\"strUserCompanyNameChs\":\""+ strUserCompanyNameChs +"\",\"strUserCompanyNameMin\":\"" + strUserCompanyNameMin + "\",\"strUserCompanyNameEng\":\"" + strUserCompanyNameEng + "\",\"strApprovalCompanyCode\":\"" + strApprovalCompanyCode + "\",\"strApprovalCompanyNameChs\":\"" + strApprovalCompanyNameChs + "\",\"strProductCompanyCode\":\"" + strProductCompanyCode+ "\",\"strProductCompanyNameChs\":\"" + strProductCompanyNameChs+ "\",\"strProductCompanyNameMin\":\"" +strProductCompanyNameMin + "\",\"strProductCompanyNameEng\":\"" + strProductCompanyNameEng+ "\",\"strSealTypeCode\":\"" +strSealTypeCode + "\",\"strMaterialCode\":\"" + strMaterialCode+ "\",\"strInkpadDesc\":\"" +strInkpadDesc + "\",\"strOperator\":\"" +strOperator + "\",\"strOperatorID\":\"" + strOperatorID + "\",\"strApprover\":\"" + strApprover + "\",\"strApprovalDate\":\"" +strApprovalDate + "\",\"strUndertakeDate\":\"" +strUndertakeDate + "\",\"strProductDate\":\"" +strProductDate + "\",\"strCompressLabel\":\"" +strCompressLabel + "\",\"strPersonName\":\"" +strPersonName + "\",\"strPersonIdentity\":\"" + strPersonIdentity + "\",\"strApproveNo\":\"" + strApproveNo + "\",\"strSocialCredit\":\"" +strSocialCredit + "\",\"strCompanyType\":\"" + strCompanyType+ "\",\"strSealSpec\":\"" +strSealSpec + "\",\"strExtension1\":\"" + strExtension1 + "\",\"strExtension2\":\"" +strExtension2 + "\",\"strExtension3\":\"" +strExtension3 + "\",\"strExtension4\":\"" + strExtension4 + "\",\"strExtension5\":\"" + strExtension5 + "\"}";
				var dwFlag = 0;
				var fso=new ActiveXObject("Scripting.FileSystemObject"); 
				var fso=new ActiveXObject("Scripting.FileSystemObject"); 
			  	var openbmp = fso.OpenTextFile("D:\\400BmpBase64");
			  	var strUrl = "27.115.105.134:9080";
			    var strPngData  = "";

		    	var BmpData = openbmp.ReadLine();
		    	var dwBmplen = BmpData.length;
		     	var dwRet = SKApi.SK_FileCompress(BmpData,dwBmplen);
	     	if(dwRet[0] != 0){

	     	  	alert("印章原图转换失败\n");
	 	 	 	return;
	   		}
	      		var strBmpData = dwRet[1];
		  	if(strCompressLabel == "2")
		  	{
	    	  	var openPng = fso.OpenTextFile("D:\\400pngBase64");
		       	strPngData = openPng.ReadLine();
		   	}

				var dwRet = SKApi.SK_SealPersonalize(strUrl,strPerJson,strPngData,strBmpData,dwFlag);
                var strError = SKApi.SK_GetErrorString(dwRet);
                // alert(strError+this.middleDate);
                this.successhint(strError)
                console.log(strError)
        },
        Test_SealRevoke() { //注销
            this.fullscreenLoading=true;
            var strurl = "27.115.105.134:9080";
            var strSealSerial = "1110123456789123456";
            var dwLen
            if (strSealSerial.length > 0)
                dwLen = strSealSerial.length;
            if (dwLen == 0) {
                alert("印章编号不能为为空\n");
                return;
            }

            if (dwLen > 19) {
                alert("印章编号长度不能超过13个字符\n");
                return;
            }
            var strSignetName = "北京安建康业咨询中心发票专用章";
            dwLen = strSignetName.length;
            if (dwLen > 80) {
                alert("印章编号长度不能超过80个字符\n");
                return;
            }
            var strCause = "00";
            dwLen = strCause.length;
            if (dwLen != 2) {
                alert("注销原因输入不合法，请重新输入\n");
                return;
            }
            var dwFlag = 0;
            var dwRet = SKApi.SK_SealRevoke(strurl, strSealSerial, strSignetName, strCause,dwFlag);
            var strError = SKApi.SK_GetErrorString(parseInt(dwRet));
            // alert(strError);
            this.Test_ClearCard();
        },
        Test_ClearCard() { //清卡
            var dwFlag = 0;
            var dwRet = SKApi.SK_ClearCard(dwFlag);
            var strError = SKApi.SK_GetErrorString(dwRet);   
            this.successhint(strError)        
        },
        successhint(strError){//提示信息
            strError = strError[0].slice(0,strError[0].indexOf('。'))
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 1000);
            /* this.$message({
                type:'warning',
                message:strError
            })  */
        } 
  }

}
</script>

