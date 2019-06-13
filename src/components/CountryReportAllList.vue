<template>
  <div class="container-main clearfix">
      <div class="CountryReportList3">
        <div class="container-main clearfix" style=" width: 99%">
         
          <div class="PolicyMain containermain" style="margin-top: 20px;">
            <div class="info-box second" v-if="this.$route.params.typeid == 1">
              <Card class="card">
                

                <!-- <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>国家报告</p>
                <router-link tag="a" :to="moreLink || '/'" slot="extra" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link> -->
                    <ul class="infolist">
                      <li class="item" v-for="item in classlist" v-if="classlist[0]">
                        <!-- <router-link class="link-text" :key="item.id" :to="{name:'pdf', params: {srcPath:item.file_name} }"> -->
                        <router-link class="link-text" :key="item.id" :to="{name:'literaturedetail', params:{title: item.file_name, name: item.标题} }">  
                          <!-- <div class="countryImg"  v-bind:style="{background:'url('+global.normalResourceUrl(item.ImagePath, 'product')+') no-repeat center', backgroundSize:'cover'}"></div> -->
                          <div class="countryName">
                            <p class="digest" style="color: black">《&nbsp;{{ item.标题 }}&nbsp;》</p>
                          </div>
                          <div class="countryName">
                            <p class="digest">主题国：{{ item.主题国}}</p>
                          </div>
                          <div class="countryName">
                            <p class="digest">出版日期：{{ item.出版日期}}</p>
                          </div>
                          <div class="countryName">
                            <p class="digest">出版国：{{ item.出版国 }}</p>
                          </div>
                          <div class="countryName">
                            <p class="digest">出版地：{{ item.出版地}}</p>
                          </div>
                          <div class="countryName">
                            <p class="digest">印本刊号：{{ item.印本刊号}}</p>
                          </div>
                          <!-- <div class="countryIntro">
                            <p class="digest">{{ item.出版日期 }}</p>
                          </div>  -->
                        </router-link>   
                      </li>
                    </ul>

              </Card>  
            </div> 

            <div class="info-box" v-if="this.$route.params.typeid == 2">
              <!-- 面包屑导航开始 -->
              <div class="layout-breadcrumb" style="padding:10px; background:#EEEEEE; margin-bottom:10px;">
                <Breadcrumb>
                  <Breadcrumb-item href="/home">首页</Breadcrumb-item>
                  <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
                  <Breadcrumb-item>海外观察</Breadcrumb-item>
                </Breadcrumb>
              </div>
              <!-- 面包屑导航结束 -->
              <Card class="card">
                    <ul class="infolist">
                      <li class="item" v-for="item in hwgclist">
                        <router-link class="link-text" :key="item.Identification" :to="{name:'pdf', params: {srcPath:item.Content,name:item.Title}}">
                          <p class="title text-nowrap" style="font-size: 15px;">{{item.Fenlei}}{{item.Title}}&nbsp;&nbsp;{{item.Cbn}}（{{item.Yueqi}}）</p>
                          <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                        </router-link>
                      </li>
                    </ul>
                    <div class="load-more" :class="{'active': active_more}">
                      <a v-on:click="getMoreInfo1()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
                    </div>
              </Card>  
            </div> 

            <div class="info-box" style="" v-if="this.$route.params.typeid == 3">
              <!-- 面包屑导航开始 -->
              <div class="layout-breadcrumb" style="padding:10px; background:#EEEEEE; margin-bottom:10px;">
                  <Breadcrumb>
                    <Breadcrumb-item href="/home">首页</Breadcrumb-item>
                    <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
                    <Breadcrumb-item>农产品市场</Breadcrumb-item>
                  </Breadcrumb>
              </div>
              <!-- 面包屑导航结束 -->

              <Card class="card">
                <ul class="infolist clearfix">
                  <li class="item" v-for="item in infolist" style="height: 35px;">
                    <router-link class="link-text" :key="item.Identification" :to="{name:'policyalldetail', params:{typeid:type, articleid:item.Identification, unique_code: item.OnlyIndex}}">
                      <!-- <div class="productImage" v-bind:style="{background:'url('+global.normalResourceUrl(item.ImagePath, 'product')+') no-repeat center', backgroundSize:'cover'}"></div> -->
                      <p class="title text-nowrap" style="font-size: 15px;">{{item.Variety}}</p>
                    </router-link>
                  </li>
                </ul>
                <div class="load-more" :class="{'active': active_more}">
                  <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
                </div> 
              </Card> 
              
            </div> 
            <!-- <Page :total="100" show-total /> -->
          </div> 
        
       


          <!-- <Tabs active-key="key1">
            <Tab-pane label="国家报告" key="key1">
                <ul class="infolist">
                  <li class="item" v-for="item in classlist" v-if="classlist[0]">
                    <router-link class="link-text" :key="item.id" :to="{name:'pdf', params: {srcPath:item.file_name} }">
                    <router-link class="link-text" :key="item.id" :to="{name:'literaturedetail', params:{title: item.file_name, name: item.标题} }">  
                      <div class="countryImg"  v-bind:style="{background:'url('+global.normalResourceUrl(item.ImagePath, 'product')+') no-repeat center', backgroundSize:'cover'}"></div>
                      <div class="countryName">
                        <p class="digest" style="color: black">《&nbsp;{{ item.标题 }}&nbsp;》</p>
                      </div>
                      <div class="countryName">
                        <p class="digest">主题国：{{ item.主题国}}</p>
                      </div>
                      <div class="countryName">
                        <p class="digest">出版日期：{{ item.出版日期}}</p>
                      </div>
                      <div class="countryName">
                        <p class="digest">出版国：{{ item.出版国 }}</p>
                      </div>
                      <div class="countryName">
                        <p class="digest">出版地：{{ item.出版地}}</p>
                      </div>
                      <div class="countryName">
                        <p class="digest">印本刊号：{{ item.印本刊号}}</p>
                      </div>
                      <div class="countryIntro">
                        <p class="digest">{{ item.出版日期 }}</p>
                      </div>
                    </router-link>   
                  </li>
                </ul>
            </Tab-pane>
          
            <Tab-pane label="海外观察" key="key2">
                <ul class="infolist">
                  <li class="item" v-for="item in hwgclist">
                    <router-link class="link-text" :key="item.Identification" :to="{name:'pdf', params: {srcPath:item.Content}}">
                      <h3 class="title text-nowrap">{{item.CountryName}}</h3>
                      <p class="digest">{{item.Zhaiyao}}</p>
                    </router-link>
                  </li>
                </ul>
            </Tab-pane>
          
            <Tab-pane label="农产品市场" key="key3">
                <agriculturalProducts icon-type="ios-book"/>
            </Tab-pane>
          
            <Tab-pane label="科技产品" key="key4">
                <ul class="infolist">
                  <li class="item" v-for="item in kjcglist">
                    <router-link class="link-text"  :key="item.Identification" :to="{name:'pdf', params: {srcPath:item.Content}}">
                      <h3 class="title text-nowrap">{{item.CgName}}<span class="time">{{item.CreateDate}}</span></h3>
                      <p class="digest">{{item.Guishu}}</p>
                    </router-link>   
                  </li>
                </ul>
            </Tab-pane>
          
          </Tabs> -->

        </div>  
      </div>
    
  </div>
</template>

<script>
import agriculturalProducts from '@/components/agriculturalProducts'


// 节流函数
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

// 通过类型ID获取信息列表
  function getInfoListByClassId(_this, first){
      _this.active_more = true;
      if(first){
        _this.start = 0;
      }
      setTimeout(function(){
          const prommise_getInfoList = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.HwyjManageService.GetAllData,
            'data': {
                type: 3,
                draw: 0,
                start: _this.start,
                length: _this.length,
                retrievalInfo: '{}'
            },
            'f_resolve': function(data){
              console.log('@@@@@@@@@@@', data);
              let new_infolist = JSON.parse(data.data);
              _this.infolist = new_infolist;


              /*if(first){
                _this.infolist = new_infolist;
              }
              else{
                for (var i = 0; i < new_infolist.length; i++) {
                  _this.infolist.push(new_infolist[i]);          
                }
              }
              _this.start += new_infolist.length;
              if(new_infolist.length < 10){
                _this.active_more = false;
              }
              else{ 
                _this.active_more = true;
              }*/
            }
          });
      }, 200)
      
  }

  function getInfoListByClassId1(_this, first){
      _this.active_more = true;
      if(first){
        _this.start = 0;
      }
      setTimeout(function() {
        //获取海外观察
        const prommise_getHwgclist = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.HwyjManageService.GetAllData,
          //'url': _this.global.API.Policy.getClassify,
          'data': {
              type: 2,
              draw: 0,
              start: _this.start,
              length: _this.length,
              retrievalInfo: '{}'
            },
            'f_resolve': function(data){
                let countryData1 = JSON.parse(data.data);
                /*for(var i=0; i<countryData.length; i++) {
                  if(countryData[i].Countryother){
                    countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                  }
                }*/
                //console.log(countryData);
                _this.hwgclist = countryData1;
            }
        });
      }, 500)
      
  }

export default {
  name: 'CountryReportAllList',
  components: {
    agriculturalProducts: agriculturalProducts,
  },
  data: function () {
    return {
      search: '/hello',
      classlist: [],
      hwgclist: [],
      kjcglist: [],
      infolist: [],
      start: 0,
      length: 10,
      searchKey:'',
      searchtext: '',
      curr:'',
      infobox: {
        id: '',
        name: '全部',
      },

      more: 'More',
      more2: 'More'
    }
  },
  mounted: function () {
    this.page_init();

    this.start = 0;
    getInfoListByClassId(this, true);
  },
  
  methods: {
    'page_init': function(){
      const _this = this;
      _this.curr = '';
      _this.infobox = {
        id: '',
        name: '全部'
      };

      // 获取国家报告   http://10.200.32.96:8888/document/search  _this.global.Domain.api1 + '/document/search'
      const prommise_getClasslist = _this.global.$post({
        '_this': _this,
        'url': _this.global.Domain.api1 + '/document/search',
        //'url': _this.global.API.Policy.getClassify,
        'data': {
            document_type: '国家报告',
            page_size: 10
          },
          'f_resolve': function(data){
              console.log(data);
              
              _this.classlist = data;
            // _this.toGetProductlist(_this.classlist[0]._id, _this.classlist[0].Name);
          }
      });


      /*const prommise_getClasslist = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.HwyjManageService.GetAllData,
        //'url': _this.global.API.Policy.getClassify,
        'data': {
            type: 1,
            draw: 0,
            start: 0,
            length: 10,
            retrievalInfo: '{}'
          },
          'f_resolve': function(data){
              let countryData = JSON.parse(data.data);
              for(var i=0; i<countryData.length; i++) {
                if(countryData[i].Countryother){
                  countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                }
              }
              _this.classlist = countryData;
            // _this.toGetProductlist(_this.classlist[0]._id, _this.classlist[0].Name);
          }
      });*/

      setTimeout(function() {
        //获取海外观察
        const prommise_getHwgclist = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.HwyjManageService.GetAllData,
          //'url': _this.global.API.Policy.getClassify,
          'data': {
              type: 2,
              draw: 0,
              start: 0,
              length: 10,
              retrievalInfo: '{}'
            },
            'f_resolve': function(data){
                let countryData1 = JSON.parse(data.data);
                /*for(var i=0; i<countryData.length; i++) {
                  if(countryData[i].Countryother){
                    countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                  }
                }*/
                //console.log(countryData);
                _this.hwgclist = countryData1;
            }
        });
      }, 500)
      setTimeout(function(){
        //获取科技成果
        const prommise_getkjcglist = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.HwyjManageService.GetScience,
          //'url': _this.global.API.Policy.getClassify,
          'data': {
              draw: 0,
              start: 0,
              length: 10,
              retrievalInfo: '{}'
            },
            'f_resolve': function(data){
                let countryData2 = JSON.parse(data.data);
                console.log(countryData2);
                _this.kjcglist = countryData2;
            }
        });
      }, 800)
    },
    // 'tab': function(id) {   
    //     this.curr= id;
    // },
    //回车键搜索
    'show':function(ev){       
        if(ev.keyCode ==13){
          this.getTitle();
               // alert("anjian");
        };
    },
    'toGetProductlist': function(id, name){   
      this.infobox.id = id;
      this.infobox.name = name;
      this.curr= id;
    },
    'getTitle':function(){
      this.searchtext = this.searchKey;
    },
    getMoreInfo: function(){
      //this.style.height = 'auto';
      //console.log(this.lengthMore);
      //this.length = parseInt(this.length) + 100;
      if( this.more == 'More'  ){
          this.more = '收起';
          this.length = 1000;
      } else{
          this.more = 'More';
          this.length = 10;
      }
      getInfoListByClassId(this,false);
    } ,
    getMoreInfo1: function(){
      //this.style.height = 'auto';
      //console.log(this.lengthMore);
      //this.length = parseInt(this.length) + 100;
      if( this.more == 'More'  ){
          this.more = '收起';
          this.length = 1000;
      } else{
          this.more = 'More';
          this.length = 10;
      }
      getInfoListByClassId1(this,false);
    } 
  },
  watch: {
    $route: function(){
      this.page_init();
    },
     searchKey: function() {
      if (this.searchKey == '') {
        this.getTitle();
      } 
    },
  }
}
</script>


<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .container-main{
      width: 100% !important;
  }
  .search{
      text-align: center !important;
      .searchbox{
          width: 70% !important;
      }
  }
}

.infolist{
  .countryImg{
    width: 10%;
    height: 70px;
  }

  .countryName{
      width: 32%;
      margin-top: 15px;
  }
  .countryIntro{
      width: 75%
  }

  div{
    float:left;
    margin-left: 10px;
  }
  .item{
    position: relative;
    width:100%;
    display: inline-block;
    padding: 5px;
    border-bottom: 1px dashed #E9EAEC; 
    cursor: pointer;
    *{
      line-height: 1.2;
      color: @text-color;
    }
    
    
    .title{
      display: inline-block;
      width: 80%;
      font-size: 18px;
    }
    .time{
      display: inline-block;
      position: absolute;
      right: 20px;
      font-size: 12px;
      font-weight: normal;
    }

    .digest{
      font-size:14px!important;
      color: @text-light-color;
    }
  }
  .item:hover{
      text-decoration: none;
      background: @table-td-hover-bg;
    }
}




.CountryReportList3{

  height: auto;
  overflow: hidden;
  padding: 6px;

  .container{

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
  .nav{
    background: #026eb8;
  }
  .search {
      text-align: right;
      margin-right: 20px;
      margin-bottom: 14px;
      height :20px;
      padding: 0;
      }
  .searchbox{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    padding: 2px 4px;
  }
  .navlist{
    float:left;
    margin: 2px 10px;
  }
  .ivu-input{
    padding: 0px 4px;
    height: auto;
  }
  .containermain{
      width: 100%;
      .info-box{
         display: inline-block;
         float:left;
         width: 100%;
         .card{
            
         }
         .link-more{
            .icon{
              margin-left: 5px;
            }
          }
      }
      .second{
          width: 100%;
      }
      
   }
   .ivu-tabs-bar{
    margin-bottom: 0px;
   }
   .ivu-card{
     margin-bottom: 10px;
     vertical-align: middle;
     
   }
    .ivu-card-body{
      padding: 20px 10px;
      vertical-align: middle;
    }

    .ivu-btn-text{
      font-size: 14px;
      color: @title-color;
    }

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
}
</style>