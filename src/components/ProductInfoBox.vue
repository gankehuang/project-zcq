<template>
  <Card class="ProductInfoBox" v-bind:style="style_card">
    <p slot="title" class="classname">
      {{infoName}}
    </p>
    <ul class="infolist clearfix">
      <li class="item" v-for="item in infolist">
        <router-link class="link-text" :key="item.Id" :to="{name:'productdetail', params:{imageid:item.Id}}">
          <div class="productImage" v-bind:style="{background:'url('+global.normalResourceUrl(item.ImagePath[0], 'product')+') no-repeat center', backgroundSize:'cover'}"></div>
          <span class="imagename">{{item.Name}}</span>
        </router-link>
      </li>
    </ul>
    <div class="load-more" :class="{'active': active_more}">
      <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>More</a>
    </div>
  </Card>
</template>

<script>
// 通过类型ID获取信息列表
function getInfoListByClassId(_this, first){
    _this.active_more = false;
    if(first){
      _this.start = 0;
    }
    //console.log('##########', _this);
    let info;
    if(_this.classId){
      info = {'ClassifyId': _this.classId}
    }else {
       info = {};
    }

    setTimeout(function(){
        const prommise_getInfoList = _this.global.$post({
          '_this': _this,
          'url': _this.global.API.Product.GetAllProduct,
          'data': {
            draw: 0,
            start: _this.start,
            length: _this.length,
            //classifyID: _this.classId,
            retrievalInfo: JSON.stringify(info)
            //searchText: _this.searchkey ? _this.searchkey : ''
          },
          'f_resolve': function(data){
            let new_infolist = JSON.parse(data.data);
            //console.log(new_infolist);
            new_infolist.forEach(function(val) {
                let image = val.ImagePath.split(",");
                for(let i=0; i<image.length; i++) {
                  if(image[i]){
                      image[i] = _this.global.normalResourceUrl(image[i]);
                  }
                  
                }
                val.ImagePath = image;
            })
            console.log(new_infolist);

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
    }, 100)
    
}

export default {
  name: 'ProductInfoBox',
  data: function () {
    return {
      global: this.global,
      style_card: {
        width: '100%'
      },
      infolist: [],
      start: 0,
      length: 10,
      active_more: false
    }
  },
  props: {
    iconType: String,
    infoName: String,
    classId: String,
    moreLink: String,
    searchkey: String,
    imgNews: String
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
  .item{
    width: 100% !important;
  }
}

.ProductInfoBox{
  display: inline-block;
  width: 100% !important;
  .classname{
    text-align: center;
    color: @text-color;
  }

  .infolist{
      position: relative;
      width: 100%;
    .item{
      display: inline-block;
      float: left;
      width:20%;
      margin: 10px 0 0;
      text-align: center;

      &:hover{
        .imagename{
          color: @title-color;
        }
      }
    }
    .productImage{
      width: 100%;
      height: 150px;
      text-align: center;
      border: 1px solid @border-color-split;
    }
    .imagename{
      display: block;
      margin-top: 10px;
      color: @text-color;
    }
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
</style>
