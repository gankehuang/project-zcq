<template>
  
  <Card class="PolicyInfoBox" v-bind:class="{'ImgNews-l':imgNews}" :style="style" >
    <p slot="title" v-if="infoName">
      <Icon :type="iconType || 'pricetags'"></Icon>
      {{infoName}}
    </p>
    <router-link tag="a" :to="{path:moreLink, params:{name:infoName}} || '/'" slot="extra" v-if="infoName" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
    <!-- <div v-if="infoName">
      <p slot="title" class="infoname bold"><Icon class="icon" :type="iconType" />{{infoName}}</p>
      <router-link slot="extra" key="extra" to="{name:'policylist'}">More</router-link>
    </div> -->
    <div v-if="imgNews" class="ImgNews">
      <SlideshowPhoto/>
    </div>
    <ul class="infolist" style="padding-left:25px;">
      <li class="item" v-for="item in infolist">
        <router-link target="_blank" class="link-text" :key="item._id" :to="{name:'policydetailwithtype', params:{typeid:type, articleid:item.Id, name:item.Name}}">
          <!-- <Icon class="icon" type="arrow-right-a" /> -->
          <h3 class="title text-nowrap"><span v-html="item.Name"></span><span class="time">{{ item.CreateDate }}</span></h3>       
          <!-- <p class="digest text-nowrap">{{ item.recommend || item.Name }}</p> -->
        </router-link>
      </li>
    </ul>
    <div class="load-more" :class="{'active': active_more}">
      <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
    </div>
  </Card>
</template>

<script>
import SlideshowPhoto from '@/components/SlideshowPhoto'   //引入轮播图组件

// 通过类型ID获取信息列表
function getInfoListByClassId(_this, first){
    //_this.$Spin.show();  //显示加载中...
    _this.active_more = true;
    if(first){
      _this.start = 0;
    }
    const prommise_getInfoList = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.Literature.getListByPage,
      'data': {
        draw: 0,
        start: _this.start,
        length: _this.length,
        //lid: _this.classId,
        retrievalInfo: JSON.stringify({'type': _this.classId=='' ? '': _this.type , 'literatureName': _this.searchkey ? _this.searchkey : '', 'xgxw': 1}),
        //classifyID: _this.classId,
        //type: _this.classId=='' ? _this.type: '',
        //searchName: _this.searchkey ? _this.searchkey : ''
        //searchText: _this.searchkey ? _this.searchkey : ''
      },
      'f_resolve': function(data){
        console.log(data.data);
        let infolist = JSON.parse(data.data);

        for(let i=0; i<infolist.length; i++) {
            let date = infolist[i].CreateDate.split(" ")[0];
            infolist[i].CreateDate = date;
            let str = infolist[i].Name.substring(infolist[i].Name.length-4);

            //str.substring(str.length-4);
            //console.log('*********', str);
            let reg = new RegExp("(" + str + ")", "g");

            if(str == '（EN）'){
                let newstr = infolist[i].Name.replace(reg, "<i style='color: #026EB8; -webkit-transform: scale(0.40);-webkit-transform-origin:0 0; -webkit-text-size-adjust:none;font-size:10px'>"+ str +"</i>");
                infolist[i].Name = newstr;
            }
            
        }

        console.log(infolist);
        //_this.start += infolist.length;
        _this.infolist = infolist;

        /*if(first){
          _this.infolist = infolist;
        }
        else{
          infolist.map(function(item, index){
            _this.infolist.push(item);
          });
        }*/
      
       /* if(infolist.length < 9){
          _this.active_more = false;
        }
        else{
          _this.active_more = true;
        }*/
        //_this.$Spin.hide();  //隐藏加载中...
      }
    });
}

export default {
  name: 'NewInfoBox',
  components: {
    SlideshowPhoto: SlideshowPhoto,
  },
  data: function () {
    return {
      infolist: [],
      start: 0,
      lengthMore: '',
      active_more: false,
      more: 'More',
      style: { 
        height: '360px',
        overflow:'hidden',
        width: '100%' 
      }
      
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
    getInfoListByClassId(this,true);
  },
  methods: {
    getMoreInfo: function(){
      this.style.height = 'auto';
      console.log(this.lengthMore);
      //this.length = parseInt(this.length) + 100;
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


.PolicyInfoBox{
  background: white;
  display: inline-block;

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
  .infolist{
    .item{
      position: relative;
      height: 20px;
      width:100%;
      display: inline-block;
      *{
        line-height: 1.7;
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
