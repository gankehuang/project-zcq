<template>
  <div class="PolicyList">
    <div class="container-main clearfix">
      <!-- <div class="search">
        <input class="searchbox" placeholder="请输入..." style="width:120px" v-model.trim = "searchKey" @keyup.enter="show($event)"></input>
        <router-link tag="a" :to="{name:'searchlist', params:{typeid:$route.params.typeid}}" slot="extra">搜索</router-link>
        <a @click.prevent="getTitle()" slot="extra">搜索</a>
      </div> -->
      <!-- <Card>
        <div class="container">   
          <div class = "navtext"  :class="{nav:curr==''}">
            <a @click="toGetProductlist('')">国家报告</a>
          </div> 
          <div class="navtext" :class="{nav: 1 == curr}">
            <a @click="toGetProductlist(1)">海外观察</a>
          </div>
          <div class="navtext" :class="{nav: 2 == curr}">
            <a @click="toGetProductlist(2)">农产品市场</a>
          </div>
          <div class="navtext" :class="{nav: 3 == curr}">
            <a @click="toGetProductlist(3)">科技成果</a>
          </div>
        </div>  
      </Card> -->

      <div class="PolicyMain containermain">
        <div class="info-box second">
            <CountryReportList icon-type="ios-book" :class-id="infobox.id.toString()" :type="this.$route.params.typeid" :searchkey="searchtext" length="10"/>
        </div>       
      </div> 

    </div>  
  </div>
</template>

<script>
//import PolicyInfoBox from '@/components/PolicyInfoBox'
import CountryReportList from '@/components/CountryReportList'


// 节流函数
const delay = (function() {
  let timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

export default {
  name: 'Overseas',
  components: {
    CountryReportList: CountryReportList,
  },
  data: function () {
    return {
      search: '/hello',
      classlist: [],
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

      // 获取所有分类
      /*const prommise_getClasslist = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.Policy.GetLable,
        //'url': _this.global.API.Policy.getClassify,
        'data': {
          type: _this.$route.params.typeid
        },

        'f_resolve': function(data){
          //console.log(data);
          _this.classlist = data;
          // _this.toGetProductlist(_this.classlist[0]._id, _this.classlist[0].Name);
        }
      });*/
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
    'toGetProductlist': function(id){   
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

.PolicyList{
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
      margin-top: 20px;
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