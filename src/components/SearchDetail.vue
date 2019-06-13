<template>
  <div class = "SearchDetail">
  <div class = "goback" onclick="history.go(-1)"><a><Icon class = "backicon" type="chevron-left"></Icon>返回搜索列表页</a></div>
  <div class="searchshow">"{{this.$route.params.searchkey}}"相关文献搜索结果如下:</div>
    <Card class = "infolist">
      <router-link v-for="item in infolist" class="link-text" :key="item._id" :to="{name:'policydetail',params:{articleid:item._id}}">   
        <h4 class="textname">{{item.Name}}</h4>
        <p class="contenttext">{{item.ContentText}}</p>
      </router-link>
      <div class="load-more" :class="{'active': active_more}">
        <a v-on:click="getMoreInfo()">More</a>
      </div>            
    </Card>
  </div>
</template>


<script>
function getInfoListByClassId(_this,first){
    _this.active_more = false;
    if(first){
      _this.start = 0;
    }
    const prommise_getInfoList = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.SearchList.SearchAll_Front,
      'data': {
        draw: 0,
        start: _this.start,
        length: 10,
        type:_this.$route.params.typetext,
        searchText : _this.$route.params.searchkey,
      },
      'f_resolve': function(data){
        let infolist = JSON.parse(data.data);
        _this.start += infolist.length;

        if(first){
          _this.infolist = infolist;
        }
        else{
          infolist.map(function(item, index){
            _this.infolist.push(item);
          });
        }
      
        if(infolist.length < 10){
          _this.active_more = false;
        }
        else{
          _this.active_more = true;
        }
      }
    });
} 


export default {
  name: 'SearchDetail',
  data:function() {
    return {
      infolist: [],
      start: 0,
      active_more: false
    };
  },

  mounted: function(){
    this.start = 0;
    getInfoListByClassId(this, true);
  },
  methods: {
    getMoreInfo: function(){
      getInfoListByClassId(this, false);
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.SearchDetail{
  height: auto;
  overflow: hidden;
  padding: 6px;
  margin: 0 auto;
  width: 1200px;
.infolist{
	padding:10px 20px;
}
.searchshow{
    margin: 20px 0 10px;
  }
.textname{
	color: #000;
}
.goback{
	margin-top: 20px;
	margin-bottom: 0;
}
.contenttext{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color:#999;
  }
 .backicon{
 	margin-right: 4px;
 	display: inline-block;
 } 
  .load-more{
    display: none;
    margin-top: 15px;
    padding-top: 15px;
    text-align: center;
    border-top: 1px dashed @border-color-base;

    &.active{
      display: block;
    }

    .icon{
      margin-right: 5px;
    }
  }
  .link-text{
    display: inline-block;
    width: 100%;
    padding: 10px;
    margin-top: 10px;

    &:hover{
        text-decoration: none;
        background: @table-td-hover-bg;
    }
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
      padding: 20px 10px;
      vertical-align: middle;

    }

    .ivu-btn-text{
      font-size: 14px;
      color: @title-color;
    }
}
</style>