<template>
  
  <Card class="PolicyInfoBox9" v-bind:style="style_card" v-bind:class="{'ImgNews-l':imgNews}" >
    <p slot="title" v-if="infoName"><Icon :type="iconType || 'pricetags'"></Icon>{{infoName}}</p>
    <router-link tag="a" :to="moreLink || '/'" slot="extra" v-if="infoName" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
    <!-- <div v-if="infoName">
      <p slot="title" class="infoname bold"><Icon class="icon" :type="iconType" />{{infoName}}</p>
      <router-link slot="extra" key="extra" to="{name:'policylist'}">More</router-link>
    </div> -->
    <ul class="infolist4" style="margin-top: -15px;">
      <li class="item" v-for="item in infolist">
        <!-- <router-link class="link-text" :key="item.Id" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}"> -->
          <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" target="_blank" class="link-text"><h3 class="title text-nowrap">{{ item.Title }}<span class="time">{{ item.Author }}</span></h3> </a>          
          <!-- <p class="digest text-nowrap">{{ item.Sources || item.Name }}</p> -->
        <!-- </router-link> -->
      </li>
    </ul>
    <div class="load-more" :class="{'active': active_more}">
      <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
    </div>
  </Card>
</template>

<script>

// 通过类型ID获取信息列表
function getInfoListByClassId(_this,first){
    
    //_this.active_more = false;
    
    
    if(first){
      _this.start = 0;
    }

    _this.$Spin.show();  //显示加载中...
    const prommise_getInfoList = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.FCManageService.GetAllForeignCooperation,
      'data': {
        draw: 0,
        start: 0,
        length: _this.length,
        retrievalInfo: JSON.stringify({'Type': _this.type, 'searchText': _this.searchkey ? _this.searchkey : ''}),
        //lid: _this.classId,
        //classifyID: _this.classId,
        //type: _this.classId=='' ? _this.type: '',
        //searchName: _this.searchkey ? _this.searchkey : ''
        //searchText: _this.searchkey ? _this.searchkey : ''
      },
      'f_resolve': function(data){
        _this.$Spin.hide();  //隐藏加载中...
        //console.log(data);
        if(_this.searchkey){
            _this.$Message.success('检索完成，共'+ data.recordsTotal + '条' );
        }

        let infolist = JSON.parse(data.data);

        console.log('9999999999', infolist);
        _this.infolist = infolist;


        /*_this.start += infolist.length;

        if(first){
          _this.infolist = infolist;
        }
        else{
          infolist.map(function(item, index){
            _this.infolist.push(item);
          });
        }
      
        if(infolist.length < 9){
          _this.active_more = false;
        }
        else{
          _this.active_more = true;
        }*/
      }
    });
}

export default {
  name: 'PcInfoBox',
  data: function () {
    return {
      style_card: {
        width: '100%',
        height: '350px'
      },
      infolist: [],
      start: 0,
      active_more: true,

      more: 'More',
      lengthMore: ''
    }
  },
  props: {
    iconType: String,
    infoName: String,
    classId: String,
    searchkey:String,
    moreLink: String,
    imgNews: String,
    type: String,
    length: String 
  },
  mounted: function(){
    this.lengthMore = this.length;
    this.start = 0; 
    //获取文献跳转链接
    
    getInfoListByClassId(this,true);
  },
  methods: {
    getMoreInfo: function(){
      //this.style_card.height = 'auto';
      //this.length += 100;
      //getInfoListByClassId(this,false);

      this.style_card.height = 'auto';
      if( this.more == 'More'  ){
          this.more = '收起';
          this.length = 1000;
      } else{
          this.more = 'More';
          this.start = 0;
          this.length = this.lengthMore;
      }
      getInfoListByClassId(this,false);
    }
  },
   watch: {
    type: function(){
      getInfoListByClassId(this, true);   
    },
    classId: function(){
      getInfoListByClassId(this, true);   
    },
    searchkey:function(){
      getInfoListByClassId(this, true);
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';


@media only screen and (max-width: 800px) {
  
  &.ImgNews-l{
    .ImgNews{
      width: 0% !important;
      display: none !important;
    }
    .infolist{
      display: inline-block;
      width: 100% !important;
      vertical-align: middle;
    }
  }
}


.PolicyInfoBox9{
  background: white;
  display: inline-block;
  overflow: hidden;
  
  margin-top: 10px;

  .ivu-card-head{
    .ivu-icon{
      margin-right: 5px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  .infoname{
    font-size: 16px;
    color: @title-color;

    .icon{
      margin: 0 5px 0 0;
    }
  }
  .link-more{
    .icon{
      margin-left: 5px;
    }
  }
  .infolist4{
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

  .link-text{
    display: inline-block;
    padding: 7px 15px;
    width: 100%;

    &:hover{
      text-decoration: none;
      background: @table-td-hover-bg;
    }
  }

  &.ImgNews-l{
    .ImgNews{
      width: 50%;
      height: 330px;
      display: inline-block;
      /*margin: 10px 0 0 10px;*/
    }

    .infolist{
      float: right;
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }
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
}
</style>
