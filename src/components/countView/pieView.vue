<template>
  <div class="echarts-cs">
    <div :id="'piemain'+pieId" class="echarts-box"> 666 </div>
  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts');
                require('echarts/lib/chart/pie');
                require('echarts/lib/component/tooltip');
                require('echarts/lib/component/title');
                require('echarts/lib/component/legend');
  export default {
    props:['pieId'],
    mounted(){
      this.init()
    },
    methods:{
      init(){
        let myChart = echarts.init(document.getElementById(`piemain${this.pieId}`));
        let options = {
            backgroundColor: '#2c3448',
            title: { 
              text: '行业上传率统计' , 
              subtext: '', 
              x:'center',
              textStyle:{
                color:'#fff'
              }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#c23531','#c48612', '#61a0a8', '#6e7074','#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#2f4554', '#c4ccd3'],
            legend: {
                orient: 'vertical',
                top:'10%',
                left:'left',
                data:this.legendData 
            },
            series: [{
                name: '',
                type: 'pie',
                radius: '70%',//圆大小
                center: ['50%', '55%'],//位置x,y
                // label: {//图形上的文本标签
                //     normal: {
                //         position: 'inner',//隐藏引导线
                //         show : false//隐藏标识文字
                //     },
                //     textStyle: {//设置字体
                //         fontSize: '15',
                //         fontWeight: 'bold'
                //     }
                // },
                data:[
                  {name:'邮件营销',value:210},
                  {name:'联盟广告',value:234},
                  {name:'视频广告',value:135},
                  {name:'搜索引擎',value:148}
                ],
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                }
            }]
        }
        myChart.setOption(options)
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