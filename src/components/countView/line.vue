<template>
  <div class="echarts-cs">
    <div id="lineView" class="echarts-box">666</div>
  </div>
</template>

<script>
 var echarts = require('echarts/lib/echarts');// 引入 ECharts 主模块
     require('echarts/lib/chart/line');// 引入柱状图
     //引入提示框和标题组件
     require('echarts/lib/component/tooltip');
     require('echarts/lib/component/title');
     require('echarts/lib/component/legend');

  export default {
    // props:['lineId'],
    mounted(){
      this.init();
    }, 
    methods:{
      init(){
        let that = this;
        echarts.init(document.getElementById('lineView')).setOption({
            backgroundColor: '#2c3448',
            // color:that.echartId==1 ? '#1980E2':(that.echartId==2? '#f00':'#53a963'),
            color:'#666',
            textStyle:{
              color:'#fff'
            },
            title: {
                text: '行业数据走势图',
                left:'36%',
                textStyle:{
                  color: '#fff'
                }
            },
            tooltip: {
              trigger:'axis',//坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
              axisPointer : {// 坐标轴指示器，坐标轴触发有效            
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }   
              }
            },
            legend: {
                data:['二手车','印章','视频广告'],
                textStyle:{
                  color:'rgba(255, 255, 255, 0.3)'
                },
                top:'30px'
            },
            grid: {//展示区域
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis: {
              type: 'value',
              splitLine:{
                show:false
              }
            },
            // ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
            series: [
              {
                  name:'二手车',
                  type:'line',
                  stack: '总量',
                  areaStyle: {
                    color:'#546570'
                  },
                  data:[120, 132, 101, 134, 90, 60, 100]
              },
              {
                  name:'印章',
                  type:'line',
                  stack: '总量',
                  areaStyle: {
                    color:'rgba(99,186,225,0.8)'
                  },
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'line',
                  stack: '总量',
                  areaStyle: {
                    color:'#61a0a8'
                  },
                  data:[150, 232, 201, 154, 190, 330, 410]
              }, 
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
    background: #fff;
  }
}
  
</style>