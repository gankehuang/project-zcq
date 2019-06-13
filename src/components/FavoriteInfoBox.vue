<template>
  <div class="FavoriteInfoBox">
      <ul class="favorite">
          <li class="liked clearfix" @click = "dian(1)">
            <Icon v-bind:class="{active:actived_like}" type="thumbsup"></Icon><br>
            <span class="item">点赞</span>
          </li>
          <li class="collected clearfix" @click = "dian(0)">
            <Icon v-bind:class="{active:actived_collect}" type="ios-star"></Icon><br>
            <span class="item">收藏</span>
          </li>
      </ul>    
  </div>
</template>

<script>




export default {
  name: 'FavoriteInfoBox',
  
  data: function () {
    return { 
      actived_like: false,
      actived_collect: false
    }
  },
  props: {
    iconType: String,
    infoName: String,
    classId: String,
    moreLink: String,
    imgNews: String,
    type: String
  },
  mounted: function(){
    const _this = this;
  
    // 获取文章是否收藏点赞
    const prommise_getMessage = _this.global.$post({
      '_this': _this,
      'url': _this.global.API.MyFavorites.IsMyFavorites,
      'data': {
        favoritesID:_this.classId,
        type: _this.type
      },

      'f_resolve': function(data){
        _this.message = data;
        // console.log('@@@@@@@@@@@@@@@@@@@',data);
        if (data.Favority==true) {
          _this.actived_like = true;
        }else{
          _this.actived_like = false;
        };
        if (data.Likes==true) {
          _this.actived_collect = true;
        }else{
          _this.actived_collect = false;
        };
      
      }
    });
  },
  methods: {
    //点击添加收藏和点赞
    'dian': function (flag){
      const _this = this;
      const prommise_getInfoList = _this.global.$post({
        '_this': _this,
        'url': _this.global.API.MyFavorites.AddToMyFavorites,
        'data': {
          flag:flag,
          favoritesID:_this.classId,
          type: _this.type

        },
        'f_resolve': function(data){
          switch(flag){
            case 1:
            _this.actived_like = !_this.actived_like;
            break;
            case 0:
            _this.actived_collect = !_this.actived_collect;
            break;
          }
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.FavoriteInfoBox{
   .favorite{
    display: inline-block;
    position: relative;
    color: gray;
    .item{
      font-size: 12px;
    }
    .liked{
      float: left;
      display: inline-block;
      margin-right: 14px;
      line-height: 10px;
      cursor:pointer;
    }

    .collected{
      display: inline-block;
      float: left;
      margin-right: 14px;
      line-height: 10px;
      cursor:pointer;
    }
   }
   .active{
    color: #8ec31f;
   }  
   
}
</style>
