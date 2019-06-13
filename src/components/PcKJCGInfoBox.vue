<template>
  
  <!-- <Card class="PolicyInfoBox9" v-bind:style="style_card" v-bind:class="{'ImgNews-l':imgNews}" >
    <p slot="title"><Icon :type="iconType || 'pricetags'"></Icon>科技成果</p>
    <router-link tag="a" :to="moreLink || '/'" slot="extra" v-if="infoName" class="link-more">More<Icon class="icon" type="arrow-right-b"></Icon></router-link>
    <div v-if="infoName">
      <p slot="title" class="infoname bold"><Icon class="icon" :type="iconType" />{{infoName}}</p>
      <router-link slot="extra" key="extra" to="{name:'policylist'}">More</router-link>
    </div>
    <ul class="infolist4" style="margin-top: -15px;">
      <li class="item" v-for="item in infolist">
        <router-link class="link-text" :key="item.Id" :to="{name:'pcalldetail', params:{typeid:type, articleid:item.Id}}">
        <router-link class="link-text" :key="item.Id" :to="{name:'literaturedetailthree', params:{ articleid:item.Title, unique_code: item.OnlyIndex}}">
          <Icon class="icon" type="arrow-right-a" />
          <h3 class="title text-nowrap">{{ item.Title }}<span class="time">{{ item.Author }}</span></h3>          
          <p class="digest text-nowrap">{{ item.Sources || item.Name }}</p>
        </router-link>
      </li>
    </ul>
    <div class="load-more" :class="{'active': active_more}">
      <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>More</a>
    </div>
  </Card> -->
  

  <div class="PolicyMain containermain" style="width:63%; margin:25px auto;">
    <div class="search" style="text-align:right">
        <input class="searchbox" placeholder="请输入..." style="width:120px;"></input>
        <!-- <router-link tag="a" :to="{name:'searchlist', params:{typeid:1}}" slot="extra">搜索</router-link> -->
        <a slot="extra" style="">搜索</a>
    </div>
    <div class="info-box9 second">
      <Card class="card" :style="style_card">
            <ul class="infolist9">
              <li class="item" v-for="(item, index) in product" style="padding: 5px 10px">
                <router-link class="link-text" :key="index" :to="{name:'pcdetail', params:{ typeid: index+1}}">
                  <b class="title text-nowrap" style="font-size: 14px; color:black;">{{item}}</b>
                  <!-- <p class="digest">{{item.Zhaiyao}}</p> -->
                </router-link>
              </li>
            </ul>
            <div class="load-more" :class="{'active': active_more}">
              <a v-on:click="getMoreInfo()"><Icon class="icon" type="arrow-down-b"></Icon>{{more}}</a>
            </div>
      </Card>
    </div>
  </div>


</template>

<script>


export default {
  name: 'PcKJCGInfoBox',
  data: function () {
    return {
      product: ['禽流感高效疫苗成果获国际转化', '绿色超级稻”在第三世界', '微生物蛋白质新农药“阿泰灵”走向海外市场', '植物保护研究所引领国际生物入侵研究'],
      searchKey: '',
      more: 'More',
      style_card: {
          'height':'350px', 
          'margin-top': '10px', 
          'margin-left':'10px'
      },
      active_more: true
    }
  },
  mounted: function(){
    
  },
  methods: {
    getMoreInfo: function(){

      this.style_card.height = 'auto';
      if( this.more == 'More'  ){
          this.more = '收起';
      } else{
          this.more = 'More';
      }
    }
  },
   watch: {
    
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

.infolist9{
    .item{
      &:hover{
          background: #EBF7FF;
          text-decoration: none;
      }
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

.PolicyInfoBox9{
  background: white;
  display: inline-block;
  height: 350px;
  margin-top: 10px;

  .search {
      text-align: right;
      margin-right: 20px;
      margin-bottom: 14px;
      height :20px;
      padding: 0;
  }


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
