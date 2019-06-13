<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Layout>
        <Header v-if="$route.name!='login'" v-bind:class="{ fix: isFixed }">
          <CommonHeaderNew v-show="$route.name=='home'? true: false"/>
          <CommonHeader v-show="$route.name=='home'? false: true"/>
          <!-- <CommonHeader /> -->
          <!-- <div v-show="$route.meta.back_show" @click="routerTo($route.meta.back_url)">back</div> -->
          <div class="mobileMenu">{{title_name}}</div>
          <CommonNav active='1' v-on:listen='showListen'  v-show="$route.name=='home'? false: true" />
          <holidaySuspended />  <!-- 节日弹框全局组件 -->
        </Header>
        <Content v-bind:class="{ fix: isFixed, noheader: $route.name=='login' }" >

          <keep-alive><!-- 缓存的页面 -->
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
           <router-view v-if="!$route.meta.keepAlive" />

          <Back-top class="totop" :height="100"  :bottom="120" :right="34">
              <Icon class="top" type="arrow-up-a"></Icon>
          </Back-top>

          <span style="position: fixed; right: 2%; bottom: 200px;cursor: pointer; text-align: center;" @click="chart('1930529185')"><img src="../static/img/kf.png" alt="联系我们" style="width: 70px;"><p style="font-weight: bold; color: #036EB8">在线咨询</p></span>
          <!-- <span style="position: fixed; right: 5%; bottom: 200px;cursor: pointer" ><a href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes"target="_blank"><img src="../static/img/kf.png" alt="联系我们" style="width: 70px"></a></span> -->
          
          

        </Content>
        <Footer>
          <CommonFooter/>
        </Footer>
    </Layout>

  </div>
</template>

<script>
import CommonHeaderNew from '@/components/CommonHeader_new'
import CommonHeader from '@/components/CommonHeader'
import CommonNav from '@/components/CommonNav'
import CommonFooter from '@/components/CommonFooter'
import secret_AES from './secret'

export default {
  name: 'App',
  components: {
    CommonHeaderNew: CommonHeaderNew,
    CommonHeader: CommonHeader,
    CommonNav: CommonNav,
    CommonFooter: CommonFooter
  },
  data: function () {
    return {
      isFixed: false,
      title_name: '首页',
      
    }

  },
  mounted: function () {

    if( sessionStorage.getItem('RoleId') !== '' ){
        sessionStorage.setItem('RoleId', '');  //设置权限标识
    }
    
    // 百度统计代码
    let cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    $('.ivu-layout').append(unescape("%3Cspan id='cnzz_stat_icon_1275743082'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s5.cnzz.com/stat.php%3Fid%3D1275743082%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

    const _this =this;
    // window.addEventListener('scroll', this.onScroll);
    $(document).scroll(function(){
      _this.onScroll();
    });

    if(!localStorage.getItem('SId') && !localStorage.getItem('url_cnki')){
      const prommise_getCurrentUser = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.UserManageService.GetCurrentUser,
        'data': {
          'SId': ''
        },
        'origin': true,
        'f_resolve': function(data){
          let resultData = JSON.parse(data.resultData);
          localStorage.setItem('url_cnki', resultData.url);
        }
      });
    }

    // _this.footerPosition();
    // $(window).resize(function(){
    //   _this.footerPosition();
    // });
    this.$Message.config({
        top: 200,
        duration: 5
    });
  },
  methods: {
    'onScroll': function () {
      let scrollY = window.scrollY
      if (scrollY > 60) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    'routerTo': function(url){
      this.router.push(url);
    },
    'showListen': function(data) {
        //console.log(data);
        this.title_name = data;
    },
    'chart': function(ele) {

        //其中1234567指的是QQ号码
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) || navigator.appName == "Microsoft Internet Explorer") {
            window.location.href="mqqwpa://im/chat?chat_type=wpa&uin="+ ele +"&version=1&src_type=web&web_src=oicqzone.com";
        }else{
            window.location.href="tencent://message/?uin="+ ele +"&Site=农业对外合作公共信息服务平台&Menu=yes";
        }
    }
    // 确定浏览器的footer位置
    // 'footerPosition':function () {
    //   $("Footer").removeClass('fixed-footer');
    //   let contentHeight = document.body.scrollHeight,
    //       winHeight = window.innerHeight;
    //   if (!(contentHeight>winHeight)) {
    //     $("Footer").addClass('fixed-footer');
    //   }else{
    //     $("Footer").removeClass('fixed-footer');
    //   }
    // },
  },
  watch: {
    $route () {
      const _this = this;
      // 切换页面时判断用户登录状态
      if(localStorage.getItem('SId')){
        const prommise_getCurrentUser = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.UserManageService.GetCurrentUser,
          'data': {
            'SId': secret_AES.Decrypt_ECB(localStorage.getItem('SId'))
          },
          'origin': true,
          'f_resolve': function(data){
            //console.log('***************************',data.resultData)
            let resultData = JSON.parse(data.resultData);
            if(data.success==1){
              //console.log('***************************',resultData)
              _this.$root.login = true;
              _this.$root.name = resultData.Name;
              sessionStorage.setItem('loginBS', 'ok');
              sessionStorage.setItem('name', resultData.Name);
              localStorage.setItem('url_cnki', resultData.url+'?'+ window.encodeURIComponent('token='+ localStorage.getItem('SId')));
            }
            else{
              _this.$root.login = false;
              _this.$root.name = "";
              sessionStorage.removeItem('loginBS');
              localStorage.setItem('SId', null);
              if(!localStorage.getItem('url_cnki')){
                localStorage.setItem('url_cnki', resultData.url);
              }
            }
          }
        });
      }
      else{
        _this.$root.login = false;
        _this.$root.name = "";
        sessionStorage.removeItem('loginBS');
      }
    }
  }
}
</script>

<style lang="less">
@import './assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .mobileMenu{
    display: block;
    font-size: 0.40rem;
    text-align: center;
    padding: 0.1rem
  }
  .ivu-layout-content{
      margin-top: 90px !important;
  }
}

@media only screen and (min-width: 800px) {
  .mobileMenu{
    display: none;
  }
}

.ivu-tabs-nav-wrap{
  padding-left: 35%;
  background-color: white;
}
.ivu-tabs-nav .ivu-tabs-tab-active{
    color: #0F75BB;
    font-size: 16px;
    font-weight: bold;
}
.ivu-tabs-ink-bar{
   background-color: #0F75BB;
    
}
.ivu-tabs-tab{
    font-size: 14px;
    color: black;
    padding-top: 0;
    padding-bottom: 0;
}
.ivu-tabs-nav-scroll{
     border-left: 3px solid #036EB8;
     padding-top: 0;
     padding-bottom: 0;
     margin-top: 14px;
     margin-bottom: 16px;
     padding-left: 20px;
}

#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @text-color;
}

.ivu-layout{
  position: absolute;
  width: 100%;
  /*height: 100%;*/
  flex-direction: column;
  min-height: 100%;
  /*margin-bottom: 50px;*/
  background: #fff;

  .ivu-back-top i{
    font-size: 35px;
  }
  /*.ivu-back-top .ivu-back-top-show{
    right: 38px;
  }*/

  .ivu-layout-header{
    position: absolute;
    width: 100%;
    height: auto;
    padding: 0;
    line-height: 1;
    background: rgb(255,252,241);
    z-index: 1000;
   /* flex: 0 0 auto;
    -ms-flex:0 0 auto;*/
    *{
      transition: all .5s;
    }
  }

  

  .ivu-layout-footer{
    padding:0;
    background: #495060;
   /* flex: 0 0 auto;
    -ms-flex: 0 0 auto;*/
  }
  .fixed-footer{
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 260px;
    padding: 25px 0;
  }
}

/* 百度统计图标 */
#cnzz_stat_icon_1275743082{
  position: absolute;
  bottom: 0;
  left: 5px;
}
</style>
