import axios from 'axios'
import qs from 'qs'
import BaseUrl from './url.base.js'
import { Loading } from 'element-ui'
let loading
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {
    loading.close()
}
// axios.defaults.timeout = 5000;                       
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           
axios.defaults.baseURL = BaseUrl.url;
axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => { 
    // startLoading()
    if (config.url == '/upms/user/login'){
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    }else{
        const token = localStorage.getItem("uname")
        if (!token){
            location.href = "http://localhost:8080/#/login"
            return
        }
        if (config.method === 'post') {
            // console.log(666,config.data)
            config.data = qs.stringify(config.data);
            // console.log(999,config.data)
        }
        return config;
    }
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    // endLoading()
    if(!res.data.code==200){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});