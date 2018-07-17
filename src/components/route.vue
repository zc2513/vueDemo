<template>
    <div>
        <br>
        <router-link to='/route/999'>同路由不同参数跳转</router-link>
        <div>
            
        </div>
        <div class="con">
             {{msg}}
        </div>
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) {
        if(confirm('级别三--当前组件路由被确定前--提示----------欢迎进入路由页面')){
            console.log('111beforeRouteEnter-to',to)
            console.log('111beforeRouteEnter-from',from)
            next()//***唯一支持将回调传递给的守卫next
            /* 
            注;此时守卫还没有被创建  所以无法使用this 无指向
             */
        }else{
            alert('取消进入')
            next(false)
        }
    },
    beforeRouteUpdate (to, from, next) {
        if(confirm('级别四--当呈现此组件的路由发生更改时调用------------欢迎进入路由页面2')){
            console.log('222beforeRouteUpdate-to',to)
            console.log('222beforeRouteUpdate-from',from)
            const { hash, params, query } = to
            this.msg = params.id +'同组件，传递的参数发生改变，显示的组件，一般使用在用户切换账户重新根据params获取数据，只是刷新页面后当前的路由拦截不执行，但是路由参数不发生变化，所以可以正常拿数据' 
            next()
            /* 可以访问“this”组件实例。
            注;这个组件在新的路线中被重用--类似在路由页面配置/home/:id
                例：
                    const { hash, params, query } = to
                    if (query.to === 'foo') {
                        return { path: '/foo', query: null }
                    }
                    if (hash === '#baz') {
                        return { name: 'baz', hash: '' }
                    }
                    if (params.id) {
                        return 'home/:id'
                    } else {
                        return '/home'
                    }
                */
        }else{
            alert('取消进入')
            next(false)
        }
    },
    beforeRouteLeave (to, from, next) {
        if(confirm('级别三--离开组件--提示----------你有未保存的更改，确认来开当前页面吗')){
            console.log('333beforeRouteLeave-to',to)
            console.log('333beforeRouteLeave-from',from)
            next()
            /*可以访问“this”组件实例。*/
        }else{
            next(false)
        }
    },
    created(){
        this.init()
    },
    data(){
        return{
            msg:''
        }
    },
    methods:{
        init(){
            console.log(999,this.$route.matched)
            if(this.$route.params.id == 999){
               this.msg = this.$route.params.id +'同组件，传递的参数发生改变，显示的组件，一般使用在用户切换账户重新根据params获取数据，只是刷新页面后当前的路由拦截不执行，但是路由参数不发生变化，所以可以正常拿数据'  
            }
        }
    }
}
</script>

<style lang="scss" scoped>
a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 140px;
    background-color: #c6c6c6;
}
.con{
    text-align: center;
    line-height: 80px;
    background-color: #999;
    color: #fff;
    font-size: 18px;
    margin: 100px auto;
}
</style>
