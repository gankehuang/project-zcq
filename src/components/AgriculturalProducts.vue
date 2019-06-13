<template>
  <div class="ProductList">
    <div class="container-main clearfix" style="width: 100%;">
      <!-- <div class="search">
        <input class="searchbox" placeholder="请输入..." style="width:120px" v-model.trim = "searchKey" @keyup.enter="show($event)"></input>
        <a  @click.prevent="getTitle()" slot="extra">搜索</a>
      </div> -->
      
        <ul class="infolist clearfix">

          <li class="item" v-for="item in infolist" style="height: 35px;">
            <!-- <router-link class="link-text" :key="item.Identification" :to="{name:'literaturedetailthree', params:{ articleid:item.Variety, unique_code: item.OnlyIndex}}" > -->
              <!-- <div class="productImage" v-bind:style="{background:'url('+global.normalResourceUrl(item.ImagePath, 'product')+') no-repeat center', backgroundSize:'cover'}"></div> -->
              <a @click="global.toCNKIDetail(this,item.SYS_FLD_SYSID)" target="_blank" class="link-text">
                <p class="imagename" style="font-size: 15px;">{{item.Variety}}</p>
              </a>
            <!-- </router-link> -->
          </li>
        </ul>
        <!-- <div class="load-more" :class="{'active': active_more}" style="border: 1px dashed #EAEBED; text-align: center;">
          <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>More</a>
        </div> -->
      
    </div>  
  </div>
      
</template>

<script>

  // 通过类型ID获取信息列表
  function getInfoListByClassId(_this, first){
      _this.active_more = false;
      if(first){
        _this.start = 0;
      }
      setTimeout(function(){
          const prommise_getInfoList = _this.global.$post({
            '_this': _this,
            'url': _this.global.API.HwyjManageService.GetAllData,
            'data': {
                type: 3,
                draw: 0,
                start: _this.start,
                length: _this.length,
                retrievalInfo: '{}'
            },
            'f_resolve': function(data){
              //console.log('@@@@@@@@@@@', data);
              let new_infolist = JSON.parse(data.data);

              console.log('&&&&&&&&&&', new_infolist);
              if(first){
                _this.infolist = new_infolist;
              }
              else{
                for (var i = 0; i < new_infolist.length; i++) {
                  _this.infolist.push(new_infolist[i]);          
                }
              }
              _this.start += new_infolist.length;
              if(new_infolist.length < 10){
                _this.active_more = false;
              }
              else{ 
                _this.active_more = true;
              }
            }
          });
      }, 200)
      
  }

  export default {
    name: 'AgriculturalProducts',
    data: function () {
      return {
        global: this.global,
        style_card: {
          width: '100%'
        },
        infolist: [],
        start: 0,
        length: 8,
        active_more: false
      }
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
    watch: {
      classId: function(){
        // console.log(this.classId)
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
    .container-main{
        width: 100% !important;
       
    }
  }


.ProductList{
  .infolist{
    width: 98% ;
    .item{
      
      width:100%;
      text-align: left;

      &:hover{
        .imagename{
          color: @title-color;
        }
      }
    }
    .productImage{
      width: 50%;
      height: 50px;
      text-align: center;
      border: 1px solid @border-color-split;
    }
    .imagename{
      display: block;
      color: @text-color;
    }

    .link-text{
      display: inline-block;
      width: 100%;
      padding: 10px;

      &:hover{
        text-decoration: none;
        background: @table-td-hover-bg;
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

  

  
/*
  .search {
    text-align: right;
    margin-bottom: 14px;
    height :20px;
    padding: 0;
  }
  .searchbox{
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    padding: 2px 4px;
  }
*/

  
}
</style>