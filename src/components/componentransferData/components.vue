<template>
  <div style="margin-top:10px;">
      <router-link v-for="(item,index) in btncon" :key='index' v-text="item.con" :to='item.uri' ></router-link>
      <button-counter></button-counter> 
      <div style="margin-top:20px;">
            <router-view/>          
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        btncon:[{uri:'/components/childParentTransfer',con:'子父组件'}
                ,{uri:'/components/parentChildTransfer',con:'父子组件'}
                ,{uri:'/components/equalComponent',con:'同级组件'}                
                ],
      }
    }
  }
/* props接收属性的两种方式
    1.数组形式接收：例   props:['msg','msg1','msg2'...]
    2.对象形式接收：可以对接收的参数进行类型和验证等；
        例：props:{
            msg:Number,//规定类型---方式1
            msg1:[Number,String,Boolean],//规定多个类型---方式2
            msg2:gchs,//---方式3
        }
        function gchs(value){
                this.type=Object;
                this.default=function(){//可以方法返回也可直接写死
                            return { message: 'hello' }
                        };
                this.save=function (value) {// ---自定义方法，类似工厂函数的原型方法    为此属性提供方法，做对应数据验证，返回验证结果
                        return ['success', 'warning', 'danger'].indexOf(value) !== -1
                    };   
            }        
 */
/*  ************************
1.子组件访问父组件属性：$parent
2.父组件访问子组件属性：$root
 */
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/a_style';
</style>

  