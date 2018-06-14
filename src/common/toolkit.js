const tools = {
    isPhoneInspect: isPhoneInspect,
    orderCodeInspect: orderCodeInspect,
    isWrokTelephone: isWrokTelephone,
    isIDcard:isIDcard,
    isNumber: isNumber,
    isChinese: isChinese
    // ReadIDCard:ReadIDCard
}
function isPhoneInspect(params) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(params)) {
        return false;
    } else {
        return true;
    }
}
function orderCodeInspect(params) {
    
}
// 
function isIDcard(param) { 
    var IDcard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    if (!IDcard.test(param)) {
        return false;
    } else {
        return true;
    }
 }
function isWrokTelephone(params) {
    var  mobile = /^1[3|5|8]\d{9}$/
    if (!mobile.test(params)) {
        return false;
    } else {
        return true;
    }
}
function isNumber(params) {
    var reg = new RegExp("^[0-9]*$");  
    if (!reg.test(params)) {
        return false;
    } else {
        return true;
    }
}
function isChinese(param) {
    var chineseReg = /^[a-z0-9]+$/i;
    if (chineseReg.test(param)) {
        return false ;
    } else {
        return true;
    }

  }

function ajax() {
    var ajaxData = {
        type: arguments[0].type || "GET",
        url: arguments[0].url || "",
        async: arguments[0].async || "true",
        data: arguments[0].data || null,
        dataType: arguments[0].dataType || "text",
        contentType: arguments[0].contentType || "application/x-www-form-urlencoded",
        beforeSend: arguments[0].beforeSend || function () { },
        success: arguments[0].success || function () { },
        error: arguments[0].error || function () { }
    }
    ajaxData.beforeSend()
    var xhr = createxmlHttpRequest();
    xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);
    xhr.setRequestHeader("Content-Type", ajaxData.contentType);
    xhr.send(convertData(ajaxData.data));
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                ajaxData.success(xhr.response)
            } else {
                ajaxData.error()
            }
        }
    }
}  
    
function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}

function convertData(data){
    if (typeof data === 'object') {
        var convertResult = "";
        for (var c in data) {
            convertResult += c + "=" + data[c] + "&";
        }
        convertResult = convertResult.substring(0, convertResult.length - 1)
        return convertResult;
    } else {
        return data;
    }
}
export default tools