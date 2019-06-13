<template>
  <div class="Home">

    <!-- 轮播图 -->
    <!-- <SlideshowPhoto/> -->
    
    <div class="container-main clearfix">

      <div class="info-box search" style="height: 100px; margin-top: 20px; padding: 20px 50px;">
          <span style="width: 10%; font-size: 15px; font-weight: bold; border-radius: 5px 0 0 5px">全文检索</span>
          <input type="text" placeholder="中文文献、外文文献（Country、Product）..." v-model.trim = "searchKey">
          <!-- <router-link class="link-text" :key="searchKey" :to="{name:'globalsearch', params:{content: searchKey, show: 0}}"> -->
            <span style="width: 6%; font-size: 20px; font-weight: bold; border-radius: 0 5px 5px 0; cursor: pointer" @click="toCNKI()"><Icon type="search"></Icon></span>
          <!-- </router-link> -->
          <!-- <router-link class="link-text" :key="searchKey" :to="{name:'globalsearch', params:{content: searchKey, show: 0}}"> -->
              <span style="float:right;background:#026EB8;height:45px;padding: 0px 10px; border-radius: 5px 5px 5px 5px; cursor:pointer" @click="toCNKI()">高级检索</span>
          <!-- </router-link> -->
      </div>
      

      <div class="slide" style="display: none; " >
        <SlideshowPhoto/>
      </div>
      <div class="info-box news" style="font-size:14px; height:380px; margin-bottom:10px">
       <NewInfoBox style="height:380px" info-name="新闻与资讯" icon-type="earth" more-link="/policy/list/1" class-id="" type="1" length="10" img-news="SlideshowPhoto"/>
      </div>

      <div class="info-box second">
        <!-- <PolicyInfoBox icon-type="ios-book" info-name="海外农业研究" more-link="/policy/list/2" class-id="" type="2" length="5"/> -->
          <Card class="card" style="height:350px;">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>海外农业研究</p>
            <router-link tag="a" :to="{name:'overseas', params:{typeid:2}}" slot="extra" class="link-more">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></router-link>
                <ul class="infolist">
                  <li class="item" v-for="item in hwgclist" style="height: 30px;">
                    <router-link class="link-text" :key="item.Identification" :to="{name:'pdf', params: {srcPath:item.Content,name:item.Title}}">
                      <b class="title text-nowrap" style="font-size: 14px;">{{item.Title}}</b>
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    </router-link>
                  </li>

                  <li class="item" v-for="item in infolist">
                    <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'policyalldetail', params:{typeid:type, articleid:item.Identification, unique_code: item.OnlyIndex}}"> -->
                    <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" target="_blank" class="link-text">
                      <b class="title text-nowrap" style="font-size: 14px;">{{item.Variety}}</b>
                    </a>
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    <!-- </router-link> -->
                  </li>

                </ul>
          </Card>

      </div>
       <div class="info-box second" style="margin-left: 1%">
          <!-- <NewInfoBox icon-type="ios-paper" info-name="行业与产品" more-link="/policy/list/5" class-id="" type="1" length="5"/> -->
          <Card class="card" style="height:350px;">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>行业与产品</p>
            <router-link tag="a" :to="{name:'productlist', params:{typeid:2}}" slot="extra" class="link-more">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></router-link>
            <!-- <a class="link-more ivu-card-extra" @click="toCNKI()">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></a> -->
                <ul class="infolist">
                  <li class="item" v-for="item in product">
                    
                    <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.SYS_FLD_SYSID}}"> -->
                      <!-- <b class="title text-nowrap" style="font-size: 14px;">{{item.Title}}</b>  -->
                      <a class="title text-nowrap" target="_blank" style="font-size: 14px;font-weight:bold;text-decoration:none" @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)">{{item.Title}}</a>   
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    <!-- </router-link> -->
                  </li>
                </ul>
          </Card>
       </div>
      <div class="info-box second" style="margin-top:10px;">
        <!-- <NewInfoBox icon-type="ios-pulse-strong" info-name="数据与分析" more-link="/policy/list/3" class-id="" type="1" length="5"/> -->
        <Card class="card" style="height:350px;">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>数据与分析</p>
            <router-link tag="a" :to="{name:'dataanalyse', params:{typeid:2}}" slot="extra" class="link-more">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></router-link>
                <ul class="infolist">
                  <li class="item" v-for="item in data">
                    <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}"> -->
                    <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" target="_blank" class="link-text">
                      <b class="title text-nowrap" style="font-size: 14px;">{{item.Title}}</b>
                    </a>
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    <!-- </router-link> -->
                  </li>
                  <li style="width:100%; height: 150px;">
                    <a class="link" href="http://www.apecagridata.cn/timeline/myTimeline.html" target="_blank">
                      <img src="/static/img/5.jpg" alt="" style="width:45%;margin-left:15px;border:1px solid #EEEEEE;height:150px">
                    </a>
                    <a class="link" href="http://111.203.20.113/views/_0/sheet2?:embed=y&:showShareOptions=true&:display_count=no&:showVizHome=no" target="_blank">
                      <img src="/static/img/DataAnalysis_2.png" alt="" style="width:45%;margin-left:15px;border:1px solid #EEEEEE;height:150px;">
                    </a>
                  </li>
                </ul>
          </Card>
      </div>
      
      <div class="info-box second" style="margin-left: 1%; height: 360px;overflow:hidden;margin-top:10px;">
        <!-- <PolicyInfoBox icon-type="ios-world" info-name="国家与地区" more-link="/policy/list/4" class-id="" type="1" length="5"/> -->
          <Card class="card" style="height:350px;">
            <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>国家与地区</p>
            <router-link tag="a" :to="{name:'countrylist', params:{typeid:2}}" slot="extra" class="link-more">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></router-link>
            <!-- <a class="link-more ivu-card-extra" @click="toCNKI()">More&nbsp;<Icon class="icon" type="arrow-right-b"></Icon></a> -->
                <ul class="infolist">
                  <li class="item" v-for="item in country">
                    <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}"> -->
                      <!-- <b class="title text-nowrap" style="font-size: 14px;">{{item.Title}}</b> -->
                      <a class="title text-nowrap" target="_blank" style="font-size: 14px;font-weight:bold;text-decoration:none" @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)">{{item.Title}}</a> 
                      <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                    <!-- </router-link> -->
                  </li>
                </ul>
          </Card>
      </div>  
    </div>
  </div>
</template>
<script>
// import HomeInfoBox from '@/components/HomeInfoBox'
import PolicyInfoBox from '@/components/PolicyInfoBox'
import NewInfoBox from '@/components/NewInfoBox'
import SlideshowPhoto from '@/components/SlideshowPhoto'   //引入轮播图组件
import secret_AES from '../secret'


export default {
  name: 'Home',
  components: {
    // HomeInfoBox: HomeInfoBox,
    PolicyInfoBox: PolicyInfoBox,
    NewInfoBox: NewInfoBox,
    SlideshowPhoto: SlideshowPhoto
  },
  data: function () {
    return {
      searchKey: '' ,    //input框里输入的内容
      hwgclist: '',
      data: '',
      infolist: '',
      url_cnki: '',
      product: [
        {'OnlyIndex': 'MLA201804130100362','Title': 'Linking pre-export factors to post delivery performance in cattle exported from northern Australia to Indonesia', 'time':2017,'SYS_FLD_SYSID': '217144'},
        {'OnlyIndex': 'MLA201804130100979','Title': 'Outcomes of the goat industry cost of production workshops', 'time':2017,'SYS_FLD_SYSID': '217760'},
        {'OnlyIndex': 'CGIAR201804030117346','Title': 'Adoption and impact of gaps in pig value chains: Implications for institutional policy and practice change', 'time':2017,'SYS_FLD_SYSID': '208912'},
        {'OnlyIndex': 'AAFC201804090105653','Title': 'COSEWIC assessment and status report on the Coho salmon, Oncorhynchus kisutch, interior Fraser population, in Canada', 'time':2017,'SYS_FLD_SYSID': '216314'},
        {'OnlyIndex': 'FRDC201804101593','Title': 'Improvement in quality of meat from frozen reject trawl-caught blue crabs', 'time':2017,'SYS_FLD_SYSID': '68467'},
        {'OnlyIndex': 'FRDC201804101593','Title': 'Improvement in quality of meat from frozen reject trawl-caught blue crabs', 'time':2017,'SYS_FLD_SYSID': '68467'},
        {'OnlyIndex': 'FRDC201804101593','Title': 'Federal Crop Insurance Options for Upland Cotton Farmers and Their Revenue Effects', 'time':2016,'SYS_FLD_SYSID': '68467'},
        {'OnlyIndex': 'AGECON201712236513','Title': 'Dynamics of Price Adjustment in Qualitatively Differentiated Markets in the U.S.: The Case of Organic and Conventional Apples', 'time':2016,'SYS_FLD_SYSID': '22498'}

        // {'OnlyIndex': 'AGECON201712236513','Title': 'Societal Context and Its Impact on Demand for New Products: the case of grapefruit in South Korea', 'time':2016},
        // {'OnlyIndex': 'USDAFAS201804170587','Title': 'China - Peoples Republic of: Citrus Annual', 'time':2016}
        // {'OnlyIndex': 'SAGE201801124302','Title': 'Social Capital and Implementation of Subsidized Fertilizer Programme for Small Farmers A Case Study in Rural Java, Indonesia', 'time':2016}
      ],
      country: [
        {'OnlyIndex': 'PRINT201809110045','Title': '中国与“一带一路”沿线国家经贸合作国别报告(中东欧篇)','SYS_FLD_SYSID': '218870'},
        {'OnlyIndex': 'PRINT201809110035','Title': '澳大利亚农业','SYS_FLD_SYSID': '218845'},
        {'OnlyIndex': 'PRINT201809060100031','Title': '亚太地区发展报告（2017）','SYS_FLD_SYSID': '218798'},
        {'OnlyIndex': 'PRINT201809110025','Title': '中国与“一带一路”沿线国家经贸合作国别报告(东亚、中亚与西亚篇)','SYS_FLD_SYSID': '218835'},
        {'OnlyIndex': 'PRINT201809110027','Title': '乌兹别克斯坦共和国林业发展报告','SYS_FLD_SYSID': '218837'},
        {'OnlyIndex': 'EB201801020001','Title': 'Encyclopedia Britannica: Albania','SYS_FLD_SYSID': '39495'},
        {'OnlyIndex': 'EB201801020002','Title': 'Encyclopedia Britannica: Afghanistan','SYS_FLD_SYSID': '39496'},
        {'OnlyIndex': 'EB201801020003','Title': 'Encyclopedia Britannica: Argentina','SYS_FLD_SYSID': '39497'}
        /*{'OnlyIndex': 'EIU201711230377','Title': 'country commerce July 2017: Malaysia'},
        {'OnlyIndex': 'GYW2018041902470','Title': '世界银行：2018年营商环境报告——中国（EN）'},
        {'OnlyIndex': 'EIU201711230106','Title': 'country commerce January 2017: Colombia'},
        {'OnlyIndex': 'GYW2018041901477','Title': '世界银行：2018年营商环境报告——哈萨克斯坦（EN）'},
        {'OnlyIndex': 'GYW2018041901474','Title': '世界银行：2018年营商环境报告——柬埔寨（EN）'}*/
      ],
    }
  },
  mounted: function() {
      const _this = this;

      const prommise_getHwgclist = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.HwyjManageService.GetAllData,
        //'url': _this.global.API.Policy.getClassify,
        'data': {
            type: 2,
            draw: 0,
            start: 0,
            length: 4,
            retrievalInfo: '{}'
          },
          'f_resolve': function(data){
              let countryData1 = JSON.parse(data.data);
              /*for(var i=0; i<countryData.length; i++) {
                if(countryData[i].Countryother){
                  countryData[i].Countryother = JSON.parse(countryData[i].Countryother);
                }
              }*/
              //console.log('@@@@@@@@@@@@',countryData1);
              _this.hwgclist = countryData1;
          }
      });
      const getOneMenu = _this.global.$post({
          '_this': _this,
          'data': {
            draw: 0,
            start: 0,
            length: 3,
            retrievalInfo: '{}'
          },
          'url': _this.global.API.dataAndAnalysis.GetDataAnalyzeSR,  
          'f_resolve': function(data){
              let newData = JSON.parse(data.data);
              _this.data = newData;
          }
      });

      const prommise_getInfoList = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.HwyjManageService.GetAllData,
        'data': {
            type: 3,
            draw: 0,
            start: 0,
            length: 4,
            retrievalInfo: '{}'
        },
        'f_resolve': function(data){
          //console.log('@@@@@@@@@@@', data);
          let new_infolist = JSON.parse(data.data);
          _this.infolist = new_infolist;
          
        }
      });
  },
  methods: {
    
    'toCNKI': function(){
      const _this = this;
      let data = sessionStorage.getItem('loginBS');
      if(data == null || !localStorage.getItem('SId')){
          _this.$root.login = false;
          _this.$root.name = "";
          sessionStorage.removeItem('loginBS');
          localStorage.setItem('SId', null);
          this.$Message.success('请先登录！');
          return;
      } else{
        const prommise_getCurrentUser = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.UserManageService.GetCurrentUser,
          'data': {
            'SId': secret_AES.Decrypt_ECB(localStorage.getItem('SId'))
          },
          'origin': true,
          'f_resolve': function(data){
            let resultData = JSON.parse(data.resultData);
            if(data.success==1){
              
              _this.$root.login = true;
              _this.$root.name = resultData.Name;
              sessionStorage.setItem('loginBS', 'ok');
              sessionStorage.setItem('name', resultData.Name);
              localStorage.setItem('url_cnki', resultData.url+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));
              
              _this.global.toCNKI();
            }
            else{
              _this.$root.login = false;
              _this.$root.name = "";
              sessionStorage.removeItem('loginBS');
              localStorage.setItem('SId', null);
              if(!localStorage.getItem('url_cnki')){
                localStorage.setItem('url_cnki', resultData.url);
              }
              _this.$Message.success('请先登录！');
              return;
            }
          }
        });
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.keepAlive = false; // 让 A 不缓存，即刷新
    next();
  }
}

</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';
.Home{

  @media only screen and (max-width: 800px) {
    /* margin-top: -0.6rem !important; */
    .container-main{
        width: 100% !important;
        .second{
            width: 100% !important;
            display: inline-block !important;
            padding: 0 !important;
        }
        .slide{ 
            display: block !important;
        }
    }
  }

  margin-top: 10px;
  
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

  .info-box{
    float: left;
    display: inline-block;
    width: 49.5%;
    margin: 0;
    border: none;

    &:nth-of-type(2n){
      padding-right: 5px;
    }

    &.news{
      width: 100%;
      display: inline-block;
      padding: 0;
    }
    &.search{
      width: 100%;
        span{
           display: inline-block;
           float:left;
           height: 45px;
           line-height: 45px;
           text-align: center;
           background: #026EB8;
           color: white;
        }
        input{
           float:left;
           width: 75%;
           height: 45px;
           border: 1px solid #026EB8;
           padding-left: 15px;
        }
    }
    .PolicyInfoBox{
      height: 330px;
      overflow: hidden;
    }
  }
}
</style>
