<template>
  <div class="Home">

    <!-- 轮播图 -->
    <!-- <SlideshowPhoto/> -->
    
    <div class="container-main clearfix" style="margin-top: 270px;">
      <div class="slide" style="display: none; text-align: left" >
        <SlideshowPhoto/>
      </div>
      <div class="info-box news" style="font-size:14px; height:360px; margin-bottom:0px; margin-top: 10px; padding-right: 20px;">
        <h3 style="color:black; font-size: 21px; font-weight: bold; border-left: 5px solid #036EB8;padding-left: 20px; margin-bottom: 30px; margin-right: 20px; line-height: 1; margin-top:10px; margin-left: 20px; ">新闻与资讯
            <router-link tag="a" :to="{path:'/policy/list/1', params:{typeid:2}}" slot="extra" class="link-more"><span style="color:#B3B3B5; float: right; font-size: 12px;">更多></span></router-link>
        </h3>
       <NewInfoBox1 style="height:310px" more-link="/policy/list/1" class-id="" type="1" length="10" img-news="SlideshowPhoto"/>
      </div>
    </div>

    <div class="container-main clearfix" id="main" style="text-align: center; cursor: pointer;">
        <img src="/static/img/zhongtu6.png" alt="" style="width: 100%;height: 130px;" @click="toCNKI()">
    </div>

    <div class="container-main clearfix" id="main" style="text-align: center;" >
        <Tabs :animated="false" class="tabs-product-country">
            <TabPane label="行业与产品" name="name1" class="tab-product">
                <div style="position: absolute; width: 100%; text-align: right">
                    <router-link tag="a" :to="{name:'productlist'}" slot="extra" class="tabs_more" style="text-align:right; color: #B3B3B5; font-size: 12px;padding-right: 40px;"><span>更多></span></router-link>
                </div>
                <h3 style="color:#767676">行业发展&nbsp; · &nbsp;供需形势&nbsp; · &nbsp;进出口分析&nbsp; · &nbsp;市场状况&nbsp; · &nbsp;农业标准&nbsp; · &nbsp;知名企业</h3>

                <ul class="pcBox">
                    <router-link :to="{name:'productdetail', params:{imageid:95}}"><li><img src="/static/img/cy.png" alt=""><span>茶</span></li></router-link>
                    <router-link :to="{name:'productdetail', params:{imageid:121}}"><li><img src="/static/img/nj.png" alt=""><span>农机</span></li></router-link>
                    <router-link :to="{name:'productdetail', params:{imageid:100}}"><li><img src="/static/img/sd.png" alt=""><span>稻米</span></li></router-link>
                    <router-link :to="{name:'productdetail', params:{imageid:86}}"><li><img src="/static/img/pg.png" alt=""><span>苹果</span></li></router-link>
                    <router-link :to="{name:'productdetail', params:{imageid:101}}"><li><img src="/static/img/l.png" alt=""><span>梨</span></li></router-link>
                    <router-link :to="{name:'productdetail', params:{imageid:90}}"><li><img src="/static/img/dd.png" alt=""><span>大豆</span></li></router-link>
                </ul>
            </TabPane>
            <TabPane label="国家与地区" name="name2" clsss="tab-country">
                <div style="position: absolute; width: 100%; text-align: right">
                    <router-link tag="a" :to="{name:'countrylist'}" slot="extra" class="tabs_more" style="text-align:right; color: #B3B3B5;font-size: 12px;padding-right:40px"><span>更多></span></router-link>
                </div>
                <h3 style="color:#767676">政治经济&nbsp; · &nbsp;文化生活&nbsp; · &nbsp;农业发展&nbsp; · &nbsp;农业投资合作&nbsp; · &nbsp;涉农政策法规&nbsp; · &nbsp;涉农机构企业</h3>
                <ul class="pcBox">
                    <router-link :to="{name:'countrydetail', params:{countryid:68}}"><li><img src="/static/img/agl.png" alt=""><span>安哥拉</span></li></router-link>
                    <router-link :to="{name:'countrydetail', params:{countryid:27}}"><li><img src="/static/img/trq.png" alt=""><span>土耳其</span></li></router-link>
                    <router-link :to="{name:'countrydetail', params:{countryid:33}}"><li><img src="/static/img/wzbkst.png" alt=""><span>乌兹别克斯坦</span></li></router-link>
                    <router-link :to="{name:'countrydetail', params:{countryid:8}}"><li><img src="/static/img/flb.png" alt=""><span>菲律宾</span></li></router-link>
                    <router-link :to="{name:'countrydetail', params:{countryid:14}}"><li><img src="/static/img/mlxy.png" alt=""><span>马来西亚</span></li></router-link>
                    <router-link :to="{name:'countrydetail', params:{countryid:30}}"><li><img src="/static/img/hskst.png" alt=""><span>哈萨克斯坦</span></li></router-link>
                    
                </ul>
            </TabPane>
        </Tabs>

    </div>
    
    <div class="policy_regulation" style="width: 100%; height: 200px;background: #F3F6FB; padding: 20px">
        <div class="container-main clearfix" id="main" style="text-align: center; ">
            <div>
                <h2>政策与法规
                    <router-link tag="a" :to="{name:'policyalllist'}" slot="extra" class="link-more"><span>更多></span></router-link>
                  </h2>
                <ul>
                    <li><img src="/static/img/z1.png" alt=""><span>投资法务指南</span></li>
                    <li style="padding-left: 50px;"><img src="/static/img/z2.png" alt=""><span>农业政策法规</span></li>
                    <li><img src="/static/img/z3.png" alt=""><span>商事法律讨论</span></li>
                    <li style="padding-left: 50px;"><img src="/static/img/z4.png" alt=""><span>相关法律法规</span></li>
                    <li><img src="/static/img/z5.png" alt=""><span>典型案例</span></li>
                    <li style="padding-left: 50px;"><img src="/static/img/z6.png" alt=""><span>规则惯例</span></li>
                </ul>
            </div>
            <div>
                <h2>对外合作
                    <router-link tag="a" :to="{name:'foreigncooperation'}" slot="extra" class="link-more"><span>更多></span></router-link>
                </h2>
                <ul>
                    <li><img src="/static/img/d1.png" alt=""><span>投资指南</span></li>
                    <li style="padding-left: 50px;"><img src="/static/img/d2.png" alt=""><span>风险预警</span></li>
                    <li><img src="/static/img/d3.png" alt=""><span>案例分析</span></li>
                    <li style="padding-left: 50px;"><img src="/static/img/d4.png" alt=""><span>科技成果</span></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="policy_regulation" style="width: 100%; height: 300px; padding: 20px;  ">
        <div class="container-main clearfix" id="main" style="text-align: center;">
            <div style="width: 100%">
                <h2>数据与分析
                  <router-link tag="a" :to="{name:'dataanalyse', params:{typeid:2}}" slot="extra" class="link-more"><span>更多></span></router-link>
                </h2>
                <div style="width: 50%; height: 300px;">
                    <TagCloud width="500" height="300" :taglist="taglist" />
                </div>
                <div style="width: 500px; height: 200px; float: right; margin-right: 50px;">
                    <Carousel autoplay v-model="sjfx" loop style="width: 100%;height: 300px ">
                        <CarouselItem>
                            <img src="/static/img/s1.png" alt="" style="width: 100%">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/static/img/s2.png" alt="" style="width: 100%">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/static/img/s3.png" alt="" style="width: 100%">
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/static/img/s4.png" alt="" style="width: 100%">
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
           
        </div>
    </div>


  </div>
</template>
<script>
// import HomeInfoBox from '@/components/HomeInfoBox'
import PolicyInfoBox from '@/components/PolicyInfoBox'
import NewInfoBox from '@/components/NewInfoBox'
import NewInfoBox1 from '@/components/NewInfoBox1'
import SlideshowPhoto from '@/components/SlideshowPhoto'   //引入轮播图组件
import TagCloud from '@/components/TagCloud'
import secret_AES from '../secret'


export default {
  name: 'Home',
  components: {
    // HomeInfoBox: HomeInfoBox,
    PolicyInfoBox: PolicyInfoBox,
    NewInfoBox: NewInfoBox,
    NewInfoBox1: NewInfoBox1,
    SlideshowPhoto: SlideshowPhoto,
    TagCloud: TagCloud
  },
  data: function () {
    return {
      searchKey: '' ,    //input框里输入的内容
      hwgclist: '',
      data: '',
      infolist: '',
      url_cnki: '',
      taglist: [{"name":"国民经济数据"},{"name":"农业基础数据"},{"name":"农产品生产数据"},{"name":"农业供应数据"},{"name":"农产品贸易数据"}],
      sjfx: 0

      
    }
  },
  mounted: function() {
      const _this = this;

      
      

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

 /*  @media only screen and (max-width: 800px) {
   margin-top: -0.6rem !important;
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
 } */
  


  margin-top: 10px;
  
  

  .policy_regulation{
      
      div{
          height: 180px;
          div{
              width: 50%;
              float:left;
              h2{
                  border-left: 5px solid #036EB8;
                  text-align: left;
                  padding-left: 20px;
                  padding-right: 20px;
                  line-height: 1;
                  margin: 5px 0;
                  span{
                      float: right;
                      font-size: 12px;
                      color: #B3B3B5;
                      padding: 10px;
                      padding-right: 40px;
                  }
              }
              ul{
                  list-style: none;
                  margin-top: 20px;
                  width: 80%;
                  margin-left: 7%;
                  li{
                      float: left;
                      text-align: left;
                      margin-top: 5px;
                      width: 50%;
                      font-size: 16px;
                      color: #3f91c9;
                      font-weight: bold;
                      img{
                          vertical-align: middle;
                          margin-right: 10px;   
                      }
                  }
              }
          }
      }
  }

  .container-main{
      .pcBox{
          list-style: none;
          margin-top: 20px;
          padding: 10px;
          padding-left: 40px;
          width: 100%;
          height: 150px;
          li{
              float: left;
              cursor: pointer;
              /* box-shadow: #ced2db 0 1px 2px 0; */
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
              width: 14.6%;
              height: 100px;
              line-height: 100px;
              margin: 10px;
              img{
                  vertical-align: middle;
                  margin-right: 10px;   
              }
              span{
                  color: black;
                  font-weight: bold;
                  font-family: '黑体';
                  font-size: 16px;
              }
          }
          li:hover{
              border: 1px solid #D0D0D0;
              transform:Scale(1.08);
              transition:all 500ms ease;
              background: white;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
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

<style lang="less">
@import '../assets/styles/common.less';

.Home{
  .tabs-product-country{
    .ivu-tabs-tab{
      font-size: 21px;
      font-weight: bold;
    }
    
    .ivu-tabs-nav-scroll{
      position: relative;
      border: none;
      margin-bottom: 0;
      &:before{
        content: '';
        width: 5px;
        height: 21px;
        position: absolute;
        top: 15px;
        left: 0;
        background: @primary-color;
      }
    }
  }
}

.ivu-layout-content{
    margin-top: 160px;
    padding: 0 0 50px;
    height: auto;
    /*flex: 1 0 auto;
    -ms-flex:1 0 auto;*/
    background: #fff;


    /*&.fix{
      margin-top: 55px;
    }*/

    &.noheader{
      position: relative;
      margin-top: 0;
      padding-bottom: 0;
    }

    .totop{
    
      .top{
        /*right: 36px;*/
        padding: 6px;
        text-align: center;
        color: #fff;
        background: @primary-color;
        border-radius: 2px;
        opacity: .7;
      }
    }
  }
</style>
