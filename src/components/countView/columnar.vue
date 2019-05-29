<template>
  <div class="echarts-cs">
    <div :id="'main'+echartId" class="echarts-box"></div>
  </div>
</template>

<script>
 var echarts = require('echarts/lib/echarts');// 引入 ECharts 主模块
     require('echarts/lib/chart/bar');// 引入柱状图
     //引入提示框和标题组件
     require('echarts/lib/component/tooltip');
     require('echarts/lib/component/title');
     require('echarts/lib/component/legend');

  export default {
    props:['echartId'],
    mounted(){
      this.init();
    }, 
    methods:{
      init(){
        let that = this;
        echarts.init(document.getElementById(`main${this.echartId}`)).setOption({
            backgroundColor: '#2c3448',
            color:that.echartId==1 ? '#1980E2':(that.echartId==2? '#f00':'#53a963'),
            animationThreshold: 2000,
            textStyle:{
              color:'#fff'
            },
            title: {
                text: that.echartId==1 ? '行业数据统计':'行业企业数量统计',
                left:'36%',
                textStyle:{
                  color: '#fff'
                }
            },
            tooltip: {
              trigger:'axis',//坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
              axisPointer : {// 坐标轴指示器，坐标轴触发有效            
                  type : 'shadow'  // 默认为直线，可选为：'line' | 'shadow'      
              }
            },
            legend: {
                // data:['衬衫'], //对应系列
                bottom:'10px'
            },
            xAxis: {
                type : 'category',
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'], 
            },
            yAxis: {
              type: 'value',
              splitLine:{
                show:false
              }
            },
            series: [
              {
                // name: '衬衫',
                type: 'bar',
                barWidth: '40%',
                data: [
                  {name:'衬衫',value:80},
                  {name:'羊毛衫',value:50},
                  {name:'雪纺衫',value:70},
                  {name:'裤子',value:20},
                  {name:'高跟鞋',value:30},
                  {name:'袜子',value:60},
                ]
              }
            ]
        });
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.echarts-cs{
  margin: 0 auto;
  width: 100%;
  height: 100%;
  .echarts-box{
    width: 100%;
    height: 100%;
  }
}
  
</style>