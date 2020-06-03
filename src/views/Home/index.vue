<template>
<el-container>
<el-header style="height:40px">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#2a2a2a"
  text-color="#fff"
  active-text-color="#5CBCFF"
>
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">集成系统</el-menu-item>
  <el-menu-item index="3">物业管理系统</el-menu-item>
  <el-menu-item index="4">信息服务系统</el-menu-item>
</el-menu>
</el-header>
<el-main>
<div class="left clearfix">
<div class="event" style="color:#ffffff">异常事件　<span style="font-size:6px">Abnormal events</span></div>
<div class="list_one">
  <el-card class="card_one" style="color:#ffffff"><span style="font-size:8px">已结束事件</span><br><span style="font-size:6px;opacity:0.5;">Finished event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">2,120条></span></el-card>
  <el-card class="card_one" style="color:#ffffff">未开始事件<br><span style="font-size:6px;opacity:0.5;">Await event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">5,100条></span></el-card>
  <el-card class="card_one" style="color:#ffffff">进行中事件<br><span style="font-size:6px;opacity:0.5;">Ngoing event</span><span 
  style="float:right;
  margin-bottem:20px;
  font-size:7px">5,100条></span></el-card>
  <el-table
    :data="tableData">
    <el-table-column prop="date" label="发生时间" width="160"></el-table-column>
    <el-table-column prop="address" label="管理区"></el-table-column>
    <el-table-column prop="aboutevent" label="事件描述"></el-table-column>
    <el-table-column prop="play" label="操作"></el-table-column>
  </el-table>
<div class="event" style="color:#ffffff">工单分类　<span style="font-size:6px">Work order classification</span></div>
<div class="biao"></div>
<div class="event" style="color:#ffffff;">绿化占比　<span style="font-size:6px">Proportion of greening</span></div>
<div class="biao1"></div>
</div>
</div>
<div class="right clearfix" style="60%">
  <div class="sel">
  <el-button type="primary">
    政府系统数据<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  </div>
  <div class="top">
    <div class="left_box clearfix" style="margin-top:20px">
      <div class="event" style="color:#ffffff">入住情况　<span style="font-size:6px">Occupancy</span></div>
      <div class="first" style="position:relative">
        <div style="width:50%;height:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"><span style="width:70px;
        height:18px;
        font-size:35px;
        font-family:DIN;
        font-weight:500;">153,212</span><span style="display:block;
        width:120px;
        height:7px;
        text-align:right;
        font-size:7px;
        font-family:PingFang SC;
        font-weight:400;">全部人数</span></div>
        <div></div>
      </div>
      <div class="second">
        <div class="shang">
          <div style="float:left">
            <span style="
          display:block;
          width:56px;
          height:7px;
        margin:5% 0 15px 10%;
        font-size:5px;
        font-family:PingFang SC;
        font-weight:400;">外来人口</span>
        <span style="
        display:block;
        width:150px;
        height:7px;
        margin-left:10%;
        font-size:4px;
        font-family:Adobe Heiti Std;
        font-weight:normal;">External population</span>
          </div>
          
        <div style="
        display:inline-block;
        width:64px;
        height:26px;
        line-height:30px;
        margin-top:5%;
        margin-right:5%;
        padding-bottom:10%;
        box-sizing:border-box;
        float:right;
        font-size:18px;
        font-family:DIN;
        font-weight:500;">8663</div></div>
        <div class="xia" style="width:100%;height:80%;"></div>
      </div>
      <div class="third">
        <div class="shang">
          <div style="float:left">
            <span style="
          display:block;
          width:56px;
          height:7px;
        margin:5% 0 15px 10%;
        font-size:5px;
        font-family:PingFang SC;
        font-weight:400;">华侨</span>
        <span style="
        display:block;
        width:150px;
        height:7px;
        margin-left:10%;
        font-size:4px;
        font-family:Adobe Heiti Std;
        font-weight:normal;">Overseas Chinese</span>
          </div>
          
        <div style="
        display:inline-block;
        width:64px;
        height:26px;
        line-height:30px;
        margin-top:5%;
        margin-right:5%;
        padding-bottom:10%;
        box-sizing:border-box;
        float:right;
        font-size:18px;
        font-family:DIN;
        font-weight:500;">734</div></div>
        <div class="xia" style="width:100%;height:80%;"></div>
      </div>
    </div>
    <div class="right_box clearfix" style="float:right">
      <div class="event" style="color:#ffffff">社区活动　<span style="font-size:6px">Community activities</span></div>
      <el-table
    :data="listData"
    class="change_table"
    :header-row-class-name="headerStyle">
    <el-table-column prop="date" label="活动时间" width="140"></el-table-column>
    <el-table-column prop="num" label="参与人数"></el-table-column>
    <el-table-column prop="actname" label="活动名称"></el-table-column>
  </el-table>
    </div>
  </div>
  <div class="event1" style="color:#ffffff;">能源耗损　<span style="font-size:6px">Energy consumption</span></div>
  <div class="energy">
    <ve-line :data="LinechartData" :settings="LinechartSettings" :x-axis="LinexAxis"
    :y-axis="yAxis"></ve-line>
  </div>
  <div class="event" style="color:#ffffff">车位占有率　<span style="font-size:6px">Occupancy rate of parking space</span></div>
  <div class="car">
    <div><el-progress :text-inside="true" :stroke-width="34" :percentage="50" class="progress" color="#F19021" type="line">
    </el-progress></div>
    <div style="font-size:8px;width:90px;height:20px;line-height:20px;float:left;margin-left:25%;">剩余车位359</div>
    <div style="font-size:8px;width:90px;height:20px;line-height:20px;margin-right:10%;float:right;">全部车位1652</div>
    
  </div>
  <div class="car1" style="display:flex;height:89px;border-radius:15px;">
    <div class="one_b clearfix" 
    style="float:left;
    padding-top:10px;
    padding-left:5%;
    margin-right:10%;
    box-sizing:border-box;color:#ffffff;">
      <span 
      style="display:block;
      margin-top:10px;
      margin-bottom:5px;
      font-size:14px;
      font-family:Adobe Heiti Std;
      font-weight:normal;">16,000辆</span>
      <span 
      style="display:block;
      font-size:2px;
      font-family:PingFang SC;
      font-weight:400;">月租车数量</span>
    </div>
    <div class="two_b " style="width:15%;height=89px;">
      <ve-ring
:data="retained"
:legend-visible="false"
:settings="ringextend"
:colors="ringcolor"
:title="title"
class="huan"
></ve-ring>
      </div>
    <div></div>
    <div></div>
    
  </div>
  <div class="event" style="color:#ffffff">政务数量　<span style="font-size:6px">Number of government affairs</span></div>
  <div class="government">
    <ve-histogram 
    :data="chartData" 
    :settings="chartSettings" 
    :extend="chartExtend"
    :x-axis="xAxis"
    :y-axis="yAxis"
></ve-histogram>
</div>
</div>
</el-main>
</el-container>
</template>

<script>
export default {
data() {
  this.LinechartSettings = {
      stack: { '能源': ['电能', '水能'] },
      area: true
    },
   this.gradient = ["#5BA3ED", "#32E380"];
    // 环形图
    this.title = {
      text: "70%",
      x: "center",
      y: "center",
      itemGap: 20,
      textStyle: {
        color: "#ffffff",
        fontFamily: "微软雅黑",
        fontSize: 10,
        fontWeight: "bolder"
      }
    };
    (this.ringextend = {
      radius: ["40%", "50%"],
      label: {
        //去除饼图的指示折线label
        normal: {
          show: false,
          position: "inside"
        }
      },
      labelLine: {
        normal: {
          label: {
            show: true,
            formatter: "({d}%)"
          },
          labelLine: { show: true }
        }
      },
      // 全局字体样式
      textStyle: {
        color: "#ffffff"
      }
    }),
      // 环形图颜色
      (this.ringcolor = ["#C471F5", "#303841"]);
this.chartSettings = {
        showHistogram: ['政务数量'],
        
        
      },
this.chartExtend = {
  color:["#ffffff"],
  barWidth: "20%"
},
this.yAxis = [           
          {
             // 坐标轴名称的文字样式
                    nameTextStyle: {
                        padding: [0, 10, 0, 0]
                    },
                    yAxisName: ['数值'],
                    yAxisType:['KMB'],
                    // 坐标轴线设置
                    axisLine: {
                        show: true,
                        lineStyle: {
                          color: '#ccc'
                        }
                    },
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",//这里是改变字体颜色
                fontSize: 9 //字体大小
              }
            },
            axisLine: { 
              show: false,//是否显示Y轴线
              lineStyle: {
                color: "#202020",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }
        ];
        this.xAxis = [
          {
            data: ['2012','2013','2014','2015','2016','2017','2018']
            ,
            name: "日期",
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",
                fontSize: 9
              }
            },
            axisLine: { 
              show: true,//是否显示Y轴线
              lineStyle: {
                color: "#FFFFFF",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }
        ];
        this.LinexAxis = [
          {
            data: ['09:00','13:00','17:00','21:00','01:00','05:00']
            ,
            name: "日期",
            axisLabel: {
              show: true,
              textStyle: {
                color: "white",
                fontSize: 9
              }
            },
            axisLine: { 
              show: true,//是否显示Y轴线
              lineStyle: {
                color: "#FFFFFF",//Y轴线颜色
                width: 1,//线的大小
                type: "solid"//Y轴线的类型
              }
            },
          }
        ];
      return {
        activeIndex: '1',
        activeIndex2: '1',
         retained: {
        columns: ["留存", "未完成"],
        labelLine: {
          normal: {
            show: false
          }
        },
        rows: [{ 留存: 70, 未完成: 70 }, { 留存: 30, 未完成: 30 }]},
        LinechartData: {
        columns: ['时间', '电能', '水能'],
        rows: [
          { '时间': '09：00', '电能': 23393, '水能': 31093, },
          { '时间': '13：00', '电能': 26530, '水能': 38230, },
          { '时间': '17：00', '电能': 21923, '水能': 26523, },
          { '时间': '21：00', '电能': 17823, '水能': 25423, },
          { '时间': '01：00', '电能': 18792, '水能': 19492, },
          { '时间': '05：00', '电能': 24593, '水能': 34293, }
        ]
      },
        chartData: {
          columns:['date','政务数量'],
          rows: [
            { 'date': '2012', '政务数量': 9093,},
            { 'date': '2013', '政务数量': 19530,},
            { 'date': '2014', '政务数量': 25923,},
            { 'date': '2015', '政务数量': 22723,},
            { 'date': '2016', '政务数量': 5792,},
            { 'date': '2017', '政务数量': 14593,},
            { 'date': '2018', '政务数量': 20593,}
          ]
        },
        tableData: [{
          date: '2020-05-15 14：56',
          aboutevent: '乱踩花坛',
          address: '华茂悦峰',
        }, {
          date: '2020-05-10 15: 32',
          aboutevent: '偷井盖',
          address: '甬城楼',
        }, {
          date: '2020-05-09 15：32',
          aboutevent: '漏电',
          address: '金茂府',
        }, {
          date: '2020-05-05 12：20',
          aboutevent: '违章自建',
          address: '华侨城',
        }, {
          date: '2020-05-03 16：20',
          aboutevent: '树木枯死',
          address: '华侨城',
        }, {
          date: '2020-05-03 16：20',
          aboutevent: '损坏灯泡',
          address: '华侨城',
        }, {
          date: '2020-05-03 16：20',
          aboutevent: '打翻琉璃盏',
          address: '华侨城',
        }],
        listData:[{date:'2020-05-15 14:56',num:'32',actname:'厨艺比赛'},
        {date:'2020-05-10 15:32',num:'25',actname:'关爱老人'},
        {date:'2020-05-09 15:32',num:'65',actname:'我是小棋手'},
        {date:'2020-05-05 12:20',num:'65',actname:'健康讲座'},
        {date:'2020-05-03 16:20',num:'36',actname:'乒乓球比赛'},]
        
      };
},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      headerStyle ({row, column, rowIndex, columnIndex}) {
        return 'tableStyle'
      }
    }
}
</script>

<style lang="less" scoped>
*{
  color:#fff;
}
.left{
  width: 35%;
  float: left;
  margin-right: 37.5px;
}
.right{
  width: 60%;
  float: left;
}
.el-menu-demo{
  padding-left: 180px;
  box-sizing: border-box;
}
.el-menu.el-menu--horizontal{
  border:none;
}
.card_one{
  border:1px solid rgba(50,50,50,1);
  width:100%;
background:rgba(42,42,42,1);
border-radius:8px;
}
.change_table .el-row{
  background-color: rgba(42,42,42,1);
} 
 .tableStyle{
    background-color: #1989fa!important;
    color:#fff;
    font-weight:400;
  }

.biao{
  margin-top: 10px;
  margin-bottom: 30px;
  width:100%;
height:176px;
background:rgba(42,42,42,1);
border-radius:7px;
}
.biao1{
  margin-top: 7.5px;
  width:100%;
height:204.5px;
background:rgba(42,42,42,1);
border-radius:7px;
}
.sel{
  float: right;
  .el-button--primary{
    width: 131.5px;
    height: 17px;
    font-size: 7px;
    padding: 0;
    background-color:rgba(42,42,42,1);
    border-color:rgba(42,42,42,1);
    border-radius: 2px;
  }
  .el-icon--right{
    margin-left: 50px;
  }
}
.top{
  content: '';
    display: block;
    clear: both;
}
.left_box{
  width: 48%;
  float: left;
}
.first{
  margin-top: 10px;
  width:100%;
height:130px;
background:rgba(42,42,42,1);
border-radius:15px;
}
.second{
  margin-top: 10px;
  margin-right: 15px;
  float: left;
  width: 48%;
  height:140px;
  background:rgba(42,42,42,1);
border-radius:15px;
}
.third{
  margin-top: 10px;
  float: left;
  width: 48%;
  height:140px;
  background:rgba(42,42,42,1);
border-radius:15px;
}
.right_box{
  width: 48%;
  float: left;

}
.event1{
  margin-top: 350px;
}
.energy{
  margin-top:10px ;
  width:100%;
background:rgba(42,42,42,1);
box-shadow:0px 18px 30px 0px rgba(0, 0, 0, 0.05);
border-radius:8px;
}
.car{
  margin-top:10px ;
  margin-bottom:10px;
  width:100%;
  height:100px;
background:rgba(42,42,42,1);
border-radius:7px;
position: relative;

}

.progress{
  width: 80%;
  margin: 0 auto;
  line-height: 60px;
  background:rgba(42,42,42,1);
 /deep/ .el-progress-bar__outer{
    background-color: #3f3f3f;
  }
}

.car1{
  margin-bottom:10px;
  width:100%;
  height: 200px
  ;
background:rgba(42,42,42,1);
border-radius:7px;
}
.government{
  
  width:100%;
background:rgba(42,42,42,1);
box-shadow:0px 18px 30px 0px rgba(0, 0, 0, 0.05);
border-radius:8px;
}
</style>