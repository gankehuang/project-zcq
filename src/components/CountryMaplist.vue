<template>
  <div class="CountryMaplist">
    <!-- <div class="title-img" style="background: url(/static/img/CountryAndArea.jpg) no-repeat center; background-size: cover;"></div> -->  
    <router-link :to="'/country/list'" style="margin-left: 20%">
      <Poptip trigger="hover" content="点击切换到国家列表页查看各个国家详情" placement="right">
          <i-button id="chagelist">切换国家列表页</i-button>
      </Poptip>      
    </router-link>
    <!-- <div class="textname">国家与地区</div> -->
    <div id="world-map"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/map/js/world.js') 


function load_world_map(_this,max, data){
    //国家名称中英文对应关系
    var nameMap = {
            'Singapore Rep.':'新加坡',
            'Dominican Rep.':'多米尼加共和国',
            'Palestine':'巴勒斯坦',
            'Bahamas':'巴哈马',
           'Afghanistan':'阿富汗',
           'Guinea-Bissau':'几内亚比绍',
           "Côte d'Ivoire":'科特迪瓦',
           'Angola':'安哥拉',
           'Albania':'阿尔巴尼亚',
           'United Arab Emirates':'阿联酋',
           'Argentina':'阿根廷',
           'Armenia':'亚美尼亚',
           'French Southern and Antarctic Lands':'法属南半球和南极领地',
           'Australia':'澳大利亚',
           'Austria':'奥地利',
           'Azerbaijan':'阿塞拜疆',
           'Burundi':'布隆迪',
           'Belgium':'比利时',
           'Benin':'贝宁',
           'Burkina Faso':'布基纳法索',
           'Bangladesh':'孟加拉国',
           'Bulgaria':'保加利亚',
           'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
           'Belarus':'白俄罗斯',
           'Belize':'伯利兹',
           'Bermuda':'百慕大',
           'Bolivia':'玻利维亚',
           'Brazil':'巴西',
           'Brunei':'文莱',
           'Bhutan':'不丹',
           'Botswana':'博茨瓦纳',
           'Central African Rep.':'中非',
           'Canada':'加拿大',
           'Switzerland':'瑞士',
           'Chile':'智利',
           'China':'中国',
           'Ivory Coast':'象牙海岸',
           'Cameroon':'喀麦隆',
           'Dem. Rep. Congo':'刚果民主共和国',
           'Congo':'刚果',
           'Colombia':'哥伦比亚',
           'Costa Rica':'哥斯达黎加',
           'Cuba':'古巴',
           'N. Cyprus':'北塞浦路斯',
           'Cyprus':'塞浦路斯',
           'Czech Rep.':'捷克',
           'Germany':'德国',
           'Djibouti':'吉布提',
           'Denmark':'丹麦',
           'Algeria':'阿尔及利亚',
           'Ecuador':'厄瓜多尔',
           'Egypt':'埃及',
           'Eritrea':'厄立特里亚',
           'Spain':'西班牙',
           'Estonia':'爱沙尼亚',
           'Ethiopia':'埃塞俄比亚',
           'Finland':'芬兰',
           'Fiji':'斐济',
           'Falkland Islands':'福克兰群岛',
           'France':'法国',
           'Gabon':'加蓬',
           'United Kingdom':'英国',
           'Georgia':'格鲁吉亚',
           'Ghana':'加纳',
           'Guinea':'几内亚',
           'Gambia':'冈比亚',
           'Eq. Guinea':'赤道几内亚',
           'Greece':'希腊',
           'Greenland':'格陵兰',
           'Guatemala':'危地马拉',
           'French Guiana':'法属圭亚那',
           'Guyana':'圭亚那',
           'Honduras':'洪都拉斯',
           'Croatia':'克罗地亚',
           'Haiti':'海地',
           'Hungary':'匈牙利',
           'Indonesia':'印度尼西亚',
           'India':'印度',
           'Ireland':'爱尔兰',
           'Iran':'伊朗',
           'Iraq':'伊拉克',
           'Iceland':'冰岛',
           'Israel':'以色列',
           'Italy':'意大利',
           'Jamaica':'牙买加',
           'Jordan':'约旦',
           'Japan':'日本',
           'Kazakhstan':'哈萨克斯坦',
           'Kenya':'肯尼亚',
           'Kyrgyzstan':'吉尔吉斯斯坦',
           'Cambodia':'柬埔寨',
           'Korea':'韩国',
           'Kosovo':'科索沃',
           'Kuwait':'科威特',
           'Lao PDR':'老挝',
           'Lebanon':'黎巴嫩',
           'Liberia':'利比里亚',
           'Libya':'利比亚',
           'Sri Lanka':'斯里兰卡',
           'Lesotho':'莱索托',
           'Lithuania':'立陶宛',
           'Luxembourg':'卢森堡',
           'Latvia':'拉脱维亚',
           'Morocco':'摩洛哥',
           'Moldova':'摩尔多瓦',
           'Madagascar':'马达加斯加',
           'Mexico':'墨西哥',
           'Macedonia':'马其顿',
           'Mali':'马里',
           'Myanmar':'缅甸',
           'Montenegro':'黑山',
           'Mongolia':'蒙古',
           'Mozambique':'莫桑比克',
           'Mauritania':'毛里塔尼亚',
           'Malawi':'马拉维',
           'Malaysia':'马来西亚',
           'Namibia':'纳米比亚',
           'New Caledonia':'新喀里多尼亚',
           'Niger':'尼日尔',
           'Nigeria':'尼日利亚',
           'Nicaragua':'尼加拉瓜',
           'Netherlands':'荷兰',
           'Norway':'挪威',
           'Nepal':'尼泊尔',
           'New Zealand':'新西兰',
           'Oman':'阿曼',
           'Pakistan':'巴基斯坦',
           'Panama':'巴拿马',
           'Guam':'关岛',
           'Peru':'秘鲁',
           'Philippines':'菲律宾',
           'Papua New Guinea':'巴布亚新几内亚',
           'Poland':'波兰',
           'Puerto Rico':'波多黎各',
           'Dem. Rep. Korea':'朝鲜',
           'Portugal':'葡萄牙',
           'Paraguay':'巴拉圭',
           'Qatar':'卡塔尔',
           'Romania':'罗马尼亚',
           'Russia':'俄罗斯',
           'Rwanda':'卢旺达',
           'W. Sahara':'西撒哈拉',
           'Saudi Arabia':'沙特阿拉伯',
           'Sudan':'苏丹',
           'S. Sudan':'南苏丹',
           'Senegal':'塞内加尔',
           'Solomon Is.':'所罗门群岛',
           'Sierra Leone':'塞拉利昂',
           'El Salvador':'萨尔瓦多',
           'Somaliland':'索马里兰',
           'Somalia':'索马里',
           'Serbia':'塞尔维亚',
           'Suriname':'苏里南',
           'Slovakia':'斯洛伐克',
           'Slovenia':'斯洛文尼亚',
           'Sweden':'瑞典',
           'Swaziland':'斯威士兰',
           'Syria':'叙利亚',
           'Chad':'乍得',
           'Togo':'多哥',
           'Thailand':'泰国',
           'Tajikistan':'塔吉克斯坦',
           'Turkmenistan':'土库曼斯坦',
           'Timor-Leste':'东帝汶',
           'Trinidad and Tobago':'特里尼达和多巴哥',
           'Tunisia':'突尼斯',
           'Turkey':'土耳其',
           'Tanzania':'坦桑尼亚',
           'Uganda':'乌干达',
           'Ukraine':'乌克兰',
           'Uruguay':'乌拉圭',
           'United States':'美国',
           'Uzbekistan':'乌兹别克斯坦',
           'Venezuela':'委内瑞拉',
           'Vietnam':'越南',
           'Vanuatu':'瓦努阿图共和国',
           'West Bank':'西岸',
           'Yemen':'也门',
           'South Africa':'南非',
           'Zambia':'赞比亚',
           'Zimbabwe':'津巴布韦',
           'Comoros':'科摩罗',
           'Cape Verde':'佛得角',
           'Mauritius':'毛里求斯',
           'Palau':'帕劳共和国',
         }

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
        tooltip: {
            show: true, //不显示提示标签
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
    worldMapChart.setOption(option);
                let self = _this;
               worldMapChart.on("click", function(param) {
                  var value = param.value;
                  if(value) {
                    // window.location.href="#/country/detail/"+value;
                    self.$router.push({ name: 'countrydetail', params: { countryid: value }})
                  }
                  
               });

    // worldMapChart.on("click", function(param) {
    //     var value = param.value;
    //     window.location.href="#/country/detail/"+value
    //     this.router.push()
    // });

};
export default {
  name: 'CountryMaplist',
  data () {
    return {
        'countryData': []
    }
  },

  mounted(){
    const _this = this
    _this.getData();
    setTimeout(function() {
      _this.loadData();
    }, 1000)
    
  },
  methods: {
        getData() {
          // 获取国家
          const _this = this;
          const prommise_getAreaList = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.CountryManageService.GetAllCountry,
            'data': {
              draw: 0,
              start: 0,
              length: 500,
              retrievalInfo: '{}'
            },
            'f_resolve': function(data){
                let datalist = JSON.parse(data.data);

                for(var i=0; i<datalist.length; i++) {
                    datalist[i].name = datalist[i].NameOfficialZH;
                    datalist[i].value = datalist[i].ID;
                }

                console.log('***********', datalist);
                _this.countryData = datalist;
                //console.log(datalist);
            }
            
          });

        },

        loadData(){
          var data = this.countryData;
         
          /*var data = 
                    [
                        {
                            "name" : "中国",
                            "value" : 20677
                        }, {
                            "name" : "美国",
                            "value" : 485
                        }, {
                            "name" : "日本",
                            "value" : 484
                        }, {
                            "name" : "韩国",
                            "value" : 347
                        }, {
                            "name" : "印度",
                            "value" : 154
                        }, {
                            "name" : "澳大利亚",
                            "value" : 124
                        }, {
                            "name" : "德国",
                            "value" : 102
                        }, {
                            "name" : "新加坡",
                            "value" : 101
                        }, {
                            "name" : "泰国",
                            "value" : 91
                        }, {
                            "name" : "加拿大",
                            "value" : 81
                        }, {
                            "name" : "法国",
                            "value" : 56
                        }, {
                            "name" : "英国",
                            "value" : 56
                        }, {
                            "name" : "越南",
                            "value" : 56
                        }, {
                            "name" : "荷兰",
                            "value" : 43
                        }, {
                            "name" : "印度尼西亚",
                            "value" : 40
                        }, {
                            "name" : "马来西亚",
                            "value" : 39
                        }, {
                            "name" : "俄罗斯",
                            "value" : 38
                        }, {
                            "name" : "墨西哥",
                            "value" : 38
                        }, {
                            "name" : "意大利",
                            "value" : 34
                        }, {
                            "name" : "菲律宾",
                            "value" : 33
                        }, {
                            "name" : "波兰",
                            "value" : 22
                        }, {
                            "name" : "孟加拉国",
                            "value" : 19
                        }, {
                            "name" : "巴西",
                            "value" : 16
                        }, {
                            "name" : "土耳其",
                            "value" : 30
                        }, {
                            "name" : "瑞典",
                            "value" : 55
                        }, {
                            "name" : "欧洲",
                            "value" : 27
                        }, {
                            "name" : "西班牙",
                            "value" : 26
                        }, {
                            "name" : "罗马尼亚",
                            "value" : 24
                        }, {
                            "name" : "柬埔寨",
                            "value" : 22
                        }, {
                            "name" : "文莱",
                            "value" : 21
                        }, {
                            "name" : "阿根廷",
                            "value" : 21
                        }, {
                            "name" : "乌克兰",
                            "value" : 18
                        }, {
                            "name" : "蒙古",
                            "value" : 53
                        }, {
                            "name" : "哥伦比亚",
                            "value" : 15
                        }, {
                            "name" : "南非",
                            "value" : 12
                        }, {
                            "name" : "伊朗",
                            "value" : 8
                        }, {
                            "name" : "匈牙利",
                            "value" : 7
                        }, {
                            "name" : "丹麦",
                            "value" : 6
                        }, {
                            "name" : "哈萨克斯坦",
                            "value" : 6
                        }, {
                            "name" : "阿富汗",
                            "value" : 54
                        }, {
                            "name" : "塞尔维亚",
                            "value" : 4
                        }, {
                            "name" : "关岛",
                            "value" : 3
                        }, {
                            "name" : "巴拿马",
                            "value" : 3
                        }, {
                            "name" : "智利",
                            "value" : 3
                        }, {
                            "name" : "阿拉伯联合酋长国",
                            "value" : 3
                        }, {
                            "name" : "苏丹",
                            "value" : 1
                        }, {
                            "name" : "阿尔及利亚",
                            "value" : 1
                        }, {
                            "name" : "埃及",
                            "value" : 60
                        }, {
                            "name" : "尼日利亚",
                            "value" : 1
                        }, {
                            "name" : "利比亚",
                            "value" : 1
                        }, {
                            "name" : "马里",
                            "value" : 1
                        }, {
                            "name" : "沙特阿拉伯",
                            "value" : 1
                        }, {
                            "name" : "刚果民主共和国",
                            "value" : 1
                        }, {
                            "name" : "安哥拉",
                            "value" : 66
                        }, {
                            "name" : "埃塞俄比亚",
                            "value" : 1
                        }, {
                            "name" : "坦桑尼亚",
                            "value" : 1
                        }, {
                            "name" : "尼日尔",
                            "value" : 1
                        }, {
                            "name" : "乍得",
                            "value" : 1
                        }, {
                            "name" : "毛里塔尼亚",
                            "value" : 1
                        },{
                            "name" : "科摩罗",
                            "value" : 1
                        },{
                            "name" : "阿尔巴尼亚",
                            "value" : 1
                        },{
                            "name" : "亚美尼亚",
                            "value" : 1
                        },{
                            "name" : "法属南半球领地",
                            "value" : 1
                        },{
                            "name" : "奥地利",
                            "value" : 1
                        },{
                            "name" : "阿塞拜疆",
                            "value" : 1
                        },{
                            "name" : "布隆迪",
                            "value" : 1
                        },{
                            "name" : "比利时",
                            "value" : 1
                        },{
                            "name" : "贝宁",
                            "value" : 1
                        },{
                            "name" : "布基纳法索",
                            "value" : 1
                        },{
                            "name" : "保加利亚",
                            "value" : 1
                        },{
                            "name" : "巴哈马",
                            "value" : 1
                        },{
                            "name" : "波黑",
                            "value" : 1
                        },{
                            "name" : "白俄罗斯",
                            "value" : 1
                        },{
                            "name" : "伯利兹",
                            "value" : 1
                        },{
                            "name" : "百慕大",
                            "value" : 1
                        },{
                            "name" : "玻利维亚",
                            "value" : 1
                        },{
                            "name" : "不丹",
                            "value" : 1
                        },{
                            "name" : "博茨瓦纳",
                            "value" : 1
                        },{
                            "name" : "中非共和国",
                            "value" : 1
                        },{
                            "name" : "瑞士",
                            "value" : 1
                        },{
                            "name" : "科特迪瓦",
                            "value" : 1
                        },{
                            "name" : "喀麦隆",
                            "value" : 1
                        },{
                            "name" : "刚果",
                            "value" : 1
                        },{
                            "name" : "哥斯达黎加",
                            "value" : 1
                        },{
                            "name" : "古巴",
                            "value" : 1
                        },{
                            "name" : "北塞浦路斯",
                            "value" : 1
                        },{
                            "name" : "塞浦路斯",
                            "value" : 1
                        },{
                            "name" : "捷克",
                            "value" : 1
                        },{
                            "name" : "吉布提",
                            "value" : 1
                        },{
                            "name" : "多米尼加共和国",
                            "value" : 1
                        },{
                            "name" : "厄瓜多尔",
                            "value" : 1
                        },{
                            "name" : "厄立特里亚",
                            "value" : 1
                        },{
                            "name" : "爱沙尼亚",
                            "value" : 64
                        },{
                            "name" : "芬兰",
                            "value" : 1
                        },{
                            "name" : "斐济",
                            "value" : 1
                        },{
                            "name" : "福克兰群岛",
                            "value" : 1
                        },{
                            "name" : "加蓬",
                            "value" : 1
                        },{
                            "name" : "格鲁吉亚",
                            "value" : 62
                        },{
                            "name" : "加纳",
                            "value" : 1
                        },{
                            "name" : "几内亚",
                            "value" : 1
                        },{
                            "name" : "冈比亚",
                            "value" : 1
                        },{
                            "name" : "几内亚比绍",
                            "value" : 1
                        },{
                            "name" : "赤道几内亚",
                            "value" : 1
                        },{
                            "name" : "希腊",
                            "value" : 1
                        },{
                            "name" : "格陵兰",
                            "value" : 1
                        },{
                            "name" : "危地马拉",
                            "value" : 1
                        },{
                            "name" : "法属圭亚那",
                            "value" : 1
                        },{
                            "name" : "圭亚那",
                            "value" : 1
                        },{
                            "name" : "洪都拉斯",
                            "value" : 1
                        },{
                            "name" : "克罗地亚",
                            "value" : 1
                        },{
                            "name" : "海地",
                            "value" : 1
                        },{
                            "name" : "爱尔兰",
                            "value" : 1
                        },{
                            "name" : "伊拉克",
                            "value" : 1
                        },{
                            "name" : "冰岛",
                            "value" : 1
                        },{
                            "name" : "以色列",
                            "value" : 1
                        },{
                            "name" : "牙买加",
                            "value" : 1
                        },{
                            "name" : "约旦",
                            "value" : 1
                        },{
                            "name" : "肯尼亚",
                            "value" : 1
                        },{
                            "name" : "吉尔吉斯斯坦",
                            "value" : 1
                        },{
                            "name" : "科索沃",
                            "value" : 1
                        },{
                            "name" : "科威特",
                            "value" : 1
                        },{
                            "name" : "老挝",
                            "value" : 1
                        },{
                            "name" : "黎巴嫩",
                            "value" : 1
                        },{
                            "name" : "利比里亚",
                            "value" : 1
                        },{
                            "name" : "斯里兰卡",
                            "value" : 1
                        },{
                            "name" : "莱索托",
                            "value" : 1
                        },{
                            "name" : "立陶宛",
                            "value" : 1
                        },{
                            "name" : "卢森堡",
                            "value" : 1
                        },{
                            "name" : "拉脱维亚",
                            "value" : 1
                        },{
                            "name" : "摩洛哥",
                            "value" : 58
                        },{
                            "name" : "摩尔多瓦",
                            "value" : 1
                        },{
                            "name" : "马达加斯加",
                            "value" : 1
                        },{
                            "name" : "马其顿",
                            "value" : 1
                        },{
                            "name" : "缅甸",
                            "value" : 1
                        },{
                            "name" : "黑山",
                            "value" : 1
                        },{
                            "name" : "莫桑比克",
                            "value" : 1
                        },{
                            "name" : "马拉维",
                            "value" : 1
                        },{
                            "name" : "纳米比亚",
                            "value" : 1
                        },{
                            "name" : "新喀里多尼亚",
                            "value" : 1
                        },{
                            "name" : "尼加拉瓜",
                            "value" : 1
                        },{
                            "name" : "挪威",
                            "value" : 1
                        },{
                            "name" : "尼泊尔",
                            "value" : 1
                        },{
                            "name" : "新西兰",
                            "value" : 1
                        },{
                            "name" : "阿曼",
                            "value" : 1
                        },{
                            "name" : "巴基斯坦",
                            "value" : 61
                        },{
                            "name" : "秘鲁",
                            "value" : 1
                        },{
                            "name" : "巴勒斯坦",
                            "value" : 1
                        },{
                            "name" : "巴布亚新几内亚",
                            "value" : 1
                        },{
                            "name" : "波多黎各",
                            "value" : 1
                        },{
                            "name" : "朝鲜",
                            "value" : 59
                        },{
                            "name" : "葡萄牙",
                            "value" : 1
                        },{
                            "name" : "巴拉圭",
                            "value" : 1
                        },{
                            "name" : "卡塔尔",
                            "value" : 1
                        },{
                            "name" : "卢旺达",
                            "value" : 1
                        },{
                            "name" : "西萨摩亚",
                            "value" : 1
                        },{
                            "name" : "南苏丹",
                            "value" : 1
                        },{
                            "name" : "塞内加尔",
                            "value" : 1
                        },{
                            "name" : "所罗门群岛",
                            "value" : 1
                        },{
                            "name" : "塞拉利昂",
                            "value" : 1
                        },{
                            "name" : "萨尔瓦多",
                            "value" : 1
                        },{
                            "name" : "索马里兰",
                            "value" : 1
                        },{
                            "name" : "索马里",
                            "value" : 1
                        },{
                            "name" : "苏里南",
                            "value" : 1
                        },{
                            "name" : "斯洛伐克",
                            "value" : 1
                        },{
                            "name" : "斯洛文尼亚",
                            "value" : 1
                        },{
                            "name" : "斯威士兰",
                            "value" : 1
                        },{
                            "name" : "叙利亚",
                            "value" : 1
                        },{
                            "name" : "多哥",
                            "value" : 1
                        },{
                            "name" : "塔吉克斯坦",
                            "value" : 1
                        },{
                            "name" : "土库曼斯坦",
                            "value" : 1
                        },{
                            "name" : "东帝汶",
                            "value" : 63
                        },{
                            "name" : "特里尼达和多巴哥",
                            "value" : 1
                        },{
                            "name" : "突尼斯",
                            "value" : 1
                        },{
                            "name" : "乌干达",
                            "value" : 1
                        },{
                            "name" : "乌拉圭",
                            "value" : 1
                        },{
                            "name" : "乌兹别克斯坦",
                            "value" : 1
                        },{
                            "name" : "委内瑞拉",
                            "value" : 1
                        },{
                            "name" : "瓦努阿图共和国",
                            "value" : 1
                        },{
                            "name" : "西岸",
                            "value" : 1
                        },{
                            "name" : "也门",
                            "value" : 1
                        },{
                            "name" : "赞比亚",
                            "value" : 1
                        },{
                            "name" : "津巴布韦",
                            "value" : 1
                        },{
                            "name" : "西撒哈拉",
                            "value" : 1
                        },{
                            "name" : "阿联酋",
                            "value" : 1
                        },{
                            "name" : "佛得角",
                            "value" : 1
                        },{
                            "name" : "毛里求斯",
                            "value" : 1
                        },{
                            "name" : "帕劳共和国",
                            "value" : 1
                        },

                    ];
*/
          var max = data[0].value;   //返回数据按倒序排列，故data[0].value，即为最大值
          // 加载地图
          load_world_map(this,max, data);

        }
}
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.CountryMaplist{
  margin-top: 10px;
   #world-map {
      margin:0 auto;
      width: 100%;
      height: 650px;
      /*background: red;*/
  }
  #chagelist{
    /*background: #8ec31f;*/
    margin-left: 60px;
  }
 .textname{
    width:150px;
    height:50px;
    line-height: 50px;
    margin:0 auto;
    font-size: 18px;
    font-weight:bold;
    }
}
</style>