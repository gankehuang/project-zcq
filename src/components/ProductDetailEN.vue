<template>
<div class="CountryDetail">
  <!-- 头部标题 -->
  <div class="content clearfix">

          <div class="" style="width: 100%; border-bottom: 2px solid #545454; margin-top: 0px;">
              <!-- <span class="normal" style="font-size: 26px; font-weight:bold; height:50px; line-height: 50px;">{{detail.Name}}</span> -->
              <span class="normal" style="font-size: 24px;color: #A7AEB1; height:50px; line-height: 50px;">{{detail.EnglishName}}</span>
              <router-link :to="{name:'productdetail'}">
                <span style="float:right;">中文版</span>
              </router-link>
          </div>
          
          <div class="" style="width: 100%; margin-top: 0px;">
              <img class="gkImg" :src="imagePath" alt="" style="width: 20%; height: 200px; vertical-align: top;">
              <div class="gkCon" style="width: 79%; word-wrap: break-word; word-break: normal; padding: 20px; color: #A073A0; display: inline-block; line-height: 28px;height:200px;overflow:auto">&nbsp;&nbsp;&nbsp;&nbsp;{{detail.IntroductionEN}}</div>
          </div>
  </div>

  <!-- 概况 -->
  <!-- <div class="" style="width: 100%; margin-top: 20px;">
      <img class="gkImg" :src="detail.RepImage" alt="" style="width: 20%; height: 200px;">
      <div class="gkCon" style="width: 75%; word-wrap: break-word; word-break: normal; padding: 20px; color: #A073A0; display: inline-block; ">&nbsp;&nbsp;&nbsp;&nbsp;{{detail.Introduction}}</div>
  </div> -->

  <!-- <div class="Name">
    <img class="NationalFlag" :src="detail.NationalFlag" />
    <h1 class="normal">{{detail.NameOfficialZH}}</h1>
    <ul class="infolist">
      <li class="item">
        <span class="key">中文名称：</span><span class="value">{{detail.NameOfficialZH}}</span>
      </li>
      <li class="item">
        <span class="key">英文名称：</span><span class="value">{{detail.NameOfficialEN}}</span>
      </li>
    </ul>
  </div> -->

  
 
  
  <Card class="block-l content">
      <!-- <div class="ArticleName">pertinent literature</div> -->

      <div v-if="" class="block literature" data-ref="literature" ref="literature" style="width: 100%">
          <div class="title section" style="height: 25px; font-weight: bold; border-bottom:1px solid #DDDEE1"><Icon type="document-text"></Icon>&nbsp;&nbsp;pertinent literature
              <router-link style="float:right;display:inline-block;margin-right:81%" :to="{name: 'globalsearch', params: {content: detail.EnglishName, show: 1} }">
                <div style="color: red; cursor: pointer; font-size: 14px;">[更多>>]</div>
              </router-link>
          </div>

          <div class="content" style="margin-top: 10px;">
              <ul class="infolist" style="width: 100%;">
                    <!-- <i-input placeholder="文献检索..." v-model="value" style="width:500px">
                        <i-button slot="append" icon="ios-search" @click="search()"></i-button>
                    </i-input> -->
                    <ul class="countryinfolist">
                      <li class="item" v-for="item in countryLiterature">
                        <router-link class="link-text" :key="item.id" :to="{name:'literaturedetailtwo', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag, id: item.id,zrz:item.责任者,xxlyqc:item.信息来源全称, xxlymc:item.信息来源名称,wxjh:item.文献集合, ybkh: item.印本刊号,dzkh:item.电子刊号,dzcbwsh:item.电子出版物书号, year: item.发布年,jq:item.期,ys:item.页数, ztg:item.主题国,gjc:item.关键词,zy: item.摘要,zpyz:item.作品语种,zrzjg:item.责任者机构,unique_code:item.唯一标识 } }">
                          <h3 class="title text-nowrap" style="display:inline-block; float:left;color:#A0B91D;font-size:14px; width:55%">{{ item.标题 }}</h3>
                          <span v-if="item.信息来源全称" style="float:right;color:#999999;font-size:12px;margin-left:10px;width:30%">来源平台:[{{item.信息来源名称}}]&nbsp;{{item.信息来源全称}}</span>
                          <span v-if="item.发布年" style="float:right;color:#999999;font-size:12px;width:10%">发布年:{{item.发布年}}</span>           
                        </router-link>
                      </li>
                    </ul>
                    
              </ul>
        </div>
      </div>


      <!-- <ul class="infolist">
        <li class="item" v-for="item in infolist">
          <router-link class="link-text" :key="item._id" :to="{name:'policydetailwithtype', params:{typeid:type, articleid:item._id}}">
            
            <h3 class="title text-nowrap">{{ item.Name }}<span class="time">{{ item.Year }}</span></h3>          
            <p class="digest text-nowrap">{{ item.ContentText || item.Name }}</p>
          </router-link>
        </li>
      </ul> -->
  </Card>
 
  

</div>

</div>
</template>

<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import ShareInfoBox from '@/components/ShareInfoBox'
import BScroll from 'better-scroll'


export default {
  name: 'ProductDetailEN',
  components: {
   ShareInfoBox: ShareInfoBox,
 },
  data: function(){
    return {
      'global': this.global,
      'detail': {},
      'NRtext':"",  //Natural resource
      'GStext':"",  //Government and society
      'Etext':"",  //Economy
      'Ptext':"",  //People
      'CLtext':"",  //Cultural Life
      'APtext':"",  //Agriculture and products
      'source':"",
      'current':false,
      'curr': false,
      'cataloglist': [],
      // 'active_shareToWX': false,
       'num': 0,

       'countryLiterature': [],  //文献内容

       'productid': '',
       'value': '',   //输入框输入内容
    }
  },
  mounted: function(){
    const _this = this;

    //this.getApiData(detail.CountryGkWord);
    _this.productid = _this.$route.params.imageid;
    // 获取产品详情
    const prommise_getProductDetail = _this.global.$post({

      '_this': _this,

      'url': _this.global.API.Product.GetProductInfoByProductID,
      'data': {
        productID: _this.$route.params.imageid
      },
      'f_resolve': function(data){
       
          //_this.detail = data;
          

          let imagePath = data.ImagePath.split(",");
          imagePath.forEach(function(val, index) {
            imagePath[index] = _this.global.normalResourceUrl(val)
          })
          _this.imagePath = imagePath[0];
          data.ImagePath = imagePath;  //处理代表性图片

          data.Content = _this.global.normalResourceUrl(data.Content);      //基本信息word

          data.DistributionContent = _this.global.normalResourceUrl(data.DistributionContent);  //分布范围
          if(data.DistributionImage) {
              let DistributionImageArr = data.DistributionImage.split(",");
              for(let i=0; i<DistributionImageArr.length; i++) {
                DistributionImageArr[i] = _this.global.normalResourceUrl(DistributionImageArr[i]);
              }
              data.DistributionImage = DistributionImageArr;
          }else {
              data.DistributionImage = [""];
          }
          

          data.MarketContent = _this.global.normalResourceUrl(data.MarketContent);  //市场状况
          if(data.MarketImage) {
              let MarketImageArr = data.MarketImage.split(",");
              for(let i=0; i<MarketImageArr.length; i++) {
                MarketImageArr[i] = _this.global.normalResourceUrl(MarketImageArr[i]);
              }
              data.MarketImage = MarketImageArr;
          }else {
              data.MarketImage = [""];
          }
          

          data.EconomyContent = _this.global.normalResourceUrl(data.EconomyContent);  //市场状况
          if(data.EconomyImage) {
              let EconomyImageArr = data.EconomyImage.split(",");
              for(let i=0; i<EconomyImageArr.length; i++) {
                EconomyImageArr[i] = _this.global.normalResourceUrl(EconomyImageArr[i]);
              }
              data.EconomyImage = EconomyImageArr;
          }else {
              data.EconomyImage = [""];
          }
          
          _this.getCountryLiterature(data.Name, 6);  //获取相关文献
          //_this.getApiData(data.Content);
          //_this.getApiData1(data.DistributionContent);
          //_this.getApiData2(data.MarketContent);
          //_this.getApiData3(data.EconomyContent);

          _this.detail = data;
          console.log(data);
          //提取区域
          //var areaArr = [];

         /* data.CountryList.forEach(function(val, index){
            if(val.countryArea != ""){
              areaArr.push(val.countryArea)
            }
          })
          console.log(areaArr);
          _this.tCountryList = areaArr;*/

      }

    });
  },
  methods: {
    'search': function() {   //搜索文献
        const _this = this;
        //document/search/fulltext
        const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search/fulltext',  
          'data': {
            keyword: _this.value,
            page_size: 4
          },
          'f_resolve': function(data){
              //console.log('%%%%%%%%%%%%%%%%', data);
              _this.countryLiterature = data;
          }
        });
    },
    'getCountryLiterature': function(name, len) {  
        const _this = this;
        /*const getCountryLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search',
          'data': {
            country: name,
            page_size: len
          },
          'f_resolve': function(data){
              //console.log('#############', data);
              _this.countryLiterature = data;
          }
        });*/
        let keyWordList = [
            {'name': '产品类别', 'type': '', 'keyword': name}, 
        ]
          
        let fieldList = {"信息来源": "", "作品语种": "", "出版国": ""};
        //console.log(fieldList);

        $.ajax({
              type: "POST",
              url: _this.global.Domain.api1 +'/document/search',
              data: {
                keywordlist: keyWordList,  
                fieldlist:  fieldList,   
                index_start:  0,   //开始条数 
                page_size: len,        //获取条数 
              },
              dataType: "json",
              success: function(data){
                console.log(data);
                _this.countryLiterature = data.resultData;
                
              }
        });
    },
    //iframe文献解析
    'getApiData':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.NRtext = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.NRWord = null;
          }
        },
        'error': function(err){
          _this.detail.NRWord = null;
        }
      });
    },
    'getApiData1':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            //console.log('@@@@@@@@@@@@@@@@@@@',data);
            _this.GStext = data;
            setTimeout(function(){
              $('#countryContent1').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.GSWord = null;
          }
        },
        'error': function(err){
          _this.detail.GSWord = null;
        }
      });
    },
    'getApiData2':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.Etext = data;
            setTimeout(function(){
              $('#countryContent2').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.EWord = null;
          }
        },
        'error': function(err){
          _this.detail.EWord = null;
        }
      });
    },
    'getApiData3':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.Ptext = data;
            setTimeout(function(){
              $('#countryContent3').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.PWord = null;
          }
        },
        'error': function(err){
          _this.detail.PWord = null;
        }
      });
    },
    'getApiData4':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.CLtext = data;
            setTimeout(function(){
              $('#countryContent4').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.CLWord = null;
          }
        },
        'error': function(err){
          _this.detail.CLWord = null;
        }
      });
    },
    'getApiData5':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.APtext = data;
            setTimeout(function(){
              $('#countryContent5').find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            _this.detail.APWord = null;
          }
        },
        'error': function(err){
          _this.detail.APWord = null;
        }
      });
    },


    'getSituationData':function(url,id,index) {
      const _this = this;

      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.detail.SituationList[index].source = data;
            setTimeout(function(){
              $('#'+id).find('img').map(function(index,item){
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
            // _this.detail.SituationList[index].title = null;
            _this.detail.SituationList[index].source = null;
          }
        },
        'error': function(err){
          // _this.detail.SituationList[index].title = null;
          _this.detail.SituationList[index].source = null;
        }
      });
    },
  
    // 点击目录定位到对应项
    'catalogTo': function(ref) {
      if(ref === 'top'){
        $(window).scrollTop(0);
      }
      else if(this.$refs[ref] instanceof Array){
        $(window).scrollTop(this.$refs[ref][0].offsetTop);
      }
      else{
        $(window).scrollTop(this.$refs[ref].offsetTop);
      }
    },
    'navtab':function(index){
       this.num = index;
       this.current= index;
    },
    'tab': function(index) {
        this.num = index;
        this.curr= index;     
    },
  }
} 
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
    .block-r{ 
        display: none !important; 
    }
    .NationalFlag{ display: none !important; }
    .Name{ padding: 20px 30px !important; }
    .gkImg{ width: 100% !important;}
    .gkCon{ width: 100% !important;}
    .content{
        img{
          width: 100% !important;
        }
    }
}


.CountryDetail{
  margin-top: 15px;
  background: white;
 /* .current{
    color:red;
  }
*/

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



  .NationalFlag1{
    height: 30px;
    border: 1px solid #E6E7E9;
  }


  .image{
      width: 100%;
      .title1{
          padding: 5px 30px;
          font-size: 16px;
          font-weight: bold;
      }
      .content{
          width: 100%;
          padding: 20px;
          img{
            width: 100%;
            display: inline-block;
            margin-right: 10px;
          }

      }
  }

  .reportlist{
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
  .link-text{
    display: inline-block;
    padding: 7px 15px;
    width: 100%;

    &:hover{
      text-decoration: none;
      background: @table-td-hover-bg;
    }
  }

  .infolist{
    display: inline-block;

    .item{
      line-height: 28px;
      text-align: left;

      .key{
        display: inline-block;
        width: 200px;
        color: @title-color;
      }

      .value{
        &:nth-of-type(n+3){
          margin-left: 10px;
        }
      }
    }
  }

  .Name{
    position: relative;
    padding: 20px 100px;

    .infolist{
      margin-top: 20px;
    }
  }
  
  

  .NationalFlag{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80px;
    height: 100%;
    padding: 20px;
  }

  .CountryDetail{
    display: flex;
    border-top: 1px solid @border-color-base;
    margin-top: 20px;

    .block-l{
      width: 980px;
      border-right: 1px solid @border-color-base;
    }

    .block{
      .title{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }

      .content{
        padding: 20px 30px;
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
  }
} 
</style>