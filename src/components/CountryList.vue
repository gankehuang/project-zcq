<template>
  <div class="CountryList" style="margin-top: 20px;">
    <!-- <router-link class="" :to="'/countrymaplist'">
      <Poptip trigger="hover" content="点击切换到世界地图页面查看各个国家详情" placement="right" >
          <i-button id="chagelist">切换世界地图</i-button>
      </Poptip> 
    </router-link> -->
    <!-- <router-link :to="{name:'countrylisten'}">
      <span style="float:right;">English</span>
    </router-link> -->
    <!-- <countryMaplist /> -->

    <!-- <div class="search">
     <i-input class="search-box" placeholder="请输入..." style="width:120px"></i-input>
      <router-link tag="a" :to="search || '/'" slot="extra">搜索</router-link>
      <input class="searchbox" placeholder="请输入..." style="width:120px" v-model.trim = "searchKey" @keyup.enter="show($event)"></input>
      <a @click.prevent="getTitle()" slot="extra">搜索</a>
    </div> -->

    <!-- 首字母查询国家 -->
    <Card class="AreaList" v-bind:class="{active: arealist_active}">
      <a slot="extra" @click.prevent="toggleAllArea">
        <Icon slot="extra" class="icon-toggle" type="chevron-down"></Icon>  
      </a>
      <div class="list">
        <div class="bold navtext" key="0" :class="{nav:curr==0}"><a v-on:click="getCountry(0, '全部', {}, 10)">全部</a></div>
        <div class="navtext" v-for="item in arealist" :key="item._id" :class="{nav:item._id == curr}"><a v-on:click="getCountry(item._id, item.Name, item._id, 10)">{{item.Name}}</a></div>
      </div>
    </Card>
    <Card class="CountryInfo99">
      <!-- <p slot="title" class="AreaName">{{areaname_selected}}</p> -->
      <div class="countrylist">
        <router-link class="item" v-for="item in countrylist" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.ID}}">
          <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
          <div class="info">
            <img style="vertical-align: middle;" class="countryImage" :src="global.normalResourceUrl(item.countryFlag||item.NationalFlag)" />
            <span style="vertical-align: middle;" class="imagename">{{item.NameOfficialZH}}&nbsp;({{item.NameOfficialEN}})</span>
          </div>
        </router-link>
      </div>
      <div class="load-more" :class="{'active': active_more}">
        <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
      </div>
    </Card>


    <Card class="CountryListName" style="margin-top: 30px;">
        <p slot="title" class="AreaName">亚洲(Asia)</p>
        <div class="countrylist" style="border-bottom: 1px dashed #DDDEE1">
          <p slot="title" style="text-align: left; font-weight: bold;">东南亚(Southeast Asia)</p>
          <router-link class="item" v-for="item in DNY" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
        <div class="countrylist" style="border-bottom: 1px dashed #DDDEE1">
          <p slot="title" style="text-align: left; font-weight: bold;">南亚(South Asia)</p>
          <router-link class="item" v-for="item in NY" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
        <div class="countrylist" style="border-bottom: 1px dashed #DDDEE1">
          <p slot="title" style="text-align: left; font-weight: bold;">西亚(Western Asia)</p>
          <router-link class="item" v-for="item in XY" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
        <div class="countrylist" style="border-bottom: 1px dashed #DDDEE1">
          <p slot="title" style="text-align: left; font-weight: bold;">中亚(Central Asia)</p>
          <router-link class="item" v-for="item in ZY" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
        <div class="countrylist" style="border-bottom: 1px dashed #DDDEE1">
          <p slot="title" style="text-align: left; font-weight: bold;">东亚(East Asia)</p>
          <router-link class="item" v-for="item in DY" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>

    <Card class="CountryListName" style="margin-top: 5px;" v-if="FZ[0]">
        <p slot="title" class="AreaName">非洲(Africa)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in FZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>
  
    <Card class="CountryListName" style="margin-top: 5px;" v-if="OZ[0]">
        <p slot="title" class="AreaName">欧洲(Europe)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in OZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>
   
   <Card class="CountryListName" style="margin-top: 5px;" v-if="BMZ[0]">
        <p slot="title" class="AreaName">北美洲(North America)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in BMZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>

    <Card class="CountryListName" style="margin-top: 5px;" v-if="NMZ[0]">
        <p slot="title" class="AreaName">南美洲(South America)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in NMZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>

    <Card class="CountryListName" style="margin-top: 5px;" v-if="DYZ[0]">
        <p slot="title" class="AreaName">大洋洲(Oceania)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in DYZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>
    
    <Card class="CountryListName" style="margin-top: 5px;" v-if="NJZ[0]">
        <p slot="title" class="AreaName">南极洲(Antarctica)</p>
        <div class="countrylist">
          <router-link class="item" v-for="item in NJZ" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.CountryID}}">
            <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
            <div class="info"><span class="imagename">{{item.CNLong}}&nbsp;({{item.ENLong}})</span></div>
          </router-link>
        </div>
    </Card>


  </div>
</template>

<script>

import countryMaplist from '@/components/CountryMaplist'

export default {
  name: 'CountryList',
  components: {
    countryMaplist: countryMaplist,
  },
  data: function () {
    return {
      'arealist': [],
      'search': '/hello',
      'searchKey':'',
      'searchtext': '',
      'area_country': {},
      'countrylist': [],
      'area_id_active': 0,
      'arealist_active': false,
      'curr': 0,
      'areaname_selected': '',
      'active_more': false,

      'area_name': '',
      'area_con': '',
      'lenNum': 20,
      'more': 'More',

      'DNY': [],
      'NY': [],
      'XY': [],
      'ZY': [],
      'DY': [],

      'OZ': [],
      'FZ': [],
      'BMZ': [],
      'NMZ': [],
      'DYZ': [],
      'NJZ': []
    }
  },
  mounted: function () {
    this.page_init(); 
    //this.getAreaDetail(0, '全部'); 
    this.getCountry(0, '全部', {}, 12); 

    this.getAllArea();
  },
  methods: {
    'page_init': function(){

        const _this = this;
        _this.arealist = [];
        _this.area_country = {};
        //_this.DNY = [];
        //_this.$Spin.show();  //显示加载中...
        
        // 获取所有区域
        const prommise_getAreaList = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.CountryManageService.GetCountryLetter,
          'data': {
          },
          'f_resolve': function(data){

            //let datalist = JSON.parse(data.resultData);
            //console.log('@@@@@@@@@@@@@@@@@@@',data)
            if (_this.searchtext) {
              _this.countrylist = data;
              _this.countrylist.map(function(item,index){
                _this.areaname_selected = '"'+_this.searchtext+'"'+'相关搜索结果';
              });
              // console.log('@@@@@@@@@@@@@@@@@',_this.countrylist);
            }else{
            _this.countrylist = [];
            data.map(function(item,index){
              _this.arealist.push({
                _id: item.Letter,
                Name: item.Letter
              });


              /*_this.area_country[item._id] = item.CountryList;
              item.CountryList.map(function(i_item, i_index){
                if(_this.countrylist[i_item.countryID] == undefined){
                  _this.countrylist.push({
                    countryID: i_item.countryID,
                    countryName: i_item.countryName,
                    countryFlag: i_item.countryFlag
                  });     
                }
              });*/
            });
            //_this.$Spin.hide();  //隐藏加载中...
            // _this.getAreaDetail(_this.arealist[0]._id, _this.arealist[0].Name);
            // _this.getAreaDetail(0, '全部');
          };
          }
        });
      },

    'getCountry': function(area_id, area_name, id, len) {
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
    },
    'getMoreInfo': function() {
        let _this = this;
        //_this.lenNum += 20;
        if(_this.more == "More") {
            _this.lenNum = 100;
            _this.getCountry(_this.area_name, _this.area_name, _this.area_con, _this.lenNum);
            _this.more = '收起';
        }else {
            _this.lenNum = 12;
            _this.getCountry(_this.area_name, _this.area_name, _this.area_con, _this.lenNum);
            _this.more = 'More';
        }
        
    },
    //获取所有区域国家
    'getAllArea': function() {
        const _this = this;

        const prommise_getAllArea1 = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.CountryManageService.GetCountryName,
          'f_resolve': function(data){
              //let arealist = JSON.parse(data.resultData);
              //console.log('@@@@@@@@@@@@@@@',data);
              let DNYlist = [];
              let NYlist = [];
              let XYlist = [];
              let ZYlist = [];
              let DYlist = [];

              let OZlist = [];
              let FZlist = [];
              let BMZlist = [];
              let NMZlist = [];
              let DYZlist = [];
              let NJZlist = [];


              for(let i=0; i<data.length; i++){
                let AreaName = data[i].AreaName;
                let Continent = data[i].Continent;

                if(AreaName == '东南亚' && Continent == 1) {
                    DNYlist.push(data[i]);
                }else if(AreaName == '南亚' && Continent == 1) {
                    NYlist.push(data[i]);
                }else if(AreaName == '西亚' && Continent == 1) {
                    XYlist.push(data[i]);
                }else if(AreaName == '中亚' && Continent == 1) {
                    ZYlist.push(data[i]);
                }else if(AreaName == '东亚' && Continent == 1) {
                    DYlist.push(data[i]);
                }else if( Continent == 2 ) {
                    OZlist.push(data[i]);
                }else if( Continent == 3 ) {
                    FZlist.push(data[i]);
                }else if( Continent == 4 ) {
                    BMZlist.push(data[i]);
                }else if( Continent == 5 ) {
                    NMZlist.push(data[i]);
                }else if( Continent == 6 ) {
                    DYZlist.push(data[i]);
                }else if( Continent == 7 ) {
                    NJZlist.push(data[i]);
                }
              }
              _this.DNY = DNYlist;
              _this.NY = NYlist;
              _this.XY = XYlist;
              _this.ZY = ZYlist;
              _this.DY = DYlist;

              _this.OZ = OZlist;
              _this.FZ = FZlist;
              _this.BM = BMZlist;
              _this.NMZ = NMZlist;
              _this.DYZ = DYZlist;
              _this.NJZ = NJZlist;

          }
          
        });
    },

    //回车键搜索
   'show':function(ev){       
        if(ev.keyCode ==13){
          this.getTitle();
          // alert("anjian");
        };
      },
    'toggleAllArea': function(){
      this.arealist_active = !this.arealist_active;
    },
    'getAreaDetail': function(area_id, area_name){
      this.area_id_active = area_id;
      this.areaname_selected = area_name;
      this.curr = area_id;
    },
    'getTitle':function(){
      this.searchtext = this.searchKey;
    }
},
   watch: { 
     searchKey: function() {
      if(this.searchKey == ''){ 
        
        this.getTitle();
        this.getAreaDetail(0, '全部'); 
      }

    },
   searchtext:function(){
    this.page_init();
   }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';


@media only screen and (max-width: 800px) {
    .CountryList{
        width: 100% !important;
        .CountryListName{
            .item{
              width: 100% !important;
            }
        }
        .CountryInfo99{
            .item{
                width: 100% !important;
            }
        }
    }

    .btn{ display: none !important; }
    .search{
      text-align: center !important;
      .searchbox{
          width: 70% !important;
      }
    }
    .AreaList{
      height: 110px !important;
    }
    
}


.CountryList{

  .CountryListName{
    .item{
      display: inline-block;
      padding: 1px 3px;
      border-radius: 5px;
      width: 20%;
      color: #026EB8;
      &:hover{
        background: @table-td-hover-bg;

        .imagename{
          color: @title-color;

        }
      }
    }

    .AreaName{
      text-align: center;
      color: @text-color;
    }

    .info{
       width: 100%;
       text-align: left;
     }

     .countryImage{
        width: 100%;
        height: 100%;
        border: 1px solid @border-color-split;
      }

     .imagename{
       padding: 3px 6px;
       display: inline-block;
       color: #026EB8;
     }
  }


  .search {
      text-align: right;
      margin-bottom: 14px;
      height :20px;
      padding: 0;
      }
  #chagelist{
    /*background: #8ec31f;*/
  }
  .ivu-input{
    padding: 0px 4px;
    height: auto;
  }
  .searchbox{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    padding: 2px 4px;
  }
  .AreaList{
    height: 57px;
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 5px;
    transition: all .3s;

    &.active{
      height: auto;

      .icon-toggle{
        transform: rotate(180deg);
      }
    }

    .ivu-card-body{
      padding: 10px;
    }
    
    .ivu-btn-text{
      font-size: 14px;
      color: @title-color;

      &:hover{
        color: @primary-color;
      }
    }

    .list{
      font-size: 14px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 20px;

      .navtext{
        float: left;
        margin-right: 6px;

        &.nav{
          background: @title-color;
          
          a{
            color: #fff;
          }
        }
      }
      a{
        display: inline-block;
        padding: 5px 15px;
      }
    }
  }  
  
  .CountryInfo99{

    .load-more{
      display: none;
      margin-top: 15px;
      padding-top: 15px;
      text-align: center;
      border-top: 1px dashed @border-color-base;

      &.active{
        display: block;
      }

      .icon{
        margin-right: 5px;
      }
    }

    .item{
      display: inline-block;
      padding: 5px;
      width: 25%;
      border-radius: 5px;

      &:hover{
        background: @table-td-hover-bg;

        .imagename{
          color: @title-color;
        }
      }
    }

    .AreaName{
      text-align: center;
      color: @text-color;
    }

    .info{
       width: 100%;
       text-align: left;
     }

     .countryImage{
      width: 20%;
      height: 30px !important;
      border: 1px solid @border-color-split;
     }

     .imagename{
       padding:10px;
       display: inline-block;
       color: @text-color;
     }
  }
}
</style>