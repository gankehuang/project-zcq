<template>

  <div class="ProductList">
    <div class="container-main clearfix">
      <Card class="classlist-box" dis-hover :bordered="false">
        <router-link :to="{name:'productlist'}">
          <span style="float:right;">中文版</span>
        </router-link>
      </Card>
      
      <!-- <div class="search">
        <input class="searchbox" placeholder="请输入..." style="width:120px" v-model.trim = "searchKey" @keyup.enter="show($event)"></input>
        <a  @click.prevent="getTitle()" slot="extra">搜索</a>
      </div> -->
      <!-- <Card class="classlist-box" v-bind:class="{active: classlist_active}">
        <a slot="extra" @click.prevent="toggleAllList()">
          <Icon slot="extra" class="icon-toggle" type="chevron-down"></Icon>
        </a>
        <div class="listone"><a :class="{'active':true}" @click.prevent="toGetProductlist()">全部</a></div>
      
        <div class="classlist">
          <div class="listone"  :class="{'active':true}">
            <a @click.prevent="toGetProductlist('', 'All')">All</a>
          </div>
          <div class="listone" v-for="detail in classlist"><a :class="{'active':detail._id==infobox.id}" @click.prevent="toGetProductlist(detail.Id, detail.NameEN)">{{detail.NameEN}}</a>
          </div>  
        </div>
      </Card> -->

      <!-- <div class="info-box second">
         <ProductInfoBoxEN icon-type="ios-book" :info-name="infobox.name" :class-id="infobox.id.toString()" :searchkey="searchtext"/>
       </div>  -->

      
      <Card class="CountryListName" style="margin-top: 5px;" v-if="plantation[0]">
          <p slot="title" class="AreaName">Plant industry</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in plantation" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>
      <Card class="CountryListName" style="margin-top: 5px;" v-if="graziery[0]">
          <p slot="title" class="AreaName">Animal husbandry</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in graziery" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>
      <Card class="CountryListName" style="margin-top: 5px;" v-if="forestry[0]">
          <p slot="title" class="AreaName">Forestry</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in forestry" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>
      <Card class="CountryListName" style="margin-top: 5px;" v-if="fishery[0]">
          <p slot="title" class="AreaName">Fishery</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in fishery" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>
      <Card class="CountryListName" style="margin-top: 5px;" v-if="Agricultural[0]">
          <p slot="title" class="AreaName">Agricultural Material & Machinery</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in Agricultural" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>
      <Card class="CountryListName" style="margin-top: 5px;" v-if="energy[0]">
          <p slot="title" class="AreaName">Biomass Energy</p>
          <div class="countrylist">
            <router-link class="item" v-for="item in energy" :key="item.Id" :to="{name:'productdetailen', params:{imageid:item.Id}}">
              <!-- <img :src="global.normalResourceUrl(item.countryFlag)">{{item.countryName}}</img> -->
              <div class="info"><span class="imagename">{{item.EnglishName}}</span></div>
            </router-link>
          </div>
      </Card>



    </div>  
  </div>
      
</template>

<script>
import ProductInfoBoxEN from '@/components/ProductInfoBoxEN'

export default {
  name: 'ProductListEN',
  components: {
    ProductInfoBoxEN: ProductInfoBoxEN,
  },
  data: function () {
    return {
      search: '/hello',
      searchKey:'',
      searchtext: '',
      classlist: [],
      'classlist_active': false,
      infobox: {
        id: '',
        name: 'All'
      },
      list_more_key: '',
      'activenone': false,

      plantation: [],    //种植业
      graziery: [],      //畜牧业
      forestry: [],      //林业
      fishery: [],      //渔业
      Agricultural: [],      //农资农机
      energy: [],
    }
  },
  mounted: function () {
    const _this = this;

    // 获取所有分类
    /*const prommise_getClasslist = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.Product.GetClassify,
      'data': {
        type: 0,
        classifyID: 0
      },

      'f_resolve': function(data){
        _this.classlist = data;
        // console.log('%%%%%%%%%%%%%%%%%',data)
      }
    });*/

    const prommise_getInfoList = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.Product.GetAllProduct,
      'data': {
        draw: 0,
        start: 0,
        length: 1000,
        //classifyID: _this.classId,
        retrievalInfo: JSON.stringify({})
        //searchText: _this.searchkey ? _this.searchkey : ''
      },
      'f_resolve': function(data){
        //console.log(data);
        let new_infolist = JSON.parse(data.data);
        console.log(new_infolist);

        let plantation = [];    //种植业
        let graziery = [];      //畜牧业
        let forestry = [];      //林业
        let fishery = [];      //渔业
        let Agricultural = [];      //农资农机
        let energy = [];      //生物能源
        new_infolist.forEach(function(val, index) {
            val.ImagePath = _this.global.normalResourceUrl(val.ImagePath);
            if(val.ClassifyName == '种植业') {
              plantation.push(val);
            }else if(val.ClassifyName == '畜牧业') {
              graziery.push(val);
            }else if(val.ClassifyName == '林业') {
              forestry.push(val);
            }else if(val.ClassifyName == '渔业') {
              fishery.push(val);
            }else if(val.ClassifyName == '农资农机') {
              Agricultural.push(val);
            }else if(val.ClassifyName == '生物能源') {
              energy.push(val);
            }
        })
        _this.plantation = plantation;
        _this.graziery = graziery;
        _this.forestry = forestry;
        _this.fishery = fishery;
        _this.Agricultural = Agricultural;
        _this.energy = energy;
        //console.log(new_infolist);

      }
    });

  },
   methods: {
    'toggleAllList': function(){
      this.classlist_active = !this.classlist_active;
    },
    'show':function(ev){       
        if(ev.keyCode ==13){
          this.getTitle();
               // alert("anjian");
          };
        },
    'toGetProductlist': function(id, name){
      this.infobox.id = id;
      this.infobox.name = name;
    },
    'getTitle':function(){
      this.searchtext = this.searchKey;
    },
    showListMore: function(id, children_length){
      if (children_length==0) {
        this.noactive = !this.noactive;
      }else{
        this.list_more_key = id;
      }
    },
    hideListMore: function(){
      this.list_more_key = '';
    }
  },
  watch: {
     searchKey: function() {
      if (this.searchKey == '') {
        this.getTitle();
        } 
    }
  }
}
</script>


<style lang="less" scoped>
@import '../assets/styles/common.less';

  @media only screen and (max-width: 800px) {
    .container-main{
        width: 100% !important;
       
    }
  }


.ProductList{
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
    padding: 2px 4px;
  }
  .ivu-card-extra{
    top: auto;
    bottom:10px;
  }

  .classlist-box{
    height: auto;
    overflow: hidden;
    margin-bottom: 6px;
    transition: all .3s;
    position: relative;

    &.active{
      height: auto;

      .icon-toggle{
        transform: rotate(180deg);
      }
    }
  }
  .classlist{
    width:100%;

    *{
      color: @text-color;
    }

    a{
      padding: 5px;
      margin: 5px;
      text-decoration: none;

      &:hover{
        color: @primary-color;
      }

      &.active{
        color: @primary-color;
      }
    }

    .arrow{
      color: @title-color;
    }

    .listone{
      margin: 5px 0;
      font-size: 14px;
      font-weight: bold;
      float: left;
    }
    .listtwo{
      display: inline-block;
      font-size: 12px;
      font-weight: normal;
    }
    .list-more{
      display: none; 
      position: absolute;
      left: 20px;
      right: 20px;
      padding: 10px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
      background: white;
      
      &.activemore{
        display:block;
      }

      &.activenone{
        display: block;
        height: 0;
        border:none;
      }
    }

    .listthree .listfour{
      display: inline-block;
      font-size: 12px;
    }

    .listthree{
      margin: 5px 0;

      & > a{
        font-weight: bold;
      }
    }
  }
    
  .ivu-tabs-bar{
    border: none;
    margin-bottom: 8px;
  }
  .ivu-tabs-mini .ivu-tabs-tab{
    padding: 6px 8px;

    &:first-of-type{
      padding-right: 0;
      margin-right: 0;
    }
  }
  .ivu-tabs-nav-container{
    line-height: 1;
    font-size: 14px;
  }
  .ivu-tabs-ink-bar{
    opacity: 0;
  }
  .ivu-tabs-nav .ivu-tabs-tab .ivu-icon{
    margin-right: 0;
  }
  .ivu-card-body{
    padding: 10px;
  }

  .ivu-btn-text{
    font-size: 14px;
    color: @title-color;
  }
}
</style>