<template>
  <div id="search" class = "SearchList">
    <div class="searchshow">"{{this.$route.params.searchkey}}"相关搜索结果如下:</div>
    <!-- <Card class = "searchresult" v-if="searchtext.Area && searchtext.Area.Content.length>0">
      <div class= "list">
        <h4>相关区域:</h4><br/><br/>
        <router-link v-for= "item in searchtext.Area.Content" :key="item._id" :to="'/country/list/'">                  
          <p>{{item.Name}}</p>
        </router-link>       
      </div>
    </Card>
    <Card class = "searchresult" v-if="searchtext.Country && searchtext.Country.Content.length>0">
      <div class= "list">
        <h4>相关国家:</h4><br/><br/>
        <router-link class="countryitem" v-for="item in searchtext.Country.Content" :key="item._id" :to="{name:'countrydetail',params:{countryid:item._id}}">
        <div class="info">
        <img class="NationalFlag" :src="global.normalResourceUrl(item.NationalFlag)" />  
          <p class = "nationalName">{{item.CNShort}}</p> 
        </div>                          
        </router-link>         
      </div>
    </Card>
    <Card class = "searchresult" v-if="searchtext.Product && searchtext.Product.Content.length>0">
      <div class= "list">
        <h4>相关产品:</h4><br/><br/>
        <router-link v-for= "item in searchtext.Product.Content"  :key="item._id" :to="{name:'productdetail',params:{imageid:item._id}}">  
          <p>{{item.Name}}</p>
        </router-link>     
      </div>
    </Card>
    <Card class = "searchresult" v-if="searchtext.Literature && searchtext.Literature.Content.length>0">
      <div class= "list">
        <h4>相关文献:</h4>
        <div class="link-more" :class="{'active':active_more}">
          <router-link class="link-info" tag="a" :to="{name:'searchdetail',params:{typetext:'Literature',searchkey:this.$route.params.searchkey}}" slot="extra">More<Icon class="icon" type="arrow-right-b" /></router-link>
        </div><br/>
        <router-link v-for="item in searchtext.Literature.Content" class="link-text" :key="item._id" :to="{name:'policydetail',params:{articleid:item._id}}">
            <p>{{item.Name}}</p>
        </router-link>            
      </div>
    </Card> -->

    <Card class = "searchresult" style="">
      <div class= "list">
        <div class="link-more" :class="{'active':active_more}">
          <router-link class="link-info" tag="a" :to="{name: 'globalsearch', params: {content: this.$route.params.searchkey} }" slot="extra">More<Icon class="icon" type="arrow-right-b" /></router-link>
        </div><br/>
        <router-link v-for="item in searchtext" class="link-text" :key="item.id" :to="{name:'literaturedetail', params:{title: item.file_name, name: item.标题, table_flag: item.table_flag}}">
            <p v-html="item.标题"></p>
            <span v-html="item.content"></span>
        </router-link>            
      </div>

    </Card>
    <Page :total="total" page-size="20" show-total @on-change="changePage"></Page>
  </div>
</template>

<script>

export default {
  name: 'SearchList',
  data:function() {
    return {
      'searchtext':{},
      // 'global':global,
      'active_more': false,
      'total': '',
      'index_start': 1,
      'page_size': 20,

    };
  },

  mounted: function () {
    //this.page_init();
    this.fullTextSearch();
  },

  methods: {
    'changePage': function(page) {
      const _this = this;
        console.log( (page*20)-20+1 );

        _this.index_start = (page*20)-20+1;
        _this.fullTextSearch();
    },
    /*'page_init': function(){
      const _this = this;
      _this.searchtext = '';
      _this.active_more = false;
      // _this.global = global;
       // 获取搜索结果
       const prommise_getSearchlist = _this.global.$post({
         '_this': _this,
         'url': _this.global.API.SearchList.SearchAll_Front,
         'data': {
           draw: 0,
           start: 0,
           length: 5,
           type:'',
           searchText : _this.$route.params.searchkey,
         },

         'f_resolve': function(data){ 
            // data.Country.Content.NationalFlag =  _this.global.normalResourceUrl(data.Country.Content.NationalFlag);  
            _this.searchtext = data;
           // console.log('@@@@@@@@@@@@@@@@@@@',data.Country.Content.NationalFlag);
           if (data.Literature.Count > 5) {
            _this.active_more = true;
           }else{
            _this.active_more = false;
           }
         }      
       });
    },*/
    fullTextSearch () {   //全文搜索文献
        const _this = this;
        _this.searchtext = '';
        _this.active_more = false;
        //document/search/fulltext
       /* const searchLiterature = _this.global.$post({
          '_this': _this,
          'url': _this.global.Domain.api1 +'/document/search/fulltext',  
          'data': {
            keyword: _this.$route.params.searchkey,
            page_size: 20,   //获取条数
            index_start: 1   //开始条数 
          },
          'f_resolve': function(data){
              console.log('@@@@@@@@@@@@', data);
               _this.searchtext = data;
               if (data.length > 5) {
                _this.active_more = true;
               }else{
                _this.active_more = false;
               }
          }
        });*/

        $.ajax({
            type: "POST",
            url: _this.global.Domain.api1 +'/document/search/fulltext',
            data: {
              keyword: _this.$route.params.searchkey,
              index_start:  _this.index_start,   //开始条数 
              page_size: _this.page_size,        //获取条数
            },
            dataType: "json",
            success: function(data){
               console.log(data);
               //let resultData = data.resultData;
               data.resultData.forEach(function(val) {

                  let s = _this.$route.params.searchkey;
                  let reg = new RegExp("(" + s + ")", "g");


                  let str = val.标题;
                  if(str){
                    let newstr = str.replace(reg, "<font color=red>"+ s +"</font>");
                    val.标题 = newstr;
                  }
                  let str1 = val.content;
                  if(str1){
                    let newstr1 = str1.replace(reg, "<font color=red>"+ s +"</font>");
                    val.content = newstr1;
                  }
                  

                  
               });
               //data.resultData = resultData;
               _this.searchtext = data.resultData; 
               _this.total = data.total;         
            }
         });

    },
  },

  watch: {
    $route: function(){
      this.fullTextSearch();
    }
  }


}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.SearchList{
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    width: 1200px;

    .searchshow{
        margin: 20px 0 10px;
        font-weight: bold;
    }
    .icon{
        margin: 0 5px;
        color: #8ec31f;
        display: inline-block;
    }
    .link-more{
        display: none;
        text-align: center;
        &.active{
            display: block;
            float:right;
        }

        .icon{
            margin-right: 5px;
        }

    }
    .nationalName{
      text-align: center;
    }
    .countryitem{
      display: inline-block;
      padding: 15px;
      width: 20%;
      border-radius: 5px;

      &:hover{
        background: @table-td-hover-bg;

        .nationalName{
          color: @title-color;
        }
      }
    }
    .info{
      height: 130px;
      width: 200px;
      border: 1px solid #eee;
    }
    .NationalFlag{
      height: 100%;
      width: 100%;
    }
    .searchresult{
        font-size: 14px;
        display: inline-block;
        text-align: left;
        vertical-align: middle;
        width: 100%;

        a{
            display: inline-block;
            padding: 2px 15px;

            p{
                
                font-weight: bold;
            }
        }
    }
    .link-text{
        display: inline-block;
        width: 100%;
        height: auto;
        margin-bottom: 15px;
        span{
          color: #999999;
          font-size: 12px;
        }
        &:hover{
            text-decoration: none;
            background: @table-td-hover-bg;
        }
    }
    .list{
        h4{ 
          color: @title-color;
          display: inline-block;
          width: 100%; 
          padding: 10px;
          border-bottom: 1px dashed @border-color-base;
        }
    }
    .search {
        text-align: right;
        margin-bottom: 14px;
        height :20px;
        padding: 0;
        }
    
    .ivu-input{
        padding: 0px 4px;
        height: auto;
    }
  
   
    .ivu-card{
        margin-bottom: 10px;
        vertical-align: middle;
        width: 100%;
    }
    .ivu-card-body{
        padding: 20px;
        vertical-align: middle;

    }

    .ivu-btn-text{
        font-size: 14px;
        color: @title-color;
    }
}
</style>