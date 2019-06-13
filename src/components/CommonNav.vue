<template>
  <div class="CommonNav">
    <div class="menu mobileMenu">
      <Menu ref="menu" mode="horizontal" theme="primary" :active-name="active" class="container-main navlist" @on-select="routerTo">
          <MenuItem name="1"><a>首页</a></MenuItem>
          <MenuItem name="8"><a>新闻与资讯</a></MenuItem>
          <MenuItem name="4"><a>海外农业研究</a></MenuItem>
          <MenuItem name="3"><a>行业与产品</a></MenuItem>
          <MenuItem name="2"><a>国家与地区</a></MenuItem>
          <MenuItem name="5"><a>政策与法规</a></MenuItem>
          <MenuItem name="6"><a>对外合作</a></MenuItem>
          <MenuItem name="7"><a>数据与分析</a></MenuItem>
      </Menu>
    </div>

    <div class="menuPC">
          <Row>
            <i-col :xs="10" :sm="10" :md="10">
              <div style="text-align: center; background-color: green; color: white; height: 0.4rem; line-height: 0.4rem; vertical-align: middle;" @click="tab()"><Icon type="arrow-down-b"></Icon></div> 
              <Menu active-key="1" ref="menu" theme="primary" :active-name="active" @on-select="routerTo" style="border-radius: 0.1rem; ">
                      <li v-for="item in tab1"><Menu-item :name="item.id"><a @click="tabXS($event)">{{item.title}}</a></Menu-item></li>
                        
                      <!-- <Menu-item name="2"><a>国家与区域</a></Menu-item>
                      <Menu-item name="3"><a>行业与产品</a></Menu-item>
                      <Menu-item name="4"><a>政策与法规</a></Menu-item>
                      <Menu-item name="5"><a>监测与预警</a></Menu-item>
                      <Menu-item name="6"><a>投资实务</a></Menu-item>
                      <Menu-item name="7"><a>数据与分析</a></Menu-item> -->
              </Menu>

            </i-col>
          </Row>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CommonNav',
  data: function(){
    return {
      'active': '-',
      'tab1': [
       ],
      'tabData': {
         'one': [
         ],
         'two': [
            {'id': 1, 'title': '首页'},
            {'id': 2, 'title': '国家与地区'},
            {'id': 3, 'title': '行业与产品'},
            {'id': 4, 'title': '海外农业研究'},
            {'id': 5, 'title': '政策与法规'},
            {'id': 6, 'title': '对外合作'},
            {'id': 7, 'title': '数据与分析'},
            {'id': 8, 'title': '新闻与资讯'}
         ]
      },
      'flag': true,
      'title_name': "首页"
    }
  },
  mounted: function () {
    this.changeCurrentActive();
  },
  methods: {
    routerTo: function (name) {
      let to = '/';
      switch(name.toString()){
        case '1': to = '/home'; break;
        case '2': to = '/country/list'; break;
        case '3': to = '/product/list'; break;
        case '4': to = '/overseas'; break;
        case '5': to = '/policyAllList'; break;
        case '6': to = '/foreignCooperation'; break;
        case '8': to = '/policy/list/1'; break;
        case '7': to = '/dataanalyse'; break;
        default: to = '/';
      }
      this.router.push(to);
    },
    tab: function() {
      if(this.flag) {
          this.tab1 = this.tabData.two;
          this.flag = false;
      }else {
          this.tab1 = this.tabData.one;
          this.flag = true;
      }
    },
    tabXS: function(e) {
          this.$emit('listen', e.currentTarget.innerText);
          //console.log(e.currentTarget.innerText);
          this.title_name = e.currentTarget.innerText;
          this.tab1 = this.tabData.one;
          this.flag = true;
      
    },
    changeCurrentActive: function(){
      let active_name = '1';
      switch(this.$route.name){
        case '/':
        case 'home':
          active_name = '1'; break;
        case 'countrylist':
        case 'countrylisten':
        case 'countrymaplist':
        case 'countrylistwithareaid':
        case 'countrydetail':
        case 'countrydetailen':
        case 'literaturedetail':
          active_name = '2'; break;
        case 'productlist':
        case 'productlisten':
        case 'productlistwithareaid':
        case 'productdetail':
        case 'productdetailen':
          active_name = '3'; break;
        case 'overseas':
        case 'countryreportalllist':
        case 'pdf':
          active_name = "4"; break;
        case 'policyalllist':
        case 'newlist':
        // case 'policyalldetail':
          active_name = "5"; break;
        
        case 'policylistwithareaid':
        
          switch(this.$route.params.typeid.toString()){
            case '1': active_name = '5'; break;
            case '2': active_name = '5'; break;
            case '3': active_name = '5'; break;
          }; break;
        case 'foreigncooperation':
        case 'pclist':
        case 'pcalldetail':
          active_name = '6'; break;
        case 'dataanalyse':
        case 'dataanalysetable':
          active_name = '7'; break;
        case 'policylist':
        case 'policynewlist':
        case 'policydetailwithtype':
          active_name = '8'; break;
        default: active_name = '0';
      }
      this.active = active_name.toString();
      this.$nextTick(() => {
        this.$refs.menu.updateActiveName();
      });
    }
  },
  watch: {
    $route: function(){
      this.changeCurrentActive();
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

@media only screen and (max-width: 800px) {
  .CommonNav{
      .mobileMenu{
         display: none !important;
      }
      .menuPC{
         display: block !important;
      }
      .ivu-menu{
         width: 100% !important;
         overflow: hidden !important;
      }
  }
}
@media only screen and (min-width: 800px) {
  .CommonNav{
      .mobileMenu{
         display: block !important;
      }
      .menuPC{
         display: none !important;
      }
  }
}

.CommonNav{
  background: #fffcf1;
  width: 100%;
  .menu {
    height: 40px;
    display: block;
    padding: 0px;
    width: 100%;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 4px;
    margin-left: auto;
    line-height: 40px;
}
.ivu-menu-primary{
  background-color: #055A93;
  /*background-image: url(/static/img/images/menu_bg.gif);*/
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background-repeat: repeat-x;
  background-position: 0px 0px;
}
  .navlist{
    display: flex;
    height: 40px;
    line-height: 40px;
    

    & > *{
      flex: 1;
      text-align: center;
    }
    .ivu-menu-item, .ivu-menu-submenu{
      padding: 0;
    }

    a{
      display: block;
      padding: 0 10px;
      color: #fff;
      height: 40px;
      line-height: 40px;

      &:hover{
        text-decoration: none;
        color: #fff;
        height: 40px;
        background-image: url(/static/img/images/bg_over.png);
        background-repeat: no-repeat;
        /*background-size: 1px 1px;*/
        background-position: center center;
      }
    }
  }
}

</style>


