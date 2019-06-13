<template>
  <div class="PolicyList">
    <div class="container-main clearfix">
      <!-- <Card class="block-l content" style="height: 55px; margin-top:10px;">
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
      <!-- 面包屑导航开始 -->
      <div class="layout-breadcrumb" style="margin-top: 20px;">
        <Breadcrumb>
          <Breadcrumb-item href="/home">首页</Breadcrumb-item>
          <Breadcrumb-item onclick="history.go(-1)"><a>返回上一级</a></Breadcrumb-item>
          <Breadcrumb-item>{{this.$route.params.name}}</Breadcrumb-item>
        </Breadcrumb>
      </div>
      <!-- 面包屑导航结束 -->

    

       <!-- <iframe :src="path" width="100%" style="border: none; height: 700px; margin-top: 20px;"></iframe> -->
       <h1 style="text-align:center; margin-top: 50px;">{{this.$route.params.name}}</h1>
       <div id="countryContent" v-html="text" style="width:100%;"></div>
    </div>  
  </div>
</template>

<script>



export default {
  name: 'Pdf',
  data: function () {
    return {
      path: '',
      text: '',
    }
  },
  mounted: function () {
    let _this = this;
    let routerParams = _this.$route.params.srcPath;

    //this.path = _this.global.Domain.resource + routerParams;
    _this.getApiData(_this.global.Domain.resource + routerParams);
  },
  
   methods: {
    'getApiData':function(url) {
      const _this = this;
      $.ajax({
        'url': url,
        'type': 'GET',
        'success': function(data, status){
          if(status == 'success'){
            //console.log(data);
            _this.text = data;
            setTimeout(function(){
              $('#countryContent').find('img').map(function(index,item){
                //console.log( $(item).attr('src') );
                $(item).attr('src', _this.global.normalResourceUrl('/Word/'+$(item).attr('src')));
              });
            }, 500);
          }
          else{
           
          }
        },
        'error': function(err){
         
        }
      });
    },
    getParams () {
      // 取到路由带过来的参数 
      //let routerParams = this.$route.params.srcPath
      // 将数据放在当前组件的数据内
      //this.path = routerParams;
      //console.log(routerParams)
    }
  },
  watch: {
    //'$route': 'getParams'
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

  .fontSize{
    height: 20px;
    list-style: none;
    float: right;
    li{
      float:left;
      padding: 2px 5px;
    }
  }

  .layout-breadcrumb{
    padding:10px 30px;
    background: #eee;
  }
  
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