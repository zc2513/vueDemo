<template>
    <div>
        <section>
            <h2>一、css过渡</h2>
            <div class="box">
                <el-button type="success" @click="show = !show">Toggle</el-button>
                <transition name="fade">
                    <p v-if="show">v-if 过渡效果transition标签的测试</p>
                </transition>
            </div>
            <div class="box">
                <el-button type="success" @click="show1 = !show1">Toggle</el-button>
                <transition name="slide-fade">
                    <p v-if="show1">hello</p>
                </transition>
            </div>
        </section>
        <section>
            <h2>一、css动画</h2>
            <div class="box">
                <el-button type="success" @click="show21 = !show21">Toggle</el-button>
                <transition name="bounce">
                    <p v-if="show21">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
                </transition>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data(){
    return{
        show: true,
        show1: true,
        show21: true,
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/a_style';
section{
    padding: 10px 0;
    box-shadow: 1px 1px 40px #999;
    h2{
        line-height: 30px;
        padding-left:10px;
        color: #00c;
    }
}
p{
    width: 80%;
    line-height: 40px;
    text-indent: 2em;
}
.box{
    width: 94%;
    height: 80px;
    overflow-y: hidden;
    background-color: #fff;
    margin: 4px auto;
}

// ******************************************
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


// ******************************************1
.slide-fade-enter-active {//动画进入页面（从无到有）
  transition: all .3s ease;
}
.slide-fade-leave-active {//动画离开时的 （从有到无）动画设置
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{//动画进入页面从目标样式到初始样式，动画页面从初始样式到目标样式，  ---初始样式为元素的基本样式
  transform: translateX(100px);//目标样式
  opacity: 0;////目标样式
}


//----------------------------------------------------------------------------------------------------
.bounce-enter-active {//动画进入时
  animation: bounce-in 2s;
}
.bounce-leave-active {//动画离开时
  animation: bounce-in 5s reverse;
}
@keyframes bounce-in {//设置动画效果的过程
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
