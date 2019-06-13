<template>
  <div class="CountryReportList">
    <div class="container-main clearfix" style=" width: 99%">
     
      <div class="PolicyMain containermain">
        <div class="info-box second">
          <!-- <Card class="card">
             <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>国家报告</p>
             <router-link tag="a" :to="{name:'countryreportalllist', params:{typeid:1}}" slot="extra" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
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
           </Card>  -->
          <Card class="card">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>农业发展与合作报告</p>
           <!--  <router-link tag="a" :to="{name:'countryreportalllist', params:{typeid:1}}" slot="extra" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link> -->
                <ul class="infolist">
                  <li class="item" v-for="item in classlist" style="width:16.6%; text-align:center;">
                    <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}"> -->
                    <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" class="link-text" target="_blank">
                      <img :src="item.NationalFlag" alt="" style="width:80px;border:1px solid #EEEEEE">
                      <!-- <p class="title text-nowrap" style="font-size: 15px;">{{item.NationalFlag}}</p> -->
                      <p class="digest">{{item.CountryName}}</p>
                    </a>
                    <!-- </router-link> -->
                  </li>
                </ul>

          </Card> 
        </div> 

        <div class="info-box">
          <Card class="card">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>海外观察</p>
            <router-link tag="a" :to="{name:'countryreportalllist', params:{typeid:2}}" slot="extra" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
                <ul class="infolist">
                  <li class="item" v-for="item in hwgclist">
                    <router-link class="link-text" :key="item.Identification" :to="{name:'pdf', params: {srcPath:item.Content,name:item.Title}}">
                      <p class="title text-nowrap" style="font-size: 15px; width: 100%">{{item.Fenlei}}{{item.Title}}&nbsp;&nbsp;{{item.Cbn}}（{{item.Yueqi}}）</p>
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    </router-link>
                  </li>
                </ul>
          </Card>  
        </div> 

        <div class="info-box" style="margin-left: 1%">
          <Card class="card">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>市场研究报告</p>
            <router-link tag="a" :to="{name:'countryreportalllist', params:{typeid:3}}" slot="extra" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
            <agriculturalProducts icon-type="ios-book"/>   
          </Card>  
        </div> 

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

export default {
  name: 'CountryReportList',
  components: {
    agriculturalProducts: agriculturalProducts,
  },
  data: function () {
    return {
      search: '/hello',
      classlist: [],
      hwgclist: [],
      kjcglist: [],
      searchKey:'',
      searchtext: '',
      curr:'',
      infobox: {
        id: '',
        name: '全部',
      },
    }
  },
  mounted: function () {
    this.page_init();
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
      /*const prommise_getClasslist = _this.global.$post({
        '_this': _this,
        'url': _this.global.Domain.api1 + '/document/search',
        //'url': _this.global.API.Policy.getClassify,
        'data': {
            document_type: '国家报告',
            page_size: 3
          },
          'f_resolve': function(data){
              console.log(data);
              
              _this.classlist = data;
            // _this.toGetProductlist(_this.classlist[0]._id, _this.classlist[0].Name);
          }
      });*/


      const prommise_getClasslist = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.HwyjManageService.GetAllData,
        //'url': _this.global.API.Policy.getClassify,
        'data': {
            type: 1,
            draw: 0,
            start: 0,
            length: 100,
            retrievalInfo: '{}'
          },
          'f_resolve': function(data){
              let countryData = JSON.parse(data.data);
              for(var i=0; i<countryData.length; i++) {
                if(countryData[i].NationalFlag){
                  countryData[i].NationalFlag = _this.global.normalResourceUrl(countryData[i].NationalFlag);
                  //countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                }
              }
              
              //console.log(countryData);
              _this.classlist = countryData;

            // _this.toGetProductlist(_this.classlist[0]._id, _this.classlist[0].Name);
          }
      });

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
              length: 8,
              retrievalInfo: '{}'
            },
            'f_resolve': function(data){
                let countryData1 = JSON.parse(data.data);
                /*for(var i=0; i<countryData.length; i++) {
                  if(countryData[i].Countryother){
                    countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                  }
                }*/
                //console.log('@@@@@@@@@@@', countryData1);
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
    /* border-bottom: 1px dashed #E9EAEC;  */
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




.CountryReportList{

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
         width: 49.5%;
         .card{
            height: 370px;
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
}
</style>