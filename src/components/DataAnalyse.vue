<template>
  <div class="DataAnalyse">
    
    <div class="container-main">
      <!-- <div class="title-img" style="background: url(/static/img/DataAndAnalysis.jpg) no-repeat center; background-size: cover;"></div> -->
      <!-- <Row class="tablelist">
        <i-col span="8" class="item">
          <div class="bg" style="background:url(/static/img/DataAnalysis_1.png) no-repeat center; background-size:cover;">
            <a class="link" href="http://www.apecagro.cn/tableauTrusted?jshj" target="_blank">
              <p class="title">一带一路国家走出去企业及经商环境分析</p>
            </a>
          </div>
        </i-col>
        <i-col span="8" class="item">
          <div class="bg" style="background:url(/static/img/DataAnalysis_2.png) no-repeat center; background-size:cover;">
            <a class="link" href="http://www.apecagro.cn/tableauTrusted?gtmj" target="_blank">
              <p class="title">一带一路国家耕地与国土面积分析</p>
            </a>
          </div>
        </i-col>
        <i-col span="8" class="item">
          <div class="bg" style="background:url(/static/img/DataAnalysis_3.png) no-repeat center; background-size:cover;">
            <a class="link" href="http://www.apecagro.cn/tableauTrusted?gdp" target="_blank">
              <p class="title">一带一路国家GDP分析</p>
            </a>
          </div>
        </i-col>
      </Row> -->

      <div class="Detail">
        <div class="block-l content" id="block-l" style="width: 100%; margin-top:20px;">
           <div class="block baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 100%;">
              <div style="width: 100%; display: inline-block">
                  <div class="title section"><Icon type="document-text"></Icon>&nbsp;&nbsp;数据库</div>
                  <div class="content">
                    
                      <ul>
                        <router-link :to="{name: 'dataanalysetable', params:{typeid:1} }">
                          <li>
                              <div style="width: 100px;"></div>  
                              <div style="width: 20%;">
                                <h4>农业基础数据</h4>
                                <h4>Basic Data</h4>
                              </div>
                              <div style="width: 70%;">
                                <h4 style="text-align:left;color:#026EB8">世界各国有关国民经济，自然资源与农业的现有及历史数据。</h4>
                              </div>
                          </li>
                        </router-link>
                        <router-link :to="{name: 'dataanalysetable', params:{typeid:2} }">
                          <li>
                              <div style="width: 100px;"></div>
                              <div style="width: 20%;">
                                <h4>农产品数据</h4>
                                <h4>Commodity Reports</h4>
                              </div>
                              <div style="width: 70%;">
                                <h4 style="text-align:left;color:#026EB8">全球主要生产国家和消费国的农产品生产，供应和消费数据。</h4>
                              </div>
                          </li>
                        </router-link>
                      </ul>
                    
                  </div>
              </div>
           </div>
           <div class="block baseinfo" data-ref="baseinfo" ref="baseinfo" style="width: 100%; margin-top: 10px;">
              <div style="width: 100%; display: inline-block">
                  <div class="titleXG section"><Icon type="document-text"></Icon>&nbsp;&nbsp;特色数据报告</div>
                  <div class="content1" style="margin-top:20px;">

                     <ul>

                        <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}" v-for="item in data"> -->
                        <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" target="_blank" class="link-text" v-for="item in data">
                          <li style="width: 50%;float:left" >
                              <div>
                                <h4 style="color:#026EB8">{{item.Title}}</h4>
                              </div>
                          </li>
                        </a>
                        <!-- </router-link> -->
                      </ul>

                  </div>
              </div>
           </div>
        </div>
      </div>
      
      <div style="background:#E6E7E9;width:100%;height:35px;line-height:35px;padding-left:30px;color:#87B91D;font-weight:bold;font-size:16px;margin-top:10px;"><Icon type="document-text"></Icon>&nbsp;&nbsp;在线关联分析</div>
      <Row class="tablelist">
            <i-col span="6" class="item">
              <div class="bg" style="background:url(/static/img/5.jpg) no-repeat center; background-size:cover;">
                <a class="link" href="http://www.apecagridata.cn/timeline/myTimeline.html" target="_blank">
                  <p class="title">粮食安全态势研判辅助决策（玉米）</p>
                </a>
              </div>
            </i-col>
            <i-col span="6" class="item">
              <div class="bg" style="background:url(/static/img/DataAnalysis_2.png) no-repeat center; background-size:cover;">
                <a class="link" href="http://111.203.20.113/views/_0/sheet2?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no" target="_blank">
                  <p class="title">一带一路国家耕地与国土面积分析</p>
                </a>
              </div>
            </i-col>
            <i-col span="6" class="item">
              <div class="bg" style="background:url(/static/img/DataAnalysis_3.png) no-repeat center; background-size:cover;">
                <a class="link" href="http://111.203.20.113/views/GDP/GDP_2?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no
" target="_blank">
                  <p class="title">一带一路国家GDP分析</p>
                </a>
              </div>
            </i-col>
            <i-col span="6" class="item">
              <div class="bg" style="background:url(/static/img/DataAnalysis_1.png) no-repeat center; background-size:cover;">
                <a class="link" href="http://111.203.20.113/views/_1/sheet3?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no" target="_blank">
                  <p class="title">一带一路国家走出去企业及经商环境分析</p>
                </a>
              </div>
            </i-col>
        </Row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DataAnalyse',
  data: function(){
  	return {
      'location': window.location,
      'data': '',
  	}
  },
  mounted: function(){
    const _this = this;
    _this.getData();
  },
  methods: {
    "getData": function() {
      const _this = this;
      const getOneMenu = _this.global.$post({
          '_this': _this,
          'data': {
            draw: 0,
            start: 0,
            length: 10,
            retrievalInfo: '{}'
          },
          'url': _this.global.API.dataAndAnalysis.GetDataAnalyzeSR,  
          'f_resolve': function(data){
              let newData = JSON.parse(data.data);
              console.log('*************************',newData);
              _this.data = newData;
          }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .DataAnalyse{
      margin-top: 0.5rem !important;
  }
  .title-img{
      display: none !important;
  }
}

.DataAnalyse{
    height: auto;
    overflow: hidden;
    padding: 6px;
  
  .tablelist{
    .item{
      padding: 10px;
      height: 250px;
    }

    .bg{
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid @border-color-split;
      cursor: pointer;
    }

    .link{
      display: block;
      width: 100%;
      height: 100%;
    }

    .title{
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 70px;
      padding-top: 30px;
      text-align: center;
      font-size: 14px;
      color: white;
      background: url(/static/img/bg_shadow.png) repeat-x;
    }
  }


  .Detail{
    display: flex;
    border-top: 1px solid @border-color-base;
    margin-top: 0px;

    .block1{
      overflow: hidden;
    }
    .changeHeight{
      width: 100%; 
      height: 25px; 
      text-align: center; 
      font-size: 14px; 
      display: block;
      border-top: 1px dashed #E6E7E9;
      margin-top: 10px;
    }


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
      .titleXG{
        padding: 5px 30px;
        font-size: 16px;
        background: @title-bg;
        color: #87B91D;
        font-weight: bold;
      }
      .content{
        padding: 5px 30px;
        ul{
          list-style: none;
          li{
            cursor: pointer;
            height: 60px;
            border-bottom: 1px solid #E6E7E9;
            div{
              float:left;
              height: 60px;
              padding: 10px;
              h4{
                text-align: center;
              }
            }
            &:hover{
              background: @table-td-hover-bg;
            }
          }
        }
      }
      .content1{
        padding: 5px 30px;
        ul{
          list-style: none;
          li{
            cursor: pointer;
            height: 30px;
            border-bottom: 1px dashed #E6E7E9;
            div{
              height: 30px;
              line-height:30px;
              padding: 0px;
              h4{
                text-align: left;
                padding-left: 10px;
              }
            }
            &:hover{
              background: @table-td-hover-bg;
            }
          }
        }
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