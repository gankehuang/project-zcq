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
              <Breadcrumb-item v-html='name1'>{{name1}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <!-- 面包屑导航结束 -->

          <div class="layout-content">
            <div class="ArticleName" v-html="name1"></div>   <!-- 文章标题 -->
            <Tabs active-key="key1"  style="margin-top: 20px;">
                <Tab-pane label="信息概览" key="key1">
                    <a :href="pdfImg" style="float:right;" title="点击下载PDF"><img src="/static/img/pdf.png" style="height:50px;"/></a>
                    <div class="content clearfix info" style="margin-top: 30px; ">
                      <p v-if="this.$route.params.zrz"><span style="font-weight: bold;">责任者：</span>{{this.$route.params.zrz}}</p>
                      <p v-if="this.$route.params.zrzjg"><span style="font-weight: bold;">机构：</span>{{this.$route.params.zrzjg}}</p>
                      <p v-if="this.$route.params.xxlyqc"><span style="font-weight: bold;">信息来源平台：</span><span v-if="this.$route.params.xxlymc">({{this.$route.params.xxlymc}})</span>{{this.$route.params.xxlyqc}}</p>
                      <p v-if="this.$route.params.xxlyqc"><span style="font-weight: bold;">文献集合名称：</span>{{this.$route.params.xxlyqc}}</p>
                      <p v-if="this.$route.params.cbz"><span style="font-weight: bold;">出版者：</span>{{this.$route.params.cbz}}</p>
                      <p v-if="this.$route.params.ybkh"><span style="font-weight: bold;">ISSN：</span>{{this.$route.params.ybkh}}</p>
                      <p v-if="this.$route.params.dzcbwsh"><span style="font-weight: bold;">ISBN：</span>{{this.$route.params.dzcbwsh}}</p>
                      <p v-if="this.$route.params.year"><span style="font-weight: bold;">年份：</span>{{this.$route.params.year}}</p>
                      <p v-if="this.$route.params.jq"><span style="font-weight: bold;">卷期：</span>{{this.$route.params.jq}}</p>
                      <p v-if="this.$route.params.ys"><span style="font-weight: bold;">页数：</span>{{this.$route.params.ys}}</p>
                      <p v-if="this.$route.params.zpyz"><span style="font-weight: bold;">语种：</span>{{this.$route.params.zpyz}}</p>
                      <p v-if="this.$route.params.ztg"><span style="font-weight: bold;">主题国：</span>{{this.$route.params.ztg}}</p>
                      <p v-if="this.$route.params.gjc"><span style="font-weight: bold;">关键词：</span>{{this.$route.params.gjc}}</p>
                      <p v-if="this.$route.params.zy"><span style="font-weight: bold;">摘要：</span>{{this.$route.params.zy}}</p>

                      <div v-if="this.$route.params.status*1>58">
                        <p style="margin-top: 20px;background:#026EB8;color:white; padding:5px 10px;"><span style="font-weight: bold;">图表展示：</span></p>
                        <div v-for="(item, index) in imageArr" style="text-align:center;">
                          <p><b>{{index+1}}.{{item.title}}</b></p>
                          <img :src="item.image" alt="" style="max-width:100%;border:1px solid #EEEEEE;margin-bottom:50px;">
                        </div>
                      </div>
                      
                    </div> 
                </Tab-pane>
                <Tab-pane label="目录列表" key="key2" v-if="this.$route.params.status*1>50 && login">
                  <div style="width:20%;display:inline-block;float:left;height:600px;">

                      <div style="width: 100%; border: 1px solid #E9EAEC; padding: 10px; overflow-x: auto;height:600px;">
                          <p style="background: #026EB8;color:white; display: inline-block; padding: 5px; width: 100%; font-weight: bold;">章节目录</p>
                          <Tree :data="baseData" :show-checkbox="multiple" @on-select-change="choiceAll" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"></Tree>
                      </div>
                  </div>
                  <div style="width:79%;display:inline-block;float:left;border:1px solid #EEEEEE;padding:10px;margin-left:10px;">
                    <p style="background: #026EB8;color:white; display: inline-block; padding: 5px; width: 100%; font-weight: bold;"><span style="font-weight: bold;margin-bottom:10px;">章节内容：</span></p>
                    <p v-for="item in sectionContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</p>
                  </div>
                    
                </Tab-pane>
                <Tab-pane label="全文阅览" key="key3" v-if="this.$route.params.status>58 && login">
                    <!-- <p style="margin-top: 30px; border-top: 1px dashed gray"><span style="font-weight: bold;">全文阅览：</span></p> -->
                    <div class="ArticleNews" id="ArticleNews">
                        <iframe class="priview"  v-if="detail.Content" :src="detail.Content"></iframe>
                        <div id="countryContent" v-html="text">{{text}}</div>
                    </div>
                </Tab-pane>
                <!-- <Tab-pane label="PDF下载" key="key4" v-if='login'>
                  <div style="text-align:center;">
                    <img src="/static/img/pdf.png" style="height:100px;margin-top:20px;" />
                    <a :href="pdfImg" style="width:100%;height:40px;line-height:40px;background:#026EB8;display:inline-block;text-align:center;color:white;border-radius: 5px 5px 5px 5px;margin-top:30px;">PDF下载</a>  @on-click="getPDF()"
                  </div>
                </Tab-pane> -->
            </Tabs>

            <!-- 点赞、收藏、分享 -->
            <!-- <div class="smallicon clearfix">                      
              <div class="share">
                <FavoriteInfoBox class="like clearfix" :class-id="id.toString()" type="3"/>
                <ShareInfoBox class="shareitem clearfix" :sharetext="name" type="文献信息"/>
              </div>
            </div> -->
          </div>
      </Card>
    <!--startprint1-->
      

     <!--  <Card class="block-l content">
         <div style="color: gray; font-weight: bold;">免责声明：{{disclaimer}}</div>
     </Card> -->
    <!--endprint1-->

    </div>
     
    


  </div>

  
</template>



<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import FavoriteInfoBox from '@/components/FavoriteInfoBox'
import ShareInfoBox from '@/components/ShareInfoBox'



export default {
  name: 'LiteratureDetailTwo',
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
      'id': 1,
      'name1': this.$route.params.name,
      'baseData': '',
      'multiple': false,
      'sectionContent': '',

      'name': '',
      'imageArr': '',
      //'pdfImg': this.global.Domain.api1 +'/document/pdf?table_flag='+this.$route.params.table_flag+'&file_name='+ this.$route.params.title, 
      'pdfImg': this.global.Domain.api1 +'/document/pdf?unique_code='+ this.$route.params.unique_code, 
        //pdf下载地址      _this.global.Domain.api1 +'/document/pdf?unique_code='+ data.resultData.唯一标识
      'login': '',  //登录标识
    }
  },
  mounted: function(){
    this.login = sessionStorage.getItem('loginBS')
    console.log(this.name);
    //this.getPolicyDetail();  获取全文内容
    //this.getSimilar();
    //this.getDisclaimer();
    this.getTree();
    //console.log(this.$route.params.AuthorZE);
    //this.getsection();
    this.getImg();

    // $.ajax({
    //     'url': this.global.Domain.api1 +'/document/relatedsection',
    //     'type': 'POST',
    //     'data': {
    //         flag_base: this.$route.params.flag_base,
    //         flag_content: this.$route.params.flag_content,
    //         document_id: this.$route.params.id
    //     },
    //     'success': function(data, status){
    //         //console.log('@@@@@@@@@@@', JSON.parse(data));
    //     },
    //     'error': function(err){
          
    //     }
    // });

    //let pdfImg = this.global.Domain.api1 +'/document/pdf?table_flag='+this.$route.params.table_flag+'&file_name='+ this.$route.params.title
    //console.log(pdfImg);
  },
  methods: {
    
    'getImg': function() {
        const _this = this;
        $.ajax({
          'url': _this.global.Domain.api1 +'/document/allimage',
          'type': 'POST',
          'data': {
              flag_base: this.$route.params.flag_base,
              flag_content: this.$route.params.flag_content,
              document_id: _this.$route.params.id
          },
          'success': function(data, status){
              console.log(data.resultData);
              _this.imageArr = data.resultData;
              //console.log('@@@@@@@@@@@', JSON.parse(data));
          },
          'error': function(err){
            
          }
        });
    },
    'choiceAll': function(data) {  //树空间选中事件
        //console.log(data);
        const _this = this;
        //console.log('tree###########', data[0].pid);

        $.ajax({
          'url': _this.global.Domain.api1 +'/document/detail',
          'type': 'POST',
          'data': {
              flag_base: this.$route.params.flag_base,
              flag_content: this.$route.params.flag_content,
              document_id: _this.$route.params.id,
              pid: data[0].pid
          },
          'success': function(data, status){
              //console.log('@@@@@@@@@@@', JSON.parse(data));
              _this.sectionContent = data.resultData;
          },
            'error': function(err){
            
          }
        });

    },
    'getTree': function() {   //获取树标题
        const _this = this;
        const getTree = _this.global.$post({
            '_this': _this,
            'url': _this.global.Domain.api1 +'/document/catalog',  
            'data': {
              flag_base: this.$route.params.flag_base,
              flag_content: this.$route.params.flag_content,
              document_id: _this.$route.params.id
            },
            'f_resolve': function(data){
                //console.log('%%%%%%%%%%%%%%%%', data);
                _this.baseData = data;
            }
        });
    },
    //获取文档信息
    'getPolicyDetail':function() {
        const _this = this;

        _this.getApiData( _this.global.Domain.api1 +'/document/html?file_name=' + _this.$route.params.title+'&table_flag='+ _this.$route.params.flag_base );
        //console.log( _this.global.Domain.api1 +'/document/html?file_name=' + _this.$route.params.title )
    },
    'getDisclaimer': function() {   //获取免责声明
          const _this = this;

          $.ajax({
            'url': _this.global.API.Policy.getDisclaimer,
            'type': 'POST',
            'success': function(data, status){
              //console.log(data);
               _this.disclaimer = data.resultData;
            },
              'error': function(err){
              
            }
          });

    },
    'getApiData':function(url) {  //解析文档内容
      const _this = this;

      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            _this.text = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                //console.log(_this.imageArr[index]);
                //$(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
                //$(item).attr('src', _this.imageArr[index].image );
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
    //获取相似文章
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
    },
    'showCatalogue': function(ele) {
      console.log(ele);
    }

  },
  watch: {
    $route: function(){
      // this.text = '';
      this.getPolicyDetail();
      this.getSimilar(); 
    }
  },
  beforeRouteLeave(to, from, next) {
     // 设置下一个路由的 meta
    to.meta.keepAlive = true; // 让 A 缓存，即不刷新
    next();
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
    .info{
      p{ margin-bottom: 5px; }
    }
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
    text-align: center;
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