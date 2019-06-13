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
              <Breadcrumb-item >{{this.$route.params.articleid}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <!-- 面包屑导航结束 -->

          <div class="layout-content">
            <div class="ArticleName">{{this.$route.params.articleid}}</div>   <!-- 文章标题 -->
            
            <Tabs value="name1">
                <TabPane label="信息概览" name="name1">
                    <div class="content clearfix info" style="margin-top: 30px;">
                      <p v-if="data.责任者"><span style="font-weight: bold;">责任者：</span>{{data.责任者}}</p>
                      <p v-if="data.责任者机构"><span style="font-weight: bold;">机构：</span>{{data.责任者机构}}</p>
                      <p v-if="data.信息来源全称"><span style="font-weight: bold;">信息来源平台：</span>({{data.信息来源名称}}){{data.信息来源全称}}</p>
                      <p v-if="data.文献集合"><span style="font-weight: bold;">文献集合名称：</span>{{data.文献集合}}</p>
                      <p v-if="data.出版者"><span style="font-weight: bold;">出版者：</span>{{data.出版者}}</p>
                      <p v-if="data.印本刊号"><span style="font-weight: bold;">ISSN：</span>{{data.印本刊号}}</p>
                      <p v-if="data.电子出版物书号"><span style="font-weight: bold;">ISBN：</span>{{data.电子出版物书号}}</p>
                      <p v-if="data.发布年"><span style="font-weight: bold;">年份：</span>{{data.发布年}}</p>
                      <p v-if="data.卷期"><span style="font-weight: bold;">卷期：</span>{{data.卷期}}</p>
                      <p v-if="data.页数"><span style="font-weight: bold;">页数：</span>{{data.页数}}</p>
                      <p v-if="data.作品语种"><span style="font-weight: bold;">语种：</span>{{data.作品语种}}</p>
                      <p v-if="data.主题国"><span style="font-weight: bold;">主题国：</span>{{data.主题国}}</p>
                      <p v-if="data.关键词"><span style="font-weight: bold;">关键词：</span>{{data.关键词}}</p>
                      <p v-if="data.摘要"><span style="font-weight: bold;">摘要：</span>{{data.摘要}}</p>

                      <div v-if="data.碎片化任务状态*1>58">
                        <p style="margin-top: 20px;background:#026EB8;color:white; padding:5px 10px;"><span style="font-weight: bold;">图表展示：</span></p>
                        <div v-for="(item, index) in imageArr" style="text-align:center;">
                          <p><b>{{index+1}}.{{item.title}}</b></p>
                          <img :src="item.image" alt="" style="max-width:100%;border:1px solid #EEEEEE;margin-bottom:50px;">
                        </div>
                      </div>
                    </div> 
                </TabPane>
                <TabPane label="PDF下载" name="name3" v-if='login'>
                    <div style="text-align:center;">
                      <img src="/static/img/pdf.png" style="height:100px;margin-top:20px;" />
                      <a :href="pdfImg" style="width:100%;height:40px;line-height:40px;background:#026EB8;display:inline-block;text-align:center;color:white;border-radius: 5px 5px 5px 5px;margin-top:30px;">PDF下载</a>  <!--  @on-click="getPDF()" -->
                    </div>
                </TabPane>
                <TabPane label="全文阅览" name="name2" v-if="(data.碎片化任务状态*1>58) && login">
                    <div class="ArticleNews" id="ArticleNews">
                        <!-- <iframe class="priview"  v-if="detail.Content" :src="detail.Content"></iframe> -->
                        <div id="countryContent" v-html="text">{{text}}</div>
                    </div>
                </TabPane>
            </Tabs>
           
          </div>
      </Card>
   

    </div>
     
    


  </div>

  
</template>



<script>
import qrcode from '../../static/lib/jquery.qrcode.min.js'
import FavoriteInfoBox from '@/components/FavoriteInfoBox'
import ShareInfoBox from '@/components/ShareInfoBox'



export default {
  name: 'LiteratureDetailThree',
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
      'baseData': '',
      'multiple': false,
      'sectionContent': '',

      'name': '',
      'imageArr': '',
      'pdfImg': '',   //pdf下载地址

      'data': {},
      'login': '',  //登录标识
    }
  },
  mounted: function(){
    const _this = this;
    _this.login = sessionStorage.getItem('loginBS')
    $.ajax({
        'url': _this.global.Domain.api1 +'/document/baseinfo',
        'type': 'POST',
        'data': {
            unique_code: _this.$route.params.unique_code
        },
        'success': function(data, status){
            //console.log('@@@@@@@@@@@', data.resultData);
            //console.log(data.resultData.责任者.substr(1) );
            if(data.resultData.责任者){
                data.resultData.责任者 =  data.resultData.责任者.substr(1); 
            }
            if(data.resultData.文献集合){
                data.resultData.文献集合 =  data.resultData.文献集合.substr(1); 
            }
              
            
            
            _this.data = data.resultData;

            _this.pdfImg = _this.global.Domain.api1 +'/document/pdf?unique_code='+ data.resultData.唯一标识;

        },
        'error': function(err){
        }
    });

    setTimeout(function() {
      _this.getPolicyDetail();
      _this.getImg();
    }, 500)


    //let pdfImg = this.global.Domain.api1 +'/document/pdf?table_flag='+this.$route.params.table_flag+'&file_name='+ this.$route.params.title
    //console.log(pdfImg);
  },
  methods: {
    
    'getImg': function() {
        const _this = this;
        console.log('#########', _this.data);
        $.ajax({
          'url': _this.global.Domain.api1 +'/document/allimage',
          'type': 'POST',
          'data': {
              flag_base: _this.data.flag_base,
              flag_content: _this.data.flag_content,
              document_id: _this.data.id
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
    //获取文档信息
    'getPolicyDetail':function() {
        const _this = this;

        _this.getApiData( _this.global.Domain.api1 +'/document/html?file_name=' + _this.data.file_name+'&table_flag='+ _this.data.flag_base );
        //console.log( _this.global.Domain.api1 +'/document/html?file_name=' + _this.$route.params.title )
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

  },

   watch: {
    $route: function(){
      // this.text = '';
      this.getPolicyDetail();
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