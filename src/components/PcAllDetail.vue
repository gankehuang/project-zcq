<template>
  <div class="PolicyDetail">
    <div class="container-main clearfix">
      <!-- <Card class="block-l content" style="height: 55px;">
          <div class='fontSize'>
              <ul>
                  <li><b>字体：</b></li>
                  <li>【</li>
                  <li><a href="javascript:;">大</a></li>
                  <li><a href="javascript:;">中</a></li>
                  <li><a href="javascript:;">小</a></li>
                  <li>】</li>
                  <li style="padding-left: 20px;"><a href="javascript:;" @click="doPrint(1)"><Icon type="printer"></Icon>&nbsp;打印本页</a></li>
              </ul>
              
          </div>
      </Card> -->

      <Card class="block-l content" id="block-l">
          <!-- 面包屑导航开始 -->
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="/home">首页</Breadcrumb-item>
              <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
              <Breadcrumb-item>{{detail.Title}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <!-- 面包屑导航结束 -->

          <div class="layout-content">
            <div class="ArticleName">
                {{detail.Title}}
            </div>
              
            <div class="content clearfix">
              <ul class="nav"> 
                <li><span id="property">{{detail.CreateDate}}</span></li> 
                <li slot="content" v-if="detail.Sources"><span class="item-list">来源：{{detail.Sources}}</span></li> 
              </ul>

              <Collapse active-key="1" accordion>
                <Panel key="1" style="text-align: left;">
                  文章属性
                  <!-- <p slot="content" v-if="detail.tCountry" >
                    <span class="itemlist">目标国家与区域：<router-link v-for="item in detail.tCountry" :key="item.countryID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.countryName}} ({{item.countryArea}})</router-link></span>
                  </p>
                  <p slot="content" v-if="detail.pCountry">
                    <span class="itemlist">出版地：<router-link v-for="item in detail.pCountry" :key="item.countryID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.countryName}} ({{item.countryArea}})</router-link></span>
                  </p> -->
                  <!-- <p slot="content" v-if="detail.wCountry">
                    <span class="itemlist">撰写国家与区域：<router-link v-for="item in detail.wCountry" :key="item.countryID" :to="{name:'countrylistwithareaid', params:{areaid:item.areaID}}" class="value">{{item.countryName}} ({{item.countryArea}})</router-link></span>
                  </p> -->
                  <!-- <p slot="content" v-if="detail.Cycle"><span class="itemlist">出版周期：{{detail.Cycle}}</span></p> -->
                  <p slot="content" v-if="detail.Author"><span class="itemlist">作者：{{detail.Author}}</span></p>
                  <p slot="content" v-if="detail.PublishDate"><span class="itemlist">出版时间：{{detail.CreateDate}}</span></p>       
                </Panel>
              </Collapse>
            </div>

            <div class="ArticleNews" id="ArticleNews">
                <iframe class="priview"  v-if="detail.Content" :src="detail.Content"></iframe>
                <!-- <div id="countryContent" v-html="text">{{text}}</div> -->
            </div>
            

            <!-- 点赞、收藏、分享 -->
            <div class="smallicon clearfix">                      
              <div class="share">
                <FavoriteInfoBox class="like clearfix" :class-id="id.toString()" type="3"/>
                <ShareInfoBox class="shareitem clearfix" :sharetext="detail.Name" type="文献信息"/>
              </div>
            </div>
          </div>
      </Card>
    <!--startprint1-->
     <!-- <Card class="block-l content">
          <div class="ArticleName">相关新闻</div>
          <ul class="infolist">
            <li class="item" v-for="item in infolist">
              <router-link class="link-text" :key="item._id" :to="{name:'policydetailwithtype', params:{typeid:type, articleid:item._id}}">
                
                <h3 class="title text-nowrap">{{ item.Name }}<span class="time">{{ item.Year }}</span></h3>          
                <p class="digest text-nowrap">{{ item.ContentText || item.Name }}</p>
              </router-link>
            </li>
          </ul>
      </Card> -->
      <Card class="block-l content">
          <div style="color: gray; font-weight: bold;">免责声明：{{disclaimer}}。</div>
      </Card>
    <!--endprint1-->

    </div>
      <!--相似文章开始-->
      <!-- <div class="block-r">
        <SimilarLiterature class="similar clearfix" :type="this.$route.params.typeid" :class-id="id.toString()" />
        <div class="sidebar">
          <div class="catalog">
            <h5 style="font-size: 20px; text-align: center; font-weight: 500;">相似文章</h5>    
              <ul class="linklist" id="menu">
                <li v-for="(article,index) in cataloglist" class="item">
                  <router-link class="link-text" :key="article._id" :to="{name:'policydetailwithtype', params:{typeid:article.Type,articleid:article._id}}">
                    {{article.Name}}
                   </router-link> 
                </li>
              </ul>   
          </div>
        </div>
      </div> -->
        <!-- 相似文章结束 -->
    
  </div>

  
</template>



<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import FavoriteInfoBox from '@/components/FavoriteInfoBox'
import ShareInfoBox from '@/components/ShareInfoBox'



// function getPolicyDetail(){
//   const _this = this;
 // 获取文献详情
//   const prommise_getPolicyDetail = _this.global.$post({
//     '_this': _this,
//     'url': _this.global.API.Policy.GetLiteratureInfo,
//     'data': {
//       literatureID: _this.$route.params.articleid
//     },
//     'f_resolve': function(data){
//       // console.log('%%%%%%%%%%%%%%%%',data)
//       _this.detail = data;
//       data.Content = _this.global.normalResourceUrl(data.Content);
//       _this.getApiData(data.Content);
      
//     }
//   });
// }
export default {
  name: 'PcAllDetail',
  components: {
    FavoriteInfoBox: FavoriteInfoBox,
    ShareInfoBox: ShareInfoBox,
  },
  data: function(){
    return {
      'detail': {},
      'text':"",
      'disclaimer': "",
      'current':false,
      'cataloglist':[],
      // 'active_shareToWX': false,
       'id':this.$route.params.articleid,
      }
  },
  mounted: function(){
    this.getPolicyDetail();
    //this.getSimilar();
    this.getDisclaimer();
  },
  methods: {
    'getPolicyDetail':function() {
        const _this = this;
      // 获取文献详情
      const prommise_getPolicyDetail = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.FCManageService.GetForeignCooperationInfoByID,
        'data': {
          Id: _this.$route.params.articleid
        },
        'f_resolve': function(data){
            console.log('%%%%%%%%%%%%%%%%',data);
            var newData = data
            //newData.pCountry = JSON.parse(data.pCountry);
            //newData.product = JSON.parse(data.product);
            //newData.tCountry = JSON.parse(data.tCountry);
            //console.log('%%%%%%%%%%%%%%%%',newData)
          _this.detail = newData;

          data.Content = _this.global.normalResourceUrl(data.Content);
          console.log(data.Content);
          //_this.getApiData(data.Content);
          
        }
      });
    },
    'getDisclaimer': function() {
          const _this = this;
          // 获取免责声明
          const prommise_getPolicyDetail = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.Policy.getDisclaimer,
            'f_resolve': function(data){
                //console.log('%%%%%%%%%%%%%%%%',newData);
                _this.disclaimer = data;
            }
          });
    },
    'getApiData':function(url) {
      const _this = this;

      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            console.log(data);
            _this.text = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.Content = null;
          }
        },
        'error': function(err){
          _this.text = null;
          _this.detail.Content = null;
        }
      });
    },

    'getSimilar':function () {
      const _this = this;
  
      const prommise_getMessage = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.Policy.GetSimilarLiterature,
        'data': {
          literatureID: _this.$route.params.articleid,
        },

        'f_resolve': function(data){
          _this.cataloglist = data;
          // console.log('@@@@@@@@@@@@@@@@@@@',data);    
        }
      });
    },
    'doPrint': function() {
        if (oper < 10){
          bdhtml=window.document.body.innerHTML; //获取当前页的html代码
          sprnstr="<!--startprint"+oper+"-->"; //设置打印开始区域
          eprnstr="<!--endprint"+oper+"-->"; //设置打印结束区域
          prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html
          prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
          window.document.body.innerHTML=prnhtml;
          window.print();
          window.document.body.innerHTML=bdhtml;
        } else {
          window.print();
        }
    }

  },

   watch: {
    $route: function(){
      // this.text = '';
      this.getPolicyDetail();
      this.getSimilar(); 
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
  .block-r{
      display: none !important;
  }
}




.infolist{
  .item{
    position: relative;
    width:100%;
    display: inline-block;

    *{
      line-height: 1.2;
      color: @text-color;
    }
    
    .icon{
      margin-right: 5px;
      display: inline-block;
      color: @title-color;
    }
    .title{
      display: inline-block;
      width: 80%;
      font-size: 14px;
    }
    .time{
      display: inline-block;
      position: absolute;
      right: 20px;
      font-size: 12px;
      font-weight: normal;
    }

    .digest{
      font-size:12px!important;
      color: @text-light-color;
    }
  }
}

.fontSize{
    height: 20px;
    list-style: none;
    float: right;
    li{
      float:left;
      padding: 2px 5px;
    }
}

.PolicyDetail{
  height: auto;
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
  border: none;
  display: flex;

  #countryContent{
    *{ font-size: 20pt !important; }
  }


  .block-l{
    /*width: 980px;*/
    flex: 1.5;
    border-right: 1px solid @border-color-base;
    padding:0;
  }

  .block-r{
    flex: 0.5;
    padding: 20px 0; 
  }
  .sidebar{
        position: fixed;
        width:292px;
        top: 310px;

        .catalog{
          padding: 20px 0;
          background: @title-bg;
          text-align: left;
          .title{   
              padding-left: 16px;
              display: inline-block;
              border-bottom: 1px dotted;
              width: 100%;
            }

          .linklist{
            margin-top: 10px;
            color: @title-color;
          
              a{
                color: #000;
              }

            .item{
              display: block;
              padding: 2px 16px;
              cursor: pointer;
              white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;

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
      }
   
  .layout-breadcrumb{
      padding: 10px 30px 0;
  }

  .layout-content{
    position:relative;
    min-height: 200px;
    margin: 10px 20px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 0;
  }
  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }
  .ArticleName{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: #fff;
    font-size: 24px;
    font-weight: solid;
    color:#026eb8;
    border: none;
    padding-left: 10px;
  }
  .ArticleNews{
    position: relative;
    padding-bottom: 36px;
    
  }
  #countryContent{
    margin-bottom: 18px;
    
  }
  .ivu-collapse{
    text-align: right;
    padding: 0 10px;
    border: none;
    background-color: #fff;
  }
  .priview{
    width: 100%;
    min-height: 800px;
    overflow-y: auto;
    border: none;
  }
  
    .value{
      /*padding: 8px 4px;*/
      display: inline-block;
      margin-right: 10px;
    }
  
  
  #property{
    display:block;
    padding: 0 8px;
   /* font-size: 16px;*/
    text-align: center;
  }
  .nav{
    float: right;
  }
  .nav>li{
     float: right;
     margin:4px 4px;
     padding: 2px;      
  }
  
  .content{
    position: relative;
    margin: 10px;
    padding:2px;
  }

 

  .smallicon{
    position: absolute;
    bottom: 0;
    right: 20px;
    text-align: center;

   /* &.top{
      top: 8px;
      right: 100px;
      bottom: auto;
    }*/
  }


    .like{
      font-size:20px;
      color:#000;
      padding: 0;
      display: inline-block;
      float: left;
    }

}
</style>