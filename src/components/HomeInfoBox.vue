<template>
  <Card class="HomeInfoBox" :class="{'ImgNews-l': imgNews}" v-bind:style="style_card">
    <p slot="title">
      <Icon :type="iconType || 'pricetags'"></Icon>
      {{infoName}}
    </p>
    <router-link tag="a" :to="moreLink || '/'" slot="extra">More</router-link>
    <img v-if="imgNews" :src="imgNews" class="ImgNews" />
    <ul class="infolist">
      <li class="item" v-for="item in option.infolist">
        <a class="link-text" :href="item.url" target="_blank">
          <Icon class="icon" type="arrow-right-a" />
          <h3 class="title">{{ item.title }}</h3>
          <p class="digest">{{ item.digest }}</p>
        </a>
      </li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: 'HomeInfoBox',
  data: function () {
    return {
      style_card: {
        width: '100%'
      }
    }
  },
  props: {
    iconType: String,
    infoName: String,
    moreLink: String,
    imgNews: String,
    option: {
      infolist: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/common.less';

.HomeInfoBox{
  display: inline-block;

  .ivu-card-head{
    .ivu-icon{
      margin-right: 5px;
      font-size: 20px;
      vertical-align: middle;
    }
  }

  .infolist{
    .item{
      position: relative;
      margin: 5px 0;

      .icon{
        margin-right: 5px;
        color: @title-color;
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

  .title{
    display: inline-block;
    color: @text-color;
  }

  .digest{
    font-size: 12px;
    color: @text-light-color;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.ImgNews-l{
    .ImgNews{
      width: 33%;
    }

    .infolist{
      float: right;
      display: inline-block;
      width: 65%;
      vertical-align: middle;
    }
  }
}
</style>
