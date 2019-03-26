<template>
  <div id="app">
    <router-link to='/' class="ahome">首页 第{{num}}次访问本网站</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
   name: 'App',
    data(){
        return{
            caution:false,
            num:'',
        }
    },
    created() {
        this.initNum();
    },
    mounted(){
        window.addEventListener('hashchange', () => {
        let currentPath = window.location.hash.slice(1)
            if (this.$route.path !== currentPath) {
                this.$router.push(currentPath)
            }
        }, false)
    },
    methods:{
        initNum(){//访问次数收集
            this.saveVisits();
        },
        setCookie(name,value,expires,path,domain,secure){
         var curCookie=name+"="+escape(value) +
             ((expires)?";expires="+expires.toGMTString() : "") +
             ((path)?"; path=" + path : "") +
             ((domain)? "; domain=" + domain : "") +
             ((secure)?";secure" : "")
             if(!this.caution||(name + "=" + escape(value)).length <= 4000){
                 document.cookie = curCookie
             }else if(confirm("Cookie exceeds 4KB and will be cut!")){
                 document.cookie = curCookie
             }
        },
        getCookie(name){
             var prefix = name + "="
             var cookieStartIndex = document.cookie.indexOf(prefix)
             if (cookieStartIndex == -1){
                 return null
             }    
             var cookieEndIndex=document.cookie.indexOf(";",cookieStartIndex+prefix.length)
             if(cookieEndIndex == -1){
                 cookieEndIndex = document.cookie.length
             }
             return unescape(document.cookie.substring(cookieStartIndex+prefix.length,cookieEndIndex))
        },
        deleteCookie(name, path, domain){
             if(this.getCookie(name)){
                 document.cookie = name + "=" + 
                 ((path) ? "; path=" + path : "") +
                 ((domain) ? "; domain=" + domain : "") +
                 "; expires=Thu, 01-Jan-70 00:00:01 GMT"
             }
        },
        fixDate(date){
             var base=new Date(0)
             var skew=base.getTime()
             if(skew>0){
                 date.setTime(date.getTime()-skew)
             }    
        },
        saveVisits(){
            var now=new Date();
                this.fixDate(now)
                now.setTime(now.getTime()+365 * 24 * 60 * 60 * 1000)
            var visits = this.getCookie("counter")
                if(!visits){
                    visits=1;
                }else{
                    visits=parseInt(visits)+1;
                }   
            this.setCookie("counter", visits, now);
            this.num = visits;
        }  
    },

}
</script>

<style>
    #app{
        width: 100%;
        height: 100vh;
        background-color: #e2e2e2;
    }
    .ahome{
        display: block;        
        height: 4vh;
        line-height: 4vh;
        background-color: #caa8a8;
    }
    router-view{
        height: 90vh;
    }
</style>
