<template>
  <div class="CountryList">
  <router-link :to="'/countrymap'">点击切换地图</router-link>
    <div class="search">
     <!--  <i-input class="search-box" placeholder="请输入..." style="width:120px"></i-input>
      <router-link tag="a" :to="search || '/'" slot="extra">搜索</router-link> -->
      <input class="searchbox" placeholder="请输入..." style="width:120px" v-model.trim = "searchKey" @keyup.enter="show($event)"></input>
      <a @click.prevent="getTitle()" slot="extra">搜索</a>
    </div>
    <Card class="AreaList" v-bind:class="{active: arealist_active}">
      <a slot="extra" @click.prevent="toggleAllArea">
        <Icon slot="extra" class="icon-toggle" type="chevron-down"></Icon>
      </a>
      <div class="list">
        <div class="bold navtext" key="0" :class="{nav:curr==0}"><a v-on:click="getAreaDetail(0, '全部')">全部</a></div>
        <div class="navtext" v-for="item in arealist" :key="item._id" :class="{nav:item._id == curr}"><a v-on:click="getAreaDetail(item._id, item.Name)">{{item.Name}}</a></div>
      </div>
    </Card>
    <Card class="CountryInfo">
      <p slot="title" class="AreaName">
        {{areaname_selected}}
      </p>
      <div class="countrylist">
        <router-link class="item" v-for="item in area_id_active==0 ? countrylist : area_country[area_id_active]" :key="item.countryID" :to="{name:'countrydetail', params:{countryid:item.countryID}}">
          <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
          <div class="info"><img class="countryImage" :src="global.normalResourceUrl(item.countryFlag||item.NationalFlag)" /><span class="imagename">{{item.countryName || item.CNLong}}</span></div>
        </router-link>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'CountryList',
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
      'areaname_selected': ''
    }
  },
  mounted: function () {
    this.page_init(); 
    this.getAreaDetail(0, '全部');   
  },
  methods: {
    'page_init': function(){

    const _this = this;
    _this.arealist = [];
    _this.area_country = {};
    _this.countrylist = this.countrylist;



    // 获取所有区域
    const prommise_getAreaList = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.Area.getAllList,
      'data': {
        draw: 0,
        start: 0,
        length: 0,
        searchText: _this.searchtext ? _this.searchtext : ''
      },
      'f_resolve': function(data){
        let datalist = JSON.parse(data.data);
        if (_this.searchtext) {
          _this.countrylist = datalist;
          _this.countrylist.map(function(item,index){
            _this.areaname_selected = '"'+_this.searchtext+'"'+'相关搜索结果';
          });
          // console.log('@@@@@@@@@@@@@@@@@',_this.countrylist);
        }else{
        _this.countrylist = [];
        datalist.map(function(item,index){
          _this.arealist.push({
            _id: item._id,
            Name: item.Name
          });
          _this.area_country[item._id] = item.CountryList;
          item.CountryList.map(function(i_item, i_index){
            if(_this.countrylist[i_item.countryID] == undefined){
              _this.countrylist.push({
                countryID: i_item.countryID,
                countryName: i_item.countryName,
                countryFlag: i_item.countryFlag
              });     
            }
          });
        });
        // _this.getAreaDetail(_this.arealist[0]._id, _this.arealist[0].Name);
        // _this.getAreaDetail(0, '全部');
      };
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

.CountryList{
  .search {
      text-align: right;
      margin-bottom: 14px;
      height :20px;
      padding: 0;
      }
  .ivu-input{
    padding: 0px 4px;
    height: auto;
  }
  .searchbox{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
  }
  .AreaList{
    height: 57px;
    overflow: hidden;
    margin-bottom: 10px;
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
  
  .CountryInfo{
    .item{
      display: inline-block;
      padding: 15px;
      width: 20%;
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
       height: 130px;
       text-align: center;
     }

     .countryImage{
      width: 100%;
      height: 100%;
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