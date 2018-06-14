

var onPluginLoad = null;

var SKApi = new SKApiHelper();

function SKApiHelper() {
    var isAttached = false
    var SKApipuginObject = null;
    var funcIndex = 0;
    var funcIDBindList = [];
    this.load = function(loadCb) {
        SKApipuginObject = document.getElementById('plugin0');
        if (isInterfaceFull() == true) {
            attach(SKApipuginObject, 'SKPercent', SKPercent);
        }
    }

    this.SK_SealPersonalize = function(strUrl, strPerJson, strPicPath, strPicbmpPath, dwFlag) {
        var dwRet = SKApipuginObject.SK_SealPersonalize(strUrl, strPerJson, strPicPath, strPicbmpPath, dwFlag);
        return dwRet;
    }


    this.SK_GetErrorString = function(dwError) {
        var dwRet = SKApipuginObject.SK_GetErrorString(dwError);
        return dwRet;
    }

    this.SK_ClearCard = function(dwFlag) {
        var dwRet = SKApipuginObject.SK_ClearCard(dwFlag);
        return dwRet;
    }

    this.SK_ReadCardInfo = function(dwFlag) {
        var dwRet = SKApipuginObject.SK_ReadCardInfo(dwFlag);
        return dwRet;
    }


    this.SK_GetSealSerialUID = function() {
        var dwRet = SKApipuginObject.SK_GetSealSerialUID();
        return dwRet;
    }

    this.SK_SealLocalCheck = function(IsPic, dwFlag) {
        var dwRet = SKApipuginObject.SK_SealLocalCheck(IsPic, dwFlag);
        return dwRet;
    }

    this.SK_SealVerify = function(strUrl, dwFlag) {
        var dwRet = SKApipuginObject.SK_SealVerify(strUrl, dwFlag);
        return dwRet;
    }

    this.SK_SealRevoke = function(strurl, strSealSerial, strSignetName, strCause, dwFlag) {
        var dwRet = SKApipuginObject.SK_SealRevoke(strurl, strSealSerial, strSignetName, strCause,dwFlag);
        return dwRet;
    }

    this.SK_FileCompress = function(BmpData, dwBmplen) {
        var dwRet = SKApipuginObject.SK_FileCompress(BmpData,dwBmplen);
        return dwRet;
    }
    
    function SKPercent(param) {
        var funcID = param[0];
        var rv = parseInt(param[1], 10);
        var percent = param[2];
        var func = getFuncIDBind(funcID);
        if (func != null) {
            func(percent);
        }
    }
    
    function funcIDBind(vid, vfunc) {
        this.id = vid;
        this.func = vfunc;
    }

    
    function addFuncIDBind(func) {
        funcIndex++;
        var newFuncIDBind = new funcIDBind(funcIndex, func);
        funcIDBindList.push(newFuncIDBind);
        return funcIndex;
    }
    
    function getFuncIDBind(funcID, isRemove) {
        if (funcID == null) {
            return;
        }

        var index = null;
        for (var i = 0; i < funcIDBindList.length; i++) {
            if (funcIDBindList[i].id == funcID) {
                if (isRemove == true) {
                    return funcIDBindList.splice(i, 1)[0].func;
                }
                else {
                    return funcIDBindList[i].func;
                }
            }
        }
    }
    
    function attach(elem, eventName, func) {
        if (elem.attachEvent != null) {
            elem.attachEvent('on' + eventName, func);
        }else
        if (elem.addEventListener != null) {
            elem.addEventListener(eventName, func, false);
        }
    }

    function isInterfaceFull() {
        var pluginObj = document.getElementById('plugin0');
        if (pluginObj == null ||
			pluginObj.SK_GetErrorString == null ||
			pluginObj.SK_ClearCard == null ||
			pluginObj.SK_ReadCardInfo == null ||
			pluginObj.SK_GetSealSerialUID == null ||
			pluginObj.SK_SealPersonalize == null ||
			pluginObj.SK_SealVerify == null ||
			pluginObj.SK_SealLocalCheck == null ||
			pluginObj.SK_FileCompress == null ||
			pluginObj.SK_SealRevoke == null ) {
            return false;
        }
        return true;
    }


}

export default SKApi;