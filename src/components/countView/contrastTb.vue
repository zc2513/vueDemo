<template>
  <div class="echarts-cs">
    <div id="contrast" class="echarts-box">666</div>
  </div>
</template>

<script>
 var echarts = require('echarts/lib/echarts');// 引入 ECharts 主模块
     require('echarts/lib/chart/line');// 引入柱状图
     require('echarts/lib/chart/pie');// 引入柱状图
     //引入提示框和标题组件
     require('echarts/lib/component/tooltip');
     require('echarts/lib/component/title');
     require('echarts/lib/component/legend');

  export default {
    mounted(){
      this.init();
    }, 
    methods:{
      init(){
        let that = this;
        let myChart = echarts.init(document.getElementById('contrast'))
        let option = {
            backgroundColor: '#2c3448',
            // color:that.echartId==1 ? '#1980E2':(that.echartId==2? '#f00':'#53a963'),
            color:'#666',
            textStyle:{
              color:'#fff'
            },
            title: {
                text: '从业人员分布情况',
                left:'40%',
                textStyle:{
                  color: '#fff'
                }
            },
            tooltip: {
              trigger:'axis',//坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
              showContent: false,//是否显示提示框浮层
              axisPointer : {// 坐标轴指示器，坐标轴触发有效            
                  type: 'cross',
                  label: {//坐标y数值显示颜色
                      backgroundColor: '#6a7985'
                  }   
              }
            },
            dataset: {//数据集 多组件复用数据
                source: [
                    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['印章', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['开锁', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['典当', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['二手车', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
                    ['旅游', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['机修', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['汽车租赁', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ]
            },
            legend: {
                data:['二手车','印章','视频广告'],
                textStyle:{
                  color:'rgba(255, 255, 255, 0.3)'
                },
                top:'30px'
            },
            grid: {//展示区域
              top: '55%'
            },
            xAxis: {type: 'category'},
            yAxis: {
              type: 'value',
              splitLine:{
                show:false
              }
            },
            color:['#c23531','#0f0', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        };
        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
        myChart.setOption(option);
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