<template>
  <div class="DataAnalyse">
    
    <div class="container-main">
      <!-- 面包屑导航开始 -->
      <div class="layout-breadcrumb">
        <Breadcrumb style="background: #EEEEEE; margin-top:10px; padding:10px 20px;">
          <Breadcrumb-item href="/home">首页</Breadcrumb-item>
          <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
          <Breadcrumb-item >{{title}}</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <!-- 面包屑导航结束 -->


      <div class="Detail" style="margin-top:20px;" v-if="this.$route.params.typeid == 1">
        <div class="block-l content" id="block-l" style="width: 100%; border:none;">
           <div class="block baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 100%;">
              <div style="width: 20%; display: inline-block; border: 1px solid #DDDEE1; float:left; padding:5px;padding:10px; height: 810px;">
                  <Tree :data="data" show-checkbox style="overflow:auto; height: 790px;" @on-check-change="choiceAll"></Tree>
              </div>
              <div style="width: 79%; display: inline-block; border: 1px solid #DDDEE1; float:left; padding:10px; margin-left:5px;">

                  <!-- <p style="font-weight: bold; background:#026EB8;color:white">&nbsp;&nbsp;年份：</p> -->
                  <!-- <CheckboxGroup v-model="year">
                      <Checkbox v-for="item in getYearData" :label="item.Identification">{{item.Name}}</Checkbox>
                  </CheckboxGroup> -->
                   <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从 -->
                  <!-- <Select v-model="year" filterable style="width:40%; margin: 10px;">
                      <Option value="">请选择</Option>
                      <Option v-for="item in getYearData" :value="item.Identification" :key="item.Identification">{{ item.Name }}</Option>
                  </Select>
                  到
                  <Select v-model="year2" filterable style="width:40%; margin: 10px;">
                      <Option value="">请选择</Option>
                      <Option v-for="item in getYearData" :value="item.Identification" :key="item.Identification">{{ item.Name }}</Option>
                  </Select> -->

                  <!-- <p style="font-weight: bold; background:#026EB8;color:white">&nbsp;&nbsp;国家：</p> -->

                  <div class="AreaList" v-bind:class="{active: arealist_active}">
                    <!-- <a slot="extra" @click.prevent="toggleAllArea">
                      <Icon slot="extra" class="icon-toggle" type="chevron-down"></Icon>  
                    </a> -->
                    <div class="list">
                      <div class="bold navtext" key="0" :class="{nav:curr==0}"><a v-on:click="getYear(0, '全部', '')">全部</a></div>
                      <div class="navtext" v-for="item in countrylist" :key="item.Letter" :class="{nav:item.Letter == curr}"><a v-on:click="getYear(item.Letter, item.Letter, item.Letter)">{{item.Letter}}</a></div>
                    </div>
                  </div>

                  <CheckboxGroup v-model="country">
                      <Checkbox v-for="item in getCountryData" :label="item.ID">{{item.Name}}</Checkbox>
                  </CheckboxGroup>
                  <span v-if="getCountryData.length>0" class="clear-selected type1" @click="clearSelected()">取消已选国家</span><br>
                  <!-- <i-button type="success" slot="append" icon="ios-search" @click="search()"></i-button> -->
                  <Select v-model="year" filterable style="width:25%; margin: 10px;">
                      <Option value="">请选择</Option>
                      <Option v-for="item in getYearData" :value="item.Identification" :key="item.Identification">{{ item.Name }}</Option>
                  </Select>
                  到
                  <Select v-model="year2" filterable style="width:25%; margin: 10px;">
                      <Option value="">请选择</Option>
                      <Option v-for="item in getYearData" :value="item.Identification" :key="item.Identification">{{ item.Name }}</Option>
                  </Select>

                  <i-button type="primary" long @click="search()" style="width: 120px; margin-top: 5px; float:right; margin-right: 3%; background: #026EB8;">检索</i-button>
              </div>
              <div class="chart-list" style="width: 79%; display: inline-block; float:left; margin-left: 5px; margin-top: 5px;overflow:auto;border-right:1px solid #E9EAEC">
                  
                  <!-- 折现图容器 -->
                  <div id="myChart" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <!-- 堆叠图 -->
                  <div id="myChart2" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <!-- 散点图 -->
                  <div id="myChart3" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <!-- 世界地图 -->
                  <div id="world-map" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <!-- 饼图 -->
                  <div id="chart_pie_0" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <div id="chart_pie_1" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <div id="chart_pie_2" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>
                  <div id="chart_pie_3" style="height: 500px; width: 100%; margin-top: 30px; border: 1px solid #E9EAEC;display: none;"></div>

                  <h3>{{name}}</h3>
                  <Table border :columns="tableColumns" :data="tableData" style="width:100%; margin-top: 20px;" height="500"></Table>
              </div>
              
           </div>
        </div>
      </div>

      <div class="Detail" style="margin-top:20px;" v-if="this.$route.params.typeid == 2">
          <div class="block-l content" id="block-l" style="width: 100%; border:none;">
              <Select v-model="oneMenuData" filterable size="large" @on-change="changeOneMenu()" style="width:25%; margin-left:10%; margin-top:20px;">
                  <Option v-for="item in oneMenu" :value="item.Root" :key="item.value">{{ item.name }}</Option>
              </Select>
              <Select v-model="twoMenuData" filterable size="large" @on-change="changeTwoMenu()" style="width:25%; margin-top:20px;">
                  <Option v-for="item in twoMenu" :value="item.Sub1" :key="item.value">{{ item.name }}</Option>
              </Select>
              <Select v-model="threeMenuData" filterable size="large" style="width:25%; margin-top:20px;" @on-change="changeThree()">
                  <Option v-for="item in threeMenu" :value="item.Sub2" :key="item.value">{{ item.name }}</Option>
              </Select>
              <CheckboxGroup v-if="product_countrylist.length>0" v-model="product_countryselected" style="margin: 10px 30px;">
                  <Checkbox v-for="item in product_countrylist" v-if="item.Name!='时间'&&item.Name!='全球'" :label="item.Name">{{item.Name}}</Checkbox>
              </CheckboxGroup>
              <span v-if="product_countrylist.length>0" class="clear-selected type2" @click="clearSelected()">取消已选国家</span>
              <Button type="primary" style="float: right; margin:10px 30px;background:#026EB8" @click="changeThreeMenu()">检索</Button>

              <div class="content1" style="margin-top:20px;  width:100%; overflow-y:auto;">
                  <!-- echarts图表 -->
                  <div id="product_chart" style="height: 500px; width: 100%; margin-bottom: 20px; border: 1px solid #E9EAEC;display: none;"></div>
                 <!-- <ul>
                    <router-link class="link-text" :key="item.Identification" :to="{name:'policyalldetail', params:{typeid:type, articleid:item.Identification, unique_code: item.OnlyIndex}}" v-for="item in TSreport">
                      <li>
                          <div style="width: 100%;">
                            <h4 style="color:#026EB8">{{item.Title}}</h4> 
                          </div>
                      </li>
                    </router-link>
                  </ul> -->
                  <Table border :columns="tableColumns2" :data="tableData2" width="100%" height="600"></Table> <!--  :style="{width: width}" -->
              </div>

          </div>
      </div>



    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import nameMap from '../nameMap'
import setup_pie from '../setup_pie'
import charttype from '../charttype'
import '../../node_modules/echarts/map/js/china.js'
require('echarts/map/js/world.js')

  // 左侧树形菜单点击文字展开/收起
  $(function(){
    $(document).on('click', '.ivu-tree-title', function(){
      if($(this).siblings('.ivu-tree-arrow').children('.ivu-icon-arrow-right-b')){
        $(this).siblings('.ivu-tree-arrow').click();
      }
    });
  });

  function drawLine(ZB, NF, dataArr, title, id_chart){
      let yAxis_Arr = [];
      for(let index in ZB){
        // let yAxis_add = false;
        let yAxis_min = Math.floor(Math.min.apply(Math,dataArr[index].data));
        let yAxis_max = Math.ceil(Math.max.apply(Math,dataArr[index].data));

        // if(index == 0){
        //   yAxis_add = true;
        //   dataArr[index].yAxisIndex = index;
        // }
        // else{
        //   for(let i=0; i<yAxis_Arr.length; i++){
        //     if(yAxis_max/yAxis_Arr[i].max>1000 || yAxis_max/yAxis_Arr[i].max<0.001){
        //       yAxis_add = true;
        //       dataArr[index].yAxisIndex = yAxis_Arr.length;
        //     }
        //     else{
        //       yAxis_add = false;
        //       dataArr[index].yAxisIndex = i;
        //       break;
        //     }
        //   }
        // }

        // if(yAxis_add){
          yAxis_Arr.push({
            type: 'value',
            name: ZB[index],
            position:'left',
            offset: 60*index,
            nameRotate:90,
            nameGap:30,
            min: yAxis_min,
            max: yAxis_max,
            nameLocation: 'middle',
            axisLabel: {
                formatter: function(value, index){
                    if(yAxis_max/1000000 > 1){
                        value=parseInt(value/1000)+'k'
                    }
                    return value
                },
                rotate: 60,//x轴斜放
            }  
          });
        // }
      }

      if(yAxis_Arr.length == 0){
        yAxis_Arr = [{type: 'value'}];
      }
      
      // 基于准备好的dom，初始化echarts实例
      //let myChart = this.$echarts.init(document.getElementById('myChart'))
      let myChart = echarts.init(document.getElementById(id_chart || 'myChart'));
      myChart.clear();
      // 绘制图表
      let option = {
          title: {
              text: title
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              },
          },
          legend: {
              data: ZB,
              top: 30
          },
          toolbox: {
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          grid: {
              // left: 30*(yAxis_Arr.length-1) + 10,
              left: '5%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : {
              type : 'category',
              boundaryGap : false,
              data : NF,
              axisTick: {
                  alignWithLabel: true
              }
          },
          yAxis : yAxis_Arr,
          series : dataArr
      };
      myChart.setOption(option);
  }

  function drawLine2(ZB, NF, dataArr, title) {
      let myChart = echarts.init(document.getElementById('myChart2'));
      myChart.clear();
      // 绘制图表
      myChart.setOption({
          title: {
              text: title
          },
          tooltip : {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          legend: {
              data: ZB
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'value',
              }
          ],
          yAxis : [
              {
                  type : 'category',
                  data : NF
              }
          ],
          series : dataArr
      });
  }

  function drawLine3(hours, days, data, title, id_chart) { //年份  国家  数据  标题
      let data_max = data[0][2];
      for(let i in data){
        if(data[i][2] > data_max){
          data_max = data[i][2]*1;
        }
      }

      let myChart = echarts.init(document.getElementById(id_chart || 'myChart3'));
      myChart.clear();
      // 绘制图表
      myChart.setOption({
          title: {
              text: title,
          },
          legend: {
              data: ['Punch Card'],
              left: 'right'
          },
          tooltip: {
              position: 'top',
              formatter: function (params) {
                  return params.value[2] + ' in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
              }
          },
          grid: {
              left: 2,
              bottom: 10,
              right: 20,
              containLabel: true
          },
          xAxis: {
              type: 'category',
              data: hours,
              boundaryGap: false,
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: '#999',
                      type: 'dashed'
                  }
              },
              axisLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'category',
              data: days,
              axisLine: {
                  show: false
              }
          },
          series: [{
              name: 'Punch Card',
              type: 'scatter',
              symbolSize: function (val) {
                  return (val[2]/data_max)*30;
              },
              data: data,
              animationDelay: function (idx) {
                  return idx * 5;
              }
          }]
      });
  }

  function load_world_map(max, data, title){
      var mapData = [];
      $.each(data, function(i, obj){
          var name = obj.name;
          for(var key in nameMap) {
              if( nameMap[key] == obj.name){
                  name = key;
              }
          } 

          mapData.push({
              name : name,
              value : obj.value,
              tooltip : {
                  show: true, //不显示提示标签
                  formatter: '{b}', //提示标签格式
                  backgroundColor:"green",
                  formatter : nameMap[name] + ':' + obj.value
              }
          });
      })

      var option = {
          title: {
              text: title,
          },
          tooltip: {
              show: false, //不显示提示标签
              formatter: '{b}', //提示标签格式
              backgroundColor:"blue",
              formatter : nameMap[name],
              // trigger: 'item'
          },
          visualMap: {
              show: true,
              min: 0,
              max: max,
              left: 'left',
              top: 'bottom',
              text: ['高','低'], // 文本，默认为数值文本
              calculable: true,
              seriesIndex:0,   //多个series组成元素，此颜色配置范围只用于series[0]
              inRange: {
                  color: ['lightskyblue', 'yellow', 'orange']
              }
          },
          geo: {
              map: 'world',
              show: true,
              zoom: 1,
              label:{
                  normal: {
                      show:false
                  },
                  emphasis: {
                      show:true
                  }
              },
              roam: true,
              selectedMode : 'single'
          },
          series: [{
              name: '世界地图',
              type: 'map',
              map: 'world',
              roam: true,
              zoom: 1.4,
              label:{
                  normal: {
                      show:false,
                  },
                  emphasis : {
                      show : true,
                      formatter: function (params) {
                          return nameMap[params.name];   //此处代替nameMap
                      }
                  }
              },
              // nameMap : nameMap, //使用nameMap时，label显示的会不准确，不在地图中间
              data: mapData,
              geoIndex:0,
          }]
      };

      var worldMapChart = echarts.init(document.getElementById('world-map'));
      worldMapChart.clear();
      worldMapChart.setOption(option);
  };

  // 绘制饼状图
  function drawPie(index_pie, title, legendlist, datalist){
      let myChart = echarts.init(document.getElementById('chart_pie_'+index_pie));
      let option = {
          title : {
              text: title,
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{d}%"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              data: legendlist
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  // data:[
                  //     {value:335, name:'直接访问'},
                  //     {value:310, name:'邮件营销'},
                  //     {value:234, name:'联盟广告'},
                  //     {value:135, name:'视频广告'},
                  //     {value:1548, name:'搜索引擎'}
                  // ],
                  data: datalist,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };

      myChart.clear();
      myChart.setOption(option);
  }

  // 绘制时间线世界地图
  function drawTimelineMap(type_map, yearlist, datalists, data_min, data_max){
      let options = [];
      for(let i in datalists){
        options.push({
          title: {
              text: yearlist[i],
          },
          series: {
            data: datalists[i]
          }
        });
      }

      let myChart = echarts.init(document.getElementById('product_chart'));
      myChart.showLoading();
      let option = {
          baseOption: {
              timeline: {
                  axisType: 'category',
                  left: 100,
                  right: 50,
                  autoPlay: true,
                  currentIndex: 0,
                  // playInterval: 1000,
                  data: yearlist
              },
              tooltip: {
                  trigger: 'item',
                  // formatter: '{b}<br/>{c}'
                  formatter: function(params){
                      if(params.componentType == 'series'){
                        if(isNaN(params.value)){
                          return params.name;
                        }else{
                          return params.name+'<br/>'+params.value;
                        }
                      }
                      else if(params.componentType == 'timeline'){
                        return params.name;
                      }
                  }
              },
              toolbox: {
                  show: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                      // dataView: {readOnly: false},
                      restore: {},
                      saveAsImage: {}
                  }
              },
              visualMap: {
                  min: data_min,
                  max: data_max,
                  text: ['高','低'],
                  realtime: false,
                  calculable: true,
                  inRange: {
                      color: ['lightskyblue','yellow', 'orangered']
                  }
              },
              series: [
                  {
                      name: '世界地图',
                      type: 'map',
                      map: type_map,
                      roam: true,
                      // zoom: 1.4,
                      label:{
                          normal: {
                              show:false,
                          },
                          emphasis : {
                              show : false,
                          }
                      },
                      nameMap: nameMap,
                      geoIndex: 0,
                  }
              ]
          },
          options: options
      }

      myChart.clear();
      myChart.hideLoading();
      myChart.setOption(option);
  }


export default {

  name: 'DataAnalyseTable',
  data: function(){
  	return {
      'location': window.location,
      'data': [], 

      'getCountryData': [],    //生成国家复选框数据  
      'countrylist': '',       //国家查询首字母
      'getYearData': [],       //生成年份复选框数据

      'checkTreeData': [],     //树勾选后的数据
      'country': [],  //勾选国家数据
      'year': '',     //勾选开始年份数据
      'year2': '',     //勾选结束年份数据

      'tableColumns': [],
      'tableData': [],  //农业基础数据
      'tableColumns2': [],
      'tableData2': [],   //农产品数据

      'oneMenu': [],
      'twoMenu': [],
      'threeMenu': [],
      'oneMenuData': [],

      'twoMenuData': [],
      'threeMenuData': [],
      'TSreport': [],
      'width': '',

      'startOne': '',
      'startTwo': '',
      'startThree': '',

      'flag': false,
      'width_params': false,
      'name': '',
      'name_indicator': '',
      'title': '',

      'area_id_active': 0,
      'arealist_active': false,
      'curr': 0,
      'areaname_selected': '',

      'product_countrylist': [], //农产品分析-全球表中包含的国家列表
      'product_countryselected': [],  //农产品分析-多选项中选中的国家里
  	}
  },
  mounted: function(){
    const _this = this;
    if(_this.$route.params.typeid == 1){
        _this.getTree();
        _this.getYear(0, '全部', '');
        _this.getCountry();
        _this.getCountryList();
        _this.title = '农业基础数据';

        setTimeout(function(){
          _this.checkTreeData = [20];
          _this.country = [9,57,11,5,27,46,26,66,49,65,36,48,6];
          _this.year = 57;
          _this.search();
        }, 3000);
    }else {
        if('product' in _this.$route.params || 'country' in _this.$route.params){
          _this.width_params = true;
        }

        _this.title = '农产品数据';
        _this.getOneMenu();
        setTimeout(function(){
          _this.getTwoMenu(_this.startOne);
        }, 1000)
        setTimeout(function(){
          _this.twoMenuData = _this.startTwo = '2.产量';
          _this.getThreeMenu(_this.startTwo);
        }, 1500)
        setTimeout(function(){
          // _this.changeThreeMenu2();
          _this.changeThreeMenu();
        }, 2000)
    }
  },
  methods: {
    
    'getCountryList': function() {   //GetCountryMapLetter
        const _this = this;
        const getcountrylist = _this.global.$post({
          '_this': _this,
          //'url': _this.global.API.CountryManageService.GetCountryMapLetter,  
          'url': _this.global.API.dataAndAnalysis.GetCountryMapLetter,  
          'f_resolve': function(data){
              //console.log('************我是首字母*************',data);
              _this.countrylist = data; 
          }
        });
    },
    'getOneMenu': function() {   //获取农产品数据一级目录
        const _this = this;
        const getOneMenu = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.dataAndAnalysis.Getroot,  
          'f_resolve': function(data){
              //console.log('*************************',data);
              _this.oneMenu = data;
              for(let i in data){
                if(data[i].name == _this.$route.params['product']){
                  _this.startOne = data[i].Root;
                  _this.oneMenuData = data[i].Root;
                  return;
                }
              }
              _this.startOne = data[0].Root;
              _this.oneMenuData = data[0].Root;
          }
        });
    },
    'changeOneMenu': function() {    //选择第一个复选框获取第二个下拉框内容
        const _this = this;
        // if(_this.flag){
          _this.getTwoMenu(_this.oneMenuData);
        // }
    },
    'getTwoMenu': function(data) {   //获取农产品数据二级目录
        const _this = this;
        _this.twoMenu = [];
        _this.twoMenuData = '';
        const getTwoMenu = _this.global.$post({
          '_this': _this,
          'data': {root: data},
          'url': _this.global.API.dataAndAnalysis.GetSub1,  
          'f_resolve': function(data){
              //console.log('*************************',data);
              _this.twoMenu = data;
              if(_this.width_params){
                for(let i in data){
                  if(data[i].name == '产量'){
                    _this.twoMenuData = data[i].Sub1;
                    return;
                  }
                }
              }
              else{
                _this.twoMenuData = data[0].Sub1
              }
              //_this.getThreeMenu(data);
          }
        });
    },
    'changeTwoMenu': function() {    //选择第一个复选框获取第二个下拉框内容
        const _this = this;
        // if(_this.flag){
          _this.threeMenuData = [];
          _this.threeMenu = [];
          _this.getThreeMenu(_this.twoMenuData);
        // }
    },
    'changeThree': function() {
        const _this = this;
        _this.product_countrylist = [];
        _this.product_countryselected = [];
        if(_this.twoMenuData.indexOf('平衡表')<0 && _this.threeMenuData.indexOf('全球')>=0){
            const getCountrylist = _this.global.$post({
              'data': {
                  draw: 0,
                  start: 0,
                  length: 100,
                  retrievalInfo: JSON.stringify({root: _this.oneMenuData,Sub1: _this.twoMenuData,Sub2: _this.threeMenuData})
                },
              '_this': _this,
              'url': _this.global.API.dataAndAnalysis.GetColumns,  
              'f_resolve': function(data){
                  _this.product_countrylist = data;
                  if(_this.width_params && 'country' in _this.$route.params){
                    _this.product_countryselected = [_this.$route.params['country']];
                  }
              }
            });
        }
    },
    'getThreeMenu': function(data) {   //获取农产品数据三级目录
        const _this = this;
        const getThreeMenu = _this.global.$post({
          '_this': _this,
          'data': {root: _this.oneMenuData, sub1: _this.twoMenuData},
          'url': _this.global.API.dataAndAnalysis.GetSub2,  
          'f_resolve': function(data){
              //console.log('*************************',data);
              _this.threeMenu = data;
              _this.threeMenuData = data[0].Sub2;
          }
        });
    },
    'changeThreeMenu': function(){    //获取特色报告

        document.getElementById('product_chart').style.display = 'none';

        const _this = this;
        let retrievalInfo_column = _this.product_countryselected.length>0 ? '时间,'+_this.product_countryselected.join() : '';
        const getMenuData = _this.global.$post({
          'data': {
              draw: 0,
              start: 0,
              length: 100,
              retrievalInfo: JSON.stringify({'root': _this.oneMenuData,'Sub1': _this.twoMenuData,'Sub2': _this.threeMenuData, 'column':retrievalInfo_column})
            },
          '_this': _this,
          'url': _this.global.API.dataAndAnalysis.Gettable,
          'f_resolve': function(data){
              if(_this.width_params){
                _this.width_params = false;
              }
              //_this.TSreport = JSON.parse(data.data);
              let newData = JSON.parse(data.data);
              console.log('*************************', newData);
              for(let i=0; i<newData.length; i++) {
                delete newData[i].sys_id;
                delete newData[i].xh;
              }
              let title = _this.oneMenuData.split('.')[1]+'&'+_this.twoMenuData.split('.')[1]+'&'+_this.threeMenuData.split('.')[1];
              if(_this.twoMenuData.indexOf('平衡表')<0){
                if('时间' in newData[0]){
                  newData.sort(function(a, b){
                    return a['时间']>b['时间'] ? 1 : -1;
                  });
                }
                let type_chart = '';
                let key_charttype = _this.oneMenuData+';'+_this.twoMenuData+';'+_this.threeMenuData;
                if(_this.threeMenuData.indexOf('全球')>=0){
                  type_chart = 'world';
                }
                else if(key_charttype in charttype && charttype[key_charttype]['type_chart']=='china'){
                  type_chart = 'china';
                }
                else if(key_charttype in charttype && charttype[key_charttype]['type_chart']=='line'){
                  type_chart = 'line';
                }
                if(type_chart=='world' || type_chart=='china'){
                  let yearlist = [];
                  let columnlist = [];
                  let datalists = [];
                  let data_min = 0;
                  let data_max = 0;

                  for(let i in newData){
                    yearlist.push(newData[i]['时间']);
                    let datalist = [];
                    let ii = 0;
                    for(let k in newData[i]){
                      if(k!='时间' && k!='全球' && k!='全国'){
                        if(retrievalInfo_column == ''){
                          datalist.push({
                            'name': k,
                            'value': newData[i][k]
                          });
                        }
                        else{
                          if(i==0){
                            columnlist.push(k);
                          }
                          datalists.push([i*1, ii, newData[i][k]]);
                          ii++;
                        }
                        if(newData[i][k]*1 < data_min){
                          data_min = newData[i][k]*1;
                        }
                        if(newData[i][k]*1 > data_max){
                          data_max = newData[i][k]*1;
                        }
                      }
                    }
                    if(retrievalInfo_column == ''){
                      datalists.push(datalist);
                    }
                  }
                  if(retrievalInfo_column == ''){
                    // 绘制地图
                    document.getElementById('product_chart').style.display = 'block';
                    drawTimelineMap(type_chart, yearlist, datalists, data_min, data_max);
                  }
                  else{
                    // 绘制散点图
                    console.log(datalists)
                    document.getElementById('product_chart').style.display = 'block';
                    drawLine3(yearlist, columnlist, datalists, title, 'product_chart')
                  }
                }
                else if(type_chart == 'line'){
                  // 绘制折线图
                  let yAxislist = [_this.twoMenuData.split('.')[1]];
                  let yearlist = [];
                  let datalist = [];
                  for(let i in newData){
                    yearlist.push(newData[i]['时间']);
                    for(let k in newData[i]){
                      if(k=='全国' || k=='全联盟' || k=='全球'){
                        datalist.push(newData[i][k]*1);
                      }
                    }
                  }
                  document.getElementById('product_chart').style.display = 'block';
                  drawLine(yAxislist, yearlist, [{type:'line', data: datalist}], title, 'product_chart');
                }
              }

              // 填充数据表数据
              if('时间' in newData[0]){
                newData.sort(function(a, b){
                    return a['时间']>b['时间'] ? -1 : 1;
                });
              }
              let Columns1 = ']';
              let Columnsobj = '[';
              
              let num = '';
              for(let key in newData[1]){
                  num ++;
                  let key1 = key;
                  if(key == '时间'){
                      Columnsobj += "{'title':'"+key1+"','key':'"+ key +"', 'width': 100, 'fixed': 'left'},"
                  }else {
                      Columnsobj += "{'title':'"+key1+"','key':'"+ key +"', 'width': 150},"
                  }
              }
              
              let a =  Columnsobj.substr(0, Columnsobj.length - 1);
              let b = a + Columns1;
              //console.log('@@@@@@@@@@@@', eval(b));
              //console.log('@@@@@@@@@@@@', num);
             // _this.width = num*78 + "px";   //改变表格的宽度
              _this.tableColumns2 = eval(b);
              _this.tableData2 = newData;
          }
        });
    },
    // 'changeThreeMenu2': function(data){    //获取特色报告
    //     const _this = this;
    //     _this.flag = true;
    //     const getMenuData = _this.global.$post({
    //       'data': {
    //           draw: 0,
    //           start: 0,
    //           length: 100,
    //           retrievalInfo: JSON.stringify({root: _this.oneMenuData,Sub1: _this.twoMenuData,Sub2: _this.threeMenuData})
    //         },
    //       '_this': _this,
    //       'url': _this.global.API.dataAndAnalysis.Gettable,  
    //       'f_resolve': function(data){
    //           //_this.TSreport = JSON.parse(data.data);
    //           //console.log('*************************',JSON.parse(data.data));

    //           let newData = JSON.parse(data.data);
    //           for(let i=0; i<newData.length; i++) {
    //             delete newData[i].sys_id;
    //             delete newData[i].xh;
    //           }
    //           let Columns1 = ']';
    //           let Columnsobj = '[';
              
    //           let num = '';
    //           for(let key in newData[1]){
    //               num ++;
    //               let key1 = key;
    //               if(key == 'xh'){
    //                  key1 = '序号'
    //               }
                  
    //               Columnsobj += "{'title':'"+key1+"','key':'"+ key +"'},"
    //           }
              
    //           let a =  Columnsobj.substr(0, Columnsobj.length - 1);
    //           let b = a + Columns1;
    //           //console.log('@@@@@@@@@@@@', eval(b));
    //           //console.log('@@@@@@@@@@@@', num);
    //           //_this.width = num*78 + "px";   //改变表格的宽度
    //           _this.tableColumns2 = eval(b);
    //           _this.tableData2 = newData;
    //       }
    //     });
    // },
    'choiceAll': function(data) {  //树空间选中事件
        const _this = this;
        let treeData = [];
        data.forEach(function(val) {
          treeData.push(val.Id);
        })
        _this.checkTreeData = treeData;
    },
    'getTree': function() {   //获取树
        const _this = this;
        const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.dataAndAnalysis.GetTargetMap,  
          'f_resolve': function(data){
              _this.traverseTree(data);
              _this.data = data;
          }
        });
    },
    // 'treeSelectChange': function(selectedList) {    //树节点点击事件
        // console.log('treeSelectChange', $(this).siblings(':first').hasClass('ivu-tree-arrow'))
        // if(selectedList.length > 0){
        //   let node = selectedList[selectedList.length - 1];
        //   node.expand = !node.expand;
        // }
    // },
    'traverseTree': function(node) {

      for (let i = 0; i < node.length; i++) {
        if (node[i].children) {
            // node[i].disableCheckbox = true;  //复选框禁选
            node[i].children = JSON.parse(node[i].children);

            this.traverseTree(node[i].children)
        }
        if(node[i].Id==1 || node[i].Id==8){
          node[i].expand = true;
        }
        if(node[i].Id == 20){
          node[i].checked = true;
        }
      }
    },
    'getYear': function(area_id, area_name, id) {   //获取国家
        const _this = this;
        _this.area_name = area_name;
        _this.area_con = id;
        _this.curr = area_id;
        _this.area_id_active = area_id;
        _this.areaname_selected = area_name;

        let idNew;
        if(typeof id == 'object'){
           idNew = id;
        } else {
          idNew = {"Letter": id}
        }

        const searchLiterature = _this.global.$post({
          '_this': _this,
          'data': idNew,
          'url': _this.global.API.dataAndAnalysis.GetCountryMap,  
          'f_resolve': function(data){
              console.log('%%%%我是国家%%%%', data );


              _this.getCountryData = data;
          }
        });
    },

    /*'getCountrylist': function(area_id, area_name, id, len) {
        //console.log(id);
        const _this = this;
        _this.countrylist = this.countrylist;

        _this.area_name = area_name;
        _this.area_con = id;
        _this.curr = area_id;
        //console.log(typeof id);
        let idNew;
        if(typeof id == 'object'){
           idNew = id;
        } else {
          idNew = {"Letter": id}
        }
       
        //console.log(idNew);

        this.area_id_active = area_id;
        this.areaname_selected = area_name;
        this.curr = area_id;

        // 获取所有国家
        const prommise_getAreaList1 = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.CountryManageService.GetAllCountry,
          'data': {
            draw: 0,
            start: 0,
            length: len,
            retrievalInfo: JSON.stringify(idNew)
          },
          'f_resolve': function(data){
              let datalist = JSON.parse(data.data);

              for(var i=0; i<datalist.length; i++) {
                  datalist[i].name = datalist[i].NameOfficialZH;
                  datalist[i].value = datalist[i].ID;
              }

              _this.countrylist = datalist;
              //console.log(datalist);
              
              if(datalist.length < 10){
                  _this.active_more = false;
              }else{ 
                  _this.active_more = true;
              }
                  
              }
          
        });
    },*/

    'getCountry': function() {
        const _this = this;
        const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.dataAndAnalysis.GetYearMap,  
          'f_resolve': function(data){
              _this.getYearData = data;
              //console.log('%%%%%%%%%%%%%%%%', data );
          }
        });
    },
    'getArray': function (data,name){
        const _this = this;
        for (var i in data) {
            //console.log('i',i);
            //console.log('datai',data[i].children);
            if (data[i].Id == name) {
                _this.name = data[i].title;
                _this.name_indicator = data[i].title;
                break;
            } else {
                _this.getArray(data[i].children, name);
            }
        }
    },
    'search': function() {
      const _this = this;
      //console.log(_this.year1);
      //console.log(_this.country);
      //console.log(_this.checkTreeData);
      if(_this.year2 == _this.year){
          _this.year2 = '';
      }
      if(_this.year2 == ''){
          _this.name = _this.year + 1959 + '年';
      }
      if(_this.country.length == 1){
          for(let i=0; i<_this.getCountryData.length; i++){
             if(_this.getCountryData[i].ID == _this.country[0]){
                _this.name = _this.getCountryData[i].Name;
             }
          } 
      }
      if(_this.checkTreeData.length == 1){
          //console.log(_this.data)
          _this.getArray(_this.data, _this.checkTreeData[0]);
      }
      //sconsole.log( '&&&&&&&&&&&&&&&&' ,_this.year2);
      if(  _this.year2 == '' || _this.country.length == 1 || _this.checkTreeData.length == 1) {
          if(_this.country.length==1 && _this.year!='' && _this.year2!='' && _this.checkTreeData.length > 3){
              _this.$Modal.warning({
                  title: '提示',
                  content: '当已选择一个国家和多个年份时，所选指标不能超过3个'
              });
              return;
          }
          else if(_this.year!='' && _this.year2!='' && _this.checkTreeData.length==1 && _this.country.length>4){
              _this.$Modal.warning({
                  title: '提示',
                  content: '当已选择一个指标和一个年份时，所选国家不能超过4个'
              });
              return;
          }
          else if(_this.year2=='' && _this.country.length==1 && _this.checkTreeData.length>5){
              _this.$Modal.warning({
                  title: '提示',
                  content: '当已选择一个国家和一个年份时，所选指标不能超过5个'
              });
              return;
          }

          document.getElementById('myChart2').style.display = 'none';
          document.getElementById('myChart').style.display = 'none';
          document.getElementById('myChart3').style.display = 'none';
          document.getElementById('world-map').style.display = 'none';
          document.getElementById('chart_pie_0').style.display = 'none';
          document.getElementById('chart_pie_1').style.display = 'none';
          document.getElementById('chart_pie_2').style.display = 'none';
          document.getElementById('chart_pie_3').style.display = 'none';

          const searchLiterature = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.dataAndAnalysis.GetDataAnalyzeMap, 
            'data': {
                draw: 0,
                start: 0,
                length: 1000,
                cid: _this.country.join(),
                yid: (_this.year2 == '' ?  _this.year : (_this.year+','+_this.year2) ),
                tid: _this.checkTreeData.join()
            }, 
            'f_resolve': function(data){
                //生成表格
                let newData = JSON.parse(data.data) 
                //console.log('*************************', newData);    //获取到的数据
                let Columns1 = ']';
                let Columnsobj = '[';
                let indicator = [];  //左边树选择指标
                for(let key in newData[1]){
                    if(key != 'yname') {
                        indicator.push(key);  //获取左边树选择指标
                    }
                    let key1 = key;
                    if(key == 'cname'){
                       key1 = '国家';
                    }
                    if(key == 'tname'){
                        key1 = '指标';
                    }
                    if(key == 'yname'){
                      key1 = '年份';
                    }
                    //if( key == 'cname' ){
                    //    Columnsobj += "{'title':'"+key1+"','key':'"+ key +"', 'width': 100, 'fixed': 'left'},"
                    //} else {
                        Columnsobj += "{'title':'"+key1+"','key':'"+ key +"', 'width': 150},"
                    //}
                }
                
                let a =  Columnsobj.substr(0, Columnsobj.length - 1);
                let b = a + Columns1;

                //console.log(eval(b));
                _this.tableColumns = eval(b);
                _this.tableData = newData;
                
                let yearArr = [];  //获取选择年
                let lineChartArr = [];  //各指标各年数据
                let countryArr = [];   //获取国家
                for(let i=0; i<indicator.length; i++) {
                    lineChartArr[i] = [];
                }
                
                newData.forEach(function(val){
                    for(let key in val){
                        if(key == 'yname'){
                            yearArr.push(val.yname);
                        }
                        if(key == 'cname') {
                          countryArr.push(val.cname);
                        }
                    }
                })

                for(let i=0; i<newData.length; i++) {
                    for(let key in newData[i]) {
                        for(let j=0; j<indicator.length; j++) {
                            if(key == indicator[j]){
                                lineChartArr[j].push( newData[i][key] )
                            }
                        }
                    }
                }
                // console.log('我是年份数据', yearArr);
                // console.log('我是指标数据', indicator);
                // console.log('我是国家数据', countryArr);
                console.log('88888888', lineChartArr);   //个指标各年数据
                let dataArr = [];
                for(let i=0; i<indicator.length; i++) {
                    let obj = {}
                    obj.type = 'line'
                    // obj.stack =  '总量'
                    // obj.areaStyle = {}
                    obj.name = indicator[i]
                    obj.data = lineChartArr[i]
                    obj.yAxisIndex = i*1
                    dataArr.push(obj);
                }
                
                //单选国家、多选指标和年代，生成折线图
                if(  _this.country.length == 1 && _this.checkTreeData.length>1 && _this.year2!=''){   //单选国家
                    //console.log('6666666666', dataArr);
                    document.getElementById('myChart').style.display = 'block';
                    drawLine(indicator, yearArr, dataArr, _this.name);
                }

                //单选年代指标，多选国家
                if( _this.year2 == '' && _this.checkTreeData.length == 1 ) {
                    let worldData = [];
                    for(let i=0; i<lineChartArr[1].length; i++) {
                        worldData.push({'name': lineChartArr[0][i], 'value': Number(lineChartArr[1][i]) });
                    }
                    let maxValue = Math.max(...lineChartArr[1]);
                    //console.log('我是世界地图数据', worldData);
                    //console.log('最大值', Math.max(...lineChartArr[1]));
                    document.getElementById('world-map').style.display = 'block';
                    load_world_map(maxValue, worldData, _this.name);
                }

                //单选年份、多选指标和国家，生成堆叠图、饼状图
                if(_this.year2 == '') {
                    let pielist = [];
                    let barlist = [];
                    if(_this.country.length==1){
                      let inmulti = {};
                      for(let i in lineChartArr[0]){
                        if(lineChartArr[0][i] in setup_pie){
                          if('key_multi' in setup_pie[lineChartArr[0][i]]){
                            let key_multi = setup_pie[lineChartArr[0][i]]['key_multi'];
                            if(key_multi in inmulti){
                              inmulti[key_multi]['legendlist'].push(setup_pie[lineChartArr[0][i]]['name_display']);
                              inmulti[key_multi]['datalist'].push({
                                'name': setup_pie[lineChartArr[0][i]]['name_display'],
                                'value': lineChartArr[1][i]*1
                              });
                              inmulti[key_multi]['value_amount'] += lineChartArr[1][i]*1;
                            }
                            else{
                              inmulti[key_multi] = {
                                'country': '',
                                'legendlist': [setup_pie[lineChartArr[0][i]]['name_display']],
                                'datalist': [{
                                  'name': setup_pie[lineChartArr[0][i]]['name_display'],
                                  'value': lineChartArr[1][i]*1
                                }],
                                'value_amount': lineChartArr[1][i]*1
                              };
                            }
                          }
                          else{
                            let pie_option = {
                              'country': '',
                              'legendlist': [setup_pie[lineChartArr[0][i]]['name_display'], setup_pie[lineChartArr[0][i]]['name_other_single']],
                              'datalist': [{
                                'name': setup_pie[lineChartArr[0][i]]['name_display'],
                                'value': lineChartArr[1][i]*1
                              },{
                                'name': setup_pie[lineChartArr[0][i]]['name_other_single'],
                                'value': 100-lineChartArr[1][i]*1
                              }]
                            };
                            pielist.push(pie_option);
                          }
                        }
                      }
                      for(let key in inmulti){
                        if(inmulti[key]['value_amount']*1 < 100){
                          inmulti[key]['legendlist'].push('其它');
                          inmulti[key]['datalist'].push({
                            'name': '其它',
                            'value': 100-inmulti[key]['value_amount']*1
                          });
                        }
                        pielist.push(inmulti[key]);
                      }
                    }
                    else if(_this.checkTreeData.length==1 && _this.name_indicator in setup_pie){
                      for(let i in _this.country){
                        pielist.push({
                          'country': lineChartArr[0][i],
                          'legendlist': [setup_pie[_this.name_indicator]['name_display'], setup_pie[_this.name_indicator]['name_other_single']],
                          'datalist': [{
                            'name': setup_pie[_this.name_indicator]['name_display'],
                            'value': lineChartArr[1][i]*1
                          },{
                            'name': setup_pie[_this.name_indicator]['name_other_single'],
                            'value': 100-lineChartArr[1][i]*1
                          }]
                        });
                      }
                    }
                    // console.log('pielist', pielist)

                    let dataArr2 = [];
                    for(let i=1; i<indicator.length; i++) {
                        let obj2 = {};
                        obj2.name = indicator[i];
                        obj2.type = 'bar';
                        obj2.stack = '总量';
                        obj2.label = { normal: { show: false,position: 'insideRight'} };
                        obj2.data = lineChartArr[i];
                        dataArr2.push(obj2);
                    }
                    //console.log('堆叠图', dataArr2);   //
  
                    document.getElementById('myChart2').style.display = 'block';
                    drawLine2(indicator, countryArr, dataArr2, _this.name);

                    for(let i in pielist){
                      // let keylist = [];
                      // let title = _this.country[0];
                      // let legendlist = [];
                      // let datalist = [];

                      // for(let ii in newData[0]){
                      //   keylist.push(ii);
                      // }
                      // for(let ii in newData){
                      //   let name = setup_pie[newData[ii][keylist[0]]].name_display;
                      //   legendlist.push(name);
                      //   datalist.push({
                      //     'name': name,
                      //     'value': newData[ii][keylist[1]]
                      //   });
                      // }
                      document.getElementById('chart_pie_'+i).style.display = 'block';
                      drawPie(i, pielist[i].country, pielist[i].legendlist, pielist[i].datalist);
                    }
                }

                //单选指标生成散点图
                else if( _this.checkTreeData.length == 1 ) {

                    let dataArr3 = [];
                    let checkedYear = indicator.slice(1);
                    //console.log('我是年份', checkedYear);
                    //console.log('我是newData',newData);
                    for(let i=0; i<newData.length; i++) {
                        //console.log('我是newData', newData[i])
                        for(let j=0; j<checkedYear.length; j++) {
                            let a =  checkedYear[j];
                            //console.log('aaaaa', typeof a);
                            //console.log('我是数据',newData[i][a]);
                            let objArr3 = [];
                            objArr3.push(j);
                            objArr3.push(i);
                            //console.log('&&&&&&&&&&&', objArr3);
                            //console.log('**********', newData[i].checkedYear[j])
                            objArr3.push(newData[i][a]);
                            
                            dataArr3.push(objArr3);
                        }
                    }
                    //console.log('散点图', dataArr3);
                    document.getElementById('myChart3').style.display = 'block';
                    drawLine3(checkedYear, countryArr, dataArr3, _this.name);
                }
            }
          });
      }else{
          _this.$Modal.warning({
              title: '提示',
              content: '选项中必须有一项为单选'
          });
      }
    },
    'clearSelected': function(){
      if(this.$route.params.typeid == 1){
        this.country = [];
      }
      else if(this.$route.params.typeid == 2){
        this.product_countryselected = [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .DataAnalyse{
      margin-top: 0.5rem !important;
  }
  .title-img{
      display: none !important;
  }
}

.DataAnalyse{
    height: auto;
    overflow: hidden;
    padding: 6px;
  .tablelist{
    .item{
      padding: 10px;
      height: 300px;
    }

    .bg{
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid @border-color-split;
      cursor: pointer;
    }

    .link{
      display: block;
      width: 100%;
      height: 100%;
    }

    .title{
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 70px;
      padding-top: 30px;
      text-align: center;
      font-size: 16px;
      color: white;
      background: url(/static/img/bg_shadow.png) repeat-x;
    }
  }

  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;
    margin-top: 0px;

    .clear-selected{
      font-size: 12px;
      text-decoration: underline;
      color: red;
      cursor: pointer;

      &.type2{
        margin-left: 30px;
      }
    }

    .content1{
      padding: 5px 30px;
      ul{
        list-style: none;
        li{
          cursor: pointer;
          height: 30px;
          border-bottom: 1px dashed #E6E7E9;
          div{
            height: 30px;
            line-height:30px;
            padding: 0px;
            h4{
              text-align: left;
              padding-left: 10px;
            }
          }
          &:hover{
            background: @table-td-hover-bg;
          }
        }
      }
    }


    .block1{
      overflow: hidden;
    }
    .changeHeight{
      width: 100%; 
      height: 25px; 
      text-align: center; 
      font-size: 14px; 
      display: block;
      border-top: 1px dashed #E6E7E9;
      margin-top: 10px;
    }


    .block-l{
      width: 980px;
      
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }
      .titleXG{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }
      .content{
        padding: 5px 30px;
        ul{
          list-style: none;
          li{
            cursor: pointer;
            height: 60px;
            border-bottom: 1px solid #E6E7E9;
            div{
              float:left;
              height: 60px;
              padding: 10px;
              h4{
                text-align: center;
              }
            }
            &:hover{
              background: @table-td-hover-bg;
            }
          }
        }
      }
    }

    .block-r{
      flex: 1;
      padding: 20px; 
    }
    
    .priview{
      width: 100%;
      height: 500px;
      max-height: 800px;
      overflow-y: scroll;
      border: none;
    }


    .product{
      .item{
        display: inline-block;

        &:nth-of-type(n+2){
          margin-left: 15px;
        }
      }
    }

    .position{

      .img{
        display: block;
        width: 100%;
        margin-top: 15px;
      }
    }
   
    .morestation{
      .sixtitle{
        float: left;
        text-align: center;
        cursor: pointer;
        height: 35px;
        position: relative;
        display: inline-block;
        padding:5px 15px;
        margin: 0;
        border:1px solid @border-color-base;
        /*border-radius: 10px;*/
        border-right: none; 
        font-weight: bold; 
      }
      ul li:last-child{
      border-right:1px solid #ddd;
      }
      .nav{
        background: #026eb8;
        a{
          color: #fff;
        }
      }
      .tabCon{
        margin-top: 20px;
      }
    }

    .literature{
      .item{
        display: block;
      }
    }

    .sidebar{
      position: fixed;
      width: 180px;
      bottom: 210px;

      .catalog{
        padding: 20px;
        background: @title-bg;

        .title{
            text-align: center;
          }

        .linklist{
          margin-top: 10px;
          color: @title-color;
          .nav{
            background: #026eb8;
            a{
              color: #fff;
            }
          }

          .item{
            display: block;
            padding: 2px 16px;
            cursor: pointer;
            text-align: center;

            a{
              display: inline-block;
              padding: 2px;

            }
          }
        }
      }

      .totop{
        position: relative;
        padding: 5px 0;
        text-align: center;
        background: @title-bg-dark;
        cursor: pointer;

        .text{
          margin-left: 5px;
        }
      }

      .share{
        position: relative;
        /*margin-top: 10px;*/
        text-align: center;
        vertical-align: middle;
        }
    }

    .AreaList{
      height: 35px;
      overflow: hidden;
      margin-top: 5px;
      margin-bottom: 5px;
      transition: all .3s;
      border: 1px solid #DDDDDD;

      &.active{
        height: auto;
        .icon-toggle{
          transform: rotate(180deg);
        }
      }

      .ivu-card-body{
        padding: 2px;
      }
      
      .ivu-btn-text{
        font-size: 12px;
        color: @title-color;

        &:hover{
          color: @primary-color;
        }
      }

      .list{
        font-size: 12px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        margin-left: 10px;

        .navtext{
          float: left;
          margin-right: 2px;
          margin-top: 5px;

          &.nav{
            background: @title-color;
            
            a{
              color: #fff;
            }
          }
        }
        a{
          display: inline-block;
          padding: 3px 10px;
        }
      }
    }
  }
}
</style>